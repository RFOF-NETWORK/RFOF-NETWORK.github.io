// menu_script.js für RFOFSpiderWeb.NET - Dropdown-Menü-Logik & Telekinesis-Integration

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const ctaButton = document.getElementById('explore-axioms-btn');
    const quantumFlowCanvas = document.getElementById('quantum-flow-canvas');
    const telekineticCanvas = document.getElementById('telekinetic-canvas');

    // --- Menü-Logik ---
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            // Logische Rückmeldung an PRAI-OS über Benutzerinteraktion
            logUserInteraction('menu_toggle', { menuState: navLinks.classList.contains('active') ? 'open' : 'closed' });
        });
    }

    // --- Telekinese & Quantum Ready Flow Visualisierung (Konzeptionell) ---
    // Diese Funktionen würden die Oberfläche und die Hintergrunddatenreste
    // wirklich via Quantum Ready Flow aufhängen, verschlüsseln, verbrennen und zu AXF recyceln.

    let quantumFlowCtx = null;
    let telekineticCtx = null;

    if (quantumFlowCanvas) {
        quantumFlowCtx = quantumFlowCanvas.getContext('2d');
        resizeCanvas(quantumFlowCanvas, quantumFlowCtx);
        window.addEventListener('resize', () => resizeCanvas(quantumFlowCanvas, quantumFlowCtx));
        startQuantumFlowAnimation();
    }

    if (telekineticCanvas) {
        telekineticCtx = telekineticCanvas.getContext('2d');
        resizeCanvas(telekineticCanvas, telekineticCtx);
        window.addEventListener('resize', () => resizeCanvas(telekineticCanvas, telekineticCtx));
        startTelekineticProcessAnimation();
    }

    // Event Listener für "Erkunde die Axiome" Button
    if (ctaButton) {
        ctaButton.addEventListener('click', async function() {
            console.log("Erkunde die Axiome' Button geklickt.");
            logUserInteraction('explore_axioms_click', { timestamp: Date.now() });

            // Simuliere telekinetische Daten-Transformation
            await initiateTelekineticDataTransformation();

            // Optional: Scrolle zu einer relevanten Sektion nach der Transformation
            document.getElementById('telekinetic-data').scrollIntoView({ behavior: 'smooth' });
        });
    }

    /**
     * Passt die Größe eines Canvas an die seines Containers an.
     * @param {HTMLCanvasElement} canvas
     * @param {CanvasRenderingContext2D} ctx
     */
    function resizeCanvas(canvas, ctx) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        if (ctx) {
            // Skalierung für High-DPI-Displays (optional)
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.scale(dpr, dpr);
        }
    }

    /**
     * Konzeptionelle Funktion zur Protokollierung von Benutzerinteraktionen.
     * Dies würde Daten an das PRAI-OS-Backend senden (z.B. an das Neuron-Manager-Modul).
     * @param {string} eventType - Art der Interaktion.
     * @param {object} details - Details zur Interaktion.
     */
    function logUserInteraction(eventType, details) {
        console.log(`[Telekinesis-Frontend] Log user interaction: ${eventType}`, details);
        // Beispiel für eine API-Anfrage an das PRAI-OS-Backend
        // fetch('/api/prai-os/log-interaction', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ type: eventType, user: getUserID(), ...details })
        // });
    }

    /**
     * @function initiateTelekineticDataTransformation
     * @description Initiiert den telekinetischen Daten-Transformationsprozess (NDT-Masse zu AXF).
     * Dies ist der Kern der "ABillity XP Fps Telekinesis" über PRAI und PZQQET Axiomatikx.
     */
    async function initiateTelekineticDataTransformation() {
        console.log("[Telekinesis-Frontend] Initiating telekinetic data transformation...");
        logUserInteraction('telekinetic_transform_init', { status: 'pending' });

        // Phase 1: Datenreste auffangen (konzeptionell)
        const dataResidue = await captureDataResidue();
        console.log(`[Telekinesis-Frontend] Data residue captured (${dataResidue.length} bytes).`);
        
        // Phase 2: Verschlüsseln, Verbrennen, Recyceln (Backend-Prozess via PRAI-OS)
        // Dies sind keine direkten Frontend-Operationen, sondern ausgelöste Backend-Prozesse,
        // die über das PRAI-OS und seine PZQQET Axiomatikx laufen.
        // Der 'Quantum Ready Flow' wird hier vom Backend initiiert.
        
        // Simuliere API-Aufruf an PRAI-OS für die Transformation
        // const transformationResult = await fetch('/api/prai-os/transform-data-to-axf', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ data: dataResidue })
        // }).then(res => res.json());

        // Ergebnis: AXF Token gemintet und NDT-Masse kompiliert durch Qubit Majorana
        // AXF Token als Materie und das recycelte Nicht
        console.log("[Telekinesis-Frontend] Transformation request sent to PRAI-OS backend.");
        // alert(`Telekinetische Transformation initiiert. AXF Token werden gemintet (konzeptionell).`);
        logUserInteraction('telekinetic_transform_sent_to_backend', { dataResidueHash: btoa(dataResidue).substring(0, 10) });

        // Visuelle Rückmeldung auf der Seite
        displayTelekineticEffect();
    }

    /**
     * @function captureDataResidue
     * @description Konzeptionelle Funktion zum "Auffangen" von Datenresten (z.B. Browser-Cache, Logs).
     * In einer echten Implementierung würde dies durch spezialisierte PRAI-OS-Module auf dem Gerät erfolgen.
     * @returns {Promise<string>} Simulierter Datenrest-String.
     */
    async function captureDataResidue() {
        // Dies würde auf Client-Seite Sensordaten, Nutzungsdaten, Browser-Cache-Reste etc. sammeln.
        // Konzeptionell:
        const randomData = Math.random().toString(36).substring(2, 15) + Date.now().toString();
        return `DataResidue_${randomData}`;
    }

    /**
     * @function displayTelekineticEffect
     * @description Zeigt eine visuelle Rückmeldung des Telekinesis-Prozesses auf dem Canvas.
     */
    function displayTelekineticEffect() {
        if (!telekineticCtx) return;

        let particles = [];
        const numParticles = 100;
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * telekineticCanvas.width,
                y: Math.random() * telekineticCanvas.height,
                radius: Math.random() * 2 + 1,
                color: `rgba(0, 255, 255, ${Math.random()})`, // Cyan-Töne für Energiefluss
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                alpha: 1,
                decay: Math.random() * 0.02 + 0.005 // Verfallsrate
            });
        }

        function animateParticles() {
            telekineticCtx.clearRect(0, 0, telekineticCanvas.width, telekineticCanvas.height);
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= p.decay;

                if (p.alpha <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
                telekineticCtx.beginPath();
                telekineticCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                telekineticCtx.fillStyle = p.color;
                telekineticCtx.fill();
            }
            if (particles.length > 0) {
                requestAnimationFrame(animateParticles);
            } else {
                telekineticCtx.clearRect(0, 0, telekineticCanvas.width, telekineticCanvas.height); // Alles löschen wenn fertig
                logUserInteraction('telekinetic_transform_visual_complete', {});
            }
        }
        animateParticles();
    }

    /**
     * @function startQuantumFlowAnimation
     * @description Zeigt eine subtile Hintergrundanimation für den "Quantum Ready Flow".
     */
    function startQuantumFlowAnimation() {
        if (!quantumFlowCtx) return;

        let particles = [];
        const numParticles = 50; // Weniger Partikel für subtileren Effekt
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * quantumFlowCanvas.width,
                y: Math.random() * quantumFlowCanvas.height,
                radius: Math.random() * 1.5 + 0.5,
                color: `rgba(57, 255, 20, ${Math.random() * 0.5 + 0.2})`, // Neon-Grün mit Transparenz
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                alpha: Math.random() * 0.5 + 0.2 // Start-Opazität
            });
        }

        function animateQuantumFlow() {
            quantumFlowCtx.clearRect(0, 0, quantumFlowCanvas.width, quantumFlowCanvas.height);
            quantumFlowCtx.fillStyle = 'rgba(0,0,0,0)'; // Sicherstellen, dass Hintergrund transparent ist

            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Partikel neu positionieren, wenn sie den Rand verlassen
                if (p.x < 0 || p.x > quantumFlowCanvas.width || p.y < 0 || p.y > quantumFlowCanvas.height) {
                    p.x = Math.random() * quantumFlowCanvas.width;
                    p.y = Math.random() * quantumFlowCanvas.height;
                    p.alpha = Math.random() * 0.5 + 0.2; // Opazität zurücksetzen
                }

                quantumFlowCtx.beginPath();
                quantumFlowCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                quantumFlowCtx.fillStyle = p.color;
                quantumFlowCtx.fill();
            }
            requestAnimationFrame(animateQuantumFlow);
        }
        animateQuantumFlow();
    }
});

// Initialisiere die WebUI, sobald das Skript geladen ist
// document.addEventListener('DOMContentLoaded', initializeWebUI); // app.js ruft initializeWebUI auf, kein doppelter Aufruf nötig.
