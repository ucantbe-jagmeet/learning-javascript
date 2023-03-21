// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector("#result");
result.style.backgroundColor = "#379498";

const item = document.querySelector(".special");
// console.log(item);

const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);

const list = document.querySelectorAll(".special");

list.forEach(function (item) {
  console.log(item);
  item.style.color = "white";
});
