import { assert } from 'chai';
import add from '../src/add.js'

describe('add', () => {
  it('should return sum of two positive numbers', () => {
    assert.equal(add(6, 4), 10);
  });

  it('should return 0 when both arguments are 0', () => {
    assert.equal(add(0, 0), 0);
  });

  it('should return the sum of negative and positive number. Result is positive.', () => {
    assert.equal(add(-2, 3), 1)
  });

  it('should return the sum of negative and positive number. Result is negative.', () => {
    assert.equal(add(-2, 1), -1)
  });

  it('should return sum of two negative numbers', () => {
    assert.equal(add(-5, -3), -8)
  });

});