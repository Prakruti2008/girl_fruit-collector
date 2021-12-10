var girlImg;
var girl;
var bkImg; 
var tree,trees;
var banana;
var lizard,lizzard;
var pinapple;
var apple,melon;
var orange;
var cloud;
var basket,baskets;
var score=0
var fruitGroup
var gameState="play"
var melon2,orange2,apple2,banana2;

function preload(){
girlImg=loadImage("assets/girl.png")
orange=loadImage("assets/orange2.png")
bgImg = loadImage("assets/bg.png")
apple=loadImage("assets/apple2.png")
banana=loadImage("assets/banana2.png")
melon=loadImage("assets/melon2.png")
tree=loadImage("assets/tree.png")
gameOver=loadImage("assets/gameOver.png")
cloud=loadImage("assets/cloud.png")
basket=loadImage("assets/basket2.png")
lizard=loadImage("assets/lizard.png")


}


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.7;

 




 
var ground=createSprite(800,935,555000,90)
ground.color="brown"

trees=createSprite(width/3+400,height/2,100,1)
trees.addImage(tree)
trees.scale=0.2 ;
trees=createSprite(width/3,height/2,100,1)
trees.addImage(tree)
trees.scale=0.2 ;
trees=createSprite(width/3+200,height/2,100,1)
trees.addImage(tree)
trees.scale=0.2 ;
trees=createSprite(width/3+900,height/2,100,1)
trees.addImage(tree)
trees.scale=0.2 ;
trees=createSprite(width/3+600,height/2,100,1)
trees.addImage(tree)
trees.scale=0.2 ;
trees=createSprite(width/3-400,height/2,100,1)
trees.addImage(tree)
trees.scale=0.2 ;
trees=createSprite(width/3-600,height/2,100,1)
 trees.addImage(tree)
 trees.scale=0.2 ;
 trees=createSprite(width/3+1200,height/2,100,1)
 trees.addImage(tree)
 trees.scale=0.2 ;

 girl=createSprite(width/2+200,height-200)
 girl.addImage(girlImg)
 girl.scale=0.09;
 girl.velocityX=-1

 baskets=createSprite(width/2+200,height-200)
 baskets.addImage(basket)
 baskets.scale=0.5



 gameOverSprite=createSprite(width/2,height/2);
 gameOverSprite.addImage(gameOver);
 gameOverSprite.scale=0.5;
 gameOverSprite.visible=false;

fruitGroup=new Group()
 
}


function draw() {
  background("lightBlue");  
  
  
  
  girl.x=World.mouseX;
  baskets.x=World.mouseX;
 

  
         
  if(gameState=="play"){

    
    
    

    

     score=Math.round(frameRate()/60+score)
     
     
     if(baskets.isTouching(fruitGroup)){
      baskets.destroy()
      fruitGroup.lifetime=900
  
  gameOverSprite.visible=true;
     gameState="end"
    }
  
  }
  else{
fruitGroup.setVelocityXEach(0)

  }
  textSize(25)
  text("score= "+score,width/2,100)

 
     
  spawnClouds()
 spawnfriut()

  
  drawSprites();
  

     
    

 

}
function spawnClouds(){
  
  if(frameCount%700===0){
var clouds=createSprite(width/2,100)
  clouds.addImage(cloud)
  clouds.scale=0.6;
  clouds.velocityX=-2
  }
  
}

function spawnfriut(){
  if(frameCount%100===0){
var fruits=createSprite(width/3,height/2);
fruits.lifetime=height/3
fruits.velocityY=3;

var num=Math.round(random(1,3))
switch(num){
  case 1:fruits.addImage(melon)
  break;

  case 2:fruits.addImage(apple)
  break;

  case 3:fruits.addImage(orange)
  break;

  case 4:fruits.addImage(lizard)
  break;

}
fruits.scale=0.5;
fruitGroup.visible=true
fruitGroup.add(fruits)

  }
  if(frameCount%100===0){
    var fruits=createSprite(width/+500,height/2);
    fruits.lifetime=height/3
    fruits.velocityY=3;
    
    var num=Math.round(random(1,3))
    switch(num){
      case 1:fruits.addImage(melon)
      break;
    
      case 2:fruits.addImage(apple)
      break;
    
      case 3:fruits.addImage(orange)
      break;
    
      case 4:fruits.addImage(lizard)
      break;
    
    }
    fruits.scale=0.5;
    fruitGroup.visible=true
    fruitGroup.add(fruits)
    
      }
      if(frameCount%100===0){
        var fruits=createSprite(width/3+300,height/2);
        fruits.lifetime=height/3
        fruits.velocityY=3;
        
        var num=Math.round(random(1,3))
        switch(num){
          case 1:fruits.addImage(melon)
          break;
        
          case 2:fruits.addImage(apple)
          break;
        
          case 3:fruits.addImage(orange)
          break;
        
          case 4:fruits.addImage(pinapple)
          break;
        
        }
        fruits.scale=0.5;
        fruitGroup.visible=true
        fruitGroup.add(fruits)
        
          }
          if(frameCount%100===0){
            var fruits=createSprite(width/3+1000,height/2);
            fruits.lifetime=height/3
            fruits.velocityY=3;
            
            var num=Math.round(random(1,3))
            switch(num){
              case 1:fruits.addImage(melon)
              break;
            
              case 2:fruits.addImage(apple)
              break;
            
              case 3:fruits.addImage(orange)
              break;
            
              case 4:fruits.addImage(lizard)
              break;
            
            }
            fruits.scale=0.5;
            fruitGroup.visible=true
            fruitGroup.add(fruits)
            
              }
}