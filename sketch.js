var car,wall;
var speed,weight;
var thickness;
var bullet,speed,weight;
function preload(){

}
function setup() {
  createCanvas(1600,400);
  

 bullet =createSprite(50,200,50,50);
  bullet.shapeColor="white"
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  speed=random(223,321);
  weight=random(400,1500);
  thickness=random(30,52)
  bullet.velocityX=speed;
}

function draw() {
  background("lightblue");  
  
if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

if(damage>10)
{
  wall.shapeColor="red";
}
if(damage<10)
{
  wall.shapeColor="green";
}




}


drawSprites();
}
 function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x +bullet.width;
wallleftEdge=wall.x;
if (bulletRightEdge>=wallleftEdge)
{
  return true
}
return false;
}














