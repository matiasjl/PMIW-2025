// pixel art arrays 2d

let miLista = [];  //1D
let miTabla = [];  //2D
let mod;

function setup() {
  createCanvas(600, 600 );
  mod = width / 10;  // =60

  //1D
  for ( let i = 0; i < 10; i++ ) {
    miLista[i] = round(random(100));
  }
  //miLista[5] = 111;  //escribir una posicion puntual
  //
  console.log( miLista );

  //2D
  for ( let i = 0; i < 10; i++ ) {
    miTabla[i] = []; // create nested array !importantePara2D
    for ( let j = 0; j < 10; j++ ) {
      miTabla[i][j] = false;
    }
  }
  miTabla[5][5] = true;
  miTabla[3][7] = true;
  miTabla[1][9] = true;
  //
  console.log( miTabla );
}

function draw() {
  background( 255 );

  for ( let i = 0; i < 10; i++ ) {
    for ( let j = 0; j < 10; j++ ) {
      //esto se ejecuta 10x10 veces = 100 veces
      if ( miTabla[i][j] == true ) {
        fill( 0 );
      } else {
        fill( 255 );
      }
      rect( i*mod, j*mod, mod*0.8, mod*0.8 );
    }
  }
  
  if( keyIsPressed ){  //igual que mouseIsPressed: se usan en draw
    background( 0 );  //se ejecuta todo el tiempo que el teclado este presionado
  }
  
}

function mousePressed() {  //clic para botones
  for ( let i = 0; i < 10; i++ ) {
    for ( let j = 0; j < 10; j++ ) {
      if( mouseX > i*mod & mouseY > j*mod & mouseX < i*mod+mod*0.8 && mouseY < j*mod+mod*0.8 ){  //zona rectangular
        //miTabla[i][j] = true;
        miTabla[i][j] = !miTabla[i][j];
      }
    }
  }
}
