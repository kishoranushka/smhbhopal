const slides = document.querySelectorAll(".slideImg");
// console.log(slides);
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `$(index*100)%`;
});
