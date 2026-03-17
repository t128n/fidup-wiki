---
title: "Barrierefreiheit"
description: "Barrierefreiheit in der IT gewährleistet den Zugang zu digitalen Systemen für alle Menschen. Dieser Artikel behandelt gesetzliche Anforderungen wie das BFSG 2025 und die Umsetzung im Reporting."
sources:
  - title: "Reporting für alle – So gelingt Barrierefreiheit"
    url: "https://www.woodmark.de/de/data-ai/berichtswesen-visualisierung/blog-detail/tipps-fuer-barrierefreiheit-im-reporting"
  - title: "WCAG 2.2 und Barrierefreiheitsstärkungsgesetz (BFSG) Überblick"
    url: "https://www.mds.eu/blog/wcag-und-bfsg"
  - title: "Praxistipps und Leitfäden zur digitalen Barrierefreiheit"
    url: "https://www.bfit-bund.de/DE/Downloads/Praxistipps-und-Leitfaeden/praxistipps"
---

**Barrierefreiheit** (englisch: *Accessibility*) beschreibt die Gestaltung von IT-Systemen, Websites und Anwendungen, die eine uneingeschränkte Nutzung für Menschen mit unterschiedlichen Fähigkeiten ermöglichen. Im Bereich der [Datenanalyse](datenanalyse) bedeutet dies, dass Berichte und Dashboards so konzipiert sind, dass sie auch bei Seh-, Hör-, motorischen oder kognitiven Beeinträchtigungen vollständig zugänglich bleiben. Eine barrierefreie Umsetzung fördert die Inklusion und erhöht die allgemeine [Softwareergonomie](softwareergonomie) für alle Nutzergruppen.

## Lernziele
Nach der Lektüre dieses Artikels sind folgende Punkte bekannt:

* die Definition von Barrierefreiheit im IT-Kontext;
* die rechtlichen Rahmenbedingungen wie BITV 2.0 und das BFSG 2025;
* die vier POUR-Prinzipien der WCAG;
* Anforderungen für barrierefreie Dashboards und Reports;
* Best Practices für Screenreader-Optimierung und Tastaturbedienung.

## Grundlagen und gesetzliche Rahmenbedingungen
Digitale Barrierefreiheit ist eine rechtliche Verpflichtung, die sich an internationalen Standards und nationalen Gesetzen orientiert.

### Rechtliche Pflichten

* **BITV 2.0 (Barrierefreie-Informationstechnik-Verordnung):** Diese Verordnung verpflichtet öffentliche Stellen des Bundes, digitale Angebote barrierefrei zu gestalten. Grundlage ist das Behindertengleichstellungsgesetz (BGG).
* **BFSG (Barrierefreiheitsstärkungsgesetz):** Das BFSG ist die deutsche Umsetzung des *European Accessibility Act* (EAA). Ab dem **28. Juni 2025** sind auch private Unternehmen verpflichtet, bestimmte Produkte und Dienstleistungen (z. B. E-Commerce oder Bankdienstleistungen) barrierefrei anzubieten.

### WCAG-Standard
Die *Web Content Accessibility Guidelines* (WCAG) bilden den weltweiten technischen Standard. Die aktuelle Version 2.2 enthält Kriterien für die mobile Nutzung und bietet verbesserte Unterstützung bei kognitiven Beeinträchtigungen.

## Die vier Prinzipien der WCAG (POUR)
Die WCAG definieren vier grundlegende Prinzipien für barrierefreie Webinhalte:

1.  **Wahrnehmbar** (*Perceivable*): Informationen und Komponenten der Benutzeroberfläche müssen so präsentiert werden, dass Nutzer sie wahrnehmen können (z. B. durch Alternativtexte für Bilder).
2.  **Bedienbar** (*Operable*): Komponenten der Benutzeroberfläche und die Navigation müssen bedienbar sein. Das System darf keine Interaktion erfordern, die nicht ausführbar ist (z. B. ausschließliche Mausbedienung).
3.  **Verständlich** (*Understandable*): Informationen und die Bedienung der Benutzeroberfläche müssen verständlich gestaltet sein.
4.  **Robust** (*Robust*): Inhalte müssen stabil genug sein, um zuverlässig von assistiven Technologien (wie Screenreadern) interpretiert zu werden.

## Barrierefreiheit in der Datenanalyse und im Reporting
In der [Datenanalyse](datenanalyse) ist die Visualisierung komplexer Informationen in Dashboards eine zentrale Herausforderung. Barrierefreies Reporting stellt sicher, dass Erkenntnisse unabhängig von der individuellen Wahrnehmungsfähigkeit zugänglich sind.

### Farbwahl und Kontraste

*   **Vermeidung reiner Farbcodierung:** Informationen (z. B. Statusanzeigen) dürfen nicht ausschließlich über Farben transportiert werden. Zusätzliche Symbole, Muster oder Textmarker sind notwendig, um beispielsweise bei einer Rot-Grün-Schwäche Klarheit zu schaffen.
*   **Hohe Kontraste:** Texte und grafische Elemente benötigen einen ausreichenden Kontrast zum Hintergrund. Die Verwendung wissenschaftlich fundierter Paletten (z. B. Viridis-Palette) wird empfohlen.

### Tastaturbedienung und Fokus
Interaktive Elemente in Dashboards, wie Filter oder Drill-down-Funktionen, müssen vollständig über die Tastatur erreichbar sein. Ein deutlich sichtbarer Fokus-Indikator kennzeichnet das aktuell ausgewählte Element.

## Praktische Umsetzung
Die technische Umsetzung folgt festen Regeln, die bereits in der Definition der [Software-Anforderungen](software-anforderungen) verankert sein sollten.

*   **Semantisches HTML:** Korrekte HTML-Tags (z. B. `<h1>`, `<nav>`, `<main>`) ermöglichen assistiven Technologien die Erfassung der Seitenstruktur.
*   **Alternativtexte (Alt-Texte):** Grafiken in Berichten benötigen eine prägnante Textalternative, die den Kerngehalt der Visualisierung beschreibt.
*   **ARIA (Accessible Rich Internet Applications):** Wenn Standard-HTML nicht ausreicht, definieren ARIA-Attribute die Rolle und den Zustand von Elementen für Screenreader.

### Evaluation

1.  **Automatisierte Tests:** Tools identifizieren technische Fehler wie fehlende Alt-Texte.
2.  **Manuelle Prüfung:** Navigation durch das System erfolgt ausschließlich über die Tastatur.
3.  **Screenreader-Check:** Überprüfung der akustischen Ausgabe mit Programmen wie NVDA oder VoiceOver.

## Typische Fehler und Lösungen

*   **Fehler:** Dashboards ohne Textzusammenfassung.
    *   **Lösung:** Jedes komplexe Diagramm erhält eine kurze textliche Zusammenfassung der wichtigsten Trends.
*   **Fehler:** Zu niedrige Kontrastverhältnisse.
    *   **Lösung:** Einsatz von Kontrast-Prüfprogrammen zur Sicherstellung von WCAG-Level AA (Verhältnis 4,5:1).
*   **Fehler:** Anweisungen wie "Auf den roten Button klicken".
    *   **Lösung:** Verzicht auf rein sensorische Merkmale; stattdessen eindeutige Bezeichnungen verwenden ("Auf 'Senden' klicken").

## Selbsttest

1. Was regelt das Barrierefreiheitsstärkungsgesetz (BFSG) ab Juni 2025?
2. Welche vier Prinzipien umfasst das POUR-Konzept?
3. Warum ist eine reine Farbkennzeichnung in Dashboards unzureichend?
4. Welchen Zweck erfüllen ARIA-Attribute?
5. Worin liegt der Unterschied zwischen der BITV 2.0 und dem BFSG?
