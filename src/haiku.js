const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

export function findVowels(userInput) {
  var allLetters = userInput.split("");
  var filteredArray = allLetters.filter(filterVowels);

  function filterVowels(el) {
    return vowels.indexOf(el) > -1;
  }

  return filteredArray.length;
}
