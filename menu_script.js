document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navLinks'); // Corrected ID to navLinks

    // Toggle for the main mobile menu
    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburger.classList.toggle('active'); // Add active class to hamburger for icon animation
        });
    }

    // Close mobile menu when a link is clicked
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Only close on mobile
                navList.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active'); // Reset hamburger icon
            }
        });
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (event) => {
        // Check if the click is outside the hamburger icon AND outside the nav list itself
        if (!hamburger.contains(event.target) && !navList.contains(event.target)) {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
            }
        }
    });

    // Handle resize to reset menu state
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navList.classList.remove('active'); // Ensure mobile menu is hidden on desktop
            if (hamburger) hamburger.classList.remove('active'); // Reset hamburger icon
        }
    });

    // --- Search Bar Functionality ---
    const searchInput = document.getElementById('praiai-search-input');
    const searchButton = document.querySelector('.praiai-search-button');

    function performPraiaiSearch() {
        const query = searchInput.value;
        if (query.trim() !== '') {
            // Redirect to Google search results
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }

    if (searchButton) {
        searchButton.addEventListener('click', performPraiaiSearch);
    }
    // Already handled onkeydown in HTML
});
