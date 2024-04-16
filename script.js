const navbar = document.querySelector(".navWrapContainer");
let start = navbar.offsetTop;
// console.log(navbar);
let originalBackgroundColor = window
  .getComputedStyle(navbar)
  .getPropertyValue("background-color");
// console.log(originalBackgroundColor);
let image = document.querySelector(".navContainerLeft img");
// console.log(image);

const texttoChange = document.querySelector(".navContainerRight");
// console.log(texttoChange);

const btn = document.querySelector(".nCRT button");
// console.log(btn);

// let textColor = window.getComputedStyle(color).getPropertyValue("color");
// console.log(textColor);

// console.log(start);
function stickynavbar() {
  if (window.scrollY >= start) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "white";
    image.src = "assets/smh-logo-color.png";
    texttoChange.style.color = "black";
    btn.style.background = "linear-gradient(to right, #4cb848, #aed035)";
  } else  {
    navbar.classList.remove("sticky");
    navbar.style.backgroundColor = "red";
  }
}
window.addEventListener("scroll", stickynavbar);
