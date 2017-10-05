const monsters = [
  {pos:{x: 18, y:19}},
  {pos:{x: 20, y: 19}},
  {pos:{x: 22, y: 19}}];

class Ghost {
  constructor(context, color) {
    this.makeMonsters = this.makeMonsters.bind(this);
    this.moveGhost = this.moveGhost.bind(this);
  }

  makeMonsters(context, color, index) {
    context.beginPath();
    context.arc(monsters[index].pos.x, monsters[index].pos.y, 0.6, 0*Math.PI, 2*Math.PI);
    context.fillStyle = color;
    context.fill();
    this.moveGhost(index);
  }

  moveGhost(index) {
    var decimal1 = Math.random();
    monsters[index].pos.x = Math.floor(decimal1 * 38);
    var decimal2 = Math.random();
    monsters[index].pos.y = Math.floor(decimal2 * 38);
    console.log("monster pos", index, monsters[index].pos);
  }
}

module.exports = Ghost;
