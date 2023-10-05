//реалізувати відмалювання букв для пошуку по першій літері
import SlimSelect from 'slim-select';
import getCocktailsBySearch from '../fetch/get-cocktails-by-search';
import { renderCocktailsList } from './render-coctails-cards';
import { isPaginationRequired } from '../init-search';

const lettersContainer = document.querySelector('.container-letters');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const arrayLetters = letters.split('');
let isButtons;
const cocktailsList = document.querySelector('.cocktails__list');

addEventListener('resize', renderSearchLetters);

function renderSearchLetters() {
  const isDesktop = document.documentElement.clientWidth >= 768;

  if (isDesktop) {
    if (!isButtons) renderButtons();
  } else {
    if (isButtons !== false) renderSelect();
  }
}

function renderButtons() {
  const arrayBtnLetters = arrayLetters.map(letter => {
    return `<button class="buton-letters">${letter}</button>`;
  });

  lettersContainer.innerHTML = arrayBtnLetters.join('');
  isButtons = true;
}

function renderSelect() {
  const selectLetters = document.createElement('select');
  selectLetters.classList.add('letters-select');

  const options = arrayLetters.map(letter => {
    return `<option value="${letter}">${letter}</option>`;
  });
  const optionsWithPlaceholder = [
    '<option data-placeholder="true"></option>',
    ...options,
  ];
  selectLetters.insertAdjacentHTML(
    'beforeend',
    optionsWithPlaceholder.join('')
  );
  lettersContainer.innerHTML = '';
  lettersContainer.appendChild(selectLetters);

  new SlimSelect({
    select: selectLetters,
    settings: {
      showSearch: false,
      openPosition: 'down',
      placeholderText: 'A',
    },
    events: {
      beforeChange: async ([newVal]) => {
        const data = await getCocktailsBySearch(`f=${newVal.value}`);
        renderCocktailsList(data, cocktailsList);
        isPaginationRequired(data);
      },
    },
  });

  isButtons = false;
}

renderSearchLetters();
