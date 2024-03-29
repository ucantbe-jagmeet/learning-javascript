/*
  All Objects in Javascript have access to constructor property that returns a constructor function that created it

  built in constructor function

  arrays and functions are objects in javascript

*/
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love JS`
    );
    console.log(this);
  };
}

const jags = new Person("Jagmeet", "Singh");
console.log(jags.constructor);

const bob = {};
console.log(bob.constructor);

const list = [];
console.log(list.constructor);

const sayHi = function () {};
console.log(sayHi.constructor);

const suzy = new jags.constructor("Suzy", "Singh");
console.log(suzy.constructor);
