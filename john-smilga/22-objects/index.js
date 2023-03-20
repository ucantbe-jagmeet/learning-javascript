// objects - key / value pairs methods
// dot convention

const person = {
  name: "Jagmeet",
  lName: "Singh",
  age: 22,
  education: false,
  married: true,
  siblings: ["Anna", "Peter", "Susan"],
  greeting: function () {
    // return 'Hello My name is Jags';
    console.log("Hello My name is Jags");
  },
};

const age = person.age;
console.log(age);

console.log(person.greeting());
console.log(person.siblings[2]);
person.greeting();
