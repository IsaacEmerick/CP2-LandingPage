document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('#hero h1');
    heroTitle.classList.add('animate-fade-in');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('Por favor, preencha todos os campos.');
    }
});