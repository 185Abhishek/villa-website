// JavaScript to toggle the navbar
const toggle = document.querySelector(".toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
