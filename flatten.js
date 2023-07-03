// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
//  flatten([1, 2, [3, 4], 5, [6]])   // => [1, 2, 3, 4, 5, 6]

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] is equal to [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] is not equal to [${array2}]`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }

  }
  return true;
};

const flattened = function(array) { 
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(flattened(array[i]));
    } else {
      newArray.push(array[i]);

    }
  } return newArray;

}
//test 
//console.log(flattened([1, 2, [3, 4], 5, [6]])); 