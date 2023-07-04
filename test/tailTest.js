const assertEqual = require('./assertEqualTest');
const tail = require('../tail');

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const emptyArray = tail([]); // An empty array should yield an empty array for its tail
assertEqual(emptyArray.length, 0);
