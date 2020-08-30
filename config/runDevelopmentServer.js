const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.development");

const webpackCompiler = webpack(webpackConfig);

const devServer = new WebpackDevServer(
  webpackCompiler,
  webpackConfig.devServer
);

const { port, host } = webpackConfig.devServer;
devServer.listen(port, host);
