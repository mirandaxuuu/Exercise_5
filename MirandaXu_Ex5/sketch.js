function setup() {
  createCanvas(700, 700);
  background(214, 0, 23);
  frameRate (69);
}

function draw() {
  dragon(150);
  sheep(100,50);
  translate(200,200);
  dragon(10);
  sheep(20,200);
}

function sheep(x,y){
  fill(200, x,y);
  rect(40, height/2, 200, 90); //body
  stroke(321, 87, 77);
  strokeWeight(5);
  fill(127, 0, 127);
  ellipse(40, height/2, 60, 70); //head
  fill(100, 100, 100);
  ellipse(30, height/2, 2, 2); //left eye
  fill(100, 100, 100);
  ellipse(50, height/2, 2, 2); //right eye
  line(24, height/2-18, 36, height/2-12); //left eyebrow
  line(46, height/2-12, 54, height/2-18); //right eyebrow
  point(width/2-270, height/2+73); //its spots, bottom left
  point(width/2-270, height/2+33); //top left spot
  point(width/2-170, height/2+73); //bottom right spot
  point(width/2-170, height/2+33); //top right spot
  point(width/2-220, height/2+73); //bottom mid spot
  point(width/2-220, height/2+33); //top mid spot
  quad(width/2-120, height/2-13, //tail
  width/2-130, height/2+13,  
  width/2-140, height/2-3,
  width/2-130, height/2-23);
  line(width/2-270, height/2+93, width/2-270, height/2+113); 
  line(width/2-170, height/2+93, width/2-170, height/2+113);
  
}

function dragon(a){
  fill(0, 127, 0, a);
  rect(mouseX, mouseY, mouseX, mouseY/2);  //dragon (pt 1)
  fill(127, 0, 30);
  ellipse(mouseX, mouseY, 20, 20);
  ellipse(mouseX+mouseX, mouseY, 20, 20);
  smooth();
  if(mouseIsPressed){ //dragon (angry)
  rect(mouseX, mouseY, mouseX+10, mouseY/2);
  fill(200, 0, 0, a);
  ellipse(mouseX, mouseY, 20, 20);
  ellipse(mouseX+mouseX, mouseY, 20, 20);
  smooth();}
  if(keyIsPressed){ //dragon (fat)
  rect(mouseX, mouseY, mouseX+300, mouseY/2+300);
  fill (120, 0, 110, a);
  ellipse(mouseX, mouseY, 20, 20);
  ellipse(mouseX+mouseX+300, mouseY, 20, 20);
  smooth();}
}