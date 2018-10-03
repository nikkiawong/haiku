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

    let vowelCount = findVowels(userInput);
    let slicedWord = sliceE(userInput);

    // console.log(slicedWord.join(" "));

    let lessVowelsWord = sliceExtraVowel(userInput);
    console.log(lessVowelsWord);
  });
});
