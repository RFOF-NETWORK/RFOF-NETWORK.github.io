// explorer-loader.js
/* Diese Stile werden vom loader.js dynamisch geladen und sind hier für die Vollständigkeit aufgeführt */
#boxchain-explorer-target {
    margin-top: 1rem;
    padding: 1.5rem 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fdfdfd;
}
/* ... Fügen Sie hier die restlichen, bereits definierten Explorer-Stile ein ... */

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
