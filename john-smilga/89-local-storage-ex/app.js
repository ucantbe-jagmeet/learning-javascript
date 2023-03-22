// JSON.stringify(), JSON.parse

const friends = ["john ", "peter", "boby"];

localStorage.setItem("friends", JSON.stringify(friends)); // this passes whole string as a one value

// const values = localStorage.getItem("friends");
const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[1]);

// now we area checking if the value is in local storage or not

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);
// fruits.push("apple");
fruits.push("Orange ");

localStorage.setItem("fruits", JSON.stringify(fruits));
