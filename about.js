const dropmenu = document.querySelector(".dropmenu"),
  openMenu = document.querySelector(".openMenu"),
  close = document.querySelector(".close");

openMenu.addEventListener("click", () => {
  dropmenu.classList.add("active");
});

close.addEventListener("click", () => {
  dropmenu.classList.remove("active");
});
