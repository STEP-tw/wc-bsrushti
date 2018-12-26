const justifier = function({ fileName, lineCount, wordCount, characterCount }) {
  let result = "";
  let spaces = repeat.bind(null, " ");
  result += spaces(spaceCount(lineCount.toString())) + lineCount;
  result += spaces(spaceCount(wordCount.toString())) + wordCount;
  result += spaces(spaceCount(characterCount.toString())) + characterCount;
  result += spaces(1) + fileName;
  return result;
};

const repeat = function(character, count) {
  return new Array(count).fill(character).join("");
};

const spaceCount = function(arg) {
  return 8 - arg.length;
};

const totalCount = function(fileLog, key) {
  let count = fileLog.map(x => x[key]);
  return count.reduce((a, b) => a + b);
};

const format = function(fileLog) {
  let count = totalCount.bind(null, fileLog);
  let lineCount = count("lineCount");
  let wordCount = count("wordCount");
  let characterCount = count("characterCount");
  let fileName = "total";
  if (fileLog.length == 1) {
    return fileLog.map(x => justifier(x)).join("");
  };
  let result = fileLog.map(x => justifier(x)).join("\n") + "\n";
  result += justifier({ fileName, lineCount, wordCount, characterCount });
  return result;
};

module.exports = {
  justifier,
  totalCount,
  format
};
