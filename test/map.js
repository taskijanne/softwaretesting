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
});