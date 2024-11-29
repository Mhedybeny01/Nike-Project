const dropmenu = document.querySelector(".dropmenu"),
  openMenu = document.querySelector(".openMenu"),
  close = document.querySelector(".close");

openMenu.addEventListener("click", () => {
  dropmenu.classList.add("active");
});

close.addEventListener("click", () => {
  dropmenu.classList.remove("active");
});

const btnnext = document.querySelector(".btnnext"); // Next button
const btnprev = document.querySelector(".btnprev"); // Prev button
const slider = document.querySelector(".contentsliders"); // Slider container

// Array of images (this can be updated with more images)
const images = document.querySelectorAll(".contentsliders a"); // Get all image links inside the slider

let currentPosition = 0; // Initialize the current position

// Function to update the slider position
const updateSlider = () => {
  const slideWidth = images[0].clientWidth + 0; // Width of one image + margin
  slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
};

// Event listener for the Next button
btnnext.addEventListener("click", () => {
  if (currentPosition < images.length - 1) {
    currentPosition++; // Move to the next image
    updateSlider();
  }
});

// Event listener for the Prev button
btnprev.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--; // Move to the previous image
    updateSlider();
  }
});



/* list language in footer */

const languageDrop = document.querySelector(".contries");

const displayListe = document.querySelector(".listLanguage");
languageDrop.addEventListener('click',()=>{
  displayListe.classList.toggle('active');
})