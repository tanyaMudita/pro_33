var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var particle;
var score=0;
var count=0;
var gameState="play";

function setup() {
  createCanvas(800, 800);
   
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {

      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));

   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  
  Engine.update(engine);


  if(gameState!=="end"){
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  


   if(frameCount%60===0){
     particles.push(new Particle(random(10,790,),0, 10,10));
     //score++;
   }
 
   for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
   
   text("500",25,760);
   text("500",105,760);
   text("500",185,760);
   text("500",265,760);
   text("200",345,760);
   text("200",425,760);
   text("200",505,760);
   text("100",585,760);
   text("100",665,760);
   text("100",745,760);
/*
   if(particle.y>10){
     count=count+1;
   }*/

   if(count>=5){
     gameState=end
   }

   mousePressed();
}


if(gameState==="end"){
  particle=null;

}

}

function mousePressed(){

  if(gameState!=="end"){
  //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    particle=new Particle(mouseX,10,10,10);
    if(particle!==null){
      for (var i=0;i<count;i++){
        particles[i].display();
      }
    
  
      if(particle.body.position.y>740){
  
        if(particle.body.position.x<300){
          score=score+500;
          particle=null;
        }
        if(particle.body.position.x>301 && particle.body.position.x<510){
          score=score+200;
          particle=null;
        }
        if(particle.body.position.x>511 && particle.body.position.x<800){
          score=score+100;
          particle=null;
        }
  
      }
     }
   
  }
  
}