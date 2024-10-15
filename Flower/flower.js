let rAngle = 0;
let gAngle = 0;
let bAngle = 0;
let r = 175;
let rX, rY;

function setup() {
    createCanvas(700, 700);
  }
  
  function draw() {
    background(255);
    noFill();
    push();
    translate(350,350);
    circle(0, 0, r*2);
    strokeWeight(32);
    stroke(255, 0, 0); 

    for(let i=0;i<80;i+=2){
        rX = r*cos(i);
        rY = r*sin(i);
        point(rX, rY);
    }

    pop();




  }