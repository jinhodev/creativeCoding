let y1 = 0;
let speed = 0.1;
let cur = 0;
let max = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  cur = cur + speed;

  y1 = height + sin(cur) * max - windowHeight / 2; // sin 함수를 사용하여 y좌표 값 계산

  ellipse(width / 2, y1, 50, 50); // 계산된 y좌표 값으로 원을 그림
}
