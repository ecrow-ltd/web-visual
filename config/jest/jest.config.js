const paths = require('../paths');
module.exports = {
  rootDir: `${paths.ROOT}`,
  testRegex: '((\\.|/*.)test)\\.(ts|tsx)?$',
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [`<rootDir>/config/jest/jest.setup.js`],
  transform: {
    '^.+\\.test\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@themes/(.*)$': '<rootDir>/src/themes/$1',
    '^@primitives/(.*)$': '<rootDir>/src/components/primitives/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
  },
  verbose: false,
};
