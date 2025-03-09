import Sprite from "./Sprite.js";

const canvas = document.querySelector("canvas"); // select the canvas
const ctx = canvas.getContext("2d"); // get context

// Set initial height width for canvas
canvas.width = 1024;
canvas.height = 576;

ctx.fillRect(0, 0, canvas.width, canvas.height);

// Player
const player = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  context: ctx, // passing context
});

player.draw();

// enemy
const enemy = new Sprite({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  context: ctx,
});

enemy.draw();

//
function animate() {
  window.requestAnimationFrame(animate);
}
