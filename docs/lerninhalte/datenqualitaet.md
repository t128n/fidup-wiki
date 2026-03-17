---
title: "Datenqualität"
description: "Datenqualität beschreibt die Eignung von Daten für einen bestimmten Verwendungszweck (Fitness for use). Definition von Datenqualitätsdimensionen nach ISO/IEC 25012, Fehlermessung mit DPMO und Prozesse zur Datenbereinigung."
sources:
    - title: "ISO/IEC 25012 Data Quality Model"
      url: "https://iso25000.com/index.php/en/iso-25000-standards/iso-25012"
    - title: "Datenqualität erklärt: Definition, Kriterien & Bedeutung"
      url: "https://www.glomas.de/glossar/datenqualitaet"
---

Die **Datenqualität** (auch _Data Quality_) bezeichnet den Grad, in dem ein Datenbestand die Anforderungen für einen vorgesehenen Verwendungszweck erfüllt. Häufig wird dies mit dem Prinzip der „Fitness for use“ zusammengefasst: Daten besitzen eine hohe Qualität, wenn sie für die geplante [Datenanalyse](datenanalyse), Entscheidungsfindung oder Prozesssteuerung geeignet sind. Eine hohe Datenqualität ist die Grundvoraussetzung für verlässliche Analyseergebnisse und effiziente Geschäftsabläufe.

## Lernziele

Nach diesem Artikel können Auszubildende:

- die Definition von Datenqualität nach ISO/IEC 25012 erläutern.
- zwischen inhärenten und systemabhängigen Qualitätsmerkmalen unterscheiden.
- die Kennzahl DPMO zur Fehlermessung berechnen.
- die Schritte eines Prozesses zur Sicherstellung der Datenqualität beschreiben.

## Kurzüberblick

Datenqualität ist kein absoluter oder statischer Zustand, sondern kontextabhängig. Informationen, die für eine grobe Trendanalyse ausreichen, können für eine präzise Abrechnung ungenügend sein. Da mangelhafte Datenqualität – etwa durch Dubletten oder veraltete Informationen – zu Fehlentscheidungen und Mehrkosten führt, ist un sistematisches Qualitätsmanagement unerlässlich.

## Kontext und Einordnung

In der Daten- und Prozessanalyse gilt das Prinzip „Garbage In, Garbage Out“: Algorithmen liefern fehlerhafte Ergebnisse, wenn die zugrunde liegenden Daten mangelhaft sind. Eine hohe Datenqualität minimiert operative Risiken, verbessert die Kundenzufriedenheit und bildet die Basis für die Automatisierung von Prozessen. Die Qualitätssicherung ist eine Daueraufgabe, die bereits bei der Datenerhebung beginnt.

## Begriffe und Definitionen (ISO/IEC 25012)

Die internationale Norm ISO/IEC 25012 liefert ein strukturiertes Modell zur Bewertung der Datenqualität. Sie unterscheidet zwei Hauptkategorien von Merkmalen:

### Inhärente Datenqualität

Diese Merkmale beziehen sich auf die Daten selbst und ihren Informationsgehalt:

- **Genauigkeit (Accuracy):** Der Grad, in dem Daten die Realität korrekt abbilden (semantisch) und formale Regeln einhalten (syntaktisch).
- **Vollständigkeit (Completeness):** Das Vorhandensein aller für den Verwendungszweck notwendigen Werte in einem Datensatz.
- **Konsistenz (Consistency):** Die Widerspruchsfreiheit der Daten innerhalb eines Bestands oder beim Abgleich zwischen verschiedenen Systemen.
- **Aktualität (Currentness):** Die zeitliche Relevanz; Daten müssen zum Zeitpunkt ihrer Nutzung noch gültig und aktuell sein.

### Systemabhängige Datenqualität

Diese Merkmale hängen von der Leistungsfähigkeit des IT-Systems ab, in dem die Daten gespeichert sind:

- **Verfügbarkeit:** Der Grad, in dem autorisierte Benutzer und Anwendungen auf die benötigten Daten zugreifen können.
- **Wiederherstellbarkeit:** Die Fähigkeit, Daten nach einem technischen Fehler oder Systemausfall wieder in den korrekten Zustand zu versetzen (siehe auch [Backup](backup)).

## Messung der Datenqualität

Um die Qualität von Datenmengen objektiv vergleichbar zu machen, wird häufig die Kennzahl **Defects per Million Opportunities** (DPMO) verwendet. Diese Methode stammt aus dem Qualitätsmanagement (Six Sigma) und misst die Fehleranzahl im Verhältnis zu den Fehlermöglichkeiten.

$$DPMO = \left( \frac{\text{Anzahl der Fehler}}{\text{Anzahl der Datensätze} \times \text{Anzahl der Merkmale pro Datensatz}} \right) \times 1.000.000$$

Ein niedriger DPMO-Wert weist auf eine hohe Genauigkeit und Prozessstabilität hin.

## Vorgehen zur Sicherstellung der Datenqualität

Die Verbesserung der Datenqualität folgt einem strukturierten Prozess:

1. **Sicherung der Datenquelle:** Erstellung einer unveränderten Kopie der Originaldaten, um eine Revisionssicherheit zu gewährleisten.
2. **Anforderungsdefinition:** Festlegung konkreter Qualitätsregeln (z. B. „Postleitzahl muss genau fünf Ziffern enthalten“).
3. **Analyse der Daten (_Data Profiling_):** Prüfung des Ist-Zustands gegen die Anforderungen, um Fehlerquellen wie Dubletten oder unplausible Werte zu identifizieren.
4. **Standardisierung:** Vereinheitlichung von Datenformaten (z. B. Datumsformat nach ISO 8601) und Schreibweisen.
5. **Bereinigung (_Data Cleansing_):** Korrektur fehlerhafter Werte, Ergänzung fehlender Informationen und Entfernung redundanter Datensätze.

## Beispiele

_Anwendungsbeispiel: Standardisierung von Kundenstammdaten_
Ein Handelsunternehmen stellt fest, dass Geburtsdaten in verschiedenen Formaten vorliegen (`12.05.90`, `1990-05-12`, `12/05/1990`). Im Zuge der **Standardisierung** wird das ISO-Format `JJJJ-MM-TT` als verbindlicher Standard festgelegt. Durch automatisierte Regeln werden alle Einträge in `1990-05-12` transformiert. Dies ermöglicht eine fehlerfreie Sortierung und Filterung für Marketing-Analysen.

## Häufige Fehler und Tipps

- **Fehler:** Fehlende Validierung bei der Dateneingabe führt zu inkonsistenten Daten.
- **Tipp:** Implementierung von Pflichtfeldern und Formatprüfungen bereits an der Erfassungsquelle (z. B. im ERP-System), um Fehler proaktiv zu vermeiden.
- **Fehler:** Die Datenbereinigung wird als einmaliges Projekt statt als kontinuierlicher Prozess betrachtet.
- **Tipp:** Etablierung einer _Data Governance_, bei der Verantwortlichkeiten für die Datenqualität dauerhaft festgelegt sind.
