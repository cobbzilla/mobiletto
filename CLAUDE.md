# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this package is

`mobiletto` is the "batteries included" umbrella package of the mobiletto storage-abstraction project: it re-exports everything from `mobiletto-base` and bundles all five drivers (`local`, `s3`, `b2`, `indexeddb`, `generic`). The entire source is `src/index.ts`: `registerDrivers()` registers every bundled driver by canonical lowercase name (idempotent — already-registered names are skipped), `allDrivers()` returns the raw `storageClient` functions, and this package's own `mobiletto()`/`connect()` SHADOW mobiletto-base's: they auto-register the bundled drivers on first use, so no prior `registerDrivers()` call is needed.

This repo is also the project's documentation home: the main README (with `docs/` translations) describing the whole ecosystem lives here.

## Commands

- Build: `pnpm tsc` → `lib/esm/` (ESM only — the CJS build was dropped once mobiletto-cli went ESM; CJS consumers on Node >=20.19 load the ESM build via require(esm) through the exports `default` condition).
- Test: `pnpm test` runs `test/smoke.spec.js` (registration + local round trips, pure-local, no Redis) and — only when `DRIVER_CONFIG_JSON` is set — `test/conformance.spec.js`, which runs the SHARED conformance suite from mobiletto-driver-test over the bundled published drivers. `pnpm smoke` loads the package under plain Node both ways: ESM import and `require("mobiletto")` via require(esm) (Node >=20.19/22.12).
- Lint / format / release: `pnpm lint[:fix]`, `pnpm prettier[:fix]`, `pnpm release` (tsc + smoke + prettier + lint + test). eslint uses the flat config (`eslint.config.mjs`).

## Gotchas

- Driver registry names here are the canonical lowercase ones (`"indexeddb"`, not `"indexedDB"` — the test harness repo registers the camelCase variant for its own runs).
- `package.json` `"exports"`: `"."` → `types` + `default` (lib/esm — the single `default` condition serves both `import` and require(esm)), plus `"./package.json"` so consumers (e.g. mobiletto-cli version display) can read the version. `main`/`module` kept for legacy tooling. `require()` only works where require(esm) exists (Node >=20.19/22.12).
- Dependency versions pin the sibling repos via published npm ranges — keep them moving together so one mobiletto-base/common copy dedupes (cross-package `instanceof`). The workspace-root `cascade-prepare.sh` / `cascade-npm-publish.sh` scripts maintain this after each mobiletto-base release. NOTE: pnpm overrides do NOT propagate to consumers, so the b2 driver's joi/uuid overrides are repeated in this package's `pnpm.overrides`.
