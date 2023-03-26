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
// const values = Object.values(person);
const result = Object.entries(person); // storing the keys as well as values in array
console.log(result);

// map method

const newResult = result.map((item) => {
  const [first, second] = item;
  console.log(first, second);

  return first;
});

// console.log(newResult);

// for of loop
for (const [first, second] of result) {
  // const [first, second] = item;
  console.log(first, second);
}
