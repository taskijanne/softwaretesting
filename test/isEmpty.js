import { assert } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmtpy.js general tests', () => {
    it('should return true for null value', () => {
        assert.isTrue(isEmpty(null));
    });

    it('should return true for true', () => {
        assert.isTrue(isEmpty(true));
    });

    it('should return true for NaN', () => {
        assert.isTrue(isEmpty(NaN));
    });

    it('should return true for undefined', () => {
        assert.isTrue(isEmpty(undefined));
    });

    it('should return true for 0', () => {
        assert.isTrue(isEmpty(0));
    });

    it('should return true for empty array', () => {
        assert.isTrue(isEmpty([]));
    });

    it('should return true for empty object', () => {
        assert.isTrue(isEmpty({}));
    });

    it('should return true for empty Set', () => {
        assert.isTrue(isEmpty(new Set()));
    });

    it('should return true for empty Map', () => {
        assert.isTrue(isEmpty(new Map()));
    });

    it('should return true for custom prototype', () => {
        const customObject = Object.create(null);
        assert.isTrue(isEmpty(customObject));
    });

    it('should return true for custom prototype with no value', () => {
        const customObject = Object.create({key : null});
        assert.isTrue(isEmpty(customObject));
    });

    it('should return false for non-empty array', () => {
        assert.isFalse(isEmpty([1, 2, 3]));
    });

    it('should return false for non-empty string', () => {
        assert.isFalse(isEmpty("test string"));
    });

    it('should return false for non-empty object', () => {
        assert.isFalse(isEmpty({key : "value"}));
    });
});