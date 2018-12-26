const assert = require("assert");
const {
  getLineCount,
  getCharacterCount,
  getWordCount,
  readFile,
  format
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

describe('readFile', function() {
  const files = {
    oneLine : 'abc',
    fiveLines : 'abc\nefg\nhij\nklm\nnop'
  };

  const fs = {
    reader : function(fileName) {
        return files[fileName];
    }
  }

  it('should return content for one liner file', function() {
    const fileName = 'oneLine';
    const actual = readFile(fs.reader, fileName);
    const expected = 'abc';
    assert.deepEqual(actual, expected);
  });

  it('should return content for five liner file', function() {
    const fileName = 'fiveLines';
    const actual = readFile(fs.reader, fileName);
    const expected = 'abc\nefg\nhij\nklm\nnop';
    assert.deepEqual(actual, expected);
  });

});

describe('format', function() {
  it('should return given params in wc format', function() {
    const actual = format(1, 2, 3, 'file1');
    const expected = '      1     2    3 file1';
    assert.deepEqual(actual, expected);
  });
});