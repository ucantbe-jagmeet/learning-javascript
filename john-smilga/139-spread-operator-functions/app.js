// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const numbers = [23, 11, 45, 66, 88, 2303];

// console.log(Math.max(...numbers));

// it is not possible to put numbers array in max funciton
// console.log(Math.max(4, 5, 6, 7, 88));

const john = ["john", "sanders"];
const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};

// sayHello(john[0], john[1]);
sayHello(...john);
