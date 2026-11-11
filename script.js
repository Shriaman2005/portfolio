// Mobile menu toggle
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
});

navLinks.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", false);
    }
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll("main .section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentId = "";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 100) {
            currentId = section.id;
        }
    });

    links.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
    });
});

// Fade-in sections on scroll
const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(function (section) {
    section.classList.add("fade-in");
    fadeObserver.observe(section);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
