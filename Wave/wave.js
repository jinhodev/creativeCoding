let speed = 0.1;
let cur = [];
let y = [];
let max = Math.random() * 100 + 250;
let n1 = 0;
let n2 = 0;
let counter = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220); //배경 설정

  for (let i = 0; i < counter + 2; i++) {
    cur.push(i);
  } //각 점의 각도 , i는 지금 기준 웨이브가 3개이고, 3개의 처음 높이가 0123 1234 2345 이런식 일때 마지막 5가 i값

  cur = cur.map(function (currentValue) {
    return currentValue + speed;
  }); //각각 각도를 speed만큼 증가

  endY = height / 2; //양 끝점 y좌표

  for (let j = 0; j < counter; j++) {
    for (let h = 0; h < 4; h++) {
      //점의 개수 = 4개
      if (h % 2 == 0) {
        y.push(endY + sin(cur[j + h]) * (max + 300));
      } else {
        y.push(endY + sin(cur[j + h]) * max);
      }
    }
  } //이중 for문으로 0123 1234 2345로 각 웨이브의 처름 시작 y를 다르게 설정한다. 그리고 각점이 사인 함수로 위아래로 움직인다

  color = ["rgba(0,199,235,0.4)", "rgba(0,146,199,0.4)", "rgba(0,87,158,0.4)"]; //시작은 0번쨰로 시작
  function Wave(index) {
    cx1 = ((width / 5) * 3) / 2; //bezierVertex()를 사용하기 위애 점 두개를 1, 2번째 점의 중점의 x값을 사용
    cx2 = ((width / 5) * 5) / 2;
    n1 = 4 * (index - 1);
    n2 = 2 + 4 * (index - 1);
    fill(color[index - 1]);
    smooth();
    beginShape();
    vertex((width / 5) * 0, endY);
    bezierVertex(cx1, y[n1], cx2, y[n2], (width / 5) * 5, endY);
    vertex((width / 5) * 5, height); // 오른쪽 아래 코너 생성으로 채움
    vertex((width / 5) * 0, height); // 왼쪽 아래 코너 생성 으로 아래 부분 채움
    endShape(CLOSE);
  }

  Wave(1); //객체 생성법 counter 하나 늘림, 색상 넣기, 객새 생성
  Wave(2);
  Wave(3);

  //   fill("rgba(0,199,235,0.4)");
  //   smooth();
  //   beginShape();
  //   vertex((width / 5) * 0, endY);
  //   bezierVertex(cx1, y[0], cx2, y[2], (width / 5) * 5, endY);
  //   vertex((width / 5) * 5, height); // 오른쪽 아래 코너 생성
  //   vertex((width / 5) * 0, height); // 왼쪽 아래 코너 생성 으로 아래 부분 채움
  //   endShape(CLOSE);

  //   fill("rgba(0,146,199,0.4)");
  //   smooth();
  //   beginShape();
  //   vertex((width / 5) * 0, endY);
  //   bezierVertex(cx1, y[4], cx2, y[6], (width / 5) * 5, endY);
  //   vertex((width / 5) * 5, height); // 오른쪽 아래 코너 생성
  //   vertex((width / 5) * 0, height); // 왼쪽 아래 코너 생성 으로 아래 부분 채움
  //   endShape(CLOSE);

  //   fill("rgba(0,87,158,0.4)");
  //   smooth();
  //   beginShape();
  //   vertex((width / 5) * 0, endY);
  //   bezierVertex(cx1, y[8], cx2, y[10], (width / 5) * 5, endY);
  //   vertex((width / 5) * 5, height); // 오른쪽 아래 코너 생성
  //   vertex((width / 5) * 0, height); // 왼쪽 아래 코너 생성 으로 아래 부분 채움
  //   endShape(CLOSE);

  y = []; //배열 초기화
}

addEventListener("resize", () => {
  setup();
});
