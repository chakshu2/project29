const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

ground=new Ground(200,210,250,10)

  BlockBlue2 = new Box(155, 180, 30, 30);

  BlockBlue3 = new Box(185, 180, 30, 30);

  BlockBlue4 = new Box(215, 180, 30, 30);

  BlockBlue5 = new Box(245, 180, 30, 30);

  BlockBlue6 = new Box(275, 180, 30, 30);

  BlockBlue7 = new Box(305, 180, 30, 30);

  //second level

  BlockPink2 = new BoxPink(185, 150, 30, 30);

  BlockPink3 = new BoxPink(215, 150, 30, 30);

  BlockPink4 = new BoxPink(245, 150, 30, 30);

  BlockPink5 = new BoxPink(275, 150, 30, 30);

  BlockBlue8=new Box(215,130,30,30)

  BlockBlue9=new Box(245,130,30,30);

  BlockPink6=new BoxPink(230,100,30,30)


  //third level

  polygon_1 = new poly(700, 200, 30, 30);

  sling = new SlingShot(polygon_1.body, { x: 600, y: 200 });
  ground.visible=false;

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);

  ground.display()

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue8.display();
  
  BlockBlue9.display();

  BlockBlue7.display();

  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

BlockPink6.display()

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

