import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { findVowels } from './haiku.js';
import { sliceE } from './haiku.js';
import { sliceExtraVowel } from './haiku.js';

$(document).ready(function() {
  $(".haiku-form").submit(function() {
    event.preventDefault();
    let userInput = $("input[type='text']").val();

    let slicedWord = sliceE(userInput);
    console.log("slicedWord: " + slicedWord);

    let lessVowelsWord = sliceExtraVowel(slicedWord);
    console.log("lessVowelsWord: " + lessVowelsWord);

    let syllableCount = findVowels(lessVowelsWord);
    console.log("Number of Syllables: " + syllableCount);
  });
});
