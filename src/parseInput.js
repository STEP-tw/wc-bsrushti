const parseInput = function(args) {
  if (args[0].includes("-")) {
    return {
      option: args[0],
      fileNames: args.slice(1)
    };
  }
  return {
    option: "",
    fileNames: args.slice(0)
  };
};

module.exports = {
  parseInput
};
