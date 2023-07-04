const assertArraysEqual = require('./assertArraysEqual');
const middle = require('./middle');
const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');


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