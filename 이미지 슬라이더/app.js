const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentIndex = 0;

prev.addEventListener("click", () => {
  changeSlide(-1);
});

next.addEventListener("click", () => {
  changeSlide(1);
});

function changeSlide(direction) {
  slides[currentIndex].style.zIndex = 1;
  currentIndex = (currentIndex + direction + 4) % 4;
  slides[currentIndex].style.zIndex = 2;
}
