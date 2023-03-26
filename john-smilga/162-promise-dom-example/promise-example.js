// callbacks, promises, async/ await
// promises - Pending, Resolved, Rejected
// then catch - pass another callback

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  // let value = true;
  let value = false;
  if (value) {
    // resolve(`Hey value is true`);
    resolve([3, 4, 5]);
  } else {
    reject(`There was an error, value is false`);
  }
});
console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
