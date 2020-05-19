var snake;
var foodX,foodY;
function setup() {
  createCanvas(400,400);

  snake=new Snake();
  frameRate(3);
  foodLocation();
}

function draw() {
  background(0);  
  snake.update();
  snake.display();
  fill("red");
  rect(foodX,foodY,20,20);
  if(snake.eat(foodX,foodY)){
    foodLocation();

  }
  textSize(50);
  if(snake.gameOver())
  //textSize(10);
  text("Game Over",50,50)

 
}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
      snake.xDir-=20;
      snake.yDir=0;
  }
  if(keyCode===UP_ARROW){
    snake.xDir=0;
    snake.yDir-=20;

  }
  if(keyCode===RIGHT_ARROW){
    snake.xDir+=20;
    snake.yDir=0
  }
  if(keyCode===DOWN_ARROW){
    snake.xDir=0;
    snake.yDir+=20;
  }
}

function foodLocation(){
    foodX=floor(random(0,20))*20;
    foodY=floor(random(0,20))*20;

}

