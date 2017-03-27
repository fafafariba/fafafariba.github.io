
const threeLetters = JSON.parse(threeLetterWds);

const first = threeLetters[0].word;
console.log("hi");
console.log("first", first);

// const example = "cat";
//
// const array = example.split(""); //["c", "a", "t"]
//
//
// 3 x 5(3+2) = 15 combos
// 4 x 7(4+3) = 28 combos
//
// c
// ca
// cat*
// ct
// cta*
// ----
// a
// ac
// act*
// at
// atc*
// ----
// t
// tc
// tca*
// ta
// tac*
//
// "coat"
//
// c //coat str
// co
// coa
// coat
// ---- //cota str switch last 2
// c
// co
// cot
// cota
// ---- //cato str push secon
// c
// ca
// cat
// cato
// ---- //ctoa
// c
// ct
// cto
// ctoa
// --- //

const combinations = word => {
  if (word.length === 1) {
    return [word];
  } else {
    let previous = combinations(word.slice(0,word.length-1));
    let lastLetter = word[word.length-1];
    return previous.concat(partialWords(previous, lastLetter)).concat([lastLetter]);
  }
};

const partialWords = (word, letter) => {
  console.log("word", word, "letter", letter);
  let combos = [];

  for (let i = 0; i < word.length; i++) {
    let partialWord = word.slice(0, i) + letter + word.slice(i+1);
    console.log("partial", partialWord);
    combos.push(partialWord);
  }

  return combos;
};





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
