// реалізувати запит на сервер. З файлу search-query треба імпортувати рядок для пошукового запиту. Зробити іменований експорт масиву з об'єктами коктейлів, відповідно до пошукового запиту


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
const learnMoreBtn = document.querySelector('.learnmore__btn');
const svgBtn = document.querySelector('.svg__btn');

const itemBtnContainer = document.querySelectorAll('.cocktails__btn__container');

titleRemove.style.display = 'none';


searchForm.addEventListener('submit', createImgCards);

if (itemBtnContainer) {
  itemBtnContainer.forEach(button => {
  button.addEventListener('click', changeEvents);
})};

async function createImgCards(event) {
event.preventDefault();
query = event.currentTarget.elements.query.value.trim();

clearCocktailsList();

try {
const data = await fetchImage();
data.length = renderingCardDependency();
titleRemove.style.display = 'block';
renderCocktailsList(data);
}
catch (error) {
console.log(error.message);
}
}

function renderCocktailsList(images) {
cocktailsList.innerHTML += images.map(image => `
<li class="cocktails__item" id = ${image._id}>
<img class="cocktails__item__img" src=${image.drinkThumb} alt=${image.drink}>
<h3 class="cocktails__item__header">${image.drink}</h3>
<p class="cocktails__item__description">${image.description}</p>
<div class="cocktails__btn__container">
<button type="button" class="learnmore__btn">learn more</button>
<button type="button"  class="svg__btn"> 
 <svg class="svg-heart">
<use class="cocktails__svg addFavorites_js" href="./img/sprite.svg#icon-heart"></use>
</svg>
</button>
</div> 
</li>
`)
.join('');

}
function renderingCardDependency() {
  let widthWindowUser = document.documentElement.clientWidth;
  let requestCards = (widthWindowUser > 1280) ? 9 : 8;
  return requestCards
};


function clearCocktailsList(){
cocktailsList.innerHTML = '';
}

function changeEvents(event){
    const target = event.target;
    if (target.classList.contains('learnmore__btn')) {
    console.log("Open modal");

  } else if (target.classList.contains('svg__btn')) {
    addToFavorites();
    console.log("Add to favorites");
  }}

function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites;
}
function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function addToFavorites(event) {
  const card = event.target.parentElement;
  const cocktailData = {
    name: card.querySelector('.cocktails__item__header').textContent,
    description: card.querySelector('.cocktails__item__description').textContent,
    imageSrc: card.querySelector('.cocktails__item__img').src,
  };

  const favorites = getFavorites();

  if (!favorites.includes(cocktailData)) {
      favorites.push(cocktailData);
  }
  saveFavorites(favorites);
}



