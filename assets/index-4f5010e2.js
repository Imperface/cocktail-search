import{b as I}from"./render-element-not-found-67e7495d.js";import{g as m,s as g,a as B,c as p,b as A,d as b,e as M}from"./favor-cockt-22033894.js";const h=document.querySelector(".container-letters"),R="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",q=R.split("");let f;addEventListener("resize",E);function E(){document.documentElement.clientWidth>=768?f||w():f!==!1&&x()}function w(){const t=q.map(e=>`<button class="buton-letters">${e}</button>`);h.innerHTML=t.join(""),f=!0}function x(){const t=document.createElement("select");t.classList.add("letters-select");const e=q.map(o=>`<option value="${o}">${o}</option>;`);t.insertAdjacentHTML("beforeend",e.join("")),h.innerHTML="",h.appendChild(t),f=!1}E();const N=document.querySelector(".cocktails__list");N.addEventListener("click",U);const r=document.querySelector(".modal-button-favorite");function F(t){const e=document.querySelector(".js-modal-cocktails-item"),o=e.getAttribute("id"),s=document.querySelector(`[data-cocktId = "${o}"]`);if(p(o,"modalCocktail")){r.textContent="Remove from favorite";let n=m();n=n.filter(d=>d.id!==o),g(n),s.classList.add("add_favorites_js"),s.classList.remove("remove_favorites_js"),r.textContent="Add to favorite";return}else{r.textContent="Add to favorite",m();const n=e;if(n){const v={id:n.getAttribute("id"),name:n.querySelector(".modal-cocktails-card-title").textContent,description:n.querySelector(".modal-cocktail-item-description").textContent,imageSrc:n.querySelector(".modal-cocktails-img").src};let a=m();a.some(i=>i.id===v.id)||(a.push(v),g(a))}s.classList.remove("add_favorites_js"),s.classList.add("remove_favorites_js"),r.textContent="Remove from favorite";return}}function U(t){const e=t.target;if(e.classList.contains("learnmore__btn")&&r.addEventListener("click",F),!!e.classList.contains("svg__btn")){if(e.classList.contains("remove_favorites_js")){e.classList.add("add_favorites_js"),e.classList.remove("remove_favorites_js");const s=e.closest(".cocktails__item").getAttribute("id");let c=m();c=c.filter(n=>n.id!==s),g(c);return}B(t),e.classList.remove("add_favorites_js"),e.classList.add("remove_favorites_js")}}function k(t,e){e.innerHTML=t.map(o=>`
<li class="cocktails__item change-theme" id = ${o._id}>
<img class="cocktails__item__img" loading="lazy" src=${o.drinkThumb} alt=${o.drink}>
<h3 class="cocktails__item__header">${o.drink}</h3>
<p class="cocktails__item__description">${o.description}</p>
<div class="cocktails__btn__container">
<button type="button" class="learnmore__btn"  data-modal-open="modal-cocktails" data-id="${o._id}">learn more</button>
<button type="button" data-cocktId = "${o._id}"  class="svg__btn  ${p(o._id,"favorites")}"> 
 <svg class="svg-heart">
<use class="cocktails__svg add_favorites_js" href="${A}#icon-heart"></use>
</svg>
</button>
</div> 
</li>
`).join("")}const H="https://drinkify.b.goit.study/api/v1";function L(){return document.documentElement.clientWidth>1280?9:8}function P(){if(document.documentElement.clientWidth)return W(L()).then(e=>{const o=document.querySelector(".cocktails__list");k(e,o)}).catch(e=>{console.error(e.message)})}P();async function W(t){try{return(await b.get(`${H}/cocktails/?r=${t}`)).data}catch{console.error(error.message)}}const D=document.querySelector(".cocktails__list");function y(t){return fetch(`https://drinkify.b.goit.study/api/v1/cocktails/search/?${t}`).then(e=>{if(!e.ok)throw new Error(e);return e.json()}).catch(()=>{document.querySelector(".search__title").classList.add("visually-hidden"),I(D)})}const O="https://drinkify.b.goit.study/api/v1",z=document.querySelectorAll("[data-modal-close]"),G=document.querySelector(".cocktails__list");function V(t){function e(o){if(o.target.nodeName!=="BUTTON"||!o.target.dataset.id)return;const s=o.target.dataset.modalOpen,c=o.target.dataset.id,n=document.getElementById(s);J(n,c)}t.addEventListener("click",e)}V(G);z.forEach(t=>{t.addEventListener("click",()=>{const e=t.closest("[data-modal]");K(e)})});function J(t,e){t.classList.remove("is-hidden"),Q(e)}function K(t){t.classList.add("is-hidden")}async function Q(t){return X(t).then(e=>{const o=document.querySelector(".js-modal-cocktails");Y(e,o),document.querySelector(".list-cocktail-ingredients").addEventListener("click",M)}).catch(e=>{console.error(e.message)})}async function X(t){try{return(await b.get(`${O}/cocktails/lookup/?id=${t}`)).data}catch{console.error(error.message)}}function Y(t,e){const o=[],s=[];t[0].ingredients.forEach(i=>{i.measure===void 0&&(i.measure=""),o.push(i.measure+" "+i.title),s.push(i.ingredientId)}),e.innerHTML=t.map(i=>`
        <li class="js-modal-cocktails-item" id="${i._id}">
        <ul class="modal-cocktails-card-part-1 list">
          <li class="modal-cocktails-card-item">
            <div class="modal-cocktails-img-wrapper">
              <img
                class="modal-cocktails-img"
                src="${i.drinkThumb}"
                alt="${i.drink}"
                loading="lazy"
              />
            </div>
          </li>
          <li class="modal-cocktails-card-item">
            <h2 class="modal-cocktails-card-title">${i.drink}</h2>
            <h2 class="modal-cocktails-info-part-title">INGREDIENTS:</h2>
            <p class="visually-hidden modal-cocktail-item-description">${i.description}</p>
            <p class="modal-cocktails-info-part-undotitle">Per cocktail</p>
            <ul class="modal-cocktails-info-part-1-list list-cocktail-ingredients">
            </ul>
          </li>
        </ul>
        <div class="modal-cocktails-card-part-2">
          <h2 class="modal-cocktails-info-part-title">INSTRUCTIONS:</h2>
          <p class="modal-cocktails-info-part-2-text">${i.instructions}</p>
        </div>
        </li>
      `).join("");const c=document.querySelector(".modal-button-favorite"),d=document.querySelector(".js-modal-cocktails-item").getAttribute("id");p(d,"modalCocktail")?c.textContent="Remove from favorite":c.textContent="Add to favorite";const a=document.querySelector(".modal-cocktails-info-part-1-list");for(let i=0;i<o.length;i++)a.insertAdjacentHTML("afterbegin",`<li class="list-cocktail-ingredients-item" id=${s[i]}>${o[i]}</li>`)}const _=L(),T=document.querySelector(".cocktails__list");let l=[];function Z(t,e,o){let s=1;for(l=[],s=0;s<Math.ceil(t.length/_);s+=1){const c=t.slice(s*_,(s+1)*_);l.push(c)}console.log("Малюємо першу сторінку"),k(l[0],T),et(l,e)}function tt(t){t.target.nodeName==="BUTTON"&&(k(l[t.target.textContent-1],T),console.log(`Малюємо ${t.target.textContent} сторінку`))}function et(t,e,o){let s=[];for(let c=0;c<=t.length-1;c+=1)s.push(`<button class="js-pagination-btn" type="button" id="js-pagination-btn">${c+1}</button>`);e.innerHTML=s.join(""),e.addEventListener("click",tt)}const ot=document.querySelector(".search-form"),S=document.querySelector(".search-input"),j=document.querySelector(".container-letters"),st=document.querySelector(".cocktails__list"),u=document.querySelector("#pagination-elements"),it=document.querySelector(".search__title"),$=L();j.addEventListener("click",nt);j.addEventListener("change",at);ot.addEventListener("submit",ct);async function C(t){t&&(t.length>$?(it.innerHTML="Searching results",u.classList.remove("visually-hidden"),console.log("Викликаємо пагінатор"),Z(t,u)):t.length<=$&&(u.classList.add("visually-hidden"),u.innerHTML="",k(t,st)))}async function ct(t){t.preventDefault();const e=S.value.trim();if(S.value="",e){const o=await y(`s=${e}`);C(o)}}async function nt(t){if(t.target.tagName==="BUTTON"){const e=await y(`f=${t.target.innerText}`);C(e)}}async function at(t){if(t.target.tagName==="SELECT"){const e=await y(`f=${t.target.value}`);C(e)}}
