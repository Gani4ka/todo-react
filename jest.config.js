module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      tsConfig: 'jest.tsconfig.json'
    }
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'setup-enzyme.ts'
    // '*.stub.ts',
    // '*.d.ts'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setup-enzyme.ts'],
  testEnvironment: 'jsdom',
  timers: 'fake',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styles-mock.js',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@mocks/(.*)$': '<rootDir>/__mocks__/$1'
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: './coverage',
        outputName: 'junit.xml'
      }
    ]
  ],
  coverageReporters: ['json', 'lcov', 'text', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
