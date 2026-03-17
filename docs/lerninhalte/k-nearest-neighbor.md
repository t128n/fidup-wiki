---
title: "K-Nearest-Neighbor"
description: "Der K-Nearest-Neighbor-Algorithmus (KNN) ist ein grundlegendes Verfahren des überwachten Lernens, das Datenpunkte basierend auf der Ähnlichkeit zu ihren nächsten Nachbarn klassifiziert oder Werte vorhersagt."
sources:
    - title: "Was ist der K-Nearest-Neighbor-Algorithmus? | IBM"
      url: "https://www.ibm.com/de-de/topics/knn"
    - title: "KNN — Der K-Nearest-Neighbor-Algorithmus | Studyflix"
      url: "https://studyflix.de/informatik/knn-der-k-nearest-neighbor-algorithmus-8511"
---

Der **K-Nearest-Neighbor-Algorithmus** (kurz KNN, deutsch: k-nächste-Nachbarn-Algorithmus) ist ein nicht-parametrisches Verfahren aus dem Bereich des [maschinellen Lernens](maschinelles-lernen). Er findet Anwendung beim [überwachten Lernen](ueberwachtes-und-nicht-ueberwachtes-lernen), insbesondere für die [Klassifikation](klassifikation) und die Regression. Die zentrale Annahme besteht darin, dass ähnliche Datenpunkte im Merkmalsraum nah beieinander liegen. Unbekannte Datenpunkte werden basierend auf der Klasse oder dem Wert ihrer am nächsten gelegenen Nachbarn eingeordnet.

## Lernziele

Der Artikel vermittelt das Grundprinzip des KNN-Algorithmus sowie folgende Fachkenntnisse:

- Unterscheidung zwischen Klassifikation und Regression im Kontext von KNN.
- Einfluss des Hyperparameters auf das Modellverhalten.
- Anwendung verschiedener Abstandsmetriken zur Ähnlichkeitsmessung.
- Bedeutung der Merkmalsskalierung für die Vorhersagequalität.

## Funktionsweise und Lazy Learning

Der KNN-Algorithmus zählt zu den _Lazy Learning_-Verfahren (träges Lernen). Im Gegensatz zu modellbasierten Ansätzen findet keine explizite Trainingsphase statt, in der eine mathematische Funktion berechnet wird. Stattdessen speichert das Verfahren während der Vorbereitungsphase lediglich die Trainingsdaten ab.

Die Rechenarbeit erfolgt zum Zeitpunkt der Vorhersage. Für einen neuen Datenpunkt identifiziert der Algorithmus die nächsten Nachbarn aus dem Speicher. Die Anzahl dieser Nachbarn wird durch den Wert k definiert.

- **Klassifikation:** Eine Mehrheitsentscheidung (Plurality Voting) bestimmt das Ergebnis. Der neue Punkt erhält die Klasse, die unter den Nachbarn am häufigsten vertreten ist.
- **Regression:** Das System berechnet den Durchschnittswert der Zielvariablen der nächsten Nachbarn.

Da alle Berechnungen erst bei der Abfrage durchgeführt werden und der gesamte Datensatz im Arbeitsspeicher vorliegen muss, steigen Speicherbedarf und Rechenzeit mit zunehmender Datenmenge deutlich an.

## Wahl des k-Werts

Die Anzahl der einzubeziehenden Nachbarn wird über den Hyperparameter k festgelegt. Die Wahl dieses Wertes beeinflusst die Stabilität des Modells:

- **Kleiner Wert:** Das Modell reagiert empfindlich auf Ausreißer und Rauschen in den Daten. Dies begünstigt eine hohe Varianz (Overfitting).
- **Großer Wert:** Das Modell wird stabiler, übergeht jedoch potenziell feine Grenzen zwischen Klassen. Dies führt zu einer höheren Verzerrung (Underfitting).

In der Praxis werden oft ungerade Werte verwendet, um bei einer binären Klassifikation ein Unentschieden zu vermeiden. Die Ermittlung des optimalen Wertes erfolgt häufig mittels Kreuzvalidierung.

## Abstandsmetriken

Die Bestimmung der Nähe zwischen zwei Datenpunkten erfolgt über mathematische Abstandsfunktionen.

### Euklidischer Abstand

Dies ist die Standardmetrik für reellwertige Vektoren. Sie entspricht der direkten Verbindungslinie zwischen zwei Punkten:

$$
d(x,y)=\sqrt{\sum^{n}_{i=1}(y_i-x_i)^2}
$$

### Manhattan-Abstand

Diese Metrik summiert die absoluten Differenzen der Einzelkoordinaten (Stadtblock-Metrik):

$$
d(x,y)=\sum^{n}_{i=1}|y_i-x_i|
$$

### Minkowski-Abstand

Eine verallgemeinerte Form, die den euklidischen und den Manhattan-Abstand als Spezialfälle einschließt:

$$
d(x,y)=\left(\sum^{n}_{i=1}|x_i-y_i|^{p}\right)^{1/p}
$$

### Hamming-Abstand

Diese Metrik wird für kategoriale oder binäre Daten verwendet. Sie zählt die Anzahl der Positionen, an denen sich zwei Vektoren unterscheiden:

$$
D_H=\sum^{n}_{i=1}|x_i-y_i|
$$

## Voraussetzungen: Merkmalsskalierung

Da KNN auf Distanzberechnungen basiert, müssen alle Merkmale den gleichen Maßstab aufweisen. Merkmale mit großen Wertebereichen (z. B. Einkommen in Euro) würden die Berechnung gegenüber Merkmalen mit kleinen Bereichen (z. B. Alter in Jahren) dominieren. Eine vorherige Normalisierung oder Standardisierung der Daten ist daher zwingend erforderlich.

## Vor- und Nachteile

Der Einsatz des K-Nearest-Neighbor-Algorithmus ist durch spezifische Eigenschaften gekennzeichnet:

**Vorteile:**

- Einfache Implementierung und intuitives Konzept.
- Keine Annahmen über die Verteilung der Daten (nicht-parametrisch).
- Schnelle Vorbereitungsphase, da kein explizites Training nötig ist.
- Neue Daten können ohne erneutes Training integriert werden.

**Nachteile:**

- Hoher Speicherbedarf durch die Speicherung aller Instanzen.
- Geringe Vorhersagegeschwindigkeit bei großen Datensätzen.
- Empfindlichkeit gegenüber irrelevanten Merkmalen.
- **Fluch der Dimensionalität:** In hochdimensionalen Räumen rücken Datenpunkte mathematisch gesehen fast gleich weit voneinander weg. Dies verringert die Aussagekraft der Abstandsmetriken.

## Anwendungsgebiete

Typische Szenarien umfassen:

- **Empfehlungssysteme:** Vorschlagen von Inhalten basierend auf ähnlichen Nutzerprofilen.
- **Mustererkennung:** Klassifizierung in der Handschrift- oder Bilderkennung.
- **Finanzwesen:** Bewertung von Kreditrisiken.
- **[Data Mining](data-mining):** Identifikation von Anomalien in Datensätzen.

## Selbsttest

1. Warum wird KNN als "Lazy Learning"-Algorithmus bezeichnet?
2. Welchen Effekt hat ein sehr kleiner Wert für k auf das Modellverhalten?
3. Warum ist eine Merkmalsskalierung beim Einsatz von KNN notwendig?
4. In welchem Szenario ist der Hamming-Abstand vorteilhaft?
5. Was kennzeichnet den "Fluch der Dimensionalität"?
