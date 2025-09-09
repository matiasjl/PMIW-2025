// ejemplo extraido de > https://p5js.org/reference/p5/Array/

// Declare the variable xCoordinates and assign it an empty array.
let xCoordinates = [];

function setup() {
  createCanvas(100, 100);

  // Add elements to the array using a loop.
  for (let x = 20; x < 100; x += 20) {
    xCoordinates.push(x);  //agregue los 4 datos: 20, 40, 60 y 80
  }

  describe('Four white circles drawn in a horizontal line on a gray background.');
}

function draw() {
  background(200);

  // Access each element of the array and use it to draw a circle.
  //for (let x of xCoordinates) {
  //  circle(x, 50, 20);
  //}
  
  // con for mas conocido por la people de esta materia
  for( let i = 0 ; i < xCoordinates.length ; i++ ){  //0 a 3
    circle(xCoordinates[i], 50, 20);
  }
}
