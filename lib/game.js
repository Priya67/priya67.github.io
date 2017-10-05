const Pacman = require("./pacman");
// const Coin = require("./coins");
const Ghost = require("./ghost");
const Board = require("./board");
const colors = ['purple', 'blue', 'pink'];

class Game {
  constructor(canvas, context, pacman) {
    this.pacman = pacman;
    this.board = new Board(context);
    // this.draw(canvas, context);
    this.ghost = [new Ghost(context, colors[0], 0), new Ghost(context, colors[1], 1),
                  new Ghost(context, colors[2], 2)];
    setInterval(() => {this.draw(canvas, context);},
                      200);
  }

  draw(canvas, context) {
    const that = this;
    // console.log(context);
    // console.log("drawing");
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.pacman.placeCoins(context);
    // console.log("placeCoins", context);
    this.board.makeMaze(context);
    // console.log("makeMaze", context);
    this.pacman.makePacman(context);
    // console.log("makePacman", context);
    this.ghost.forEach(((g, i) => (
      g.makeMonsters(context, colors[i], i)
    )));
    // console.log("makeMonsters", context);
    // requestAnimationFrame(this.draw);
    // console.log("AnimationFrame", context);
  }
}

module.exports = Game;
