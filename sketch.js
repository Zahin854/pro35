//Create variables here
var dog,dogImage;
var happyDog
var database,foodS,foodStock;
function preload()
{
	dogImage=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
  //load images here
}

function setup() {
  database=firebase.database()
	createCanvas(500,500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImage)
  dog.scale=0.15
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
textSize(20);
fill("red")
text("Food Remaining:"+foodS,320,100)

}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
    console.log(foodS)
  }
  else{
    x=x-1
  }
database.ref('/').update({
  Food:x
})
}