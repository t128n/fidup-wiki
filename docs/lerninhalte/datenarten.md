---
title: "Datenarten"
description: "Klassifizierung von Daten in strukturierte, unstrukturierte und halbstrukturierte Formate sowie deren Relevanz für Speicherarchitekturen und Analysen."
sources:
  - title: "Strukturierte vs. unstrukturierte Daten: Was ist der Unterschied?"
    url: "https://www.ibm.com/de-de/think/topics/structured-vs-unstructured-data"
  - title: "Unterschied zwischen strukturierten und unstrukturierten Daten"
    url: "https://aws.amazon.com/de/compare/the-difference-between-structured-data-and-unstructured-data/"
  - title: "Strukturierte, semistrukturierte und unstrukturierte Daten verstehen"
    url: "https://www.astera.com/de/type/blog/structured-semi-structured-and-unstructured-data/"
---

**Datenarten** beschreiben die Kategorisierung von Informationen nach ihrem Grad an Formatierung und Ordnung. In der Informationstechnik wird primär zwischen strukturierten, unstrukturierten und halbstrukturierten Daten unterschieden. Diese Einteilung bestimmt maßgeblich die Wahl der Speicherarchitektur – etwa zwischen einem [Data Warehouse](data-warehouse) und einem [Data Lake](data-lake) – sowie die Methoden zur Datenverarbeitung und Analyse.

## Lernziele

Nach diesem Artikel können die verschiedenen Datenarten fachlich eingeordnet werden:

* Unterschiede zwischen strukturierten, unstrukturierten und halbstrukturierten Daten benennen.
* Typische Anwendungsfälle und Speicherorte für die jeweiligen Formate zuordnen.
* Die Bedeutung halbstrukturierter Formate wie JSON und XML im Datenaustausch erklären.
* Den Stellenwert unstrukturierter Daten für [maschinelles Lernen](maschinelles-lernen) und KI erfassen.

## Einführung

In der Informationstechnik fokussiert sich die Unterscheidung von Datenarten auf die technische Repräsentation und den Grad der Ordnung. Während die Statistik Daten primär nach ihrem Informationsgehalt (Skalenniveaus) klassifiziert, betrachtet die IT-Architektur die Strukturierung, um die Verarbeitbarkeit durch Algorithmen und die Effizienz der Speicherung zu optimieren.

## Strukturierte Daten

Strukturierte Daten folgen einem festen, vordefinierten Datenmodell (Schema). Sie sind hochgradig organisiert und lassen sich meist tabellarisch in Zeilen und Spalten abbilden.

*   **Eigenschaften:** Jedes Datenfeld besitzt einen eindeutigen Datentyp (z. B. Ganzzahl, Zeichenkette, Datum). Es gilt das Prinzip **Schema-on-Write**: Die Struktur muss bereits vor dem Speichervorgang definiert sein.
*   **Verarbeitung:** Der Zugriff erfolgt effizient über standardisierte Abfragesprachen wie [SQL](sql).
*   **Speicherung:** Klassischerweise werden diese Daten in relationalen Datenbanksystemen (RDBMS) oder einem [Data Warehouse](data-warehouse) verwaltet.
*   **Beispiele:** Buchhaltungsdaten, Lagerbestandslisten, Transaktionsdaten im E-Commerce.

## Unstrukturierte Daten

Unstrukturierte Daten besitzen kein vordefiniertes Datenmodell und keine interne Struktur, die für Maschinen ohne Vorverarbeitung interpretierbar ist. In modernen Unternehmen machen sie oft rund 80 % der generierten Datenmenge aus.

*   **Eigenschaften:** Sie liegen in heterogenen Formaten vor und haben häufig einen qualitativen Charakter.
*   **Herausforderung:** Da sie kein festes Schema besitzen, lassen sie sich nicht direkt mit tabellarischen Abfragen analysieren. Zur Auswertung sind Verfahren der Künstlichen Intelligenz oder Natural Language Processing (NLP) notwendig.
*   **Speicherung:** Aufgrund des hohen Volumens und der fehlenden Struktur erfolgt die Speicherung häufig in einem [Data Lake](data-lake).
*   **Beispiele:** E-Mails, Videodateien, PDF-Dokumente, Social-Media-Beiträge.

## Halbstrukturierte Daten

Halbstrukturierte Daten (auch semistrukturierte Daten genannt) bilden eine Brücke zwischen den beiden anderen Typen. Sie nutzen Marker, Tags oder Metadaten zur Organisation, ohne an ein starres Tabellenschema gebunden zu sein.

*   **Eigenschaften:** Diese Daten gelten als „selbstbeschreibend“, da die Informationen über die Struktur (z. B. Schlüssel-Wert-Paare) direkt in der Datei enthalten sind.
*   **Flexibilität:** Das Schema kann dynamisch angepasst werden, ohne die gesamte Datenbankstruktur ändern zu müssen.
*   **Einsatzbereich:** Sie sind der Standard für den Datenaustausch zwischen Systemen und für moderne Web-Schnittstellen (APIs).
*   **Beispiele:** 
    *   **JSON:** Standardformat in Webanwendungen und NoSQL-Datenbanken.
    *   **XML:** Klassisches Format für den plattformübergreifenden Austausch komplexer Dokumentstrukturen.
    *   **CSV:** Einfache Listenform, die zwar strukturiert wirkt, aber oft flexibel ohne festes Schema gehandhabt wird.

> **Kernpunkt:** Strukturierte Daten erfordern ein festes Schema **vor** der Speicherung (*Schema-on-Write*). Unstrukturierte Daten werden oft in Rohform gespeichert und erst bei der Auswertung interpretiert (*Schema-on-Read*).

## Vergleich der Datenarten

Die folgende Gegenüberstellung verdeutlicht die technischen Unterschiede:

| Merkmal | Strukturierte Daten | Halbstrukturierte Daten | Unstrukturierte Daten |
| :--- | :--- | :--- | :--- |
| **Schema** | Starr (Schema-on-Write) | Flexibel / Selbstbeschreibend | Kein festes Schema |
| **Format** | Tabellen (Zeilen/Spalten) | Hierarchien (Tags/Keys) | Vielfältig (Audio, Text, Media) |
| **Abfrage** | [SQL](sql) | JSON-Path, XPath | KI, Volltextsuche, NLP |
| **Speicher** | Data Warehouse | NoSQL, Cloud Storage | Data Lake |
| **Anteil** | ca. 20 % | Wachsend | ca. 80 % |

### Praxisrelevanz: Die 80/20-Regel
In Unternehmen bilden strukturierte Daten oft das operative Rückgrat (z. B. ERP-Systeme). Den größten Wissensschatz stellen jedoch unstrukturierte Daten dar (z. B. Kundenfeedback, Marktberichte). Ziel moderner IT-Strategien ist es, beide Welten zu integrieren, um umfassende Analysen zu ermöglichen.

## Häufige Fehler und Tipps

*   **Verwechslung mit Statistik:** Technische Datenarten (Strukturgrad) dürfen nicht mit statistischen Skalenniveaus (Inhaltstyp wie nominal oder metrisch) gleichgesetzt werden. Erstere entscheiden über die Speicherung, Letztere über die mathematische Auswertung.
*   **Unterschätzung unstrukturierter Daten:** Nur weil Daten schwerer zu verarbeiten sind, sind sie nicht weniger wertvoll. Sie enthalten oft die entscheidenden Kontextinformationen für strategische Planungen.
## Tipps zur Formatwahl

Für den Datenaustausch zwischen Systemen bieten halbstrukturierte Formate wie JSON die beste Balance zwischen Kompatibilität und Flexibilität.

## Selbsttest

1. In welchem Systemtyp werden strukturierte Daten bevorzugt gespeichert?
2. Warum werden XML- oder JSON-Dateien als „selbstbeschreibend“ bezeichnet?
3. Welches Verhältnis zwischen strukturierten und unstrukturierten Daten ist in Unternehmen typisch?
4. Warum ist für die automatisierte Auswertung von Videodaten KI-Unterstützung notwendig?
5. Welche zwei gängigen Formate eignen sich für den Austausch halbstrukturierter Daten?
