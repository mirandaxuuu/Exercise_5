var step = 0;
  
function setup(){
  createCanvas(700,900);
  background(205,164,158);

}

function head(r,g,b,x){ //allows users to change head color and size
  fill(r,g,b);
  ellipse(260,350,320-x,260-x);
  fill(255,255,255);
  
  arc(100+x/2,350,80,80,1.5,4.8,CHORD); //ears that changes w/ the change of head size
  arc(420-x/2,325,80,80,-1.9,1.4,CHORD);
  
  fill(255,200,200); //antenna that changes w/ the change of head size
  rect(180,75+x/2,50,150);
  rect(280,95+x/2,50,125);
    
  strokeWeight(4);
  line(200,70+x/2,220,20);
  line(300,90+x/2,340,25);
}

function eyes(m,n){ //eyes that move w/ mouse position
  fill(0,0,0);
  noStroke();
  ellipse(180+m/50,310+n/50,25,25);
  ellipse(320+m/50,330+n/50,25,25);
 
}

function body(r,g,b,x){
  strokeWeight(1);
  fill(71,31,31);
  ellipse(370,550,300,350); //body
  
  head(r,g,b,x);

  strokeWeight(1); //eyes
  fill(255,255,255);
  ellipse(200,330,80,80);
  ellipse(320,340,80,80);
  
  eyes(mouseX, mouseY);
  
  triangle(290,720,380,730,340,800); //legs
  triangle(440,720,510,670,490,780);
  
  fill(197,31,31);
  quad(270,550+step,240,600+step,260,650+step,290,600+step); //arms that move up and down when key pressed
  quad(420,510+step,390,550+step,410,610+step,440,560+step);
  
  noFill();
  strokeWeight(3);
  arc(260,410,80,80,0,PI);//mouse
  
  if(keyIsPressed){

    if(key == 's'){
      step += 5;
    }
    
    if(key == 'w'){
      step -= 5;
    }
    
    if(step>20){
      step=-100;
    }
    
    if(step<-100){
      step=20;
    }
  }
  
}
function draw(){
  body(100,200,50,30);
  
  if(mouseIsPressed){
    translate(170,250);
    scale(.5);
    body(50,20,200,80);
  }
}
