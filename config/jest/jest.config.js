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
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@component/(.*)$': '<rootDir>/src/component/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@story/(.*)$': '<rootDir>/src/story/$1',
  },
  verbose: false,
};
