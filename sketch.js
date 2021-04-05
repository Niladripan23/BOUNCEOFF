var fixedRect,movingRect;
var gameobj1,gameobj2,gameobj3,gameobj4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = -3
  movingRect = createSprite(400, 200, 50, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = +3;

  gameobj1 = createSprite(100,100,50,50);
  gameobj1.shapeColor = "green";
  gameobj2 = createSprite(200,100,50,50);
  gameobj2.shapeColor = "green";
  gameobj3 = createSprite(300,100,50,50);
  gameobj3.shapeColor = "green";
  gameobj4 = createSprite(400,100,50,50);
  gameobj4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  
  console.log(movingRect.x-fixedRect.x)

  Bounceoff(movingRect,fixedRect);
  drawSprites();

}



function Bounceoff(object1,object2){
  if(object1.x - object2.x  < object2.width/2 + object1.width/2
    &&  object2.x - object1.x < object2.width/2 + object1.width/2)
    {
   
    object1.velocityX =   object1.velocityX *(-1);
    object2.velocityX = object2.velocityX*(-1);
  }
  
  if(object1.y - object2.y  < object2.height/2 + object1.height/2
    &&  object2.y - object1.y < object2.height/2 + object1.height/2)
    {
   
    object1.velocityY =   object1.velocityY *(-1);
    object2.velocityY = object2.velocityY*(-1);
  }

}

