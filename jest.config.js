/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx', '!src/react-app-env.d.ts'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv:['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-transformer-svg"
  }
};