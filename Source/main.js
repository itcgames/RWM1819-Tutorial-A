/**
 * main is the entry point for Javascript programs.
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 08/11/2017
 */

/**
 * main is the entry point for Javascript programs.
 * the game functions are called here.
 */

     lastFrameTimeMs = 0,
     maxFPS = 30,
     delta = 0,
     timestep = 1000 / 60;


function main() {
	initCanvas();
  document.title = "Tutorial";
  game = new Game();
  game.init();
}
function update(delta) {
  game.update();
  //game.draw();
}

function draw() {

  game.draw();
}
function panic() {
    delta = 0;
}

/**
 * mainLoop is game loop for the project.
 * draw is called every frame.
 */
 function mainLoop(timestamp) {
     // Throttle the frame rate.
     if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
         requestAnimationFrame(mainLoop);
         return;
     }
     delta += timestamp - lastFrameTimeMs;
     lastFrameTimeMs = timestamp;

     var numUpdateSteps = 0;
     while (delta >= timestep) {
         update(timestep);
         delta -= timestep;
         if (++numUpdateSteps >= 240) {
             panic();
             break;
         }
     }
     draw();

     requestAnimationFrame(mainLoop);
 }

 requestAnimationFrame(mainLoop);

 /**
  * Initialises the canvas - the drawing surface. The canvas
  * is added to the document. When a HTML document is loaded into a
  * browser, it becomes a document object. This document object is
  * the root node of the HTML document and is considered the 'owner' of all other
  * nodes such as forms, buttons, the canvas etc.
  */

 function initCanvas() {
 	// Use the document object to create a new element canvas.
 	var canvas = document.createElement('canvas');
 	// Assign the canvas an id so we can reference it elsewhere.
 	canvas.id = 'mycanvas';
 	canvas.width = window.innerWidth;
 	canvas.height = window.innerHeight;
 	// We want this to be a 2D canvas.
 	var ctx = canvas.getContext("2d");
 	// Adds the canvas element to the document.
 	document.body.appendChild(canvas);

	window.addEventListener("keydown", function(e) {
    // Space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

  return canvas;
 }
