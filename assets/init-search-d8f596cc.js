import{g,s as y,a as w,c as k,b as I,d as L,n as R}from"./favor-cockt-1acda56b.js";const _=document.querySelector(".container-letters"),N="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",E=N.split("");let f;addEventListener("resize",A);function A(){document.documentElement.clientWidth>=768?f||x():f!==!1&&F()}function x(){const e=E.map(t=>`<button class="buton-letters">${t}</button>`);_.innerHTML=e.join(""),f=!0}function F(){const e=document.createElement("select");e.classList.add("letters-select");const t=E.map(o=>`<option value="${o}">${o}</option>;`);e.insertAdjacentHTML("beforeend",t.join("")),_.innerHTML="",_.appendChild(e),f=!1}A();const U=document.querySelector(".cocktails__list");U.addEventListener("click",O);const d=document.querySelector(".modal-button-favorite");function H(e){const t=document.querySelector(".js-modal-cocktails-item"),o=t.getAttribute("id"),n=document.querySelector(`[data-cocktId = "${o}"]`);if(k(o,"modalCocktail")){d.textContent="Remove from favorite";let a=g();a=a.filter(c=>c.id!==o),y(a),n.classList.add("add_favorites_js"),n.classList.remove("remove_favorites_js"),d.textContent="Add to favorite";return}else{d.textContent="Add to favorite",g();const a=t;if(a){const l={id:a.getAttribute("id"),name:a.querySelector(".modal-cocktails-card-title").textContent,description:a.querySelector(".modal-cocktail-item-description").textContent,imageSrc:a.querySelector(".modal-cocktails-img").src};let r=g();r.some(s=>s.id===l.id)||(r.push(l),y(r))}n.classList.remove("add_favorites_js"),n.classList.add("remove_favorites_js"),d.textContent="Remove from favorite";return}}function O(e){const t=e.target;if(t.classList.contains("learnmore__btn")&&d.addEventListener("click",H),!!t.classList.contains("svg__btn")){if(t.classList.contains("remove_favorites_js")){t.classList.add("add_favorites_js"),t.classList.remove("remove_favorites_js");const n=t.closest(".cocktails__item").getAttribute("id");let i=g();i=i.filter(a=>a.id!==n),y(i);return}w(e),t.classList.remove("add_favorites_js"),t.classList.add("remove_favorites_js")}}function v(e,t){t.innerHTML=e.map(o=>`
<li class="cocktails__item change-theme" id = ${o._id}>
<img class="cocktails__item__img" loading="lazy" src=${o.drinkThumb} alt=${o.drink}>
<h3 class="cocktails__item__header">${o.drink}</h3>
<p class="cocktails__item__description">${o.description}</p>
<div class="cocktails__btn__container">
<button type="button" class="learnmore__btn"  data-modal-open="modal-cocktails" data-id="${o._id}">learn more</button>
<button type="button" data-cocktId = "${o._id}"  class="svg__btn  ${k(o._id,"favorites")}"> 
 <svg class="svg-heart">
<use class="cocktails__svg add_favorites_js" href="${I}#icon-heart"></use>
</svg>
</button>
</div> 
</li>
`).join("")}const P="https://drinkify.b.goit.study/api/v1";function b(){return document.documentElement.clientWidth>1280?9:8}function D(){if(document.documentElement.clientWidth)return W(b()).then(t=>{const o=document.querySelector(".cocktails__list");v(t,o)}).catch(t=>{console.error(t.message)})}D();async function W(e){try{return(await L.get(`${P}/cocktails/?r=${e}`)).data}catch{console.error(error.message)}}const J=document.querySelector(".cocktails__list");function S(e){return fetch(`https://drinkify.b.goit.study/api/v1/cocktails/search/?${e}`).then(t=>{if(!t.ok)throw new Error(t);return t.json()}).catch(()=>{document.querySelector(".search__title").classList.add("visually-hidden"),R(J)})}function z(e){return e.map(({type:t,title:o,description:n,abv:i,country:a,flavour:c,alcohol:l})=>(i=i||"Not defined, so you will have to taste!",a=a||"There is no country of origin",c=c||"Not specified",`
           <button class="close-modal-cocktails js-close-btn" data-modal-close-ingr>
        <svg class="svg-close-modal-cocktails" width="22" height="22">
          <use href="${I}#icon-close"></use>
        </svg>
      </button>
      <h2 class="modal-ingredient-title">${o}</h2>
      <p class="modal-ingr-alco visually-hidden" data-alco = "${l}"></p>
      <p class="modal-ingredient-type">${t}</p>
      <span class="lin"></span>
      <p class="modal-ingredient-text"><span class="modal-ingredient-span-black">${o}</span>: ${n}</p>
      <ul class="modal-ingredient-list-properties">
        <li class="modal-ingredient-list-item" data-modal-ingr-type = "${t}">Type:${t}</li>
        <li class="modal-ingredient-list-item" data-modal-ingr-country = "${a}">Country of origin:${a}</li>
        <li class="modal-ingredient-list-item modal-ingred" data-modal-ingr-abv = "${i}">Alcohol by volume:${i}</li>
        <li class="modal-ingredient-list-item" data-modal-ingr-flav = "${c}">Flavour:${c}</li>
      </ul>
      <ul class="modal-ingredient-list-btn">
        <button name="ingredient-add" class="modal-button modal-ingredient-add">add to favorite</button>
        <button name="ingredient-back" class="modal-button js-close-btn-two modal-ingredient-back" data-modal-close>back</button>
      </ul>
          `)).join("")}const G="https://drinkify.b.goit.study/api/v1/ingredients/",p=document.querySelector(".modal-ingredient-details"),T=document.querySelector(".modal-ingredients"),M=document.querySelector(".wrapper-modal-cocktails");async function V(e){if(e.target.nodeName!=="LI")return;X(),p.innerHTML="";let t=e.target.getAttribute("id");p.setAttribute("data-modal-indr-id",t);let o=await Q(t),n=z(o);p.insertAdjacentHTML("afterbegin",n),document.querySelector(".modal-ingredient-add").addEventListener("click",K);const a=document.querySelector(".js-close-btn");document.querySelector(".js-close-btn-two").addEventListener("click",l),a.addEventListener("click",l);function l(){Y()}}function K(e){const t=document.querySelector(".modal-ingredient-details"),o=t.getAttribute("data-modal-indr-id"),n=k(o,"favorIngred"),i={id:o,name:t.querySelector(".modal-ingredient-title").textContent,description:t.querySelector(".modal-ingredient-text").textContent||"",alcohol:t.querySelector("[data-alco]").getAttribute("data-alco"),type:t.querySelector("[data-modal-ingr-type]").getAttribute("data-modal-ingr-type"),country:t.querySelector("[data-modal-ingr-country]").getAttribute("data-modal-ingr-country"),abv:t.querySelector("[data-modal-ingr-abv]").getAttribute("data-modal-ingr-abv"),type:t.querySelector("[data-modal-ingr-flav]").getAttribute("data-modal-ingr-flav")};let a=JSON.parse(localStorage.getItem("basket"))||[];const c=document.querySelector(".modal-ingredient-add");if(n){c.textContent="add to favorite",a=a.filter(l=>l.id!==o),localStorage.setItem("basket",JSON.stringify(a));return}a.some(l=>l.id===i.id)||(a.push(i),localStorage.setItem("basket",JSON.stringify(a)),c.textContent="remove from favorite")}async function Q(e){try{return(await L.get(`${G}${e}`)).data}catch{console.log(error.message)}}function X(){document.querySelector(".cocktails-close").setAttribute("disabled","true"),M.classList.add("semi-hidden"),T.classList.remove("is-hidden")}function Y(){document.querySelector(".cocktails-close").removeAttribute("disabled"),T.classList.add("is-hidden"),M.classList.remove("semi-hidden")}const Z="https://drinkify.b.goit.study/api/v1",tt=document.querySelectorAll("[data-modal-close]"),et=document.querySelector(".cocktails__list");function ot(e){function t(o){if(o.target.nodeName!=="BUTTON"||!o.target.dataset.id)return;const n=o.target.dataset.modalOpen,i=o.target.dataset.id,a=document.getElementById(n);at(a,i)}e.addEventListener("click",t)}ot(et);tt.forEach(e=>{e.addEventListener("click",()=>{const t=e.closest("[data-modal]");nt(t)})});function at(e,t){e.classList.remove("is-hidden"),it(t)}function nt(e){e.classList.add("is-hidden")}async function it(e){return st(e).then(t=>{const o=document.querySelector(".js-modal-cocktails");ct(t,o),document.querySelector(".list-cocktail-ingredients").addEventListener("click",V)}).catch(t=>{console.error(t.message)})}async function st(e){try{return(await L.get(`${Z}/cocktails/lookup/?id=${e}`)).data}catch{console.error(error.message)}}function ct(e,t){const o=[],n=[];e[0].ingredients.forEach(s=>{s.measure===void 0&&(s.measure=""),o.push(s.measure+" "+s.title),n.push(s.ingredientId)}),t.innerHTML=e.map(s=>`
        <li class="js-modal-cocktails-item" id="${s._id}">
        <ul class="modal-cocktails-card-part-1 list">
          <li class="modal-cocktails-card-item">
            <div class="modal-cocktails-img-wrapper">
              <img
                class="modal-cocktails-img"
                src="${s.drinkThumb}"
                alt="${s.drink}"
                loading="lazy"
              />
            </div>
          </li>
          <li class="modal-cocktails-card-item">
            <h2 class="modal-cocktails-card-title">${s.drink}</h2>
            <h2 class="modal-cocktails-info-part-title">INGREDIENTS:</h2>
            <p class="visually-hidden modal-cocktail-item-description">${s.description}</p>
            <p class="modal-cocktails-info-part-undotitle">Per cocktail</p>
            <ul class="modal-cocktails-info-part-1-list list-cocktail-ingredients">
            </ul>
          </li>
        </ul>
        <div class="modal-cocktails-card-part-2">
          <h2 class="modal-cocktails-info-part-title">INSTRUCTIONS:</h2>
          <p class="modal-cocktails-info-part-2-text">${s.instructions}</p>
        </div>
        </li>
      `).join("");const i=document.querySelector(".modal-button-favorite"),c=document.querySelector(".js-modal-cocktails-item").getAttribute("id");k(c,"modalCocktail")?i.textContent="Remove from favorite":i.textContent="Add to favorite";const r=document.querySelector(".modal-cocktails-info-part-1-list");for(let s=0;s<o.length;s++)r.insertAdjacentHTML("afterbegin",`<li class="list-cocktail-ingredients-item" id=${n[s]}>${o[s]}</li>`)}const h=b(),B=document.querySelector(".cocktails__list");let u=[];function lt(e,t,o){let n=1;for(u=[],n=0;n<Math.ceil(e.length/h);n+=1){const i=e.slice(n*h,(n+1)*h);u.push(i)}console.log("Малюємо першу сторінку"),v(u[0],B),dt(u,t)}function rt(e){e.target.nodeName==="BUTTON"&&(v(u[e.target.textContent-1],B),console.log(`Малюємо ${e.target.textContent} сторінку`))}function dt(e,t,o){let n=[];for(let i=0;i<=e.length-1;i+=1)n.push(`<button class="js-pagination-btn" type="button" id="js-pagination-btn">${i+1}</button>`);t.innerHTML=n.join(""),t.addEventListener("click",rt)}const ut=document.querySelector(".search-form"),$=document.querySelector(".search-input"),j=document.querySelector(".container-letters"),mt=document.querySelector(".cocktails__list"),m=document.querySelector("#pagination-elements"),gt=document.querySelector(".search__title"),q=b();j.addEventListener("click",kt);j.addEventListener("change",vt);ut.addEventListener("submit",ft);async function C(e){e&&(e.length>q?(gt.innerHTML="Searching results",m.classList.remove("visually-hidden"),console.log("Викликаємо пагінатор"),lt(e,m)):e.length<=q&&(m.classList.add("visually-hidden"),m.innerHTML="",v(e,mt)))}async function ft(e){e.preventDefault();const t=$.value.trim();if($.value="",t){const o=await S(`s=${t}`);C(o)}}async function kt(e){if(e.target.tagName==="BUTTON"){const t=await S(`f=${e.target.innerText}`);C(t)}}async function vt(e){if(e.target.tagName==="SELECT"){const t=await S(`f=${e.target.value}`);C(t)}}
