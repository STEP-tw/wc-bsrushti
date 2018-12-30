const { EMPTY_STRING, NEWLINE, SPACE } = require("./constants");
const { repeat, addTwoList } = require("./util");

const justifier = function(fileLog) {
  const { fileName, optionCount } = fileLog;
  const countWithSpaces = optionCount.map(addSpaces).join(EMPTY_STRING);
  return [countWithSpaces, fileName].join(SPACE);
};

const addSpaces = function(arg) {
  const spaces = repeat.bind(null, SPACE);
  return [spaces(spaceCount(arg.toString())), arg].join(EMPTY_STRING);
};

const spaceCount = function(arg) {
  return 8 - arg.length;
};

const formatter = function(fileLog) {
  let totalCount = fileLog.map(x => x.optionCount);
  totalCount = totalCount.reduce(addTwoList);
  if (fileLog.length == 1) {
    return fileLog.map(x => justifier(x)).join(EMPTY_STRING);
  }
  fileLog.push({ fileName: "total", optionCount: totalCount });
  let formattedOutput = fileLog.map(x => justifier(x)).join(NEWLINE);
  return formattedOutput;
};

module.exports = {
  justifier,
  formatter
};
