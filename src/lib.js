const getLineCount = function(content) {
  return content.split("\n").length;
};

const getCharacterCount = function(content) {
  return content.length;
};

const getWordCount = function(content) {
  return content.split(/ |\n/).length;
};

const readFile  = function(reader, fileName) {
  return reader(fileName);
};

module.exports = {
  getLineCount,
  getCharacterCount,
  getWordCount,
  readFile
};
