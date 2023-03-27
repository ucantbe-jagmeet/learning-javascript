// Fetch is built in
// promised based
// XHR is not wrong , you can complete all our upcoming examples and projects usings XHR. Fetch is just alternative approach that has simpler and cleaner syntax. the end result is the same . Still get dynamically, behind the scenes

const url = "./api/people.json";

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data);
});

function displayData(data) {
  const displayData = data
    .map((item) => {
      return `<p>${item.name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
}
