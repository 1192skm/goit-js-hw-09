!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,d=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0}));var d=null;t.disabled=!1,e.disabled=!0}();
//# sourceMappingURL=01-color-switcher.26992acd.js.map