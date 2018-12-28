const { removeStartingHyphen, getUniq, isEqualsZero } = require("./util");
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
  let splitOption = options.join(EMPTY_STRING).split(EMPTY_STRING);
  let uniqOption = removeStartingHyphen(getUniq(splitOption));
  if (isEqualsZero(options.length)) {
    uniqOption = sortedOption();
  }
  uniqOption = sortedOption().filter(x => uniqOption.includes(x));
  return uniqOption;
};

const sortedOption = function() {
  return ["l", "w", "c"];
};

module.exports = {
  parseInput
};
