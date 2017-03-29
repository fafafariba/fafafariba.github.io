class Timer {
  constructor(total) {
    console.log("new timer");
    this.seconds = 90;
    this.timer = null;
    this.decrementSeconds = this.decrementSeconds.bind(this);
  }

  start(){
    this.timer = setInterval(this.decrementSeconds, 1000);
  }

  decrementSeconds() {
    console.log("this.seconds", this.seconds);
    if (this.seconds) {
      this.seconds-- ;
    } else {
      clearInterval(this.timer);
    }
  }

  pause(){
    clearInterval(this.timer);
  }
}

module.exports = Timer;
