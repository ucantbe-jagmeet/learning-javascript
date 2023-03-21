// previoussibling
// nextSibling
// return whitespace

const first = document.querySelector(".first");
const second = first.nextSibling.nextSibling;
second.style.color = "red";

const last = document.querySelector("#last");
const secondLast = last.previousSibling.previousSibling;
secondLast.style.color = "blue";
