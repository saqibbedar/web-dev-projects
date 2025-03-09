class Sprite {
  // constructor
  constructor({ position, velocity, context }) {
    // member variables
    this.position = position;
    this.velocity = velocity;
    this.context = context;
  }

  // member functions
  draw() {
    this.context.fillStyle = "red";
    this.context.fillRect(this.position.x, this.position.y, 50, 150);
  }
}

export default Sprite;