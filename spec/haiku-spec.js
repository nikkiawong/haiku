import { findVowels } from '../src/haiku.js';

describe('haiku checker', function() {

it('count the number of vowels', function() {
  var vowels = "octopus"
  expect(findVowels(vowels)).toEqual(3);
  });
});
