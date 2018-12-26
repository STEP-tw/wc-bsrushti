const format = function(lineCount, wordCount, characterCount, fileName) {
  let result = "      " + lineCount;
  result += "     " + wordCount;
  result += "    " + characterCount;
  result += " " + fileName;
  return result;
};

module.exports = {
  format
};
