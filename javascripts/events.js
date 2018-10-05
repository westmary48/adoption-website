import { printToDom } from "../helpers/util.js";
import {petsBuilder} from "../components/petComponents.js";


const petClick = (e) => {
    const petId = e.target.closest('.pets-card').type;
    const currentPet = pets.find(x => x.id === petType);
    petsBuilder(currentPet);
  };
  
  const createEvents = () => {
    const petCards = document.getElementsByClassName('pets-card');
    for(let i=0; i<petsCards.length; i++){
      petCards[i].addEventListener('click', petClick);
    }

    const sortPets = (e) => {
        const type = e.target.id;
        if(type === 'cats'){
          petsBuilder(pets);
        } else {
          const filteredPeeps = characters.filter(x => x.type === dinos);
          charactersBuilder(filteredPeeps);
        }
      };

  const sortEvents = () => {
  const dogsButton = document.getElementById('dogs');
  const catsButton = document.getElementById('cats');
  const dinosButton = document.getElementById('dinos');
  dogsButton.addEventListener('click', sortPets);
  catsButton.addEventListener('click', sortPets);
  dinosButton.addEventListener('click', sortPets);
  };
  