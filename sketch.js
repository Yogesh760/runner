var runner, runner_running, runner_collided;
var ground, invisibleGround, groundImage;
var runnerImg;
var path,pathimg;
function preload(){
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
pathimg=loadImage("path.png")

}
function setup(){
  createCanvas(400,400);
  //createsprite here
  path=createSprite(200,200,400,400)
  path.addImage("path",pathimg)
  path.velocityY=+2
  
    runner = createSprite(180,340,30,30);
    runner.scale =0.09;
    runner.addAnimation("runner",runnerImg)
}
function draw() {
  background(0);
  runner.x=mouseX
  if(path.y>400){
    path.y=height/2
  }
  drawSprites()
}
