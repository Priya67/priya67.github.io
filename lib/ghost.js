class Ghost {
  constructor(context, color) {
    this.makeMonsters = this.makeMonsters.bind(this);
  }

  makeMonsters(context, color, index) {
    // console.log("making monster");
    context.beginPath();
    context.arc(17+index+2, 19, 0.6, 0*Math.PI, 2*Math.PI);
    context.fillStyle = color;
    context.fill();

    // context.beginPath();
    // context.arc(19, 19, 0.5, 0*Math.PI, 2*Math.PI);
    // context.fillStyle = 'black';
    // context.fillStyle = color;
    // context.fill();
    //
    // context.beginPath();
    // context.arc(21, 19, 0.5, 0*Math.PI, 2*Math.PI);
    // context.fillStyle = 'black';
    // context.fillStyle = color;
    // context.fill();
  }
}

module.exports = Ghost;
