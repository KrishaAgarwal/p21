var bullet, ground, wall;
var speed, weight, thickness;

function setup() {

  createCanvas(800,200);

  weight = random(30);
  thickness = random(10,25);
  speed = random(20, 40);

  bullet = createSprite(10, 100, 15, 10);
  bullet.shapeColor = "blue";
  //bullet.velocityX = speed;
  //bullet.debug = true;

  ground = createSprite(400, 200, 800, 20);
  //ground.debug = true;

  wall = createSprite(750, 100, thickness, 100);
  wall.shapeColor = "gray";
  //wall.debug = true;

} 

function draw() {
  background(0); 

  if(keyDown("space")){
    bullet.velocityX = speed;
  }

  if(hasCollided(bullet, wall) && bullet.velocityX !== 0 && bullet.x >= 750){

    //bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = "red";
    }

    if(damage<10){
      wall.shapeColor = "green";
    }

  }

  drawSprites();
}