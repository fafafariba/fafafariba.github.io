
class View {
  constructor(game, $el){
    console.log("new view");
    this.game = game;
    console.log("this.game", this.game);
    this.$el = $el;
    console.log('this.$el', this.$el);
    this.paused = false;

    $(document).click(this.splash.bind(this));
    $(document).keydown(this.keyRouter.bind(this));

    this.newRound = this.newRound().bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.renderCorrectGuess = this.renderCorrectGuess.bind(this);
    this.renderIncorrectGuess = this.renderIncorrectGuess.bind(this);

  }


  splash(event) {

    let s = ("<div class='seek-letter'><h1>S</h1><div>");
    let e = ("<div class='seek-letter'><h1>E</h1><div>");
    let e2 = ("<div class='seek-letter'><h1>E</h1><div>");
    let k = ("<div class='seek-letter'><h1>K</h1><div>");

    let seek = [s, e, e2, k];
    seek.forEach((letter, idx )=>{
      $(letter).hide().appendTo("#seek-letter-container")
      .fadeIn(1000 * ( seek.length - idx ));
    });

    let instructions = ("<div class='instructions-animate'><h2> Instructions</h2><p>Seek as many words as you can before the timer runs out. Press SHIFT to start</p></div>");

    setTimeout( () => {
      $("#seek-letter-container").fadeOut(2000);
      $("#seek-letter-container").promise().done(() => {
        $(instructions).hide().appendTo(this.$el).fadeIn(2000);
      });
    }, 5000);
  }


  newRound(){
    $(".instructions-animate").empty();
    console.log("in new round");
    this.game.addRound();
    this.game.timer.start();
    this.$el.append(`<div class='timer-round'><div><h3>TIME: ${this.game.timer.seconds}</h3></div><div><h3>ROUND: ${this.game.round}</h3></div></div>`);
    if (this.game.timer.seconds) {
      console.log(this.game.timer.seconds);
      this.game.getGuess();
    }
    this.endRound();
  }

  endRound(){
    console.log("end of round");
  }

  togglePause(){
    if (this.paused){
      console.log("resume");
      this.game.timer.start();
      this.paused = false;
    } else {
      console.log("pause");
      this.game.timer.pause();
      this.paused = true;
    }
  }

  renderIncorrectGuess(){
    //some animation
    this.game.clearGuess();
  }

  renderCorrectGuess(){
    //some animation
    this.game.clearGuess();
  }


  keyRouter(event){
    switch (event.key) {
      case 'Shift':
        event.stopPropagation();
        this.newRound();
      case 'Enter':
        event.stopPropagation();
        if (this.game.checkGuess()) {
          this.renderCorrectGuess();
        } else {
          this.renderIncorrectGuess();
        }
        break;
      case 'Backspace':
        event.stopPropagation();
        this.game.clearGuess();
        break;
      case " ":
        event.stopPropagation();
        this.togglePause();
      default:
        event.stopPropagation();
        return;
    }
  }

}

module.exports = View;

// <div class="timer-round">
// <ul>
//   <li><h2>TIMER: </h2></li>
//   <li><h2>ROUND: </h2></li>
// </ul>
