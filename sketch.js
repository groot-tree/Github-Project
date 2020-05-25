var   ball,paddle;   






function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=3.75;
  ball.velocityY = 2;
  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
 //ball.bounceOff(edges[1]);
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[0])
ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
 ball.bounceOff(paddle);
  
  if(keyDown(UP_ARROW)){
paddle.y = paddle.y - 5;
  }
  
  if(keyDown("down"))
  {
    paddle.y=paddle.y + 5;
  }
  drawSprites();
  
}


