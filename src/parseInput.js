const parseInput = function(args) {
  return {
    option: args[0],
    fileNames: args.slice(1)
  };
};

module.exports = {
    parseInput
};
