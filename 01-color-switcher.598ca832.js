const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.style.fontSize="24px",e.style.textAlign="center",e.style.width="120px",t.style.fontSize="24px",t.style.textAlign="center",t.style.width="120px",t.style.mar,t.addEventListener("click",(function(){t.setAttribute("disabled",!1),e.removeAttribute("disabled"),intervalId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",!1),t.removeAttribute("disabled"),clearInterval(intervalId)}));
//# sourceMappingURL=01-color-switcher.598ca832.js.map
