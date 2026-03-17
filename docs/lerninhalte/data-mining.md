---
title: "Data Mining"
description: "Data Mining ist die systematische Extraktion verborgener Muster und Wissen aus großen Datenmengen. Der Artikel erklärt den Prozess, Methoden wie Klassifikation und den Zusammenhang mit KDD und CRISP-DM."
sources:
    - title: "Data Mining • Definition | Gabler Wirtschaftslexikon"
      url: "https://wirtschaftslexikon.gabler.de/definition/data-mining-28709"
    - title: "CRISP-DM: das Standard-Vorgehensmodell für Data Mining"
      url: "https://datasolut.com/crisp-dm-standard/"
    - title: "Knowledge Discovery in Databases – Wikipedia"
      url: "https://de.wikipedia.org/wiki/Knowledge_Discovery_in_Databases"
---

**Data Mining** bezeichnet die automatisierte oder semi-automatisierte Extraktion von bisher unbekannten Mustern, Trends und Wissen aus großen Datenbeständen. Hierbei kommen Methoden der Statistik, des maschinellen Lernens und der künstlichen Intelligenz zum Einsatz. Während die klassische Statistik meist bestehende Hypothesen prüft, dient Data Mining primär der Generierung neuer Hypothesen durch das Aufdecken nicht-trivialer Zusammenhänge.

## Lernziele

Zentrale Aspekte dieses Artikels sind:

- Die Einordnung von Data Mining als Teilschritt in den übergeordneten KDD-Prozess.
- Die sechs Phasen des [CRISP-DM](crisp-dm)-Modells und deren iterative Natur.
- Die Abgrenzung zentraler Techniken wie Klassifikation, Clustering und [Assoziationsanalyse](assoziation).
- Der Einfluss der Datenqualität auf die Validität der Analyseergebnisse.
- Die Berücksichtigung des Datenschutzes bei der Verarbeitung großer Datenmengen.

## Kontext und Einordnung

Data Mining ist kein isoliertes Verfahren, sondern der analytische Kernschritt der **Knowledge Discovery in Databases (KDD)**. Während KDD den gesamten Rahmen von der Datenauswahl bis zur Interpretation beschreibt, fokussiert sich Data Mining auf die eigentliche Anwendung von Algorithmen zur Mustererkennung.

Im Gegensatz zu einfachen Datenbankabfragen (z. B. via SQL) sucht Data Mining nach Strukturen, die zuvor nicht bekannt oder offensichtlich waren.

## Der Wissensentdeckungsprozess (KDD)

Der KDD-Prozess stellt sicher, dass die Analyse auf einer soliden Basis steht. Er gliedert sich in fünf Phasen:

1.  **Datenauswahl:** Identifikation relevanter Datenquellen.
2.  **Vorverarbeitung:** Bereinigung der Daten (Umgang mit Fehlwerten oder Ausreißern).
3.  **Transformation:** Umwandlung der Daten in ein für die Analyse geeignetes Format.
4.  **Data Mining:** Anwendung der Algorithmen zur Mustererkennung.
5.  **Evaluation und Interpretation:** Bewertung der Muster auf Nutzen und Überführung in Wissen.

## Das Vorgehensmodell CRISP-DM

In der Praxis gilt der **Cross-Industry Standard Process for Data Mining** ([CRISP-DM](crisp-dm)) als Industriestandard. Der Prozess ist kreisförmig aufgebaut, da Erkenntnisse aus späteren Phasen oft Anpassungen in früheren Schritten erfordern.

Die sechs Phasen umfassen:

1.  **Business Understanding:** Definition der Ziele aus Geschäftssicht.
2.  **Data Understanding:** Erste Sichtung und Prüfung der Datenqualität.
3.  **Data Preparation:** Auswahl und Aufbereitung der Datensätze (beansprucht häufig 50 bis 70 % des Zeitaufwands).
4.  **Modeling:** Auswahl und Anwendung der Modellierungstechniken.
5.  **Evaluation:** Prüfung, ob die Modelle die Geschäftsziele erfüllen.
6.  **Deployment:** Integration der Ergebnisse in den produktiven Betrieb.

## Methoden und Techniken

Je nach Zielsetzung werden unterschiedliche mathematische und algorithmische Ansätze gewählt:

### Klassifikation

Datenobjekte werden basierend auf ihren Merkmalen in vordefinierte Klassen eingeteilt. Ein Beispiel ist die Prüfung der Kreditwürdigkeit eines Kunden. Häufige Verfahren sind [Entscheidungsbäume](entscheidungsbaum) oder der [k-Nearest-Neighbor](k-nearest-neighbor)-Algorithmus.

### Clustering

Beim Clustering sind keine Klassen vorgegeben. Der Algorithmus gruppiert Objekte so, dass sie innerhalb einer Gruppe (Cluster) eine hohe Ähnlichkeit aufweisen, während sie sich von anderen Gruppen deutlich unterscheiden. Ein Anwendungsfall ist die Kundensegmentierung.

### Assoziationsanalyse

Diese Methode identifiziert Regeln nach dem Muster „Wenn A, dann auch B“. Ein wichtiges Maß für die Relevanz einer Regel ist der _Support_. Er gibt an, wie häufig eine Kombination von Elementen im gesamten Datensatz auftritt:

$$ \text{Support}(A \rightarrow B) = \frac{\text{Anzahl der Transaktionen mit } A \text{ und } B}{\text{Gesamtanzahl der Transaktionen}} $$

## Beispiel: Warenkorbanalyse

Ein Einzelhändler analysiert Transaktionsdaten, um Verbundkäufe zu identifizieren. Die Analyse zeigt beispielsweise, dass Kunden, die Grillkohle kaufen, mit hoher Wahrscheinlichkeit auch Grillzangen erwerben. Diese Erkenntnis dient der Optimierung der Warenplatzierung oder der Gestaltung gezielter Rabattaktionen.

## Top-Fehler und Best Practices

- **Fehler:** Zu früher Beginn mit der Modellierung ohne ausreichende Datenbasis.
- **Best Practice:** Die Datenaufbereitung (Data Preparation) ist entscheidend. Gemäß dem Prinzip „Garbage In, Garbage Out“ führt eine mangelhafte Datenqualität zu unbrauchbaren Modellen.
- **Fehler:** Überinterpretation von Zufallsfunden (Spurious Correlations).
- **Best Practice:** Ergebnisse müssen fachlich validiert werden. Eine statistische Korrelation ist nicht zwingend mit einem kausalen Zusammenhang gleichzusetzen.

## Selbsttest

1.  Warum wird Data Mining fachlich als Teilschritt des KDD-Prozesses eingeordnet?
2.  Welche Phase im CRISP-DM-Modell beansprucht meist den größten Zeitanteil?
3.  Worin liegt der Hauptunterschied zwischen Klassifikation und Clustering?
4.  Welches Ziel verfolgt die Evaluation im CRISP-DM-Modell?
5.  Warum ist der Datenschutz bei Data-Mining-Projekten besonders kritisch zu bewerten?
