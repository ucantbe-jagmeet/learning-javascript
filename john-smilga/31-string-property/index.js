// string properties and methods
// wrapper string object , don't memorize methods

let text = "Jagmeet Singh";
let result = text.length;

// console.log(result);

// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(3));
// console.log(text.charAt(text.length - 1)); // shows the last element of the string
// console.log(text.indexOf("s")); // shows the index of first element coming in the string

console.log(text.split("").reverse().join(""));

console.log(text.includes("meet"));
console.log(text.slice(0, 9));
console.log(text.slice(-3));
