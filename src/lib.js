const getLineCount = function(content) {
  return content.split("\n").length;
};

const getCharacterCount = function(content) {
  return content.length; 
};

module.exports = {
  getLineCount,
  getCharacterCount
};
