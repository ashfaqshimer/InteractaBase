// jest.config.js
export default {
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
      '**/src/**/*.js',
      '!**/__tests__/**',
      '!**/node_modules/**',
    ],
    transform: {}
  };
  