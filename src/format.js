const { EMPTY_STRING, NEWLINE, SPACE } = require("./constants");
const { removeHyphen, getUniq, repeat } = require("./util");
const justifier = function(
  { fileName, lineCount, wordCount, characterCount },
  option
) {
  let splitOption = option.join("").split("");
  let uniqOption = removeHyphen(getUniq(splitOption));
  if (option.length == 0) {
    uniqOption = sortedOption();
  }
  uniqOption = sortedOption().filter(x => uniqOption.includes(x));
  let spaces = repeat.bind(null, SPACE);
  let counts = { lineCount, wordCount, characterCount };
  let count = uniqOption.map(x => optionCounts(counts)[x]);
  let result = count
    .map(function(x) {
      return spaces(spaceCount(x.toString())) + x;
    })
    .join(EMPTY_STRING);
  return result + SPACE + fileName;
};

const sortedOption = function() {
  return ["l", "w", "c"];
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
