const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var world,engine;

function preload() {

  backIMg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;
  // create sprites here
  superhero = new SuperHero(300,100,150);

  fly = new Fly(superhero.body, {x: 300, y : 30});

  ground = new Ground(600,400,400,5);

  box1 = new Box(580,380);
  box2 = new Box(620,380);
  box3 = new Box(540,380);
  box4 = new Box(660,380);
  box5 = new Box(580,340);
  box6 = new Box(620,340);
  box7 = new Box(540,340);
  box8 = new Box(660,340);
  box9 = new Box(580,300);
  box10 = new Box(620,300);
  box11 = new Box(540,300);
  box12 = new Box(660,300);
  box13 = new Box(580,260);
  box14 = new Box(620,260);
  box15 = new Box(540,260);
  box16 = new Box(660,260);
  box17 = new Box(580,220);
  box18 = new Box(620,220);
  box19 = new Box(540,220);
  box20 = new Box(660,220);

  monster = new Monster(1600,300,30);
  
}

function draw() {
  background(backIMg);
  Engine.update(engine);

  superhero.display();
  fly.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  monster.display();

  monsterfall();

  push();
  textSize(27);
  stroke("red");
  fill("red")
  text("Strike the boxes hard to make the monster fall." , 600,30);
  pop();
}


function mouseDragged()
{
  Matter.Body.setPosition(superhero.body,{x : mouseX, y : mouseY});
}

function monsterfall()
{
  if(box20.body.speed > 3)
  {
    Matter.Body.setStatic(monster.body,false);
  }
  if(box19.body.speed > 3)
  {
    Matter.Body.setStatic(monster.body,false);
  }
  if(box18.body.speed > 3)
  {
    Matter.Body.setStatic(monster.body,false);
  }
  if(box17.body.speed > 3)
  {
    Matter.Body.setStatic(monster.body,false);
  }
}

