var car,wall
var speed,weight
function setup() {
  createCanvas(800,400);
  
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.velocityX=2;
  wall=createSprite(400,200,60,height/2)
  
}

function draw() {
  background(255,255,255);
  drawSprites(); 
  if(wall.x-car.x<car.width/2+wall.width/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if (deformation>180)
    {
    car.shapeColor=color(150,0,0)
    }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color("yellow") ,car.shapeColor=color("red"),car.shapeColor=color("green")
   
  }

  if(deformation<100)
  {
    car.shapeColor=color("red"),car.shapeColor=color("green"),car.shapeColor=color("yellow")
    
  }
 
  }
}