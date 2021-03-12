
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world
var backgroundimg
var ground, hero, rope, monster
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;

function preload() {

backgroundimg = loadImage ("images/images/GamingBackground.png")

}

function setup() {
  createCanvas(1500, 400);
  engine = Engine.create();
  world = engine.world;

  monster = new Monster(760,300,50,) 
 
  ground = new Ground(375, 335, 1000,10)
    
  hero = new Hero(200,200,70)

  rope = new Rope(hero.body, {x:300, y:20})


    b1 = new Box(481,20,40,40) //700
    b2 = new Box(481,20,40,40)
    b3 = new Box(481,20,40,40)
    b4 = new Box(481,20,40,40)
    b5 = new Box(481,20,40,40)
    b6 = new Box(481,20,40,40)

    b7 = new Box(570,20,40,40) //900
    b8 = new Box(570,20,40,40)
    b9 = new Box(570,20,40,40)
    b10 = new Box(570,20,40,40)

    b11 = new Box(640,20,40,40) //800
    b12 = new Box(640,20,40,40)
    b13 = new Box(640,20,40,40)
    b14 = new Box(640,20,40,40)
    b15 = new Box(640,20,40,40)
    b16 = new Box(640,20,40,40)

    b17 = new Box(640,20,40,40) //700
    b18 = new Box(570,20,40,40)
    b19 = new Box(481,20,40,40)
    b20= new Box(481,20, 40 ,40)

    
  

  

 

}

function draw() {
  background(backgroundimg);
  Engine.update(engine);

  text(mouseX + " , " + mouseY, mouseX,mouseY)

    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
    
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()

    b17.display()
    b18.display()
    b19.display()
    b20.display()

    ground.display()

    hero.display()
    rope.display()

    monster.display()
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}
