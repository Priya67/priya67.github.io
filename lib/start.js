
const Game = require("./game");
const Pacman = require("./pacman");

  const canvas = document.getElementById('pacman');
  const context = canvas.getContext('2d');

  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.scale(15, 15);

  const pacman = new Pacman();
  if(pacman.won) {
    let game = new Game(canvas, context, pacman);
  }
  let game = new Game(canvas, context, pacman);

  const newTest = () => {
    pacman.resetPacman();
    pacman.placeCoins(context);
  };

  window.newTest = newTest;

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
