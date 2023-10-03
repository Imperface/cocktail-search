export function markupModalIngredients(objParam) {
  return objParam
    .map(({ type, title, description, abv, country, flavour }) => {
      abv = abv || 'Not defined, so you will have to taste!';
      country = country || 'There is no country of origin';
      flavour = flavour || 'Not specified';
      return `
           <button class="close-modal-cocktails js-close-btn" data-modal-close-ingr>
        <svg class="svg-close-modal-cocktails" width="22" height="22">
          <use href="/img/sprite.svg#icon-close"></use>
        </svg>
      </button>
      <h2 class="modal-ingredient-title">${title}</h2>
      <p class="modal-ingredient-type">${type}</p>
      <span class="lin"></span>
      <p class="modal-ingredient-text"><span class="modal-ingredient-span-black">${title}</span>: ${description}</p>
      <ul class="modal-ingredient-list-properties">
        <li class="modal-ingredient-list-item">Type:${type}</li>
        <li class="modal-ingredient-list-item">Country of origin:${country}</li>
        <li class="modal-ingredient-list-item">Alcohol by volume:${abv}</li>
        <li class="modal-ingredient-list-item">Flavour:${flavour}</li>
      </ul>
      <ul class="modal-ingredient-list-btn">
        <button name="ingredient-add" class="modal-button modal-ingredient-add">add to favorite</button>
        <button name="ingredient-back" class="modal-button js-close-btn-two modal-ingredient-back" data-modal-close>back</button>
      </ul>
          `;
    })
    .join('');
}