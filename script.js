//======================================================================
// RFOF-NETWORK - Haupt-Anwendungslogik v5.0 (Final)
// Steuert den BOxchain Explorer und das Account System für Säule 1
//======================================================================

// Globale App-Kapselung, um alle Instanzen zu verwalten und Konflikte zu vermeiden
const RFOF_APP = {};

// Initialisiert die gesamte Anwendung, sobald die HTML-Struktur bereit ist
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Die AccountSystem-Klasse verwaltet den gesamten Login-, Registrierungs-
     * und Profil-Anzeige-Prozess.
     */
    class AccountSystem {
        constructor(target) {
            this.container = target;
            this.user = null; // Hält den Zustand des eingeloggten Nutzers
            this.init();
        }

        init() {
            this.render();
        }

        // Simuliert den Login-Prozess für verschiedene Provider
        login(type, isOwner = false) {
            console.log(`Simuliere OAuth-Login mit ${type}...`);
            // Im echten Betrieb würde hier der OAuth-Flow stattfinden
            this.user = isOwner ? 
                { name: 'Satoramy', email: 'rfof236286@gmail.com', role: 'SATORAMY_PRIME', pfp: 'https://raw.githubusercontent.com/RFOF-NETWORK/RFOF-NETWORK/main/assets/rotating_cyber_brain.svg' } :
                { name: 'User_42', email: 'user@example.com', role: 'USER', pfp: `https://avatar.vercel.sh/${Math.random()}.svg?text=U` };
            this.render();
            if (RFOF_APP.explorer) RFOF_APP.explorer.render(); // Explorer neu rendern, um Owner-Rechte anzuzeigen
        }

        logout() {
            this.user = null;
            const consoleContainer = document.getElementById('profile-console-container');
            if(consoleContainer) consoleContainer.innerHTML = '';
            this.render();
            if (RFOF_APP.explorer) RFOF_APP.explorer.render();
        }

        // Baut die HTML-Struktur je nach Login-Status
        render() {
            const html = (this.user) ? this.renderLoggedInView() : this.renderLoggedOutView();
            this.container.innerHTML = html;
            this.addEventListeners();
        }

        renderLoggedOutView() {
            return `
                <div id="logged-out-view">
                    <p>Loggen Sie sich ein, um alle Features des Explorers freizuschalten.</p>
                    <button onclick="RFOF_APP.account.login('GitHub')">Mit GitHub</button>
                    <button onclick="RFOF_APP.account.login('Google')">Mit Google</button>
                    <button onclick="RFOF_APP.account.login('Microsoft')">Mit Microsoft</button>
                    <button onclick="RFOF_APP.account.login('Satoramy', true)" title="Spezial-Login für den Erbauer">Owner Login</button>
                </div>`;
        }

        renderLoggedInView() {
            return `
                <div id="logged-in-view" style="display: flex;">
                    <img src="${this.user.pfp}" alt="Profilbild">
                    <span>Willkommen, <strong>${this.user.name}</strong></span>
                    <button id="profile-btn">Profil / Console</button>
                </div>
                <div id="profile-console-container"></div>`;
        }

        toggleProfileConsole() {
            const consoleContainer = document.getElementById('profile-console-container');
            if (consoleContainer.innerHTML === '') {
                const consoleTitle = this.user.role === 'SATORAMY_PRIME' ? 'Mothership-Konsole' : 'RFOF-Console';
                consoleContainer.innerHTML = `
                    <div class="console-view">
                        <h4>${consoleTitle} (${this.user.role})</h4>
                        <p><strong>Account:</strong> ${this.user.email}</p>
                        <p>Hier wäre Ihre persönliche Profil-, Wallet- und (für Owner) Motherboard-Ansicht.</p>
                        <button id="logout-btn">Logout</button>
                    </div>`;
                document.getElementById('logout-btn').addEventListener('click', () => this.logout());
            } else {
                consoleContainer.innerHTML = '';
            }
        }

        addEventListeners() {
            if (this.user) {
                document.getElementById('profile-btn').addEventListener('click', () => this.toggleProfileConsole());
            }
        }
    }

    /**
     * Die BOxchainExplorer-Klasse steuert die gesamte Funktionalität des Explorers,
     * einschließlich der verschiedenen Ansichten und der "Website in Website"-Logik.
     */
    class BOxchainExplorer {
        constructor(target) {
            this.container = target;
            this.view = 'CTC'; // Standardansicht
            this.detailView = null; // Hält den Zustand für die Detailansicht
            // "Datierte" Hashes und Blöcke als simulierte Datenbank
            this.dummyData = {
                'CTC': [
                    { txHash: '0x42abc...', from: '0xSatoramy...', to: '0xDAO...', value: '420 CTC', majoranaStatus: '✅ Geschützt' },
                    { txHash: '0x00def...', from: '0xBridge...', to: '0xUserWallet...', value: '1.2 rBTC', majoranaStatus: '✅ Geschützt' }
                ],
                'AXF': [
                    { dataHash: '0xabc123...', type: '.cw (Log-Datei)', axiometixSize: '4.2 Giga-QuEkta', vector: 'A:0.2|X:0.9|F:0.8', isProtected: true },
                    { dataHash: '0xdef456...', type: '.cw (User-Profil)', axiometixSize: '1.3 Kilo-QuEkta', vector: 'A:0.5|X:0.5|F:0.9', isProtected: false }
                ]
            };
        }

        init() { this.render(); }

        isExplorerQuery(query) { return query.trim().startsWith('0x') || /^\d+$/.test(query.trim()); }

        search(query) {
            this.detailView = null; // Jede neue Suche setzt die Detailansicht zurück
            this.render({ query });
        }

        showDetailView(type, id) {
            this.detailView = { type, id };
            this.render();
        }

        async fetchData() {
            // Simuliert das Abrufen von Daten von der BOxchain-API
            return new Promise(resolve => setTimeout(() => resolve(this.dummyData), 250));
        }
        
        render(params = {}) {
            this.fetchData().then(data => {
                let html = this.renderHeader(params.query || '');
                html += this.detailView ? this.renderDetailView() : this.renderListView(data);
                this.container.innerHTML = html;
                this.addEventListeners();
            });
        }
        
        renderHeader(query) {
            return `
                <div class="explorer-header">
                    <div class="explorer-controls">
                        <button id="btn-ctc-view" class="${this.view === 'CTC' && !this.detailView ? 'active' : ''}">CTC Explorer</button>
                        <button id="btn-axf-view" class="${this.view === 'AXF' && !this.detailView ? 'active' : ''}">AXF Explorer</button>
                    </div>
                    <div class="explorer-search">
                       <input type="text" id="explorer-search-input" placeholder="Block, Hash, Adresse..." value="${query}">
                       <button id="explorer-search-btn">Suchen</button>
                    </div>
                </div>`;
        }

        renderListView(data) {
            const isOwner = RFOF_APP.account?.user?.role === 'SATORAMY_PRIME';
            let tableHtml = '';
            if (this.view === 'CTC') {
                tableHtml = `<table><thead><tr><th>Tx Hash</th><th>Von</th><th>Nach</th><th>Wert</th><th>Integrität</th></tr></thead><tbody>`;
                data.CTC.forEach(tx => {
                    tableHtml += `<tr><td><span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Transaktion', '${tx.txHash}')">${tx.txHash}</span></td><td><span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Adresse', '${tx.from}')">${tx.from}</span></td><td><span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Adresse', '${tx.to}')">${tx.to}</span></td><td>${tx.value}</td><td>${tx.majoranaStatus}</td></tr>`;
                });
            } else { // AXF View
                tableHtml = `<table><thead><tr><th>Daten-Hash</th><th>Typ</th><th>Axiometix Größe</th><th>Zustand (A/X/F)</th></tr></thead><tbody>`;
                data.AXF.forEach(d => {
                    let hashDisplay = d.isProtected 
                        ? (isOwner ? `<span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Daten', '${d.dataHash}')">${d.dataHash} (Owner-Ansicht)</span>` : `<span class="hash-link protected">${d.dataHash} (Geschützt)</span>`)
                        : `<span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Daten', '${d.dataHash}')">${d.dataHash}</span>`;
                    tableHtml += `<tr><td>${hashDisplay}</td><td>${d.type}</td><td>${d.axiometixSize}</td><td>${d.vector}</td></tr>`;
                });
            }
            return `<div class="explorer-results">${tableHtml}</tbody></table></div>`;
        }

        renderDetailView() {
            return `<div class="explorer-results">
                        <button id="back-to-list-btn">← Zurück zur Übersicht</button>
                        <h3>Detailansicht: ${this.detailView.id}</h3>
                        <p>Dies ist die "Website in Website"-Ansicht. Hier würden die spezifischen Live-Daten für ${this.detailView.type} <strong>${this.detailView.id}</strong> geladen, ohne die Hauptseite neu zu laden.</p>
                    </div>`;
        }

        addEventListeners() {
            if(this.detailView) {
                 document.getElementById('back-to-list-btn').addEventListener('click', () => { this.detailView = null; this.render(); });
            } else {
                document.getElementById('btn-ctc-view').addEventListener('click', () => { if(this.view !== 'CTC') { this.view = 'CTC'; this.render(); } });
                document.getElementById('btn-axf-view').addEventListener('click', () => { if(this.view !== 'AXF') { this.view = 'AXF'; this.render(); } });
                document.getElementById('explorer-search-btn').addEventListener('click', () => this.search(document.getElementById('explorer-search-input').value));
            }
        }
    }

    // ################### INITIALISIERUNG DER MODULE ###################
    
    const explorerTarget = document.getElementById('boxchain-explorer-target');
    if (explorerTarget) {
        RFOF_APP.explorer = new BOxchainExplorer(explorerTarget);
        RFOF_APP.explorer.init();
    }

    const accountTarget = document.getElementById('account-section');
    if(accountTarget) {
        RFOF_APP.account = new AccountSystem(accountTarget);
    }

    // Globale Suchfunktion für das 'onclick' im Haupt-HTML
    window.performPraiaiSearch = () => {
        if (RFOF_APP.explorer) {
            const query = document.getElementById('praiai-search-input').value;
            RFOF_APP.explorer.search(query);
        } else {
             // Fallback, falls das Explorer-Modul nicht geladen werden konnte
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(googleSearchUrl, '_blank');
        }
    };
});
