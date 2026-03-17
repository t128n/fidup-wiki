---
title: "Klassifikation"
description: "Klassifikation ist eine Methode des überwachten Lernens im maschinellen Lernen, bei der Datenpunkte vordefinierten Kategorien zugeordnet werden. Weitere Informationen über Algorithmen, Evaluationsmetriken und Anwendungen für Auszubildende in Daten- und Prozessanalyse."
sources:
    - title: "Was ist überwachtes Lernen?"
      url: "https://www.ibm.com/de-de/think/topics/supervised-learning"
    - title: "Classification: Accuracy, recall, precision, and related metrics"
      url: "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall"
---

**Klassifikation** bezeichnet im maschinellen Lernen einen Teilbereich des überwachten Lernens. Dabei werden Datenpunkte vordefinierten Kategorien zugeordnet. Im Gegensatz zur [Regression](regression), die kontinuierliche Werte vorhersagt, handelt es sich hier um diskrete Klassen. Klassifikation unterstützt die Datenanalyse und findet Anwendung in Bereichen wie Spam-Erkennung und medizinischer Diagnose.

## Lernziele

- Grundlagen der Klassifikation im maschinellen Lernen kennen.
- Verschiedene Arten der Klassifikation unterscheiden.
- Verwendete Algorithmen und den Prozessablauf verstehen.
- Evaluationsmetriken und Herausforderungen einordnen.

## Kontext und Einordnung

Klassifikation gehört zum überwachten Lernen. Modelle werden mit markierten Daten trainiert, bei denen Datenpunkte korrekte Labels haben. Diese Labels bilden die Ground Truth – die tatsächlichen Klassenzuordnungen zur Überprüfung der Vorhersagen. Im Gegensatz zur [Regression](regression) mit kontinuierlichen Werten geht es um diskrete Kategorien.

## Arten der Klassifikation

Es gibt verschiedene Arten der Klassifikation:

- **Binäre Klassifikation**: Datenpunkte werden einer von zwei möglichen Klassen zugeordnet, beispielsweise Spam oder kein Spam.
- **Multi-Class-Klassifikation**: Datenpunkte können mehr als zwei Klassen zugeordnet werden, etwa verschiedene Tierarten in einem Bild.
- **Multi-Label-Klassifikation**: Ein Datenpunkt kann gleichzeitig mehreren Klassen zugeordnet werden, zum Beispiel ein Dokument, das sowohl zu Technik als auch zu Wirtschaft gehört.

## Wichtige Algorithmen

Zu den gängigen Algorithmen für die Klassifikation zählen:

- [Logistische Regression](regression): Ermöglicht eine dichotome oder binäre Klassifikation.
- [Entscheidungsbäume](entscheidungsbaum)
- [Random Forest](random-forest)
- [Support Vector Machines (SVM)](support-vector-machine)
- [K-Nearest Neighbors (KNN)](k-nearest-neighbor)
- [Neuronale Netze](neural-network)

## Vorgehen

Der Prozess der Klassifikation umfasst typischerweise folgende Schritte:

1. Datensammlung und -vorbereitung: Daten sammeln und bereinigen.
2. Auswahl relevanter Merkmale (Features): Wichtigste Eigenschaften identifizieren.
3. Aufteilung der Daten in Trainings- und Testdatensätze: Daten teilen, um Modell zu trainieren und zu testen.
4. Auswahl und Training eines Modells: Algorithmus wählen und mit Trainingsdaten trainieren.
5. Evaluation und Optimierung des Modells: Leistung bewerten und anpassen.
6. Anwendung auf neue, unbekannte Daten: Modell zur Vorhersage einsetzen.

## Beispiele

Ein Beispiel für binäre Klassifikation ist die Erkennung von Spam-E-Mails. Ein Datensatz enthält E-Mails mit Merkmalen wie Wortanzahl und Absender. Das Modell lernt, E-Mails als Spam oder nicht-Spam zu klassifizieren. Ground Truth sind die manuell markierten Labels. Nach dem Training wird das Modell auf neuen E-Mails getestet, um die Genauigkeit zu messen.

## Evaluationsmetriken

Zur Bewertung von Klassifikationsmodellen werden verschiedene Metriken verwendet.

### Statistische Metriken

Diese Metriken basieren auf der Confusion Matrix, einer Tabelle, die Vorhersagen mit tatsächlichen Werten vergleicht. Sie umfasst True Positives (TP), False Positives (FP), True Negatives (TN) und False Negatives (FN).

- **Accuracy**: Der Anteil aller korrekt klassifizierten Instanzen.  
  $$Accuracy = \frac{TP + TN}{TP + TN + FP + FN}$$

- **Precision**: Der Anteil der korrekt als positiv klassifizierten Instanzen an allen als positiv klassifizierten.  
  $$Precision = \frac{TP}{TP + FP}$$

- **Recall**: Der Anteil der tatsächlichen positiven Instanzen, die korrekt als positiv klassifiziert wurden.  
  $$Recall = \frac{TP}{TP + FN}$$

- **F1-Score**: Das harmonische Mittel aus Precision und Recall.  
  $$F1 = 2 \times \frac{Precision \times Recall}{Precision + Recall}$$

- **ROC-Kurve und AUC**: Eine Visualisierung des Trade-Offs zwischen True Positive Rate und False Positive Rate; AUC ist die Fläche unter der Kurve.

### Praktische Metriken

Diese Metriken betreffen den Betrieb und die Ressourcen des Modells:

- Trainingszeit: Dauer des Modelltrainings.
- Vorhersagedauer: Zeit für eine Vorhersage.
- Ressourcenbedarf: Speicher und Rechenleistung.
- Kompaktheit: Einfachheit des Modells.
- Effizienz: Gesamteffizienz in Bezug auf Zeit und Ressourcen.
- Robustheit: Stabilität bei variierenden Daten.

## Herausforderungen

Bei der Klassifikation können verschiedene Probleme auftreten:

- **Overfitting**: Das Modell lernt die Trainingsdaten zu genau und generalisiert schlecht auf neue Daten.
- **Underfitting**: Das Modell ist zu einfach und erfasst wichtige Muster nicht.
- **Imbalancierte Daten**: Eine ungleiche Verteilung der Klassen im Datensatz.
- Fehlende oder verrauschte Daten.

## Anwendungsgebiete

Klassifikation findet in zahlreichen Bereichen Anwendung, darunter:

- Spam-Erkennung in E-Mails
- Medizinische Diagnose
- Bilderkennung
- Spracherkennung
- Kreditwürdigkeitsprüfung

## Vor- und Nachteile

### Vorteile

- Ermöglicht automatisierte Entscheidungsfindung.
- Kann mit großen Datenmengen umgehen.
- Vielseitig einsetzbar in verschiedenen Domänen.

### Nachteile

- Benötigt oft große Mengen gelabelter Daten.
- Kann bei komplexen Problemen rechenintensiv sein.
- Ergebnisse können durch Bias in den Trainingsdaten beeinflusst werden.

## Selbsttest

- Was ist der Unterschied zwischen Klassifikation und Regression?
- Welche drei Arten der Klassifikation gibt es?
- Welche Metrik misst den Anteil korrekt klassifizierter Instanzen?
- Warum ist Ground Truth wichtig?
- Welche zwei Herausforderungen gibt es bei der Klassifikation?
- Welche Anwendung hat Klassifikation in der Medizin?

## Weiterführendes

Für tiefergehende Kenntnisse zu Algorithmen empfiehlt sich die Betrachtung spezifischer Methoden wie Entscheidungsbäumen oder neuronalen Netzen.
