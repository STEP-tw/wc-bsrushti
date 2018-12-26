const { justifier, format } = require("./format");

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

const encaseArgs = function(fileName, lineCount, wordCount, characterCount) {
  return {
    fileName,
    lineCount,
    wordCount,
    characterCount
  };
};

const runCommand = function(fs, params) {
  let content = params.map(readFile.bind(null, fs.readFileSync)).join("");
  content = content.trim();
  let fileName = params.join("");
  let lineCount = getLineCount(content);
  let wordCount = getWordCount(content);
  let characterCount = getCharacterCount(content);
  return justifier(
    {
    fileName,
    lineCount,
    wordCount,
    characterCount
    }
  );
};

module.exports = {
  getLineCount,
  getCharacterCount,
  getWordCount,
  readFile,
  runCommand,
  encaseArgs
};
