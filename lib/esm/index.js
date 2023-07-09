export * from "mobiletto-base";
import { registerDriver } from "mobiletto-base";
import { storageClient as localDriver } from "mobiletto-driver-local";
import { storageClient as s3Driver } from "mobiletto-driver-s3";
import { storageClient as b2Driver } from "mobiletto-driver-b2";
import { storageClient as indexeddbDriver } from "mobiletto-driver-indexeddb";
export const registerDrivers = () => {
    registerDriver("local", localDriver);
    registerDriver("s3", s3Driver);
    registerDriver("b2", b2Driver);
    registerDriver("indexeddb", indexeddbDriver);
};
