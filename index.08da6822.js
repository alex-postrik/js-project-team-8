!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"EVgbq":"index.08da6822.js","24KGJ":"user.46aa6c43.png","eiDsq":"github-mark.375550f9.png","7nwxg":"library.cb833382.js"}')),i("83gfZ");var r=null,a=null;window.addEventListener("load",(function(){r=document.querySelector('button[data-id="watched-btn"]'),a=document.querySelector('button[data-id="queue-btn"]'),r&&a&&(r.addEventListener("click",(function(){r.classList.add("header-movie-btn--active"),a.classList.remove("header-movie-btn--active")})),a.addEventListener("click",(function(){a.classList.add("header-movie-btn--active"),r.classList.remove("header-movie-btn--active")})))}));var s={loader:document.querySelector(".spinner")};function c(){s.loader.classList.add("loader-hidden")}document.addEventListener("readystatechange",(function(){document.querySelector(".movies__img");void s.loader.classList.remove("loader-hidden"),"complete"===document.readyState&&setTimeout(c,1e3)})),i("eFtRB");var l,u=i("bpxeT"),d=i("2TvXO"),m=i("eFtRB"),v=i("kBkXs"),p=i("jcFG7"),f=document.querySelector(".header-form__search"),g=document.querySelector(".container");f.addEventListener("submit",(l=e(u)(e(d).mark((function t(n){var o,i,r,a;return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o=document.querySelector(".header-form__input"),!(i=o.value.trim())){e.next=15;break}return m.default.searchQuery=i,e.prev=5,e.next=8,m.default.fetchSearchMovies();case 8:0===(r=e.sent).length?(document.querySelector(".search-result-not-found")||((a=document.createElement("div")).textContent="Search result not successful. Enter the correct movie name.",a.classList.add("search-result-not-found"),g.style.position="relative",a.style.position="absolute",a.style.top="-20px",a.style.left="-10px",f.insertAdjacentElement("beforeend",a)),o.addEventListener("input",(function(){0!==this.value.trim().length&&this.value.trim().toLowerCase()!==m.default.searchQuery.toLowerCase()||!document.querySelector(".search-result-not-found")||document.querySelector(".search-result-not-found").remove()}))):(m.default.resetPage(),(0,v.createMovieCardMarkup)(r),(0,p.renderPagination)(m.default.page,m.default.allPages,p.FOR_SEARCH),document.querySelector(".search-result-not-found")&&document.querySelector(".search-result-not-found").remove()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[5,12]])}))),function(e){return l.apply(this,arguments)})),i("kBkXs"),i("cDXQO"),i("kBkXs"),i("aWZqV"),i("jcFG7"),i("aWZqV"),i("jcFG7"),{el:document.querySelector(".scroll"),show:function(){this.el.classList.remove("scroll_hide")},hide:function(){this.el.classList.add("scroll_hide")},addEventListener:function(){var e=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>400?e.show():e.hide()})),document.querySelector(".scroll").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}}.addEventListener(),i("83gfZ");var h;h=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("24KGJ");var b;b=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("eiDsq");var w=[{name:"Oleksandr",position:"Team-lead",gitHub:"https://github.com/alex-postrik",previewImg:e(h),svg:e(b)},{name:"Oleksandr",position:"Scram",gitHub:"https://github.com/alex-postrik",previewImg:e(h),svg:e(b)},{name:"Yuliia",position:"Developer",gitHub:"https://github.com/YuliiaNivina",previewImg:e(h),svg:e(b)},{name:"Alina",position:"Developer",gitHub:"https://github.com/alinarieznik",previewImg:e(h),svg:e(b)},{name:"Denis",position:"Developer",gitHub:"https://github.com/denis-bw",previewImg:e(h),svg:e(b)},{name:"Igor",position:"Developer",gitHub:"https://github.com/IgorPetrenko72",previewImg:e(h),svg:e(b)},{name:"Mariia",position:"Developer",gitHub:"https://github.com/Mariia848912",previewImg:e(h),svg:e(b)},{name:"Krystyna",position:"Developer",gitHub:"https://github.com/KristinaShepeleva",previewImg:e(h),svg:e(b)},{name:"Oleksandr",position:"Developer",gitHub:"https://github.com/alex-postrik",previewImg:e(h),svg:e(b)},{name:"Anton",position:"Developer",gitHub:"https://github.com/Anton-Yarema",previewImg:e(h),svg:e(b)},{name:"Oleksandr",position:"Developer",gitHub:"https://github.com/alex-postrik",previewImg:e(h),svg:e(b)},{name:"Oleksandr",position:"Developer",gitHub:"https://github.com/alex-postrik",previewImg:e(h),svg:e(b)},{name:"Oleksandr",position:"Developer",gitHub:"https://github.com/alex-postrik",previewImg:e(h),svg:e(b)},{name:"Anastasiia",position:"Developer",gitHub:"https://github.com/nastyamara",previewImg:e(h),svg:e(b)},{name:"Oleksandr",position:"Developer",gitHub:"https://github.com/alex-postrik",previewImg:e(h),svg:e(b)}],y={};y=function e(t,n,o){function i(a,s){if(!n[a]){if(!t[a]){var c=void 0;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,(function(e){return i(t[a][1][e]||e)}),u,u.exports,e,t,n,o)}return n[a].exports}for(var r=void 0,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return r.appendChild(e)}));var a=i(r,"IMG"),s=i(r,"VIDEO"),c=i(r,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(s)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var s={element:function(){return n},visible:function(){return r(n)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(s)}))},close:a};return s}},{}]},{},[1])(1),{openModalBtn:document.querySelector(".footer-students-btn")}.openModalBtn.addEventListener("click",(function(e){E.show(),window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(E.close(),window.removeEventListener("keydown",e))}))}));var L=w.map((function(e){var t=e.name,n=e.title,o=e.previewImg,i=e.svg,r=e.position,a=e.gitHub;return'<div class="unit">\n      <div class="wraper-img">\n      <img src="'.concat(o,'" alt="').concat(t,'" title="').concat(n,'" class="unit-img" />\n      <a href="').concat(a,'"><img src="').concat(i,'" alt="').concat(t,'" title="').concat(n,'" class="unit-svg" />\n      </a>\n      </div>\n    <p class="unit-info name"> ').concat(t,'</p>\n    <p class="unit-info role"> ').concat(r,"</p>\n</div>")})).join(""),E=y.create('<div class="modal"> \n'.concat(L,"\n</div>"));var k=document.getElementById("checkbox");k.addEventListener("change",(function(){!document.body.classList.contains("dark","muvies__title--isDarkTheme")&&k.checked&&document.body.classList.add("dark","muvies__title--isDarkTheme");document.body.classList.contains("dark","muvies__title--isDarkTheme")&&!k.checked&&document.body.classList.remove("dark","muvies__title--isDarkTheme")}))}();
//# sourceMappingURL=index.08da6822.js.map
