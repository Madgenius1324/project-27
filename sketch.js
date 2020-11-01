
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var b1,b2,b3,b4,b5,rf,r1,r2,r3,r4,r5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rf = new roof(400,100,300,20);
b1=new bob(250,350,20);
b2=new bob(270,350,20);
b3=new bob(290,350,20);
b4=new bob(310,350,20);
b5=new bob(330,350,20);
r1 = new rope(b1.body,rf.body,-100,0);
r2 = new rope(b2.body,rf.body,-50,0);
r3 = new rope(b3.body,rf.body,0,0);
r4 = new rope(b4.body,rf.body,50,0);
r5 = new rope(b5.body,rf.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  rf.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45})
  }
}


