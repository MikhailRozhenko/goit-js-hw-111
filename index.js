import{a as c,S as u,i as m}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";function d(n){const o={key:"51880521-c3154ecfaa100b1983789291c",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get("",{params:o}).then(e=>e.data)}const s={form:document.querySelector(".form"),inputForm:document.querySelector('input[type="text"]'),buttonForm:document.querySelector('button[type="submit"]'),ulForm:document.querySelector(".gallery"),loaderForm:document.querySelector(".loader")},f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p(n){const o=n.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e.likes}</p>
            <p><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>
      `).join("");s.ulForm.insertAdjacentHTML("beforeend",o),f.refresh()}function y(){s.ulForm.innerHTML=""}function h(){s.loaderForm.classList.remove("hidden")}function g(){s.loaderForm.classList.add("hidden")}function l(n){m.error({message:n,position:"topRight",timeout:1500,pauseOnHover:!0,close:!0})}s.form.addEventListener("submit",n=>{n.preventDefault();const o=n.target.elements.search.value;if(o.trim()===""){l("Sorry, there are no images matching your search query. Please try again!");return}y(),h(),d(o).then(e=>{if(!e||e.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}return e}).then(e=>{e&&p(e.hits)}).finally(()=>{g()})});
//# sourceMappingURL=index.js.map
