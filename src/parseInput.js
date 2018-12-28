const { removeHyphen, getUniq, repeat } = require("./util");
const parseInput = function(args) {
  let fileNames = args.filter(x => !x.startsWith("-"));
  let option = args.filter(x => x.startsWith("-"));
  option = getUniqOption(option);
  return {
    option,
    fileNames
  };
};

const getUniqOption = function(options) {
  let splitOption = options.join("").split("");
  let uniqOption = removeHyphen(getUniq(splitOption));
  if (options.length == 0) {
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
