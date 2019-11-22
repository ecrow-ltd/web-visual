/**
 * Requirements
 */
const path = require("path");

/**
 * Constants
 */
const ROOT = path.resolve(".");
const BUILD = `${ROOT}/.build`;
const BUNDLE = `${ROOT}/.bundle`;
const REPORT = `${ROOT}/.reports`;
const LIBRARY = `${ROOT}/.lib`;
const DISTRIBUTION = `${ROOT}/.dist`;

const SOURCE = `${ROOT}/src`

module.exports = {
  ROOT,
  BUILD,
  BUNDLE,
  REPORT,
  LIBRARY,
  DISTRIBUTION,
  SOURCE
};
