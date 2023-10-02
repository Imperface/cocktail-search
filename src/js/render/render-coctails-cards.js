// написати функцію яка буде відмальовувати картки коктейлів. З файла user-screen-width-follower.js взяти кількість карток, які необхідно намалювати, відповідно до ширини екрану. В параметри функції буде приходити масив з об'єктами коктейлів та посилання на елемент в якому ці картки необхідно намалювати. Зробити іменований експорт цієї функції, для її перевикористання. у разі якщо довжина масиву більша за число карток, які можна намалювати, відповідно до ширини екрану, викликати функцію пагінації.Картки мають бути тегами li, тому що малюватись вони будуть в тезі ul
<<<<<<< Updated upstream
const cocktailsList = document.querySelector('.cocktails__list');
const learnMoreBtn = document.querySelectorAll('.learnmore__btn');
const svg = document.querySelectorAll('.cocktails__svg');
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
<use class="cocktails__svg add_favorites_js" href="img/sprite.svg#icon-heart"></use>
</svg>
</button>
</div> 
</li>
`)
.join('');
}



cocktailsList.addEventListener('click', changeEvents);


function changeEvents(event){
    const target = event.target;
    if (target.classList.contains('learnmore__btn')) {
    console.log("Open modal");

  } else if (target.classList.contains('svg__btn')) {
    addToFavorites(event);
    if(addToFavorites){
svg.classList.remove('.add_favorites_js');
svg.classList.add('.remove_favorites_js');
    }}
    
    return;
  }
// LOCAL STORAGE GET AND SAVE

function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites;
}
function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function addToFavorites(event) {
  const card = event.currentTarget.parentElement;
  const cocktailData = {
    id:card.querySelector('#id').textContent,
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


// FAVORITES COCKTAILS

const favorList = document.querySelector('.favor_list');

function renderFavorCocktailsList(favors) {
  const favors = getFavorites();

  if(!favors){
    console.log('not cocktailes')
  }

  favorList.innerHTML += favors.map(favor => `
  <li class="favor__item" id = ${favor.id}>
  <img class="favor__item__img" src=${favor.imageSrc} alt=${favor.name}>
  <h3 class="favor__item__header">${favor.name}</h3>
  <p class="favor__item__description">${favor.description}</p>
  <div class="favor__btn__container">
  <button type="button" class="learnmore__btn">learn more</button>
  <button type="button"  class="trash__btn"> 
   <svg class="svg-icon">
  <use class="cocktails__svg add_favorites_js" href="img/sprite.svg#icon-trash"></use>
  </svg>
  </button>
  </div> 
  </li>
  `)
  .join('');
  }

  favorList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('learnmore__btn')) {
      console.log("Open modal");
    } else if (target.classList.contains('trash__btn')) {
      removeFromFavor(event);
    }
  });  
  
  function removeFromFavor(event){
    const favorcard = event.currentTarget.parentElement;
    const favorCocktailData = {
      id:favorcard.querySelector('#id').textContent,
      name: favorcard.querySelector('.cocktails__item__header').textContent,
      description: favorcard.querySelector('.cocktails__item__description').textContent,
      imageSrc: favorcard.querySelector('.cocktails__item__img').src,
    };
    localStorage.removeItem(favorCocktailData);

    const favorites = getFavorites();

    saveFavorites(favorites); 
    renderFavorCocktailsList(favorites);
  }
  




=======
>>>>>>> Stashed changes
