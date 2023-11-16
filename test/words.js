import { assert } from 'chai';
import { expect } from 'chai';
import words from '../src/words.js';

describe('words.js general tests', () => {
    const string = 'fred, barney, & pebbles';

    it('checks that words are split correctly without regexp', () => {
       

        expect(words(string)).to.deep.equal(['fred', 'barney', 'pebbles']);
    });

    it('checks that words are split correctly with regexp', () => {
 
         expect(words(string, /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
     });
});