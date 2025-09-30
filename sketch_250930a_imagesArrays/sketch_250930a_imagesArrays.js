// imagenes, arrays, manejo del tiempo con millis(), spritesheet

let mb = [];  //declaro mi arreglo sin tamano

function preload(){
  //aca cargo imagenes, sonidos, txt y otros archivos externos
  
  mb.push( loadImage('/assets/mb00.png') );  //indice 0
  mb[1] = loadImage('/assets/mb01.png');     //indice 1    //otra manera de carga
  mb.push( loadImage('/assets/mb02.png') );  //indice 2

}

function setup() {
  createCanvas( 600, 600 );
}

function draw() {
  background( 200 );
  
  //image( mb[0], 0, 0 );
  //image( mb[1], 120, 0 );
  //image( mb[2], 240, 0 );
  
  for( let i = 0; i < mb.length ; i++ ){  // mb.length devuelve el largo del arreglo = 3
    image( mb[i], i*120, 0 );    
  }
}
