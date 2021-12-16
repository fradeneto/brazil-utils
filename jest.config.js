/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const paths = {
  '@decorators/*': ['./src/decorators/*'],
  '@helpers/*': ['./src/helpers/*'],
  '@models/*': ['./src/models/*'],
  '@utils/*': ['./src/utils/*'],
  '@validators/*': ['./src/validators/*'],
};

module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
  preset: 'ts-jest',
  testEnvironment: 'node',
};
