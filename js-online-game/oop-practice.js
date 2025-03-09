// function Sprite({ position, velocity, context }) {
//   this.position = position;
//   this.velocity = velocity;
//   this.context = context;
// }

// Sprite.prototype.draw = function () {
//   this.context.fillStyle = "red";
//   this.context.fillRect(this.position.x, this.position.y, 50, 150);
// };

// // Usage
// const canvas = document.querySelector("canvas"); // select the canvas
// const ctx = canvas.getContext("2d"); // get context

// // Set initial height width for canvas
// canvas.width = 1024;
// canvas.height = 576;

// ctx.fillRect(0, 0, canvas.width, canvas.height);

// // Player
// const player = new Sprite({
//   position: {
//     x: 0,
//     y: 0,
//   },
//   velocity: {
//     x: 0,
//     y: 0,
//   },
//   context: ctx,
// });

// player.draw();

// // Enemy
// const enemy = new Sprite({
//   position: {
//     x: 400,
//     y: 100,
//   },
//   velocity: {
//     x: 0,
//     y: 0,
//   },
//   context: ctx,
// });

// enemy.draw();

// function animate() {
//   window.requestAnimationFrame(animate);
// }

// function Home(rooms, portions, isAttachBath) {
//   this.rooms = rooms;
//   this.portions = portions;
//   this.isAttachBath = isAttachBath;
// }

// Home.prototype.Cost = function (amount = "$5000") {
//   this.amount = amount;
//   return this.amount;
// };

// const myHome = new Home(6, 2, true);

// console.log(myHome.Cost());

// function Student(id, name, percentage) {
//   this.id = id;
//   this.name = name;
//   this.percentage = percentage;
// }

// const students = [new Student(1, "Saqib", 90), new Student(2, "Ali", 95)];

// const studentsArray = new Array(
//   new Student(1, "Saqib", 90),
//   new Student(2, "Ali", 95)
// );

// console.log(students[0].name);
// console.log(students[1].name);

class Std {
  #id;
  #name;
  #percentage;

  constructor(id = 0, name = "XYZ", percentage = "0") {
    this.#id = id;
    this.#name = name;
    this.#percentage = percentage;

    // Seal the instance to prevent adding new properties
    Object.seal(this);
  }

  display() {
    console.log(
      "_id:",
      this.#id + "\n",
      "Name:",
      this.#name + "\n",
      "Percentage:",
      this.#percentage
    );
  }
}

const st = new Std();
st.age = 10;
console.log(st.age);

// st.display();

function Student(id = 0, name = "XYZ", percentage = "0") {
  let _id = id;
  let _name = name;
  let _percentage = percentage;

  this.getId = function () {
    return _id;
  };

  this.setId = function (id) {
    _id = id;
  };

  this.display = function () {
    console.log(
      "_id:",
      _id + "\n",
      "Name:",
      _name + "\n",
      "Percentage:",
      _percentage
    );
  };

  // Seal the instance to prevent adding new properties
  Object.seal(this);
}

const s = new Student();

s.display()
