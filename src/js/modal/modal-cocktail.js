// реалізувати відкриття та закриття модалки.  функцію відмалювання розмітки модального вікна коктеля, з файлів element-add-to-local-storage.js та element-remove-from-local-storage імпортувати функції для додавання та видалення елементів local storage для додавання та видалення з улюбленого

const cocktailsArr = document.querySelectorAll(".cocktails__item");
console.log(cocktailsArr)

function getModalCocktail() {
  firstReqAPIModal()

}

async function firstReqAPIModal(id) {
  try {
    let response = await axios.get(`${BASE_URL}/cocktails/lookup/?id=${id}`);
    return response.data;
  } catch {
    console.error(error.message);
  }
}