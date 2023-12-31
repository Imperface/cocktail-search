import { getFavorites } from './favor-cockt';

export function checkElemInLocStor(elementId, elementType) {
  if (elementType === 'favorites') {
    const isFoundEl = getFavorites().find(e => e.id === elementId);
    return isFoundEl ? 'remove_favorites_js' : 'add_favorites_js';
  } else if (elementType === 'modalCocktail') {
    const isFoundEl = getFavorites().find(e => e.id === elementId);
    return isFoundEl ? true : false;
  } else if (elementType === 'favorIngred') {
    const dataLocalFav = JSON.parse(localStorage.getItem('basket')) || [];
    if (dataLocalFav) {
      const isFoundEl = dataLocalFav.find(e => e.id === elementId);
      return isFoundEl ? true : false;
    }
  }
}
//       console.log(e.id);
// console.log(elementId);
