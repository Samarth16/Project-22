var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
    fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

    fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  keyPressed();
  drawSprites();

  starBody.x = starBody.position.x;
  starBody.y = starBody.position.y;

  
  if(keyDown(LEFT_ARROW)){
	  fairy.velocityX = -2;
  }

  if(keyDown(RIGHT_ARROW)){
	  fairy.velocityX = 2;
  }

  if(star.isTouching(fairy)){
	  star.velocityY = 0;
	  star.velocityX = 0;
	  fairy.velocityX = 0;
	  fairy.velocityY = 0;
  }

  //fairy.debug = true;
  fairy.setCollider("rectangle",500,-50,100,100);
 
  textSize(20);
  fill("cyan");
  text("Please Press Down Arrow first and then after 2-3 seconds move the fairy",20,90);

}

function keyPressed() {
   
  if(keyDown(DOWN_ARROW)){
	  star.velocityY = 2;
  }
 
}



