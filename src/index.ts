export * from "mobiletto-base";

import {
    MobilettoConnection,
    MobilettoConnectionFunction,
    MobilettoDriverParameter,
    MobilettoOptions,
    hasDriver,
    registerDriver,
    mobiletto as baseMobiletto,
} from "mobiletto-base";
import { MobilettoEncryptionSettings } from "mobiletto-base";

import { storageClient as localDriver } from "mobiletto-driver-local";
import { storageClient as s3Driver } from "mobiletto-driver-s3";
import { storageClient as b2Driver } from "mobiletto-driver-b2";
import { storageClient as indexeddbDriver } from "mobiletto-driver-indexeddb";
import { storageClient as genericDriver } from "mobiletto-driver-generic";

const BUNDLED_DRIVERS: Record<string, MobilettoDriverParameter> = {
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

export const allDrivers = (): Record<string, MobilettoConnectionFunction> =>
    ({ ...BUNDLED_DRIVERS }) as Record<string, MobilettoConnectionFunction>;

/**
 * Batteries included: these shadow mobiletto-base's `mobiletto`/`connect` and register the
 * bundled drivers on first use, so `import { mobiletto } from "mobiletto"` works without a
 * prior registerDrivers() call. (Calling registerDrivers() yourself remains supported.)
 */
export const mobiletto = async (
    driverPath: string | MobilettoDriverParameter,
    key: string,
    secret?: string | null,
    opts?: MobilettoOptions | null,
    encryption?: MobilettoEncryptionSettings,
): Promise<MobilettoConnection> => {
    registerDrivers();
    return baseMobiletto(driverPath, key, secret, opts, encryption);
};

export const connect = mobiletto;
