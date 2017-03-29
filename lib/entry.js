const Game = require("./game");
const View = require("./view");

$( () => {
  console.log("inside entry");
  const rootEl = $(".seek");
  const game = new Game();
  new View(game, rootEl);
});
