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
      const filteredDog = pets.filter(x => x.type === dog);
      petsBuilder(filteredDog);
      console.log('hi');
    } else if (type === 'cat') {
    const filteredCat = pets.filter(x => x.type === cat);
    petsBuilder(filteredCat);
    console.log('helloooo');
    } else if (type === 'dino') {
    const filteredDino = pets.filter(x => x.type === dino);
    petsBuilder(filteredDino);
    console.log('heyyaaa');
    }
};

  const petsBuilder = (petsArray) => {
    let domString = '';
    for (let i = 0; i < petsArray.length; i++) {  
      domString += `<div class="col-1 pets-card">${petsArray[i].name}</div>`;
      domString +=   `<div class="card">`;
      domString +=    `<img class="card-img-top" src="${petsArray[i].imageUrl}">`;
      domString +=    `<div class="card-body">`;
      domString +=   `<h6 class="card-color">${petsArray[i].color}</h6>`;
      domString +=  `<p class= card-skills">${petsArray[i].specialSkill}</p>`;
      domString +=  `<h6 class= card-type">${petsArray[i].type}</h6>`;
      domString +=    `</div>`;
      domString +=  `</div>`;
      domString +=`</div>`;
    };

    printToDom(domString,'pets');
  };

  export {petsBuilder, getPetz, setPets, sortPets};

