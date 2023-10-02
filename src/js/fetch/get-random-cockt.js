// реалізувати запит на сервер за рандомними коктейлями. Викликати функцію з файлу render-coctails-card.js та передати туди масив та контейнер

import axios from 'axios';
import { renderCocktailsList } from '../render/render-coctails-cards';
import { renderCocktailsListModal } from '../render/render-coctails-cards'

const BASE_URL = 'https://drinkify.b.goit.study/api/v1';

export function renderingCardDependency() {
  let widthWindowUser = document.documentElement.clientWidth;
  let requestCards = widthWindowUser > 1280 ? 9 : 8;
  return requestCards;
}

function getRequestRandomCocktails() {
  // ? вираховуємо ширину в*юпорта користувача
  let widthWindowUser = document.documentElement.clientWidth;
  if (widthWindowUser) {
    return firstReqAPI(renderingCardDependency())
      .then(data => {
        const cocktailsList = document.querySelector('.cocktails__list');
        const cocktailsModal = document.querySelector('.js-modal-cocktails');//Modal TEST
        renderCocktailsList(data, cocktailsList);
        renderCocktailsListModal(data, cocktailsModal);
        //Modal TEST
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}

getRequestRandomCocktails();

// const arrayRandomCocktails = await getRequestRandomCocktails();

async function firstReqAPI(param) {
  try {
    let response = await axios.get(`${BASE_URL}/cocktails/?r=${param}`);
    return response.data;
  } catch {
    console.error(error.message);
  }
}


