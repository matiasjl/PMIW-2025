// https://p5js.org/reference/p5/noise/

//para poder visibilizar la clase, SIEMPRE hay que instanciar un objeto
//let nombr = new Clase( param );
  let bicho = new Enemigo();

function setup() {
  createCanvas( 640, 480 );
  //bicho = new Enemigo();
  
  //noiseSeed(99);
}


function draw() {
  background( 200, 10 );
  
  bicho.correr();
  bicho.mostrar();
}
