const navbar = document.getElementById("navbar");
const scrollUp = document.getElementById("scroll-up");
const toggle = document.getElementById("togggle");
const navbarSC = document.getElementById("navbarSupportedContent");

toggle.addEventListener("click", () =>{
    toggle.classList.toggle("collapsed");
    navbarSC.classList.toggle("show");
    navbarSC.classList.toggle("mean-menu");
});

window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
});

window.addEventListener("scroll", function () {
    if (window.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
});

scrollUp.addEventListener("click", () =>{
    window.scroll(0, 0);
});

// ===== The date that is placed at the footer ====
const date = new Date();
const cYear = date.getFullYear();
document.querySelector(".year_change").innerHTML = cYear;