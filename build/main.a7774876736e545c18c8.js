(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6U4H":function(e){e.exports=[{id:"XWaQXcbk0",name:"Швабра",image:"http://prado-style.com.ua/components/com_jshopping/files/img_products/full_00000007521_shvabra_vengriya_2_otzh_2029.jpg",price:20},{id:"pkXzyRp1P",name:"Перчатки",image:"http://prado-style.com.ua/components/com_jshopping/files/img_products/00000008218_perchatki_universalnye_nitrilovye95_1para.jpg",price:6},{id:"QMom9q4Ku",name:"Прищепки",image:"http://prado-style.com.ua/components/com_jshopping/files/img_products/00000008438_prishchepka_derev_buk_20sht_up.jpg",price:2},{id:"k2k0UrjZG",name:"Кухонный набор",image:"http://prado-style.com.ua/components/com_jshopping/files/img_products/00000007952_nabor_dlya_kukhni_303.jpg",price:150},{id:"j2k8U1jZd",name:"Дихло Босс ",image:"http://prado-style.com.ua/components/com_jshopping/files/img_products/00000006998_dikhlo_boss_300ml_.jpg",price:24},{id:"X2aQ7cvkd",name:"Мухобойка",image:"http://prado-style.com.ua/components/com_jshopping/files/img_products/00000001130_mukhoboyka.jpg",price:17},{id:"nk3zy1pf8",name:"Люстра",image:"http://prado-style.com.ua/components/com_jshopping/files/img_products/00000008489_lyustra_3267_3_plafona_e27.jpg",price:270},{id:"b7k2U13fd",name:"Набор бокалов",image:"http://prado-style.com.ua/components/com_jshopping/files/img_products/00000002857_bokal_dlya_vina_domino_350ml_0015.jpg",price:240}]},L1EO:function(e,t,o){},QfWi:function(e,t,o){"use strict";o.r(t);var n=o("6U4H"),c=o("tzVh"),a=o.n(c);o("L1EO");console.log(n),console.log(a.a);const i={postFeed:document.querySelector(".menu")};var l,s=document.querySelectorAll(".button-item");for(l=0;l<s.length;l++)s[l].addEventListener("click",m);function m(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.closest(".menu-items");t.remove(),console.log(t)}document.querySelector(".load-more-btn").addEventListener("click",function(){!function(e){const t=e.map(e=>a()(e)).join("");console.log(t),i.postFeed.insertAdjacentHTML("beforeend",t)}(n);var e,t=document.querySelectorAll(".button-item");for(e=0;e<t.length;e++)t[e].addEventListener("click",o);function o(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target,o=t.closest(".menu-items");o.remove(),console.log(o)}});const r="grid-theme",p="column-theme",d=document.querySelector("#theme-switch-control"),u=(document.querySelector("body"),document.getElementById("theme-switch-control"));d.addEventListener("click",e=>{console.log(e)});const g=localStorage.getItem("theme");null!==g&&(document.body.classList.add(g),"column-theme"===g&&(u.checked=!0)),u.addEventListener("change",function(e){e.target===u&&!0===u.checked?(document.body.classList.toggle(p),localStorage.setItem("theme",p)):(document.body.classList.remove(p),localStorage.setItem("theme",r))}),u.addEventListener("change",function(e){e.target===u&&!1===u.checked?(document.body.classList.toggle(r),localStorage.setItem("theme",r)):(document.body.classList.remove(r),localStorage.setItem("theme",p))})},tzVh:function(e,t,o){var n=o("mp5j");e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,o,n,c){var a,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression;return'<li class="menu-items">\n    <div class="card">\n        <img src="'+s("function"==typeof(a=null!=(a=o.image||(null!=t?t.image:t))?a:l)?a.call(i,{name:"image",hash:{},data:c,loc:{start:{line:3,column:18},end:{line:3,column:27}}}):a)+'" alt="" class="card__image">\n        <div class="card__content">\n            <h2 class="card__name">'+s("function"==typeof(a=null!=(a=o.name||(null!=t?t.name:t))?a:l)?a.call(i,{name:"name",hash:{},data:c,loc:{start:{line:5,column:35},end:{line:5,column:43}}}):a)+'</h2>\n            <p class="card__price">\n                <i class="card__price-icon"></i>\n                '+s("function"==typeof(a=null!=(a=o.price||(null!=t?t.price:t))?a:l)?a.call(i,{name:"price",hash:{},data:c,loc:{start:{line:8,column:16},end:{line:8,column:25}}}):a)+'\n            </p>\n        </div>\n        <button class="button-item">\n            Удалить\n        </button>\n    </div>\n</li>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a7774876736e545c18c8.js.map