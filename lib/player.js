class Player {
  constructor(){
    $(document).keydown(this.guess.bind(null, this));
  }

  guess(letters){
    console.log("letters", letters);
    if (letters.length && letters.includes(event.key)) {
      return event.key;
    }
  }
}

module.exports = Player;
