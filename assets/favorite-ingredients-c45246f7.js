import{n as b,s as E,c as $}from"./favor-cockt-84ec8be7.js";function y(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var C={},k={get exports(){return C},set exports(a){C=a}};(function(a,g){(function(s){a.exports=s()})(function(){return function s(i,c,f){function p(e,r){if(!c[e]){if(!i[e]){var u=typeof y=="function"&&y;if(!r&&u)return u(e,!0);if(h)return h(e,!0);var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}var t=c[e]={exports:{}};i[e][0].call(t.exports,function(n){return p(i[e][1][n]||n)},t,t.exports,s,i,c,f)}return c[e].exports}for(var h=typeof y=="function"&&y,o=0;o<f.length;o++)p(f[o]);return p}({1:[function(s,i,c){Object.defineProperty(c,"__esModule",{value:!0}),c.create=c.visible=void 0;var f=function(o){var e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=document.createElement("div");return r.innerHTML=o.trim(),e===!0?r.children:r.firstChild},p=function(o,e){var r=o.children;return r.length===1&&r[0].tagName===e},h=function(o){return(o=o||document.querySelector(".basicLightbox"))!=null&&o.ownerDocument.body.contains(o)===!0};c.visible=h,c.create=function(o,e){var r=function(t,n){var l=f(`
		<div class="basicLightbox `.concat(n.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),v=l.querySelector(".basicLightbox__placeholder");t.forEach(function(q){return v.appendChild(q)});var L=p(v,"IMG"),x=p(v,"VIDEO"),w=p(v,"IFRAME");return L===!0&&l.classList.add("basicLightbox--img"),x===!0&&l.classList.add("basicLightbox--video"),w===!0&&l.classList.add("basicLightbox--iframe"),l}(o=function(t){var n=typeof t=="string",l=t instanceof HTMLElement==1;if(n===!1&&l===!1)throw new Error("Content must be a DOM element/node or string");return n===!0?Array.from(f(t,!0)):t.tagName==="TEMPLATE"?[t.content.cloneNode(!0)]:Array.from(t.children)}(o),e=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((t=Object.assign({},t)).closable==null&&(t.closable=!0),t.className==null&&(t.className=""),t.onShow==null&&(t.onShow=function(){}),t.onClose==null&&(t.onClose=function(){}),typeof t.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof t.className!="string")throw new Error("Property `className` must be a string");if(typeof t.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof t.onClose!="function")throw new Error("Property `onClose` must be a function");return t}(e)),u=function(t){return e.onClose(d)!==!1&&function(n,l){return n.classList.remove("basicLightbox--visible"),setTimeout(function(){return h(n)===!1||n.parentElement.removeChild(n),l()},410),!0}(r,function(){if(typeof t=="function")return t(d)})};e.closable===!0&&r.addEventListener("click",function(t){t.target===r&&u()});var d={element:function(){return r},visible:function(){return h(r)},show:function(t){return e.onShow(d)!==!1&&function(n,l){return document.body.appendChild(n),setTimeout(function(){requestAnimationFrame(function(){return n.classList.add("basicLightbox--visible"),l()})},10),!0}(r,function(){if(typeof t=="function")return t(d)})},close:u};return d}},{}]},{},[1])(1)})})(k);const m=document.querySelector(".favor-ingred__gallery"),A=document.querySelector(".modal-cocktails"),S="basket",I=JSON.parse(localStorage.getItem(S));document.querySelector("#pagination-elements");I.length>0?_(I,m):b(m);function N(a){if(a.target.className!=="card__close")return;document.querySelector(".favor-ingred__gallery"),A.classList.remove("is-hidden");const g=a.target.closest(".favor-ingred__card-item").getAttribute("id"),s=I.filter(o=>o.id===g),i=document.querySelector(".js-modal-cocktails-div");function c(o,e){e.innerHTML=o.map(({id:r,type:u,name:d,description:t,abv:n,country:l,flavour:v,alcohol:L})=>(n=n||"Not defined, so you will have to taste!",l=l||"There is no country of origin",v=v||"Not specified",`
      <p class="visually-hidden " data-modal-indredient-id = "${r}"></p>
           <button class="close-modal-cocktails js-close-btn" data-modal-close-ingr data-modal-close>
        <svg class="svg-close-modal-cocktails" width="22" height="22">
          <use href="${E}#icon-close"></use>
        </svg>
      </button>
      <h2 class="modal-ingredient-title">${d}</h2>
      <p class="modal-ingr-alco visually-hidden" data-alco = "${L}"></p>
      <p class="modal-ingredient-type">${u}</p>
      <span class="lin"></span>
      <p class="modal-ingredient-text"><span class="modal-ingredient-span-black">${d}</span>: ${t}</p>
      <ul class="modal-ingredient-list-properties">
        <li class="modal-ingredient-list-item" data-modal-ingr-type = "${u}">Type:${u}</li>
        <li class="modal-ingredient-list-item" data-modal-ingr-country = "${l}">Country of origin:${l}</li>
        <li class="modal-ingredient-list-item modal-ingred" data-modal-ingr-abv = "${n}">Alcohol by volume:${n}</li>
        <li class="modal-ingredient-list-item" data-modal-ingr-flav = "${v}">Flavour:${v}</li>
      </ul>
          `)).join("")}c(s,i);const f=document.querySelector(".modal-button-favorite");f.textContent="remove from favorite";function p(o){const e=document.querySelector(".js-modal-cocktails-div"),r=document.querySelector("[data-modal-indredient-id]").getAttribute("data-modal-indredient-id"),u=$(r,"favorIngred"),d={id:r,name:e.querySelector(".modal-ingredient-title").textContent,description:e.querySelector(".modal-ingredient-text").textContent||"",alcohol:e.querySelector("[data-alco]").getAttribute("data-alco"),type:e.querySelector("[data-modal-ingr-type]").getAttribute("data-modal-ingr-type"),country:e.querySelector("[data-modal-ingr-country]").getAttribute("data-modal-ingr-country"),abv:e.querySelector("[data-modal-ingr-abv]").getAttribute("data-modal-ingr-abv"),type:e.querySelector("[data-modal-ingr-flav]").getAttribute("data-modal-ingr-flav")};let t=JSON.parse(localStorage.getItem("basket"))||[];const n=document.querySelector(".modal-button-favorite");if(u){n.textContent="add to favorite",t=t.filter(l=>l.id!==r),localStorage.setItem("basket",JSON.stringify(t)),t.length>0?_(t,m):b(m);return}if(!u){n.textContent="remove from favorite",t.push(d),localStorage.setItem("basket",JSON.stringify(t)),n.textContent="remove from favorite",t.length>0?_(t,m):b(m);return}}f.addEventListener("click",p),document.querySelectorAll("[data-modal-close]").forEach(o=>{o.addEventListener("click",()=>{o.closest("[data-modal]").classList.add("is-hidden")})})}function T(a){if(a.target.className!=="btn-svg__close")return;const g=a.target.getAttribute("data-ingred-trash-id");let s=JSON.parse(localStorage.getItem(S))||[];s===0&&b(m),s=s.filter(c=>c.id!==g),localStorage.setItem(S,JSON.stringify(s));const i=JSON.parse(localStorage.getItem(S))||[];if(i.length===0){b(m);return}_(i,m)}m.addEventListener("click",T);m.addEventListener("click",N);function M(a){return a.toLowerCase()==="yes"?"Alcoholic":"Non-Alcoholic"}function O(a,g){let s;return a.length>g?s=a.slice(0,g)+"...":s=a,s}function _(a,g){const s=a.map(i=>`
          <li class="favor-ingred__card-item change-theme" id="${i.id}">
            <h2 class="favor-ingred__title-name">${i.name}</h2>
            <p class="favor-ingred__text-alco">${M(i.alcohol)}</p>
            <p class="favor-ingred__text-descr">${O(i.description,139)}</p>
            <div class="card__button-icon">
              <button class="card__close" data-id="${i._id}" data-source="${i.description.replace(/['"]+/g,"")}" type="button">learn more</button>
              <button class="btn-svg__close" data-ingred-trash-id = ${i.id} type="button">
                <svg class="favor-ingred__svg" data-id="${i.id}">
                  <use href="${E}#icon-trash"></use>
                </svg>
              </button>
            </div>
          </li>
                  `).join("");g.innerHTML=s}