import { assert } from 'chai';
import get from '../src/get.js';

describe('get', () => {
  it('should retrieve values from an object using a path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    assert.strictEqual(get(object, 'a[0].b.c'), 3);
    assert.strictEqual(get(object, ['a', '0', 'b', 'c']), 3);
  });

  it('should return the defaultValue if the resolved value is undefined', () => {
    const object = { 'a': { 'b': undefined } };
    assert.strictEqual(get(object, 'a.b', 'default'), 'default');
  });

  it('should return undefined for non-existing properties', () => {
    const object = { 'a': { 'b': { 'c': 3 } } };
    assert.isUndefined(get(object, 'x.y.z'));
  });
});
