import {sortPets} from "./components/petComponents.js"

  const sortEvents = () => {
  const dogsButton = document.getElementById('dog');
  const catsButton = document.getElementById('cat');
  const dinosButton = document.getElementById('dino');
  const allButton = document.getElementById('all');
  dogsButton.addEventListener('click', sortPets);
  catsButton.addEventListener('click', sortPets);
  dinosButton.addEventListener('click', sortPets);
  allButton.addEventListener('click', sortPets);
  };

  export{sortEvents}
  