// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Sample tournament data
    const tournaments = [
        { name: 'Valorant Spring Clash', date: '2025-04-01', prize: '$500' },
        { name: 'Fortnite Summer Showdown', date: '2025-06-15', prize: '$1000' },
        { name: 'CS:GO Winter Cup', date: '2025-12-10', prize: '$750' }
    ];

    // Populate tournament list
    const tournamentList = document.getElementById('tournamentList');
    tournaments.forEach(tournament => {
        const card = document.createElement('div');
        card.className = 'tournament-card';
        card.innerHTML = `
            <h3>${tournament.name}</h3>
            <p>Date: ${tournament.date}</p>
            <p>Prize: ${tournament.prize}</p>
        `;
        tournamentList.appendChild(card);
    });

    // Handle form submission
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const game = document.getElementById('game').value;

        // Here you would typically send this data to a server
        console.log('Registration:', { username, email, game });
        alert(`Thank you for registering, ${username}! We'll send details to ${email}.`);
        form.reset();
    });
});
