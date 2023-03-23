// Blue Print
// Factory Functions and Constructor Functions
// constructor Functions
// new - create new object, poitns to it, omit return

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

const jags = new Person("Jagmeet", "singh");
jags.fullName();
const jas = new Person("Jasmeet", "singh");
jas.fullName();

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}
