const { EMPTY_STRING, NEWLINE, SPACE } = require("./constants");

const justifier = function({ fileName, lineCount, wordCount, characterCount }, option) {
  let result = EMPTY_STRING;
  let spaces = repeat.bind(null, SPACE);
  option = option.join(EMPTY_STRING);
  if(option.includes('l')) {
    result += spaces(spaceCount(lineCount.toString())) + lineCount;
  };
  if(option.includes('w')) {
    result += spaces(spaceCount(wordCount.toString())) + wordCount;
  };
  if(option.includes('c')) {
    result += spaces(spaceCount(characterCount.toString())) + characterCount;
  };

  if(option == "") {
    result += spaces(spaceCount(lineCount.toString())) + lineCount;
    result += spaces(spaceCount(wordCount.toString())) + wordCount;
    result += spaces(spaceCount(characterCount.toString())) + characterCount;
  }
  result += spaces(1) + fileName;
  return result;
};

const repeat = function(character, count) {
  return new Array(count).fill(character).join(EMPTY_STRING);
};

const spaceCount = function(arg) {
  return 8 - arg.length;
};

const totalCount = function(fileLog, key) {
  let count = fileLog.map(x => x[key]);
  return count.reduce((a, b) => a + b);
};

const formatter = function(fileLog, option) {
  let count = totalCount.bind(null, fileLog);
  let lineCount = count("lineCount");
  let wordCount = count("wordCount");
  let characterCount = count("characterCount");
  let fileName = "total";
  if (fileLog.length == 1) {
    return fileLog.map(x => justifier(x, option)).join(EMPTY_STRING);
  };
  let formattedOutput = fileLog.map(x => justifier(x, option)).join(NEWLINE) + NEWLINE;
  formattedOutput += justifier({ fileName, lineCount, wordCount, characterCount }, option);
  return formattedOutput;
};

module.exports = {
  justifier,
  totalCount,
  formatter
};
