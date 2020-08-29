const path = require("path");
const commonConfig = require("./common.config");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: {
    polyfill: "@babel/polyfill",
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "js/[name].[hash].js"
  }
});
