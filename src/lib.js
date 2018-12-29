const { formatter } = require("./format");
const { parseInput } = require("./parseInput");
const { ENCODING_FORMAT, NEWLINE, SPACE } = require("./constants");

const getLineCount = function(content) {
  return content.split(NEWLINE).length - 1;
};

const getCharacterCount = function(content) {
  return content.length;
};

const getWordCount = function(content) {
  return content.split(/ |\n/).filter(x => x).length;
};

const readFile = function(reader, fileName) {
  return reader(fileName, ENCODING_FORMAT);
};

const getFileLog = function(reader, fileName) {
  let content = readFile(reader, fileName);
  let lineCount = getLineCount(content);
  let wordCount = getWordCount(content);
  let characterCount = getCharacterCount(content);
  return {
    fileName,
    lineCount,
    wordCount,
    characterCount
  };
};

const runCommand = function(fs, params) {
  let { option, fileNames } = parseInput(params);
  let fileLog = fileNames.map(getFileLog.bind(null, fs.readFileSync));
  return formatter(fileLog, option);
};

module.exports = {
  getLineCount,
  getCharacterCount,
  getWordCount,
  readFile,
  runCommand
};
