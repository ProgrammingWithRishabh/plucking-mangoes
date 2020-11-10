
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,700,800,100);
	tree = new Tree(700,400);
	stone = new Stone(100,350,50,50);
	mango1 = new Mango(700,700);
	mango2 = new Mango(790,450);
	mango3 = new Mango(660,710);
	mango4 = new Mango(750,700);
	mango5 = new Mango(600,750);

	slingShot = new SlingShot(stone.body, {x:200,y:350})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  keyPressed();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed()
{
    if(keyCode == 32)
    {
        slingShot.attach(stone.body);
    }
}



