
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
  
  boyImg = loadImage("Plucking mangoes/boy.png")
  treeImg = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	stone = new Stone(235,350,30)
  
 ground = new Ground(700,420,displayWidth,40)	
  //tree = new Tree(1100,100,90)
 Mango1 = new Mango(1100,100,30)
 Mango2 = new Mango(1000,90,30)
 Mango3 = new Mango(1200,105,30)
 Mango4 = new Mango(1050,150,30)
 Mango5 = new Mango(1150,150,30)
 Mango6 = new Mango(1090,200,30)
 Sling1 = new SlingShot(stone.body,{x:210,y:280})
	//Create the Bodies Here.
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyImg , 180,225,220,220)
  image(treeImg, 850,10,400,400)
  //tree.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  stone.display()
  ground.display();
  Sling1.display()
  //ground.display();
  detectCollision(stone.body,Mango1)
  detectCollision(stone.body,Mango2)
  detectCollision(stone.body,Mango3)
  detectCollision(stone.body,Mango4)
  detectCollision(stone.body,Mango5)
  detectCollision(stone.body,Mango6)
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
  Sling1.fly()
  }


  function detectCollision(obj1,obj2){
    obj1x = obj1.position.x
    obj1y = obj1.position.y
    obj2x = obj2.body.position.x    
    obj2y = obj2.body.position.y  

    if(obj1x >= obj2x-50 && obj1y <= obj2y+50 && obj1x <= obj2x+50 && obj1y >= obj2y-50){
        console.log('hola')
        Body.setStatic(obj2.body,false)
    }

    

}

