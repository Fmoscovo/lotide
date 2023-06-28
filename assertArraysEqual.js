/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/ 


const eqArrays = function (array1, array2) {
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

      const assertArraysEqual = function(array1, array2) {
        if (eqArrays(array1, array2)) {
          console.log(`✅✅✅ Assertion Passed: [${array1}] is equal to [${array2}]`);
        } else {
          console.log(`🛑🛑🛑 Assertion Failed: [${array1}] is not equal to [${array2}]`);
        }
      };
1

/*Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, '3'], [1, 2, 3]);
assertArraysEqual([1, 2]);*/
