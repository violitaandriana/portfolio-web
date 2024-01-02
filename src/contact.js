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
        {href: 'mailto:violitaandriana2003@gmail.com', target: '_blank', i: 'bxs-envelope', text: 'violitaandriana2003@gmail.com'},
        {href: 'https://github.com/violitaandriana', target: '_blank', i: 'bxl-github', text: '@violitaandriana'},
        {href: 'https://id.linkedin.com/in/violita-andriana-widharma-917a22219', target: '_blank', i: 'bxl-linkedin', text: 'Violita Andriana Widharma'}    
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

    document.body.appendChild(contactSection);
}

export default createContact;