const assert = require("assert");
const { getLineCount } = require("../src/lib");

describe("getLineCount", function() {
  it("should return 1 when empty content provided", function() {
    const actual = getLineCount("");
    const expected = 1;
    assert.deepEqual(actual, expected);
  });

  it("should return 2 when content is split by single \\n", function() {
    const actual = getLineCount("abc\nefg");
    const expected = 2;
    assert.deepEqual(actual, expected);
  });

  it("should return line count as per the given content with multiple \\n", function() {
    const actual = getLineCount("abc\nefg\nhij\nklm\nnop");
    const expected = 5;
    assert.deepEqual(actual, expected);
  });
});
