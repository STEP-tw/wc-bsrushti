/* eslint-env mocha */
const { justifier, formatter } = require("../src/format");
const assert = require("assert");

describe("justifier", function() {
  it("should return given params in wc format for default case", function() {
    let fileName = "file1";
    let lineCount = 1;
    let wordCount = 2;
    let characterCount = 3;
    let optionCount = [lineCount, wordCount, characterCount];
    const actual = justifier({
      fileName,
      optionCount
    });
    const expected = "       1       2       3 file1";
    assert.deepEqual(actual, expected);
  });

  it("should return given params in wc format when option is -l", function() {
    let fileName = "file1";
    let lineCount = 1;
    let optionCount = [lineCount];
    const actual = justifier({
      fileName,
      optionCount
    });
    const expected = "       1 file1";
    assert.deepEqual(actual, expected);
  });

  it("should return given params in wc format when option is -w", function() {
    let fileName = "file1";
    let wordCount = 2;
    let optionCount = [wordCount];
    const actual = justifier({
      fileName,
      optionCount
    });
    const expected = "       2 file1";
    assert.deepEqual(actual, expected);
  });

  it("should return given params in wc format when option is -c", function() {
    let fileName = "file1";
    let characterCount = 3;
    let optionCount = [characterCount];
    const actual = justifier({
      fileName,
      optionCount
    });
    const expected = "       3 file1";
    assert.deepEqual(actual, expected);
  });
});

describe("formatter", function() {
  it("should return formatted output for single file", function() {
    const fileLog = [
      {
        fileName: "file1",
        optionCount: [1, 2, 1]
      }
    ];
    let actual = formatter(fileLog);
    let expected = "       1       2       1 file1";
    assert.deepEqual(actual, expected);
  });

  it("should return formatted output for more than one file", function() {
    const fileLog = [
      {
        fileName: "file1",
        optionCount: [1, 2, 1]
      },
      {
        fileName: "file2",
        optionCount: [2, 2, 4]
      }
    ];
    let actual = formatter(fileLog);
    let expected = "       1       2       1 file1\n";
    expected += "       2       2       4 file2\n";
    expected += "       3       4       5 total";
    assert.deepEqual(actual, expected);
  });
});
