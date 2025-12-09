const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  describe("with name parameter", () => {
    it("returns the hello world message with name", () => {
      expect(getGreeting("John")).toBe("Hello world! From John");
    });
  });
});
