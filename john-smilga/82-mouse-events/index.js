// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - mouse onto the element
// mouseleave - moved out of an element
// mouseover - mouse is over an element

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("you clicked me");
});

btn.addEventListener("mousedown", function () {
  console.log("you just pressed");
});

btn.addEventListener("mouseup", function () {
  console.log("you just released");
});

btn.addEventListener("mouseenter", function () {
  console.log("you just entered");
});

btn.addEventListener("mouseleave", function () {
  console.log("you just leaved");
});

btn.addEventListener("mouseover", function () {
  console.log("you are over the button");
});
