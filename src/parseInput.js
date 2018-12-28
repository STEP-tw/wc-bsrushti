const parseInput = function(args) {
  let fileNames = args.filter(x => !x.startsWith("-"));
  let option = args.filter(x => x.startsWith("-"));
  return {
    option,
    fileNames
  };
};

module.exports = {
  parseInput
};
