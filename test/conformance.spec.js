// Optional full conformance run over the bundled (published) drivers via the shared suite.
// Activates only when DRIVER_CONFIG_JSON is set (e.g. a driver repo's config file);
// otherwise it registers nothing and mocha sees no suites from this file.
import "dotenv/config";

import { registerDrivers } from "../lib/esm/index.js";
import { loadDriverConfig, runDriverConformanceSuite } from "mobiletto-driver-test";

if (process.env.DRIVER_CONFIG_JSON) {
    registerDrivers();
    runDriverConformanceSuite({ config: loadDriverConfig(), shutdownAfter: false });
}
