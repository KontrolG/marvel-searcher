"use strict";

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");
const getClientEnviromentVariables = require("./getClientEnviromentVariables");

const clientEnviromentVariables = getClientEnviromentVariables();

const enviroment = process.env.NODE_ENV || "development";
const isEnvDevelopment = enviroment === "development";
const isEnvStaging = enviroment === "staging";
const isEnvProduction = enviroment === "production";

module.exports = {
  mode: isEnvDevelopment ? "development" : "production",
  devtool: isEnvDevelopment
    ? "cheap-module-source-map"
    : isEnvStaging
    ? "source-map"
    : false,
  entry: {
    polyfill: "@babel/polyfill",
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: `js/[name]${isEnvProduction ? ".[hash]" : ""}.js`
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 8080,
    openPage: "http://localhost:8080"
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/assets/index.html",
      favicon: "./src/assets/favicon.ico"
    }),
    new webpack.DefinePlugin(clientEnviromentVariables.stringified),
    !isEnvDevelopment &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash].css",
        chunkFilename: "css/[name].[hash:8].chunk.css"
      })
  ].filter(Boolean),
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              cache: true,
              fix: true,
              configFile: path.resolve(__dirname, "../.eslintrc.json")
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          isEnvDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[folder]/[name].[ext]"
            }
          }
        ]
      }
    ]
  }
};
