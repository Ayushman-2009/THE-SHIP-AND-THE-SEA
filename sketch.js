var sea,ship,ship_running;
var seaImage,invisibleGround;
function preload(){
  //loading animation
 ship_running = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png');
 seaImage = loadImage('sea.png');
}

function setup(){
  createCanvas(600,200);
  //creating sprites
  ship = createSprite(50,160);
  ship.addAnimation('running',ship_running);
  ship.scale=5;
  sea = createSprite(200,180,400,20)
  sea.addImage(seaImage);
  sea.x = sea.width/2;
  sea.velocityX = -4;
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("220");
  //if command
  if (sea.x < 0) {
    sea.x = sea.width / 2; 
  }
  ship.collide(invisibleGround);
  drawSprites();
  
}