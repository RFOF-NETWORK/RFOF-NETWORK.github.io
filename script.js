#================================================
# KANONISCHER CODE: Haupt-Anwendungslogik v11.0
# FUNKTION: Steuert alle interaktiven Module der ersten Säule.
# STATUS: Final, Zenith-Version.
#================================================

// Globale App-Kapselung, um alle Instanzen zu verwalten und Konflikte zu vermeiden
const RFOF_APP = {};

document.addEventListener('DOMContentLoaded', () => {

    // #================================================
    // # MODUL: AccountSystem
    // # FUNKTION: Verwaltet Login, Logout und die Anzeige des User-/Owner-Profils.
    // # ABHÄNGIGKEIT: Benötigt das DOM-Element #account-section.
    // #================================================
    class AccountSystem {
        constructor(target) {
            this.container = target;
            this.user = null; // Hält den Zustand des eingeloggten Nutzers
            this.init();
        }

        init() {
            this.render();
        }

        login(type, isOwner = false) {
            // Simuliert einen OAuth-Flow oder eine spezielle Owner-Anmeldung
            console.log(`Simuliere OAuth-Authentifizierung mit ${type}...`);
            this.user = isOwner 
                ? { name: 'Satoramy', email: 'rfof236286@gmail.com', role: 'SATORAMY_PRIME', pfp: 'https://raw.githubusercontent.com/RFOF-NETWORK/RFOF-NETWORK/main/assets/rotating_cyber_brain.svg' } 
                : { name: 'User_42', email: 'user@example.com', role: 'USER', pfp: `https://avatar.vercel.sh/User_42.svg?size=32` };
            this.render();
            if (RFOF_APP.explorer) RFOF_APP.explorer.render(); // Explorer neu rendern, um Owner-Rechte anzuzeigen
        }

        logout() {
            this.user = null;
            this.render();
            if (RFOF_APP.explorer) RFOF_APP.explorer.render();
        }

        render() {
            this.container.innerHTML = (this.user) ? this.renderLoggedInView() : this.renderLoggedOutView();
            this.addEventListeners();
        }

        renderLoggedOutView() {
            // Stellt die Login-Buttons dar, inklusive Microsoft
            return `
                <div id="logged-out-view">
                    <button onclick="RFOF_APP.account.login('GitHub')">Mit GitHub</button>
                    <button onclick="RFOF_APP.account.login('Google')">Mit Google</button>
                    <button onclick="RFOF_APP.account.login('Microsoft')">Mit Microsoft</button>
                </div>`;
        }

        renderLoggedInView() {
            // Stellt die eingeloggte Ansicht mit Profilbild und Button dar
            return `
                <div id="logged-in-view">
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
                // Dies ist die "Website in Website" für das Profil/Wallet
                consoleContainer.innerHTML = `
                    <div class="detail-view">
                        <h4>${consoleTitle} (${this.user.role})</h4>
                        <p><strong>Account:</strong> ${this.user.email}</p>
                        <p>Dies ist Ihre persönliche Ansicht zur Verwaltung Ihrer Wallet und Ihres Profils.</p>
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

    // #================================================
    // # MODUL: BOxchainExplorer (Zenith Version)
    // # FUNKTION: Der hochinteraktive, datenreiche Explorer.
    // # ABHÄNGIGKEIT: Benötigt #boxchain-explorer-target, interagiert mit AccountSystem.
    // #================================================
    class BOxchainExplorer {
        constructor(target) {
            this.container = target; 
            this.view = 'CTC'; 
            this.detailView = null;
            // ERWEITERTE DATENBANK mit ARC-Blöcken und Sub-Hashes
            this.dummyData = {
                'CTC': [
                    { txHash: '0x42abc...', from: '0xSatoramy...', to: '0xDAO...', value: '1,000,000 Bubatz-Coin', majoranaStatus: '✅ Geschützt', subHash: '0xSUB_CTC_42ABC' },
                    { txHash: 'ARC-GEN-001', from: 'Bitcoin-Genesis', to: 'RFOF-Bridge', value: '21,000,000 rBTC', majoranaStatus: '✅ Kanonisiert', subHash: '0xSUB_CTC_ARC_GEN' },
                    { txHash: 'ARC-FUS-001', from: 'TON-Bridge', to: 'RFOF-Bridge', value: '420,000 rTON', majoranaStatus: '✅ Kanonisiert', subHash: '0xSUB_CTC_ARC_FUS' },
                    { txHash: 'ARC-GFS-001', from: 'Satoramy', to: 'RFOF-Kernel', value: '1 Einheit (BOx)', majoranaStatus: '⚛️ Fusioniert', subHash: '0xSUB_CTC_ARC_GFS' }
                ],
                'AXF': [
                    { dataHash: '0xabc123...', type: '.cw (Log-Datei)', axiometixSize: '4.2 GQe', vector: 'A:0.2|X:0.9|F:0.8', isProtected: true, subHashes: Array(10).fill(0).map((_,i) => `0xSUB_AXF_ABC_${i+1}`) },
                    { dataHash: '0xdef456...', type: '.cw (User-Profil)', axiometixSize: '1.3 kQe', vector: 'A:0.5|X:0.5|F:0.9', isProtected: false, subHashes: Array(10).fill(0).map((_,i) => `0xSUB_AXF_DEF_${i+1}`) }
                ]
            };
        }

        init() { this.render(); }
        search(query) { this.detailView = null; this.render({ query }); }
        showDetailView(type, id) { this.detailView = { type, id }; this.render(); }
        async fetchData() { return new Promise(resolve => setTimeout(() => resolve(this.dummyData), 150)); }
        
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
                <h2>BOxchain RF&lt;-Explore-viewer-&gt;OF</h2>
                <div class="explorer-header">
                    <div class="explorer-top-row">
                        <div class="explorer-controls">
                            <button id="btn-ctc-view">CTC Explorer</button>
                            <button id="btn-axf-view">AXF Explorer</button>
                        </div>
                        <div class="explorer-actions">
                            <button onclick="alert('Token-Kreations-Modul wird geöffnet...')">Token Kreieren</button>
                            <button onclick="alert('Minting-Prozess wird gestartet...')">Minten</button>
                        </div>
                    </div>
                    <div class="explorer-search">
                       <input type="text" id="explorer-search-input-internal" placeholder="Suche Block, Hash, Adresse..." value="${query}">
                       <button id="explorer-search-btn">Suchen</button>
                    </div>
                </div>`;
        }

        renderListView(data) {
            const isOwner = RFOF_APP.account?.user?.role === 'SATORAMY_PRIME';
            let tableHtml;
            if (this.view === 'CTC') {
                tableHtml = `<table><thead><tr><th>Tx Hash</th><th>Von</th><th>Nach</th><th>Wert</th><th>Integrität</th></tr></thead><tbody>`;
                data.CTC.forEach(tx => {
                    tableHtml += `<tr>
                        <td><span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Transaktion', '${tx.txHash}')">${tx.txHash.substring(0,10)}...</span></td>
                        <td><span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Adresse', '${tx.from}')">${tx.from.substring(0,10)}...</span></td>
                        <td><span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Adresse', '${tx.to}')">${tx.to.substring(0,10)}...</span></td>
                        <td>${tx.value}</td><td>${tx.majoranaStatus}</td>
                    </tr>`;
                });
            } else { // AXF View
                tableHtml = `<table><thead><tr><th>Daten-Hash</th><th>Typ</th><th>Axiometix Größe</th><th>Zustand (A/F/X)</th></tr></thead><tbody>`;
                data.AXF.forEach(d => {
                    let hashDisplay = d.isProtected && !isOwner
                        ? `<span class="hash-link protected">${d.dataHash.substring(0,10)}... (Geschützt)</span>`
                        : `<span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Daten', '${d.dataHash}')">${d.dataHash.substring(0,10)}... ${isOwner ? '(Owner)' : ''}</span>`;
                    tableHtml += `<tr><td>${hashDisplay}</td><td>${d.type}</td><td>${d.axiometixSize}</td><td>${d.vector}</td></tr>`;
                });
            }
            return `<div class="explorer-results">${tableHtml}</tbody></table></div>`;
        }

        renderDetailView() {
            let detailContent = `<h4>Detailansicht: ${this.detailView.id}</h4>`;
            let sourceItem;
            if (this.detailView.type === 'Transaktion') {
                sourceItem = this.dummyData.CTC.find(tx => tx.txHash === this.detailView.id);
                detailContent += `<p><strong>Wert:</strong> ${sourceItem.value}</p><p><strong>Status:</strong> ${sourceItem.majoranaStatus}</p>`;
                if (sourceItem.subHash) {
                    detailContent += `<h5>Verknüpfter Majorana-Anker:</h5><ul><li>${sourceItem.subHash}</li></ul>`;
                }
            } else if (this.detailView.type === 'Daten') {
                const isOwner = RFOF_APP.account?.user?.role === 'SATORAMY_PRIME';
                sourceItem = this.dummyData.AXF.find(d => d.dataHash === this.detailView.id);
                if (sourceItem && sourceItem.isProtected && !isOwner) {
                    detailContent = '<p style="color:red;">Zugriff auf geschützte Daten verweigert. Owner-Login erforderlich.</p>';
                } else if (sourceItem && sourceItem.subHashes) {
                    detailContent += `<h5>Verknüpfte Sub-Hashes (${sourceItem.subHashes.length}):</h5><ul>`;
                    sourceItem.subHashes.forEach(sh => { detailContent += `<li>${sh}</li>`; });
                    detailContent += '</ul>';
                }
            } else {
                 detailContent += `<p>Weitere Details für Adresse ${this.detailView.id} würden hier geladen.</p>`;
            }
            return `<div class="explorer-results detail-view">${detailContent}<button id="back-to-list-btn">← Zurück zur Übersicht</button></div>`;
        }

        addEventListeners() {
            if (this.detailView) {
                 document.getElementById('back-to-list-btn').addEventListener('click', () => { this.detailView = null; this.render(); });
            } else {
                document.getElementById('btn-ctc-view').addEventListener('click', () => { if (this.view !== 'CTC') { this.view = 'CTC'; this.render(); } });
                document.getElementById('btn-axf-view').addEventListener('click', () => { if (this.view !== 'AXF') { this.view = 'AXF'; this.render(); } });
                document.getElementById('explorer-search-btn').addEventListener('click', () => this.search(document.getElementById('explorer-search-input-internal').value));
                document.getElementById(this.view === 'CTC' ? 'btn-ctc-view' : 'btn-axf-view').classList.add('active');
            }
        }
    }

    // #================================================
    // # INITIALISIERUNG & GLOBALE FUNKTIONEN
    // #================================================
    const accountTarget = document.getElementById('account-section');
    if (accountTarget) RFOF_APP.account = new AccountSystem(accountTarget);
    
    const explorerTarget = document.getElementById('boxchain-explorer-target');
    if (explorerTarget) RFOF_APP.explorer = new BOxchainExplorer(explorerTarget);
    
    // Globale Suchfunktion für das 'onclick'-Attribut im Haupt-HTML
    window.performPraiaiSearch = () => {
        const query = document.getElementById('praiai-search-input').value;
        if (RFOF_APP.explorer && RFOF_APP.explorer.isExplorerQuery(query)) {
            RFOF_APP.explorer.search(query);
        } else if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        }
    };

    window.RFOF_APP = RFOF_APP; // Mache die App global verfügbar
    RFOF_APP.explorer.init(); // Initialisiere den Explorer beim Laden
    RFOF_APP.account.init(); // Initialisiere das Account-System beim Laden
});
</script>

</body>
</html>
