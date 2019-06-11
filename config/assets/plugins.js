/**
 * Webpack plugins
 */

const common = require('./common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  clean: new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [`${common.LIBRARY_PATH}/*`],
    dry: false, // true = simulate file removal
    verbose: true
  }),
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
    analyzerMode: 'static',
    reportFilename: `${common.REPORT_PATH}/bundle.html`,
    openAnalyzer: false
  })
};
