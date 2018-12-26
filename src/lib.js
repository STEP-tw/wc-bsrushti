const {justifier} = require('./format');

const getLineCount = function(content) {
  return content.split("\n").length-1;
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

const runCommand = function(fs, params) {
  let content = params.map(readFile.bind(null, fs.readFileSync)).join("");
  content = content.trim();
  return justifier(
    getLineCount(content),
    getWordCount(content),
    getCharacterCount(content),
    params.join("")
  );
};

module.exports = {
  getLineCount,
  getCharacterCount,
  getWordCount,
  readFile,
  runCommand
};
