const primaryNav = document.querySelector('.primary-navigation');
const secondaryNav = document.querySelector('.secondary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.body;

// Toggle function for opening and closing nav menus
function toggleNav() {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        // Show primaryNav from left to right
        gsap.fromTo(primaryNav, { x: '-100%' }, { duration: 0.3, x: '0%', ease: "power2.out" });
        // nav items
        gsap.fromTo(".primary-nav-links li", { x: '-100%' }, { duration: 0.3,delay:0.1,stagger:0.1, x: '0%', ease: "power1.out" });

        // Show secondaryNav from right to left
        gsap.fromTo(secondaryNav, { x: '100%' }, { duration: 0.3, x: '0%', ease: "power2.out", delay: 0.2 });

        // Update attributes and aria-expanded
        primaryNav.setAttribute('data-visible', 'true');
        secondaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');

        // Add class to body to disable scrolling
        body.classList.add('no-scroll');
    } else {
        // Hide secondaryNav from left to right
        gsap.to(secondaryNav, { duration: 0.3, x: '100%', ease: "power2.in" });

        // Hide primaryNav from right to left after a delay
        gsap.to(primaryNav, { duration: 0.3, x: '-100%', ease: "power2.in", delay: 0.3 });

        // Update attributes and aria-expanded
        setTimeout(() => {
            primaryNav.setAttribute('data-visible', 'false');
            secondaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');

            // Remove class from body to enable scrolling
            body.classList.remove('no-scroll');
        }, 500); // Delay matches the GSAP animation duration
    }
}

// Add event listener to navToggle button
navToggle.addEventListener("click", toggleNav);

// Function to check if screen is mobile
function isMobileScreen() {
    return window.innerWidth <= 767; // Adjust as per your responsive design breakpoints
}

// Add event listeners to links inside primary-nav-links only on mobile
if (isMobileScreen()) {
    const primaryNavLinks = document.querySelectorAll('.primary-nav-links a');
    primaryNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Call toggleNav to close both primaryNav and secondaryNav
            toggleNav();
        });
    });
}
