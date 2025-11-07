
const tap = new Audio("assets/sounds/click.wav"); tap.volume = .45;
document.body.style.opacity = 0;
document.body.style.filter = "blur(25px)";
document.body.style.transition = "opacity .7s ease, filter .8s ease";
window.addEventListener("load", () => {
  document.body.style.opacity = 1; document.body.style.filter = "blur(0)";
});
document.addEventListener("click", e => {
  const a = e.target.closest("a");
  if (!a || a.target || (a.getAttribute("href")||'').startsWith('#')) return;
  e.preventDefault();
  try{ tap.currentTime=0; tap.play(); }catch{}
  document.body.style.opacity = 0; document.body.style.filter = "blur(25px)";
  setTimeout(()=>location.href=a.href, 350);
});
const isAr = (navigator.language||'').toLowerCase().startsWith('ar');
document.documentElement.setAttribute('dir', isAr?'rtl':'ltr');
document.documentElement.setAttribute('lang', isAr?'ar':'en');
function toggleLang(){
  const nowAr = document.documentElement.getAttribute('lang')==='ar';
  document.documentElement.setAttribute('lang', nowAr?'en':'ar');
  document.documentElement.setAttribute('dir', nowAr?'ltr':'rtl');
}
