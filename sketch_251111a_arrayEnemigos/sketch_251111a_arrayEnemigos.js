//declaro mi objeto de la clase
//let jugador = new Usuario();
let videojuego;  //solo creo la variable objeto

function setup() {
  createCanvas(640, 480 );
  
  videojuego = new Juego();  //aca inicializo el objeto
}


function draw() {
  background( 255 );
  
  //llamo los metodos de mi objeto
  //jugador.dibujar();
  videojuego.dibujar();
}

function keyPressed(){
  //jugador.mover();
  videojuego.teclear();
}
