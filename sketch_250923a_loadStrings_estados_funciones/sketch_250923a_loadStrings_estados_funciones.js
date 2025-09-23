// loadStrings, arrays, funciones para visualizar textos/dialogos, maquina de estados

let dialogo;
let indice;
let estado;
let fondo;

function preload(){
  dialogo = loadStrings('/assets/dialogo.txt');
  indice = 0;
  estado = 0;  // "pantalla_01"
  fondo = color( random(128, 255), random(128, 255), random(128, 255), 10 ); 
}

function setup() {
  createCanvas(600, 600 );
  //textSize( 30 );
  
  console.log( dialogo );
}


function draw() {
  background( fondo );
  
  //maquina de estados finitos = logica de pantallas
  if( estado == 0 ){
    // imagen de fondo
    //text( dialogo[indice], 100, 100, 400 );  //4to parametro de text > me indica el ancho maximo del texto
    dialogoDeTexto( 30, dialogo, indice );
    // evento: botones
    // otras cosas a visualizar en pantalla
  }else if( estado == 1 ){
    //text( dialogo[indice], 100, 100, 400 );  
    dialogoDeTexto( 30, dialogo, indice );
    //
  }else if( estado == 2 ){
    //text( dialogo[indice], 100, 100, 400 ); 
    dialogoDeTexto( 30, dialogo, indice );
    //
  }else if( estado == 3 ){
    //text( dialogo[indice], 100, 100, 400 );  
    dialogoDeTexto( 30, dialogo, indice );
    //
  }else if( estado == 4 ){
    //text( dialogo[indice], 100, 100, 400 ); 
    dialogoDeTexto( 30, dialogo, indice );
    //
  }else if( estado == 5 ){
    //text( dialogo[indice], 100, 100, 400 ); 
    dialogoDeTexto( 30, dialogo, indice );
    //
  }else if( estado == 6 ){
    //text( dialogo[indice], 100, 100, 400 ); 
    dialogoDeTexto( 30, dialogo, indice );
    //
  }else if( estado == 7 ){
    //text( dialogo[indice], 100, 100, 400 ); 
    dialogoDeTexto( 30, dialogo, indice );
    //
  }else if( estado == 8 ){
    //text( dialogo[indice], 100, 100, 400 ); 
    dialogoDeTexto( 30, dialogo, indice );
    //
  }else if( estado == 9 ){
    //text( dialogo[indice], 100, 100, 400 );  
    dialogoDeTexto( 30, dialogo, indice );
    //
  }else if( estado == 10 ){
    //text( dialogo[indice], 100, 100, 400 );  
    dialogoDeTexto( 30, dialogo, indice );
    //
  }
  
}

function mousePressed(){
  estado++;  //EVENTO: cuando hago clic cambio el estado
  //
  indice++;  //ahora es lo mismo que estado, cuando haya bifurcaciones NO
  //
  fondo = color( random(128, 255), random(128, 255), random(128, 255), 10 );
  //
  if( indice == 11 ){
    indice = 0;
  }
  if( estado == 11 ){
    estado = 0;
  }

}
