// loadStrings, arrays, funciones para visualizar textos/dialogos, maquina de estados

let dialogo;
let indice;

function preload(){
  dialogo = loadStrings('/assets/dialogo.txt');
  indice = 0;
}

function setup() {
  createCanvas(600, 600 );
  textSize( 16 );
  
  console.log( dialogo );
}


function draw() {
  //background( 255 );
  
  if( indice % 2 == 0 ){  //par
    textAlign(LEFT);
  }else{  //impar
    textAlign(RIGHT);  
  }
  
  text( dialogo[indice], 100, 100+indice*50, 400 );  //4to parametro de text > me indica el ancho maximo del texto
}

function keyPressed(){
  indice++;
  if( indice == 11 ){
    indice = 0;
    background( 255 );
  }
}
