var movingrect , fixedrect;

var gameObject1 , gameObject2;



function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 200, 50, 50);

  movingrect = createSprite(600,100,50,50);

  gameObject1 = createSprite(800,300,50,50);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(1000,400,50,50);
  gameObject2.shapeColor = "cyan";



  movingrect.debug = true;
  fixedrect.debug = true;
}

function draw() {
  background("yellow");  
     
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

 if (istouching(gameObject1,movingrect))

 {
  movingrect.shapeColor = "red";
  gameObject1.shapeColor = "red";

 }
 else 
 {
 movingrect.shapeColor = "green";
 gameObject1.shapeColor = "green";
 }

 if (istouching(gameObject2,movingrect))

 {
  movingrect.shapeColor = "red";
  gameObject2.shapeColor = "red";

 }
 else 
 {
 movingrect.shapeColor = "green";
 gameObject2.shapeColor = "green";
 }

 if (istouching(fixedrect,movingrect))

 {
  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";

 }
 else 
 {
 movingrect.shapeColor = "green";
 fixedrect.shapeColor = "green";
 }

  drawSprites();
}



