import {printToDom} from '../helpers/util.js';
import {petsBuilder} from '../petComponents.js';

// const closeButtonEvent = () => {
//   const closeButton = document.getElementById('close');
//   closeButton.addEventListener('click', () => {
//     charactersBuilder(getCharacterz());
//   });
// };

const detailsBuilder = (pet) => {
  let domString = '';
  domString += `<div class="col-6 offset-md-3">`;
  domString +=   `<div class="row">`;
  domString +=     `<button class="btn btn-danger" id="close">x</button>`;
  domString +=   `</div>`;
  domString +=   `<div class="row">`;
  domString +=      `<div class="col">`;
  domString +=         `<img src="${pet.imageUrl}" alt="${pet.name}"/>`;
  domString +=      `</div>`;
  domString +=      `<div class="col">`;
  domString +=        `<h1>${pet.name}</h1>`;
  domString +=        `<h3>${pet.type}</h3>`;
  domString +=        `<p>${pet.specialSkill}</p>`;
  domString +=        `<h3>${pet.color}</h3>`;
  domString +=      `</div>`;
  domString +=   `</div>`;
  domString += `</div>`;

  printToDom(domString);
};

export {detailsBuilder};