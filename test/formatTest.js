const {format} = require('../src/format');
const assert = require("assert");

describe("format", function() {
  it("should return given params in wc format", function() {
    const actual = format(1, 2, 3, "file1");
    const expected = '       1       2       3 file1';
    assert.deepEqual(actual, expected);
  });
});
