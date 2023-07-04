const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);
  if (array.length === 0) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return [array[middleIndex]];
  }
};

module.exports = middle;
