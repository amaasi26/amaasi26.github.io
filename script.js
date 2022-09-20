const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

navMenu.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-menu');
    })
})
