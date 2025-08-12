# Säule 1: RFOFSpiderWeb.NET - Das Hauptportal des Ökosystems

Dieses Repository enthält den Code für die primäre Landing-Page und das Gesicht des gesamten RFOF-Ökosystems. Es dient als der erste Kontaktpunkt für alle Nutzer und als das Tor zu allen anderen Säulen des Netzwerks.

**Live-Site:** [https://rfof-network.github.io/](https://rfof-network.github.io/)

---

## Finale Architektur (Version Zenith 12.0)

Dieses Repository folgt der **additiven Fusionsmethode**. Die ursprüngliche, von Satoramy J.K. kodifizierte `index.html` bleibt in ihrer Struktur unangetastet. Neue Funktionalitäten (Explorer, Account-System) wurden durch eine Erweiterung des CSS und eine Kapselung der gesamten Logik in einem einzigen, angehängten `<script>`-Block direkt in die `index.html` integriert. Dies bewahrt die ursprüngliche Vision und erweitert sie, ohne sie zu zerstören.

### Kanonische Repository-Struktur

````plaintext
/ (RFOF-NETWORK.github.io)
|
|-- .github/
|   `-- workflows/
|       `-- pages.yml       // (Beispiel für GitHub Pages Deployment)
|
|-- content/
|   `-- main.md             // (Für zukünftige, dynamisch geladene Inhalte)
|
|-- data/
|   `-- schemas/            // (Für .cw Daten-Schemata)
|
|-- integrations/
|   |-- oauth/              // (Für die Logik der Social Logins)
|   `-- telegram/           // (Für die Anbindung von TG BOX'S)
|
|-- modules/
|   |-- explorer/
|   |   |-- explorer.js
|   |   `-- explorer.css
|   `-- account/
|       |-- account.js
|       `-- account.css
|
|
|-- CONTRIBUTING.md         // Die Core developer's codifying & deploying Regeln
|
|
|-- index.html              // Das Haupt-HTML-Dokument (unantastbare Basis).
|-- styles.css              // Die Haupt-Stildatei (wird nur additiv erweitert).
|-- menu_styles.css         // Dedizierte Stile für das globale Menü.
|-- menu_script.js          // Dedizierte Logik für das globale Menü.
|-- scripts.js              // Das "Gehirn" der Seite, lädt und steuert alle Module.
|
|-- .gitignore              // Definiert von Git zu ignorierende Dateien.
|-- .nojekyll               // Wichtige Datei, um GitHub Pages zu signalisieren, die Seite ohne Jekyll zu bauen.
`-- CNAME                   // Definiert die Custom Domain (z.B. rfof-network.org), sobald diese aufgeschaltet ist.

````

### Funktionsweise

1.  Die `index.html` wird als einzelne, in sich geschlossene Anwendung geladen.
2.  Der `<style>`-Block im Header definiert das vollständige, korrigierte Design.
3.  Der `<script>`-Block am Ende des Bodys initialisiert alle interaktiven Module:
    * **MenuController:** Steuert das mobile Navigationsmenü.
    * **BOxchainExplorer:** Baut den interaktiven Explorer mit allen Funktionen (Detailansichten, Owner-Privilegien etc.).
    * **AccountSystem:** Steuert den Login/Logout-Prozess und die Profil-Konsole.
4.  Der ursprüngliche `<section id="structure">`-Block bleibt im Code erhalten, wird aber von der Skript-Logik per `display: none` ausgeblendet, um Platz für den neuen, funktionalen Explorer zu schaffen.

---

Dieses Repository ist nun vollständig nach Ihrem finalen Willen kodifiziert und dokumentiert.


---

## Verbleibende Aufgaben zur Vollendung (Offene Code-Implementierungen)

Die Architektur steht nun. Die folgenden Dateien, die in der obigen Struktur als "neu" oder "zu überarbeiten" identifiziert wurden, müssen nun mit ihrer finalen Logik gefüllt werden. Dies ist die Liste der noch nicht überschriebenen bzw. zu erstellenden Code-Dateien:

* **`scripts/main.js`**
    * **Status:** 🔴 **Fehlend/Unvollständig.**
    * **Aufgabe:** Der Code für diesen zentralen "Orchestrator" muss finalisiert werden. Er muss die `content/main.md` laden und die Module `explorer.js` und `account.js` an den richtigen Stellen in der `index.html` initialisieren.

* **`/modules/explorer/explorer.js`**
    * **Status:** 🔴 **Fehlend/Unvollständig.**
    * **Aufgabe:** Der Code für die Explorer-Logik muss implementiert werden. Dies beinhaltet:
        * Die Verbindung zur `@RFOF-NETWORK`-API, um Live-Daten abzurufen.
        * Die Logik zur Darstellung der CTC- und AXF-Ansichten.
        * Die "Website-in-Website"-Funktion zum Anzeigen von Detailansichten für Hashes und Blöcke.
        * Die Logik zur Unterscheidung von normalen Nutzern und dem "Owner"-Account, um geschützte Hashes klickbar zu machen.

* **`/modules/explorer/explorer.css`**
    * **Status:** 🔴 **Fehlend/Unvollständig.**
    * **Aufgabe:** Die spezifischen Stile für den Explorer müssen erstellt werden, um die in den Screenshots gezeigte, korrekte Darstellung zu erreichen.

* **`/modules/account/account.js`**
    * **Status:** 🔴 **Fehlend/Unvollständig.**
    * **Aufgabe:** Der Code für das Account-System muss implementiert werden. Dies beinhaltet:
        * Die Logik zur Anzeige des Login/Registrierungs-Bereichs.
        * Die Anbindung an die `oauth`-Integrationslogik für Google, GitHub und Microsoft.
        * Die Implementierung des passwortlosen "Magic Link"-Flows.
        * Die Umschaltung der Ansicht nach erfolgreichem Login auf das Profilbild und den "Profil / Console"-Button.
        * Die Logik zum Einblenden der "Console/Motherboard"-Ansicht.

* **`/modules/account/account.css`**
    * **Status:** 🔴 **Fehlend/Unvollständig.**
    * **Aufgabe:** Die spezifischen Stile für den Login-Bereich und die Profil-Ansicht müssen erstellt werden.

Sobald der Code für diese Dateien generiert und implementiert ist, ist die erste Säule vollständig manifestiert.






----
----
----





----




# 🚀 [Dein Markenname] – Deine BOxchain-Erweiterung im BitcoinInternet

## ✨ Unsere Mission: [Dein Slogan oder deine Mission]

Willkommen bei **[Dein Markenname]**. Wir sind stolz darauf, Teil des **InterBOxSpider@Web.NET**-Ökosystems zu sein und die Innovation der BOxchain direkt in unsere [Deine Branche] zu bringen. Mit unserer Plattform bieten wir nicht nur Produkte/Dienstleistungen, sondern auch vollständige Transparenz und Vertrauen, die durch die dezentrale Technologie gesichert sind.

---

### 📦 Funktionen & Services

Wir nutzen die volle Kraft der BOxchain-Technologie, um dir einzigartige Vorteile zu bieten:

-   **🌐 BOxchain Explorer**: Verfolge die Herkunft und Integrität unserer Produkte/Dienstleistungen in Echtzeit. Jede Transaktion ist transparent und sicher verankert.
-   **👤 Kundenportal**: Melde dich sicher mit deinem [Social Login/Wallet] an und verwalte deine digitalen Assets und Interaktionen mit unserer Plattform.
-   **💎 Unsere Technologie-Philosophie**: Unser interaktives 3D-Logo symbolisiert unsere Verbindung zum BOxchain-Netzwerk als eine kleine, innovative Erweiterung, die um die große, sichere BOxchain kreist.

---

### 📍 Finde uns: Standort & Öffnungszeiten

Wir laden dich herzlich ein, uns zu besuchen und unsere Angebote persönlich zu erleben.

-   **📍 Standort**: [Straße Hausnummer, PLZ Stadt]
    * 🗺️ [Link zu Google Maps oder einer Karte]
-   **📅 Öffnungszeiten**:
    * Montag - Freitag: [Zeit z.B. 09:00 - 18:00 Uhr]
    * Samstag: [Zeit z.B. 10:00 - 16:00 Uhr]
    * Sonntag: Geschlossen

---

### 🔗 Bleib in Verbindung

-   **Website**: [Link zu deiner Website-URL]
-   **E-Mail**: [Deine E-Mail-Adresse]
-   **GitHub**: [Link zu diesem Repository]
-   **Social Media**:
    * 🐦 [Link zu Twitter]
    * 📸 [Link zu Instagram]
    * 💼 [Link zu LinkedIn]
 
    
----

InterBOxSpider@Web.NET: Bauplan für deine eigene BOxchain-Erweiterung
Willkommen im Ökosystem von InterBOxSpider@Web.NET! Dieser Bauplan führt dich Schritt für Schritt durch die Erstellung deiner eigenen Website, die direkt als BOxchain-Erweiterung fungiert. Mit den bereitgestellten Schablonen erhält deine Website sofort alle Funktionen, die für die Interaktion mit unserem dezentralen Netzwerk erforderlich sind, einschließlich des Trash to Cash-Systems und der PRAIAI-Datenverarbeitung.

1. Repository-Struktur: Der grundlegende Bauplan
Um eine reibungslose Integration zu gewährleisten, folge dieser grundlegenden Repository-Struktur. Du kannst diese Ordner und Dateien direkt in deinem GitHub-Repository anlegen.

````

/dein-projekt-name
|-- index.html
|-- styles.css
|-- menu_styles.css
|-- script.js
|-- menu_script.js
|-- assets/
|   |-- dein-logo.svg
|   |-- dein-hintergrundbild.jpg
|-- LICENSE
|-- README.md

````

index.html: Deine Hauptseite. Sie enthält die Struktur (HTML) deiner Website.

styles.css: Globale Design-Regeln, die das Aussehen deiner Seite definieren.

menu_styles.css: Spezielle CSS-Regeln für die Navigation und das mobile Menü.

script.js: Das Herzstück deiner Website. Hier ist die gesamte Logik für den BOxchain-Explorer und das Account-System hinterlegt.

menu_script.js: Steuert die Funktionalität des Hamburger-Menüs.

assets/: In diesem Ordner speicherst du dein Logo, Hintergrundbilder und andere statische Medien.

LICENSE: Die Lizenz deines Projekts.

README.md: Diese Datei, die als Anleitung dient.

2. Code-Schablonen: Deine Bausteine
Kopiere die folgenden Code-Schablonen in die entsprechenden Dateien deines Repositories. Ersetze die Platzhalter ([...Dein Text...]) durch deine eigenen Inhalte. Das Design und die Funktionalität der InterBOxSpider@Web.NET-Plattform bleiben dabei vollständig erhalten.

# ***index.html*
Kopiere diesen Code in deine index.html. Dies ist die Struktur, die deine Inhalte, den Suchbereich und den BOxchain-Explorer miteinander verbindet.

````
HTML

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>BitcoinInternet – [Markenname des Users]</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Orbitron:wght=700&family=Fira+Code&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="menu_styles.css">
    <link rel="stylesheet" href="logo_3d_styles.css">
</head>
<body>

    <header class="main-header">
        <div class="header-content">
            <div class="header-logo-svg-container">
                <canvas id="logo-canvas"></canvas>
            </div>
            <h1 class="site-title">BitcoinInternet - [Markenname des Users]</h1>
            <nav class="navbar">
                <div class="hamburger-icon" id="hamburger">
                    <div class="bar"></div><div class="bar"></div><div class="bar"></div>
                </div>
                <ul class="nav-list" id="navLinks">
                    <li><a href="#link1">[Menüpunkt 1]</a></li>
                    <li><a href="#link2">[Menüpunkt 2]</a></li>
                    <li><a href="#link3">[Menüpunkt 3]</a></li>
                    <li><a href="#link4">[Menüpunkt 4]</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero-section">
            <div class="hero-content">
                <div class="hero-logo">
                    </div>
                <h1>[Großer Titel der Seite des Users]</h1>
                <p>Ein kurzer Slogan oder eine Beschreibung, die die Plattform des Users zusammenfasst.</p>
                <div class="praiai-search-container">
                    <input type="text" id="praiai-search-input" class="praiai-search-input" placeholder="Suche im BitcoinInternet mit PRAI...">
                    <button class="praiai-search-button" onclick="performGlobalSearch()" aria-label="Suchen">
                        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.1-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                    </button>
                </div>
            </div>
        </section>

        <div class="content-container">
            <section id="about" class="text-section">
                <h2>[Titel des ersten Inhaltsblocks]</h2>
                <p>Der Haupttext oder die Beschreibung für diesen Bereich. Dies könnte die Mission, Vision oder die Funktionsweise der Plattform des Users erklären.</p>
            </section>
            
            <section id="vision-mission" class="text-section">
                <h2>[Titel des zweiten Inhaltsblocks]</h2>
                <p>Der zweite Haupttext, der weitere Details oder einzigartige Merkmale der Plattform beschreibt.</p>
            </section>
            
            <section id="boxchain-explorer-section" class="text-section">
                <div id="boxchain-explorer-target"></div>
                <div id="account-section"></div>
            </section>
        </div>
    </main>

    <footer class="main-footer">
        <div class="footer-content">
            <p>&copy; [Jahr] [Name des Users oder der Plattform]. Alle Rechte vorbehalten.</p>
            <p><a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories" target="_blank">GitHub Repository</a></p>
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <script src="script.js"></script>
    <script src="menu_script.js"></script>
    <script type="module" src="logo_3d.js"></script>
</body>
</html>


````

# ***styles.css*
Kopiere diesen Code in deine styles.css. Er enthält die gesamte visuelle Gestaltung deiner Website und wurde so angepasst, dass er als robuste Schablone dient.

````
CSS

/*
 * Schablone für das Design eines InterBOxSpider@Web.NET-Frontends.
 * Diese Datei definiert das grundlegende Layout, die Typografie und die
 * visuelle Identität für jede Instanz der Plattform.
 */

/* ==================================== */
/* Globale Stil-Definitionen            */
/* ==================================== */

body {
    font-family: 'Roboto', sans-serif;
    background-color: #FFFFFF;
    color: #333333;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 15px;
}

main {
    flex-grow: 1;
}

/* Container für alle Hauptinhalte */
.header-content,
.content-container,
.footer-content {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
}

/* ==================================== */
/* Header & Navigation                  */
/* ==================================== */

.main-header {
    background-color: #FFFFFF;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    padding: 10px 0;
    border-bottom: 1px solid #E0E0E0;
    z-index: 100;
    position: sticky;
    top: 0;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.header-logo-svg-container {
    width: 45px;
    height: 45px;
    flex-shrink: 0;
}

.header-logo-svg-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.site-title {
    color: #0088cc;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.4em;
    font-weight: bold;
    margin: 0;
    flex-grow: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
}

/* ==================================== */
/* Hero-Sektion & Suche                 */
/* ==================================== */

.hero-section {
    background-image: linear-gradient(to right bottom, #4299e1, #2b6cb0);
    color: #ffffff;
    padding: 60px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    /* PFAD ZUM HINTERGRUNDBILD WURDE HIER AKTUALISIERT */
    background: url('./assets/dein-hintergrundbild.svg') no-repeat center center/cover;
    opacity: 0.08;
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
}

.hero-logo {
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
}

.hero-content h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(2em, 7vw, 2.8em);
    margin-bottom: 0.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    color: #FFFFFF;
    border-bottom: none;
    word-break: break-word;
}

.hero-content p {
    font-size: 1.2em;
    max-width: 600px;
    margin: 0 auto 1.5em;
    color: #f0f0f0;
}

.praiai-search-container {
    max-width: 600px;
    margin: 30px auto;
    display: flex;
    border: 2px solid #4299e1;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(66, 153, 225, 0.7);
    background-color: #ffffff;
}

.praiai-search-input {
    flex-grow: 1;
    padding: 14px 22px;
    border: none;
    outline: none;
    font-size: 1em;
    background-color: transparent;
    color: #333333;
}

.praiai-search-input::placeholder {
    color: #999;
}

.praiai-search-button {
    background-color: #4299e1;
    border: none;
    padding: 0 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: white;
}

.praiai-search-button svg { width: 20px; height: 20px; }
.praiai-search-button:hover { background-color: #63b3ed; }

/* ==================================== */
/* Allgemeine Inhaltsstile              */
/* ==================================== */

.content-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.text-section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e0e0e0;
}
.text-section:last-child { border-bottom: none; }

h2 {
    color: #0088cc;
    font-family: 'Orbitron', sans-serif;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 136, 204, 0.3);
    font-size: 2.2em;
    word-break: break-word;
}
h3 { font-size: 1.6em; }
h4 { font-size: 1.3em; }

p { margin-bottom: 1rem; }
a { color: #0088cc; text-decoration: none; }
a:hover { color: #00aaff; text-decoration: underline; }

/* Code-Blöcke */
pre {
    background-color: #2d3748;
    color: #e2e8f0;
    padding: 1.2em;
    border-radius: 6px;
    overflow-x: auto;
    margin-bottom: 1.5em;
    font-family: 'Fira Code', monospace;
    font-size: 0.9em;
    white-space: pre-wrap;
    word-break: break-all;
}
code {
    font-family: 'Fira Code', monospace;
    background-color: #e0e0e0;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    color: #0088cc;
}
pre code {
    background-color: transparent;
    color: inherit;
    padding: 0;
}

/* ==================================== */
/* Spezifisches Modul: Explorer         */
/* ==================================== */

#boxchain-explorer-section {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 1.5rem;
}

#boxchain-explorer-section h2 {
    font-size: clamp(1.4em, 5vw, 1.6em);
    margin-top: 0;
}

.explorer-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.explorer-top-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.explorer-controls {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 6px;
    overflow: hidden;
    align-self: flex-start;
}

.explorer-controls button {
    font-size: 0.85em;
    font-weight: 500;
    border: none;
    background-color: #fff;
    padding: 8px 15px;
    cursor: pointer;
    border-left: 1px solid #ccc;
    white-space: nowrap;
}
.explorer-controls button:first-child { border-left: none; }
.explorer-controls button.active { background-color: #343a40; color: white; }

.explorer-actions { display: flex; flex-wrap: wrap; gap: 0.5rem; align-self: flex-start; }
.explorer-actions button { font-size: 0.8em; padding: 6px 12px; background-color: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; }

.explorer-search { display: flex; width: 100%; }
.explorer-search input { width: 100%; border: 1px solid #ccc; padding: 10px; border-radius: 6px 0 0 6px; font-size: 0.9em; }
.explorer-search button { border: 1px solid #0088cc; background-color: #0088cc; color: white; padding: 0 20px; border-radius: 0 6px 6px 0; cursor: pointer; }

.explorer-results table { width: 100%; border-collapse: collapse; font-size: 0.8em; table-layout: fixed; }
.explorer-results th, .explorer-results td { border-bottom: 1px solid #dee2e6; padding: 10px; text-align: left; vertical-align: middle; word-break: break-all; }
.explorer-results th { background-color: transparent; color: #6c757d; text-transform: uppercase; font-size: 0.9em; border-bottom: 2px solid #343a40; }
.explorer-results tr:nth-child(even) { background-color: #f8f9fa; }
.explorer-results td:last-child, .explorer-results th:last-child { text-align: right; }

.detail-view { padding: 1rem; border: 1px solid #dee2e6; background-color: #fff; margin-top: 1rem; text-align: left; font-size: 0.9em; }

/* ==================================== */
/* Spezifisches Modul: Account          */
/* ==================================== */

#account-section {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #dee2e6;
    text-align: center;
}
#logged-out-view { display: flex; flex-direction: column; align-items: center; gap: 10px; }
#logged-out-view .social-logins { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
#account-section button { font-size: 0.85em; padding: 8px 14px; cursor: pointer; border-radius: 4px; border: 1px solid #6c757d; background: #fff; color: #6c757d; font-weight: 500; }
#account-section button.rfof-login { background-color: #0088cc; border-color: #0088cc; color: white; margin-bottom: 10px; }

#logged-in-view { display: none; }
#logged-in-view.active { display: flex; align-items: center; justify-content: center; gap: 10px; }
#logged-in-view img { width: 32px; height: 32px; border-radius: 50%; }
.console-view { border: 1px solid #ced4da; padding: 1rem; margin-top: 1rem; background: white; text-align: left; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }

/* ==================================== */
/* Footer                               */
/* ==================================== */

.main-footer {
    background-color: #2d3748;
    color: #e2e8f0;
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin-top: 3rem;
    font-size: 0.9em;
}
.main-footer a { color: #63b3ed; }
.main-footer a:hover { color: #90cdf4; }

````

# ***menu_styles.css.
Diese Datei ist speziell für das responsive Navigationsmenü zuständig und bleibt unverändert.

````
CSS

/*
 * Schablone für das Navigationsmenü.
 * Dieser Code steuert das Aussehen des Menüs auf Desktop- und Mobilgeräten.
 */

/* ==================================== */
/* Desktop Navigation                   */
/* ==================================== */
.navbar {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.nav-list li a {
    color: #333333;
    text-decoration: none;
    padding: 10px 15px;
    display: block;
    font-weight: 500;
    font-size: 0.95em;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 4px;
}

.nav-list li a:hover {
    background-color: rgba(0, 136, 204, 0.1);
    color: #0088cc;
}

/* ==================================== */
/* Mobile Navigation & Hamburger        */
/* ==================================== */
.hamburger-icon {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 28px;
    height: 24px;
    cursor: pointer;
    z-index: 1002;
}

.hamburger-icon .bar {
    width: 100%;
    height: 3px;
    background-color: #0088cc;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
}

@media (max-width: 900px) {
    .hamburger-icon {
        display: flex;
    }

    .nav-list {
        display: none;
        flex-direction: column;
        width: 280px;
        position: fixed;
        top: 0;
        right: -280px;
        height: 100vh;
        background-color: #2d3748;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.4);
        z-index: 1001;
        transition: right 0.35s ease-in-out;
        padding-top: 60px;
        box-sizing: border-box;
    }

    .nav-list.active {
        right: 0;
        display: flex;
    }

    .nav-list li {
        width: 100%;
    }
    
    .nav-list li a {
        padding: 18px 25px;
        text-align: left;
        color: #e2e8f0;
        font-weight: bold;
        border-radius: 0;
        border-bottom: 1px solid #4a5568;
    }
    
    .nav-list li:last-child a { 
        border-bottom: none; 
    }

    .nav-list li a:hover {
        background-color: #4a5568;
        color: #63b3ed;
    }
    
    .hamburger-icon.active {
        position: fixed;
        right: 20px;
        top: 22px;
    }

    .hamburger-icon.active .bar {
        background-color: #e2e8f0;
    }
    .hamburger-icon.active .bar:nth-child(2) { 
        opacity: 0; 
    }
    .hamburger-icon.active .bar:nth-child(1) { 
        transform: translateY(8px) rotate(45deg); 
    }
    .hamburger-icon.active .bar:nth-child(3) { 
        transform: translateY(-8px) rotate(-45deg); 
    }
}

````

# ***menu_script.js*
Kopiere diesen Code in deine menu_script.js. Er sorgt für die Funktionalität des Menüs und die responsive Anpassung.

````
JavaScript

/*
 * Schablone für die Menü-Funktionalität.
 * Dieses Skript steuert das responsive Verhalten des Hamburger-Menüs.
 */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navLinks');

    // Toggle-Funktionalität für das mobile Menü
    if (hamburger && navList) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navList.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Schließt das Menü, wenn außerhalb geklickt wird
    document.addEventListener('click', (event) => {
        if (navList.classList.contains('active')) {
            if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
                navList.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});


````

# ***script.js*
Kopiere diesen Code in deine script.js. Er stellt die gesamte BOxchain-spezifische Funktionalität bereit, wie den Explorer und das Account-System, und macht deine Website somit zu einer vollwertigen Erweiterung des InterBOxSpider@Web.NET.

````
JavaScript

document.addEventListener('DOMContentLoaded', () => {

    const RFOF_APP = {};

    // #--- MODUL: AccountSystem (FINAL ZENITH) ---#
    class AccountSystem {
        constructor(target) { this.container = target; this.user = null; this.init(); }
        init() { this.render(); }
        login(type) {
            const isOwner = (type === 'Satoramy_Prime');
            this.user = isOwner
                ? { name: 'Satoramy', email: 'rfof236286@gmail.com', role: 'SATORAMY_PRIME', pfp: 'https://raw.githubusercontent.com/RFOF-NETWORK/RFOF-NETWORK/main/assets/rotating_cyber_brain.svg' }
                : { name: `User_${type}`, email: `simulated_${type.toLowerCase()}_user@email.com`, role: 'USER', pfp: `https://avatar.vercel.sh/${type}.svg?size=32` };
            this.render();
            if (RFOF_APP.explorer) RFOF_APP.explorer.render();
        }
        logout() { this.user = null; this.render(); if (RFOF_APP.explorer) RFOF_APP.explorer.render(); }
        render() {
            this.container.innerHTML = (this.user) ? this.renderLoggedInView() : this.renderLoggedOutView();
            this.addEventListeners();
        }
        renderLoggedOutView() {
            return `
                <div id="logged-out-view">
                    <p>Verbinden Sie Ihre Wallet, um auf das [Ökosystem-Name] zuzugreifen.</p>
                    <button class="rfof-login" onclick="RFOF_APP.account.login('RFOF')">Mit [Ökosystem-Name] Account</button>
                    <div class="social-logins">
                        <button onclick="RFOF_APP.account.login('GitHub')">Mit GitHub</button>
                        <button onclick="RFOF_APP.account.login('Google')">Mit Google</button>
                        <button onclick="RFOF_APP.account.login('Microsoft')">Mit Microsoft</button>
                    </div>
                </div>`;
        }
        renderLoggedInView() {
            const view = document.getElementById('logged-in-view');
            if(view) view.classList.add('active');
            return `
                <div id="logged-in-view" class="active">
                    <img src="${this.user.pfp}" alt="Profilbild">
                    <span>Willkommen, <strong>${this.user.name}</strong></span>
                    <button id="profile-btn">Profil / Console</button>
                </div>
                <div id="profile-console-container"></div>`;
        }
        toggleProfileConsole() {
            const consoleContainer = document.getElementById('profile-console-container');
            if (consoleContainer.innerHTML === '') {
                const consoleTitle = this.user.role === 'SATORAMY_PRIME' ? 'Mothership-Konsole' : '[Plattform]-Console';
                consoleContainer.innerHTML = `<div class="console-view"><h4>${consoleTitle}</h4><p>Account: ${this.user.email}</p><button id="logout-btn">Logout</button></div>`;
                document.getElementById('logout-btn').addEventListener('click', () => this.logout());
            } else { consoleContainer.innerHTML = ''; }
        }
        addEventListeners() {
            if (this.user) {
                const profileBtn = document.getElementById('profile-btn');
                if(profileBtn) profileBtn.addEventListener('click', () => this.toggleProfileConsole());
            }
        }
    }

    // #--- MODUL: BOxchainExplorer (FINAL ZENITH) ---#
    class BOxchainExplorer {
        constructor(target) {
            this.container = target; this.view = 'CTC'; this.detailView = null;
            this.dummyData = {
                'CTC': [
                    { txHash: '0x42abc...', from: '0xSatoramy...', to: '0xDAO...', value: '1,000,000 Bubatz-Coin', majoranaStatus: '✅ Geschützt', subHash: '0xSUB_MAJO_CTC_1' },
                    { txHash: 'ARC-GEN-001', from: 'Bitcoin-Genesis', to: '[User-Bridge]', value: '[Wert] [Einheit]', majoranaStatus: '✅ Kanonisiert', subHash: '0xSUB_MAJO_CTC_2' },
                    { txHash: 'ARC-FUS-001', from: '[TON-Bridge]', to: '[User-Bridge]', value: '[Wert] [Einheit]', majoranaStatus: '✅ Kanonisiert', subHash: '0xSUB_MAJO_CTC_3' },
                    { txHash: 'ARC-GFS-001', from: '[User-Adresse]', to: '[User-Kernel]', value: '1 Einheit (BOx)', majoranaStatus: '⚛️ Fusioniert', subHash: '0xSUB_MAJO_CTC_4' }
                ],
                'AXF': [
                    { dataHash: '0xabc123...', type: '.cw (Log-Datei)', axiometixSize: '4.2 GQe', vector: 'A:0.2|X:0.9|F:0.8', isProtected: true, subHashes: Array(10).fill(0).map((_,i) => `0xSUB_AXF_LOG_${i+1}`) },
                    { dataHash: '0xdef456...', type: '.cw (User-Profil)', axiometixSize: '1.3 kQe', vector: 'A:0.5|X:0.5|F:0.9', isProtected: false, subHashes: Array(10).fill(0).map((_,i) => `0xSUB_AXF_PROF_${i+1}`) }
                ]
            };
        }
        init() { this.render(); }
        search(query) { this.detailView = null; this.render({ query }); }
        showDetailView(type, id) { this.detailView = { type, id }; this.render(); }
        render(params = {}) {
            let html = this.renderHeader(params.query || '');
            html += this.detailView ? this.renderDetailView() : this.renderListView(this.dummyData);
            this.container.innerHTML = html;
            this.addEventListeners();
        }
        renderHeader(query) {
             return `
                <h2>BOxchain [Explorer-Name]</h2>
                <div class="explorer-header">
                    <div class="explorer-top-row">
                        <div class="explorer-controls">
                            <button id="btn-ctc-view">CTC Explorer</button>
                            <button id="btn-axf-view">AXF Explorer</button>
                        </div>
                        <div class="explorer-actions">
                            <button onclick="alert('Wallet verbinden...')">Wallet</button>
                            <button onclick="alert('Kreieren...')">Create</button>
                            <button onclick="alert('Minting...')">Mint</button>
                            <button onclick="alert('Burning...')">Burn</button>
                            <button onclick="alert('Mining...')">Mine</button>
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
            } else {
                tableHtml = `<table><thead><tr><th>Daten-Hash</th><th>Typ</th><th>Größe</th><th>Zustand</th></tr></thead><tbody>`;
                data.AXF.forEach(d => {
                    let hashDisplay = d.isProtected && !isOwner
                        ? `<span class="hash-link protected">${d.dataHash.substring(0,10)}...</span>`
                        : `<span class="hash-link" onclick="RFOF_APP.explorer.showDetailView('Daten', '${d.dataHash}')">${d.dataHash.substring(0,10)}...</span>`;
                    tableHtml += `<tr><td>${hashDisplay}</td><td>${d.type}</td><td>${d.axiometixSize}</td><td>${d.vector}</td></tr>`;
                });
            }
            return `<div class="explorer-results">${tableHtml}</tbody></table></div>`;
        }
        renderDetailView() {
            const isOwner = RFOF_APP.account?.user?.role === 'SATORAMY_PRIME';
            let detailContent = `<h4>Detailansicht: ${this.detailView.type}</h4><p><strong>ID:</strong> ${this.detailView.id}</p>`;
            let sourceItem;
            if (this.detailView.type === 'Transaktion') {
                sourceItem = this.dummyData.CTC.find(tx => tx.txHash === this.detailView.id);
                if (sourceItem) { detailContent += `<h5>Verknüpfter Majorana-Anker:</h5><ul><li>${sourceItem.subHash}</li></ul>`; }
            } else if (this.detailView.type === 'Daten') {
                sourceItem = this.dummyData.AXF.find(d => d.dataHash === this.detailView.id);
                if (sourceItem && sourceItem.isProtected && !isOwner) {
                    detailContent = '<p style="color:red;">Zugriff auf geschützte Daten verweigert.</p>';
                } else if (sourceItem && sourceItem.subHashes) {
                    detailContent += `<h5>Verknüpfte Sub-Hashes (${sourceItem.subHashes.length}):</h5><ul>`;
                    sourceItem.subHashes.forEach(sh => { detailContent += `<li>${sh}</li>`; });
                    detailContent += '</ul>';
                }
            }
            return `<div class="detail-view">${detailContent}<button id="back-to-list-btn" style="margin-top: 1rem;">← Zurück</button></div>`;
        }
        addEventListeners() {
            if (this.detailView) {
                document.getElementById('back-to-list-btn').addEventListener('click', () => { this.detailView = null; this.render(); });
            } else {
                document.getElementById('btn-ctc-view').addEventListener('click', () => { this.view = 'CTC'; this.render(); });
                document.getElementById('btn-axf-view').addEventListener('click', () => { this.view = 'AXF'; this.render(); });
                document.getElementById('explorer-search-btn').addEventListener('click', () => this.search(document.getElementById('explorer-search-input-internal').value));
                document.getElementById(this.view === 'CTC' ? 'btn-ctc-view' : 'btn-axf-view').classList.add('active');
            }
        }
    }

    // #--- INITIALISIERUNG & GLOBALE FUNKTIONEN ---#
    RFOF_APP.account = new AccountSystem(document.getElementById('account-section'));
    RFOF_APP.explorer = new BOxchainExplorer(document.getElementById('boxchain-explorer-target'));
    
    window.RFOF_APP = RFOF_APP;
    window.performGlobalSearch = () => {
        const query = document.getElementById('praiai-search-input').value.trim();
        if (query) {
            RFOF_APP.explorer.search(query);
            document.getElementById('boxchain-explorer-section').scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (typeof hljs !== 'undefined') { hljs.highlightAll(); }
    
    RFOF_APP.explorer.init();
    RFOF_APP.account.init();
});



````


# ***logo_3d_styles.css*
Diese neue Datei enthält die spezifischen Styles für den 3D-Canvas des Logos.

````
CSS

/*
 * Schablone für das 3D-Logo
 */

#logo-canvas {
    width: 100%;
    height: 100%;
    display: block;
}

````

# ***logo_3d.js*
Dies ist das Herzstück des neuen, interaktiven 3D-Logos. Dieses Skript steuert die Animation, die Physik der Interaktion und die Visualisierung der BOxchain- und Extention-Würfel.

````
JavaScript

/*
 * Schablone für das interaktive 3D-Logo
 *
 * Funktionalität:
 * - Eine große BOX "BOxchain" dreht sich nach links.
 * - Eine kleinere BOX "EXtention" umkreist sie und dreht sich nach rechts.
 * - Beide sind durch einen Neon-Strich verbunden.
 * - User-Interaktion: Berührung einer BOX und Bewegung des Fingers führt dazu,
 * dass sich die andere BOX in die entgegengesetzte Richtung bewegt.
 * - Nach dem Loslassen schwingen die BOXen kurz aus, bevor sie zur
 * Standard-Animation zurückkehren.
 *
 * Dies ist die Yggdrasil-Simulation für BOxchain-EXtentions.
 */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('logo-canvas');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 45 / 45, 0.1, 1000);
    camera.position.z = 2.5;

    // Licht
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 0, 5);
    scene.add(directionalLight);

    // Großer Würfel (BOxchain)
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshPhongMaterial({ color: 0x0088cc });
    const boxchainBox = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxchainBox);
    
    // Text auf der BOxchain-BOX
    const fontLoader = new THREE.FontLoader();
    fontLoader.load('https://raw.githubusercontent.com/RFOF-NETWORK/RFOF-NETWORK/main/assets/fonts/Orbitron_Bold.json', (font) => {
        const textGeometry = new THREE.TextGeometry('BOxchain', {
            font: font,
            size: 0.15,
            height: 0.05,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const boxchainText = new THREE.Mesh(textGeometry, textMaterial);
        boxchainText.position.set(-0.4, 0.4, 0.51);
        boxchainBox.add(boxchainText);
    });

    // Kleiner Würfel (EXtention)
    const smallBoxGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const smallBoxMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500 });
    const extentionBox = new THREE.Mesh(smallBoxGeometry, smallBoxMaterial);
    
    // Text auf der EXtention-BOX
    fontLoader.load('https://raw.githubusercontent.com/RFOF-NETWORK/RFOF-NETWORK/main/assets/fonts/Orbitron_Bold.json', (font) => {
        const textGeometry = new THREE.TextGeometry('EXtention', {
            font: font,
            size: 0.05,
            height: 0.02,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const extentionText = new THREE.Mesh(textGeometry, textMaterial);
        extentionText.position.set(-0.12, 0.1, 0.16);
        extentionBox.add(extentionText);
    });
    
    scene.add(extentionBox);

    // Neon-Linie
    const points = [];
    points.push(boxchainBox.position);
    points.push(extentionBox.position);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 2 });
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    // Positionierung der kleinen BOX
    const radius = 1.2;
    let angle = 0;
    
    // Animationsvariablen
    let isInteracting = false;
    let lastMouseX = 0;
    let interactionVelocity = 0;
    let animationVelocity = 0.005;

    // Maus- und Touch-Events
    function onInteractionStart(event) {
        isInteracting = true;
        lastMouseX = (event.touches ? event.touches[0].clientX : event.clientX) || lastMouseX;
    }
    
    function onInteractionMove(event) {
        if (!isInteracting) return;
        const clientX = (event.touches ? event.touches[0].clientX : event.clientX) || lastMouseX;
        const deltaX = clientX - lastMouseX;
        interactionVelocity = -deltaX * 0.001;
        lastMouseX = clientX;
    }

    function onInteractionEnd() {
        isInteracting = false;
        // Die Animation geht in die neue Richtung weiter, aber schwingt kurz aus
        animationVelocity = -interactionVelocity * 1.5;
        interactionVelocity = 0;
    }

    canvas.addEventListener('mousedown', onInteractionStart, false);
    canvas.addEventListener('mousemove', onInteractionMove, false);
    canvas.addEventListener('mouseup', onInteractionEnd, false);
    canvas.addEventListener('mouseleave', onInteractionEnd, false);

    canvas.addEventListener('touchstart', onInteractionStart, false);
    canvas.addEventListener('touchmove', onInteractionMove, false);
    canvas.addEventListener('touchend', onInteractionEnd, false);

    // @RFOF-NETWORK Signatur
    const sigElement = document.createElement('div');
    sigElement.textContent = '@RFOF-NETWORK BOx Erden Mond simulation for BOxchain-EXtentions';
    Object.assign(sigElement.style, {
        position: 'absolute', bottom: '5px', left: '5px', color: '#333', fontSize: '8px',
        fontFamily: 'Roboto, sans-serif'
    });
    document.body.appendChild(sigElement);

    // Animations-Loop
    function animate() {
        requestAnimationFrame(animate);

        // Langsame, linke Drehung des BOxchain-Würfels
        boxchainBox.rotation.y -= 0.002;

        // Bewegung des EXtention-Würfels
        if (isInteracting) {
            angle += interactionVelocity;
            boxchainBox.rotation.y += -interactionVelocity;
        } else {
            // Ausklingende Geschwindigkeit
            angle += animationVelocity;
            animationVelocity *= 0.98;
            if (Math.abs(animationVelocity) < 0.0001) { animationVelocity = 0.005; }
            extentionBox.rotation.y += 0.01;
        }
        
        extentionBox.position.x = Math.cos(angle) * radius;
        extentionBox.position.y = Math.sin(angle) * radius * 0.3; // Ellipsenförmige Bahn
        extentionBox.position.z = Math.sin(angle) * radius;
        extentionBox.rotation.y += 0.01; // Rechte Drehung

        // Linie aktualisieren
        line.geometry.setFromPoints([boxchainBox.position, extentionBox.position]);
        line.geometry.verticesNeedUpdate = true;

        renderer.render(scene, camera);
    }
    
    function onResize() {
        const parent = canvas.parentElement;
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
    
    window.addEventListener('resize', onResize);
    onResize();

    animate();
});

````




            
