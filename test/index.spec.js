// To run the tests, you need a .env file one level above this directory
// that contains env vars for all the process.env stuff in DRIVER_CONFIG below
require('dotenv').config();

const randomstring = require('randomstring')

const { expect, should, assert } = require('chai')

const { mobiletto } = require('../index.js')
const {MobilettoNotFoundError, M_FILE, M_DIR} = require("../index");

// chunk size used by generator function, used by driver's 'write' function
// the temp file is also TEMP_SZ_MULTIPLE of this number
const READ_SZ = 8 * 1024   // xfer data in 8k chunks
const TEMP_SZ_MULTIPLE = 3 // temp file will be ~24k (READ_SZ * 3)

DRIVER_CONFIG = {
    local: {
        key: '/tmp'
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

async function assertMeta (api, name, expectedSize) {
    const meta = await api.metadata(name)
    should().exist(meta, 'expected return value from metadata call')
    expect(meta.size).equals(expectedSize, 'expected size of written file to equal size of randomData')
    expect(meta.name).equals(name, 'expected name of written file to be correct')
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

function rand (count) {
    return randomstring.generate(count)
}

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
            const size = (READ_SZ * TEMP_SZ_MULTIPLE) + Math.floor(Math.random() * (READ_SZ/2));
            const randomData = rand(size)
            const fileSuffix = '' + Date.now()
            let fixture
            beforeEach((done) => {
                const name = `test_file_${fileSuffix}`
                mobiletto(driverName, config.key, config.secret, config.opts)
                    .then(api => { fixture = {api, name, randomData} })
                    .finally(done)
            })
            it("should write a file", async () => {
                const data = fixture.randomData

                function* dataGenerator() {
                    // read in 8k chunks
                    for (let i = 0; i < data.length; i += READ_SZ) {
                        const end = (i + READ_SZ) > data.length ? data.length : (i + READ_SZ)
                        yield data.slice(i, end)
                    }
                }

                const response = await fixture.api.write(fixture.name, dataGenerator())
                expect(response).to.equal(data.length, 'expected write API to return correct number of bytes written')
            })
            it("should read the file we just wrote", async () => {
                const chunks = []
                function reader(chunk) {
                    if (chunk) {
                        chunks.push(chunk)
                    }
                }
                const response = await fixture.api.read(fixture.name, reader)
                const data = Buffer.concat(chunks)
                expect(response).is.equal(data.length, 'expected read API to return correct number of bytes read')
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

        describe(`${driverName} - write files in a new dir, read metadata, recursively delete`, () => {
            // a random directory and file within it
            const randomParent = `random_dir_${rand(10)}`;
            const subdirName = `subdir_` + Date.now();
            const randomPath = `${randomParent}/${subdirName}/random_file_${Date.now()}`
            const fileCount = 3 + Math.floor(Math.random() * 10)
            let fixture
            beforeEach((done) => {
                mobiletto(driverName, config.key, config.secret, config.opts)
                    .then(api => { fixture = {api, name: randomPath} })
                    .finally(done)
            })
            it(`should write ${fileCount} files in a new directory`, async () => {
                function* dataGenerator() {
                    // return one chunk of random data
                    yield rand(READ_SZ)
                }
                for (let i = 0; i < fileCount; i++) {
                    const response = await fixture.api.write(tempFilename(fixture.name, i), dataGenerator())
                    expect(response).to.equal(READ_SZ, 'expected write API to return correct number of bytes written')
                }
            })
            it("should load metadata for one of the new files", async () => {
                await assertMeta (fixture.api, fixture.name, READ_SZ)
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
