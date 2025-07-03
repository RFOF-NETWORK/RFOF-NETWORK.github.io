# Säule 1: RFOFSpiderWeb.NET - Das Hauptportal des Ökosystems

Dieses Repository enthält den Code für die primäre Landing-Page und das Gesicht des gesamten RFOF-Ökosystems. Es dient als der erste Kontaktpunkt für alle Nutzer und als das Tor zu allen anderen Säulen des Netzwerks.

**Live-Site:** [https://rfof-network.github.io/](https://rfof-network.github.io/)

---

## Finale Architektur (Version Zenith 12.0)

Dieses Repository folgt der **additiven Fusionsmethode**. Die ursprüngliche, von Satoramy J.K. kodifizierte `index.html` bleibt in ihrer Struktur unangetastet. Neue Funktionalitäten (Explorer, Account-System) wurden durch eine Erweiterung des CSS und eine Kapselung der gesamten Logik in einem einzigen, angehängten `<script>`-Block direkt in die `index.html` integriert. Dies bewahrt die ursprüngliche Vision und erweitert sie, ohne sie zu zerstören.

### Kanonische Repository-Struktur

```plaintext
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
```

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
