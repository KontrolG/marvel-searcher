const path = require("path");
const commonConfig = require("./common.config");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "[name].js"
  }
});
