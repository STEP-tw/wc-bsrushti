const { EMPTY_STRING } = require("./constants");

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
  repeat,
  isEqualsZero,
  addTwoList
};
