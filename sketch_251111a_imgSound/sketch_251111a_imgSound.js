//imagenes y sonidos es exactamente igual

let videojuego;  //solo creo la variable objeto

//variables globales para imagenes y sonidos
let pelota;

function preload(){
  pelota = loadImage( "data/pelota.png" );
}

function setup() {
  createCanvas(640, 480 );
  
  videojuego = new Juego( pelota );  //aca inicializo el objeto
}


function draw() {
  background( 200 );
  
  //llamo los metodos de mi objeto
  //jugador.dibujar();
  videojuego.dibujar();
}

function keyPressed(){
  //jugador.mover();
  videojuego.teclear();
}
