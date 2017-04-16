import Words from './words';
import isEqual from 'lodash/isequal';
import Timer from './timer';


class Game {
  constructor(){
    this.words = new Words();
    this.rounds = 0;
    this.correctWords = [];
    this.guesses = [];
    this.timer = new Timer();

    this.startTimer = this.startTimer.bind(this);
    this.allWordsGuessed = this.allWordsGuessed.bind(this);
    this.endRound = this.endRound.bind(this);
  }

  newRound(){
    this.timer = new Timer;
    this.rounds++;
    $('#round').text(`${this.rounds}`);
    this.startTimer();

  }

  startTimer(){
    this.timer.start(this.allWordsGuessed, this.endRound);
  }
  getGuess(){
    this.guesses.push(this.player.guess(this.words.scrambledLetters));
  }

  checkGuess(){
    let word = this.guesses.join("");
    console.log(word);
    if (this.words.wordSet.includes(word) &&
        !this.correctWords.includes(word)) {
      this.correctWords.push(word);
      console.log("YES");
      return true;
    } else {
      console.log("NO");
      return false;
    }
  }

  clearGuess(){
    this.guesses = [];
  }

  allWordsGuessed(){
    isEqual(this.correctWords.sort(), this.words.wordSet.sort());
  }

  endRound(){
    //render something
    $(".timer-round").remove();
    $(".scrambled").remove();
    $("#guesses-container").remove();
    $(".words-container").remove();
    this.clearGuess();
    this.correctWords = [];
    this.words = new Words();
    console.log("new word", this.words.randomWord);
  }

}

export default Game;
