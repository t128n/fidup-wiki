---
title: "FMEA"
description: "Systematische Risikoanalyse zur frühzeitigen Identifikation und Bewertung potenzieller Fehler in Produkten und Prozessen nach dem aktuellen 7-Schritte-Ansatz."
sources:
    - title: "FMEA: Aufgabenpriorität (AP) vs. Risikoprioritätszahl (RPZ)"
      url: "https://www.kontor-gruppe.de/fmea-ap.html"
    - title: "FMEA AIAG VDA – zur FMEA in 7 Schritten"
      url: "https://www.smart-quality-solution.com/fmea-aiag-vda-zur-fmea-in-7-schritten/"
    - title: "So führen Sie eine FMEA durch – Schritt für Schritt erklärt"
      url: "https://www.business-wissen.de/hb/so-fuehren-sie-eine-fmea-durch-schritt-fuer-schritt-erklaert/"
---

Die **FMEA** (_Failure Mode and Effects Analysis_ oder Fehlermöglichkeits- und Einflussanalyse) ist eine systematische, präventive Methode des Qualitätsmanagements zur Identifizierung und Bewertung potenzieller Fehlerquellen. Das Ziel besteht darin, Schwachstellen in Produkten, Designs oder Prozessen bereits in der Planungsphase zu erkennen, bevor diese auftreten. Dieser Fokus auf Fehlervermeidung statt Fehlerkorrektur unterstützt die [Qualitätssicherung](qualitaetssicherung-und-qualitaetskontrolle) und reduziert das Risiko für hohe Folgekosten oder Imageschäden.

## Lernziele

Nach der Bearbeitung dieses Artikels sind folgende Kenntnisse vorhanden:

- Zweck und grundlegende Philosophie der FMEA.
- Abgrenzung der drei Hauptarten der FMEA.
- Ablauf des 7-Schritte-Ansatzes nach VDA/AIAG.
- Unterschied zwischen der Risikoprioritätszahl (RPZ) und der Aufgabenpriorität (AP).
- Risikobewertung anhand der Faktoren Bedeutung, Auftreten und Entdeckung.

## Einordnung und Bedeutung

In der [Datenanalyse](datenanalyse) und Prozessgestaltung dient die FMEA als zentrales Werkzeug zur Erhöhung der Systemzuverlässigkeit. Während reaktive Methoden wie der 8D-Report erst nach dem Eintreten eines Problems greifen, setzt die FMEA präventiv an. Die Durchführung empfiehlt sich insbesondere bei der Entwicklung neuer Produkte oder grundlegenden Änderungen an bestehenden Prozessen.

## Arten der FMEA

Je nach Analyseobjekt werden drei Ausprägungen unterschieden:

1.  **System-FMEA**: Analysiert das Zusammenwirken verschiedener Komponenten innerhalb eines Gesamtsystems, etwa die Vernetzung von Abteilungen.
2.  **Konstruktions- oder Design-FMEA**: Fokussiert auf die Entwicklungsphase eines Produkts, um konstruktionsbedingte Mängel wie Material- oder Geometriefehler auszuschließen.
3.  **Prozess-FMEA**: Untersucht Arbeitsabläufe und Fertigungsprozesse auf mögliche Störungen, beispielsweise bei der Implementierung neuer Software.

## Der 7-Schritte-Ansatz

Seit der Harmonisierung der Standards von VDA (Verband der Automobilindustrie) und AIAG (Automotive Industry Action Group) im Jahr 2019 folgt die Durchführung einem standardisierten Modell:

1.  **Planung und Vorbereitung**: Definition des Untersuchungsumfangs (Scoping), Teambildung und Zeitplanung.
2.  **Strukturanalyse**: Zerlegung des Systems in Bestandteile oder Prozessschritte (z. B. mittels Strukturbaum).
3.  **Funktionsanalyse**: Zuordnung von Funktionen und Anforderungen zu den Strukturelementen.
4.  **Fehleranalyse**: Identifikation potenzieller Fehlfunktionen, deren Folgen für den Kunden und deren Ursachen.
5.  **Risikoanalyse**: Bewertung der Risiken anhand der Kriterien Bedeutung, Auftreten und Entdeckung.
6.  **Optimierung**: Planung und Umsetzung von Maßnahmen zur Risikoreduzierung sowie anschließende Neubewertung.
7.  **Ergebnisdokumentation**: Zusammenfassung der Analyse und Kommunikation an die Stakeholder.

## Risikobewertung: Von RPZ zu AP

Die Bewertung erfolgt traditionell über drei Faktoren auf einer Skala von 1 bis 10:

- **Bedeutung (B)**: Schwere der Fehlerfolgen für den Kunden.
- **Auftreten (A)**: Wahrscheinlichkeit für das Eintreten der Fehlerursache.
- **Entdeckung (E)**: Wahrscheinlichkeit, dass der Fehler vor der Auslieferung entdeckt wird.

### Risikoprioritätszahl (RPZ)

In der klassischen FMEA wird das Produkt dieser Werte gebildet:
$$RPZ = B \times A \times E$$
Der Maximalwert beträgt 1000. Ein hoher Wert signalisiert Handlungsbedarf. Kritisch betrachtet spiegelt die RPZ die wahre Priorität jedoch nicht immer korrekt wider, da eine hohe Bedeutung (B) oft schwerer gewichtet werden muss als eine geringe Entdeckungswahrscheinlichkeit.

### Aufgabenpriorität (AP)

Im aktuellen Standard ersetzt die **Aufgabenpriorität** (_Action Priority_) die RPZ. Die AP nutzt Logiktabellen, die den Schweregrad (B) stärker gewichten. Die Einstufung erfolgt in drei Stufen:

- **Hoch (H)**: Sofortiger Handlungsbedarf zur Verbesserung von Design oder Prozess.
- **Mittel (M)**: Prüfung und gegebenenfalls Einleitung von Maßnahmen.
- **Niedrig (N)**: Akzeptables Risiko, derzeit kein Handlungsbedarf.

## Praxisbeispiel: Prozess-FMEA "Software-Update"

Ein Beispiel für die Anwendung ist die Einführung eines neuen Datenbankmoduls:

- **Fehlermöglichkeit**: Inkompatibilität mit bestehenden [Schnittstellen](api-schnittstellen).
- **Fehlerfolge**: Systemausfall, Datenverlust beim Kunden (Bedeutung von 9).
- **Fehlerursache**: Unzureichende Tests der Altsysteme (Auftreten von 4).
- **Aktuelle Prüfung**: Automatisierte Integrationstests (Entdeckung von 3).
- **Bewertung**: Trotz einer RPZ von 108 (berechnet aus 9 mal 4 mal 3) führt der hohe Schweregrad von 9 bei der AP-Einstufung wahrscheinlich zur Bewertung "Hoch".
- **Maßnahme**: Einführung einer Testumgebung (Staging), die das Kundensystem exakt spiegelt.

## Häufige Fehler und Empfehlungen

> **Objektivität wahren**: Die Einstufung der Faktoren erfolgt oft subjektiv. Die Verwendung standardisierter Bewertungstabellen des Unternehmens erhöht die Objektivität.

> **Frühzeitiger Start**: Die FMEA wird häufig erst erstellt, wenn das Design bereits weit fortgeschritten ist. Ein früher Start ermöglicht kostengünstige Änderungen.

> **Interdisziplinäre Teamarbeit**: Ein Moderator allein kann nicht alle potenziellen Fehler identifizieren. Die Einbindung von Experten aus Entwicklung, Produktion und Kundenservice ist essenziell.

## Selbsttest

1.  Warum wird die FMEA als präventive Methode bezeichnet?
2.  Welche drei Faktoren bilden die Basis der Risikobewertung?
3.  In welchem Schritt des 7-Schritte-Modells entstehen Fehlernetze (Ursache-Fehler-Folge)?
4.  Welchen Vorteil bietet die Aufgabenpriorität (AP) gegenüber der Risikoprioritätszahl (RPZ)?
5.  Welche Art der FMEA eignet sich zur Untersuchung der Fertigungslinie eines Smartphones?
