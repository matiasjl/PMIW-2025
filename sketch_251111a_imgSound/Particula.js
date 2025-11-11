
class Particula {

  // constructor con las propiedades
  // es la funcion que se llama al crear el objeto
  constructor( velocidad, pelo ) {  //parametros de constructor
    // declaro las propiedades de la clase
    this.x = Math.floor( Math.random() * 800 );
    this.y = -100;
    this.diam = Math.floor( 10 + Math.random() * 40 );
    this.vel = velocidad;
    this.mostrar = true;  //UPDATE Ximena
    //
    this.pel = pelo;  //guardo la imagen que recibo por parametro "pelo" en mi propiedad pel
  }

  // metodos = funciones de la clase
  dibujar() {
    if ( this.mostrar ) {  //UPDATE Ximena
      //fill( 255, 20 );  //UPGRADE 12/11: transparencia
      //circle( this.x, this.y, this.diam );
      image( this.pel, this.x, this.y, this.diam, this.diam );
    }
  }

  actualizar() {
    if ( this.mostrar ) {  //UPDATE Ximena
      //this.vel += 0.05;            //aumenta velocidad mientras cae
      this.y = this.y + this.vel;  //suma la velocidad a la pos Y
    }
  }

  reciclar() {
    if ( this.y >= height+100 ) {
      this.x = int( random(width) );  //funciones nativas p5.js
      this.y = -100;
      this.diam = Math.floor( 10 + Math.random() * 40 );
    }
  }

  // IDEA Ximena: desaparecer el enemigo cuando colisiona
  desaparecer() {
    this.mostrar = false;
    this.x = Math.floor( Math.random() * 800 );
    this.y = -100;
  }

  //moverConMouse(){  //reemplaza a actualizar
  //  this.x = mouseX;
  //  this.y = mouseY;
  //}

  //colision( p ){  // p = un dato de tipo particula
  //  if( dist( this.x, this.y, p.x, p.y ) < 30 ){  //igual a los botones circulares
  //    console.log("COLISIONO");

  //    //ej 1: cambia el tamanio
  //    this.diam = Math.floor( 10 + Math.random() * 40 );

  //    //ej 2: se resetea en y
  //    //this.y = -100;

  //    //ej 3: bajar la velocidad
  //    //this.vel = this.vel / 2;    //IMPORTANTE: la colision es un estado, uno debe convertirla a evento #ParaResolver
  //  }
  //}

  //-----------------------------------------
  // metodos get y set
  //get x() {
  //}
}
