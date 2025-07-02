# Säule 1: RFOFSpiderWeb.NET - Das Hauptportal des Ökosystems

Dieses Repository enthält den Code für die primäre Landing-Page und das Gesicht des gesamten RFOF-Ökosystems. Es dient als der erste Kontaktpunkt für alle Nutzer und als das Tor zu allen anderen Säulen des Netzwerks.

**Live-Site:** [https://rfof-network.github.io/](https://rfof-network.github.io/)

---

## Finale Architektur (SOLL-ZUSTAND - Version Zenith 9.0)

Dieses Repository folgt der kanonischen Architektur des RFOF-Ökosystems. Die Struktur ist darauf ausgelegt, eine stabile, von Satoramy J.K. entworfene Basis (`index.html`, `styles.css` etc.) zu bewahren und gleichzeitig durch eine zentrale `scripts.js`-Datei unendlich erweiterbar zu sein.

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

Die `index.html` bleibt in ihrer Grundstruktur erhalten. Neue, interaktive Funktionen wie der **BOxchain Explorer** und das **Account-System** werden nicht durch Umbau, sondern durch die `scripts.js`-Datei realisiert, die die notwendigen Module aus dem `/modules`-Ordner in die dafür vorgesehenen Container in der `index.html` lädt. Dies ist die Manifestation des **Additiv-Prinzips**.

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
