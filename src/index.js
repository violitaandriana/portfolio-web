import './styles.css';
import 'boxicons';
import '../node_modules/boxicons/css/boxicons.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal'
import createNavbar from './navbar.js';
import createTopSection from './topSection.js';
import createBottomSection from './bottomSection.js';

// Display Website
createNavbar();
createTopSection();
createBottomSection();


// Navbar Hamburger Menu
const navbarContainer = document.querySelector('.navbar');
const navHamburgerButton = document.querySelector(".nav-hamburger-btn");
const navbarMenu = document.querySelector(".nav-menu-list");
const navLinks = document.querySelectorAll(".nav-link");
const topSection = document.querySelector(".top-section");
const bottomSection = document.querySelector(".bottom-section");

navHamburgerButton.addEventListener("click", () => {
    navbarMenu.classList.toggle('visible');
    topSection.classList.toggle('bg-opacity');
    bottomSection.classList.toggle('bg-opacity');
})

window.addEventListener('click', (e) => {
    if (!navbarContainer.contains(e.target)) {
        removeExtraClass();
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', removeExtraClass)
});

function removeExtraClass() {
    navbarMenu.classList.remove('visible');
    topSection.classList.remove('bg-opacity');
    bottomSection.classList.remove('bg-opacity');
}


// Typing Animation
var typingEffect = new Typed(".typed-text", {
    strings: ["Software Engineer", "Front End Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

// Scroll Reveal Animation
const srTop = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 2000,
    reset: true
});

// All Title
srTop.reveal('.abt-title', {delay: 100});
srTop.reveal('.projects-title', {delay: 100});
srTop.reveal('.contact-title', {delay: 300});

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '20px',
    duration: 2000,
    reset: true
});

// About
srLeft.reveal('.abt-desc', {delay: 500});
srLeft.reveal('.abt-skills', {delay: 1200});

// Project (left)
srLeft.reveal('.left-side', {delay: 500});
srLeft.reveal('.view-more-btn', {delay: 200});

// Contact 
srLeft.reveal('.contact-card', {interval: 600});

const srRight = ScrollReveal({
    origin: 'right',
    distance: '20px',
    duration: 2000,
    reset: true
});

// Project (right)
srRight.reveal('.right-side', {delay: 500});