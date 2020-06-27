const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var bird;
var Pig1,Pig2;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,780,70,70);
    box2 = new Box(1000,780,70,70);
    pig1 = new Pig(850,780,50,50);
    log1=new Log(850,720,370,20,PI);

    box3 = new Box(700,680,70,70);
    box4 = new Box(1000,680,70,70);
    Pig2 = new Pig(850,680,50,50);
    log2=new Log(850,620,370,20,PI);

    box5 = new Box(850,580,70,70);
    log3 = new Log(880,580,100,20,PI/3);
    log4 = new Log(820,580,100,20,-1*(PI/3));

    bird = new Bird(100,100,30,30);
    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    bird.body.position.x=mouseX;
    bird.body.position.y=mouseY;

    box1.displayBox();
    box2.displayBox();
    pig1.displayPig();
    log1.displayLog();

    box3.displayBox();
    box4.displayBox();
    Pig2.displayPig();
    log2.displayLog();

    log3.displayLog();
    box5.displayBox();
    log4.displayLog();
    bird.display();

    ground.display();
}