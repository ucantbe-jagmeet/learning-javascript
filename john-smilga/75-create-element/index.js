// createElement('element');
// createTextNode('text context')
// element.appendChild(childElement);

const result = document.querySelector("#result");

//create empty element
const bodyDiv = document.createElement("div");

//create text node
const text = document.createTextNode(" a simple body div");

bodyDiv.appendChild(text);

document.body.appendChild(bodyDiv);

// pehle div create kiya createElement se phir uski value ko  bodyDiv mei store kiya
// phir ek text create kiya createTextNode ki help se
// Aur inn dono ko appendChild ki help se append kiya
// isse humara div aur uske andar text assign ho gya hai
// isko body se append kreinge appendChild ki help se

const heading = document.createElement("h2");
const headingText = document.createTextNode("Dynamic heading");

heading.appendChild(headingText);

heading.classList.add("blue");
result.appendChild(heading);
