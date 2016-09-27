var step=0; //miranda's variable

function draw(){
    face(mouseX/20, mouseY/20,mouseY/5);//pupils change color w/ mouse positions
    
    scale(.5);
    
    body(100,200,50,100,mouseX/100,mouseY/100); //miranda's monster
    translate(-100,300);
    body(255,100,55,55,mouseX/100,mouseY/100);
    translate(500,200);
    body(100,20,0,30,mouseX/100,mouseY/100);
    
  if(mouseIsPressed){ //interactive part
    translate(170,250);
    scale(.5);
    body(50,20,200,80);
  }
  
  sheep(150,95); //david's sheep
  translate(0,-300);
  sheep(30,200);
  translate(0,-300);
  sheep(255,200);
  
  dragon(150);//david's dragon
  translate(200,200);
  dragon(100);
  translate(0,-400);
  dragon(50);

}

function monster(){ //lucas's code
  //background(r,g, b);
    noStroke();
    fill(255,150,150);
    bezier(300,0,320,200, 280,295,600,300);
    noStroke();
    triangle(298,0,600,301,600,0);
  
    eyes(20);
    
    //hair
    noStroke();
    fill(175,100,175);
    triangle(0,0, 0,100, 100, 0);
    triangle(75,0, 125,50, 150, 0);
    triangle(150,0,175,105,250,0);
    triangle(225,0,280,115,325,0);
    triangle(320,0,375,50,400,0);
    triangle(397,0,425,50,450,0);
    triangle(425,0,500,100,525,0);
    triangle(500,0,600,100,600,0);
    
    //nose
    fill(66,66,250);
    triangle(300,250,300,350,350,350);
    //stroke(0);
    fill(100, 175, 100);
    bezier(300,248,307,295,318,302,327,301);
    fill(66,66,250);
    bezier(323,301,335,302,340,310,348,350);
}


function eyes(){
  
  fill(255);
    ellipse(150, 150, 200, 200); 
    ellipse(450, 150, 200, 200);
    fill(0);
    ellipse(150, 150, 30, 30);
    ellipse(450, 150, 30, 30);
    stroke(0);
    bezier(50, 400, 150, 550, 450, 550, 550, 400);
    fill(100,175,100);
    bezier(50, 400, 150, 450, 450, 450, 550, 400);

    
}

function sheep(x,y){ //david's code
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

function dragon(a){ //david's code
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

//miranda's code
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

function legs(m,n){
  translate(m,n)
  triangle(290,720,380,730,340,800); 
  triangle(440,720,510,670,490,780);
}

function body(r,g,b,x,m,n){
  strokeWeight(1);
  fill(71,31,31);
  ellipse(370,550,300,350); //body
  
  head(r,g,b,x);

  strokeWeight(1); //eyes
  fill(255,255,255);
  ellipse(200,330,80,80);
  ellipse(320,340,80,80);
  
  eyes(mouseX, mouseY);
  
  legs(m,n);
  
  fill(197,31,31);
  quad(270,550+step,240,600+step,260,650+step,290,600+step); //arms that move up and down when key pressed
  quad(420,510+step,390,550+step,410,610+step,440,560+step);
  
  noFill();
  strokeWeight(3);
  arc(260,410,80,80,0,PI);//mouse
  
  if(keyIsPressed){ //allows the arms to move

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

function face(a,b,c){ //lucas's monster's face
    createCanvas(600, 600);
    background(10+a, 50+a, 100+a,b);
    fill(255);
    ellipse(150, 150, 200, 200);
    ellipse(450, 150, 200, 200);
    fill(c);
    ellipse(150, 150, 30, 30); //pupil that changes color
    ellipse(450, 150, 30, 30);
    fill(175,100,175);
    triangle(0,0, 0,100, 100, 0);
    
}