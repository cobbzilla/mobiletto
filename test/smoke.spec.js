// Umbrella smoke test: registration, auto-registration, and a local round trip.
// Pure-local — no cloud credentials or Redis required.
import fs from "fs";
import os from "os";
import path from "path";
import { describe, it, after } from "mocha";
import { expect } from "chai";
import { registerDrivers, allDrivers, mobiletto, connect, hasDriver, shutdownMobiletto } from "../lib/esm/index.js";

const EXPECTED_DRIVERS = ["local", "s3", "b2", "indexeddb", "generic"];

after(async () => {
    await shutdownMobiletto();
});

describe("umbrella driver registration", () => {
    it("registerDrivers() registers the five bundled drivers and is idempotent", () => {
        registerDrivers();
        for (const name of EXPECTED_DRIVERS) {
            expect(hasDriver(name)).to.equal(true, `expected driver registered: ${name}`);
        }
        // calling again must not throw or warn-spam (already-registered names are skipped)
        registerDrivers();
    });
    it("allDrivers() exposes the five storageClient functions", () => {
        const drivers = allDrivers();
        expect(Object.keys(drivers).sort()).to.deep.equal([...EXPECTED_DRIVERS].sort());
        for (const name of EXPECTED_DRIVERS) {
            expect(drivers[name]).to.be.a("function");
        }
    });
});

describe("umbrella local round trip", () => {
    it("mobiletto('local', ...) auto-registers, writes, reads, lists, and removes", async () => {
        const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mobiletto-umbrella-test-"));
        // note: no explicit registerDrivers() — the umbrella's mobiletto() self-registers
        const api = await mobiletto("local", dir, null, { createIfNotExist: true, redisConfig: { enabled: false } });
        expect(connect).to.equal(mobiletto);
        await api.writeFile("dir/hello.txt", "umbrella");
        expect((await api.readFile("dir/hello.txt")).toString()).to.equal("umbrella");
        const listing = await api.list("dir");
        expect(listing.entries.map((e) => e.name)).to.deep.equal(["dir/hello.txt"]);
        const meta = await api.metadata("dir/hello.txt");
        expect(meta.size).to.equal(8);
        await api.remove("dir/hello.txt");
        expect((await api.safeList("dir")).entries).to.deep.equal([]);
        fs.rmSync(dir, { recursive: true, force: true });
    });
    it("supports encryption without Redis (redisConfig.enabled=false)", async () => {
        const dir = fs.mkdtempSync(path.join(os.tmpdir(), "mobiletto-umbrella-enc-"));
        const api = await mobiletto(
            "local",
            dir,
            null,
            { createIfNotExist: true, redisConfig: { enabled: false } },
            { key: "umbrella-test-encryption-key" },
        );
        await api.writeFile("secret.txt", "cipher me");
        expect((await api.readFile("secret.txt")).toString()).to.equal("cipher me");
        const listing = await api.list("");
        expect(listing.entries.map((e) => e.name)).to.deep.equal(["secret.txt"]);
        fs.rmSync(dir, { recursive: true, force: true });
    });
});
