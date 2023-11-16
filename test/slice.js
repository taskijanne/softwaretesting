import { assert } from 'chai';
import { expect } from 'chai';
import slice from '../src/slice.js';

describe('slice.js general tests', () => {


    it('checks that array is sliced correctly', () => {
        const array = [1, 2, 3, 4];

        expect(() => slice(array, 2).to.deep.equal([3, 4]))
    });
});