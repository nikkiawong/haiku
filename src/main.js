import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { findVowels } from './haiku.js';

$(document).ready(function() {
  $(".haiku-form").submit(function() {
    event.preventDefault();
    let userInput = $("input[type='text']").val();

    let vowelCount = findVowels(userInput);
    console.log(vowelCount);
  });
});
