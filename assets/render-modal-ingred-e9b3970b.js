(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n);function n(){e.modal.classList.toggle("is-hidden")}})();const g=document.querySelector(".dropbtn"),r=document.querySelector(".icon-chevron-down");g.addEventListener("click",f);function f(){document.getElementById("myDropdown").classList.toggle("show"),r.classList.toggle("rotate")}window.onclick=function(e){if(!e.target.matches(".dropbtn")){const n=document.getElementById("myDropdown");n.classList.contains("show")&&(n.classList.remove("show"),r.classList.toggle("rotate"))}};const d=[...document.querySelectorAll("#js-btn-change-theme")],u=[...document.querySelectorAll(".change-theme")];function p(e){localStorage.setItem("darkMode",e)}function h(){return localStorage.getItem("darkMode")==="true"}const i=h();u.forEach(e=>{e.classList.toggle("dark-mode",i)});i&&d.forEach(e=>{e.classList.add("clicked")});d.forEach(e=>{e.addEventListener("click",()=>{u.forEach(l=>{l.classList.toggle("dark-mode")}),p(!i),e.classList.toggle("clicked")})});const c="/cocktail-search/assets/rafiki_not-b2fc2580.png";document.querySelector(".noAll");function y(e){e.innerHTML=`<div class="no_res_cent">
  <img
    src="${c}"
    class="no_res_img"
    alt="no cocktails"
  />
  <p class="no_res_text">
    Sorry, we <span class="no_res_fc">didn't find</span> any <br />
    cocktail for you
  </p>
</div>`}document.querySelector(".no");function k(e){e.innerHTML=`
    <div class="no_result_container change-theme">
      <div class="no_result">
        <div class="no_result_center">
          <img src="${c}"
            class="no_result_img"
            alt="no cocktails"
          />
          <p class="no_result_text">
            You haven't added any<br /><span class="no_result_fc"
              >favorite cocktails</span
            >
            yet
          </p>
        </div>
      </div>
</div>`}function _(e){e.innerHTML=`<div class="no_result_container">
      <div class="no_result">
        <div class="no_result_center">
          <img src="${c}"
            class="no_result_img"
            alt="no Ingredients"
          />
          <p class="no_result_text">
            You haven't added any<br /><span class="no_result_fc"
              >favorite ingredients</span
            >
            yet
          </p>
        </div>
      </div>
</div>`}const v="/cocktail-search/assets/sprite-4a79d548.svg";function b(e){return e.map(({type:n,title:l,description:a,abv:t,country:o,flavour:s,alcohol:m})=>(t=t||"Not defined, so you will have to taste!",o=o||"There is no country of origin",s=s||"Not specified",`
           <button class="close-modal-cocktails js-close-btn" data-modal-close-ingr>
        <svg class="svg-close-modal-cocktails" width="22" height="22">
          <use href="${v}#icon-close"></use>
        </svg>
      </button>
      <h2 class="modal-ingredient-title">${l}</h2>
      <p class="modal-ingr-alco visually-hidden" data-alco = "${m}"></p>
      <p class="modal-ingredient-type">${n}</p>
      <span class="lin"></span>
      <p class="modal-ingredient-text"><span class="modal-ingredient-span-black">${l}</span>: ${a}</p>
      <ul class="modal-ingredient-list-properties">
        <li class="modal-ingredient-list-item" data-modal-ingr-type = "${n}">Type:${n}</li>
        <li class="modal-ingredient-list-item" data-modal-ingr-country = "${o}">Country of origin:${o}</li>
        <li class="modal-ingredient-list-item modal-ingred" data-modal-ingr-abv = "${t}">Alcohol by volume:${t}</li>
        <li class="modal-ingredient-list-item" data-modal-ingr-flav = "${s}">Flavour:${s}</li>
      </ul>
      <ul class="modal-ingredient-list-btn">
        <button name="ingredient-add" class="modal-button modal-ingredient-add">add to favorite</button>
        <button name="ingredient-back" class="modal-button js-close-btn-two modal-ingredient-back" data-modal-close>back</button>
      </ul>
          `)).join("")}export{_ as a,y as b,b as m,k as n,v as s};
