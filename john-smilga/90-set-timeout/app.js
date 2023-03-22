function sayHello() {
  console.log("Hello John");
}

// setTimeout(sayHello, 1000);
// setTimeout(sayHello, 2000);
// setTimeout(sayHello, 5000);

// alternative approach
// setTimeout(function () {
//   console.log("heelo jagmeet");
// }, 2000);

// pass the arguments

function showScore(name, score) {
  console.log(`Hello ${name}, your score is ${score}`);
}

// setTimeout(showScore, 1000, "jagmeet", 99);

const firstID = setTimeout(showScore, 1000, "jagmeet", 99);
const secondID = setTimeout(showScore, 1000, "john", 86);
console.log(firstID);
console.log(secondID);

clearTimeout(secondID);
