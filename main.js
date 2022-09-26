// Variables
var score = 0;

// Create Sprites


var alien = createSprite(200, -20);
alien.setAnimation("alienP");
alien.velocityY = 4;
alien.setCollider("circle");

var gameOver = createSprite(200, 200);
gameOver.setAnimation("GameOver");
gameOver.visible = false;



var rock2 = createSprite(randomNumber(50,350),randomNumber(-5,-70));
rock2.setAnimation("rock");
rock2.velocityY = 18;
rock2.scale=0.8;
rock2.setCollider("circle",0,0,28);

var star = createSprite(randomNumber(50,350),randomNumber(-5,-70));
star.setAnimation("life");
star.velocityY = 10;
star.scale=0.8;
star.setCollider("circle");

var star2 = createSprite(randomNumber(50,350),randomNumber(-5,-70));
star2.setAnimation("life");
star2.velocityY = 10;
star2.scale=0.8;
star2.setCollider("circle");

var platform = createSprite(100, 0);
platform.setAnimation("platform");
platform.velocityY = 3;
platform.scale = 0.4;

var platform2 = createSprite(300, 170);
platform2.setAnimation("platform");
platform2.velocityY = 3;
platform2.scale = 0.4;

function draw() {
  // draw the background
  background1();
  showScore();
  loopPlatforms();
  alienfall();
  controlPlayer();
  playerLands();
  collectItems();
  loopItems();
  rockHits();
  // update the sprites
 if (score > 14) {
    alien2();
  }
   if (score > 29) {
    alien3();
  }
if (score > 44) {
    alien4();
  }
   if (score > 59) {
    alien2();
  }
   if (score > 74) {
    alien3();
  }
    if (score > 99) {
   alien.setAnimation("sun");
   alien.scale=0.5;
  }
  if (alien.y>405) {
    gameOver.visible = true;
 alien.velocityY= -80;
  }
  
   drawSprites();
}

// Functions
function background1() {
  background("darkBlue");
  noStroke();
  fill("yellow");
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(340, 50, 60, 60);
  fill("darkBlue");
  ellipse(320, 30, 60, 60);
}


function alien2() {
alien.setAnimation("alienB");
star.setAnimation("lifeB");
star2.setAnimation("lifeB");
}
function alien3(){
alien.setAnimation("alienY");
star.setAnimation("lifeY");
star2.setAnimation("lifeY"); 
}

function alien4(){
alien.setAnimation("alienP");
star.setAnimation("lifeP");
star2.setAnimation("lifeP");
  
}

function showScore() {
  fill("white");
  textSize(20);
  text("Score: ",10, 10, 80, 20);
  text(score , 73, 12, 20, 20);
}
function loopPlatforms() {
  if (platform.y > 410) {
    platform.y = -10;
    platform.x = randomNumber(100,200);
    
  }
   if (platform2.y > 410) {
    platform2.y = -10;
    platform2.x = randomNumber(240,320);
  }
}

function loopItems() {
  if (star.y>400) {
star.velocityY = randomNumber(3,7);
star.y = -10;
star.x = randomNumber(10,390);
 
  }
   if (star2.y>400) {
star2.velocityY = randomNumber(3,7);
star2.y = -10;
star2.x = randomNumber(10,390);
 
  } 
  if (rock2.y>400) {
  rock2.velocityY = randomNumber(3,7);
  rock2.y = -10;
  rock2.x = randomNumber(5,370);
  rock2.rotationSpeed= 8;
  }
  
}



  

function alienfall() {
alien.velocityY = alien.velocityY +0.3;
if (alien.velocityY > 6) {
  alien.velocityY =6;
}

  
}
function controlPlayer() {
  if (keyDown("up")) {
    alien.y = alien.y -15;
  }
  if (keyDown("down")){
    alien.y = alien.y +5;
   }
  if (keyDown("right")){
     alien.x = alien.x +5;
   }
  if (keyDown("left")){
     alien.x = alien.x -5;
   }
}
function playerLands() {
alien.collide(platform);
alien.collide(platform2);
}
function collectItems() {
if (alien.isTouching(star)) {
score = score +1;
star.velocityY = randomNumber(4,10);
star.y = -10;
star.x = randomNumber(10,390);
  }
if (alien.isTouching(star2)) {
score = score +1;
star2.velocityY = randomNumber(4,10);
star2.y = -10;
star2.x = randomNumber(10,390);
  }

}
function rockHits() {

 if (alien.isTouching(rock2)) {
    score =score - 5;
    rock2.velocityY = randomNumber(10,20);
  rock2.y = -10;
  rock2.x = randomNumber(10,390);
  }   
}
