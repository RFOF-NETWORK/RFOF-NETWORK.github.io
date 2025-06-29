// KFR-2025 Orchestrator v1.0

document.addEventListener('DOMContentLoaded', () => {
    loadMainContent();
    initializeEventListeners();
});

async function loadMainContent() {
    const contentContainer = document.getElementById('content-container');
    if (!contentContainer) {
        console.error('Fehler: Content-Container nicht gefunden.');
        return;
    }

    try {
        const response = await fetch('content/main.md');
        if (!response.ok) throw new Error('Netzwerk-Antwort war nicht in Ordnung.');
        
        const markdown = await response.text();
        // Hier wird eine Markdown-zu-HTML-Bibliothek wie 'marked.js' benötigt.
        // Für dieses Beispiel simulieren wir es mit einer einfachen Umwandlung.
        contentContainer.innerHTML = markdown.replace(/\n/g, '<br>'); // Simplifizierte Darstellung

        // Nach dem Laden des Hauptinhalts, prüfen wir, ob der Explorer geladen werden soll.
        checkForExplorerTarget();

    } catch (error) {
        contentContainer.innerHTML = '<p>Fehler beim Laden des Inhalts. Bitte versuchen Sie es später erneut.</p>';
        console.error('Fehler beim Abrufen von main.md:', error);
    }
}

function initializeEventListeners() {
    // Hier werden globale Event-Listener hinzugefügt, z.B. für die Suche
    const searchButton = document.querySelector('#axiom-search-button'); // Annahme: ID der Such-Schaltfläche
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
}

function handleSearch() {
    // Implementierung des PZQQET Axiom-Suche v1.0 Protokolls
    // ...
    console.log('Suche ausgeführt...');
}

function checkForExplorerTarget() {
    const explorerTarget = document.querySelector('#boxchain-explorer-target');
    if (explorerTarget) {
        // Wenn das Ziel-Element existiert, laden wir das Explorer-Modul
        loadExplorerModule(explorerTarget);
    }
}

async function loadExplorerModule(targetElement) {
    try {
        // Lade das Loader-Skript, das dann den Rest des Moduls holt
        const loaderScript = document.createElement('script');
        loaderScript.src = 'modules/boxchain-explorer/explorer-loader.js';
        loaderScript.onload = () => {
            // Die globale Funktion `initExplorer` sollte vom Loader bereitgestellt werden
            if (window.initExplorer) {
                window.initExplorer(targetElement);
            }
        };
        document.body.appendChild(loaderScript);
    } catch (error) {
        console.error('Fehler beim Laden des Explorer-Moduls:', error);
    }
}
