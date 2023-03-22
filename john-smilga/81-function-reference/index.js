// select an element
// addEventListner()
// what event, what to do

const btn = document.querySelector(".btn");
const h2 = document.querySelector("h2");

function changeColors() {
  //  console.log("hello");
  let className = h2.classList.contains("red");
  if (className) {
    h2.classList.remove("red");
  } else {
    h2.classList.add("red");
  }
}

btn.addEventListener("click", changeColors);
