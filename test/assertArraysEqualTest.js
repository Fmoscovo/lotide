const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');
const assertArraysEqual = require('../assertArraysEqual');

//Test cases
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false); // should fail
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true); // should pass

