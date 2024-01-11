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
const navHamburgerButton = document.querySelector(".nav-hamburger-btn");
const navbarMenu = document.querySelector(".nav-menu-list");

navHamburgerButton.addEventListener("click", showNavbarMenu);

function showNavbarMenu() {
    navHamburgerButton.style.display = "none";
    navbarMenu.style.display = "flex";
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