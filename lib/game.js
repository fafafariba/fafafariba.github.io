const Words = require('./words');
const Player = require('./player');
const Timer = require('./timer');


class Game {
  constructor(){
    console.log("new game");
    this.words = new Words();
    this.rounds = 0;
    this.correctWords = [];
    this.player = new Player();
    this.guesses = [];
    this.timer = new Timer();
  }

  getGuess(){
    console.log("get guess");
    this.guesses.push(this.player.guess(this.words.scrambledLetters));
  }

  checkGuess(){
    let word = this.guesses.split("");
    return this.words.includes(word) ? true : false;
  }

  clearGuess(){
    this.guesses = [];
  }

  addRound(){
    this.rounds++;
  }

}

module.exports = Game;
