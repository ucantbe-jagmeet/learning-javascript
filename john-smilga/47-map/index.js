// map
// does return a new array
// does not change size of origianl array
// uses values from original array when making new one

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 22, position: "designer" },
  { name: "susy", age: 30, position: "the Boss" },
];

const ages = people.map(function (e) {
  return e.age * 10;
});
const person = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 30,
  };
});
// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`;
// });
// document.body.innerHTML = names.join("");

console.log(ages);
console.log(person);
// console.log(names);
