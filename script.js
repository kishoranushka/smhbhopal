const navbar = document.querySelector(".navWrapContainer");
let start = navbar.offsetTop;
let originalBackgroundColor = window
  .getComputedStyle(navbar)
  .getPropertyValue("background-color");
let image = document.querySelector(".navContainerLeft img");

const texttoChange = document.querySelector(".navContainerRight");

const btn = document.querySelector(".nCRT button");
let btnColor = window
  .getComputedStyle(btn)
  .getPropertyValue("background-color");

function stickynavbar() {
  console.log(start);
  if (window.scrollY > start) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "white";
    image.src = "assets/smh-logo-color.png";
    texttoChange.style.color = "black";
    btn.style.background = "linear-gradient(to right, #4cb848, #aed035)";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.backgroundColor = originalBackgroundColor;
    image.src = "assets/smh-logo-white.png";
    texttoChange.style.color = "white";
    btn.style.background = btnColor;
  }
}
window.addEventListener("scroll", stickynavbar);
