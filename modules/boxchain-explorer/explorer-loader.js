// explorer-loader.js

// Diese globale Funktion wird vom main.js Orchestrator aufgerufen
window.initExplorer = (targetElement) => {
    console.log('Initialisiere BOxchain Explorer...');
    
    // Lade das spezifische CSS für den Explorer
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'modules/boxchain-explorer/explorer.css';
    document.head.appendChild(link);

    // Lade das Haupt-Skript des Explorers
    const script = document.createElement('script');
    script.src = 'modules/boxchain-explorer/explorer.js';
    script.onload = () => {
        // Die Explorer-Klasse/Funktion sollte jetzt verfügbar sein
        if (window.BOxchainExplorer) {
            new window.BOxchainExplorer(targetElement).render();
        }
    };
    document.body.appendChild(script);
};
