
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crusedPaper
var ground
var box1,box2,box3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	crushedPaper = new Paper(90,500,20)
	ground = new Ground(400,680,800,20)


	box1 = new Dustbin(600,670,200,20)
	box2 = new Dustbin(500,630,20,100)
	box3 = new Dustbin(705,630,20,100)




	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER)
  background(0);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  crushedPaper.display();
 

 



  
  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(crushedPaper.body,crushedPaper.body.position,{ x:60, y: -60})

	}
}



