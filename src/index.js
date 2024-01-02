import './styles.css';
import 'boxicons';
import '../node_modules/boxicons/css/boxicons.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal'
import createNavbar from './navbar.js';
import createOpening from './opening.js';
import createAbout from './about.js';
import createProjects from './projects.js';
import createContact from './contact.js';
import createFooter from './footer.js';

createNavbar();
createOpening();
createAbout();
createProjects();
createContact();
createFooter();


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
    strings: ["Undergraduate Student", "XXX"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

// Scroll Reveal Animation
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 2000,
    reset: true
})

scrollReveal.reveal('.abt-section', {delay: 100});

scrollReveal.reveal('.projects-section', {delay: 200});
scrollReveal.reveal('.left-side', {delay: 200});
scrollReveal.reveal('.right-side', {delay: 600});

scrollReveal.reveal('.contact-section', {delay: 200});
scrollReveal.reveal('.contact-card', {interval: 400});
