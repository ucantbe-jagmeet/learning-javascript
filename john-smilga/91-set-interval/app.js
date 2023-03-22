function showScore(name, score) {
  console.log(`Hello ${name}, your score is ${score}`);
}

const firstID = setInterval(showScore, 1000, "bobo", 45);
const secondID = setInterval(showScore, 1000, "susan", 88);

clearInterval(secondID);
