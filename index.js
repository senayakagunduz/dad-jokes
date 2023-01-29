const btnEl = document.querySelector("#btn");
const apiKey = "tLXCQmkdM5twFhQukUzyHA==MXaixEb7F5wBg1lR";
const jokeEl=document.querySelector("#joke")

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  jokeEl.innerText=data[0].joke;
}
btnEl.addEventListener("click", getJoke);
