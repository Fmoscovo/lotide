const assert = require('chai').assert;
const _ = require('./index');

describe('Lotide', () => {
  describe('head', () => {
    it('should return the first element of an array', () => {
      assert.strictEqual(_.head([1, 2, 3]), 1);
    });
  });

  describe('tail', () => {
    it('should return all elements of an array except the first one', () => {
      assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
    });
  });

  describe('middle', () => {
    it('should return the middle element(s) of an array', () => {
      assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
      assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
    });
  });
});
