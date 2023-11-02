import { assert } from 'chai';
import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  it('should return a number when value is already a number', () => {
    assert.strictEqual(toNumber(3.2), 3.2);
    assert.strictEqual(toNumber(Number.MIN_VALUE), 5e-324);
    assert.strictEqual(toNumber(Infinity), Infinity);
  });

  it('should return NaN when value is a Symbol', () => {
    const symbol = Symbol('test');
    assert.isTrue(isNaN(toNumber(symbol)));
  });

  it('should convert objects to numbers based on their valueOf method', () => {
    const objectWithValueOf = {
      valueOf: () => 42
    };
    assert.strictEqual(toNumber(objectWithValueOf), 42);

    const objectWithoutValueOf = {
      toString: () => '15'
    };
    assert.strictEqual(toNumber(objectWithoutValueOf), 15);
  });

  it('should convert strings to numbers', () => {
    assert.strictEqual(toNumber('3.2'), 3.2);
    assert.strictEqual(toNumber('  42 '), 42);
    assert.strictEqual(toNumber('0b1010'), 10);
    assert.strictEqual(toNumber('0o755'), 493);
    assert.strictEqual(toNumber('-0x1A'), -26);
  });

  it('should return 0 for empty or non-numeric strings', () => {
    assert.strictEqual(toNumber(''), 0);
    assert.strictEqual(toNumber('abc'), 0);
    assert.strictEqual(toNumber('0xinvalid'), 0);
  });
});
