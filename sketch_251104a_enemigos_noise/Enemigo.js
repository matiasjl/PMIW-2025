
class Enemigo {

  constructor() {
    //aqui declaro e inicializo las PROPIEDADES
    this.x = 640/2;
    this.y = 480/3;
  }

  //los METODOS son las acciones de mi clase: las funciones

  correr() {  //"actualizar" sus propiedades
    //this.x ++;
    //this.y ++;  //incrementa de a 1

    //this.x = random( 640 );
    //this.x = 640 * noise( 0.5 );

    //variable = tamPantalla * noise( numeroIncrementalNormalizado );  //un numero que incremente constantemente entre 0 y 1    
    this.x = 640 * noise(0.005 * frameCount);
    this.y = 480 * noise(0.005 * frameCount + 10000);
    

    //console.log( this.x );
  }

  mostrar() {  //"dibujar" en la pantalla
    rectMode( CENTER );
    rect( this.x, this.y, 50, 50 );
  }
}
