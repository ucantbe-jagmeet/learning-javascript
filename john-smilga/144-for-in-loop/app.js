/*
  "for in "loop - iterate over the object properties
  it is not advised to uuse it on arrays, especially if the order is important
  on arrays ise "for of" loop instead
*/

const person = {
  name: "john",
  age: 35,
  staus: "student",
};

for (const propertyName in person) {
  console.log(`${propertyName} : ${person[propertyName]}`);
}
