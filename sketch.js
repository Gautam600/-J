const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball1,ball3,ball2,ball4,ball5,ball6,ball7,chain;
var chain2,chain3,chain4,chain5,chain6,chain7;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,100,650,10);
	ball1=new Paper(200,150,20);
	ball2=new Paper(250,150,20);
	ball3=new Paper(300,150,20);
	ball4=new Paper(350,150,20);
	ball5=new Paper(400,150,20);
	ball6=new Paper(450,150,20);
	ball7=new Paper(500,150,20);
	chain=new Slingshot(ball1.body,{x:200,y:100});
	chain2=new Slingshot(ball2.body,{x:250,y:100});
	chain3=new Slingshot(ball3.body,{x:300,y:100});
	chain4=new Slingshot(ball4.body,{x:350,y:100});
	chain5=new Slingshot(ball5.body,{x:400,y:100});
	chain6=new Slingshot(ball6.body,{x:450,y:100});
	chain7=new Slingshot(ball7.body,{x:500,y:100});
		Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
  ground.display();
  ball1.display();
  chain2.display();
  chain3.display();
  ball3.display();
  ball4.display();
  ball6.display();
  ball5.display();
  ball7.display();
  chain.display();  
    drawSprites();
 ball2.display();
 chain4.display();
 chain5.display();
 chain6.display();
 chain7.display();
}



