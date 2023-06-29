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

      // Testing the code 
//Arrays with one or two elements
assertArraysEqual(middle([1]), []); 
assertArraysEqual(middle([1, 2]), []);

//Arrays with odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]); 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);