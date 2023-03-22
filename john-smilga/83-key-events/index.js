// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is up

const nameInput = document.getElementById("name");

// nameInput.addEventListener("keypress", function () {
//   console.log("you pressed a key");
// });

// nameInput.addEventListener('keydown', function (){
//     console.log('key is down');
// })

nameInput.addEventListener("keyup", function () {
  console.log(nameInput.value); // give the value of keypressed
});
