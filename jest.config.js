module.exports = {
  preset: "ts-jest",
  runner: "@jest-runner/electron/main",
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  transform: {
    ".ts": "ts-jest",
  },
};
