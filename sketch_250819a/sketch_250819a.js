let miVariableDeCualquierDato;  //todo tipo de variables
const constanteSiempreMismoValor = 10;

let pelota;  //aun no tiene ningun dato

function preload(){  //aca se cargan los archivos externos
  pelota = loadImage ("assets/pelota.webp");
}

function setup() {  //void
  createCanvas( 500, 500 );  //setup
  
  pelota.resize( 100, 100 );
  
  imageMode( CENTER );
  noCursor();
}


function draw() {  
  
  background( 255, 0, 0, 20 );
  circle(mouseX, mouseY, 50 );
  
  console.log(mouseX);  //println
  
  image( pelota, mouseX, mouseY );
}
