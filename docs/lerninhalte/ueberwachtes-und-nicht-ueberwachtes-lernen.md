---
title: "Überwachtes und nicht-überwachtes Lernen"
description: "Überwachtes Lernen verwendet gekennzeichnete Daten für Vorhersagen, während unüberwachtes Lernen Muster in unbeschrifteten Daten erkennt. Dieser Leitfaden erklärt die Unterschiede, Methoden und Anwendungen für Auszubildende in Daten- und Prozessanalyse."
sources:
  - title: "Supervised Learning"
    url: "https://www.ibm.com/de-de/topics/supervised-learning"
  - title: "Unsupervised Learning"
    url: "https://www.ibm.com/de-de/think/topics/unsupervised-learning"
  - title: "Supervised Learning"
    url: "https://developers.google.com/machine-learning/intro-to-ml/supervised?hl=de"
---

**Überwachtes und nicht-überwachtes Lernen** sind zwei grundlegende Paradigmen im [maschinellen Lernen](maschinelles-lernen). **Überwachtes Lernen** verwendet gekennzeichnete Daten zum Trainieren von Modellen für Vorhersagen. **Nicht-überwachtes Lernen** erkennt Muster in unbeschrifteten Daten ohne Labels.

## Lernziele

Dieser Artikel vermittelt:

- die Unterschiede zwischen überwachtem und nicht-überwachtem Lernen
- typische Algorithmen und deren Anwendungen
- Herausforderungen und Lösungansätze
- einfache Beispiele für beide Lernarten
- Kriterien zur Auswahl des geeigneten Ansatzes

## Kurzüberblick

Überwachtes Lernen verwendet Daten mit bekannten Ergebnissen zum Trainieren von Modellen für Vorhersagen. Es findet Anwendung in Klassifikation und Regression. Nicht-überwachtes Lernen erkennt Strukturen wie Gruppen oder reduzierte Dimensionen in unbeschrifteten Daten. Es eignet sich für Clusteranalyse und Dimensionsreduktion. Beide Ansätze sind wichtig in der Datenanalyse zur Gewinnung von Wissen aus Daten.

## Kontext und Einordnung

Im Bereich der Daten- und Prozessanalyse spielen maschinelle Lernverfahren eine wichtige Rolle. Überwachtes Lernen wird eingesetzt, wenn klare Ziele wie Vorhersagen vorliegen und Daten mit Labels verfügbar sind. Nicht-überwachtes Lernen hilft, wenn Daten unstrukturiert sind und explorative Analysen nötig, um Muster aufzudecken. Oft kombinieren Projekte beide Ansätze, etwa indem Clustering zur Datenvorverarbeitung dient, bevor ein überwachte Modell trainiert wird.

## Begriffe und Definitionen

- **Überwachtes Lernen**: Ansatz, bei dem Modelle mit Eingabedaten (Features) und zugehörigen Ausgaben (Labels) trainiert werden, um Vorhersagen zu treffen.
- **Nicht-überwachtes Lernen**: Ansatz, bei dem Modelle Muster in Daten ohne Labels identifizieren.
- **Features**: Eingabevariablen oder Merkmale der Daten.
- **Labels**: Bekannte Ausgaben oder Zielwerte bei überwachtem Lernen.
- **Cluster**: Gruppen ähnlicher Datenpunkte im nicht-überwachten Lernen.
- **Dimensionsreduktion**: Verringerung der Anzahl von Merkmalen, um Daten zu vereinfachen.

## Vorgehen

### Überwachtes Lernen

1. Datensammlung: Ein Datensatz mit Features und Labels wird erstellt.
2. Datenaufteilung: Der Datensatz wird in Trainings- (70–80 %), Validierungs- (10–15 %) und Testdatensatz (20–30 %) unterteilt.
3. Modelltraining: Ein Algorithmus (z. B. Entscheidungsbaum) wird ausgewählt, das Modell trainiert und Hyperparameter mit Validierungsdaten optimiert.
4. Bewertung: Das Modell wird mit Testdaten und Metriken wie Genauigkeit, Präzision, Recall und F1-Score getestet.
5. Anwendung: Das Modell wird für Vorhersagen auf neuen Daten verwendet.

### Nicht-überwachtes Lernen

1. Datensammlung: Ein Datensatz mit nur Features wird erstellt.
2. Algorithmusauswahl: Die Wahl erfolgt basierend auf Ziel (z. B. Clustering mit K-Means).
3. Modellanwendung: Der Algorithmus wird ausgeführt, um Muster zu identifizieren.
4. Bewertung: Metriken wie Silhouette-Score werden verwendet, um die Qualität der Gruppen zu prüfen.
5. Interpretation: Die Ergebnisse werden analysiert und angewendet, z. B. für Segmentierung.

## Beispiele

### Beispiel für überwachtes Lernen: E-Mail-Klassifikation

Ein Beispiel: Daten von 1000 E-Mails mit Merkmalen wie Wortanzahl, Absender und Betreff sowie Labels "Spam" oder "Nicht-Spam".

- Datensatz: 800 Trainings-E-Mails, 200 Test-E-Mails.
- Algorithmus: Logistische Regression.
- Training: Modell lernt, dass hohe Wortanzahl und unbekannte Absender oft Spam bedeuten.
- Bewertung: Genauigkeit von 85 % auf Testdaten.
- Anwendung: Neue E-Mail mit 500 Wörtern und unbekanntem Absender wird als Spam klassifiziert.

### Beispiel für nicht-überwachtes Lernen: Kundensegmentierung

Ein Beispiel: Verkaufsdaten von Kunden mit Merkmalen wie Alter, Einkommen und Kaufhäufigkeit, ohne Labels.

- Datensatz: 1000 Kunden.
- Algorithmus: K-Means mit K=3.
- Clustering: Identifiziert drei Gruppen: Junge Kunden mit geringem Einkommen (Gruppe 1), mittlere Altersgruppe mit mittlerem Einkommen (Gruppe 2), ältere mit hohem Einkommen (Gruppe 3).
- Bewertung: Silhouette-Score von 0,7 zeigt gute Trennung.
- Anwendung: Marketingkampagnen auf Gruppe 2 zuschneiden.

## Häufige Fehler und Tipps

- Nicht den richtigen Ansatz wählen: Für überwachtes Lernen müssen Labels vorhanden sein; andernfalls wird nicht-überwachtes Lernen eingesetzt. Datenverfügbarkeit sollte zunächst geprüft werden.
- Overfitting: Das Modell passt zu gut an Trainingsdaten an. Kreuzvalidierung und Regularisierung helfen dagegen.
- Schlechte Clusterinterpretation: Bei nicht-überwachtem Lernen sind Ergebnisse subjektiv. Mehrere Metriken und Domänenwissen sollten einbezogen werden.
- Ignorieren der Datenqualität: Rauschen führt zu Fehlern. Daten sollten vor dem Training bereinigt werden.

## Selbsttest

1. Was ist der Hauptunterschied zwischen überwachtem und nicht-überwachtem Lernen?
2. Nenne zwei Algorithmen für überwachtes Lernen.
3. Wann eignet sich nicht-überwachtes Lernen?
4. Was misst der F1-Score?
5. Erkläre kurz, was Clustering ist.
6. Wie lässt sich Overfitting vermeiden?

## Weiterführendes

Für tiefergehende Kenntnisse in [Datenanalyse](datenanalyse) oder spezifischen Algorithmen konsultiere Fachliteratur oder Online-Kurse.