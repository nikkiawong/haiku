const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

export function findVowels(lessVowelsWord) {
  // let allLetters = slicedWord.split("");
  let filteredArray = lessVowelsWord.filter(filterVowels);

  function filterVowels(el) {
    return vowels.indexOf(el) > -1;
  }

  return filteredArray.length;
}

export function sliceE(userInput) {
  let words = userInput.split(" ");
  let i;

  words.forEach(function(i) {
    if (i.charAt(i.length - 1) === 'e') {
      let wordBeginning = i.substring(0, i.length - 1);
      words.splice(words.indexOf(i), 1, wordBeginning);
    }
  })

  return words;
}

export function sliceExtraVowel(slicedWord) {
  let letters = slicedWord.toString();
  letters = letters.split("");

  letters.forEach(function(char, i, array) {

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'y') {
      if (array[i+1] === 'a' || array[i+1] === 'e' || array[i+1] === 'i' ||  array[i+1] === 'o' || array[i+1] === 'u' || array[i+1] === 'y') {
        if (array[i+2] === 'a' || array[i+2] === 'e' || array[i+2] === 'i' ||  array[i+2] === 'o' || array[i+2] === 'u' || array[i+2] === 'y') { letters.splice(i + 1, 2);
        }
        else {
              letters.splice(i + 1, 1);
        }

      }
    }



  })

  return letters;

}

export function checkFiveSyllables(syllableCount1) {
  if (syllableCount1 === 5) {
    return true;
  } else {
    return false;
  }
}

export function checkSevenSyllables(syllableCount2) {
  if (syllableCount2 === 7) {
    return true;
  } else {
    return false;
  }
}

export function checkFullHaiku(check, check2, check3) {
  if (check === true && check2 === true && check3 === true) {
    return "This is a haiku!";
  } else {
    return "This is not a haiku";
  }
}
