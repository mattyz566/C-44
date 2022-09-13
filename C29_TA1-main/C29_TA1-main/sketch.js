var backgroundImg 
var Jerry
var JerryImg

 function preload(){ 
    backgroundImg = loadImage("Jungle background 1.webp") 
    JerryImg = loadImage("Jerry.png")
  }
     function setup() {    
      createCanvas(800, 500);  
       bg = createSprite(400,250,1000,250) 
       bg.addImage(backgroundImg) 
       bg.x = width/4
       bg.velocityX = -3

       Jerry = createSprite(100,400,50,100)
       Jerry.addImage(JerryImg)
       Jerry.scale = 0.5
      }
       function draw() { 
          background(220);   
          if(bg.x<100){
          bg.x = width/4
          }
          drawSprites() }




