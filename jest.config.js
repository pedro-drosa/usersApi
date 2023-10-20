/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: { '\\.(js|jsx|ts|tsx)$': '@sucrase/jest-plugin' },
};

module.exports = config;
