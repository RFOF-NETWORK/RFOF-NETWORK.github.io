//======================================================================
// RFOF-NETWORK - Haupt-Anwendungslogik (Version Zenith 11.0)
// Steuert den voll-interaktiven BOxchain Explorer und das Account System.
//======================================================================

document.addEventListener('DOMContentLoaded', () => {

    const RFOF_APP = {}; // Globaler Namespace für unsere App-Instanzen

    // #================================================
    // # MODUL: AccountSystem
    // # FUNKTION: Verwaltet Login, Logout und die Anzeige des User-/Owner-Profils.
    // # ABHÄNGIGKEIT: Benötigt das DOM-Element #account-section in index.html.
    // #================================================
    class AccountSystem {
        constructor(target) {
            this.container = target;
            this.user = null;
            this.init();
        }

        init() { this.render(); }

        login(type, isOwner = false) {
            this.user = isOwner 
                ? { name: 'Satoramy', email: 'rfof236286@gmail.com', role: 'SATORAMY_PRIME', pfp: 'https://raw.githubusercontent.com/RFOF-NETWORK/RFOF-NETWORK/main/assets/rotating_cyber_brain.svg' }
                : { name: 'User_42', email: 'user@example.com', role: 'USER', pfp: `https://avatar.vercel.sh/User_42.svg?size=40` };
            this.render();
            if (RFOF_APP.explorer) RFOF_APP.explorer.render(); // Explorer neu rendern, um Owner-Rechte zu zeigen
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
            return `
                <div id="logged-out-view">
                    <button onclick="RFOF_APP.account.login('GitHub')">Mit GitHub</button>
                    <button onclick="RFOF_APP.account.login('Google')">Mit Google</button>
                    <button onclick="RFOF_APP.account.login('Microsoft')">Mit Microsoft</button>
                </div>`;
        }

        renderLoggedInView() {
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
                consoleContainer.innerHTML = `<div class="detail-view"><h4>${consoleTitle}</h4><p>Account: ${this.user.email}</p><button id="logout-btn">Logout</button></div>`;
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
    // # FUNKTION: Der hochinteraktive, datenreiche Blockchain-Explorer.
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
                    { txHash: '0x42abc...', from: '0xSatoramy...', to: '0xDAO...', value: '1,000,000 Bubatz-Coin', majoranaStatus: '✅ Geschützt', subHash: '0xMAJORANA_C1' },
                    { txHash: 'ARC-GEN-001', from: 'Bitcoin-Genesis', to: 'RFOF-Bridge', value: '21,000,000 rBTC', majoranaStatus: '✅ Kanonisiert' },
                    { txHash: 'ARC-FUS-001', from: 'TON-Bridge', to: 'RFOF-Bridge', value: '420,000 rTON', majoranaStatus: '✅ Kanonisiert' },
                    { txHash: 'ARC-GFS-001', from: 'Satoramy', to: 'RFOF-Kernel', value: '1 Einheit (BOx)', majoranaStatus: '⚛️ Fusioniert' }
                ],
                'AXF': [
                    { dataHash: '0xabc123...', type: '.cw (Log-Datei)', axiometixSize: '4.2 GQe', vector: 'A:0.2|X:0.9|F:0.8', isProtected: true, subHashes: Array(10).fill(0).map((_,i) => `0xsub_log_${i+1}...`) },
                    { dataHash: '0xdef456...', type: '.cw (User-Profil)', axiometixSize: '1.3 kQe', vector: 'A:0.5|X:0.5|F:0.9', isProtected: false, subHashes: Array(10).fill(0).map((_,i) => `0xsub_profile_${i+1}...`) }
                ]
            };
        }

        init() { this.render(); }
        isExplorerQuery(query) { return query.trim().startsWith('0x') || /^\d+$/.test(query.trim()); }
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
                        <td>${tx.value}</td>
                        <td>${tx.majoranaStatus}</td>
                    </tr>`;
                });
            } else { // AXF View
                tableHtml = `<table><thead><tr><th>Daten-Hash</th><th>Typ</th><th>Axiometix Größe</th><th>Zustand</th></tr></thead><tbody>`;
                data.AXF.forEach(d => {
                    let hashDisplay = d.isProtected && !isOwner
                        ? `<span class="hash-link protected">${d.dataHash.substring(0,10)}... (Geschützt)</span>`
                        : `<span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Daten', '${d.dataHash}')">${d.dataHash.substring(0,10)}...</span>`;
                    tableHtml += `<tr><td>${hashDisplay}</td><td>${d.type}</td><td>${d.axiometixSize}</td><td>${d.vector}</td></tr>`;
                });
            }
            return `<div class="explorer-results">${tableHtml}</tbody></table></div>`;
        }

        renderDetailView() {
            const isOwner = RFOF_APP.account?.user?.role === 'SATORAMY_PRIME';
            let detailContent = `<h4>Detailansicht für ${this.detailView.type}: ${this.detailView.id}</h4>`;
            let sourceItem;

            if (this.detailView.type === 'Transaktion') {
                sourceItem = this.dummyData.CTC.find(tx => tx.txHash === this.detailView.id);
                if (sourceItem && sourceItem.subHash) {
                    detailContent += `<h5>Verknüpfter Majorana-Anker:</h5><ul><li>${sourceItem.subHash}</li></ul>`;
                }
            } else if (this.detailView.type === 'Daten') {
                sourceItem = this.dummyData.AXF.find(d => d.dataHash === this.detailView.id);
                if (sourceItem && sourceItem.isProtected && !isOwner) {
                    detailContent = '<p style="color:red;">Zugriff auf geschützte Daten verweigert. Owner-Login erforderlich.</p>';
                } else if (sourceItem && sourceItem.subHashes) {
                    detailContent += '<h5>Verknüpfte Sub-Hashes (10):</h5><ul>';
                    sourceItem.subHashes.forEach(sh => { detailContent += `<li>${sh}</li>`; });
                    detailContent += '</ul>';
                }
            } else {
                 detailContent += '<p>Weitere Details zu dieser Adresse würden hier geladen.</p>';
            }

            return `<div class="detail-view">
                        ${detailContent}
                        <button id="back-to-list-btn" style="margin-top: 1rem;">← Zurück zur Übersicht</button>
                    </div>`;
        }

        addEventListeners() {
            if(this.detailView) {
                 document.getElementById('back-to-list-btn').addEventListener('click', () => { this.detailView = null; this.render(); });
            } else {
                document.getElementById('btn-ctc-view').addEventListener('click', () => { this.view = 'CTC'; this.render(); });
                document.getElementById('btn-axf-view').addEventListener('click', () => { this.view = 'AXF'; this.render(); });
                document.getElementById('explorer-search-btn').addEventListener('click', () => this.search(document.getElementById('explorer-search-input-internal').value));
                document.getElementById(this.view === 'CTC' ? 'btn-ctc-view' : 'btn-axf-view').classList.add('active');
            }
        }
    }

    // #================================================
    // # INITIALISIERUNG & GLOBALE ANBINDUNG
    // #================================================
    const accountTarget = document.getElementById('account-section');
    if(accountTarget) RFOF_APP.account = new AccountSystem(accountTarget);
    
    const explorerTarget = document.getElementById('boxchain-explorer-target');
    if (explorerTarget) {
        RFOF_APP.explorer = new BOxchainExplorer(explorerTarget);
        RFOF_APP.explorer.init();
    }
    
    // Globale Suchfunktion für das 'onclick'-Attribut im Haupt-HTML
    window.performPraiaiSearch = () => {
        if (RFOF_APP.explorer) {
            const query = document.getElementById('praiai-search-input').value;
            RFOF_APP.explorer.search(query);
        } else {
            const fallbackQuery = document.getElementById('praiai-search-input').value;
            window.open(`https://www.google.com/search?q=${encodeURIComponent(fallbackQuery)}`, '_blank');
        }
    };

    window.RFOF_APP = RFOF_APP;
});
    </script>
</body>
</html>
