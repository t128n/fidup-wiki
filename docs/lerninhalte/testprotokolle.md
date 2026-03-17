---
title: "Testprotokolle"
description: "Testprotokolle dokumentieren die Durchführung von Softwaretests, einschließlich Testumgebung, Daten und Ergebnisse. Sie fördern Transparenz, Nachverfolgbarkeit und Qualitätssicherung in der Daten- und Prozessanalyse für Auszubildende."
sources:
  - title: "Das Testprotokoll"
    url: "https://www.peterjohann-consulting.de/testprotokoll/"
  - title: "ISO 29119: Die internationalen ISO-Standards"
    url: "https://www.imbus.de/softwarequalitaet/software-standards-konformitaet/iso-29119"
  - title: "ISO/IEC 29119"
    url: "https://en.wikipedia.org/wiki/ISO/IEC_29119"
---

**Testprotokolle** sind detaillierte Aufzeichnungen der Durchführung von Softwaretests, die Transparenz und Nachverfolgbarkeit in der Qualitätssicherung gewährleisten. Sie unterscheiden sich von Testberichten, die aggregierte Ergebnisse darstellen, und von Testfällen, die die Testvorbereitung beschreiben.

## Lernziele
Dieser Artikel vermittelt Kenntnisse über:

- Den Zweck und die Funktionen von Testprotokollen.
- Die typischen Inhalte eines Testprotokolls.
- Den Unterschied zwischen Testprotokoll und Testbericht.
- Die Erstellung eines einfachen Testprotokolls anhand eines Beispiels.

## Kurzüberblick
Testprotokolle entstehen während der Testausführung und dokumentieren chronologisch die Aktivitäten pro Testfall. Sie bilden die Grundlage für Testberichte und unterstützen Standards wie ISO 29119-3.

## Zweck und Funktionen
Testprotokolle dienen mehreren Zwecken:

- **Nachverfolgbarkeit**: Sie ermöglichen die Überprüfung, ob alle Anforderungen getestet wurden.
- **Kommunikation**: Sie informieren Entwickler und Stakeholder über Testergebnisse.
- **Qualitätssicherung**: Sie dokumentieren Fehler und fördern die Verbesserung der Software.
- **Compliance**: Sie unterstützen die Einhaltung von Normen und Vorschriften.

## Aufbau und Inhalte
Ein Testprotokoll teilt sich oft in Übersichtsteil und Informationsteil. Typische Inhalte umfassen:

1. **Testidentifikation**: Name, Version, Datum und Uhrzeit.
2. **Testumgebung**: Hardware, Software und Netzwerk.
3. **Testobjekt**: Beschreibung der getesteten Funktionalität.
4. **Testdaten**: Herkunft und Struktur der Daten.
5. **Testschritte**: Detaillierte Abläufe.
6. **Ergebnisse**: Erfolg oder Misserfolg, mit Anhängen wie Screenshots.
7. **Fehlerberichte**: Auflistung von Problemen mit Schweregrad.
8. **Zusammenfassung**: Kurze Bewertung und Empfehlungen.

## Testprotokoll vs. Testbericht
Testprotokolle dokumentieren einzelne Testfälle während der Ausführung, während Testberichte mehrere Protokolle zusammenfassen und Gesamtergebnisse auf Management-Ebene präsentieren. Protokolle sind detailliert und testerzentriert, Berichte aggregiert und stakeholderorientiert.

## Erstellungsmethoden
Protokolle können manuell erstellt werden, etwa in Tabellen oder Formularen, oder automatisch generiert durch Testtools. Manuelle Erstellung bietet Flexibilität, automatische spart Zeit bei wiederkehrenden Tests.

## Standards
Der Standard ISO 29119-3 definiert Formate für Testdokumentation, einschließlich Testprotokolle. Er ersetzt ältere Normen und gilt für verschiedene Vorgehensmodelle, wird jedoch für agile Kontexte als zu formal kritisiert.

## Vorteile und Nachteile
Vorteile:

- Erhöhte Transparenz und Qualitätssicherung.
- Wissensbasis für zukünftige Projekte.

Nachteile:

- Zeitaufwendig bei großen Tests.
- Risiko veralteter Informationen ohne regelmäßige Pflege.

## Beispiel
Angenommen, ein Testfall prüft die Anmeldung in einer Datenanalyse-Software. Das Protokoll könnte folgendermaßen aussehen:

- **Testidentifikation**: Anmeldung_v1.0, 15. Januar 2026, 10:00 Uhr.
- **Testumgebung**: Windows 10, Browser Chrome 120.
- **Testobjekt**: Login-Funktionalität.
- **Testdaten**: Benutzername "testuser", Passwort "12345".
- **Testschritte**: 1. Seite öffnen. 2. Daten eingeben. 3. Anmelden klicken.
- **Ergebnisse**: Erfolgreich, Zeit: 2 Sekunden.
- **Fehlerberichte**: Keine.
- **Zusammenfassung**: Test bestanden, bereit für Release.

## Häufige Fehler und Tipps

- Nicht verwechseln mit Testberichten: Protokolle sind Basis, Berichte Aggregation.
- Immer vollständige Angaben machen, um Nachverfolgbarkeit zu sichern.
- Bei automatischen Protokollen Tools wie JIRA oder TestRail verwenden.
- Die Einbindung von [Testkonzepten](testkonzept) und [Testverfahren](testverfahren) unterstützt die ganzheitliche Testplanung.

## Häufig gestellte Fragen

1. Was ist der Hauptzweck eines Testprotokolls?
2. Nenne drei typische Inhalte.
3. Wie unterscheidet sich ein Testprotokoll von einem Testbericht?
4. Welcher Standard definiert Testprotokolle?
5. Gib ein Beispiel für einen Testschritt an.