
const Game = require("./game");
const Pacman = require("./pacman");
const Monster = require("./monster");

  const canvas = document.getElementById('pacman');
  const context = canvas.getContext('2d');

  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.scale(15, 15);

  const pacman = new Pacman();
  const monster = new Monster();
  if(pacman.winner === true) {
    game = new Game(canvas, context, pacman);
  }
  let game = new Game(canvas, context, pacman);

  const newTest = () => {
    // game = new Game(canvas, context, pacman);
    // pacman.resetPacman(context);
    // pacman.placeCoins(context);
    location.reload();
  };

  // if(pacman.player.pos === monsters[0].monsters[0].pos )

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
