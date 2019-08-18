/* global __dirname, require, module*/
const common = require("./assets/common");
const loaders = require("./assets/loaders");
const plugins = require("./assets/plugins");
const argv = require("yargs").argv; // use --env with webpack 2
const pkg = require("../package.json");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

let outputFile, mode, modeType;

if (argv.env === "prod") {
  mode = "production";
  outputFile = `${pkg.library}.min`;
} else {
  mode = "development";
  outputFile = `${pkg.library}`;
}

modeType = mode === "production";

const config = {
  mode: mode,
  entry: `${common.ROOT_PATH}/src/index.tsx`,
  devtool: modeType ? false : "source-map",
  output: {
    path: `${common.ROOT_PATH}/.dist`,
    filename: outputFile + ".umd.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [loaders.typescript, loaders.sourcemap]
  },
  plugins: mode ? [plugins.uglifyjs] : [],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  performance: {
    hints: false
  }
};

module.exports = config;
