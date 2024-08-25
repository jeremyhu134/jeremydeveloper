// scripts.js

// Function to handle fade-in on scroll
function fadeInOnScroll() {
    const projectLinks = document.querySelectorAll('.projects-container a');

    projectLinks.forEach(link => {
        const rect = link.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            link.classList.add('visible');
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', fadeInOnScroll);

// Initial check in case projects are already in view
fadeInOnScroll();