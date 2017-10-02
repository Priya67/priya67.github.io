const canvas = document.getElementById('pacman');
const context = canvas.getContext('2d');

function draw() {
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);
  placeCoins();
  makePacman();
  makeMonsters();
}

context.scale(5, 5);

function makeMaze() {

}

function makePacman() {
  context.beginPath();
  context.arc((canvas.width/10)+2, (canvas.height/10)+2, 4, 0.25*Math.PI, 1.75*Math.PI);
  context.fillStyle = '#000';
  context.lineTo((canvas.width/10)+2, (canvas.height/10)+2);
  context.fillStyle = 'yellow';
  context.fill();
  context.stroke();
}

function makeMonsters() {
  context.beginPath();
  context.arc(canvas.width/10-(canvas.width/10 * 0.1), (canvas.height/10-(canvas.height/10 * 0.1)), 3, 1*Math.PI, 2*Math.PI);
  context.fillStyle = 'black';
  context.fillStyle = 'blue';
  context.fill();

  context.beginPath();
  context.arc(canvas.width/10+(canvas.width/10 * 0.1), (canvas.height/10-(canvas.height/10 * 0.1)), 3, 1*Math.PI, 2*Math.PI);
  context.fillStyle = 'black';
  context.fillStyle = 'pink';
  context.fill();

  context.beginPath();
  context.arc(canvas.width/10, (canvas.height/10-(canvas.height/10 * 0.1)), 3, 1*Math.PI, 2*Math.PI);
  context.fillStyle = 'black';
  context.fillStyle = 'green';
  context.fill();
}

document.addEventListener('keydown', event => {
  console.log(event);
});

function placeCoins() {
  for(let i = 2; i < canvas.height-2; i++) {
    for(let j = 2; j < canvas.width-2; j++) {
      if(j % 8 === 0 && i % 8 === 0) {
        context.beginPath();
        context.arc(i, j, 0.5, 0, 2 * Math.PI);
        context.fillStyle = '#FFD700';
        context.fill();
      }
    }
  }
}
        // context.beginPath();
        // context.arc(4, 4, 0.5, 0, 2 * Math.PI);
        // context.fillStyle = '#FFD700';
        // context.fill();
        //
        // context.beginPath();
        // context.arc(4, 5, 0.5, 0, 2 * Math.PI);
        // context.fillStyle = '#FFD700';
        // context.fill();
        //
        // context.beginPath();
        // context.arc(5, 5, 0.5, 0, 2 * Math.PI);
        // context.fillStyle = '#FFD700';
        // context.fill();
        //
        // context.beginPath();
        // context.arc(5, 4, 0.5, 0, 2 * Math.PI);
        // context.fillStyle = '#FFD700';
        // context.fill();

// }


draw();
