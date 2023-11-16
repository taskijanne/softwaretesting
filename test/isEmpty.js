import { assert } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmtpy.js general tests', () => {
    it('should return true when value is empty', () => {
        assert.isTrue(isEmpty(null));
        assert.isTrue(isEmpty(true));
        assert.isTrue(isEmpty(NaN));
        assert.isTrue(isEmpty(undefined));
        assert.isTrue(isEmpty(0));
        assert.isTrue(isEmpty([]));
        assert.isTrue(isEmpty({}));
        assert.isTrue(new Set());
        assert.isTrue(new Map());
    });
});