export * from "mobiletto-base";

import { MobilettoConnectionFunction, MobilettoDriverParameter, registerDriver } from "mobiletto-base";

import { storageClient as localDriver } from "mobiletto-driver-local";
import { storageClient as s3Driver } from "mobiletto-driver-s3";
import { storageClient as b2Driver } from "mobiletto-driver-b2";
import { storageClient as indexeddbDriver } from "mobiletto-driver-indexeddb";
import { storageClient as genericDriver } from "mobiletto-driver-generic";

export const registerDrivers = () => {
    registerDriver("local", localDriver as MobilettoDriverParameter);
    registerDriver("s3", s3Driver as MobilettoDriverParameter);
    registerDriver("b2", b2Driver as MobilettoDriverParameter);
    registerDriver("indexeddb", indexeddbDriver as MobilettoDriverParameter);
    registerDriver("generic", genericDriver as MobilettoDriverParameter);
};

export const allDrivers = (): Record<string, MobilettoConnectionFunction> => ({
    local: localDriver as MobilettoConnectionFunction,
    s3: s3Driver as MobilettoConnectionFunction,
    b2: b2Driver as MobilettoConnectionFunction,
    indexeddb: indexeddbDriver as MobilettoConnectionFunction,
    generic: genericDriver as MobilettoConnectionFunction,
});
