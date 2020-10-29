var mr,fr 

function setup(){
createCanvas(800,400)
mr=createSprite(200,100,20,50);
mr.shapeColor= "blue";
mr.velocityY=5

fr=createSprite(200,350,80,30);
fr.shapeColor= "blue";
fr.velocityY=-5
}
function draw(){
  background(20,100,50)
 
 bounce(mr,fr);

 
  drawSprites();
}