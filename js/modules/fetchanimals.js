import innitAnimaNumbers from "./animanumbers.js";

export default function innitFetchAnimals() {
  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();
      const numberGrid = document.querySelector(".numbers_grid");
      animalsJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numberGrid.appendChild(divAnimal);
      });
      innitAnimaNumbers();
    } catch (err) {
      console.log(err);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number_animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  fetchAnimals("./animalsapi.json");
}
