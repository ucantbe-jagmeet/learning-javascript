// node value
// textcontent

const item = document.getElementById('special');
const value = item.nodeValue;
const easyValue = item.textContent;


// console.log(value);
// console.log(item.firstChild.nodeValue); ---> nodeValue returns the node list and when we apply first child it will given the first element of node list
console.log(easyValue); // textvalue return same value but easy way