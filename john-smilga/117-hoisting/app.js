// Hoisting
// function and var declarations are hoisted
// safer to access only after inittalised

const firstName = "john";
const lastName = "jordan";
const random = "random";
console.log(firstName);

display();
function display() {
  console.log(`hello world`);
}

// moreComplex(); -> we can not access
function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${random}`);
}
