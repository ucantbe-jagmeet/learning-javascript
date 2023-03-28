const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", async () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "Loading....";

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });

    if (!response.ok) {
      throw new Error(`There is an error`);
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "there was an error...";
  }
};

fetchDadJoke();
