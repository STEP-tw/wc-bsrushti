const justifier = function(lineCount, wordCount, characterCount, fileName) {
  let result = "";
  let spaces = repeat.bind(null,' ');
  result += spaces(spaceCount(lineCount.toString()))+lineCount;
  result += spaces(spaceCount(wordCount.toString()))+wordCount;
  result += spaces(spaceCount(characterCount.toString()))+characterCount;
  result += spaces(1)+fileName;
  return result;
};

const repeat = function(character, count) {
    return new Array(count).fill(character).join("");
};

const spaceCount = function(arg) {
    return 8-arg.length;
};

module.exports = {
  justifier
};
