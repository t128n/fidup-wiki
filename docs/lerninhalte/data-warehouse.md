---
title: "Data Warehouse"
description: "Ein Data Warehouse ist ein zentrales System zur Zusammenführung und Analyse von Daten aus verschiedenen Unternehmensbereichen zur Unterstützung betrieblicher Entscheidungen."
sources:
    - title: "Data Warehouse • Definition | Gabler Wirtschaftslexikon"
      url: "https://wirtschaftslexikon.gabler.de/definition/data-warehouse-31084"
    - title: "What Is a Data Warehouse? | IBM"
      url: "https://www.ibm.com/think/topics/data-warehouse"
    - title: "Online Analytical Processing (OLAP) • Definition | Gabler"
      url: "https://wirtschaftslexikon.gabler.de/definition/online-analytical-processing-olap-44952"
---

Ein **Data Warehouse** (DWH) ist eine zentrale, themenorientierte und zeitraumbezogene Datenbank, die speziell für analytische Aufgaben und die Unterstützung von Managemententscheidungen entwickelt wurde. Im Gegensatz zu operativen Datenbanken integriert ein Data Warehouse Daten aus unterschiedlichen, oft heterogenen Quellsystemen in einer einheitlichen Struktur. Es bildet die technologische Basis für Business Intelligence und ermöglicht eine langfristige Historisierung von Informationen, um Trends und Entwicklungen über große Zeiträume hinweg auszuwerten.

## Lernziele

Nach der Lektüre dieses Artikels sind folgende Kenntnisse vorhanden:

- Das Konzept und die Merkmale eines Data Warehouses können erläutert werden.
- Der Unterschied zwischen operativen (OLTP) und analytischen Systemen (OLAP) ist bekannt.
- Die Phasen des [ETL-Prozesses](etl) in der DWH-Architektur sind beschreibbar.
- Die Datenmodelle Star-Schema und Snowflake-Schema können voneinander abgegrenzt werden.
- Die Rolle von Data Marts und Metadaten ist verständlich.

## Kurzüberblick

Ein Data Warehouse dient als zentraler Datenspeicher, in dem Informationen nicht für das operative Tagesgeschäft (wie das Buchen von Verkäufen), sondern für die strategische Auswertung gesammelt werden. Die Daten sind schreibgeschützt (non-volatile) und werden in regelmäßigen Abständen aus den Quellsystemen aktualisiert.

## Konzept und Abgrenzung (OLTP vs. OLAP)

Für das Verständnis der Funktion eines Data Warehouses ist die Unterscheidung zwischen zwei Systemwelten entscheidend:

- **OLTP (Online Transaction Processing):** Operative Systeme (z. B. ERP- oder CRM-Systeme), die das Tagesgeschäft abwickeln. Diese sind auf viele kurze Schreib- und Lesevorgänge optimiert (Beispiel: „Kunde kauft Artikel X“).
- **OLAP (Online Analytical Processing):** Das Data Warehouse ist ein OLAP-System. Es ist auf komplexe Leseanfragen optimiert, die große Datenmengen aggregieren (Beispiel: „Vergleich des Filialumsatzes zum Vorjahr“).

$$ \text{OLTP} \rightarrow \text{Transaktionsorientiert} \neq \text{OLAP} \rightarrow \text{Analyseorientiert} $$

## Architektur und Funktionsweise

Die Architektur eines Data Warehouses besteht klassischerweise aus mehreren Schichten, die den Datenfluss von der Quelle bis zur Analyse steuern.

### Der ETL-Prozess

Bevor Daten im Data Warehouse nutzbar sind, durchlaufen sie den [ETL-Prozess](etl):

1.  **Extract (Extrahieren):** Export der Daten aus verschiedenen Quellen (Datenbanken, Excel-Dateien, APIs).
2.  **Transform (Transformieren):** Bereinigung, Vereinheitlichung und Überführung der Daten in das Zielformat (z. B. Anpassung von Datumsformaten, Entfernung von Duplikaten).
3.  **Load (Laden):** Speicherung der aufbereiteten Daten im Data Warehouse.

### Data Marts

Oft werden aus dem zentralen Data Warehouse kleinere, spezialisierte Ausschnitte erstellt: die **Data Marts**. Ein Data Mart enthält ausschließlich die Daten, die für eine bestimmte Abteilung (z. B. Marketing, Finanzen oder Logistik) relevant sind. Dies erhöht die Performance und Übersichtlichkeit für die jeweiligen Anwendungsbereiche.

## Datenmodellierung

Für die effiziente Abfrage großer Datenmengen nutzt ein Data Warehouse spezielle multidimensionale Datenmodelle.

### Star-Schema

Das Star-Schema ist die einfachste Form der Modellierung. In der Mitte steht eine **Faktentabelle**, die Kennzahlen (z. B. Umsatz, Menge) und Fremdschlüssel enthält. Um diese gruppieren sich **Dimensionstabellen** (z. B. Zeit, Produkt, Ort). Die Struktur ähnelt optisch einem Stern.

- **Vorteil:** Einfache Abfragestrukturen und hohe Performance durch eine geringe Anzahl an Tabellenverknüpfungen (Joins).

### Snowflake-Schema

Das Snowflake-Schema ist eine Erweiterung, bei der die Dimensionstabellen weiter normalisiert werden. Eine Dimension wie „Produkt“ wird dabei in weitere Tabellen wie „Produktgruppe“ oder „Hersteller“ unterteilt.

- **Vorteil:** Geringere Datenredundanz und verbesserte Wartbarkeit der Stammdaten.
- **Nachteil:** Komplexere Abfragen und potenziell geringere Verarbeitungsgeschwindigkeit.

## Analyse und Auswertung (OLAP)

Innerhalb des Data Warehouses werden Daten oft als „OLAP-Würfel“ (Cube) visualisiert. Dies erlaubt die Betrachtung von Kennzahlen aus verschiedenen Perspektiven:

- **Drill-down:** Wechsel von einer hohen Aggregationsebene (Jahr) in tiefere Details (Monat, Tag).
- **Roll-up:** Zusammenfassung von Details zu einer höheren Ebene.
- **Slicing:** Auswahl eines spezifischen Ausschnitts aus dem Würfel (z. B. Betrachtung der Daten ausschließlich für ein bestimmtes Jahr).

Diese strukturierten Daten bilden die Basis für fortgeschrittene Verfahren wie das [Data Mining](data-mining), um verborgene Muster in den Datenbeständen zu identifizieren.

## Vor- und Nachteile

Der Einsatz eines Data Warehouses bietet strategische Vorteile, erfordert jedoch entsprechenden Aufwand.

| Vorteile                                                                       | Nachteile                                                                        |
| :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **Einheitliche Wahrheit:** Konsistente Datenbasis für das gesamte Unternehmen. | **Hoher Aufwand:** Komplexe Integration heterogener Datenquellen.                |
| **Historisierung:** Langfristige Speicherung ermöglicht Zeitreihenanalysen.    | **Kosten:** Hohe Investitionen in Infrastruktur und Fachpersonal.                |
| **Performance:** Analysen beeinträchtigen die operativen Systeme nicht.        | **Aktualität:** Daten sind oft nicht in Echtzeit verfügbar (Batch-Verarbeitung). |

## Selbsttest

1. Was unterscheidet ein Data Warehouse von einer operativen Datenbank (ERP)?
2. Welche drei Schritte umfasst der ETL-Prozess?
3. Welchen Zweck erfüllen Data Marts?
4. Worin liegt der Hauptunterschied zwischen dem Star- und dem Snowflake-Schema?
5. Was bedeutet der Begriff „Non-volatile“ im Kontext eines DWH?
6. Welchen Vorteil bietet die Trennung von OLTP und OLAP für die Systemstabilität?
