// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection
// it also gives array like list
// getElementsByClassName('classname');

// HTMLCollection

const listItems = document.getElementsByClassName("special");
listItems[2].style.color = "blue";
console.log(listItems);
