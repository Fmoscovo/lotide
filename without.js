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

      const without = function(source, itemsToRemove) {
        let result = [];
      
        for (let i = 0; i < source.length; i++) {
          let shouldRemove = false;
          for (let j = 0; j < itemsToRemove.length; j++) {
            if (source[i] === itemsToRemove[j]) {
              shouldRemove = true;
              break;
            }
          }
          if (!shouldRemove) {
            result.push(source[i]);
          }
        }
      
        return result;
      }
  