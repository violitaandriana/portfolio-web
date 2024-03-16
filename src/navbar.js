function createNavbar() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.id = "navbar-menu";

    // Hamburger Menu
    const div = document.createElement("div");
    div.classList.add("nav-hamburger-btn");

    const i = document.createElement("i");
    i.classList.add("bx", "bx-menu");
    div.appendChild(i);

    // Nav List
    // 1. Nav Contact
    const ulContact = document.createElement('ul');
    ulContact.className = 'nav-menu-list nav-contact';

    const liContact1 = document.createElement('li');

    const aContact1 = document.createElement('a');
    aContact1.href = 'https://github.com/violitaandriana';
    aContact1.target = '_blank';

    const iContact1 = document.createElement('i');
    iContact1.className = 'bx bxl-github';

    aContact1.appendChild(iContact1);
    liContact1.appendChild(aContact1);

    const liContact2 = document.createElement('li');

    const aContact2 = document.createElement('a');
    aContact2.href = 'https://id.linkedin.com/in/violita-andriana-widharma-917a22219';
    aContact2.target = '_blank';

    const iContact2 = document.createElement('i');
    iContact2.className = 'bx bxl-linkedin';

    aContact2.appendChild(iContact2);
    liContact2.appendChild(aContact2);

    ulContact.appendChild(liContact1);
    ulContact.appendChild(liContact2);

    // 2. Nav Lists
    // About
    const ulLists = document.createElement('ul');
    ulLists.className = 'nav-menu-list nav-lists';

    const li1 = document.createElement("li");
    li1.classList.add("nav-list");

    const a1 = document.createElement("a");
    a1.classList.add("nav-link");
    a1.href = "#abt-section";
    a1.textContent = "About";

    li1.appendChild(a1);
    ulLists.appendChild(li1);

    // Projects
    const li2 = document.createElement("li");
    li2.classList.add("nav-list");

    const a2 = document.createElement("a");
    a2.classList.add("nav-link");
    a2.href = "#projects-section";
    a2.textContent = "Projects";

    li2.appendChild(a2);
    ulLists.appendChild(li2);

    // Contact
    const li3 = document.createElement("li");
    li3.classList.add("nav-list");

    const a3 = document.createElement("a");
    a3.classList.add("nav-link");
    a3.href = "#contact-section";
    a3.textContent = "Contact";

    li3.appendChild(a3);
    ulLists.appendChild(li3);

    navbar.appendChild(div);
    navbar.appendChild(ulContact);
    navbar.appendChild(ulLists);

    return navbar;
}

export default createNavbar;