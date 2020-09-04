const { defaults } = require("jest-config");
module.exports = {
  transform: { "^.+\\.[jt]sx?$": "babel-jest" },
  setupFilesAfterEnv: ["<rootDir>/config/setupTest.js"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"]
  // ...
};
