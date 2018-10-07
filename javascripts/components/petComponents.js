import { printToDom } from "../helpers/util.js";

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
  };
  
  const getPetz = () => {
    return pets;
  };

  const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'all'){
      petsBuilder(pets);
    } else if (type ==='dog') {
      const filteredDog = pets.filter(x => x.type === type);
      petsBuilder(filteredDog);
    } else if (type === 'cat') {
    const filteredCat = pets.filter(x => x.type === type);
    petsBuilder(filteredCat);
    } else if (type === 'dino') {
    const filteredDino = pets.filter(x => x.type === type);
    petsBuilder(filteredDino);
    }
};

  const petsBuilder = (petsArray) => {
    let domString = '';
    for (let i = 0; i < petsArray.length; i++) {  
      domString += `<div class = "card-container col-sm-4 card border-primary mb-2">`  
      domString += `<div class="card-header d-flex justify-content-center bg-transparent border-success pets-card">${petsArray[i].name}</div>`;
      domString +=   `<div class="card">`;
      domString +=    `<img class="card-img-top d-flex justify-content-center" src="${petsArray[i].imageUrl}">`;
      domString +=    `<div class="card-body d-flex flex-column">`;
      domString +=   `<h6 class="card-color d-flex justify-content-center">${petsArray[i].color}</h6>`;
      domString +=  `<p class= card-skills justify-content-center">${petsArray[i].specialSkill}</p>`;
      domString +=    `</div>`;
      domString +=  `</div>`;
      domString += `<div class = card-footer d-flex flex-column>`
      domString +=  `<h6 class= "card-type p-3 mb-2 bg-primary text-black">${petsArray[i].type}</h6>`;
      domString +=`</div>`;
      domString += `</div>`;
      domString += `</div>`;
    };

    printToDom(domString,'pets');
  };

  export {petsBuilder, getPetz, setPets, sortPets};

