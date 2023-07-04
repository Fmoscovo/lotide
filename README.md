# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fmoscovo/lotide`

**Require it:**

`const _ = require('@fmoscovo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

-   `head(array)`: Returns the first element of the array.
-   `tail(array)`: Returns a new array containing all elements except the first.
-   `middle(array)`: Returns an array containing the middle element(s) of the input array.
-   `assertEqual(actual, expected)`: Checks if the actual value is equal to the expected value.
-   `assertArraysEqual(array1, array2)`: Checks if two arrays are equal.
-   `eqArrays(array1, array2)`: Checks if two arrays are equal.
-   `assertObjectsEqual(actual, expected)`: Checks if the actual object is equal to the expected object.