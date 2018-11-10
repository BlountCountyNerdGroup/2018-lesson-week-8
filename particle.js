var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

// A) Create a circle object with properties for

// 1. x position (x)
// 2. y position (y)
// 3. radius (r)
// 4. velocity in the x direction (vx)
// 5. veloctiy in the y direction (vy)
// 6. color (color)
// 7. the speed you want your color to change (vc)


// B) Draw a circle using the arc() and beginPath() function of the canvas

// C) Create a function called drawCircles and put the code you used to draw the circle inside it
//    Your circle will dissapear, but it will come back later when we call the function.

// D) Run drawCircles() at the bottom of the file so that drawCircles() will run the first time the computer reads the file
//    You should see the circle reappear.

// E) Use circle.x += circle.vx and circle.y += circle.vy to make the ball move
//    You will not see the ball move yet, but check the console for errors.

// F) Call requestAnimationFrame at the bottom of body of the drawCircles() function
//    You should see the ball moving around the screen creating a solid path wherever it goes.

// G) Use the clearRect member function of ctx to clear the screen between drawings
//    You should now see a ball moving around your screen (at this point it will fly off the screen but we will fix that later)