import { assert } from 'chai';
import toString from '../src/toString.js';

describe('toString', () => {
  it('should convert values to strings', () => {
    assert.strictEqual(toString(null), '');
    assert.strictEqual(toString(-0), '-0');
    assert.strictEqual(toString([1, 2, 3]), '1,2,3');
  });

  it('should handle string values without changes', () => {
    assert.strictEqual(toString('Hello'), 'Hello');
  });

  it('should handle Symbol values', () => {
    const symbol = Symbol('test');
    assert.strictEqual(toString(symbol), symbol.toString());
  });

  it('should preserve the sign of -0', () => {
    assert.strictEqual(toString(-0), '-0');
    assert.strictEqual(toString(0), '0');
  });
});
