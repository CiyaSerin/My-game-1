var rocket;
var space;
var danger;
var gameState = "play"

function preload(){

    rocketImg = loadImage("Rocket 1.png");
    spaceImg = loadImage("Space.jpeg");
    dangerImg = loadImage("firelog.jpeg");
}

function setup() {
    createCanvas(400,400);

    space = createSprite(200,200);
    space.addImage("space", spaceImg);
    space.velocityY = 1;
    space.scale = 3;

    dangersGroup = new Group();
    
    rocket = createSprite (200,200,50,50);
    rocket.scale = 0.3;
    rocket.addImage("rocket", rocketImg);

}

function draw() {
    background(0);
        space.velocityY = 1;
    if(gameState === "play"){
        rocket.y = World.mouseY;
        rocket.x = World.mouseX;

        if(space.y > 400 ){
   
            space.y = height/2;
            }
        }            
    spawnDoors()
    
    if(dangersGroup.isTouching(rocket) || rocket.y > 400){
        rocket.destroy();
        gameState = "end"
    }
      

    drawSprites();

}
if (gameState === "end"){
    stroke("violet");
    fill("violet");
    textSize(30);
    text("Game Over", 230,250)
}
function spawnDoors() {
    
    if (frameCount % 240 === 0) {
        var danger = createSprite(200, -100);
        danger.scale = 0.9
        danger.x = Math.round(random(120,400));
        danger.addImage(dangerImg);
        dangersGroup.add(danger);
    }

}