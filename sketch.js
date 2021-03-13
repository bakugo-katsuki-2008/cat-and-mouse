var cat, cat1, cat2, cat3, cat4, c1Image, c2Image, c3Image, c4Image
var mouse, m1Image, m2Image, m3Image, m4Image
var garden, gardenImage


function preload() {
    //load the images here
    c1Image = loadAnimation("images/cat1.png");
    catanimation=loadAnimation("images/cat2.png","images/cat3.png")
    c4Image = loadAnimation("images/cat4.png")
    m1Image = loadImage("images/mouse1.png");
    m4Image = loadAnimation("images/mouse4.png");
    mouseanimation = loadAnimation("images/mouse2.png", "images/mouse3.png")
    gardenImage = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,600);
    cat.addAnimation("sitting",c1Image);
    cat.addAnimation("walking",catanimation);
    cat.addAnimation("standing", c4Image);
    cat.scale = 0.2

    garden = createSprite(500,400);
    garden.addImage(gardenImage);
    garden.scale = 1.
    cat.depth = garden.depth + 1

    mouse = createSprite(200,600);
    mouse.addAnimation("cheese", m1Image);
    mouse.addAnimation("shrug" ,mouseanimation)
    mouse.addAnimation("detective", m4Image);
    mouse.scale = 0.2
}

function draw() {

    background(255);
    text(mouseX + ' ' + mouseY, 10,45)
    text(mouse.x , 70, 45)
    text(cat.x , 100, 45)
    //Write condition here to evalute if tom and jerry collide
   

    keyPressed();
    touchin();
    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        cat.velocityX = -5;
       
        cat.changeAnimation("walking");
        mouse.changeAnimation("shrug");
    }}

  //For moving and changing animation write code here

function touchin() {
    if ((cat.x - mouse.x) < 200) {
        cat.changeAnimation("standing"); 
        cat.velocityX = 0
        mouse.changeAnimation("detective");
        
    }
}
