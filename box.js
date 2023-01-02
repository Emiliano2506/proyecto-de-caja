class Box
  {
  // Anexo comentario
    constructor(x,y,w,h)
    {
      /*this.x = 100;
      this.y = 200;
      this.w = 50;
      this.h = 50;*/

      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }

    color(){
      fill("#4C4CC0");
    }

    set_color(c){
      fill(c);
    }

    show()
    {   
      // codigo rect = imprimir
      rect(this.x,this.y,this.w,this.h);
    }
     //Creacion de Funcion para Posicion X
      set_speed(v)
    {
      //algoritmo matemtico
      this.y = this.y+v;

    }
    set_speed4(left,up){
      this.x = this.x-left;
      this.y = this.y-up;
    }
    set_speed2(left,down){
      this.x = this.x-left;
      this.y = this.y+down;
    }
    set_speed1(rigth,up){
      this.x = this.x+rigth;
      this.y = this.y+up;
    }
    set_speed3(rigth,down){
      this.x = this.x+rigth;
      this.y = this.y-down;
    }

  //Creacion de Funcion para Posicion Y
    //Creacion de Funcion fill = color con atributo de entrada
      //Creacion de Funcion fill = color con atributo de entrada
  }

