import { assert } from 'chai';
import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp.js general tests', () => {
    const numberBelowLower = -10;
    const numberAboveUpper = 10;
    const numberWithinBounds = 0;
    const lower = -5;
    const upper = 5;

    it('checks when number is below lower bound', () => {
        assert.strictEqual(clamp(numberBelowLower, lower, upper), lower);
    });

    it('checks when number is above upper bound', () => {
        assert.strictEqual(clamp(numberAboveUpper, lower, upper), upper);
    });

    it('checks when number is exactly at lower bound', () => {
        assert.strictEqual(clamp(lower, lower, upper), lower);
    });

    it('checks when number is exactly at upper bound', () => {
        assert.strictEqual(clamp(upper, lower, upper), upper);
    });

    it('checks when number is inside the bound values', () => {
        assert.strictEqual(clamp(numberWithinBounds, lower, upper), numberWithinBounds);
    });

    it('checks for exception when upper bound is below lower bound', () => {
        expect(() => clamp(numberWithinBounds, upper, lower).to.throw(Error, 'Function throws an error correctly'))
    });
});