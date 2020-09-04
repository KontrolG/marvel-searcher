const { defaults } = require("jest-config");
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/config/setupTest.js"],
  moduleNameMapper: {
    "\\.(sa|sc|c)ss$": "identity-obj-proxy"
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"]
  // ...
};
