
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var train,kart1,kart2,kart3,kart4,kart5,kart6,kart7,kart8;
var bg;
var button
var crazytrain
var trainWhistle
function preload(){
  bg = loadImage("backdrop.svg");
  trainWhistle = loadSound("Train Whistle.mp3")
  crazytrain = loadImage("crazy train.svg")
}

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,440,20600,90)
  train = new Train(750,300, 100,100)
  kart1 = new Kart1(900,300, 100,100)
  kart2 = new Kart2(1050,300, 100,100)
  kart3 = new Kart3(1200,300, 100,100)
  kart4 = new Kart4(1350,300, 100,100)
  kart5 = new Kart1(1500,300, 100,100)
  kart6 = new Kart2(1650,300, 100,100)
  kart7 = new Kart3(1800,300, 100,100)
  kart8 = new Kart4(1950,300, 100,100)



  con1 = new Connect(train.body ,kart1.body);
  con2 = new Connect(kart1.body ,kart2.body);
  con3 = new Connect(kart2.body ,kart3.body);
  con4 = new Connect(kart3.body ,kart4.body);
  con5 = new Connect(kart4.body ,kart5.body);
  con6 = new Connect(kart5.body ,kart6.body);
  con7 = new Connect(kart6.body ,kart7.body);
  con8 = new Connect(kart7.body ,kart8.body);
  
  
  button = createImg("costume1.svg")
  button.position(700, 500)
  button.size(90,90)
  button.mouseClicked(press)

}


function draw() 
{
  background(bg);
  Engine.update(engine);
  
  //ground.show()
  train.show();
  kart1.show();
  kart2.show();
  kart3.show();
  kart4.show();
  kart5.show();
  kart6.show();
  kart7.show();
  kart8.show();
  
  con1.display();
  con2.display();
  con3.display();
  con4.display();
  con5.display();
  con6.display();
  con7.display();
  con8.display();

  image(crazytrain, 250,30,320,120)



//  button1.mouseClicked(connect1);
}

function keyPressed(){

    Matter.Body.setVelocity(train.body, {x: -37,y: 0})
    trainWhistle.setVolume(0.5);
    if(!trainWhistle.isPlaying() ){
    trainWhistle.play()
    }
}


function press(){
  window.location.reload()
}