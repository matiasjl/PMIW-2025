
class Usuario {

  constructor( e ) {  //recibo como param el array de enemigos
    this.x = 0;
    this.y = 240;
    this.t = 50;  //tamano
    this.v = 10;  //velocidad
    this.c = 255;
    //
    this.enemigo = e;  //copio el arreglo de enemigos en mi propio arreglo e
  }

  dibujar() {
    fill( this.c, 0, 0 );
    rect( this.x, this.y, this.t, this.t);
  }

  mover() {
    if (keyCode === LEFT_ARROW ) {
      // Code to run if the enter key was pressed.
      this.x -= this.v;
    }
    if (keyCode === RIGHT_ARROW ) {
      // Code to run if the enter key was pressed.
      this.x += this.v;
    }
  }

  colisionar() {
    for ( let i = 0; i<10; i++ ) {
      //va a comparar la posicion del jugador con los 10 enemigos
      if ( dist( this.x, this.y, this.enemigo[i].x, this.enemigo[i].y) < this.t ) {  //OJO mejorar el area de colision
        //efectivamente colisione
        background( 255, 0, 0 );
        this.x = 0;
        //
        // IDEA Ximena: desaparecer el enemigo cuando colisiona
        this.enemigo[i].desaparecer();
      }
    }
  }
}
