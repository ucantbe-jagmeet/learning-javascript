const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomVal = getRandomValue();
  console.log(randomVal);
  document.body.style.backgroundColor = randomVal;
  color.textContent = randomVal;
});

function getRandomValue() {
  let value = "#";
  for (let i = 0; i < 6; i++) {
    value += hex[Math.floor(Math.random() * hex.length)];
  }

  return value;
}

const text1 = getRandomValue();

console.log(text1);
