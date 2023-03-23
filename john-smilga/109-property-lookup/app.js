/*
  Property lookup 
  If child does not ahve ask parent
  Everything in JS is an object

  -> prototype jo hai voh instance ka parent hai theek hai 
  toh jab bhi Account ke andar humei BANK NAME mil jaye toh john.bank jo hai voh account ke andar wale deposit ko priority dega
  -> in case , propotype bhi pehle instance ke andar check krega 
  phir khud ke andar check krega 

*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const john = new Account("john", 200);
const jags = new Account("jags", 300);

// console.log(Account.prototype);
Account.prototype.bank = "Chase";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

// console.log(john.bank);
// john.deposit(347);

console.log({});
console.log([]);
