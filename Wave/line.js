let y0,
  y1,
  y2,
  y3,
  y4,
  y5 = 0;

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
    return currentValue + 0.05;
  });

  y0 = height - windowHeight / 2;
  y1 = height + sin(cur[0]) * max - windowHeight / 2;
  y2 = height + sin(cur[1]) * max - windowHeight / 2;
  y3 = height + sin(cur[2]) * max - windowHeight / 2;
  y4 = height + sin(cur[3]) * max - windowHeight / 2;
  y5 = height - windowHeight / 2;

  // 각 점 사이에 곡선 그리기
  line((width / 5) * 0, y0, (width / 5) * 1, y1);
  line((width / 5) * 1, y1, (width / 5) * 2, y2);
  line((width / 5) * 2, y2, (width / 5) * 3, y3);
  line((width / 5) * 3, y3, (width / 5) * 4, y4);
  line((width / 5) * 4, y4, (width / 5) * 5, y5);
}
