const getLineCount = function(content) {
  return content.split("\n").length;
};

const getCharacterCount = function(content) {
  return content.length;
};

const getWordCount = function(content) {
  return content.split(/ |\n/).length;
};

module.exports = {
  getLineCount,
  getCharacterCount,
  getWordCount
};
