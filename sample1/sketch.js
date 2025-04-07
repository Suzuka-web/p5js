function setup() {
	createCanvas(400, 400);
	background(220);
}

function draw() {
	mousePresssed();
}

function mousePresssed(){
	fill(255,0,0);
	ellipse(mouseX, mouseY, 50, 50);
}