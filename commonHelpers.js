import{S as d,i as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(a){return fetch(`https://pixabay.com/api/?key=42630881-770530465aa98d154d18ed059&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(`Error: ${o.status}`);return o.json()})}const l=document.querySelector(".gallery");let f=new d(".gallery-link",{captionsData:"alt",captionDelay:250});function m(a){if(l.innerHTML="",a.hits.length===0)return u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const s=a.hits.map(r=>`<li class="gallery-item">
                <a class="gallery-link" href="${r.largeImageURL}">
                    <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}">
                </a>
            <div class="gallery-info">
                <p class="card">Likes <span class="card-value">${r.likes}</span></p>
                <p class="card">Views <span class="card-value">${r.views}</span></p>
                <p class="card">Comments <span class="card-value">${r.comments}</span></p>
                <p class="card">Downloads <span class="card-value">${r.downloads}</span></p>
            </div>
        </li>`).join("");l.insertAdjacentHTML("afterbegin",s),f.refresh()}const i=document.querySelector(".form"),g=document.querySelector(".form-input");document.querySelector(".gallery");const c=document.querySelector(".loader");i.addEventListener("submit",y);function y(a){a.preventDefault();const s=g.value.trim();if(s==="")return i.reset(),u.error({message:"Enter search image name",position:"topRight"});c.classList.remove("visually-hidden"),p(s).then(r=>m(r)).catch(r=>console.log(r)),c.classList.add("visually-hidden"),i.reset()}
//# sourceMappingURL=commonHelpers.js.map
