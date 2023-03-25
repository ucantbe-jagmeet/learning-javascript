// Rest Operator ...
// gathers/collects the items

//arrays
const fruit = ["apple", "orange", "lemon", "banana", "pear"];
const [first, ...fruits] = fruit;
// console.log(first, fruits);

//objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...rest } = person;
// console.log(job, rest);

const testScores = [45, 54, 6, 56, 75, 75];

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);

  // const avg =
  //   scores.reduce((acc, curr) => {
  //     acc += curr;
  //     return acc;
  //   }, 0) / scores.length;
  // console.log(Math.floor(avg));

  let total = 0;
  for (const score of scores) {
    total += score;
  }

  console.log(total / scores.length);
};

getAverage(person.name, 45, 54, 6, 56, 75, 75);
getAverage(person.name, ...testScores);
