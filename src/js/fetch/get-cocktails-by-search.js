// реалізувати запит на сервер. З файлу search-query треба імпортувати рядок для пошукового запиту. Зробити іменований експорт масиву з об'єктами коктейлів, відповідно до пошукового запиту



// import {renderCocktailsList} from '../render/render-coctails-cards';
// EXPORT
function renderingCardDependency() {
    let widthWindowUser = document.documentElement.clientWidth;
    let requestCards = (widthWindowUser > 1280) ? 9 : 8;
    return requestCards
};


let query ='';

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/cocktails/search/';

function fetchImage() {
if(query.length===1){
    return fetch(`${BASE_URL}?f=${query}`)
    .then(response => {
      return response.json(); 
    })
}
    return fetch(`${BASE_URL}?s=${query}`)
      .then(response => {
        return response.json(); 
      })
      .catch(error => {
        throw new Error;
      });
  }
    
const searchForm = document.querySelector('.search__form');
const cocktailsList = document.querySelector('.cocktails__list');
const titleRemove = document.querySelector('.search__title');

titleRemove.style.display = 'none';


searchForm.addEventListener('submit', createImgCards);

async function createImgCards(event) {
event.preventDefault();
query = event.currentTarget.elements.query.value.trim();

clearCocktailsList();

try {
const data = await fetchImage();
data.length = renderingCardDependency();
titleRemove.style.display = 'block';
renderCocktailsList(data);

if(data.length > renderingCardDependency()){
    console.log(data.length)
}

}
catch (error) {
console.log(error.message);
}
}

function renderCocktailsList(images) {
cocktailsList.innerHTML += images.map(image => `
<li class="cocktails__item">
<img class="cocktails__item__img" src=${image.drinkThumb} alt=${image.drink}>
<h3 class="cocktails__item__header">${image.drink}</h3>
<p class="cocktails__item__description">${image.description}</p>
<div class="cocktails__item__btn">
<button type="button" class="learnmore__btn">learn more</button>
<button type="button"  class="svg__btn">
  <svg class="svg-heart">
      <use class="cocktails__svg" href="./img/sprite.svg#icon-heart"></use>
  </svg>
</button>
</div>   
</li>`)
.join('')
}

function clearCocktailsList(){
cocktailsList.innerHTML = '';
}

