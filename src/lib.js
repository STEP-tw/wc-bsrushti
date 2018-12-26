const getLineCount = function(content) {
  return content.split("\n").length - 1;
};

const getCharacterCount = function(content) {
  return content.length;
};

const getWordCount = function(content) {
  content = content.split("\n").join(" ");
  return content.split(" ").filter(x => x).length;
};

const readFile = function(reader, fileName) {
  return reader(fileName, "utf8");
};

const format = function(lineCount, wordCount, characterCount, fileName) {
  let result = "      " + lineCount;
  result += "     " + wordCount;
  result += "    " + characterCount;
  result += " " + fileName;
  return result;
};

module.exports = {
  getLineCount,
  getCharacterCount,
  getWordCount,
  readFile,
  format
};
