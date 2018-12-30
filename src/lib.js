const { formatter } = require("./format");
const { parseInput } = require("./parseInput");
const { ENCODING_FORMAT, NEWLINE } = require("./constants");

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

const getCounts = function(content, option) {
  return {
    lineCount: getLineCount(content),
    wordCount: getWordCount(content),
    characterCount: getCharacterCount(content)
  }[option];
};

const getFileLog = function(reader, option, fileName) {
  let content = readFile(reader, fileName);
  let optionCount = option.map(getCounts.bind(null, content));
  return {
    fileName,
    optionCount
  };
};

const runCommand = function(fs, params) {
  let { option, fileNames } = parseInput(params);
  let fileLog = fileNames.map(getFileLog.bind(null, fs.readFileSync, option));
  return formatter(fileLog);
};

module.exports = {
  getLineCount,
  getCharacterCount,
  getWordCount,
  readFile,
  runCommand
};
