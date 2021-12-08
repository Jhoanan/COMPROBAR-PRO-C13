var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orangeL, orangeImg;
var redL, redImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//crear sprite de rabbit (conejo)
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples () {
apple = createSprite (random(50,350), 40, 10, 10);
apple.addImage("apple",appleImg);
apple.scale = 0.07;
apple.velocityY = 3;
apple.lifetime= 150;

createApples ();
}
function createOrange (){
orangeL = createSprite (random(50, 350),40, 10,10 )
orangeL.addImage("orangeL",orangeImg);
orangeL.scale =0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;

createOrange ();
}

function createRed (){
redL = createSprite (random(50,350),40,10,10)
redL.addImage("redL",redImg);
redL.scale = 0.06;
redL.velocityY = 3;
redL.lifetime = 150;
  createRed ();
}
 var rand= Math.round(random(1,3));

 if (frameCount % 80 == 0) {
  if (rand == 1) {
    createApples();
    }
    else if (rand == 2) {
      createOrange();
    
    } else {
      createRed();
    }
  }



function draw() {
  background(0);

rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
