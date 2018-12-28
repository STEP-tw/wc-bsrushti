const { EMPTY_STRING } = require("./constants");

const reducer = function(a, b) {
  if (!a.includes(b)) {
    a.push(b);
  }
  return a;
};

const removeStartingHyphen = function(option) {
  return option.slice(1);
};

const getUniq = function(options) {
  return options.reduce(reducer, []);
};

const repeat = function(character, count) {
  return new Array(count).fill(character).join(EMPTY_STRING);
};

const isEqualsZero = function(arg) {
  return arg == 0;
};

module.exports = {
  removeStartingHyphen,
  getUniq,
  repeat,
  isEqualsZero
};
