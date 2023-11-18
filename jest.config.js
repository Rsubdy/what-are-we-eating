module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
        "^.+\\.(js|jsx)$": 'babel-jest',
    },
  };