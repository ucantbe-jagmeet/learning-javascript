// filter
// it returns a new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 22, position: "designer" },
  { name: "susy", age: 30, position: "the Boss" },
  { name: "anna", age: 35, position: "the Boss" },
];

const youngPeople = people.filter((person) => {
  return person.age <= 25;
});

const developers = people.filter((person) => {
  return person.position === "the Boss";
});

console.log(youngPeople);
console.log(developers);
