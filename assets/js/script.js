// Smooth scrolling navigation
const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

// Event listener for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(link.getAttribute('href'));
    });
});

// Form handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Here you can handle the form data, e.g. send it to a server
    console.log('Form submitted:', Object.fromEntries(formData));
});

// Interactive animations
const animateElements = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateElements);
// Initial call to animate elements
animateElements();