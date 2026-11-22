# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this package is

`mobiletto` is the "batteries included" umbrella package of the mobiletto storage-abstraction project: it re-exports everything from `mobiletto-base` and bundles all five drivers (`local`, `s3`, `b2`, `indexeddb`, `generic`). The entire source is `src/index.ts`: `registerDrivers()` registers every bundled driver by canonical lowercase name (idempotent — already-registered names are skipped), `allDrivers()` returns the raw `storageClient` functions, and this package's own `mobiletto()`/`connect()` SHADOW mobiletto-base's: they auto-register the bundled drivers on first use, so no prior `registerDrivers()` call is needed.

This repo is also the project's documentation home: the main README (with `docs/` translations) describing the whole ecosystem lives here.

## Commands

- Build: `pnpm tsc` — runs **two** compiles: `tsconfig.json` → `lib/esm/` and `tsconfig-cjs.json` → `lib/cjs/` (the only package in the project with a CJS build; `lib/cjs/package.json` with `"type": "commonjs"` makes the output loadable as CJS inside this `"type": "module"` package).
- Test: `pnpm test` runs `test/smoke.spec.js` (registration + local round trips, pure-local, no Redis) and — only when `DRIVER_CONFIG_JSON` is set — `test/conformance.spec.js`, which runs the SHARED conformance suite from mobiletto-driver-test over the bundled published drivers. `pnpm smoke` loads the package under plain Node both ways: ESM import and CJS require (the latter needs require(esm), Node >=20.19/22.12).
- Lint / format / release: `pnpm lint[:fix]`, `pnpm prettier[:fix]`, `pnpm release` (tsc + smoke + prettier + lint + test). eslint uses the flat config (`eslint.config.mjs`).

## Gotchas

- Driver registry names here are the canonical lowercase ones (`"indexeddb"`, not `"indexedDB"` — the test harness repo registers the camelCase variant for its own runs).
- `package.json` has a proper `"exports"` map (`import` → `lib/esm`, `require` → `lib/cjs`, plus `types`), with `main`/`module` kept for legacy tooling. The CJS build only works where require(esm) exists (Node >=20.19/22.12) because every dependency is ESM-only; `lib/cjs/package.json` (`"type": "commonjs"`) is checked in and REQUIRED — `tsc` does not generate it.
- Dependency versions pin the sibling repos via published npm ranges — keep them moving together so one mobiletto-base/common copy dedupes (cross-package `instanceof`). The workspace-root `cascade-prepare.sh` / `cascade-npm-publish.sh` scripts maintain this after each mobiletto-base release. NOTE: pnpm overrides do NOT propagate to consumers, so the b2 driver's joi/uuid overrides are repeated in this package's `pnpm.overrides`.
