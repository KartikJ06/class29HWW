const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constarint 

var engine, world; 

function setup(){
    var canvas = createCanvas(1500,700); 
    engine = Engine.create(); 
    world = engine.world;

    ground = new Ground(300,690,3000,10);
    ground2 = new Ground(400,600,200,10); 
    ground3 = new Ground(1000,350,200,10)

    box1 = new Box(330,235,30,40); 
    box2 = new Box(360,235,30,40)
    box3 = new Box(390,235,30,40)
    box4 = new Box(420,235,30,40)
    box5 = new Box(450,235,30,40)

    box6 = new Box(360,195,30,40)
    box7 = new Box(390,195,30,40)
    box8 = new Box(420,195,30,40)

    box9 = new Box(390,155,30,40)

    box10 = new Box(360,235,30,40)
    box11 = new Box(360,235,30,40)
    box12 = new Box(360,235,30,40)
    box13 = new Box(360,235,30,40)
    box14 = new Box(360,235,30,40)
    box15 = new Box(360,235,30,40)
    box16 = new Box(360,235,30,40)
    
}

function draw(){
    background("purple"); 
    Engine.update(engine); 
    strokeWeight(4); 
    ground.display(); 
    ground2.display(); 
    ground3.display(); 

    box1.display(); 
    box2.display(); 
    box3.display(); 
    box4.display(); 
    box5.display(); 
    box6.display(); 
    box7.display(); 
    box8.display(); 
    box9.display(); 


}