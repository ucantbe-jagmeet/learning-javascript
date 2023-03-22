// event object argument e , evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const btn = document.querySelector(".btn");
const heading = document.querySelector("h1");
const link = document.getElementById("link");

heading.addEventListener("click", function (e) {
  //   heading.classList.add("blue");
  console.log(e.currentTarget); // curent target show what we just clicked
  console.log(e.type); // curent action on this element here is clicked
});
btn.addEventListener("click", function (e) {
  //   btn.classList.add("blue");
  console.log(e.currentTarget); // curent target show what we just clicked

  e.currentTarget.classList.add("blue");
});

function someFunc(event) {
  event.preventDefault();
}

link.addEventListener("click", someFunc);
