
const clickSound = new Audio("assets/sounds/click.wav");
clickSound.volume = 0.45;

document.body.style.opacity = 0;
document.body.style.filter = "blur(25px)";
document.body.style.transition = "opacity .7s ease, filter .8s ease";

window.addEventListener("load", () => {
  // choose HD hero on wide screens
  const hd = window.matchMedia("(min-width: 900px)").matches;
  document.body.style.setProperty("--bgImg", `url("${hd ? "assets/hero/hero-wide-hd.webp" : "assets/hero/hero-mobile.webp"}")`);
  document.body.style.opacity = 1;
  document.body.style.filter = "blur(0)";
});

document.querySelectorAll("a").forEach(link => {
  if (link.href && !link.href.includes("#") && !link.target) {
    link.addEventListener("click", e => {
      e.preventDefault();
      clickSound.currentTime = 0; clickSound.play();
      document.body.style.opacity = 0;
      document.body.style.filter = "blur(25px)";
      setTimeout(() => { window.location = link.href; }, 350);
    });
  }
});
