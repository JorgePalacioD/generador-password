let word = "ccyt";
let numbers = "1957";
let SpecialCharacters = "!¡@#$%&()*+,-./:;<=>¿ ?@[]^_{|}~";
let counter = 0;

function generateCombinations(base, index) {
  if (index === base.length) {
    let newWord = base + numbers;
    for (k = 0; k <= newWord.length; k++) {
      for (l = 0; l < SpecialCharacters.length; l++) {
        let character = SpecialCharacters[l];
        let password =
          newWord.substring(0, k) + character + newWord.substring(k);
        counter++;
        console.log(
          'echo "' +
            password +
            '";steghide extract -sf HimnoReto14.wav -p "' +
            password +
            '" -v'
        );
      }
    }
    return;
  }

  generateCombinations(base, index + 1);

  let letter = base[index].toUpperCase();
  base = base.substring(0, index) + letter + base.substring(index + 1);
  generateCombinations(base, index + 1);
}

generateCombinations(word, 0);
