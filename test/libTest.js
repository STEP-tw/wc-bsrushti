const assert = require("assert");
const { getLineCount, getCharacterCount } = require("../src/lib");

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

describe("getCharacterCount", function() {
  it("should return 0 when empty content provided", function() {
    const actual = getCharacterCount("");
    const expected = 0;
    assert.deepEqual(actual, expected);
  });

  it("should return 2 when content has two characters ", function() {
    const actual = getCharacterCount("ab");
    const expected = 2;
    assert.deepEqual(actual, expected);
  });

  it("should return byte count as per the given content", function() {
    const actual = getCharacterCount("abc\nefg\nhij\nklm\nnop");
    const expected = 19;
    assert.deepEqual(actual, expected);
  });
});
