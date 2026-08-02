# Beitragen zu fidup-wiki

Informationen und Regeln für Beiträge zum Projekt `fidup-wiki`.

## Sprachstil (Vereinfachtes Deutsch / ASD-STE100)

Texte einfach, präzise und neutral verfassen. Keine direkte Ansprache (kein „Sie“ / „Du“).

Regeln für technisches Deutsch:

1. **Kurze Sätze nutzen:** Maximal 20 Wörter pro Satz.
2. **Einen Gedanken pro Satz formulieren:** Komplexe Aussagen aufteilen.
3. **Aktiv-Formulierungen verwenden:** Neutrale oder aktive Satzstruktur wählen.
4. **Einheitliche Begriffe wählen:** Durchgehend die gleichen Fachbegriffe nutzen.
5. **Listen verwenden:** Arbeitsanweisungen als strukturierte Listen darstellen.

## KI-Transparenz gemäß EU AI Act

Dieses Projekt befolgt die Transparenzvorschriften gemäß dem [EU AI Act](https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence).

Bei Erstellung oder Bearbeitung von Inhalten durch künstliche Intelligenz:

- Pull Request mit dem passenden Badge kennzeichnen:
    - ![AI Generated](https://t128n.github.io/starlight-ai-label/badges/ai-generated.svg) für vollständig KI-generierte Texte.
    - ![AI Modified](https://t128n.github.io/starlight-ai-label/badges/ai-modified.svg) für von KI überarbeitete Texte.
- KI-generierte Fakten gründlich auf Richtigkeit prüfen.
- Verwendete Quellen im jeweiligen Artikel verlinken.

## Lokale Entwicklung

### Voraussetzungen

- **Node.js**: Version 20 oder höher
- **pnpm**: Version 10.28.2 oder höher

### Schritte zum Starten

1. Repository klonen:

    ```bash
    git clone https://github.com/t128n/fidup-wiki.git
    cd fidup-wiki
    ```

2. Abhängigkeiten installieren:

    ```bash
    pnpm install
    ```

3. Entwicklungsserver starten:
    ```bash
    pnpm dev
    ```
    Die Seite ist unter `http://localhost:5173` erreichbar.

### Befehle

| Befehl              | Beschreibung                         |
| :------------------ | :----------------------------------- |
| `pnpm dev`          | Startet den Entwicklungsserver.      |
| `pnpm build`        | Erstellt die Produktionsdateien.     |
| `pnpm preview`      | Zeigt die gebaute Seite lokal an.    |
| `pnpm test`         | Führt die automatisierten Tests aus. |
| `pnpm format`       | Formatiert den Quellcode mit oxfmt.  |
| `pnpm format:check` | Prüft die Code-Formatierung.         |

## Lernzettel erstellen oder bearbeiten

1. Neue Markdown-Datei im Ordner `docs/lerninhalte/` anlegen.
2. Frontmatter-Daten am Anfang der Datei einfügen:

    ```markdown
    title: Name des Themengebiets
    description: Kurze Zusammenfassung des Inhalts.
    ```

3. Text mit klaren Überschriften (`##`, `###`) gliedern.
4. Abschnitt `## Quellen` am Ende des Artikels ergänzen.

## Qualitätssicherung und Tests

Vor dem Erstellen eines Pull Requests folgende Schritte durchführen:

1. Code formatieren:

    ```bash
    pnpm format
    ```

2. Tests ausführen:
    ```bash
    pnpm test
    ```

## Ablauf für Pull Requests

1. Fork des Repositorys erstellen.
2. Neuen Branch anlegen:
    ```bash
    git checkout -b feature/mein-thema
    ```
3. Änderungen committen.
4. Branch ins eigene Repository pushen.
5. Pull Request gegen den Branch `main` erstellen.
