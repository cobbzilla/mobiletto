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
Object.defineProperty(exports, "__esModule", { value: true });
exports.allDrivers = exports.registerDrivers = void 0;
__exportStar(require("mobiletto-base"), exports);
const mobiletto_base_1 = require("mobiletto-base");
const mobiletto_driver_local_1 = require("mobiletto-driver-local");
const mobiletto_driver_s3_1 = require("mobiletto-driver-s3");
const mobiletto_driver_b2_1 = require("mobiletto-driver-b2");
const mobiletto_driver_indexeddb_1 = require("mobiletto-driver-indexeddb");
const mobiletto_driver_generic_1 = require("mobiletto-driver-generic");
const registerDrivers = () => {
    (0, mobiletto_base_1.registerDriver)("local", mobiletto_driver_local_1.storageClient);
    (0, mobiletto_base_1.registerDriver)("s3", mobiletto_driver_s3_1.storageClient);
    (0, mobiletto_base_1.registerDriver)("b2", mobiletto_driver_b2_1.storageClient);
    (0, mobiletto_base_1.registerDriver)("indexeddb", mobiletto_driver_indexeddb_1.storageClient);
    (0, mobiletto_base_1.registerDriver)("generic", mobiletto_driver_generic_1.storageClient);
};
exports.registerDrivers = registerDrivers;
const allDrivers = () => ({
    local: mobiletto_driver_local_1.storageClient,
    s3: mobiletto_driver_s3_1.storageClient,
    b2: mobiletto_driver_b2_1.storageClient,
    indexeddb: mobiletto_driver_indexeddb_1.storageClient,
    generic: mobiletto_driver_generic_1.storageClient,
});
exports.allDrivers = allDrivers;
