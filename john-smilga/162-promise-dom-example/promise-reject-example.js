// callbacks, promises, async/ await
// promises - Pending, Resolved, Rejected
// then catch - pass another callback

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");
const container = document.querySelector(".img-container");
const url = "https://source.unsplash.com/random";

btn.addEventListener("click", () => {
  console.log(loadImage(url));
  loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`failed to load image from source`));
    });

    img.src = url;
  });
}
