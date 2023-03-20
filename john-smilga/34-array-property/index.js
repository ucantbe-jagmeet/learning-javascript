// Array Properties and Methods
let names = ["john", "bobo", "barry", "olga", "ben"];

//length
// console.log(names.length);
// console.log(names[3]);
// console.log(names[names.length - 1]);

//concat
const lastNames = ["pepper0", "onion", "banana"];
const allNames = names.concat(lastNames);

// console.log(allNames);

//reverse
// console.log(allNames.reverse());

//unshift
// allNames.unshift('susy');
// allNames.unshift("Jagmeet");
// console.log(allNames);

//shift
// allNames.shift();
// allNames.shift();
// console.log(allNames);

//push
// allNames.push('jag');
allNames.push("singh");
console.log(allNames);

// pop
// allNames.pop('jag');
allNames.pop("singh");
allNames.pop("banana");
console.log(allNames);

//splice - it mutates the orginal arrays -> looking for starting point and index and how many items to be removed
// console.log(allNames);
const specificNames = allNames.splice(2, 2);
// console.log(specificNames);
// console.log(allNames);
