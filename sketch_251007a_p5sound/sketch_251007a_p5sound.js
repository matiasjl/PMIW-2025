// ejemplo para importar la libreria de sonido
// sketch > import library > p5.sound
//
// ATENTIS en index.html debe estar el script:
// <script language="javascript" type="text/javascript" src="libraries/p5.sound.min.js"></script>
//
// MACHETE DE p5sound:
// .play();
// .stop();
// .pause();
// .pan();             //valores -1.0 (izquierda) a 1.0 (derecha) donde 0.0 es el centro
// .isPlaying();       //retorna true or false
// .setLoop(true);     //valores true or false
// .setVolume(value);  //valores 0.0 (silencio) a 1.0 (maximo) #NORMALIZADO
// .playMode(value);   //valores 'sustain' or 'restart'

let song;

function preload() {
  song = loadSound('data/lucky_dragons_-_power_melody.mp3');
}

function setup() {
  //
  song.setLoop(true);
  //
  createCanvas(640, 480);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
