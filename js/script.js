// Hero Category Buttons
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // You can add logic here to filter content based on category
        const category = this.textContent.toLowerCase();
        console.log('Selected category:', category);
    });
});

// Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Sticky Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal, .trust-card, .why-card, .step-card, .service-card, .testimonial-card, .service-speak-card, .upcoming-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Service Selection - Book This Service buttons
const bookServiceButtons = document.querySelectorAll('.btn-book-service, .snake-btn');
const serviceSelect = document.getElementById('service');
const bookingSection = document.getElementById('booking');

// Projects Section Interactive
const projectItems = document.querySelectorAll('.project-item');
const projectCards = document.querySelectorAll('.project-card');

projectItems.forEach(item => {
    item.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        
        // Remove active class from all items
        projectItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        this.classList.add('active');
        
        // Hide all project cards
        projectCards.forEach(card => card.classList.remove('active'));
        // Show selected project card
        const selectedCard = document.getElementById(projectId);
        if (selectedCard) {
            selectedCard.classList.add('active');
        }
    });
});

bookServiceButtons.forEach(button => {
    button.addEventListener('click', function() {
        const serviceValue = this.getAttribute('data-service');
        
        // Set the service in the dropdown
        if (serviceSelect) {
            serviceSelect.value = serviceValue;
        }
        
        // Scroll to booking section
        if (bookingSection) {
            bookingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Booking Form Validation
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('location').value.trim();
        
        // Validate
        let isValid = true;
        
        if (!fullName) {
            isValid = false;
            showError('fullName', 'Please enter your full name');
        }
        
        if (!phone) {
            isValid = false;
            showError('phone', 'Please enter your phone number');
        }
        
        if (!email || !isValidEmail(email)) {
            isValid = false;
            showError('email', 'Please enter a valid email address');
        }
        
        if (!service) {
            isValid = false;
            showError('service', 'Please select a service');
        }
        
        if (!date) {
            isValid = false;
            showError('date', 'Please select a preferred date');
        }
        
        if (!time) {
            isValid = false;
            showError('time', 'Please select a preferred time');
        }
        
        if (!location) {
            isValid = false;
            showError('location', 'Please enter your location');
        }
        
        if (isValid) {
            // Show success message
            bookingForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Reset form
            bookingForm.reset();
        }
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.style.borderColor = '#ff4444';
        
        // Remove error after 3 seconds
        setTimeout(() => {
            field.style.borderColor = '#e0e0e0';
        }, 3000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Reset Booking Form
function resetForm() {
    const bookingForm = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');
    
    if (bookingForm && successMessage) {
        bookingForm.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const contactSuccessMessage = document.getElementById('contactSuccessMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const contactName = document.getElementById('contactName').value.trim();
        const contactPhone = document.getElementById('contactPhone').value.trim();
        const contactEmail = document.getElementById('contactEmail').value.trim();
        const contactSubject = document.getElementById('contactSubject').value.trim();
        const contactMessage = document.getElementById('contactMessage').value.trim();
        
        // Validate
        let isValid = true;
        
        if (!contactName) {
            isValid = false;
            showContactError('contactName', 'Please enter your full name');
        }
        
        if (!contactPhone) {
            isValid = false;
            showContactError('contactPhone', 'Please enter your phone number');
        }
        
        if (!contactEmail || !isValidEmail(contactEmail)) {
            isValid = false;
            showContactError('contactEmail', 'Please enter a valid email address');
        }
        
        if (!contactSubject) {
            isValid = false;
            showContactError('contactSubject', 'Please enter a subject');
        }
        
        if (!contactMessage) {
            isValid = false;
            showContactError('contactMessage', 'Please enter your message');
        }
        
        if (isValid) {
            // Show success message
            contactForm.style.display = 'none';
            contactSuccessMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
        }
    });
}

function showContactError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.style.borderColor = '#ff4444';
        
        // Remove error after 3 seconds
        setTimeout(() => {
            field.style.borderColor = '#e0e0e0';
        }, 3000);
    }
}

// Reset Contact Form
function resetContactForm() {
    const contactForm = document.getElementById('contactForm');
    const contactSuccessMessage = document.getElementById('contactSuccessMessage');
    
    if (contactForm && contactSuccessMessage) {
        contactForm.style.display = 'block';
        contactSuccessMessage.style.display = 'none';
    }
}

// Dynamic Current Year
const currentYearElements = document.querySelectorAll('#currentYear');
currentYearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Active Navigation Link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        link.classList.remove('active');
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('load', setActiveNavLink);
window.addEventListener('popstate', setActiveNavLink);

// Set minimum date for booking form to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Form input validation styling
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() !== '') {
            this.style.borderColor = '#4CAF50';
        } else {
            this.style.borderColor = '#e0e0e0';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#1e90ff';
    });
});

// Initialize all features on page load
document.addEventListener('DOMContentLoaded', function() {
    revealOnScroll();
    setActiveNavLink();
    
    // Add reveal class to elements that should animate
    const animateElements = document.querySelectorAll('.trust-card, .why-card, .step-card, .service-card, .testimonial-card, .service-speak-card, .upcoming-card');
    animateElements.forEach(element => {
        element.classList.add('reveal');
    });
});