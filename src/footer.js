function createFooter() {
    const footer = document.createElement('FOOTER');
    footer.classList.add('footer');
    footer.textContent = '© Copyright 2023, Violita Andriana';

    // Append Footer to Body
    document.body.appendChild(footer);
}   

export default createFooter;