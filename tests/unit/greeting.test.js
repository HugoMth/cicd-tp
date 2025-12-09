const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("returns the hello world message with name", () => {
    expect(getGreeting("John")).toBe("Hello world! From John");
  });
});
