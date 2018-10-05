import {getPets} from './data/petData.js';
import {petsBuilder} from './components/petComponents.js';

const initializeApp = () => {
  petsBuilder;
  getPets()
};

initializeApp();