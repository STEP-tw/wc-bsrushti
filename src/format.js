const { EMPTY_STRING, NEWLINE, SPACE } = require("./constants");
const { repeat } = require("./util");

const justifier = function(fileLog, option) {
  const { fileName, lineCount, wordCount, characterCount } = fileLog;
  const countObject = { lineCount, wordCount, characterCount };
  const countList = option.map(x => optionCounts(countObject)[x]);
  const countWithSpaces = countList.map(addSpaces).join(EMPTY_STRING);
  return [countWithSpaces, fileName].join(SPACE);
};

const addSpaces = function(arg) {
  const spaces = repeat.bind(null, SPACE);
  return [spaces(spaceCount(arg.toString())), arg].join(EMPTY_STRING);
};

const optionCounts = function(counts) {
  return {
    l: counts.lineCount,
    w: counts.wordCount,
    c: counts.characterCount
  };
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
  }
  let formattedOutput =
    fileLog.map(x => justifier(x, option)).join(NEWLINE) + NEWLINE;
  formattedOutput += justifier(
    { fileName, lineCount, wordCount, characterCount },
    option
  );
  return formattedOutput;
};

module.exports = {
  justifier,
  totalCount,
  formatter
};
