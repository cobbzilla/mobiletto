// To run the tests, you need a .env file one level above this directory
// that contains env vars for all the process.env stuff in DRIVER_CONFIG below
require('dotenv').config()

const randomstring = require('randomstring')

const { expect, should, assert } = require('chai')

const { mobiletto, connect, MobilettoNotFoundError, M_FILE, M_DIR } = require("../index")
const { encrypt, decrypt, normalizeKey, normalizeIV, DEFAULT_CRYPT_ALGO } = require("../util/crypt")

// chunk size used by generator function, used by driver's 'write' function
// the temp file is also TEMP_SZ_MULTIPLE of this number
const READ_SZ = 8 * 1024   // xfer data in 8k chunks
const TEMP_SZ_MULTIPLE = 3 // temp file will be ~24k (READ_SZ * 3)

// encoded bytes written will differ from actual bytes provided
// likewise, plaintext bytes read will differ from encoded bytes read
// our tests give some leeway when filesize differences
const ENC_SIZE_CLOSE_ENOUGH_PERCENT = 0.10

DRIVER_CONFIG = {
    local: {
        key: process.env.LOCAL_STORAGE || '/tmp'
    },
    s3: {
        key: process.env.S3_ACCESS,
        secret: process.env.S3_SECRET,
        opts: {
            bucket: process.env.S3_BUCKET,
            prefix: process.env.S3_PREFIX,
            region: process.env.S3_REGION
        }
    }
}

function closeEnough (expected, actual, percent = ENC_SIZE_CLOSE_ENOUGH_PERCENT) {
    expect(Math.abs(expected - actual)).to.be.lessThan(Math.floor(expected * percent),
        'expected size within 5% of actual (due to encryption)')
}

async function assertMeta (api, name, expectedSize, closeEnoughPercent = null) {
    const meta = await api.metadata(name)
    should().exist(meta, 'expected return value from metadata call')
    expect(meta.name).equals(name, 'expected name of written file to be correct')
    if (closeEnoughPercent) {
        closeEnough(expectedSize, meta.size, closeEnoughPercent)
    } else {
        expect(meta.size).equals(expectedSize, 'expected size of written file to equal size of randomData')
    }
}

async function assertMetaFail (api, name) {
    try {
        const meta = await api.metadata(name)
        assert.fail(`loading metadata after deletion, did not expect to get meta: ${meta ? JSON.stringify(meta) : 'null or undefined'}`)
    } catch (err) {
        if (!(err instanceof MobilettoNotFoundError)) {
            // MobilettoNotFoundError is expected
            assert.fail(`loading metadata after deletion, got err: ${err}`)
        }
    }
}

const rand = count => randomstring.generate(count)

async function writeRandomFile(fixture, size) {
    const data = fixture.randomData
    function* dataGenerator() {
        // read in 8k chunks
        for (let i = 0; i < data.length; i += size) {
            const end = (i + size) > data.length ? data.length : (i + size)
            yield data.slice(i, end)
        }
    }
    return await fixture.api.write(fixture.name, dataGenerator())
}

describe('crypto test', () => {
    it("should encrypt and decrypt successfully", async () => {
        const enc = {
            key: normalizeKey(randomstring.generate(32)),
            iv: normalizeIV(randomstring.generate(16)),
            algo: DEFAULT_CRYPT_ALGO
        }
        const plaintext = randomstring.generate(1024 + Math.floor(1024*Math.random()))
        const ciphertext = encrypt(plaintext, enc)
        const decrypted = decrypt(ciphertext, enc)
        expect(decrypted).to.equal(plaintext, 'decrypted data did not match plaintext')
    })

})

const ENC_TESTS = [null, {key: rand(32)}]

// To test a single driver:
//  - Uncomment one of the lines below to set driverName to the one you want to test
//  - Comment out the next `for` line, and its closing curly brace (just before EOF)

// const driverName = 'local'
// const driverName = 's3'

// When you're NOT testing a single driver, it's important that *all* tests remain
// within the singular 'for' loop below. This ensures that all drivers pass exactly
// the same set of tests, with exactly the same inputs/outputs.
// This greatly supports developer sanity

for (const driverName of Object.keys(DRIVER_CONFIG)) {
    const config = DRIVER_CONFIG[driverName]
    const nonexistentFile = 'random_file_that_does_not_exist_' + rand(100) + '_' + Date.now()
    const tempFilename = (name, i) => name + (i > 0 ? '_' + i : '')
    describe(`${driverName} test`, () => {
        describe(`${driverName} - create api client`, () => {
            it("should validate the config and return an API object", async () => {
                const api = await mobiletto(driverName, config.key, config.secret, config.opts)
                should().exist(api, 'expected API object to exist')
            })
        })

        describe(`${driverName} - listing with no arguments returns some results`, () => {
            it("should return some results from a default listing", async () => {
                const api = await mobiletto(driverName, config.key, config.secret, config.opts)
                const results = await api.list()
                expect(results).to.have.lengthOf.greaterThan(0, 'expected some results in the default listing')
            })
        })

        describe(`${driverName} - write a file, read file, read metadata, delete file`, () => {
            // some random data, plus a bit extra
            const size = (READ_SZ * TEMP_SZ_MULTIPLE) + Math.floor(Math.random() * (READ_SZ/2))
            const randomData = rand(size)
            const fileSuffix = '' + Date.now()
            let fixture
            beforeEach((done) => {
                const name = `test_file_${fileSuffix}`
                connect(driverName, config.key, config.secret, config.opts)
                    .then(api => { fixture = {api, name, randomData} })
                    .finally(done)
            })
            it("should write a file", async () => {
                const response = await writeRandomFile(fixture, size)
                expect(response).to.equal(size, 'expected write API to return correct number of bytes written')
            })
            it("should read the file we just wrote", async () => {
                const data = await fixture.api.readFile(fixture.name);
                expect(data.length).is.equal(size, 'expected read API to return correct number of bytes read')
                expect(data.toString('utf8')).to.equal(fixture.randomData, 'expected to read back the same data we wrote')
            })
            it("should load metadata on the file we just wrote", async () => {
                await assertMeta (fixture.api, fixture.name, fixture.randomData.length)
            })
            it("should delete the file we just wrote", async () => {
                const removed = await fixture.api.remove(fixture.name)
                expect(removed).to.be.true
            })
            it("loading metadata on the file we wrote now fails", async () => {
                await assertMetaFail(fixture.api, fixture.name)
            })
        })

        for (const encryption of ENC_TESTS) {
            const encDesc = encryption ? '(with encryption)' : '(without encryption)'
            describe(`${driverName} - ${encDesc} fail to write and delete files in readOnly mode`, () => {
                // some random data, plus a bit extra
                const size = 16
                const randomData = rand(size)
                const fileSuffix = '' + Date.now()
                const encryption = {key: rand(32)}
                let fixture
                beforeEach((done) => {
                    const name = `test_file_${fileSuffix}`
                    const opts = Object.assign({}, config.opts, {readOnly: true})
                    connect(driverName, config.key, config.secret, opts, encryption)
                        .then(api => { fixture = {api, name, randomData} })
                        .catch(err => { throw err })
                        .finally(done)
                })
                it("should try to write a file and fail", async () => {
                    const response = await writeRandomFile(fixture, size)
                    expect(response).to.be.false
                })
                it("should fail to read the file we did not write", async () => {
                    try {
                        await fixture.api.readFile(fixture.name)
                        assert.fail('should not have been able to read non-existent file that we did not write')
                    } catch (e) {
                        if (!(e instanceof MobilettoNotFoundError)) {
                            assert.fail(`unexpected error: ${e} trying to read non-existent file`)
                        }
                    }
                })
                it("should fail to load metadata on the file we did not write", async () => {
                    try {
                        await assertMeta(fixture.api, fixture.name, fixture.randomData.length)
                        assert.fail('should not have been able to read metadata for non-existent file that we did not write')
                    } catch (e) {
                        if (!(e instanceof MobilettoNotFoundError)) {
                            assert.fail(`unexpected error: ${e} trying to read metadata on non-existent file`)
                        }
                    }
                })
                it("should fail to delete the file we did not write", async () => {
                    const removed = await fixture.api.remove(fixture.name)
                    expect(removed).to.be.false
                })
            })
        }

        describe(`${driverName} - write an encrypted file, read file, read metadata, delete file`, () => {
            // some random data, plus a bit extra
            const size = (READ_SZ * TEMP_SZ_MULTIPLE) + Math.floor(Math.random() * (READ_SZ/2))
            const randomData = rand(size)
            const fileSuffix = '' + Date.now()
            const encryptionKey = rand(32)
            let encryptedByteCount = null
            let fixture
            beforeEach((done) => {
                const name = `test_file_${fileSuffix}`
                mobiletto(driverName, config.key, config.secret, config.opts, {key: encryptionKey})
                    .then(api => { fixture = {api, name, randomData} })
                    .catch((err) => { throw err })
                    .finally(done)
            })
            it("should write an encrypted file", async () => {
                encryptedByteCount = await writeRandomFile(fixture, size);
                closeEnough(size, encryptedByteCount)
            })
            it("should read the encrypted file we just wrote", async () => {
                const data = await fixture.api.readFile(fixture.name);
                expect(data.length).is.equal(size, 'expected read API to return correct number of bytes read')
                expect(data.toString()).to.equal(fixture.randomData, 'expected to read back the same data we wrote')
            })
            it("should load metadata on the encrypted file we just wrote", async () => {
                await assertMeta(fixture.api, fixture.name, fixture.randomData.length, ENC_SIZE_CLOSE_ENOUGH_PERCENT)
            })
            it("should delete the encrypted file we just wrote", async () => {
                const removed = await fixture.api.remove(fixture.name)
                expect(removed).to.be.true
            })
            it("loading metadata on the encrypted file we wrote now fails", async () => {
                await assertMetaFail(fixture.api, fixture.name)
            })
        })

        for (const encryption of ENC_TESTS) {
            const encDesc = encryption ? '(with encryption)' : '(without encryption)'
            describe(`${driverName} - ${encDesc} write files in a new dir, read metadata, recursively delete`, () => {
            // describe(`${driverName} - ENCRYPTION write files in a new dir, read metadata, recursively delete`, () => {
                // const encryption = {key: rand(32)}
                // const encryption = null
                // a random directory and file within it
                const randomParent = `testRPD_${rand(2)}/rand_${rand(4)}`
                const subdirName = `subdir_` + Date.now()
                const randomPath = `${randomParent}/${subdirName}/random_file_${Date.now()}`
                //const fileCount = 3 + Math.floor(Math.random() * 10)
                const fileCount = 2
                let fixture
                beforeEach((done) => {
                    mobiletto(driverName, config.key, config.secret, config.opts, encryption)
                        .then(api => { fixture = {api, name: randomPath} })
                        .catch((err) => { throw err })
                        .finally(done)
                })
                it(`should write ${fileCount} files in a new directory`, async () => {
                    function* dataGenerator() {
                        // return one chunk of random data
                        yield rand(READ_SZ)
                    }

                    for (let i = 0; i < fileCount; i++) {
                        const bytesWritten = await fixture.api.write(tempFilename(fixture.name, i), dataGenerator())
                        if (encryption) {
                            closeEnough(READ_SZ, bytesWritten)
                        } else {
                            expect(bytesWritten).to.equal(READ_SZ, 'expected write API to return correct number of bytes written')
                        }
                    }
                })
                it("should load metadata for one of the new files", async () => {
                    await assertMeta(fixture.api, fixture.name, READ_SZ, encryption ? ENC_SIZE_CLOSE_ENOUGH_PERCENT : null)
                })
                it("should see correct types on objects returned from a listing of the new directory", async () => {
                    const objects = await fixture.api.list(randomParent)
                    expect(objects).to.have.lengthOf(1)
                    expect(objects[0]).to.have.property('type', M_DIR, `subdir should have type ${M_DIR}`)
                })
                it("should see correct types on objects returned from a listing of the subdirectory", async () => {
                    const objects = await fixture.api.list(`${randomParent}/${subdirName}`)
                    expect(objects).to.have.lengthOf(fileCount)
                    for (let i = 0; i < fileCount; i++) {
                        // we should find all the files, and they should all have the correct type
                        expect(objects
                            .find(o => (o.type === M_FILE && o.name === tempFilename(fixture.name, i)))
                        ).to.not.be.null
                    }
                })
                it("should recursively delete the directory and file we just created", async () => {
                    const recursive = true
                    const removed = await fixture.api.remove(randomParent, {recursive})
                    expect(removed).to.be.true
                })
                it("loading metadata on the file we wrote now fails", async () => {
                    await assertMetaFail(fixture.api, fixture.name)
                })
                it("loading metadata on the parent dir we wrote now fails", async () => {
                    await assertMetaFail(fixture.api, randomParent)
                })
            })
        }

        describe(`${driverName} - expect MobilettoNotFoundError when reading nonexistent file `, () => {
            it("should throw MobilettoNotFoundError when trying to read a file that does not exist", async () => {
                const api = await mobiletto(driverName, config.key, config.secret, config.opts)
                try {
                    await api.read(nonexistentFile, () => {
                        assert.fail(`ERROR: reading non-existent file should NOT succeed`)
                    })
                } catch (err) {
                    expect(err).to.be.instanceof(MobilettoNotFoundError, `expected MobilettoNotFoundError, got: ${err}`)
                }
            })
        })

        describe(`${driverName} - expect MobilettoNotFoundError when reading metadata for nonexistent file`, () => {
            it("should throw MobilettoNotFoundError when trying to read metadata for a file that does not exist", async () => {
                const api = await mobiletto(driverName, config.key, config.secret, config.opts)
                try {
                    const meta = await api.metadata(nonexistentFile)
                    assert.fail(`ERROR: reading metadata for non-existent file should NOT succeed, but it returned ${meta ? JSON.stringify(meta) : 'null or undefined'}`)
                } catch (err) {
                    expect(err).to.be.instanceof(MobilettoNotFoundError, `expected MobilettoNotFoundError, got: ${err}`)
                }
            })
        })

        describe(`${driverName} - expect MobilettoNotFoundError when removing non-existent file`, () => {
            it("should throw MobilettoNotFoundError when trying to remove a file that does not exist", async () => {
                const api = await mobiletto(driverName, config.key, config.secret, config.opts)
                try {
                    if (await api.remove(nonexistentFile)) {
                        assert.fail('ERROR: removing non-existent file should NOT succeed')
                    }
                } catch (err) {
                    expect(err).to.be.instanceof(MobilettoNotFoundError, `expected MobilettoNotFoundError, got: ${err}`)
                }
            })
        })

        describe(`${driverName} - quietly removing non-existent file does not throw MobilettoNotFoundError`, () => {
            it("should NOT throw MobilettoNotFoundError when quietly removing a file that does not exist", async () => {
                const api = await mobiletto(driverName, config.key, config.secret, config.opts)
                if (!(await api.remove(nonexistentFile, {quiet: true}))) {
                    assert.fail('ERROR: quietly removing non-existent file should still return true')
                }
            })
        })
    })
}
