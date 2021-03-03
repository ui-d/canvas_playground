let canvas = document.querySelector("#canvas");

console.log("test");

canvas.width = window.innerWidth - 40;
canvas.height = 500;

let c = canvas.getContext("2d");

c.beginPath();
c.moveTo(100, 20);
c.lineTo(200, 160);
c.quadraticCurveTo(230, 200, 250, 120);
c.bezierCurveTo(290, -40, 300, 200, 400, 150);
c.lineTo(500, 90);

c.lineWidth = 5;
c.strokeStyle = "white";
c.stroke();

function Path() {
  this.draw = function () {};

  this.update = function () {
    this.draw();
  };
}

new Path();
