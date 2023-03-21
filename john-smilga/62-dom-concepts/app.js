// manupulating DOM by javascript

document.body.style.backgroundColor = "yellow";
document.body.style.color = "red";
document.getElementById("btn").style.backgroundColor = "red";
// console.log(window);

document.querySelector("element"); // do something

// assign to a variable
const element = document.getElementById("element");
// do something

// -----------------window Object------------------
// console.log(window);
// window object  browser api
// returns a node object or a node list, which is an arraylike object

const btn = document.getElementById("btn");
const name = btn.nodeName;
const css = btn.style;

console.log(btn);
console.log(name);
console.log(css);
