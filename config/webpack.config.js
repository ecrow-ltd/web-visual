const argv = require("yargs").argv;

const dest = argv.dest;
const mode = argv.mode;
var config = {};

switch(dest) {
    case 'distribution':
        config = require("./distribution")(mode);
        break;
    default:
        throw new Error(`Error: The destination (dest) "${type}" isn't unknown.`);
}

module.exports = config;
