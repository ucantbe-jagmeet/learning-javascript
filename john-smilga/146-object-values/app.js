/*
 three methods to convert objects into arrays
 -> object.keys() -> convert property names into array
 -> object.values() -> convert property vales into array
 -> object.entries() -> convert both
*/

const person = {
  name: "john",
  age: 35,
  staus: "student",
};

// const keys = Object.keys(person);
const values = Object.values(person);

console.log(values);
