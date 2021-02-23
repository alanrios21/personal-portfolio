const menuBtn = document.querySelector(".menu-toggle");
const topNav = document.querySelector(".site-nav");
menuBtn.addEventListener("click", function () {
    topNav.classList.toggle("site-nav-open");
    menuBtn.classList.toggle("menu-open");
});