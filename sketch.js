//Create variables here



 var dog, happyDog, database, foodS, foodStock;
var database;
var position ; 

function preload()
{
dog.loadImage("images/dogImg.png");
happyDog.loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  
dog = createSprite(400,350,50,50);
dog.addImage("images/dogImg.png");

foodStock = database.ref('Food');
foodStock.on("value",readStock);





}


function draw() {  
  background(46, 139, 87) ;
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    }


  drawSprites();
  //add styles here
textSize(24);
fill ("red");
stroke(4);
text("Note: Press Up arrow key to feed your dog milk !")
}


function readStock(data){
foodS = data.val();
}


function writeStock(x){
database.ref('/').update({
Food:x
})
}