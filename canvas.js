let canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth - 40;
canvas.height = 500;

let c = canvas.getContext("2d");

// c.fillRect(150, 150, 100, 100);
// c.fillRect(10, 10, 100, 100);
// c.fillRect(150, 350, 100, 100);
// c.fillRect(450, 450, 100, 100);

function drawCollage(num) {
  for (let i = 0; i < num; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    c.fillRect(x, y, 100, 100);
  }
}

drawCollage(13);

//----------------------------------------------------------------

c.beginPath();
c.moveTo(100, 200);
c.lineTo(120, 400);
c.lineTo(220, 120);
c.lineTo(30, 100);
c.lineTo(140, 220);
c.lineWidth = 33;
c.strokeStyle = "rgba(100, 100, 0)";
c.stroke();

//----------------------------------------------------------------

c.beginPath();
c.arc(440, 140, 100, 0, 2 * Math.PI, true);
c.strokeStyle = "limegreen";
c.stroke();
