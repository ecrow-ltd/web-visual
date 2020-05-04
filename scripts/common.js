const fs = require('fs');

module.exports.log = {};
/**
 *
 * @param {Error} error Error object
 */
log.error = function (error) {
  console.error(`${error.name}: ${error.message}`);
};

/**
 * Reads a file containing JSON data.
 */
module.exports.readJsonFile = function (file) {
  // Attempt to read the file.
  let jsonString, json;
  try {
    jsonString = fs.readFileSync(file);
  } catch (error) {
    log.error(error);
  }

  // Parse JSON.
  try {
    json = JSON.parse(jsonString);
  } catch (syntaxError) {
    log.error(syntaxError);
    return null;
  }

  return json;
};
