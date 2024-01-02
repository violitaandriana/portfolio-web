import html5 from '../assets/html5.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import webpack from '../assets/webpack.png';
import git from '../assets/git.png';
import figma from '../assets/figma.png';

function createAbout() {
    const aboutSection = document.createElement('section');
    aboutSection.id = 'abt-section';
    aboutSection.classList.add('abt-section');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('abt-title');
    aboutTitle.textContent = 'About';

    const aboutDescription = document.createElement('div');
    aboutDescription.classList.add('abt-desc');

    const descriptionHeading = document.createElement('h4');
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

    // Append About Section to Body
    document.body.appendChild(aboutSection);
}

export default createAbout;