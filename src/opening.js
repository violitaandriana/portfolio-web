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

    // Append Open Section to Body
    document.body.appendChild(openSection);
}

export default createOpening;