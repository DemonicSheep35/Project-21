
var bullet, wall, speed, weight, thickness;




function setup() {
  createCanvas(1600,400);

  
  bullet = createSprite(200,200,30,30);
  bullet.shapeColor = color("white");
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(rgb(80,80,80));
  speed = random(50,300);
  weight = random(30,52);
  
  bullet.velocityX = speed;




}

function draw() {
  


  background(0);  
  
  if(bullet.width/2 + wall.width/2 > wall.x - bullet.x){
    bullet.velocityX = 0;
    var deformation = (0.5*speed*speed*weight)/(thickness*thickness*thickness);
    
    if(deformation > 10){
      wall.shapeColor = color(255,0,0);
    }
    if(deformation < 10){
      wall.shapeColor = color(0,255,0);
    }
    
   
  }
  drawSprites();
  
  }



