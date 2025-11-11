// esta clase va a crear los objetos de las clases Usuario y Particula

class Juego{

  constructor(){
    this.jugador = new Usuario();
    //
    this.enemigos = [];  //le indico que es un array
    for( let i = 0 ; i<10 ; i++ ){
      this.enemigos[i] = new Particula( random(10) );
    }
  }
  
  dibujar(){
    this.jugador.dibujar();
    //
    for( let i = 0 ; i<10 ; i++ ){
      this.enemigos[i].actualizar();
      this.enemigos[i].dibujar();
      this.enemigos[i].reciclar();
    }
  }
    
  teclear(){
    this.jugador.mover();
  }

}
