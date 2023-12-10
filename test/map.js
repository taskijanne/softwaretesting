import { assert } from 'chai';
import { expect } from 'chai';
import map from '../src/map.js';

describe('map.js general tests', () => {


    it('checks that discount it added to all items in array correctly', () => {
        const priceArray = [10, 20, 50];
        const discountPercent = 0.1;

        function discount(value, discountPercent) {
            return value * (1-discountPercent);
        }

        expect(() => map(priceArray, discount).to.deep.equal([9, 18, 45]));
    });

    it('maps array elements using a function that adds 1', () => {
        function addOne(n) {
          return n + 1;
        }
    
        const inputArray = [1, 2, 3];
        const expectedResult = [2, 3, 4];
    
        const result = map(inputArray, addOne);
    
        expect(result).to.deep.equal(expectedResult);
      });
    
      it('returns an empty array for an empty input array', () => {
        function identity(n) {
          return n;
        }
    
        const inputArray = [];
        const result = map(inputArray, identity);
    
        expect(result).to.deep.equal([]);
      });
});