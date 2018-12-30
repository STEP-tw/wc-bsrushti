const { isEqualsZero } = require("./util");
const { EMPTY_STRING, HYPHEN } = require("./constants");

const parseInput = function(args) {
  let fileNames = args.filter(x => !x.startsWith(HYPHEN));
  let option = args.filter(x => x.startsWith(HYPHEN));
  option = getUniqOption(option);
  return {
    option,
    fileNames
  };
};

const getUniqOption = function(options) {
  let uniqOption = options.join(EMPTY_STRING).split(EMPTY_STRING);
  if (isEqualsZero(options.length)) {
    uniqOption = sortedOption();
  }
  uniqOption = sortedOption().filter(x => uniqOption.includes(x));
  uniqOption = uniqOption.map(getLongOption);
  return uniqOption;
};

const getLongOption = function(option) {
  return {
    l: "lineCount",
    w: "wordCount",
    c: "characterCount"
  }[option];
};

const sortedOption = function() {
  return ["l", "w", "c"];
};

module.exports = {
  parseInput,
  getLongOption
};
