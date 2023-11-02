import { assert } from 'chai';
import eq from '../src/eq.js';

describe('eq', () => {
  it('should return true when values are equivalent', () => {
    assert.isTrue(eq(1, 1));
    assert.isTrue(eq('a', 'a'));
    assert.isTrue(eq(NaN, NaN));

    const object = { 'a': 1 };
    assert.isTrue(eq(object, object));
  });

  it('should return false when values are not equivalent', () => {
    assert.isFalse(eq(1, 2));
    assert.isFalse(eq('a', 'b'));

    const object1 = { 'a': 1 };
    const object2 = { 'a': 1 };
    assert.isFalse(eq(object1, object2));
  });

  it('should handle special cases like NaN', () => {
    assert.isFalse(eq(NaN, 'NaN'));
    assert.isTrue(eq(null, undefined));
  });

  it('should handle two different empty ', () => {
    assert.isFalse(eq({}, {}));
  });

  it('should handle two references to same empty object', () => {
    const object3 = {}
    assert.isTrue(eq(object3, object3));
  });

});
