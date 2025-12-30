/**
 * Optimo SEO Demo - Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
    // Tab Navigation
    initTabs();

    // Separator Preview Update
    initSeparatorPreview();

    // Smooth Scroll
    initSmoothScroll();

    // Navbar Scroll Effect
    initNavbarScroll();

    // Animate on Scroll
    initScrollAnimations();
});

/**
 * Initialize Tab Navigation
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/**
 * Initialize Separator Preview Update
 */
function initSeparatorPreview() {
    const separatorSelect = document.getElementById('separator-select');
    const titlePreview = document.getElementById('title-preview');

    if (separatorSelect && titlePreview) {
        separatorSelect.addEventListener('change', function () {
            const separator = this.value;
            titlePreview.textContent = `My Post ${separator} Your Site Name`;
        });
    }
}

/**
 * Initialize Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize Navbar Scroll Effect
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            navbar.style.padding = '12px 0';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.8)';
            navbar.style.padding = '20px 0';
        }
    });
}

/**
 * Initialize Scroll Animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe pricing cards
    document.querySelectorAll('.pricing-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`;
        observer.observe(card);
    });
}

/**
 * Show Save Notification Toast
 */
function showSaveNotification() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Toggle Sidebar Menu Item (for mobile)
 */
function toggleSidebarItem(element) {
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// Add click handlers to sidebar menu items for demo purposes
document.querySelectorAll('.sidebar-menu li').forEach(item => {
    item.addEventListener('click', function () {
        toggleSidebarItem(this);
    });
});

// Prevent form submission on enter
document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});

// Live title format preview
const titleFormatInput = document.querySelector('input[value="%post_title% | %site_name%"]');
if (titleFormatInput) {
    titleFormatInput.addEventListener('input', function () {
        const preview = document.getElementById('title-preview');
        const separator = document.getElementById('separator-select').value;

        let format = this.value
            .replace('%post_title%', 'My Post')
            .replace('%site_name%', 'Your Site Name')
            .replace('%separator%', separator);

        preview.textContent = format;
    });
}

// Console Easter Egg
console.log('%c🚀 Optimo SEO', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cAutomatic SEO for WordPress', 'font-size: 14px; color: #a1a1aa;');
console.log('%cBuilt with ❤️ by Wanderhub', 'font-size: 12px; color: #71717a;');
