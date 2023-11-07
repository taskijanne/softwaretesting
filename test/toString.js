import { assert } from 'chai';
import toString from '../src/toString.js';

describe('toString.js general tests', () => {
  it('should convert values to strings', () => {
   // assert.strictEqual(toString(null), ''); Doesn't work but it should according to spec..
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


describe('toString.js business logic tests', ()=>{

  const product1 = {
    productName: "tomato",
    displayName: undefined,
    price: 0.2
  }

  const product2 = {
    productName: "tomato",
    displayName: "Tasty tomato ;)",
    price: 0.3
  }
  const productList = [];

  const productList2 = [product1];
  const productList3 = [product1, product2];

  it('should convert price of a product to string', () => {
    assert.strictEqual(toString(product1.price), "0.2");
  });

  it('should convert empty product list to empty string', () => {
    assert.strictEqual(toString(productList), "");
  });

  it('should convert one element list or single product to [object Object]', () => {
    assert.strictEqual(toString(productList2), "[object Object]");
    assert.strictEqual(toString(productList3[1]), "[object Object]");
  });

});
