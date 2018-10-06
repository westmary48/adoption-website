import { printToDom } from "../helpers/util.js";

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
  };
  
  const getPetz = () => {
    return pets;
  };

  const petsBuilder = (petsArray) => {
    let domString = '';
    for (let i = 0; i < petsArray.length; i++) {
      domString += `<div class="col-2 pets-card" id="${pets[i].id}">`
      domString +=   `<div class="card">`;
      domString +=    `<img class="card-img-top" src="${pets[i].imageUrl}">`;
      domString +=    `<div class="card-body">`;
      domString +=      `<h5 class="card-title">${pets[i].name}</h5>`;
      domString +=   `<h6 class="card-color">${pets[i].color}</h6>`;
      domString +=  `<p class= card-skills">${pets[i].specialSkill}</p>`;
      domString +=  `<h6 class= card-type">${pets[i].type}</h6>`;
      domString +=    `</div>`;
      domString +=  `</div>`;
      domString +=`</div>`;
    };
    printToDom(domString,'pets');
    createEvents();
  };

  export {petsBuilder, getPetz, setPets};