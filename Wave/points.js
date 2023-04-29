let y1 = 0;
let y2 = 0;
let y3 = 0;
let y4 = 0;
let speed = 0.1;
let cur = [];
let max = Math.random() * 100 + 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < 4; i++) {
    cur.push(i);
  }

  cur = cur.map(function (currentValue) {
    return currentValue + speed;
  });

  y0 = height - windowHeight / 2;
  y1 = height + sin(cur[0]) * max - windowHeight / 2; // sin 함수를 사용하여 y좌표 값 계산
  y2 = height + sin(cur[1]) * max - windowHeight / 2;
  y3 = height + sin(cur[2]) * max - windowHeight / 2;
  y4 = height + sin(cur[3]) * max - windowHeight / 2;
  y5 = height - windowHeight / 2;

  ellipse((width / 5) * 0, y0, 50, 50); // 계산된 y좌표 값으로 원을 그림
  ellipse((width / 5) * 1, y1, 50, 50); // 계산된 y좌표 값으로 원을 그림
  ellipse((width / 5) * 2, y2, 50, 50);
  ellipse((width / 5) * 3, y3, 50, 50);
  ellipse((width / 5) * 4, y4, 50, 50);
  ellipse((width / 5) * 5, y5, 50, 50); // 계산된 y좌표 값으로 원을 그림
}
