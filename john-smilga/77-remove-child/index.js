// remove --> we have to select direct element
// removeChild --> we have to select parent/heading to remove its child

const result = document.querySelector("#result");
// result.remove();

const heading = result.querySelector("h1");
// result.removeChild(heading);
console.log(heading);
