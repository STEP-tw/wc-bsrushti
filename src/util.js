const { EMPTY_STRING, NEWLINE, SPACE } = require("./constants");

const reducer = function(a, b) {
  if (!a.includes(b)) {
    a.push(b);
  }
  return a;
};

const removeHyphen = function(option) {
  return option.slice(1);
};

const getUniq = function(options) {
  return options.reduce(reducer, []);
};

const repeat = function(character, count) {
  return new Array(count).fill(character).join(EMPTY_STRING);
};

module.exports = {
  removeHyphen,
  getUniq,
  repeat
};
