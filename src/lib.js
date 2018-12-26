const { format } = require("./format");
const { parseInput } = require('./parseInput')

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

const getFileLog = function(reader, fileName) {
  let content = readFile(reader, fileName);
  content = content.trim();
  let lineCount = getLineCount(content);
  let wordCount = getWordCount(content);
  let characterCount = getCharacterCount(content);
  return {
    fileName, lineCount, wordCount, characterCount
  }
};

const runCommand = function(fs, params) {
  let {option, fileNames} = parseInput(params);
  let fileLog = fileNames.map(getFileLog.bind(null, fs.readFileSync));
  return format(fileLog, option);
};

module.exports = {
  getLineCount,
  getCharacterCount,
  getWordCount,
  readFile,
  runCommand
};
