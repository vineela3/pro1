function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadAnimation("move.png","move1.png");
  bath=loadAnimation("bath1.png","bath2.png");
 }


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;

  astronaut.addAnimation("bathing",bath);
  astronaut.addAnimation("brushing",brush);
  astronaut.addAnimation("drinking",drink);
  astronaut.addAnimation("eating",eat);
  astronaut.addAnimation("gyming",gym);
  astronaut.addAnimation("moving",move);


}

function draw() {
  background(bg);  
if(keyCode==UP_ARROW){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocitY=0; 
}

if(keyCode==DOWN_ARROW){
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocitY=0; 
}
if(keyCode==LEFT_ARROW){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.x=350;
  astronaut.velocityX=0.5;
  astronaut.velocitY=0.5; 
}
if(keyCode==RIGHT_ARROW){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.x=350;
  astronaut.velocityX=0;
  astronaut.velocitYY=0; 
}

if(keyCode===32){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=350;
  astronaut.velocitYX=2;
  astronaut.velocitY=2; 
}
  drawSprites();
}

