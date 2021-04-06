module.exports = {
  setupFiles: ['<rootDir>/test/jest-setup.js', 'jest-canvas-mock'],
  transform: {
    '\\.[t|j]sx?$': 'babel-jest',
    '\\.st\\.css?$': require.resolve('@stylable/jest'),
  },
  transformIgnorePatterns: [
    'test/e2e-runtime',
    '/node_modules/(?!(.*?\\.st\\.css$))',
  ],
  setupFilesAfterEnv: ['wix-ui-test-utils/jest-setup'],
  moduleNameMapper: {
    '\\.(?!\\st).(css|less|scss)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/test-runtime/',
    '<rootDir>/.wuf',
  ],
};
