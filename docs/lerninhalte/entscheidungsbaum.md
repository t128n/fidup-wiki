---
title: "Entscheidungsbaum"
description: "Ein Entscheidungsbaum ist ein hierarchisches Modell des maschinellen Lernens, das Daten durch eine Abfolge von logischen Entscheidungsregeln klassifiziert oder numerische Werte vorhersagt."
sources:
    - title: "Was versteht man unter einem Decision Tree?"
      url: "https://www.ibm.com/de-de/think/topics/decision-trees"
    - title: "1.10. Decision Trees"
      url: "https://scikit-learn.org/stable/modules/tree.html"
    - title: "Entscheidungsbaeume (Decision Tree Learner - DTL)"
      url: "https://www.hsbi.de/elearning/data/FH-Bielefeld/lm_data/lm_1358898/dtl/index.print.html"
---

Ein **Entscheidungsbaum** (engl. _Decision Tree_) ist eine Methode des [maschinellen Lernens](maschinelles-lernen), die zur [Klassifikation](klassifikation) von Daten oder zur Vorhersage numerischer Werte mittels [Regression](regression) eingesetzt wird. Die Struktur ähnelt einem umgekehrten Baum: Von einem Wurzelknoten ausgehend führen verschiedene Verzweigungen zu einer Zielentscheidung an den Blättern. Aufgrund der hohen Transparenz gilt das Verfahren als „White-Box-Modell“, da jeder Entscheidungsschritt logisch nachvollziehbar bleibt.

## Lernziele

Die folgenden Inhalte vermitteln ein grundlegendes Verständnis für Entscheidungsbäume:

- Beschreibung der Anatomie (Wurzel, Knoten, Blatt).
- Erklärung der rekursiven Partitionierung und des Splittings.
- Vergleich von Entropie und Gini-Index als Auswahlkriterien.
- Erläuterung von Overfitting und dessen Vermeidung durch Pruning.

## Anatomie eines Entscheidungsbaums

Ein Entscheidungsbaum besteht aus verschiedenen Elementen, welche die hierarchische Logik abbilden:

- **Wurzelknoten (Root Node):** Der oberste Knoten repräsentiert den gesamten Datensatz. Er besitzt keine eingehenden Kanten und bildet den Startpunkt jeder Vorhersage.
- **Entscheidungsknoten (Internal Node):** Diese Knoten stehen für ein Merkmal (Attribut) des Datensatzes. Hier erfolgt eine Prüfung, die den Datenstrom in verschiedene Richtungen lenkt.
- **Blattknoten (Leaf Node):** Diese Endpunkte enthalten keine weiteren Verzweigungen. Sie liefern das endgültige Ergebnis – entweder eine Klasse oder einen konkreten Wert.

## Funktionsweise und Lernprozess

Der Aufbau eines Entscheidungsbaums erfolgt durch **rekursive Partitionierung**. Dabei wird der Datensatz schrittweise in kleinere Teilmengen zerlegt. Dieser Prozess wird als **Splitting** bezeichnet.

Das Ziel besteht darin, die „Reinheit“ (_Purity_) der Teilmengen zu maximieren. Eine Teilmenge gilt als rein, wenn sie nur Datensätze einer einzigen Klasse enthält. Der Algorithmus sucht in jedem Schritt nach dem Merkmal, das die Daten am effektivsten trennt. Häufig findet der **CART-Algorithmus** (_Classification and Regression Trees_) Anwendung. Dieser erzeugt binäre Bäume, bei denen sich jeder Knoten in genau zwei Unterknoten aufteilt.

## Auswahlkriterien: Entropie und Gini-Index

Zur Bestimmung des optimalen Merkmals an einem Knoten dienen mathematische Maße für die Unordnung einer Menge.

### Entropie und Informationsgewinn

Die Entropie misst den Grad der Unsicherheit in einer Datenmenge. Eine hohe Entropie deutet auf eine starke Mischung der Klassen hin. Der Informationsgewinn (_Information Gain_) beschreibt die Differenz der Entropie vor und nach einer Aufteilung:

$$ H(S) = - \sum\_{i=1}^{c} p_i \log_2(p_i) $$

Ein hoher Informationsgewinn signalisiert, dass die Aufteilung die Zielvariable wesentlich präzisiert hat.

### Gini-Index

Der Gini-Index (_Gini Impurity_) gibt die Wahrscheinlichkeit an, dass ein zufällig gewähltes Element falsch klassifiziert wird. Ein Wert von 0 entspricht perfekter Reinheit.

$$ Gini(S) = 1 - \sum\_{i=1}^{c} p_i^2 $$

In der Praxis wird der Gini-Index oft bevorzugt, da die Berechnung ohne Logarithmen recheneffizienter erfolgt.

## Overfitting und Pruning

Ein tief gewachsener Baum neigt zum **Overfitting** (Überanpassung). Dabei lernt das Modell die Trainingsdaten inklusive Rauschen zu genau, was die Genauigkeit bei neuen, unbekannten Daten reduziert.

Zur Korrektur wird das **Pruning** (Bescheiden) eingesetzt:

- **Pre-Pruning:** Das Baumwachstum wird vorzeitig gestoppt, beispielsweise durch eine festgesetzte maximale Tiefe.
- **Post-Pruning:** Ein vollständig entwickelter Baum wird nachträglich gekürzt. Zweige ohne signifikanten Vorhersagewert werden dabei entfernt oder in Blattknoten umgewandelt.

## Bewertung des Verfahrens

### Vorteile

- **Transparenz:** Entscheidungswege sind visuell darstellbar und leicht interpretierbar.
- **Geringe Vorverarbeitung:** Das Modell benötigt meist keine Normierung oder Skalierung der Daten.
- **Flexibilität:** Es verarbeitet sowohl kategorische als auch numerische Daten.

### Nachteile

- **Instabilität:** Geringfügige Änderungen im Datensatz können die gesamte Baumstruktur verändern.
- **Komplexität:** Ohne Pruning neigen Bäume zu übermäßiger Komplexität.
- **Bias:** Bei ungleich verteilten Klassen werden oft dominante Klassen bevorzugt.

## Beispiel: Kreditwürdigkeit

Ein einfaches Modell zur Prüfung der Kreditwürdigkeit könnte folgende Struktur aufweisen:

1. **Wurzel:** Monatliches Einkommen > 2.500 EUR?
    - Falls Nein: **Blatt** -> Kredit abgelehnt.
    - Falls Ja: Übergang zu Knoten 2.
2. **Knoten 2:** Unbefristeter Arbeitsvertrag vorhanden?
    - Falls Nein: **Blatt** -> Kredit abgelehnt.
    - Falls Ja: **Blatt** -> Kredit genehmigt.

## Selbsttest

1. Worin liegt der funktionale Unterschied zwischen einem Blattknoten und einem Entscheidungsknoten?
2. Warum ist der Gini-Index in Implementierungen wie CART performanter als die Entropie?
3. Mit welcher Methode kann der Überanpassung entgegengewirkt werden?
4. Weshalb wird der Entscheidungsbaum als White-Box-Modell bezeichnet?
