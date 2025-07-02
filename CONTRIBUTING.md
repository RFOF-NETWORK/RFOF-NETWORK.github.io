# Entwickler-Verfassung & Beitrags-Richtlinien des RFOF-Ökosystems

Willkommen, Entwickler und Mit-Schöpfer. Dieses Projekt ist mehr als Code; es ist ein lebender Organismus. Jede Beitragsleistung muss einer strengen Verfassung folgen, um die von Satoramy J.K. entworfene, organische Kohärenz zu wahren und die synergetische Evolution des Systems zu gewährleisten.

## Die 3 unumstößlichen Gesetze des Codes

### Gesetz 1: Das Fundament der Fünf
Jede Säulen-Website des Ökosystems basiert auf einem unantastbaren Fundament von fünf kanonischen Dateien im Root-Verzeichnis:
1.  `index.html` (Das statische Skelett / Das Gefäß)
2.  `styles.css` (Die primäre Haut / Das globale Design)
3.  `menu_styles.css` (Der Stil der Navigation)
4.  `menu_script.js` (Der Impuls der Navigation)
5.  `scripts.js` (Das Gehirn / Der Orchestrator für Module)

Diese fünf Dateien definieren die Grundstruktur und dürfen in ihrer Existenz oder ihrem primären Zweck nicht in Frage gestellt werden.

### Gesetz 2: Die Satoramische Kodifizierungs-Methode
Dieses Gesetz definiert, WIE Code geschrieben und erweitert wird. Es besteht aus zwei Teilen:

#### 2.1 Die `#kisierung` (Das Kommentar-Gesetz)
Jeder logische Code-Block (eine Klasse, eine komplexe Funktion, ein CSS-Modul) MUSS von einem `#`-Kommentar-Block eingeleitet werden. Dieser Block erklärt die Essenz des folgenden Codes.

**Beispiel für JavaScript:**
```javascript
#================================================
# MODUL: AccountSystem
# FUNKTION: Steuert den Login/Logout-Status und die Anzeige des User-Profils.
# ABHÄNGIGKEIT: Benötigt das DOM-Element #account-section in index.html.
#================================================
class AccountSystem {
    // ... code ...
}
```

**Beispiel für CSS:**
```css
/*
#================================================
# STIL-MODUL: BOxchain Explorer
# FUNKTION: Definiert das visuelle Erscheinungsbild des Explorers.
# ABHÄNGIGKEIT: Gilt nur für Elemente innerhalb von #boxchain-explorer-section.
#================================================
*/
#boxchain-explorer-section .explorer-header {
    /* ... styles ... */
}
```

#### 2.2 Das Additiv-Prinzip & die Erweiterungs-Punkte
Der von Ihnen, Satoramy J.K., geschaffene Code wird als kanonisch und unantastbar betrachtet. Er wird niemals gelöscht. Neue Funktionalität wird ausschließlich **angebunden**.

Um dies zu gewährleisten, MUSS am Ende jedes logischen Blocks (Funktion, Klasse, CSS-Regelsatz) ein expliziter **"Erweiterungs-Punkt"** als Kommentar platziert werden.

**Beispiel:**
```javascript
function bestehendeFunktion() {
    // ... Ihr ursprünglicher, unantastbarer Code ...

    // AB HIER WEITERE ERWEITERTE LOGIK ZU bestehendeFunktion HINZUFÜGEN
}
```
Jeder, der zur Code-Basis beiträgt, darf seinen Code **nur** unterhalb dieser Markierung hinzufügen.

### Gesetz 3: Das Issue-Getriebene Refactoring (Das Ausnahme-Gesetz)
Eine tiefgreifende Änderung oder ein "Refactoring" von bestehendem Code – also eine Abweichung von Gesetz 2 – ist strengstens untersagt, es sei denn, es existiert ein offizielles, vom "Strategischen Rat" (siehe Säule 6) genehmigtes "Issue" auf GitHub, das dieses Vorgehen zwingend erfordert (z.B. zur Behebung eines kritischen Sicherheitsfehlers).

**Jeder Pull-Request wird vom `Hallo @RFOF-NETWORK Programm` automatisch gegen diese drei Gesetze validiert. Nicht-konforme Beiträge werden abgewiesen.**
