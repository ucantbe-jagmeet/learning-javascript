// Arrow Functions or Fat Arrow Functions
// regular function : 'this' refers parent, left of the dot
// arrow function : refers to it's current surrounding scope

// arrow function behave different in selecting elements by arrow function

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log(this);
  // this.style.color = "black";

  setTimeout(() => {
    this.style.color = "black";
  }, 2000);
});
