import { assert } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {
  it('should return the value if it is not NaN, null, or undefined', () => {
    assert.strictEqual(defaultTo(1, 10), 1);
    assert.strictEqual(defaultTo('Hello', 'World'), 'Hello');
    assert.deepStrictEqual(defaultTo({ prop: 'value' }, { prop: 'default' }), { prop: 'value' });
  });

  it('should return the defaultValue if the value is NaN, null, or undefined', () => {
    assert.strictEqual(defaultTo(undefined, 10), 10);
    assert.strictEqual(defaultTo(null, 'Default'), 'Default');
    assert.strictEqual(defaultTo(NaN, 42), 42);
  });
});
