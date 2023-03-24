// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

function printPerson({ first, last, city }) {
  // console.log(person.first);
  // const { first, last, city} = person
  console.log(first, last, city);
}

printPerson(bob);
