---
title: Berichtsheft Generator
description: Clientseitiger Berichtsheft Generator für Auszubildende im Beruf Fachinformatiker:in für Daten- und Prozessanalyse.
aiDisclosure: false
aside: false
---

<script setup>
import BerichtsheftGenerator from '../../.vitepress/theme/components/BerichtsheftGenerator.vue'
</script>

# Berichtsheft Generator

Ein einfaches Werkzeug zur Generierung formatierter Tagesberichte für das Ausbildungsnachweis-Berichtsheft (z. B. im IHK-Standard-Format `MONTAG, DD.MM.YYYY`).

<ClientOnly>
  <BerichtsheftGenerator />
</ClientOnly>


## Hinweise zur Nutzung

- **Wochen-Navigation:** Über `◀️` und `▶️` neben dem Datum kann schnell um jeweils 7 Tage vor- oder zurückgesprungen werden.
- **Wochen-Vorlagen:** Schnellauswahl über `⚡ Vorlage anwenden...` für ganze Wochen (Berufsschule, Urlaub, Krank, Feiertag).
- **Vorwoche übernehmen:** Mit `📋 Aus Vorwoche kopieren` werden die Stichpunkte und Status-Einstellungen der Vorwoche übernommen.
- **Berufsschultage & Lernfelder:** Bei Auswahl von `🏫 Berufsschultag` steht die Ausbildungs-Lernfeld-Auswahl (**LF 1 bis LF 12c**) pro Stichpunkt bereit.
- **FIDP-Textbausteine & Variablen:** Vordefinierte und eigene Textbausteine mit dynamischen Variablen (`{{ticket_nr}}`, `{{thema}}`, `{{date}}`).
- **Fortgeschrittene JS-Textbausteine (Skripte):** Erstellung eigener JavaScript-Funktionen für komplexe Logik (siehe unten).
- **Entwurfs-Speicher & Vollständigkeit:** Automatische Entwurfsspeicherung pro Woche im Browser (`localStorage`) und Live-Vollständigkeitsanzeige (`✅ 5/5 Tage befüllt`).
- **Teilen, Import & Export:** Über das Hauptmenü `📦 Teilen & Verwalten...` können komplette Berichtsheft-Backups (.json) heruntergeladen, eingelesen oder direkt über die Zwischenablage getauscht werden (inkl. eigener Textbausteine).
- **Export:** Kopieren in die Zwischenablage (`📋 Text kopieren`) oder Download als Textdatei (`.txt Download`).

### Syntax für fortgeschrittene JavaScript-Textbausteine

Über `➕ [Neuen Baustein erstellen...]` können neben einfachen Templates auch **dynamische JavaScript-Funktionen** definiert werden. Die Funktionsargumente werden beim Auswählen des Bausteins automatisch vom Generator abgefragt.

#### Syntax-Format:
```javascript
function(arg1, arg2, argN) {
  return "Dein dynamischer Text " + arg1;
}
```

#### Verfügbare Vorgefertigte Argumente (werden automatisch befüllt):
- `date`: Das aktuelle Tagesdatum (z. B. `27.07.2026`)
- `day`: Der Name des Wochentags (z. B. `MONTAG`)
- `hours`: Die gewählten Tagesstunden (z. B. `8`)
- `kw` / `calendarweek`: Die berechnete Kalenderwoche (z. B. `31`)
- `year`: Das vierstellige Jahr (z. B. `2026`)
- `month`: Der zweistellige Monat (z. B. `07`)
- `status`: Der Status des Tages (z. B. `work`, `school`, `(URLAUB)`)
- `holiday` / `feiertag`: Der Name des Feiertags oder `""` (z. B. `Erster Weihnachtstag`)
- `isodate`: Das ISO-Datum (z. B. `2026-07-27`)
- `mondaydate`: Das Datum des Montags der ausgewählten Woche (z. B. `27.07.2026`)
- `isweekend`: Boolean (`true` / `false`)
- `entry`: Das vollständige Tages-Objekt mit allen Daten

*Alle anderen benutzerdefinierten Argumente (z. B. `ticket`, `modul`, `thema`, `komponente`) lösen beim Auswählen automatisch ein interaktives Abfragefenster aus.*

#### Beispiele:
```javascript
// Beispiel 1: Ticket & Modul Abfrage
function(ticket, modul) {
  return "Refactoring im Modul [" + modul + "] für Ticket #" + ticket;
}

// Beispiel 2: Verwendung automatischer Variablen (date & hours)
function(ticket, date, hours) {
  return "Bearbeitung von Ticket #" + ticket + " am " + date + " (" + hours + " Std.)";
}

// Beispiel 3: Fortgeschritten - Externe API-Abfrage (GitHub Commit Details)
async function(repo, commit_hash) {
  const res = await fetch("https://api.github.com/repos/" + repo + "/commits/" + commit_hash);
  const data = await res.json();
  const commitMsg = data.commit.message.split("\n")[0];
  return "GitHub Commit [" + commit_hash.substring(0, 7) + "]: " + commitMsg;
}

// Beispiel 4: Fortgeschritten - REST-API für Ticket-Systeme (z. B. Jira/GitLab)
async function(ticket_id) {
  const res = await fetch("https://api.example.com/tickets/" + ticket_id);
  const data = await res.json();
  return "Ticket #" + ticket_id + " [" + data.status + "]: " + data.summary;
}
```

### JSDoc-Vorlage für externe Editoren (VS Code Autocomplete & Type-Hints)

Kopiere diese Vorlage in deinen Editor (z. B. VS Code), um volles Autocompletion und Typ-Abfragen für alle Argumente zu erhalten. Über das Menü `📦 Teilen & Verwalten... -> ⚡ JS-Skript-Vorlage (JSDoc) kopieren` kann dieser Code auch direkt in die Zwischenablage kopiert werden:

```javascript
/**
 * Advanced Berichtsheft Textbaustein (Skript)
 * 
 * @param {string} ticket - Ticket-Nummer oder ID (Benutzerabfrage)
 * @param {string} modul - Modulname oder Komponente (Benutzerabfrage)
 * @param {string} date - Automatisch: Tagesdatum (z. B. "27.07.2026")
 * @param {string} day - Automatisch: Wochentag (z. B. "MONTAG")
 * @param {number} hours - Automatisch: Tagesstunden (z. B. 8)
 * @param {number} kw - Automatisch: Kalenderwoche (z. B. 31)
 * @param {string} year - Automatisch: Jahr (z. B. "2026")
 * @param {string} month - Automatisch: Monat (z. B. "07")
 * @param {string} status - Automatisch: Tagesstatus ("work" | "school" | "(URLAUB)")
 * @param {string} holiday - Automatisch: Feiertag Name oder ""
 * @param {boolean} isweekend - Automatisch: Ist Wochenende (true / false)
 * @param {Object} entry - Automatisch: Vollständiges Tages-Objekt
 * @returns {Promise<string> | string} Formatisierter Text für das Berichtsheft
 */
async function(ticket, modul, date, day, hours, kw, year, month, status, holiday, isweekend, entry) {
  // Beispiel: HTTP-Abfrage per REST-API
  // const res = await fetch(`https://api.github.com/repos/${modul}/commits/${ticket}`);
  // const data = await res.json();
  
  return `KW${kw}: Modul-Entwicklung [${modul}] für Ticket #${ticket} (Dauer: ${hours}h)`;
}
```

