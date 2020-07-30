var fixedRect,movingRect;
var RectUp,RectDown;

function setup() {

  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 100);
  movingRect = createSprite(200,100,100,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  RectUp = createSprite(300,50,50,100);
  RectDown = createSprite(300,350,50,100);

  RectUp.shapeColor = "blue";
  RectUp.shapeColor = "blue";

  RectUp.velocityY = 6;
  RectDown.velocityY = -6;
}

function draw() {
  background(0);  
  
movingRect.x = mouseX;
movingRect.y = mouseY;

if(fixedRect.x - movingRect.x < movingRect.width /2 + fixedRect.width / 2
  && movingRect.x - fixedRect.x < movingRect.width /2 + fixedRect.width / 2
  && fixedRect.y - movingRect.y < movingRect.height /2 + fixedRect.height / 2
  && movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2 ){
    
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";

}else{
movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
}

if(RectUp.y - RectDown.y < RectDown.height /2 + RectUp.height / 2
  && RectDown.y - RectUp.y < RectDown.height / 2 + RectUp.height / 2 ){

 

  }else{
   
  }




  drawSprites();
}