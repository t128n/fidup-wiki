---
title: "Support Vector Machine"
description: "Die Support Vector Machine (SVM) ist ein überwachter Lernalgorithmus zur Klassifikation, der einen optimalen Hyperplane zur Trennung von Datenklassen findet und durch den Kernel-Trick nicht-lineare Probleme löst. Der Artikel erklärt Funktionsweise, Vorteile und praktische Anwendungen in der Datenanalyse."
sources:
    - title: "Support Vector Machines - UC Berkeley Statistics 154"
      url: "https://stat154.berkeley.edu/spring-2025/lectures/unit_3_svm.html"
    - title: "What Is Support Vector Machine? - IBM Think Topics"
      url: "https://www.ibm.com/think/topics/support-vector-machine"
    - title: "1.4. Support Vector Machines - scikit-learn 1.8.0 Documentation"
      url: "https://scikit-learn.org/stable/modules/svm.html"
---

Die **Support Vector Machine** (SVM) ist ein überwachter Lernalgorithmus zur Klassifikation, der einen optimalen Hyperplane zur Trennung von Datenklassen findet. Sie maximiert den Abstand zu den nächsten Datenpunkten, um eine robuste Generalisierung zu erreichen, und nutzt den Kernel-Trick für nicht-lineare Daten. SVM eignet sich besonders für kleine bis mittlere Datensätze sowie für Text- oder Bildklassifikation.

## Lernziele

- Die Grundlagen der SVM erklären, einschließlich Hyperplane, Support Vectors und Margin-Maximierung.
- Den Kernel-Trick und verschiedene Kernel-Funktionen anwenden.
- Soft-Margin SVM für nicht perfekt trennbare Daten nutzen.
- Mehrklassen-Klassifikation mit SVM-Strategien umsetzen.
- Häufige Fehler bei der SVM-Anwendung vermeiden.

## Kurzüberblick

SVM sucht den besten Trenner (Hyperplane) zwischen Datenklassen, indem sie den Abstand (Margin) zu den nächsten Punkten maximiert. Diese nächsten Punkte sind die Support Vectors. Für nicht-lineare Daten transformiert der Kernel-Trick die Daten in höhere Dimensionen, ohne explizite Berechnung.

## Kontext und Einordnung

SVM gehört zu [überwachtem Lernen](ueberwachtes-und-nicht-ueberwachtes-lernen) und wird in der [Klassifikation](klassifikation) eingesetzt. Sie konkurriert mit Algorithmen wie logistischer Regression oder neuronalen Netzen, ist aber effizienter für kleinere Datensätze und bietet gute Generalisierung durch Margin-Maximierung.

## Begriffe und Definitionen

### Hyperplane

Ein Hyperplane ist ein flacher Unterraum mit einer Dimension weniger als der Raum selbst, definiert durch die Gleichung $w^T x + b = 0$. In 2D ist es eine Linie, in 3D eine Ebene.

### Support Vectors

Das sind die Trainingsdatenpunkte, die dem Hyperplane am nächsten liegen und seine Position bestimmen. Nur diese Punkte beeinflussen die Klassifikationsgrenze; andere Datenpunkte sind irrelevant.

### Margin

Der Abstand des Hyperplanes zum nächsten Support Vector. SVM maximiert diesen Abstand für bessere Generalisierung: $\gamma = \frac{2}{\|w\|}$.

### Kernel-Trick

Eine Technik, um Daten in höhere Dimensionen zu transformieren, ohne explizite Berechnung, durch Kernel-Funktionen wie linearen Kernel $K(x_i, x_j) = x_i^T x_j$, polynomiellen Kernel $K(x_i, x_j) = (\gamma x_i^T x_j + r)^d$ oder RBF-Kernel $K(x_i, x_j) = \exp(-\gamma \|x_i - x_j\|^2)$.

### Soft-Margin SVM

Erlaubt Fehlklassifikationen mit Slack-Variablen $\xi_i$, um Overfitting zu vermeiden. Die Optimierung lautet: $\min \frac{1}{2}\|w\|^2 + C \sum \xi_i$, wobei C der Regularisierungsparameter ist.

### Mehrklassen-Klassifikation

Für mehr als zwei Klassen verwendet man One-vs-Rest (OvR) oder One-vs-One (OvO). OvR trainiert einen Klassifikator pro Klasse gegen alle anderen; OvO trainiert alle Paare.

## Vorgehen

1. Daten werden vorbereitet: Features werden skaliert, z.B. auf [0,1], da SVM empfindlich auf Skalierung ist.
2. Kernel wird gewählt: Linear für trennbare Daten, RBF für nicht-lineare.
3. Parameter werden getunt: C für Regularisierung, gamma für RBF-Kernel via Cross-Validation.
4. Das quadratische Optimierungsproblem wird gelöst.
5. Neue Daten werden klassifiziert, indem der Hyperplane verwendet wird.

## Beispiele

Angenommen, wir haben 2D-Punkte: Klasse A (1,2), (2,3); Klasse B (4,5), (5,6). Der Hyperplane könnte $$x_1 + x_2 - 5 = 0$$ sein, mit Margin 1. Support Vectors sind die Punkte (2,3) und (4,5).

Für nicht-lineare Daten mit RBF-Kernel: Punkte in Kreisform trennen, RBF transformiert implizit in höhere Dimension.

## Häufige Fehler und Tipps

- Die falsche Kernel-Auswahl führt zu suboptimalen Ergebnissen. Verschiedene Kernel-Funktionen sollten mit Cross-Validation getestet werden.
- Das Fehlen von Feature-Skalierung führt dazu, dass große Features dominieren. Features sollten immer skaliert werden, z.B. auf den Bereich [0,1].
- Bei großen Datensätzen ist die Berechnung komplex, da SVM eine Komplexität von O(n³) aufweist. Ein linearer Kernel oder stochastische Optimierer sind in solchen Fällen effizienter.
- Ein zu hoher Wert für den Regularisierungsparameter C führt zu Overfitting, da zu stark auf Fehler minimiert wird. Die Parameter sollten mit Cross-Validation balanciert werden.

## Selbsttest

1. Was ist ein Hyperplane?
2. Warum sind Support Vectors wichtig?
3. Wie funktioniert der Kernel-Trick?
4. Was ist der Unterschied zwischen Hard- und Soft-Margin SVM?

## Weiterführendes

SVM kann auch für Regression (SVR) verwendet werden. Für tieferes Verständnis der Mathematik siehe UC Berkeley Stat154-Vorlesung.
