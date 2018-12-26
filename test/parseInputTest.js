const { parseInput } = require("../src/parseInput");
const assert = require("assert");

describe("parseInput", function() {
  it("should classify given params in option and fileNames: for single file", function() {
    let actual = parseInput(['-l','file']);
    let expected = {
      option : ['-l'],
      fileNames : ['file']
    };
    assert.deepEqual(actual, expected);
  });

  it("should classify given params in option and fileNames: for multiple file", function() {
    let actual = parseInput(['-l','file1','file2']);
    let expected = {
      option : ['-l'],
      fileNames : ['file1','file2']
    };
    assert.deepEqual(actual, expected);
  });

  it("should classify given params in option and fileNames: for single file, multiple option", function() {
    let actual = parseInput(['-l','-c','file1']);
    let expected = {
      option : ['-l', '-c'],
      fileNames : ['file1']
    };
    assert.deepEqual(actual, expected);
  });

  it("should classify given params in option and fileNames: for multiple file, multiple option", function() {
    let actual = parseInput(['-l','-c','-w','file1','file2']);
    let expected = {
      option : ['-l', '-c', '-w'],
      fileNames : ['file1','file2']
    };
    assert.deepEqual(actual, expected);
  });
});