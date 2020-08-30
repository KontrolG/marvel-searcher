const path = require("path");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

const { NODE_ENV } = process.env;

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: NODE_ENV === "staging" ? "cheap-source-map" : false,
  entry: {
    polyfill: "@babel/polyfill",
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "js/[name].[hash].js"
  }
});
