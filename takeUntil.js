
////////////////////eqArrays here///////////////

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
//////////////////assertArraysEqual here///////////////
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] is equal to [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] is not equal to [${array2}]`);
  }
};

////////////////////takeUntil here///////////////

//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;

};
//////////////////////tests here/////////////////////

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);




// Expected Output:
//[1, 2, 5, 7, 2];
//['I\'ve', 'been', 'to', 'Hollywood'];