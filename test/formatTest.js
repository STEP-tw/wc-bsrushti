const {justifier} = require('../src/format');
const assert = require("assert");

describe("justifier", function() {
  it("should return given params in wc justifier", function() {
    const actual = justifier(1, 2, 3, "file1");
    const expected = '       1       2       3 file1';
    assert.deepEqual(actual, expected);
  });
});
