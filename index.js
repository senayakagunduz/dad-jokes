const btnEl = document.querySelector("#btn");
const apiKey = "tLXCQmkdM5twFhQukUzyHA==MXaixEb7F5wBg1lR";
const jokeEl = document.querySelector("#joke");

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText="There is an error, please try again..."
  }
}
btnEl.addEventListener("click", getJoke);
