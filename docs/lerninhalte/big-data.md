---
title: "Big Data"
description: "Big Data beschreibt das Management und die Analyse massiver, komplexer Datenmengen, die durch Volumen, Geschwindigkeit und Vielfalt charakterisiert sind und herkömmliche IT-Systeme übersteigen."
sources:
  - title: "Was ist Big Data? | IBM"
    url: "https://www.ibm.com/de-de/think/topics/big-data"
  - title: "Big Data • Definition | Gabler Wirtschaftslexikon"
    url: "https://wirtschaftslexikon.gabler.de/definition/big-data-54101"
---

Unter dem Begriff **Big Data** werden Technologien und Methoden zusammengefasst, die zur Verarbeitung und Analyse von Datenmengen dienen, die aufgrund ihrer Größe, Komplexität oder Geschwindigkeit nicht mehr mit herkömmlichen Systemen der Datenverarbeitung bewältigt werden können. Es handelt sich dabei um ein Ökosystem aus Infrastrukturen und Analysewerkzeugen, die darauf abzielen, verborgene Muster und geschäftsrelevante Erkenntnisse aus heterogenen Datenquellen zu gewinnen.

## Lernziele
Nach der Bearbeitung dieses Artikels können folgende Aspekte erläutert werden:

- Die fünf zentralen Merkmale (5 Vs) von Big Data.
- Die Unterscheidung zwischen strukturierten, semi-strukturierten und unstrukturierten Daten.
- Die Unterschiede zwischen Data Lake und Data Warehouse.
- Die Einordnung grundlegender Technologien wie Hadoop und Apache Spark.
- Typische Anwendungsfelder und Herausforderungen im Umgang mit Massendaten.

## Kurzüberblick
Big Data steht für die Transformation massenhafter Rohdaten in verwertbare Informationen. Das Konzept wird primär über die „5 Vs“ definiert: Volume (Menge), Velocity (Geschwindigkeit), Variety (Vielfalt), Veracity (Glaubwürdigkeit) und Value (Wertschöpfung). Während klassische Datenbanken an Kapazitätsgrenzen stoßen, ermöglichen moderne Speicherarchitekturen wie Data Lakes und Analyse-Frameworks eine effiziente Auswertung in nahezu Echtzeit.

## Charakterisierung durch die 5 Vs
Die Definition von Big Data erfolgt klassischerweise über fünf Dimensionen:

1.  **Volume (Volumen):** Die schiere Menge an Daten. Diese stammen oft aus automatisierten Quellen wie Clickstreams, Logfiles oder Sensornetzwerken und erreichen Dimensionen, die spezialisierte Speicherlösungen erfordern.
2.  **Velocity (Geschwindigkeit):** Die Rate, mit der neue Daten generiert und verarbeitet werden müssen. Eine Auswertung in Echtzeit ist oft erforderlich, um beispielsweise auf Betrugsversuche oder Maschinenausfälle unmittelbar reagieren zu können.
3.  **Variety (Vielfalt):** Die vorliegenden Datenformate. Neben strukturierten Tabellen machen unstrukturierte Inhalte wie Videos, E-Mails oder Social-Media-Posts den Großteil des Wachstums aus.
4.  **Veracity (Glaubwürdigkeit):** Die Qualität und Zuverlässigkeit der Daten. Da Quellen oft unkuratiert sind (z. B. Sensoren mit Messfehlern), ist die Bereinigung und Validierung ein kritischer Prozessschritt.
5.  **Value (Wert):** Der Nutzen der Daten. Erst durch die Analyse und die Überführung in geschäftliche Entscheidungen oder Prozessverbesserungen entsteht ein wirtschaftlicher Mehrwert.

## Datenformate
In der Big-Data-Umgebung wird zwischen drei grundlegenden Formattypen unterschieden:

-   **Strukturiert:** Daten mit festem Schema, die meist in relationalen Datenbanken gespeichert werden (z. B. Buchungsdatensätze).
-   **Semi-strukturiert:** Daten ohne starres Tabellenschema, die jedoch Markierungen (Tags) zur Strukturierung enthalten (z. B. JSON-, XML-Dateien oder CSV-Exporte).
-   **Unstrukturiert:** Daten ohne inhärente Struktur, deren maschinelle Auswertung komplex ist (z. B. PDF-Dokumente, Audio-Dateien, Bilder oder Freitexte).

## Speicherarchitekturen
Zur effizienten Vorhaltung großer Datenmengen haben sich zwei Hauptansätze etabliert:

| Merkmal | Data Warehouse | Data Lake |
| :--- | :--- | :--- |
| **Datenstruktur** | Strukturiert (Schema-on-Write) | Rohdaten (Schema-on-Read) |
| **Zweck** | Berichte, BI, Analyse bekannter Fragen | Explorative Analyse, Data Science |
| **Flexibilität** | Eher gering durch vordefiniertes Schema | Sehr hoch, da Daten im Originalformat vorliegen |

## Technologien zur Verarbeitung
Zur Bewältigung der Last kommen verteilte Systeme zum Einsatz:

-   **Hadoop:** Ein Framework, das die Speicherung (HDFS) und Verarbeitung (MapReduce) großer Datensätze auf Clustern aus Standard-Hardware ermöglicht.
-   **Apache Spark:** Eine leistungsfähige Analyse-Engine, die Daten primär im Arbeitsspeicher (*In-Memory*) verarbeitet und dadurch eine höhere Geschwindigkeit als das klassische MapReduce erzielt.
-   **NoSQL-Datenbanken:** Systeme, die flexiblere Datenmodelle als relationale SQL-Datenbanken bieten und horizontal skalieren können.

## Anwendungsfälle
Big Data wird branchenübergreifend zur Prozessoptimierung eingesetzt:

-   **[Prädiktive Wartung](predictive-maintenance)**: Analyse von Sensordaten zur Vorhersage von Maschinenausfällen.
-   **[Produktentwicklung](datenanalyse)**: Auswertung von Kundenfeedback und Nutzungsverhalten zur gezielten Funktionsentwicklung.
-   **Betrugserkennung**: Analyse von Transaktionsströmen in Echtzeit zur Identifikation von Anomalien (z. B. Kreditkartenbetrug).
-   **[Maschinelles Lernen](maschinelles-lernen)**: Bereitstellung großer Datenmengen als Trainingsbasis für KI-Algorithmen.

## Herausforderungen
Der Umgang mit Big Data bringt signifikante Hürden mit sich:

-   **Datenschutz und Compliance:** Die Verarbeitung personenbezogener Massendaten unterliegt strengen Regeln (z. B. DSGVO). Die Anonymisierung ist bei komplexen Datensätzen technisch anspruchsvoll.
-   **Datenqualität:** Minderwertige Rohdaten führen zu fehlerhaften Analyseergebnissen (*Garbage In, Garbage Out*). Eine kontinuierliche Überwachung der Datenherkunft (*Data Lineage*) ist notwendig.
-   **Fachkräftemangel:** Die Analyse erfordert spezialisiertes Wissen in den Bereichen Data Engineering und Data Science.

## Selbsttest

1. Worin besteht der wesentliche Unterschied zwischen den Dimensionen *Velocity* und *Volume*?
2. Warum ist ein Data Lake besser für unstrukturierte Daten geeignet als ein Data Warehouse?
3. Welchen Vorteil bietet Apache Spark gegenüber der klassischen MapReduce-Verarbeitung?
4. Was charakterisiert semi-strukturierte Daten im Vergleich zu strukturierten Daten?
