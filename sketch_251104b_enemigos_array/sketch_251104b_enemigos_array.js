// https://p5js.org/reference/p5/noise/

//para poder visibilizar la clase, SIEMPRE hay que instanciar un objeto
//let nombr = new Clase( param );
  let bicho; //= new Enemigo();

// declaro mi array de objetos
let arregloEnemigos = [];

function setup() {
  createCanvas( 640, 480 );
  //noiseSeed(99);
  
  bicho = new Enemigo();
  
  for( let i = 0 ; i < 10 ; i++ ){  // de 0 a 9 = 10 repeticiones
    arregloEnemigos[i] = new Enemigo();
  }
  
  cursor(HAND);
}


function draw() {
  background( 200, 10 );

  bicho.correr();
  bicho.mostrar();
  
  arregloEnemigos[0].correr();
  arregloEnemigos[0].mostrar();
  
  for( let i = 1 ; i < 10 ; i++ ){  // de 1 a 9 = 9 veces
    arregloEnemigos[i].correr();
    arregloEnemigos[i].mostrar();  //indice 1 a 9
  }
}
