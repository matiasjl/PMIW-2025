//declaro mi onjeto de la clase
let jugador = new Usuario();

function setup() {
  createCanvas(640, 480 );
}


function draw() {
  background( 200 );
  
  //llamo los metodos de mi objeto
  jugador.dibujar();
}

function keyPressed(){
  jugador.mover();
}
