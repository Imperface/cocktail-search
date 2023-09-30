// написати функцію яка буде відмальовувати картки коктейлів. З файла user-screen-width-follower.js взяти кількість карток, які необхідно намалювати, відповідно до ширини екрану. В параметри функції буде приходити масив з об'єктами коктейлів та посилання на елемент в якому ці картки необхідно намалювати. Зробити іменований експорт цієї функції, для її перевикористання. у разі якщо довжина масиву більша за число карток, які можна намалювати, відповідно до ширини екрану, викликати функцію пагінації.Картки мають бути тегами li, тому що малюватись вони будуть в тезі ul


export function renderCocktailsList(images)
 {
    cocktailsList.innerHTML += images.map(image => `
    <li class="cocktails__item">
    <img class="cocktails__item__img" src=${image.drinkThumb} alt=${image.drink}>
    <h3 class="cocktails__item__header">${image.drink}</h3>
    <p class="cocktails__item__description">${image.description}</p>
    <div class="cocktails__item__btn">
    <button type="button" class="learnmore__btn">learn more</button>
    <button type="button"  class="svg__btn">
      <svg class="svg-heart">
          <use class="cocktails__svg addFavorites_js" href="./img/sprite.svg#icon-heart"></use>
      </svg>
    </button>
    </div>   
    </li>`)
    .join('')
    }
    