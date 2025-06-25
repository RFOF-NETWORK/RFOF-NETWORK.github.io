document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const dropdownToggles = document.querySelectorAll('.nav-list li.has-dropdown > a');

    // Toggle for the main mobile menu
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Add active class to menu-toggle for potential icon animation
        });
    }

    // Toggle for dropdown sub-menus on mobile (if any)
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) { // Only on mobile
                e.preventDefault(); // Prevent default link behavior if it's a dropdown toggle
                const dropdownMenu = toggle.nextElementSibling;
                if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });

    // Close mobile menu when a link is clicked
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Only close on mobile
                navList.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        });
    });

    // Close menus if clicked outside
    document.addEventListener('click', (event) => {
        if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
            navList.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        }
    });

    // Handle resize to reset menu state
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navList.classList.remove('active'); // Ensure mobile menu is hidden on desktop
            if (menuToggle) menuToggle.classList.remove('active');
            // Ensure all dropdowns are hidden on desktop, then shown on hover via CSS
            document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
                dropdown.style.display = ''; // Reset to CSS default (hidden then hover)
            });
        }
    });
});
