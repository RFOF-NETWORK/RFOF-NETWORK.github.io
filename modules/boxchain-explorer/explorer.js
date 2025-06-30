// explorer.js

class BOxchainExplorer {
    constructor(targetElement) {
        this.container = targetElement;
        this.view = 'CTC'; // Standardansicht ist der CTC-Explorer
        this.apiEndpoint = '/api/explorer/query'; // Interner API-Endpunkt zum Hallo @RFOF-NETWORK Programm
    }

    async fetchData(query) {
        // Hier würde der sichere API-Call an das Backend erfolgen
        console.log(`Sende Anfrage an ${this.apiEndpoint} mit Query: ${query}`);
        // Simulierte Antwort für das Beispiel
        const dummyData = {
            'CTC': [
                { txHash: '0xabc...', from: 'addr1...', to: 'addr2...', value: '100 CTC', majoranaStatus: '✅ Geschützt' },
                { txHash: '0xdef...', from: 'addr3...', to: 'addr4...', value: '50 CTC', majoranaStatus: '✅ Geschützt' }
            ],
            'AXF': [
                { dataHash: '0x123...', type: '.cw', axiometixSize: '1.4 Mega-QuEkta (MQe)', vector: 'A:0.9|X:0.4|F:0.7' },
                { dataHash: '0x456...', type: '.cw', axiometixSize: '2.2 Giga-QuEkta (GQe)', vector: 'A:0.2|X:0.9|F:0.3' }
            ]
        };
        return new Promise(resolve => setTimeout(() => resolve(dummyData[this.view]), 500));
    }

    renderUI(data) {
        let html = `
            <div class="explorer-controls">
                <button id="btn-ctc-view" class="${this.view === 'CTC' ? 'active' : ''}">CTC Explorer</button>
                <button id="btn-axf-view" class="${this.view === 'AXF' ? 'active' : ''}">AXF Explorer</button>
            </div>
            <div class="explorer-results">
        `;

        if (this.view === 'CTC') {
            html += `
                <table>
                    <thead><tr><th>Tx Hash</th><th>Von</th><th>Nach</th><th>Wert</th><th>Integrität</th></tr></thead>
                    <tbody>
                        ${data.map(tx => `<tr><td>${tx.txHash}</td><td>${tx.from}</td><td>${tx.to}</td><td>${tx.value}</td><td>${tx.majoranaStatus}</td></tr>`).join('')}
                    </tbody>
                </table>
            `;
        } else {
            html += `
                <table>
                    <thead><tr><th>Data Hash</th><th>Typ</th><th>Axiometix Größe</th><th>Zustands-Vektor (A/X/F)</th></tr></thead>
                    <tbody>
                        ${data.map(d => `<tr><td>${d.dataHash}</td><td>${d.type}</td><td>${d.axiometixSize}</td><td>${d.vector}</td></tr>`).join('')}
                    </tbody>
                </table>
            `;
        }

        html += `</div>`;
        this.container.innerHTML = html;
        this.addEventListeners();
    }
    
    addEventListeners() {
        document.getElementById('btn-ctc-view').addEventListener('click', () => {
            this.view = 'CTC';
            this.render();
        });
        document.getElementById('btn-axf-view').addEventListener('click', () => {
            this.view = 'AXF';
            this.render();
        });
    }

    async render() {
        this.container.innerHTML = '<p>Lade Daten...</p>';
        const data = await this.fetchData('');
        this.renderUI(data);
    }
}

window.BOxchainExplorer = BOxchainExplorer;
