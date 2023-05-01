let speedX = 1;
let speedY = 1;
let aocX = 0;
let aocY = 0;
let max = 10;

let startX = window.innerWidth / 2;
let startY = window.innerHeight / 1 - 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  aocX = aocX + speedX;
  aocY = aocY - speedY;
  noStroke();
  fill(1, 145, 142);
  smooth();
  beginShape();
  vertex(350, 500);
  vertex(windowWidth / 2, 500);
  vertex(windowWidth / 2, 530);
  vertex(windowWidth / 2 - 70, 560);
  vertex(280, 560);
  vertex(280, 530);
  endShape();
  fill(1, 255, 199);
  beginShape();
  vertex(350, 500);
  vertex(windowWidth / 2, 500);
  vertex(windowWidth / 2, 530);
  vertex(350, 530);
  endShape();
  fill(1, 198, 196);
  beginShape();
  vertex(350, 500);
  vertex(350, 530);
  vertex(280, 560);
  vertex(280, 530);
  endShape();
  fill(1, 105, 222);
  x = startX + aocX * max;
  y = startY + aocY * max;
  ellipse(x, y, 100, 100);

  if (x + 50 > windowWidth) {
    speedX = speedX * -1; //오른쪽 벽
  } else if (y - 50 < 0) {
    speedY = speedY * -1; //위쪽 벽
  } else if (x - 50 < 0) {
    speedX = speedX * -1; //왼쪽 벽
  } else if (y + 50 > windowHeight) {
    speedY = speedY * -1; //위쪽 벽
  } else if (x + 50 == 280) {
    speedX = speedX * -1; //오른쪽 벽
    //오른쪽 벽
  } else if (Math.floor((x + 50) * 0.1) == 35 && speedX == 1 && 53 < y * 0.1 && y * 0.1 < 56) {
    speedX = speedX * -1; //오른쪽 벽
    console.log(y);
  } else if ((y + 50) * 0.1 == 50 && speedY == -1 && 53 < y * 0.1 && y * 0.1 < 56) {
    speedY = speedY * -1; //위쪽 벽
  }
}
