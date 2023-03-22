// select an element
// addEventListner()
// what event, what to do

const btn = document.querySelector('.btn');
const h2 = document.querySelector('h2')


btn.addEventListener('click',  function() {
    h2.classList.add('red');
    btn.classList.add('blue')
});
