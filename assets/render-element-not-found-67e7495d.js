(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n);function n(){e.modal.classList.toggle("is-hidden")}})();const m=document.querySelector(".dropbtn"),i=document.querySelector(".icon-chevron-down");m.addEventListener("click",f);function f(){document.getElementById("myDropdown").classList.toggle("show"),i.classList.toggle("rotate")}window.onclick=function(e){if(!e.target.matches(".dropbtn")){const n=document.getElementById("myDropdown");n.classList.contains("show")&&(n.classList.remove("show"),i.classList.toggle("rotate"))}};const d=[...document.querySelectorAll("#js-btn-change-theme")],u=[...document.querySelectorAll(".change-theme")];function g(e){localStorage.setItem("darkMode",e)}function p(){return localStorage.getItem("darkMode")==="true"}const c=p();u.forEach(e=>{e.classList.toggle("dark-mode",c)});c&&d.forEach(e=>{e.classList.add("clicked")});d.forEach(e=>{e.addEventListener("click",()=>{u.forEach(s=>{s.classList.toggle("dark-mode")}),g(!c),e.classList.toggle("clicked")})});const l="/cocktail-search/assets/rafiki_not-b2fc2580.png";document.querySelector(".noAll");function h(e){e.innerHTML=`<div class="no_res_cent">
  <img
    src="${l}"
    class="no_res_img"
    alt="no cocktails"
  />
  <p class="no_res_text">
    Sorry, we <span class="no_res_fc">didn't find</span> any <br />
    cocktail for you
  </p>
</div>`}document.querySelector(".no");function y(e){e.innerHTML=`
    <div class="no_result_container change-theme">
      <div class="no_result">
        <div class="no_result_center">
          <img src="${l}"
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
          <img src="${l}"
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
</div>`}export{_ as a,h as b,y as n};
