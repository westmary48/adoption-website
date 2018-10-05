import { printToDom } from "../helpers/util.js";
import {detailsBuilder} from "./details.js";

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
      domString += `<div class="col-2 pets-card" id="${pet.id}">`
      domString +=   `<div class="card">`;
      domString +=    `<img class="card-img-top" src="${pet.imageUrl}">`;
      domString +=    `<div class="card-body">`;
      domString +=      `<h5 class="card-title">${pet.name}</h5>`;
      domString +=   `<h6 class="card-color">${pet.color}</h6>`;
      domString +=  `<p class= card-skills">${pet.specialSkills}</p>`;
      domString +=  `<h6 class= card-type">${pet.type}</h6>`;
      domString +=    `</div>`;
      domString +=  `</div>`;
      domString +=`</div>`;
    };
    printToDom(domString);
    createEvents();
  };

  export {petsBuilder};