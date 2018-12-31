const { isEqualsZero } = require("./util");
const { EMPTY_STRING, HYPHEN } = require("./constants");

const parseInput = function(args) {
  let fileNames = args.filter(x => !x.startsWith(HYPHEN));
  let option = args.filter(x => x.startsWith(HYPHEN));
  let uniqOption = option.join(EMPTY_STRING).split(EMPTY_STRING);
  let illegalOption = getIllegalOption(uniqOption);
  option = getUniqOption(uniqOption);
  return {
    option,
    fileNames,
    illegalOption
  };
};

const getUniqOption = function(options) {
  let uniqOption = options;
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

const usageMsg = function(illegalOption) {
  return [
    "wc: illegal option -- " + illegalOption,
    "usage: wc [-clmw] [file ...]"
  ];
};

const getIllegalOption = function(option) {
  let illegalOption = option.filter(x => !sortedOption().includes(x));
  illegalOption = illegalOption.filter(x => x != HYPHEN);
  if (illegalOption.length) {
    return usageMsg(illegalOption[0]);
  }
  return [];
};

module.exports = {
  parseInput,
  getLongOption
};
