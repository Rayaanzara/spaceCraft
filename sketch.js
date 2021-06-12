
var hasDocked;
var hasDocked = false;
function preload(){
  Iss = loadImage("iss.png")
  craft1 = loadImage("spacecraft1.png")
  craft2 = loadImage("spacecraft2.png")
  craft3 = loadImage("spacecraft3.png")
  craft4 = loadImage("spacecraft4.png")
sground = loadImage("spacebg.jpg")
}




function setup() {
  createCanvas(600,400);

  spaceCraft = createSprite(280,240);
spaceCraft.addImage(craft1);
spaceCraft.scale  = 0.15;

iss = createSprite(330,130);
iss.addImage(Iss);
iss.scale = 0.25;

}




function draw() {
  background(sground); 
  spaceCraft.addImage(craft2);

  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1,1)
  }
  
  if(keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y-2

  }
  
  if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(craft1)
    spaceCraft.y = spaceCraft.y+2
  }
  
  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(craft3)
    spaceCraft.x = spaceCraft.x-2
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(craft4)
    spaceCraft.x = spaceCraft.x+2
  }




if(spaceCraft.y<=(iss.y+70)&& spaceCraft.x<=(iss.x-10)){
  hasDocked = true;
  fill("white")
  textSize(25)
  text ("Docking Successfull!",200,300)
  
  
}


  drawSprites();
}