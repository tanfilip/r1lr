const { expect, it } = require('@jest/globals');
const { r1lr } = require('./lattice-rule.js');

describe('lattice-rule', () => {
    it('returns a length n array', () => {
        expect(r1lr([0], 0)).toHaveLength(0);
        expect(r1lr([1, 2], 0)).toHaveLength(0);
        expect(r1lr([1, 2], 5)).toHaveLength(0);
    });
    it('returns all numbers from 0 to n-1 if z is relatively prime', () => {
        expect(r1lr([5], 12).flat().sort((a, b) => a - b))
          .toEqual(Array.from((new Array(12)).keys()));
    });
});