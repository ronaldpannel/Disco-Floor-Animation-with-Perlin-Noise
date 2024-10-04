let sizes = [];
let cols;
let rows;
let size = 10;
let xOff = 0;
let yOff = 0;
let zOff = 0
let inc = 0.1;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);

  cols = width / size;
  rows = height / size;
}

function draw() {
  background(220);
  xOff = 0;

  for (let i = 0; i < cols; i++) {
    sizes[i] = [];
    yOff = 0;
    for (let j = 0; j < rows; j++) {
      sizes[i][j] = map(noise(xOff, yOff, zOff), 0, 1, 0, size * 1.7);
      yOff += inc;
      let r = noise(zOff)* 255
      let g = noise(zOff + 15) * 255
      let b = noise(zOff + 30) * 255
      fill(r, g, b);
      noStroke();
      rect(size / 2 + i * size, size / 2 + j * size, sizes[i][j], sizes[i][j]);
    }
    xOff += inc;
    zOff += 0.0003
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {}
  }
}

function windowResized() {
  resizeCanvas(600, 600);
}
