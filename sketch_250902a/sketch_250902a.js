// breve intro a arrays

let nombre1 = "Matias";
let nombre2 = "Diego";
let nombre3 = "German";

//OPCION A > declaro el arreglo y le asigno sus valores
let nombresProfes = ['Matias', 'Diego', 'German'];  //array de 3 posiciones

//OPCION B > declaro el arreglo sin datos ni dimension
let nombresEstudiantes = [];  //es un array, pero sin datos aun

function setup() {
  createCanvas( 600, 300 );

  nombresEstudiantes.push("Aylen");  //pos 0
  nombresEstudiantes.push("Carola");
  nombresEstudiantes.push("Daniela");
  nombresEstudiantes.push("Ignacio");
  nombresEstudiantes.push("Joaquin");  //ahora tengo 5 datos en el array
  
  console.log(nombresEstudiantes);  //imprimo en consola TODO la data del array
  console.log(nombresEstudiantes[0]);  //imprimo en consola SOLO la data de la pos 0
  
}

function draw() {
  background( 220 );
  
  text( nombresEstudiantes, 100, 100 );     // dibuja todos los valores separados por coma 
  text( nombresEstudiantes[4], 100, 150 );  // dibuja solo el valor del indice indicado
  
  // como recorrer un array con ciclo for
  for( let i = 0 ; i < nombresEstudiantes.length ; i++ ){
    text( nombresEstudiantes[i], 400, 100 + 20*i );
  }
}
