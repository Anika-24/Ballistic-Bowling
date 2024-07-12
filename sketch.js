
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,base1,base2,ball,slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;

var count = 0;



function preload(){
    ballImage=loadImage("ball.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    score = 0;

   ground = new Ground();
   base1 = new Base(570,400,200,20);
   base2 = new Base(880,450,200,20);
   block1 = new Pin(500,350,40,50);
   block2 = new Pin(540,350,40,50);
   block3 = new Pin(580,350,40,50);
   block4 = new Pin(620,350,40,50);
   block5 = new Pin(660,350,40,50);
   block6 = new Pin(520,300,40,50);
   block7 = new Pin(560,300,40,50);
   block8 = new Pin(600,300,40,50);
   block9 = new Pin(640,300,40,50);
   block10 = new Pin(540,250,40,50);
   block11 = new Pin(580,250,40,50);
   block12 = new Pin(620,250,40,50);
   block13 = new Pin(560,200,40,50);
   block14 = new Pin(600,200,40,50);
   block15 = new Pin(580,150,40,50);

   block16 = new Pin(840,250,40,50);
   block17 = new Pin(880,250,40,50);
   block18 = new Pin(800,250,40,50);
   block19 = new Pin(920,250,40,50);
   block20 = new Pin(960,250,40,50);
   block21 = new Pin(820,200,40,50);
   block22 = new Pin(860,200,40,50);
   block23 = new Pin(900,200,40,50);
   block24 = new Pin(940,200,40,50);
   block25 = new Pin(840,150,40,50);
   block26 = new Pin(880,150,40,50);
   block27 = new Pin(920,150,40,50);
   block28 = new Pin(860,100,40,50);
   block29 = new Pin(900,100,40,50);
   block30 = new Pin(880,50,40,50);
  
     ball=Bodies.circle(200,400,20);
    World.add(world,ball);
   slingshot = new SlingShot(this.ball,{x:100,y:200});
}
function draw(){
    background(rgb(0,0,0));
  textFont("Oswald")
    textSize(15);
  fill("red")
    text("Drag the ball to play the game!" , 50, 50);
  textFont("serif",31)
  fill("red")
    text("Count:"+count,300,90)
    console.log(count);
  

    // poligan.display();
    ground.display();
    base1.display();
    base2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    slingshot.display();
    imageMode(CENTER);
    image(ballImage,ball.position.x,ball.position.y,50,50);
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(this.ball, {x:50 , y: 200});
        slingshot.attach(this.ball);
        count++;
        
    }
    }