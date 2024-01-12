import weather from '../assets/weather.png';
import tdl from '../assets/tdl.png';
import library from '../assets/library.png';
import tictactoe from '../assets/tictactoe.png';
import calculator from '../assets/calculator.png';

function createProjects() {
    const projectsSection = document.createElement('section');
    projectsSection.id = 'projects-section';
    projectsSection.classList.add('projects-section');

    const projectsTitle = document.createElement('h2');
    projectsTitle.classList.add('projects-title');
    projectsTitle.textContent = 'Projects';

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');

    const projectCards = [
        {
            src: weather,
            h3: 'Weather App',
            desc: 'A simple weather app that uses WeatherAPI to deliver reliable and up-to-date weather information. You can access the current weather conditions of any desired location easily. By entering the name of a city or a specific location in the search bar, the app fetches data from the API and displays weather details such as temperature and a brief description of the weather conditions within 3 days.',
            tech: 'Made with HTML, CSS, JavaScript, Webpack',
            liveLink: 'https://violitaandriana.github.io/weather-app/',
            codeLink: 'https://github.com/violitaandriana/weather-app'
        },
        {
            src: tdl,
            h3: 'Todo List',
            desc: 'A user-friendly to-do list that offers three main categories: Inbox, Today, and Upcoming. The Inbox section allows users to capture and store all their tasks. The Today Tasks section provides a focused view of the tasks that need to be completed on the current day and the upcoming section helps users plan ahead by organizing tasks that are scheduled for future dates. Users can easily add, edit, and delete tasks within each category. It is work in progress.',
            tech: 'Made with HTML, CSS, JavaScript, Webpack',
            liveLink: 'https://violitaandriana.github.io/todolist-new/',
            codeLink: 'https://github.com/violitaandriana/todolist-new'
        },
        {
            src: library,
            h3: 'Library',
            desc: 'A dynamic library feature that allows users to manage their book collections effortlessly. With just a few clicks, users can add books to their library, complete with details such as title, author, and pages. Users can easily switch a book\'s status from "read" to "not read" and vice versa, reflecting their reading progress and preferences. Additionally, our intuitive interface allows users to delete books from their library, providing flexibility and customization.', tech: 'Made with HTML, CSS, JavaScript',
            liveLink: 'https://violitaandriana.github.io/library/',
            codeLink: 'https://github.com/violitaandriana/library'
        },
        {
            src: tictactoe,
            h3: 'Tic Tac Toe',
            desc: 'An exciting and addictive game of Tic-Tac-Toe which has user-friendly interface and intuitive gameplay. You will against a friend. Make your moves wisely and aim to create a winning combination of Xs or Os to claim victory. Get ready to test your skills and experience the thrill of this timeless classic on our website.',
            tech: 'Made with HTML, CSS, JavaScript',
            liveLink: 'https://violitaandriana.github.io/tic-tac-toe/',
            codeLink: 'https://github.com/violitaandriana/tic-tac-toe'
        },
        {
            src: calculator,
            h3: 'Calculator',
            desc: 'Our website offers a versatile and user-friendly calculator for all your mathematical needs. With its simple design and intuitive interface, performing calculations has never been easier. Whether you\'re adding numbers, subtracting, multiplying, or dividing, our calculator provides accurate results in an instant.',
            tech: 'Made with HTML, CSS, JavaScript',
            liveLink: 'https://violitaandriana.github.io/calculator-new/',
            codeLink: 'https://github.com/violitaandriana/calculator-new'
        },
    ];

    projectCards.forEach(card => {
        const project = document.createElement('div');
        project.classList.add('project');

        const leftSide = document.createElement('div');
        leftSide.classList.add('left-side');
        const img = document.createElement('img');
        img.src = card.src;
        leftSide.appendChild(img);

        const rightSide = document.createElement('div');
        rightSide.classList.add('right-side');
        const h3 = document.createElement('h3');
        h3.textContent = card.h3;

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = card.desc;

        const technology = document.createElement('p');
        technology.classList.add('tech');
        technology.textContent = card.tech;

        const liveButton = document.createElement('button');
        liveButton.classList.add('live-btn');
        const liveLink = document.createElement('a');
        liveLink.href = card.liveLink;
        liveLink.target = '_blank';
        liveLink.textContent = 'Live Preview';

        const codeButton = document.createElement('button');
        codeButton.classList.add('live-btn');
        const codeLink = document.createElement('a');
        codeLink.href = card.codeLink;
        codeLink.target = '_blank';
        codeLink.textContent = 'Source Code';

        const i = document.createElement('i');
        i.classList.add('bx', 'bx-right-arrow-alt');
        const i2 = document.createElement('i');
        i2.classList.add('bx', 'bx-right-arrow-alt');

        liveButton.appendChild(liveLink);
        liveButton.appendChild(i);
        codeButton.appendChild(codeLink);
        codeButton.appendChild(i2);

        rightSide.appendChild(h3);
        rightSide.appendChild(description);
        rightSide.appendChild(technology);
        rightSide.appendChild(liveButton);
        rightSide.appendChild(codeButton);

        project.appendChild(leftSide);
        project.appendChild(rightSide);

        projectsContainer.appendChild(project);
    });

    // View more button
    const viewMore = document.createElement('button');
    viewMore.classList.add('view-more-btn');

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/violitaandriana?tab=repositories';
    githubLink.target = '_blank';
    githubLink.textContent = 'View more';

    const symbol = document.createElement('i');
    symbol.classList.add('bx', 'bx-right-arrow-alt');

    viewMore.appendChild(githubLink);
    viewMore.appendChild(symbol);

    projectsSection.appendChild(projectsTitle);
    projectsSection.appendChild(projectsContainer);
    projectsSection.appendChild(viewMore);

    return projectsSection;
}

function createContact() {
    const contactSection = document.createElement('section');
    contactSection.id = 'contact-section';
    contactSection.classList.add('contact-section');

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = 'My Contact';

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const cards = [
        { href: 'mailto:violitaandriana2003@gmail.com', target: '_blank', i: 'bxs-envelope', text: 'violitaandriana2003@gmail.com' },
        { href: 'https://github.com/violitaandriana', target: '_blank', i: 'bxl-github', text: '@violitaandriana' },
        { href: 'https://id.linkedin.com/in/violita-andriana-widharma-917a22219', target: '_blank', i: 'bxl-linkedin', text: 'Violita Andriana Widharma' }
    ];

    cards.forEach(card => {
        const contactCard = document.createElement('div');
        contactCard.classList.add('contact-card');

        const a = document.createElement('a');
        a.href = card.href;
        a.target = card.target;

        const i = document.createElement('i');
        i.classList.add('bx', card.i);

        const span = document.createElement('span');
        span.textContent = card.text;

        a.appendChild(i);
        contactCard.appendChild(a);
        contactCard.appendChild(span);

        cardContainer.appendChild(contactCard);
    });
    contactSection.appendChild(contactTitle);
    contactSection.appendChild(cardContainer);

    return contactSection;
}

function createFooter() {
    const footer = document.createElement('footer');

    const span = document.createElement('span');
    span.className = 'year';
    span.textContent = new Date().getFullYear();

    const textNode = document.createTextNode(', Violita Andriana');

    footer.appendChild(document.createTextNode('© Copyright '));
    footer.appendChild(span);
    footer.appendChild(textNode);

    return footer;
}

function createBottomSection() {
    const bottomSection = document.createElement('div');
    bottomSection.classList.add('bottom-section');

    const projectsSection = createProjects();
    bottomSection.appendChild(projectsSection);

    const contactSection = createContact();
    bottomSection.appendChild(contactSection);

    const footerSection = createFooter();
    bottomSection.appendChild(footerSection);

    document.body.appendChild(bottomSection);
}

export default createBottomSection;