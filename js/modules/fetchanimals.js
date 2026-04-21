import AnimaNumbers from "./animanumbers.js";

export default function createAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number_animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }
  const numberGrid = document.querySelector(target);

  function insertAnimalData(animal) {
    const divAnimal = createAnimal(animal);
    numberGrid.appendChild(divAnimal);
  }

  function animationAnimalNumbers() {
    const animaNumbers = new AnimaNumbers("[data-number]", ".numbers", "on");
    animaNumbers.init();
  }

  async function fetchAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();
      animalsJson.forEach((animal) => insertAnimalData(animal));
      animationAnimalNumbers();
    } catch (err) {
      console.log(err);
    }
  }

  return fetchAnimals();
}
