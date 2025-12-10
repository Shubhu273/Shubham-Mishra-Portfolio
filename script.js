// Modal Functions
function openModal(title, desc) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('projectModal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    if (name && email && phone && message) {
        alert('Thank you for reaching out! I\'ll get back to you soon.');
        // Here, integrate with a service like EmailJS or a backend to send the email
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('#navMenu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Close menu after clicking
        toggleMenu();
    });
});

// Menu Toggle Functionality
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

function toggleMenu() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && !document.querySelector('.menu-container').contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Scroll to Top
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
