const hamburger_btn = document.querySelector("#header_hamburger");
const sideBar_nav = document.querySelector(".sideBar_nav");
const sideBarClose_btn = document.querySelector(".sideBar_close-btn");
const goCart_btn = document.querySelector(".goCart-btn");

hamburger_btn.addEventListener("click", function () {
  sideBar_nav.style.display = "block";
});

sideBarClose_btn.addEventListener("click", function () {
  sideBar_nav.style.display = "none";
});

goCart_btn.addEventListener("click", function () {
  location.href = "/week2/assign/cart.html";
});
