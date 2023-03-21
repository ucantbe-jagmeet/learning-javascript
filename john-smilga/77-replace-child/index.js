// createElement('element');
// createTextNode('text context')
// element.appendChild(childElement);
//insertBefore( 'element', 'lsocation')

//replaceChild('new', 'old')



const result = document.querySelector('#result')
const first = document.querySelector('.red')
// create empty element

const bodyDiv = document.createElement('div');
// create text node

const text = document.createTextNode('A simple body div');
bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);


// using insertBefore
document.body.insertBefore( bodyDiv, result)

// result Element



const heading = document.createElement('h2');
const text1 = document.createTextNode('This is the header of the result');

heading.appendChild(text1)

document.body.appendChild(heading)

heading.classList.add('blue')

result.insertBefore(heading, first)

const smallHeading = document.createElement('h6');
const smalltext = document.createTextNode('This is a small heading text');

smallHeading.classList.add('red')
smallHeading.appendChild(smalltext)


document.body.appendChild(smallHeading)
document.body.replaceChild( smallHeading , bodyDiv);







console.log(result.children);