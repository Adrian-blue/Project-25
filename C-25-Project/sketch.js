
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall;
function preload()
{

}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	 
	//wall = createSprite (600,400,900,20)
	ground = new Ground(600,height,1200,20)
	D1= new dustbin(700,680,200,20);
	


	paper= new Paper (100,600,50);

	Engine.run(engine);

}


function draw() 
{
  rectMode(CENTER);
  background(0);



  drawSprites();
 paper.display();
 ground.display();
 D1.display();
 
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400});

	}



}

