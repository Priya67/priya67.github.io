const Game = require("./game");
const Pacman = require("./pacman");

// document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('pacman');
  const context = canvas.getContext('2d');

  console.log("Start");

  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.scale(15, 15);

  const pacman = new Pacman();
  const game = new Game(canvas, context, pacman);

  document.addEventListener('keydown', event => {
    event.preventDefault();

    if (event.keyCode === 37) {
      pacman.check('left');
    }
    else if (event.keyCode === 39) {
      pacman.check('right');
    }
    else if (event.keyCode === 38) {
      pacman.check('up');
    }
    else if (event.keyCode === 40) {
      pacman.check('down');
    }
  });
