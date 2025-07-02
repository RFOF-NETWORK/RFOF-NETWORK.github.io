# Säule 1: RFOFSpiderWeb.NET - Das Hauptportal des Ökosystems (Version Zenith)

Dieses Repository enthält den Code für die primäre Landing-Page und das Gesicht des gesamten RFOF-Ökosystems. Es dient als der erste Kontaktpunkt für alle Nutzer und als das Tor zu allen anderen Säulen des Netzwerks.

**Live-Site:** [https://rfof-network.github.io/](https://rfof-network.github.io/)

---

## Finale Kanonische Architektur (SOLL-ZUSTAND)

Diese Struktur ist das Ergebnis unserer gemeinsamen Analyse und repräsentiert den idealen, modularen und zukunftssicheren Aufbau für diese Säule. Sie folgt strikt der **"Verfassung des Codes"** und dem **Additiv-Prinzip**.

```plaintext
/ (RFOF-NETWORK.github.io)
|
|-- content/
|   `-- main.md              // Enthält den gesamten Markdown-Inhalt der Seite.
|
|-- data/
|   `-- schemas/             // (Für zukünftige Daten-Schemata wie .cw-Dateien)
|
|-- integrations/
|   |-- oauth/               // Für die Logik der Social-Logins (Google, GitHub, Microsoft).
|   `-- telegram/            // Für die Anbindung von Telegram-Bots.
|       `-- bots/
|
|-- modules/
|   |-- account/             // Gekapseltes Modul für das Account-System.
|   |   |-- account.js
|   |   `-- account.css
|   |
|   `-- explorer/            // Gekapseltes Modul für den BOxchain-Explorer.
|       |-- explorer.js
|       `-- explorer.css
|
|-- scripts/
|   `-- main.js              // Das "Gehirn": Lädt Inhalte und initialisiert Module.
|
|-- styles/
|   `-- main.css             // Die globale, RVA-25 konforme Stildatei.
|
|-- index.html               // Das reine HTML-Gefäß (Skelett).
|-- menu_script.js           // Isolierte Logik für das Navigationsmenü.
|-- menu_styles.css          // Isolierte Stile für das Navigationsmenü.
|
`-- (Weitere Standarddateien: LICENSE, .gitignore, etc.)
```

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
