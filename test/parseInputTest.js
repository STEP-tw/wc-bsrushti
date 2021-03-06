/* eslint-env mocha */
const { parseInput, getLongOption } = require("../src/parseInput");
const assert = require("assert");

describe("parseInput", function() {
  it("should classify given params in option and fileNames: for single file", function() {
    let actual = parseInput(["-l", "file"]);
    let expected = {
      option: ["lineCount"],
      fileNames: ["file"],
      illegalOption: []
    };
    assert.deepEqual(actual, expected);
  });

  it("should classify given params in option and fileNames: for multiple file", function() {
    let actual = parseInput(["-l", "file1", "file2"]);
    let expected = {
      option: ["lineCount"],
      fileNames: ["file1", "file2"],
      illegalOption: []
    };
    assert.deepEqual(actual, expected);
  });

  it("should classify given params in option and fileNames: for single file, multiple option", function() {
    let actual = parseInput(["-l", "-c", "file1"]);
    let expected = {
      option: ["lineCount", "characterCount"],
      fileNames: ["file1"],
      illegalOption: []
    };
    assert.deepEqual(actual, expected);
  });

  it("should classify given params in option and fileNames: for multiple file, multiple option", function() {
    let actual = parseInput(["-l", "-c", "-w", "file1", "file2"]);
    let expected = {
      option: ["lineCount", "wordCount", "characterCount"],
      fileNames: ["file1", "file2"],
      illegalOption: []
    };
    assert.deepEqual(actual, expected);
  });
});

describe("getLongOption", function() {
  it("should return longOption for given abbreviation for l,w,c", function() {
    let actual = getLongOption("l");
    let expected = "lineCount";
    assert.deepEqual(actual, expected);
  });
});
