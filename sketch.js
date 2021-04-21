var floor,ball;
var trash1,trash2,trash3;
var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	floor=createSprite(500,400,1000,10);
	trash1=createSprite(600,350,20,70);
    trash2=createSprite(730,350,20,70);
	trash3=createSprite(665,390,150,10);
	engine = Engine.create();
	world = engine.world;
		//Create the Bodies Here.
	Engine.run(engine);
	
}


function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		}
}
function draw() {
  rectMode(CENTER);
  background("black");
  ellipseMode(RADIUS);
	fill(255);
	ellipse(100, 385, 10, 10);
	
 
  drawSprites();
 
}



