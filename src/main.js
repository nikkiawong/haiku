import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { findVowels } from './haiku.js';
import { sliceE } from './haiku.js';
import { sliceExtraVowel } from './haiku.js';
import { checkFiveSyllables } from './haiku.js';
import { checkSevenSyllables } from './haiku.js';
import { checkFullHaiku } from './haiku.js';

$(document).ready(function() {
  $(".haiku-form").submit(function() {
    event.preventDefault();
    let firstLineInput = $("input[name='first-line']").val();
    let secondLineInput = $("input[name='second-line']").val();
    let thirdLineInput = $("input[name='third-line']").val();

    $(".result").show();

    // first line of poem

    let slicedWord1 = sliceE(firstLineInput);
    let lessVowelsWord1 = sliceExtraVowel(slicedWord1);
    let syllableCount1 = findVowels(lessVowelsWord1);
    console.log(syllableCount1);
    let check = checkFiveSyllables(syllableCount1);
    $("#line1").text(firstLineInput + " (" + syllableCount1 + " syllables)");

    // check second line of poem

    let slicedWord2 = sliceE(secondLineInput);
    let lessVowelsWord2 = sliceExtraVowel(slicedWord2);
    let syllableCount2 = findVowels(lessVowelsWord2);
    let check2 = checkSevenSyllables(syllableCount2);
    $("#line2").text(secondLineInput + " (" + syllableCount2 + " syllables)");

    // check third line of poem

    let slicedWord3 = sliceE(thirdLineInput);
    let lessVowelsWord3 = sliceExtraVowel(slicedWord3);
    let syllableCount3 = findVowels(lessVowelsWord3);
    let check3 = checkFiveSyllables(syllableCount3);
    $("#line3").text(thirdLineInput + " (" + syllableCount3 + " syllables)");

    // check entire poem

    let finalResult = checkFullHaiku(check, check2, check3);
    $("#passFail").text(finalResult);

  });
});
