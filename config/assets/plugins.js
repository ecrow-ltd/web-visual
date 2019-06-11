/**
 * Webpack plugins
 */

const common = require("./common");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  uglifyjs: new UglifyJsPlugin({
    uglifyOptions: {
      output: {
        comments: false
      },
      compress: {
        drop_console: true,
        passes: 1
      },
      warnings: false
    }
  }),
  bundleAnalyzer: new BundleAnalyzerPlugin({
    analyzerMode: "static",
    reportFilename: `${common.REPORT_PATH}/bundle.html`,
    openAnalyzer: false
  })
};
