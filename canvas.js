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
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    c.fillRect(x, y, 100, 100);
  }
}

drawCollage(13);

//----------------------------------------------------------------

c.beginPath();
c.moveTo(100, 200);
c.lineTo(120, 400);
c.stroke();
