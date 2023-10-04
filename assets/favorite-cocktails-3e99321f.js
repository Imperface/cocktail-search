import"./theme-changer-9c4c9d15.js";cocktailsList.addEventListener("click",l);function l(t){const s=t.target;s.classList.contains("learnmore__btn")&&console.log("Open modal"),s.classList.contains("svg__btn")&&(d(t),svg.classList.remove("add_favorites_js"),svg.classList.add("remove_favorites_js"))}let e=_();console.log(e);function _(){return JSON.parse(localStorage.getItem("favorites"))||[]}function c(t){localStorage.setItem("favorites",JSON.stringify(t))}function d(t){const s=t.target.closest(".cocktails__item");if(s){const i={id:s.getAttribute("id"),name:s.querySelector(".cocktails__item__header").textContent,description:s.querySelector(".cocktails__item__description").textContent,imageSrc:s.querySelector(".cocktails__item__img").src};e.some(r=>r.id===i.id)||(e.push(i),c(e))}}const a=document.querySelector(".favor__list");function n(){a.innerHTML=e.map(t=>`
    <li class="favor__item" id=${t.id}>
      <img class="cocktails__item__img" src=${t.imageSrc} alt=${t.name}>
      <h3 class="cocktails__item__header">${t.name}</h3>
      <p class="cocktails__item__description">${t.description}</p>
      <div class="cocktails__btn__container">
        <button type="button" class="learnmore__btn">learn more</button>
        <button type="button" class="trash__btn">
          <svg class="svg-icon">
            <use class="cocktails__svg" href="img/sprite.svg#icon-trash"></use>
          </svg>
        </button>
      </div>
    </li>
  `).join("")}n();a.addEventListener("click",m);function m(t){const s=t.target;s.classList.contains("learnmore__btn")?console.log("Open modal"):s.classList.contains("trash__btn")&&g(t)}function g(t){const o=t.target.closest(".favor__item").getAttribute("id");e=e.filter(i=>i.id!==o),c(e),n()}
