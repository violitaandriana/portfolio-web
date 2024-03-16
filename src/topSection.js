import html5 from '../assets/html5.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import webpack from '../assets/webpack.png';
import git from '../assets/git.png';
import figma from '../assets/figma.png';
import createNavbar from './navbar.js';

// Opening Section
function createOpening() {
    const openSection = document.createElement('section');
    openSection.id = 'open-section';
    openSection.classList.add('open-section');

    const openContainer = document.createElement('div');
    openContainer.classList.add('open-container');

    const helloHeading = document.createElement('h1');
    helloHeading.classList.add('open-hello');
    helloHeading.textContent = 'Hello,';

    const nameHeading = document.createElement('h1');
    nameHeading.classList.add('open-name');
    nameHeading.textContent = "I'm Violita Andriana";

    const jobHeading = document.createElement('div');
    jobHeading.classList.add('open-job');
    const typedTextSpan = document.createElement('span');
    typedTextSpan.classList.add('typed-text');

    jobHeading.appendChild(typedTextSpan);

    openContainer.appendChild(helloHeading);
    openContainer.appendChild(nameHeading);
    openContainer.appendChild(jobHeading);

    openSection.appendChild(openContainer);

    return openSection;
}

// About Section
function createAbout() {
    const aboutSection = document.createElement('section');
    aboutSection.id = 'abt-section';
    aboutSection.classList.add('abt-section');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('abt-title');
    aboutTitle.textContent = 'About';

    const aboutDescription = document.createElement('div');
    aboutDescription.classList.add('abt-desc');

    const descriptionHeading = document.createElement('h3');
    descriptionHeading.textContent = 'Hi there, my name is Vio.';

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('abt-text');
    descriptionParagraph.innerHTML = 'I am currently a college student with a strong interest in website development. I am passionate about creating visually appealing and user-friendly websites using various programming languages and technologies. Through my coursework and personal projects, I have gained a solid foundation in HTML, CSS, JavaScript, and other web development frameworks. <span class="enter"> I am excited about the opportunity to contribute my skills and knowledge to create engaging online experiences.';

    aboutDescription.appendChild(descriptionHeading);
    aboutDescription.appendChild(descriptionParagraph);

    const skillsContainer = document.createElement('div');
    skillsContainer.classList.add('abt-skills');

    const skillsTitle = document.createElement('h3');
    skillsTitle.textContent = 'Skills & Tools';

    const skillsInnerContainer = document.createElement('div');
    skillsInnerContainer.classList.add('abt-container');

    const skills = [
        { src: html5, text: 'HTML' },
        { src: css, text: 'CSS' },
        { src: js, text: 'JAVASCRIPT' },
        { src: webpack, text: 'WEBPACK' },
        { src: git, text: 'GIT' },
        { src: figma, text: 'FIGMA' }
    ];

    skills.forEach(skill => {
        const skillContainer = document.createElement('div');
        skillContainer.classList.add('abt-img');

        const skillImg = document.createElement('img');
        skillImg.src = skill.src;

        const skillSpan = document.createElement('span');
        skillSpan.textContent = skill.text;

        skillContainer.appendChild(skillImg);
        skillContainer.appendChild(skillSpan);
        skillsInnerContainer.appendChild(skillContainer);
    });

    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutDescription);
    skillsContainer.appendChild(skillsTitle);
    skillsContainer.appendChild(skillsInnerContainer);
    aboutSection.appendChild(skillsContainer);

    return aboutSection;
}

function createTopSection() {
    const topContainer = document.createElement('div');
    topContainer.classList.add('top-container');

    const topSection = document.createElement('section');
    topSection.classList.add('top-section');

    const navbar = createNavbar();
    topSection.appendChild(navbar);

    const openSection = createOpening();
    topSection.appendChild(openSection);

    const aboutSection = createAbout();
    topSection.appendChild(aboutSection);

    const waveSVG = document.createElement('div');
    waveSVG.classList.add('full-width-svg');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 1440 320');
    svg.classList.add('full-width-svg'); 

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', '#f9f4ef');
    path.setAttribute('fill-opacity', '1');
    path.setAttribute('d', 'M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,229.3C672,245,768,235,864,202.7C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z');

    svg.appendChild(path);
    waveSVG.appendChild(svg);
    
    topContainer.appendChild(topSection)
    topContainer.appendChild(waveSVG);
    document.body.appendChild(topContainer);
}

export default createTopSection;