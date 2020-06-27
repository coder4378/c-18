                                                                                                                                      var ball,img,paddle,paddleimg;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=4;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  
paddle.debug=true;
ball.debug=true;
  ball.setCollider("circle")
  paddle.setCollider("rectangle",0,0,20,100)
}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges); 
  

  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=4
  }
  bounceOff(ball,paddle);
  drawSprites();
  
}
function bounceOff(object1,object2) {
    if (object1.x-object2.x<object1.width/2+object2.width/2&&object2.x-object1.x<object1.width/2+object2.width)  {
      object1.velocityX=object1.velocityX*(-1);
 
        }
      if(object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
        object1.velocityY=object1.velocityY*(-1);

      }
}



