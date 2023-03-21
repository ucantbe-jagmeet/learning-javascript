// className
// classlist

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className; // shows the running class on an element
// console.log(classValue);

second.className = "colors text"; // here we give class attribute a value and this is the way of adding two classes

// ---------clas list --------------

// third.classList.add("colors");
// third.classList.add("text");

third.classList.add("text", "colors");
third.classList.remove("text");
// only classList has ability to add classes like this way

let result = third.classList.contains("colors");
console.log(result);
