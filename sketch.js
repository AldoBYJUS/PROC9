
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  if (keyIsDown(RIGHT_ARROW))
   {
    // escribir el código para cambiar el color del fondo 
    background("red");

  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    // escribir el código para cambiar el color del fondo 
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    // escribir el código para cambiar el color del fondo 
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    // escribir el código para cambiar el color del fondo 
    background("green");
  }


  
  drawSprites();
}

