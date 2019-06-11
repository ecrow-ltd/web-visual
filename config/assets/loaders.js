/**
 * Webpack Loaders
 */
module.exports = {
  typescript: {
    test: /\.tsx?$/,
    loader: "awesome-typescript-loader"
  },
  sourcemap: {
    enforce: "pre",
    test: /\.js$/,
    loader: "source-map-loader"
  }
};
