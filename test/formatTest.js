const {justifier} = require('../src/format');
const assert = require("assert");

describe("justifier", function() {
  it("should return given params in wc justifier", function() {
    let fileName = "file1";
    let lineCount = 1;
    let wordCount = 2;
    let characterCount = 3;
    const actual = justifier({fileName, lineCount, wordCount,characterCount});
    const expected = '       1       2       3 file1';
    assert.deepEqual(actual, expected);
  });
});
