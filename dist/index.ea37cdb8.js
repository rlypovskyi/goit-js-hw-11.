/* eslint-disable no-unused-vars *//* eslint-disable no-console *//* global axios, Notiflix, SimpleLightbox */// eslint-disable-next-line import/extensions
/* global axios */async function e(e,t=1){let o=new URLSearchParams({key:"39484485-dccfbf14586dc449f78b39dc0",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40",page:t.toString()}),n=`https://pixabay.com/api/?${o.toString()}`;try{let e=await axios.get(n);return e.data}catch(e){throw(// eslint-disable-next-line no-console
console.error("Error fetching images:",e),e)}}const t=document.querySelector(".gallery"),o=document.getElementById("search-form"),n=document.querySelector(".search-icon"),i=document.getElementById("loadMoreBtn"),a=document.getElementById("scrollToTopBtn");let l="",s=1,r=0,c=!0,d=!1,y=null,m=0;function f(e){let t=e.hits,{totalHits:o}=e;if(m=o,0===t.length)Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."),i.style.display="none";else{u(t),s=1;let e=`Hooray! We found ${o} images. Loaded ${t.length} more. Total loaded: ${40*s}`;Notiflix.Notify.success(e),i.style.display=t.length<40?"none":"block"}}function u(e){let o=e.map(e=>`
    <div class="photo-card">  
      <a href="${e.largeImageURL}" data-lightbox="gallery">  
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />  
      </a>
      <div class="info">  
        <p class="info-item"><b>Likes:</b> ${e.likes}</p>  
        <p class="info-item"><b>Views:</b> ${e.views}</p>  
        <p class="info-item"><b>Comments:</b> ${e.comments}</p>  
        <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>  
      </div>
    </div>
  `).join("");t.insertAdjacentHTML("beforeend",o),new SimpleLightbox(".photo-card a",{})}function g(){d&&y&&(cancelAnimationFrame(y),y=null,d=!1,window.removeEventListener("wheel",g),window.removeEventListener("touchmove",g),window.removeEventListener("keydown",w))}function w(e){(38===e.keyCode||40===e.keyCode)&&g()}n.addEventListener("click",async()=>{t.innerHTML="",l=o.elements.searchQuery.value;try{let t=await e(l);f(t)}catch(e){Notiflix.Notify.failure("Something went wrong. Please try again later.")}}),o.addEventListener("submit",async o=>{o.preventDefault(),t.innerHTML="",l=o.currentTarget.elements.searchQuery.value;try{let t=await e(l);f(t)}catch(e){Notiflix.Notify.failure("Something went wrong. Please try again later.")}}),i.addEventListener("click",async()=>{i.style.opacity="1",i.classList.add("spinFast"),setTimeout(()=>{i.classList.remove("spinFast"),i.classList.add("spinBackAndFly")},500);try{let t=await e(l,s+1),o=t.hits;if(o.length>0){u(o),s+=1;let e=`Hooray! We found ${m} images. Loaded ${o.length} more. Total loaded: ${40*s}`;Notiflix.Notify.success(e)}o.length<40&&(i.style.display="none")}catch(e){console.error("Error fetching images:",e),Notiflix.Notify.failure("Something went wrong. Please try again later.")}setTimeout(()=>{i.classList.remove("spinBackAndFly")},3500)}),i.addEventListener("mouseenter",()=>{i.style.opacity="1",i.classList.add("bounce")}),i.addEventListener("mouseleave",()=>{i.classList.remove("bounce")}),a.addEventListener("click",()=>{a.classList.add("flyOut"),setTimeout(()=>{(function(e){let t=window.pageYOffset,o=null;window.addEventListener("wheel",g),window.addEventListener("touchmove",g),window.addEventListener("keydown",w),d=!0,y=requestAnimationFrame(function n(i){var a,l;null===o&&(o=i);let s=i-o,r=(a=s,l=0-t,(a/=e/2)<1?l/2*a*a+t:-l/2*(--a*(a-2)-1)+t);window.scrollTo(0,r),s<e?y=requestAnimationFrame(n):d=!1})})(4e3),a.classList.remove("flyOut")},2e3)}),window.addEventListener("scroll",()=>{let e=t.querySelector("img"),o=window.scrollY;if(c=o>r,r=o,!e)return;let n=e.getBoundingClientRect().top;0===o?(a.style.display="none",a.classList.remove("half-opacity")):n<0?(a.style.display="block",c?a.classList.remove("half-opacity"):a.classList.add("half-opacity")):(a.style.display="none",a.classList.remove("half-opacity"));let l=window.innerHeight+window.scrollY>=document.body.offsetHeight-10;l?(i.style.display="block",i.focus(),i.style.border="none"):!c&&window.scrollY<document.body.offsetHeight-100&&(i.style.display="none");let s=t.lastElementChild;if(s){let e=s.getBoundingClientRect();e.bottom>window.innerHeight-72?i.style.bottom="10px":i.style.bottom="40px"}});//# sourceMappingURL=index.ea37cdb8.js.map

//# sourceMappingURL=index.ea37cdb8.js.map
