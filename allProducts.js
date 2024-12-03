const dropmenu = document.querySelector(".dropmenu"),
  openMenu = document.querySelector(".openMenu"),
  close = document.querySelector(".close");

openMenu.addEventListener("click", () => {
  dropmenu.classList.add("active");
});

close.addEventListener("click", () => {
  dropmenu.classList.remove("active");
});

const btn1 = document.querySelector(".btn1"),
  btn2 = document.querySelector(".btn2"),
  btn3 = document.querySelector(".btn3"),
  btn4 = document.querySelector(".btn4"),
  btn5 = document.querySelector(".btn5");

const product1 = document.querySelector(".product1"),
  product2 = document.querySelector(".product2"),
  product3 = document.querySelector(".product3"),
  product4 = document.querySelector(".product4"),
  product5 = document.querySelector(".product5");

const products = [product1, product2, product3, product4, product5];

function showProducts(elemet) {
  products.forEach((product) => {
    product.classList.remove("active");
  });

  elemet.classList.add("active");
}

btn1.addEventListener("click", () => {
  showProducts(product1);
});

btn2.addEventListener("click", () => {
  showProducts(product2);
});

btn3.addEventListener("click", () => {
  showProducts(product3);
});

btn4.addEventListener("click", () => {
  showProducts(product4);
});

btn5.addEventListener("click", () => {
  showProducts(product5);
});

const menu = document.querySelector(".menu"),
  fillterAct = document.querySelector(".filtter"),
  titletoggle = document.querySelector(".titletoggle");

fillterAct.addEventListener("click", () => {
  menu.classList.toggle("act");

  if (menu.classList.contains("act")) {
    titletoggle.textContent = "Hide Menu"; // Change text when menu is visible
  } else {
    titletoggle.textContent = "Show Menu"; // Change text when menu is hidden
  }
});

//Cart shopping display 
const buy = document.querySelectorAll("#buy");

buy.forEach((button => {
  button.addEventListener('click',()=>{
    window.location.href = "paymentCart.html";
  });
}));



