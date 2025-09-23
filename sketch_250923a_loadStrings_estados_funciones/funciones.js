function dialogoDeTexto( t, d, i ){
  //cuadro
  if( i % 2 == 0 )
    fill( 205 );
  else
    fill( 155 );
  rect( 100-20, 100-20, 400+40, 175, 20 );
  //texto
  textSize( t );
  fill( 50 );
  text( d[i], 100, 100, 400 );
}
