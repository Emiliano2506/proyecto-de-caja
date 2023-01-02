//Etapa 1 Creacion de Objetos Programacion POO


var box1;
var box2;
var box3;
var box4;

var objeto;

function setup() 
{
  createCanvas(400, 400);
  /*box1 = new Box();
  box2 = new Box();
  box3 = new Box();
  box4 = new Box();*/

  box1 = new Box(10,10,20,20);
  box2 = new Box(350,10,20,20);
  box3 = new Box(10,350,20,20);
  box4 = new Box(350,350,20,20);
  objeto = createSprite(175,175,40,40);
}

function draw() 
{
  background("#952FDC");

  //box1.set_speed(2);
  /*box1.color();
  box2.color();
  box3.color();
  box4.color();*/
  /*box1.set_color("#267C23");
  box1.show();
  box1.set_speed1(4,4);
  box2.set_color("#78DF1D");
  box2.show();
  box2.set_speed2(2,2);
  box3.set_color("#48E182");
  box3.show();
  box3.set_speed3(3,3);
  box4.set_color("#AACB22");
  box4.show();
  box4.set_speed4(3,3);
  /*box1.set_speed(3);
  box2.set_speed(6);
  box3.set_speed(5);
  box4.set_speed(2);*/
  drawSprites();
}

