export * from "mobiletto-base";
import { MobilettoConnection, MobilettoConnectionFunction, MobilettoDriverParameter, MobilettoOptions } from "mobiletto-base";
import { MobilettoEncryptionSettings } from "mobiletto-base";
/** Registers every bundled driver by its canonical (lowercase) name. Idempotent: names
 * that are already registered (by this function or by the caller) are skipped silently. */
export declare const registerDrivers: () => void;
export declare const allDrivers: () => Record<string, MobilettoConnectionFunction>;
/**
 * Batteries included: these shadow mobiletto-base's `mobiletto`/`connect` and register the
 * bundled drivers on first use, so `import { mobiletto } from "mobiletto"` works without a
 * prior registerDrivers() call. (Calling registerDrivers() yourself remains supported.)
 */
export declare const mobiletto: (driverPath: string | MobilettoDriverParameter, key: string, secret?: string | null, opts?: MobilettoOptions | null, encryption?: MobilettoEncryptionSettings) => Promise<MobilettoConnection>;
export declare const connect: (driverPath: string | MobilettoDriverParameter, key: string, secret?: string | null, opts?: MobilettoOptions | null, encryption?: MobilettoEncryptionSettings) => Promise<MobilettoConnection>;
