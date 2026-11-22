"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.mobiletto = exports.allDrivers = exports.registerDrivers = void 0;
__exportStar(require("mobiletto-base"), exports);
const mobiletto_base_1 = require("mobiletto-base");
const mobiletto_driver_local_1 = require("mobiletto-driver-local");
const mobiletto_driver_s3_1 = require("mobiletto-driver-s3");
const mobiletto_driver_b2_1 = require("mobiletto-driver-b2");
const mobiletto_driver_indexeddb_1 = require("mobiletto-driver-indexeddb");
const mobiletto_driver_generic_1 = require("mobiletto-driver-generic");
const BUNDLED_DRIVERS = {
    local: mobiletto_driver_local_1.storageClient,
    s3: mobiletto_driver_s3_1.storageClient,
    b2: mobiletto_driver_b2_1.storageClient,
    indexeddb: mobiletto_driver_indexeddb_1.storageClient,
    generic: mobiletto_driver_generic_1.storageClient,
};
/** Registers every bundled driver by its canonical (lowercase) name. Idempotent: names
 * that are already registered (by this function or by the caller) are skipped silently. */
const registerDrivers = () => {
    for (const [name, driver] of Object.entries(BUNDLED_DRIVERS)) {
        if (!(0, mobiletto_base_1.hasDriver)(name)) {
            (0, mobiletto_base_1.registerDriver)(name, driver);
        }
    }
};
exports.registerDrivers = registerDrivers;
const allDrivers = () => (Object.assign({}, BUNDLED_DRIVERS));
exports.allDrivers = allDrivers;
/**
 * Batteries included: these shadow mobiletto-base's `mobiletto`/`connect` and register the
 * bundled drivers on first use, so `import { mobiletto } from "mobiletto"` works without a
 * prior registerDrivers() call. (Calling registerDrivers() yourself remains supported.)
 */
const mobiletto = (driverPath, key, secret, opts, encryption) => __awaiter(void 0, void 0, void 0, function* () {
    (0, exports.registerDrivers)();
    return (0, mobiletto_base_1.mobiletto)(driverPath, key, secret, opts, encryption);
});
exports.mobiletto = mobiletto;
exports.connect = exports.mobiletto;
