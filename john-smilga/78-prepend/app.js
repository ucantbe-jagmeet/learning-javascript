// prepend  -> place element after the body tag
// append -> place the element after the script tag
// innerText

const heading = document.createElement("h2");
heading.innerText = `i am a dynamic heading`;
document.body.prepend(heading);
