// innerHTML
// textContent

const list = document.getElementById('first')
const div = document.getElementById('second')
const item = document.querySelector('.item')

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVal= "Random value";


const ul = document.createElement('ul')
ul.innerHTML = ` <li class="item" >${randomVal}</li>
<li>List Item</li>
<li>List Item</li>`

document.body.appendChild(ul);