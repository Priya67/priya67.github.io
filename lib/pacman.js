// const canvas = document.getElementById('pacman');
// const context = canvas.getContext('2d');

// function draw() {
//   context.fillStyle = '#000';
//   context.fillRect(0, 0, canvas.width, canvas.height);
//   placeCoins(outline);
//   makeMaze();
//   makePacman(player);
//   makeMonsters();
//   requestAnimationFrame(draw);
// }
const outline = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


const Board = require("./board");
const Game = require("./game");

const player = {
  pos: {x: 20,
    y: 23
  },
  direction: ''
};

class Pacman {

  constructor(context) {
    // this.board = new Board(context);
    this.check = this.check.bind(this);
    this.makePacman = this.makePacman.bind(this);
    this.placeCoins = this.placeCoins.bind(this);
    this.makeMonsters = this.makeMonsters.bind(this);
  }

  collide(current_pacman) {
    console.log(current_pacman);
    console.log(outline[current_pacman.pos.x][current_pacman.pos.y]);
    let i = current_pacman.pos.x;
    let j = current_pacman.pos.y;
    if(i < 38 && i > 0) {
      if(j < 38 && j > 0) {
        if(outline[j-1][i-1]!==1) {
          console.log("false");
          return false;
        }
      }
    }
    return true;
  }

  makePacman(context) {
    context.beginPath();
    switch (player.direction) {
      case 'right':
      context.arc(player.pos.x, player.pos.y, 0.5, 0.25*Math.PI, 1.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x, player.pos.y);
      context.fillStyle = 'yellow';
      context.fill();
      break;

      case 'left':
      context.arc(player.pos.x, player.pos.y, 0.5, -0.75*Math.PI, -1.25*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x, player.pos.y);
      context.fillStyle = 'yellow';
      context.fill();
      break;

      case 'top':
      context.arc(player.pos.x, player.pos.y, 0.5, -2.25*Math.PI, -0.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x, player.pos.y);
      context.fillStyle = 'yellow';
      context.fill();
      break;

      case 'down':
      context.arc(player.pos.x, player.pos.y, 0.5, 0.75*Math.PI, 2.25*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x, player.pos.y);
      context.fillStyle = 'yellow';
      context.fill();
      break;

      default:
      context.arc(player.pos.x, player.pos.y, 0.5, 0.25*Math.PI, 1.75*Math.PI);
      context.fillStyle = '#000';
      context.lineTo(player.pos.x, player.pos.y);
      context.fillStyle = 'yellow';
      context.fill();
    }
  }

  makeMonsters(context) {
    context.beginPath();
    context.arc(17, 19, 0.5, 0*Math.PI, 2*Math.PI);
    context.fillStyle = 'blue';
    context.fill();

    context.beginPath();
    context.arc(19, 19, 0.5, 0*Math.PI, 2*Math.PI);
    context.fillStyle = 'black';
    context.fillStyle = 'purple';
    context.fill();

    context.beginPath();
    context.arc(21, 19, 0.5, 0*Math.PI, 2*Math.PI);
    context.fillStyle = 'black';
    context.fillStyle = 'green';
    context.fill();
  }

  check(direction) {

    if (direction === 'left') {
      if((player.pos.x === 1 && player.pos.y === 18) ||
      (player.pos.x === 1 && player.pos.y === 19)) {
        player.pos.x = 37;
      }
      else {
        if(!this.collide({pos: {x: player.pos.x-1, y: player.pos.y}})){
          this.clearSpot(player.pos);
          player.pos.x-=1;
        }
        player.direction='left';
      }

    } else if (direction === 'right') {
      if((player.pos.x === 37 && player.pos.y === 18) ||
      player.pos.x === 37 && player.pos.y === 19) {
        player.pos.x = 1;
      }
      else {
        if(!this.collide({pos: {x: player.pos.x+1, y: player.pos.y}})){
          this.clearSpot(player.pos);
          player.pos.x+=1;
        }
        player.direction='right';
      }

    } else if (direction === 'up') {
      if(!this.collide({pos: {x: player.pos.x, y: player.pos.y-1}})){
        this.clearSpot(player.pos);
        player.pos.y-=1;
        player.direction='top';
      }

    } else if (direction === 'down') {
      if(!this.collide({pos: {x: player.pos.x, y: player.pos.y+1}})){
        this.clearSpot(player.pos);
        player.pos.y+=1;
        player.direction='down';
      }
    }
  }

  // document.addEventListener('keydown', event => {
  //   event.preventDefault();
  //
  //   if (event.keyCode === 37) {
  //     if((player.pos.x === 1 && player.pos.y === 18) ||
  //     (player.pos.x === 1 && player.pos.y === 19)) {
  //       player.pos.x = 37;
  //     }
  //     else {
  //       if(!this.collide({pos: {x: player.pos.x-1, y: player.pos.y}})){
  //         this.clearSpot(player.pos);
  //         player.pos.x-=1;
  //       }
  //       player.direction='left';
  //     }
  //
  //   } else if (event.keyCode === 39) {
  //     if((player.pos.x === 37 && player.pos.y === 18) ||
  //     player.pos.x === 37 && player.pos.y === 19) {
  //       player.pos.x = 1;
  //     }
  //     else {
  //       if(!this.collide({pos: {x: player.pos.x+1, y: player.pos.y}})){
  //         this.clearSpot(player.pos);
  //         player.pos.x+=1;
  //       }
  //       player.direction='right';
  //     }
  //
  //   } else if (event.keyCode === 38) {
  //     if(!this.collide({pos: {x: player.pos.x, y: player.pos.y-1}})){
  //       this.clearSpot(player.pos);
  //       player.pos.y-=1;
  //       player.direction='top';
  //     }
  //
  //   } else if (event.keyCode === 40) {
  //     if(!this.collide({pos: {x: player.pos.x, y: player.pos.y+1}})){
  //       this.clearSpot(player.pos);
  //       player.pos.y+=1;
  //       player.direction='down';
  //     }
  //   }
  // });

  clearSpot(position) {
    outline[position.y-1][position.x-1]=2;
  }

  placeCoins(context) {
    for(let i = 0; i < 38; i++) {
      for(let j = 0; j < 38; j++) {
        if(outline[i][j]===0) {
          context.beginPath();
          context.arc(j+1, i+1, 0.19, 0, 2 * Math.PI);
          context.fillStyle = '#FFD700';
          context.fill();
        }
      }
    }
    // for(let i = 1; i < canvas.height/15; i++) {
    //   for(let j = 1; j < canvas.width/15; j++) {
    //       context.beginPath();
    //       context.arc(i, j, 0.19, 0, 2 * Math.PI);
    //       context.fillStyle = '#FFD700';
    //       context.fill();
    //   }
    // }

  // function play() {
  //   draw();
  // }
  //
  // play();

}}

module.exports = Pacman;
