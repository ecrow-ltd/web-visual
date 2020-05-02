/**
 * Creates a publishable package for this library.
 * There are two folders this will create...
 * .tmp: Where the selected files to compile are copied to.
 * .pkg: Where the deliverable NPM package is stored after compiling files in .tmp.
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
var glob = require('glob');
const package = require('../package.json');
const tsconfig = require('../tsconfig.lib.json');
const ts = require('typescript');

// Get the absolute path to this directory.
const PATH_ROOT = '.'; //path.resolve('.');
const PATH_SRC = `${PATH_ROOT}/src`;
const PATH_TMP = `${PATH_ROOT}/.tmp`;

const CONFIG = {
  include: [`${PATH_SRC}/**/*.{ts,tsx}`],
  exclude: ['./**/*.*.*'],
};

/**
 *
 * @param {string[]} include
 * @param {string[]} exclude
 */
function getFiles(include, exclude) {
  let returnFiles = [];
  include.forEach((pattern) => {
    const files = glob.sync(pattern, {
      nodir: true,
      ignore: exclude,
      absolute: false,
    });
    if (!files.length) {
      console.warn(`No files found for the pattern "${pattern}"`);
      return;
    }
    returnFiles = returnFiles.concat(files);
  });
  return returnFiles;
}

/**
 * Copies the files into the .tmp folder properly.
 * @param {string[]} filePaths
 */
function copyToTmp(filePaths) {
  if (!fs.existsSync(PATH_TMP)) {
    fs.mkdirSync(PATH_TMP);
  }
  filePaths.forEach((filePath) => {
    const fileName = filePath.replace(/^.*[\\\/]/, '');
    const paths = filePath.split('/');
    const category = paths[2];
    const tmpPath = ((c) => {
      if (c === 'library') {
        return '';
      }
      return `${c}/`;
    })(category);
    if (tmpPath.length && !fs.existsSync(`${PATH_TMP}/${tmpPath}`)) {
      fs.mkdirSync(`${PATH_TMP}/${tmpPath}`);
    }
    fs.copyFileSync(filePath, `${PATH_TMP}/${tmpPath}${fileName}`);
  });
}

/**
 *
 * @param {string[]} fileNames
 * @param {ts.CompilerOptions} configuration
 */
function compile(fileNames, configuration) {
  // Create a Program with an in-memory emit
  const createdFiles = {};
  const host = ts.createCompilerHost(configuration);
  host.writeFile = (fileName, contents) => (createdFiles[fileName] = contents);

  // Prepare and emit the d.ts files
  const program = ts.createProgram(fileNames, configuration, host);
  program.emit();

  // Loop through all the input files
  fileNames.forEach((file) => {
    console.log('### JavaScript\n');
    console.log(host.readFile(file));

    console.log('### Type Definition\n');
    const dts = file.replace('.js', '.d.ts');
    console.log(createdFiles[dts]);
  });
}

/**
 * The process
 */
const files = getFiles(CONFIG.include, CONFIG.exclude);
copyToTmp(files);
