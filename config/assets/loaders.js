/**
 * Webpack Loaders
 */
module.exports = {
  babel: {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader'
    }
  }
};
