#================================================
# MODUL: Globale Navigation - Logik
# FUNKTION: Steuert das Öffnen und Schließen des mobilen Hamburger-Menüs.
# STATUS: Kanonisch, unverändert.
#================================================

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navLinks');

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
});
