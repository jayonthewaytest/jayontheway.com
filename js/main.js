// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('#mainNav').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/Hide Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Back to Top Button
document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const orderId = this.querySelector('input[placeholder*="Order"]').value;
        const message = this.querySelector('textarea').value;

        // Here you would typically send this data to a server
        // For now, we'll just show an alert
        alert('Thank you for contacting us! We will respond within 24 hours.');

        // Reset form
        this.reset();
    });
}

// Jobs Alert Form Handling
const alertsButton = document.querySelector('.alerts-section .btn-danger');
if (alertsButton) {
    alertsButton.addEventListener('click', function () {
        const emailInput = this.previousElementSibling;
        const email = emailInput.value;

        if (email && validateEmail(email)) {
            alert('Thank you! You have been subscribed to job and business alerts.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Active Navigation Link Highlighting
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    const navbarHeight = document.querySelector('#mainNav').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Roadmap Card Hover Effects (Enhanced)
document.addEventListener('DOMContentLoaded', function () {
    const roadmapCards = document.querySelectorAll('.roadmap-card');

    roadmapCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Prevent form submission for testing (remove in production)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
});

// Console log for debugging
console.log('Jay On The Way - Website Loaded Successfully!');
console.log('All scripts initialized.');

// Add smooth transitions to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.style.transition = 'all 0.3s ease';
});

// Newsletter subscription simulation (replace with actual API call)
function subscribeNewsletter(email) {
    if (validateEmail(email)) {
        // Here you would send the email to your backend/email service
        console.log('Subscribing email:', email);
        return true;
    }
    return false;
}

// Add loading animation for buttons on click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        if (!this.classList.contains('loading')) {
            const originalText = this.innerHTML;
            this.classList.add('loading');
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('loading');
            }, 1000);
        }
    });
});