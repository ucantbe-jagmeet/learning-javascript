// PowerFull array  Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls CallBack against rach iten in a array. Reference Item in the Callback Parameter

// forEach doesnot return new array
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 22, position: "designer" },
  { name: "susy", age: 30, position: "the Boss" },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

people.forEach((e) => {
  console.log(e.position.toUpperCase());
});
