// To run the tests, you need a .env file one level above this directory
// that contains env vars for all the process.env stuff in DRIVER_CONFIG below
require('dotenv').config();

const { basename } = require('path')
const randomstring = require('randomstring')

const { expect, should, assert } = require('chai')

const { mobiletto } = require('../index.js')
const {MobilettoNotFoundError} = require("../index");

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

// To test a single driver:
//  - Uncomment the line below to set the driverName to whichever you want to test
//  - Comment out the next `for` line, and its closing curly brace (just before EOF)

// const driverName = 's3'

// When you're NOT testing a single driver, it's important that *all* tests remain
// within the singular 'for' loop below. This ensures that all drivers pass exactly
// the same set of tests, with exactly the same inputs/outputs.
// This greatly supports developer sanity
for (const driverName of Object.keys(DRIVER_CONFIG)) {
    describe(`${driverName} test`, () => {
        describe(`${driverName} - create api client`, () => {
            it("should validate the config and return an API object", async () => {
                const config = DRIVER_CONFIG[driverName]
                const api = await mobiletto(driverName, config.key, config.secret, config.opts)
                should().exist(api, 'expected API object to exist')
            })
        })

        describe(`${driverName} - write a file, read it back, read it's metadata, then delete it`, () => {
            // some random data, plus a bit extra
            const size = (READ_SZ * TEMP_SZ_MULTIPLE) + Math.floor(Math.random() * (READ_SZ/2));
            const randomData = randomstring.generate(size)
            const fileSuffix = '' + Date.now()
            const config = DRIVER_CONFIG[driverName]
            let fixture
            beforeEach((done) => {
                const name = `test_file_${fileSuffix}`
                mobiletto(driverName, config.key, config.secret, config.opts)
                    .then(api => {
                        fixture = {api, name, randomData}
                        done()
                    })
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
                const meta = await fixture.api.metadata(fixture.name)
                should().exist(meta, 'expected return value from metadata call')
                expect(meta.size).equals(fixture.randomData.length, 'expected size of written file to equal size of randomData')
                expect(basename(meta.name)).equals(fixture.name, 'expected name of written file to be correct')
            })
            it("should delete the file we just wrote", async () => {
                const removed = await fixture.api.remove(fixture.name)
                expect(removed).to.be.true
            })
            it("loading metadata on the file we wrote now fails", async () => {
                try {
                    const meta = await fixture.api.metadata(fixture.name)
                    assert.fail(`loading metadata after deletion, did not expect to get meta: ${meta}`)
                } catch (err) {
                    if (!(err instanceof MobilettoNotFoundError)) {
                        // MobilettoNotFoundError is expected
                        assert.fail(`loading metadata after deletion, got err: ${err}`)
                    }
                }
            })
        })
    })
}
