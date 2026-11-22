# Code Review: mobiletto (umbrella package)

Reviewed: 2026-11-21. Scope: `src/index.ts`, `src/decs.d.ts`, `test/index.spec.js`, `package.json`, `tsconfig-cjs.json`, build output layout.

The source here is 26 lines and fine; every finding is packaging/test infrastructure — but the packaging ones affect every consumer of the project.

---

## U1. No `"exports"` map: plain-Node ESM consumers get the CJS build, which then `require()`s ESM-only deps (HIGH)

`package.json` has `"main": "./lib/cjs/index.js"` and `"module": "./lib/esm/index.js"` but no `"exports"`. Node ignores `"module"` (it's a bundler convention), so **both** `require("mobiletto")` and `import ... from "mobiletto"` resolve to the CJS build. That build does `require("mobiletto-base")` — and mobiletto-base (plus every driver) is ESM-only (`"type": "module"`, no cjs output) — so on Node < 22.12 this throws `ERR_REQUIRE_ESM` at load. Today the package effectively works only through bundlers (which honor `"module"`) or on very recent Node with require(esm) support.

**Suggested change** in `package.json`:

```json
"exports": {
    ".": {
        "types": "./lib/esm/index.d.ts",
        "import": "./lib/esm/index.js",
        "require": "./lib/cjs/index.js"
    }
},
```

keeping `"main"`/`"module"` for legacy tooling. Note the `require` branch still only works where require(esm) is available (the deps have no CJS builds) — decide whether to (a) document a minimum Node for CJS consumers, or (b) drop the CJS build entirely (simpler and honest, since it can't work standalone on older Node anyway; the project is ESM-first everywhere else). If keeping CJS, verify `lib/cjs/package.json` (`"type": "commonjs"`) is included in the published tarball — it is in `files: ["lib/"]` today; don't lose it if the build output is ever cleaned/regenerated, since `tsc` does not create it.

## U2. `pnpm test` points at a file that doesn't exist; the real spec can't load (HIGH, test infra)

- `package.json:26`: `"test": "mocha --timeout 30000 ./test/crypt.spec.js"` — there is no `test/crypt.spec.js` in this repo (it lives in mobiletto-base). `pnpm test` exits with "no test files found".
- The actual `test/index.spec.js` is a stale pre-harness fork of the driver conformance suite: line 57 (`opts: { indexedDB }`) references an **undefined identifier** (`indexedDB` is never imported — ReferenceError at module load), and its driver key `indexedDB` wouldn't match the `indexeddb` name that `registerDrivers()` registers anyway.

**Suggested change:** delete `test/index.spec.js` and repoint the test at what this package should actually verify — a small smoke spec:

1. `registerDrivers()` runs without throwing and `allDrivers()` has the 5 expected keys;
2. `await mobiletto("local", tmpdir, null, { createIfNotExist: true })` connects, writes, reads, lists, removes (pure-local, no cloud creds needed);
3. optionally, a conformance run via `mobiletto-driver-test` gated on `DRIVER_CONFIG_JSON` being set.

Update `"test"` to run that spec, and add the `"release": "pnpm tsc && pnpm prettier && pnpm lint && pnpm test"` script the other repos have, so this package goes through the same release gate.

## U3. Stale ambient declaration hides mobiletto-driver-b2's types (LOW)

`src/decs.d.ts`: `declare module "mobiletto-driver-b2";` types the b2 import as `any`. The b2 driver ships its own `.d.ts` now; this shim overrides/degrades it (and explains the `as MobilettoDriverParameter` casts in `src/index.ts`). **Suggested change:** delete `decs.d.ts`, remove the then-unneeded casts in `src/index.ts`, and fix whatever type error originally motivated it at the source (likely the `MobilettoDriverParameter` signature mismatch — see mobiletto-driver-generic REVIEW.md G6).

## U4. Version-pin drift risk across the sibling repos (INFO)

`dependencies` pin `mobiletto-base ^2.0.29` and drivers `^2.0.x`, while the sibling working copies are at 2.2.x — fine under semver, but it means a consumer's resolution can mix a new base with old drivers (or vice versa). Because `instanceof MobilettoError`/`MobilettoNotFoundError` checks only work when exactly one copy of mobiletto-common/mobiletto-base is installed (see mobiletto-common REVIEW.md finding 6 and the drivers' peerDependency findings), keep these ranges moving together: when the drivers adopt `peerDependencies` on mobiletto-base, bump all ranges here in the same release and re-verify a clean `npm install mobiletto` dedupes to a single mobiletto-base.

## U5. `registerDrivers()` must be called manually (INFO, API ergonomics)

Importing `mobiletto` has no side effects; calling `mobiletto("s3", ...)` before `registerDrivers()` fails with "driver not registered". That's a reasonable design (tree-shaking, explicitness) but it's the #1 first-run stumble for a "batteries included" package. Consider exporting a convenience `connect`/`mobiletto` wrapper that lazily calls `registerDrivers()` on first use, or at minimum make the not-registered error message from mobiletto-base mention `registerDrivers()` when the name is one of the five bundled drivers.

---

## Suggested fix order

1. U2 (working test script + smoke spec) — so U1's packaging change can be validated.
2. U1 (exports map; decide CJS fate).
3. U3, then U4/U5 as coordination items with the sibling repos.

Validation: `pnpm tsc && pnpm lint && pnpm test`, plus two smoke checks that exercise resolution the way consumers do: `node -e "import('mobiletto').then(m => m.registerDrivers())"` (ESM path) and, if CJS is kept, `node -e "require('mobiletto')"` on the minimum supported Node version.
