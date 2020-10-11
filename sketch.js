const Engine = Matter.Engine;
const World = Matter.World;
// const Events = Matter.Events,
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight = 300;

var score = 0;

function setup() 
{
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  for (var i = 0; i <= width; i = i+80) 
  {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
 
  for (var i = 75; i <= width; i = i+50) 
  {
    plinkos.push(new Plinko(i, 75));
  }

  for (var i = 50; i <= width-10; i = i+50) 
  {
    plinkos.push(new Plinko(i, 175));
  }

  for (var i = 75; i <= width; i = i+50) 
  {
    plinkos.push(new Plinko(i, 275));
  }

  for (var i = 50; i <= width-10; i = i+50) 
  {
    plinkos.push(new Plinko(i, 375));
  }   
}
 
function draw() 
{
  background("black");

  Engine.update(engine);

  ground.display();
  
  for (var i = 0; i < plinkos.length; i = i+1) 
  {
    plinkos[i].display();
  }

  if (frameCount % 60 == 0)
  {
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
  }
 
  for (var i = 0; i < particles.length; i = i+1) 
  {
    particles[i].display();
  }

  for (var i = 0; i < divisions.length; i = i+1) 
  {
    divisions[i].display();
  }
}