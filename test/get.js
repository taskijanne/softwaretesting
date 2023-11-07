import { assert } from 'chai';
import get from '../src/get.js';

describe('get.js general tests', () => {
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


describe('get.js business logic related tests', () => {

  const productList = [
    {
      productId: 1,
      productName: "Tomato",
      displayName: "Tasty tomato ;)",
      price: 0.2
    },
    {
      productId: 2,
      productName: "Cucumber",
      displayName: undefined,
      price: 1.5
    },
    {
      productId: 3,
      productName: "Pepper",
      price: 1.5
    },
    {
      productId: 4,
      productName: "Vegetable basket",
      displayName: "Basket of veggies",
      price: 10,
      subProducts: [        
          {
            product: {
              productId: 1,
              productName: "Tomato",
              displayName: "Tasty tomato ;)",
            },
            quantity: 10
          },          
          {
            product: {
              productId: 2,
              productName: "Cucumber",
              displayName: undefined,              
            },
            quantity: 10
          }             
      ]
    }
  ]

  it('should return product names of the product and subproducts in the list', () => {
    assert.strictEqual(get(productList, '0.productName'), 'Tomato');
    assert.strictEqual(get(productList, '1.productName'), 'Cucumber');
    assert.strictEqual(get(productList, '2.productName'), 'Pepper');
    assert.strictEqual(get(productList, '3.productName'), 'Vegetable basket');
    assert.strictEqual(get(productList, '3.subProducts.0.product.productName'), 'Tomato');
    assert.strictEqual(get(productList, '3.subProducts.1.product.productName'), 'Cucumber');

    assert.strictEqual(get(productList, ['2', 'productName']), 'Pepper')
  });

  it('should return product displayNames of the products considering that some of the products dont have displayName set', () => {
    assert.strictEqual(get(productList, '0.displayName'), 'Tasty tomato ;)');
    assert.strictEqual(get(productList, '1.displayName'), undefined);
    assert.strictEqual(get(productList, '2.displayName'), undefined);
    assert.strictEqual(get(productList, '3.displayName'), 'Basket of veggies');
    assert.strictEqual(get(productList, '3.subProducts.0.product.displayName'), 'Tasty tomato ;)');
    assert.strictEqual(get(productList, '3.subProducts.1.product.displayName'), undefined);
  });
  
  it('returns correct length for subproducts under product', () => {
    assert.strictEqual(get(productList, '3.subProducts').length, 2);
  });

});