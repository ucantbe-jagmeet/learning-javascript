// previousElementSibling
// nextElementSibling
// no fear of white space

const first = document.querySelector(".first");
first.nextElementSibling.nextElementSibling.style.color = "red";

const last = document.querySelector("#last");
last.previousElementSibling.previousElementSibling.style.color = "blue";
