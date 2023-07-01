const words = ["ground", "control", "to", "major", "tom"];

const results1 = words.map(word => word[0]);

console.log(results1);



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






//tests
const words2 = [];
const expected = [];

const results = words.map(word => word[0]);
assertArraysEqual(results, expected); 0; // failed


const expected2 = ["g", "c", "t", "m", "t"];

const results2 = words.map(word => word[0]);
assertArraysEqual(results2, expected2); //pass

const words3 = ["brazil"];
const expected3 = ["b"];

const results3 = words3.map(word => word[0]);
assertArraysEqual(results3, expected3); // pass