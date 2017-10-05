const monsters = [
  {pos:{x: 18, y:19}},
  {pos:{x: 20, y: 19}},
  {pos:{x: 22, y: 19}}];

class Ghost {
  constructor(context, color) {
    this.makeMonsters = this.makeMonsters.bind(this);
  }

  makeMonsters(context, color, index) {
    context.beginPath();
    context.arc(monsters[index].pos.x, monsters[index].pos.y, 0.6, 0*Math.PI, 2*Math.PI);
    context.fillStyle = color;
    context.fill();
  }

  // moveGhost(index) {
  //   var decimal = decimal * 38;
  //   var decimal =
  // }
}

module.exports = Ghost;
