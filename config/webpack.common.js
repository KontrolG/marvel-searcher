const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const getClientEnviromentVariables = require("./getClientEnviromentVariables");

const clientEnviromentVariables = getClientEnviromentVariables();

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 8080,
    openPage: "http://localhost:8080"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/assets/index.html"
    }),
    new webpack.DefinePlugin(clientEnviromentVariables.stringified)
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
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