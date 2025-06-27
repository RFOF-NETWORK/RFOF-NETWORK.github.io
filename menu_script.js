document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navLinks');
    const body = document.body;

    // Toggle für das mobile Menü
    if (hamburger && navList) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Verhindert, dass der Klick sofort das Menü wieder schließt
            navList.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Schließe das Menü bei Klick auf einen Link oder außerhalb
    document.addEventListener('click', (event) => {
        if (navList.classList.contains('active')) {
            // Prüft, ob der Klick außerhalb der Navigation und des Hamburgers war
            if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
                navList.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // --- MANIFEST: PRAI Suchmaschinen-Funktionalität ---
    const searchInput = document.getElementById('praiai-search-input');
    const searchButton = document.querySelector('.praiai-search-button');

    // Funktion wird global deklariert, um via onclick im HTML erreichbar zu sein
    window.performPraiaiSearch = function() {
        const query = searchInput.value;
        if (query.trim() !== '') {
            // TODO: Implement PRAI-driven internal search results directly on this page.
            // Aktuelle Fallback-Lösung: Leitet zur Google-Suche weiter.
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        }
    }
});
