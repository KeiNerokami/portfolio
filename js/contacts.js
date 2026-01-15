const CONTACTS = [
    {
        id: 'discord',
        name: 'Discord',
        icon: 'bi-discord',
        userId: '1006187617987068014',
        url: 'https://discordapp.com/users/1006187617987068014',
        theme: '#5865F2',
        apiUrl: 'https://discord.com/api/users/1006187617987068014'
    },
    {
        id: 'github',
        name: 'GitHub',
        icon: 'bi-github',
        username: 'KeiNerokami',
        url: 'https://github.com/KeiNerokami',
        theme: '#ffffff',
        apiUrl: 'https://api.github.com/users/KeiNerokami'
    },
    {
        id: 'facebook',
        name: 'Facebook',
        icon: 'bi-facebook',
        url: 'https://www.facebook.com/Royal.HinokamiRei',
        theme: '#1877F2',
        displayName: 'Royal.HinokamiRei'
    },
    {
        id: 'email',
        name: 'Email',
        icon: 'bi-envelope',
        email: 'unknown.bit.609@gmail.com',
        url: 'mailto:unknown.bit.609@gmail.com',
        theme: '#FF6B6B',
        displayName: 'unknown.bit.609@gmail.com'
    }
];

async function fetchContactProfiles() {
    const container = document.getElementById('contacts-container');
    container.innerHTML = '';

    for (const contact of CONTACTS) {
        let displayName = contact.name;

        // Fetch GitHub profile
        if (contact.id === 'github') {
            try {
                const response = await fetch(contact.apiUrl);
                if (response.ok) {
                    const data = await response.json();
                    displayName = data.name || data.login || contact.name;
                }
            } catch (error) {
                console.error('Error fetching GitHub profile:', error);
            }
        }
        // Email and Facebook don't need API fetch
        else if (contact.id === 'email' || contact.id === 'facebook') {
            displayName = contact.displayName;
        }
        // Discord would need token, so we'll just use the name
        else if (contact.id === 'discord') {
            displayName = 'Discord User';
        }

        createContactCard(contact, displayName);
    }
}

function createContactCard(contact, displayName) {
    const container = document.getElementById('contacts-container');
    
    const card = document.createElement('div');
    card.className = 'contact-card';
    card.dataset.theme = contact.theme;
    card.dataset.id = contact.id;
    card.style.setProperty('--theme-color', contact.theme);
    
    card.innerHTML = `
        <div class="contact-content">
            <i class="bi ${contact.icon} contact-icon"></i>
            <h3 class="contact-platform">${contact.name}</h3>
            <p class="contact-name">${displayName}</p>
        </div>
        <button class="contact-btn" onclick="window.open('${contact.url}', '_blank')">
            Connect
        </button>
    `;
    
    container.appendChild(card);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchContactProfiles();
});
