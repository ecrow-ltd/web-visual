const argv = require("yargs").argv;

let config = {};

switch (argv.dest) {
  case "distribution":
    config = require("./distribution");
    break;
}

module.exports = config;
