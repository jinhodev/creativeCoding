let x1, x2, x3, x4;


function setup() {

  createCanvas(700, 400);
  noStroke();

}

function draw() {
	background(0);
	
	//var j = 0;
	//var k = 0;
	////let t = frameCount *0.05;
	
	//for (var q = 0; q < 19; q++) {
		//for (var i = 0; i < 6; i++) {
			//text('WORLD', 200+j*sin(t), 20+k);
			//j = j + 50;
		//}
		//k = k+20;
		//j = 0;
	//}
	
	let t = frameCount *0.05;


	
	var j = 0;
	var k = 0;
	var q = 0;
	for (var w = 0; w < 20; w++) {   //여러개의 행 생성
		for (var i = 0; i < 5; i++) {   // 하나의 행 생성 
			text('WORLD', (200+j)+sin(t+k)*10, 20+q);
			j += 50;
		}
		j = 0; //변수 초기화
		k += 0.5;
		q += 20;
	}

	



	fill(255);
		


	}
