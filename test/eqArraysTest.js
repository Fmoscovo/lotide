const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

// Test Case: Check if two arrays are equal
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
assertEqual(eqArrays(array1, array2), true); // should pass

const array3 = [1, 2, 3];
const array4 = [1, 2, 4];
assertEqual(eqArrays(array3, array4), false); // should fail

const array5 = [];
const array6 = [];
assertEqual(eqArrays(array5, array6), true); // should pass


