module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)*(spec|test).js?(x)"],
  collectCoverage: true,
  collectCoverageFrom: ["**/?(*.)*(spec|test).js?(x)"],
};
