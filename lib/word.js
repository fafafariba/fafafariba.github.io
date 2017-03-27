
// somehow import dictionaries



//algorithm finding word combinations

const combinations = word => {
  if (word.length === 1) {
    return [word];
  } else {
    let previous = combinations(word.slice(0,word.length-1));
    let lastLetter = word[word.length-1];
    return previous.concat(partialCombos(previous, lastLetter))
      .concat([lastLetter]);
  }
};

const partialCombos = (words, letter) => {
  let combos = [];

  words.forEach(word => {
    for (let i = 0; i <= word.length; i++) {
      let partialWord = word.slice(0, i) + letter + word.slice(i);
      combos.push(partialWord);
    }
  });

  return combos;
};

window.partialCombos = partialCombos;
window.combinations = combinations;

//random select 5 letter word

//select length 3+

//select real wordsA





//optimizing

//pre-load files with 5 letters words
//min 3 words long
//modified dicionary with 3-5 length words

//onloading, randomly select word from 5 letter word file

//Finds permutations that are words
  //Can further optimize by putting in some preset data




//buttons: clear, mix, enter

//onEnter -> enter
//onBackSpace -> clear
//onKeyPress vs. onKeyDown
//onTab -> mix

//Timer
//Round
