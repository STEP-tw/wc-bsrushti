/* eslint-env mocha */
const assert = require("assert");
const {
  getLineCount,
  getCharacterCount,
  getWordCount,
  readFile,
  runCommand
} = require("../src/lib");

describe("getLineCount", function() {
  it("should return 0 when empty content provided", function() {
    const actual = getLineCount("");
    const expected = 0;
    assert.deepEqual(actual, expected);
  });

  it("should return 1 when content is split by single \\n", function() {
    const actual = getLineCount("abc\nefg\n");
    const expected = 2;
    assert.deepEqual(actual, expected);
  });

  it("should return line count as per the given content with multiple \\n", function() {
    const actual = getLineCount("abc\nefg\nhij\nklm\nnop\n");
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

describe("getWordCount", function() {
  it("should return 0 when empty content provided", function() {
    const actual = getWordCount("");
    const expected = 0;
    assert.deepEqual(actual, expected);
  });

  it("should return 2 when content has two words ", function() {
    const actual = getWordCount("one two");
    const expected = 2;
    assert.deepEqual(actual, expected);
  });

  it("should return byte count as per the given content", function() {
    const actual = getWordCount("abc abc\nefg efg\nhij hij\nklm klm\nnop nop");
    const expected = 10;
    assert.deepEqual(actual, expected);
  });
});

describe("readFile", function() {
  const files = {
    oneLine: "abc",
    fiveLines: "abc\nefg\nhij\nklm\nnop"
  };

  const fs = {
    reader: function(fileName) {
      return files[fileName];
    }
  };

  it("should return content for one liner file", function() {
    const fileName = "oneLine";
    const actual = readFile(fs.reader, fileName);
    const expected = "abc";
    assert.deepEqual(actual, expected);
  });

  it("should return content for five liner file", function() {
    const fileName = "fiveLines";
    const actual = readFile(fs.reader, fileName);
    const expected = "abc\nefg\nhij\nklm\nnop";
    assert.deepEqual(actual, expected);
  });
});

describe("runCommand", function() {
  const files = {
    oneLine: "abc\npqr\n",
    fiveLines: "abc\nefg\nhij\nklm\nnop\n",
    tenLines: "1\n2\n3\n4\n5\n6\n7\n8\n9\n0\n"
  };

  const fs = {
    readFileSync: function(fileName) {
      return files[fileName];
    }
  };

  describe("for default case", function() {
    it("should return formatted output for single file for default case", function() {
      const params = ["oneLine"];
      const actual = runCommand(fs, params);
      const expected = "       2       2       8 oneLine";
      assert.deepEqual(actual, expected);
    });

    it("should return formatted output for multiple file for default case", function() {
      const params = ["oneLine", "fiveLines", "tenLines"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       2       2       8 oneLine" + "\n";
      expected += "       5       5      20 fiveLines" + "\n";
      expected += "      10      10      20 tenLines" + "\n";
      expected += "      17      17      48 total";
      assert.deepEqual(actual, expected);
    });
  });
  describe("for single file with single option", function() {
    it("should return formatted output for single file with option -l", function() {
      const params = ["-l", "oneLine"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       2 oneLine";
      assert.deepEqual(actual, expected);
    });

    it("should return formatted output for single file with option -c", function() {
      const params = ["-c", "oneLine"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       8 oneLine";
      assert.deepEqual(actual, expected);
    });

    it("should return formatted output for single file with option -w", function() {
      const params = ["-w", "oneLine"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       2 oneLine";
      assert.deepEqual(actual, expected);
    });
  });

  describe("for multiple file with single option", function() {
    it("should return formatted output for multiple file with option -c", function() {
      const params = ["-c", "oneLine", "fiveLines", "tenLines"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       8 oneLine" + "\n";
      expected += "      20 fiveLines" + "\n";
      expected += "      20 tenLines" + "\n";
      expected += "      48 total";
      assert.deepEqual(actual, expected);
    });

    it("should return formatted output for multiple file with option -l", function() {
      const params = ["-l", "oneLine", "fiveLines", "tenLines"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       2 oneLine" + "\n";
      expected += "       5 fiveLines" + "\n";
      expected += "      10 tenLines" + "\n";
      expected += "      17 total";
      assert.deepEqual(actual, expected);
    });

    it("should return formatted output for multiple file with option -w", function() {
      const params = ["-w", "oneLine", "fiveLines", "tenLines"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       2 oneLine" + "\n";
      expected += "       5 fiveLines" + "\n";
      expected += "      10 tenLines" + "\n";
      expected += "      17 total";
      assert.deepEqual(actual, expected);
    });
  });

  describe("for multiple file with multiple option", function() {
    it("should return formatted output for multiple file with option -wl", function() {
      const params = ["-wl", "oneLine", "fiveLines", "tenLines"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       2       2 oneLine" + "\n";
      expected += "       5       5 fiveLines" + "\n";
      expected += "      10      10 tenLines" + "\n";
      expected += "      17      17 total";
      assert.deepEqual(actual, expected);
    });

    it("should return formatted output for multiple file with option -l -c", function() {
      const params = ["-l", "-c", "oneLine", "fiveLines", "tenLines"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       2       8 oneLine" + "\n";
      expected += "       5      20 fiveLines" + "\n";
      expected += "      10      20 tenLines" + "\n";
      expected += "      17      48 total";
      assert.deepEqual(actual, expected);
    });

    it("should return formatted output for multiple file with multiple option -wcl", function() {
      const params = ["-wcl", "oneLine", "fiveLines", "tenLines"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       2       2       8 oneLine" + "\n";
      expected += "       5       5      20 fiveLines" + "\n";
      expected += "      10      10      20 tenLines" + "\n";
      expected += "      17      17      48 total";
      assert.deepEqual(actual, expected);
    });

    it("should return formatted output for multiple file with multiple option -w -c -l", function() {
      const params = ["-w", "-c", "-l", "oneLine", "fiveLines", "tenLines"];
      const actual = runCommand(fs, params);
      let expected = "";
      expected += "       2       2       8 oneLine" + "\n";
      expected += "       5       5      20 fiveLines" + "\n";
      expected += "      10      10      20 tenLines" + "\n";
      expected += "      17      17      48 total";
      assert.deepEqual(actual, expected);
    });
  });
});
