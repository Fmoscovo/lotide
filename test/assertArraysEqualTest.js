const assertEqual = require('../assertEqual');

const assertArraysEqual = require('../assertArraysEqual');

//Test cases
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false); // should fail
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true); // should pass

