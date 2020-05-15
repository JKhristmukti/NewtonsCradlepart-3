const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof,bob1,rope1,bob2,rope2,bob3,rope3,bob4,rope4,bob5,rope5,engine,world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,515,120);

	bob1 = new Bob(-300,100);
	bob2 = new Bob(50,100);
	bob3 = new Bob(400,600);
	bob4 = new Bob(650,100);
	bob5 = new Bob(1100,100);

	rope1 = new Rope(bob1.body,roof.body,-100*2,0);
	rope2 = new Rope(bob2.body,roof.body,-50*2,0);
	rope3 = new Rope(bob3.body,roof.body,0*2,0);
	rope4 = new Rope(bob4.body,roof.body,50*2,0);
	rope5 = new Rope(bob5.body,roof.body,100*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}



