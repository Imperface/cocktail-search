(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",t),n.closeModalBtn.addEventListener("click",t);function t(){n.modal.classList.toggle("is-hidden")}})();const d=document.querySelector(".dropbtn"),s=document.querySelector(".icon-chevron-down");d.addEventListener("click",i);function i(){document.getElementById("myDropdown").classList.toggle("show"),s.classList.toggle("rotate")}window.onclick=function(n){if(!n.target.matches(".dropbtn")){const t=document.getElementById("myDropdown");t.classList.contains("show")&&(t.classList.remove("show"),s.classList.toggle("rotate"))}};const a=document.querySelectorAll("#js-btn-change-theme");function u(n){[...document.querySelectorAll(".change-theme")].forEach(r=>{r.classList.toggle("dark-mode")})}a.forEach(n=>{n.addEventListener("click",u)});
