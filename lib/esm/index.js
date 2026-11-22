var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export * from "mobiletto-base";
import { hasDriver, registerDriver, mobiletto as baseMobiletto, } from "mobiletto-base";
import { storageClient as localDriver } from "mobiletto-driver-local";
import { storageClient as s3Driver } from "mobiletto-driver-s3";
import { storageClient as b2Driver } from "mobiletto-driver-b2";
import { storageClient as indexeddbDriver } from "mobiletto-driver-indexeddb";
import { storageClient as genericDriver } from "mobiletto-driver-generic";
const BUNDLED_DRIVERS = {
    local: localDriver,
    s3: s3Driver,
    b2: b2Driver,
    indexeddb: indexeddbDriver,
    generic: genericDriver,
};
/** Registers every bundled driver by its canonical (lowercase) name. Idempotent: names
 * that are already registered (by this function or by the caller) are skipped silently. */
export const registerDrivers = () => {
    for (const [name, driver] of Object.entries(BUNDLED_DRIVERS)) {
        if (!hasDriver(name)) {
            registerDriver(name, driver);
        }
    }
};
export const allDrivers = () => (Object.assign({}, BUNDLED_DRIVERS));
/**
 * Batteries included: these shadow mobiletto-base's `mobiletto`/`connect` and register the
 * bundled drivers on first use, so `import { mobiletto } from "mobiletto"` works without a
 * prior registerDrivers() call. (Calling registerDrivers() yourself remains supported.)
 */
export const mobiletto = (driverPath, key, secret, opts, encryption) => __awaiter(void 0, void 0, void 0, function* () {
    registerDrivers();
    return baseMobiletto(driverPath, key, secret, opts, encryption);
});
export const connect = mobiletto;
