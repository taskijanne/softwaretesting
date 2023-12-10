import { assert } from 'chai';
import { expect } from 'chai';
import slice from '../src/slice.js';

describe('slice.js general tests', () => {


    it('checks that array is sliced correctly when no end value is given', () => {
        const array = [1, 2, 3, 4];

        expect(slice(array, 2)).to.deep.equal([3, 4]);
    });

    it('checks that array is sliced correctly when start and end value is given', () => {
        const array = [1, 2, 3, 4];

        expect(slice(array, 1, 3)).to.deep.equal([2, 3]);
    });

    it('returns an empty array when input is empty', () => {
        const array = [];

        expect(slice(array, 1, 3)).to.deep.equal([]);
    });

    it('handles negative start index correctly', () => {
        const array = [1, 2, 3, 4];

        expect(slice(array, -5, 2)).to.deep.equal([1, 2]);
    });

    it('handles negative end index correctly', () => {
        const array = [1, 2, 3, 4];

        expect(slice(array, 1, -1)).to.deep.equal([2, 3]);
    });

    it('handles negative start and end index correctly', () => {
        const array = [1, 2, 3, 4];

        expect(slice(array, -3, -1)).to.deep.equal([2, 3]);
    });

    it('handles out of range indexes correctly', () => {
        const array = [1, 2, 3, 4];

        expect(slice(array, 6, 7)).to.deep.equal([undefined]);
    });

    it('check that the length is 0 when array is null', () => {
        const array = null;

        expect(slice(array, 1, 3)).to.deep.equal([])
    });

    it('check that start defaults to 0 when start is null', () => {
        const array = [1, 2, 3, 4];

        expect(slice(array, null, 3)).to.deep.equal([1, 2, 3]);

    });

    it('check that empty array is returned when start is greater than end', () => {
        const array = [1, 2, 3, 4];

        const result = slice(array, 4, 3);

        expect(result).to.deep.equal([]);
    });
});