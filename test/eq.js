import { assert } from 'chai';
import eq from '../src/eq.js';

describe('eq.js general tests', () => {

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

  it('should handle two different empty objects', () => {
    assert.isFalse(eq({}, {}));
  });

  it('should handle two references to same empty object', () => {
    const object3 = {}
    assert.isTrue(eq(object3, object3));
  });

});

const product1 = {
  name: "Tomato",
  price: 1.50
};

const product2 = {
  name: "Tomato",
  price: 1.50
};

const password1 = "password";
const password2 = "password";

const password3 = "1234";
const password4 = 1234;

describe('eq.js business logic tests', () => {
  it('should assume that two identical products are not equivalent', () => {
    assert.isFalse(eq(product1, product2));
  });

  it('should assume that two references to same product objects are equivalent', () => {
    assert.isTrue(eq(product1, product1));
  });

  it('should assume that two different password strings with same content are equivalent',() => {
    assert.isTrue(eq(password1, password2));
  });

  it('should assume that two same passwords with different data type are equivalent',() => {
    assert.isTrue(eq(password3, password4));
  });

});
