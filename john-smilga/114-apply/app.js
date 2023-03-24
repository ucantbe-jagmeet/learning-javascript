// call - runs instantly, arguments - list of items
// apply - runs instantly , arguments - array of items

const john = {
  name: "john",
  age: 24,
};

const susan = {
  name: "susan",
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
  );
}

greet.call(john, "san Dieago", "US");
greet.call(susan, "san Dieago", "US");
greet.call({ name: "peter", age: 30 }, "san Dieago", "US");

greet.apply(john, ["san Dieago", "US"]); // we cant put state and cuotnry in apply in list type method , we can put them only as an array
greet.apply(susan);
greet.apply({ name: "peter", age: 30 });
