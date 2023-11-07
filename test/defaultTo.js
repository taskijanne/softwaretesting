import { assert } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo.js general tests', () => {
  it('should return the value if it is not NaN, null, or undefined', () => {
    assert.strictEqual(defaultTo(1, 10), 1);
    assert.strictEqual(defaultTo('Hello', 'World'), 'Hello');
    assert.deepStrictEqual(defaultTo({ prop: 'value' }, { prop: 'default' }), { prop: 'value' });
  });

  it('should return the defaultValue if the value is NaN, null, or undefined', () => {
    assert.strictEqual(defaultTo(undefined, 10), 10);
    assert.strictEqual(defaultTo(null, 'Default'), 'Default');   
  });
});



describe('defaultTo.js business logic tests', () => {

  /*
    Assuming products have product name which will be used in product maintenance purposes
    Products also have display name, which is displayed for users for marketing purposes
    Users will be shown the productName in case displayName has not been defined
  */
  const product1 = {
    productName: "tomato",
    displayName: "Most fresh tomato in the planet!"
  }

  const product2 = {
    productName: "tomato",
    displayName: null
  }

  const product3 = {
    productName: "tomato",
    displayName: undefined
  }

  const product4 = {
    productName: "tomato"
  }

  it('should use products displayName instead of productName if displayName is defined', () => {
      assert.strictEqual(defaultTo(product1.displayName, product1.productName), product1.displayName);
  });

  it('should use product productName instead of displayName if displayName is not defined', () => {
    assert.strictEqual(defaultTo(product2.displayName, product2.productName), product2.productName);
    assert.strictEqual(defaultTo(product3.displayName, product3.productName), product3.productName);
    assert.strictEqual(defaultTo(product4.displayName, product4.productName), product4.productName);
  });

});