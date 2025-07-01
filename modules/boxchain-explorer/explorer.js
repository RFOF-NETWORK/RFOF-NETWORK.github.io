// explorer.js
// Die vollständige Logik für den interaktiven BOxchain Explorer.

// Globaler Namespace für Module
window.RFOF_MODULES = window.RFOF_MODULES || {};

window.RFOF_MODULES.explorer = {
    init: function(target) {
        // Erstelle eine Instanz der Explorer-Klasse und speichere sie global
        window.RFOF_APP.explorer = new this.BOxchainExplorer(target);
        window.RFOF_APP.explorer.render();
    },

    BOxchainExplorer: class {
        constructor(targetElement) {
            this.container = targetElement;
            this.view = 'CTC'; // Standardansicht
            this.detailView = null; // Für Detailansicht von Transaktionen etc.
            // Simulierte Datenbank mit "datierten" Hashes
            this.dummyData = {
                'CTC': [
                    { txHash: '0x42abc...', from: '0xSatoramy...', to: '0xDAO...', value: '1,000,000 Bubatz-Coin', majoranaStatus: '✅ Geschützt' },
                    { txHash: '0x00def...', from: '0xBridge...', to: '0xUserWallet...', value: '1.2 rBTC', majoranaStatus: '✅ Geschützt' }
                ],
                'AXF': [
                    { dataHash: '0xabc123...', type: '.cw (Log-Datei)', axiometixSize: '4.2 Giga-QuEkta (GQe)', vector: 'A:0.2|X:0.9|F:0.8', isProtected: true },
                    { dataHash: '0xdef456...', type: '.cw (User-Profil)', axiometixSize: '1.3 Kilo-QuEkta (kQe)', vector: 'A:0.5|X:0.5|F:0.9', isProtected: false }
                ]
            };
        }

        isExplorerQuery(query) { return query.trim().startsWith('0x') || /^\d+$/.test(query.trim()); }

        search(query) {
            this.detailView = null;
            this.render(query);
        }

        showDetailView(type, id) {
            this.detailView = { type, id };
            this.render();
        }

        async fetchData(query) {
            console.log(`Sende Anfrage an die API mit Query: ${query}`);
            // Hier würde der echte API-Call stattfinden. Wir geben die Dummy-Daten zurück.
            return new Promise(resolve => setTimeout(() => resolve(this.dummyData), 500));
        }
        
        render() {
            this.container.innerHTML = '<p style="text-align:center;">Lade Live-Daten von der BOxchain...</p>';
            this.fetchData('').then(data => {
                let html;
                if (this.detailView) {
                    html = this.renderDetailView();
                } else {
                    html = this.renderListView(data);
                }
                this.container.innerHTML = html;
                this.addEventListeners();
            });
        }

        renderListView(data) {
            const isOwner = window.RFOF_APP.account && window.RFOF_APP.account.user && window.RFOF_APP.account.user.role === 'SATORAMY_PRIME';
            let tableHtml;
            if (this.view === 'CTC') {
                tableHtml = `<table><thead><tr><th>Tx Hash</th><th>Von</th><th>Nach</th><th>Wert</th><th>Integrität (Majorana)</th></tr></thead><tbody>`;
                data.CTC.forEach(tx => {
                    tableHtml += `<tr><td><span class="hash-link" onclick="window.RFOF_APP.explorer.showDetailView('tx', '${tx.txHash}')">${tx.txHash}</span></td><td>${tx.from}</td><td>${tx.to}</td><td>${tx.value}</td><td>${tx.majoranaStatus}</td></tr>`;
                });
                tableHtml += `</tbody></table>`;
            } else { // AXF View
                tableHtml = `<table><thead><tr><th>Daten-Hash</th><th>Typ</th><th>Axiometix Größe</th><th>Zustand (A/X/F)</th></tr></thead><tbody>`;
                data.AXF.forEach(d => {
                    let hashDisplay = d.isProtected ? 
                        (isOwner ? `<span class="hash-link" onclick="window.RFOF_APP.explorer.showDetailView('data', '${d.dataHash}')">${d.dataHash} (Owner)</span>` : `<span class="hash-link protected">${d.dataHash} (Geschützt)</span>`) :
                        `<span class="hash-link" onclick="window.RFOF_APP.explorer.showDetailView('data', '${d.dataHash}')">${d.dataHash}</span>`;
                    tableHtml += `<tr><td>${hashDisplay}</td><td>${d.type}</td><td>${d.axiometixSize}</td><td>${d.vector}</td></tr>`;
                });
                tableHtml += `</tbody></table>`;
            }
            return this.getWrapperHtml(tableHtml);
        }

        renderDetailView() {
            const detailContent = `
                <h3>Detailansicht: ${this.detailView.type.toUpperCase()}</h3>
                <h4>${this.detailView.id}</h4>
                <p>Hier würden die spezifischen, von der API abgerufenen Details zu diesem Hash oder Block geladen. Dies demonstriert die "Website in Website"-Funktionalität, bei der nur der Explorer-Container neu gerendert wird.</p>
                <button id="back-to-list-btn" class="btn-secondary">Zurück zur Übersicht</button>`;
            return this.getWrapperHtml(detailContent);
        }

        getWrapperHtml(content) {
            return `
                <div class="explorer-header">
                    <div class="explorer-controls">
                        <button id="btn-ctc-view" class="${this.view === 'CTC' && !this.detailView ? 'active' : ''}">CTC Explorer</button>
                        <button id="btn-axf-view" class="${this.view === 'AXF' && !this.detailView ? 'active' : ''}">AXF Explorer</button>
                    </div>
                    <div class="explorer-search">
                       <input type="text" id="explorer-search-input" placeholder="Block, Hash, Adresse...">
                       <button id="explorer-search-btn">Suchen</button>
                    </div>
                </div>
                <div class="explorer-results">${content}</div>`;
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
};
