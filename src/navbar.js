function createNavbar() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.id = "navbar-menu";

    const ul = document.createElement("ul");
    ul.classList.add("nav-menu-list");
    ul.id = "nav-menu-list";

    // About
    const li1 = document.createElement("li");
    li1.classList.add("nav-list");

    const a1 = document.createElement("a");
    a1.classList.add("nav-link");
    a1.href = "#abt-section";
    a1.textContent = "About";

    li1.appendChild(a1);
    ul.appendChild(li1);

    // Projects
    const li2 = document.createElement("li");
    li2.classList.add("nav-list");

    const a2 = document.createElement("a");
    a2.classList.add("nav-link");
    a2.href = "#projects-section";
    a2.textContent = "Projects";

    li2.appendChild(a2);
    ul.appendChild(li2);

    // Contact
    const li3 = document.createElement("li");
    li3.classList.add("nav-list");

    const a3 = document.createElement("a");
    a3.classList.add("nav-link");
    a3.href = "#contact-section";
    a3.textContent = "Contact";

    li3.appendChild(a3);
    ul.appendChild(li3);

    navbar.appendChild(ul);

    // Hamburger Menu
    const div = document.createElement("div");
    div.classList.add("nav-hamburger-btn");

    const i = document.createElement("i");
    i.classList.add("bx", "bx-menu");
    div.appendChild(i);

    navbar.appendChild(div);

    // Append Navbar to Body
    document.body.appendChild(navbar);
}

export default createNavbar;