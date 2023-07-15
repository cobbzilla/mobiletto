export * from "mobiletto-base";
import { MobilettoConnectionFunction } from "mobiletto-base";
export declare const registerDrivers: () => void;
export declare const allDrivers: () => Record<string, MobilettoConnectionFunction>;
