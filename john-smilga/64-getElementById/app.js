// manupulating DOM by javascript

// document.body.style.backgroundColor = "yellow";
// document.body.style.color = "red";
// document.getElementById("btn").style.backgroundColor = "red";
// console.log(window);

document.querySelector("element"); // do something

// assign to a variable
// const element = document.getElementById("element");
// do something

// -----------------window Object------------------
// console.log(window);
// window object = browser api
// returns a node object or a node list, which is an array like object

// const btn = document.getElementById("btn");
// const name = btn.nodeName;
// const css = btn.style;

// console.log(btn);
// console.log(name);
// console.log(css);

//-----------------window Object------------------
// window object = browser api
// console.dir

// console.log(window);

// alert('hello');
// console.log(document);
// console.log(d);   --> javascript will not find that particular property or object , it will always find that object in window class

// console.log(document); --> it returns the object in its string representation

// console.dir(document); //  --> it recognise the object as an object and outputs its properties

// ----------------------------------------------------------

/*

- getElementById
- Select the Element or group of elements that we want , Decide the effect we  want to apply to the selection
*/

const h1 = document.getElementById("title");
h1.style.color = "green";
h1.style.fontFamily = "monospace";

const btn1 = document.getElementById("btn");
btn1.style.borderRadius = "12px";
btn1.style.padding = "5px 20px";
btn1.style.fontSize = "22px";

// similary getElementByTagName is used to select element by its tag name i.e. h1  h2  button etc
