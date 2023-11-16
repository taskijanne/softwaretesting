import { assert } from 'chai';
import toNumber from '../src/toNumber.js';

describe('toNumber.js general tests', () => {
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

  it('should convert positive strings to numbers', () => {
    assert.strictEqual(toNumber('3.2'), 3.2);
    assert.strictEqual(toNumber('  42 '), 42);    
    assert.strictEqual(toNumber('0b1010'), 10);
    assert.strictEqual(toNumber('0o755'), 493);
    assert.strictEqual(toNumber('0x1A'), 26);
  });

  it('should convert negative strings to numbers', () => {
    assert.strictEqual(toNumber('-3.2'), -3.2);
    assert.strictEqual(toNumber('  -42 '), -42);
    assert.strictEqual(toNumber('-0b1010'), -10);
    assert.strictEqual(toNumber('-0o755'), -493);
    assert.strictEqual(toNumber('-0x1A'), -26);    
  });

  it('should return 0 for empty strings', () => {
    assert.strictEqual(toNumber(''), 0);
  });
});

describe('toNumber.js business logic tests', () => {

  const product1 = {
    name: "Tomato",
    price: "1.50"
  };

  const product2 = {
    name: "Tomato",
    price: undefined
  };

  const product3 = {
    name: "Tomato"
  };  

  const product4 = {
    name: "Tomato",
    price: "one million euros"
  };
  
  const product5 ={
    name: "Tomato",
    price: 0
  }

  it('should convert products price to number if products price is represented as string', () => {
    assert.strictEqual(toNumber(product1.price), 1.5);
    assert.strictEqual(toNumber(product5.price), 0);
  });
  
  it('should not convert undefined price to number', () => {
    assert.isTrue(isNaN(toNumber(product2.price)));
    assert.isTrue(isNaN(toNumber(product3.price)));
    assert.isTrue(isNaN(toNumber(product4.price)));
  });

});
