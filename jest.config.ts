import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest', // This tells Jest to use ts-jest to transform TypeScript files
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for DOM-related testing
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // To import jest-dom matchers
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // This ensures ts-jest transforms both .ts and .tsx files
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Correct regular expression
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js', // Mock static assets
    '^@/(.*)$': '<rootDir>/src/$1', // Optional for alias resolution
  },
};

export default config;
