const { EMPTY_STRING } = require("./constants");

const removeStartingHyphen = function(option) {
  return option.slice(1);
};

const getUniq = function(options) {
  return options.filter(x => !x.includes(options));
};

const repeat = function(character, count) {
  return new Array(count).fill(character).join(EMPTY_STRING);
};

const isEqualsZero = function(arg) {
  return arg == 0;
};

const addTwoList = function(list1, list2) {
  let result = [];
  for (let index = 0; index < list1.length; index++) {
    result.push(list1[index] + list2[index]);
  }
  return result;
};

module.exports = {
  removeStartingHyphen,
  getUniq,
  repeat,
  isEqualsZero,
  addTwoList
};
