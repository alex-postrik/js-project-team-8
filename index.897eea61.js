function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l),l("kyEFX").register(JSON.parse('{"5ZPII":"index.897eea61.js","bczQ1":"No-Image-Placeholder.ffaf566f.jpg","5UbS1":"index.c4ecf65a.css","eM9ss":"library.b130970d.js"}')),l("3EOxS"),l("04jNI"),l("4Ktbk");var i=l("4Ktbk");i=l("4Ktbk"),i=l("4Ktbk");let a=1;const r=document.querySelector(".pagination");function s(e,t,n){let o="";a=n,!e||e>t||(e>1&&(o+='<li class="pagination__arrow-left arrow-left"><svg class="arrow-left" width="16" height="16" viewBox="0 0 16 16" fill="none"\n        xmlns="http://www.w3.org/2000/svg">\n        <path d="M12.6666 8H3.33331" stroke="black" stroke-width="1.33333" stroke-linecap="round"\n          stroke-linejoin="round" />\n        <path d="M7.99998 12.6666L3.33331 7.99998L7.99998 3.33331" stroke="black" stroke-width="1.33333"\n          stroke-linecap="round" stroke-linejoin="round" />\n      </svg></li>'),e>1&&(o+='<li class="pagination__button pagination__button-end">1</li>'),e>4&&(o+='<li class="pagination__points">...</li>'),e>3&&(o+=`<li class="pagination__button">${e-2}</li>`),e>2&&(o+=`<li class="pagination__button">${e-1}</li>`),o+=`<li class="pagination__button pagination__button-current">${e}</li>`,e+1<t&&(o+=`<li class="pagination__button">${e+1}</li>`),e+2<t&&(o+=`<li class="pagination__button">${e+2}</li>`),e+4<t&&(o+='<li class="pagination__points">...</li>'),e<t&&(o+=`<li class="pagination__button pagination__button-end">${t}</li>`),e<t&&(o+='<li class="pagination__arrow-right arrow-right scroll-top"><svg class="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none"\n        xmlns="http://www.w3.org/2000/svg">\n        <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round"\n          stroke-linejoin="round" />\n        <path d="M8.00002 12.6666L12.6667 7.99998L8.00002 3.33331" stroke="black" stroke-width="1.33333"\n          stroke-linecap="round" stroke-linejoin="round" />\n      </svg></li>'),r.innerHTML=o)}r.addEventListener("click",(function(e){if("..."===e.target.textContent)return;e.target.classList.contains("arrow-left")&&i.default.subtractPage();e.target.classList.contains("arrow-right")&&i.default.addPage();e.target.classList.contains("pagination__button")&&(i.default.page=Number(e.target.textContent));1===a?i.default.fetchPopularMovies().then((e=>{u(e),s(i.default.page,i.default.allPages,a)})):i.default.fetchSearchMovies().then((e=>{u(e),s(i.default.page,i.default.allPages,a)}));window.scrollTo(0,0)}));var c;c=new URL(l("kyEFX").resolve("bczQ1"),import.meta.url).toString();const d={moviesDivEl:document.querySelector(".movies__container"),moviesListEl:document.querySelector(".movies__list")};function u(t){const n=t.map((({posterPath:t,title:n,genreIds:o,releaseDate:l,id:i})=>{let a=t;"https://image.tmdb.org/t/p/w500null"!==t&&"https://image.tmdb.org/t/p/w500/mNSqObjKszcxr55buQafQF9ARiC.jpg"!==t||(a=e(c));let r=o;o||(r="Genre: Undefined");let s=l;return l||(s="Release date: Undefined"),`\n           <li class="movies__item" data-movies="${i}">\n                <div class="movies__thumb">\n                    <img class="movies__img" src="${a}" alt="${n}"/>\n                </div>\n                    <p class="movies__title">${n}</p>\n                    <p class="movies__info">${r} | ${s}</p>\n            </li>\n          `})).join("");d.moviesListEl.innerHTML=n}!async function(e){try{u(await i.default.fetchPopularMovies()),s(i.default.page,i.default.allPages,1)}catch(e){console.log(e)}}();const f=document.querySelector(".header-form__search"),p=document.querySelector(".container"),g=document.querySelector(".movies__list"),h=document.querySelector(".pagination");f.addEventListener("submit",(async e=>{e.preventDefault();const t=document.querySelector(".header-form__input"),n=t.value.trim();if(n){i.default.searchQuery=n,i.default.resetPage();try{i.default.searchQuery=n,i.default.resetPage(),g.innerHTML="";const e=await i.default.fetchSearchMovies();if(0===e.length){if(h.innerHTML="",!document.querySelector(".search-result-not-found")){const e=document.createElement("div");e.textContent="Search result not successful. Enter the correct movie name.",e.classList.add("search-result-not-found"),p.style.position="relative",e.style.position="absolute",e.style.top="-20px",e.style.left="-10px",f.insertAdjacentElement("beforeend",e)}t.addEventListener("input",(function(){0!==this.value.trim().length&&this.value.trim().toLowerCase()!==i.default.searchQuery.toLowerCase()||!document.querySelector(".search-result-not-found")||document.querySelector(".search-result-not-found").remove()}))}else u(e),s(i.default.page,i.default.allPages,2),document.querySelector(".search-result-not-found")&&document.querySelector(".search-result-not-found").remove()}catch(e){console.log(e)}}}));i=l("4Ktbk");l("37v9V"),l("jWzln"),l("jWzln");({el:document.querySelector(".scroll"),show(){this.el.classList.remove("scroll_hide")},hide(){this.el.classList.add("scroll_hide")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".scroll").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener(),l("3EOxS"),l("7bYU0"),l("5wkY2");
//# sourceMappingURL=index.897eea61.js.map
