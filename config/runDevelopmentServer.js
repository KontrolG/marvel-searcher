const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfiguration = require("./webpack.config");

const webpackCompiler = webpack(webpackConfiguration);

const devServer = new WebpackDevServer(
  webpackCompiler,
  webpackConfiguration.devServer
);

const { port, host } = webpackConfiguration.devServer;
devServer.listen(port, host);
