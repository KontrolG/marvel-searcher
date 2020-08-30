const app = require("./productionServerApp");
const webpack = require("webpack");
const webpackConfig = require("./webpack.production");

webpack(webpackConfig).run(() => {
  const port = process.env.PORT || 7777;
  app.listen(port, () => console.log(`App listening at port ${port}`));
});
