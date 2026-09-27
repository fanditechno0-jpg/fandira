const header=document.querySelector("header");
window.addEventListener("scroll",()=>header?.classList.toggle("scrolled",window.scrollY>12));
const year=document.querySelector("#year"); if(year) year.textContent=new Date().getFullYear();
