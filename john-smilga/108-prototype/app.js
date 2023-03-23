/*
  Prototypal Inheritance Model
  Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const john = new Account("john", 200);
const jags = new Account("jags", 300);

Account.prototype.bank = "Chase";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

console.log(john.bank);
console.log(jags);

john.deposit(347);
