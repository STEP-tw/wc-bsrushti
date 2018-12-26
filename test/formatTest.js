const { justifier, totalCount, format } = require("../src/format");
const assert = require("assert");

describe("justifier", function() {
  it("should return given params in wc format for default case", function() {
    let fileName = "file1";
    let lineCount = 1;
    let wordCount = 2;
    let characterCount = 3;
    let option = "";
    const actual = justifier(
      {
        fileName,
        lineCount,
        wordCount,
        characterCount
      },
      option
    );
    const expected = "       1       2       3 file1";
    assert.deepEqual(actual, expected);
  });

  it("should return given params in wc format when option is -l", function() {
    let fileName = "file1";
    let lineCount = 1;
    let wordCount = 2;
    let characterCount = 3;
    let option = "-l";
    const actual = justifier(
      {
        fileName,
        lineCount,
        wordCount,
        characterCount
      },
      option
    );
    const expected = "       1 file1";
    assert.deepEqual(actual, expected);
  });

  it("should return given params in wc format when option is -w", function() {
    let fileName = "file1";
    let lineCount = 1;
    let wordCount = 2;
    let characterCount = 3;
    let option = "-w";
    const actual = justifier(
      {
        fileName,
        lineCount,
        wordCount,
        characterCount
      },
      option
    );
    const expected = "       2 file1";
    assert.deepEqual(actual, expected);
  });

  it("should return given params in wc format when option is -c", function() {
    let fileName = "file1";
    let lineCount = 1;
    let wordCount = 2;
    let characterCount = 3;
    let option = "-c";
    const actual = justifier(
      {
        fileName,
        lineCount,
        wordCount,
        characterCount
      },
      option
    );
    const expected = "       3 file1";
    assert.deepEqual(actual, expected);
  });
});

describe("totalCount", function() {
  const fileLog = [
    {
      fileName: "file1",
      lineCount: 1,
      wordCount: 2,
      characterCount: 1
    },
    {
      fileName: "file2",
      lineCount: 2,
      wordCount: 2,
      characterCount: 4
    }
  ];

  it("should return total lineCount of given fileLog", function() {
    let actual = totalCount(fileLog, "lineCount");
    let expected = 3;
    assert.deepEqual(actual, expected);
  });

  it("should return total wordCount of given fileLog", function() {
    let actual = totalCount(fileLog, "wordCount");
    let expected = 4;
    assert.deepEqual(actual, expected);
  });

  it("should return total characterCount of given fileLog", function() {
    let actual = totalCount(fileLog, "characterCount");
    let expected = 5;
    assert.deepEqual(actual, expected);
  });
});

describe("format", function() {
  it("should return formated output for single file", function() {
    const fileLog = [
      {
        fileName: "file1",
        lineCount: 1,
        wordCount: 2,
        characterCount: 1
      }
    ];
    let option = "";
    let actual = format(fileLog, option);
    let expected = "       1       2       1 file1";
    assert.deepEqual(actual, expected);
  });

  it("should return formated output for more than one file", function() {
    const fileLog = [
      {
        fileName: "file1",
        lineCount: 1,
        wordCount: 2,
        characterCount: 1
      },
      {
        fileName: "file2",
        lineCount: 2,
        wordCount: 2,
        characterCount: 4
      }
    ];
    let option = "";
    let actual = format(fileLog, option);
    let expected = "       1       2       1 file1\n";
    expected += "       2       2       4 file2\n";
    expected += "       3       4       5 total";
    assert.deepEqual(actual, expected);
  });
});
