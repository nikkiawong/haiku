import { findVowels } from '../src/haiku.js';
import { sliceE } from '../src/haiku.js';
import { sliceExtraVowel } from '../src/haiku.js';
import { checkFiveSyllables } from '../src/haiku.js';

describe('haiku checker', function() {

  it('should count the number of vowels', function() {
    let vowels = "octopus"
    expect(findVowels(vowels)).toEqual(3);
  });

  it('should remove the last letter of the word if that letter is "e"', function() {
    let word = "purple";
    expect(sliceE(word)).toEqual(['purpl']);
  });

  it('should remove the second vowel if there are two consecutive vowels', function() {
    let doubleVowelWord = "house";
    expect(sliceExtraVowel(doubleVowelWord)).toEqual(['h', 'o', 's', 'e']);
  });

  it('should remove the second and third vowels if there are three consecutive vowels', function() {
    let tripleVowelWord = "you";
    expect(sliceExtraVowel(tripleVowelWord)).toEqual(['y']);
  });

  it('should test whether line 1 or line 3 contain 5 syllables', function() {
    let numberOfSyllables = 5;
    expect(checkFiveSyllables(numberOfSyllables)).toEqual(true);
  });
});
