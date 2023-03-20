// refernce vs value
// primitive data types
// string , number , symbol , Boolean , Undefined, Null
// Arrays, Functions , Objects = object
// typeof

// when asigning primitive data type value to a variable any changes made directly to that value, without affecting original value

// when asigning non-primitve data type value to a variable is done by reference so any changes will affect all the references

let number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value id ${number}`);
console.log(`the second value id ${number2}`);

let person = { name: "bob" };
// let person2 = person;
let person2 = { ...person };

person2.name = "jagmeet";

console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);
