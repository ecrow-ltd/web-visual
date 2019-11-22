const paths = require('../paths');
module.exports = {
  rootDir: `${paths.ROOT}`,
  testRegex: '((\\.|/*.)(test))\\.(ts|tsx)?$',
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    `<rootDir>/config/jest/jest.setup.js`
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  verbose: false
};