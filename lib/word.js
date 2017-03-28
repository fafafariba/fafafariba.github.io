
const threeLetterObject = require('./threeLetterWords');
const fourLetterObject = require('./fourLetterWords');
const fiveLetterObject = require('./fiveLetterWords');

const threeLetterWords = threeLetterObject.map(word => word.word);
const fourLetterWords = fourLetterObject.map(word => word.word);
const fiveLetterWords = fiveLetterObject.map(word => word.word);

const length = fiveLetterWords.length;


class Word {
  constructor() {
    this.word = fiveLetterWords[this.randomWord(length)];
    this.scrambledLetters = this.shuffle(this.word.split(""));
    this.words = this.filtered(this.scrambledLetters);
  }

 randomWord(n){
   return Math.floor(Math.random() * n);
 }

 //algorithm finding word combinations

 shuffle(array) {
  let i = 0, j = 0, temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

 combinations(word) {
   if (word.length === 1) {
     return [word];
   } else {
     let previous = this.combinations(word.slice(0,word.length-1));
     let lastLetter = word[word.length-1];
     return previous.concat(this.partialCombos(previous, lastLetter))
     .concat([lastLetter]);
   }
 }

 partialCombos(words, letter) {
   let combos = [];

   words.forEach(word => {
     for (let i = 0; i <= word.length; i++) {
       let partialWord = word.slice(0, i) + letter + word.slice(i);
       combos.push(partialWord);
     }
   });

   return combos;
 }

 filtered(words) {
   const lengthFilter = this.combinations(words)
    .filter(word => word.length >= 3);
   const wordFilter = lengthFilter.filter(word => (
     threeLetterWords.includes(word) ||
     fourLetterWords.includes(word) ||
     fiveLetterWords.includes(word)
   ));
   return this.unique(wordFilter);
 }

 unique(words){
   let uniqueWords = [];

   words.forEach(word => {
     if (!uniqueWords.includes(word)) {
       uniqueWords.push(word);
     }
   });

   return uniqueWords;
 }


}


const w = new Word();

console.log(w.word);
console.log(w.scrambledLetters);
console.log(w.words);

module.exports = Word;




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
