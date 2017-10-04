const Pacman = require("./pacman");
const Coin = require("./coins");
const Ghost = require("./ghost");
const Board = require("./board");

class Game {
  constructor(canvas, context) {
    this.pacman = new Pacman(context);
    this.board = new Board(context);
    // this.draw(canvas, context);
    this.draw = this.draw.bind(this)(canvas, context);
  }

  draw(canvas, context) {
    
    console.log("drawing");
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.pacman.placeCoins(context);
    this.board.makeMaze(context);
    this.pacman.makePacman(context);
    this.pacman.makeMonsters(context);
    requestAnimationFrame(this.draw);
  }
}

module.exports = Game;
