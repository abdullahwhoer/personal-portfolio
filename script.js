// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menu-items');

hamburger.addEventListener('click', () => {
    menuItems.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menuItems.contains(e.target)) {
        menuItems.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.menu-items a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuItems.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});