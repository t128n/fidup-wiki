---
title: "Wahrscheinlichkeiten"
description: "Grundlagen der Wahrscheinlichkeitsrechnung für Auszubildende in Daten- und Prozessanalyse, einschließlich Definitionen, Berechnungsregeln und Anwendungen in Zufallsexperimenten."
sources:
    - title: "RWTH Aachen (stat2go)"
      url: "https://stat2go.stochastik.rwth-aachen.de/index.php?id=23-grundbegriffe-der-wahrscheinlichkeitsrechnung"
    - title: "Spektrum.de"
      url: "https://www.spektrum.de/lexikon/psychologie/stochastik/14902"
---

Der Begriff **Wahrscheinlichkeit** beschreibt ein Maß für die Chance des Eintretens von Ereignissen in Zufallsexperimenten. Wahrscheinlichkeiten liegen zwischen 0 und 1, wobei 0 das unmögliche und 1 das sichere Ereignis darstellt. Sie beruhen auf der Analyse aller möglichen Ergebnisse und finden Anwendung in der Stochastik, einem Teilgebiet der Mathematik zur Untersuchung zufälliger Prozesse.

## Lernziele

Dieser Artikel vermittelt Kenntnisse zu:

- Grundbegriffen der Wahrscheinlichkeitsrechnung wie Ereignisse, Ergebnismengen und Zufallsexperimente.
- Berechnung von Wahrscheinlichkeiten für einfache Ereignisse sowie Anwendung von Regeln wie Addition und Multiplikation.
- Unterschied zwischen disjunkten und unabhängigen Ereignissen sowie bedingte Wahrscheinlichkeiten.
- Typischen Anwendungsbeispielen in der Datenanalyse und Vermeidung häufiger Fehler bei Berechnungen.

## Kurzüberblick

Wahrscheinlichkeiten quantifizieren die Unsicherheit in zufälligen Versuchen. Grundlegende Konzepte umfassen die Ergebnismenge, Ereignisse als Teilmengen dieser Menge sowie Regeln zur Kombination von Wahrscheinlichkeiten. Bei Laplace-Experimenten, in denen alle Elementarereignisse gleichwahrscheinlich sind, erfolgt die Berechnung durch Abzählen günstiger und möglicher Fälle. Abhängige Ereignisse erfordern bedingte Wahrscheinlichkeiten, während unabhängige Ereignisse multiplikativ kombiniert werden.

## Kontext und Einordnung

Die Wahrscheinlichkeitsrechnung bildet einen Kernbereich der Stochastik und dient der Modellierung unsicherer Ereignisse in Bereichen wie Statistik, [Datenanalyse](datenanalyse) und Entscheidungsfindung. Sie ermöglicht die Vorhersage von Ergebnissen in Zufallsexperimenten, beispielsweise in Qualitätskontrollen oder Risikoanalysen. Im Gegensatz zur deterministischen Mathematik berücksichtigt sie die Variabilität und unterstützt die Bewertung von Chancen und Risiken.

## Begriffe und Definitionen

Ein Zufallsexperiment bezeichnet einen Versuch mit ungewissem Ausgang, dessen Ergebnisse durch [Zufallsvariablen](zufallsvariable) beschrieben werden können. Die Ergebnismenge $\Omega$ enthält alle möglichen Elementarereignisse. Ein Ereignis $A$ ist eine Teilmenge von $\Omega$, also $A \subseteq \Omega$.

Die Wahrscheinlichkeit $P(A)$ eines Ereignisses $A$ liegt zwischen 0 und 1. Bei einem Laplace-Experiment, in dem alle Elementarereignisse gleichwahrscheinlich sind, gilt:

$$
P(A) = \frac{\text{Anzahl günstiger Fälle}}{\text{Anzahl möglicher Fälle}}
$$

Die Schnittmenge $A \cap B$ umfasst alle Elemente, die sowohl zu $A$ als auch zu $B$ gehören. Die Vereinigungsmenge $A \cup B$ enthält Elemente, die in $A$, in $B$ oder in beiden auftreten.

Ereignisse heißen disjunkt (sich gegenseitig ausschließend), wenn $A \cap B = \emptyset$, also kein gemeinsames Element vorliegt. Unabhängige Ereignisse beeinflussen sich nicht gegenseitig; hier gilt $P(A \cap B) = P(A) \cdot P(B)$.

## Vorgehen

1. Die Ergebnismenge $$\Omega$$ und die Ereignisse sind als Teilmengen zu definieren.
2. Es ist zu bestimmen, ob Ereignisse disjunkt oder unabhängig sind.
3. Die Additionsregel für disjunkte Ereignisse wird angewendet: $$P(A \cup B) = P(A) + P(B)$.
4. Die allgemeine Additionsregel für nicht notwendig disjunkte Ereignisse wird verwendet: $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
5. Die Multiplikationsregel für unabhängige Ereignisse wird genutzt: $P(A \cap B) = P(A) \cdot P(B)$.
6. Bedingte Wahrscheinlichkeiten für abhängige Ereignisse werden berechnet: $P(A|B) = \frac{P(A \cap B)}{P(B)}$$ bei $$P(B) > 0$.
7. Die Gegenwahrscheinlichkeit wird mit $P(\overline{A}) = 1 - P(A)$ ermittelt.

## Beispiele

Beispiel 1: Bei einem fairen Würfelwurf ist $$\Omega = \{1, 2, 3, 4, 5, 6\}$. Die Wahrscheinlichkeit für eine gerade Zahl $$A = \{2, 4, 6\}$$ beträgt $$P(A) = \frac{3}{6} = 0{,}5$.

Beispiel 2: Die Wahrscheinlichkeit, zweimal Kopf bei zwei Münzwürfen zu werfen, ergibt sich als $P(A \cap B) = P(A) \cdot P(B) = 0{,}5 \cdot 0{,}5 = 0{,}25$, da die Würfe unabhängig sind.

Beispiel 3: Bei abhängigen Ereignissen, wie dem Ziehen von Karten ohne Zurücklegen, gilt für die bedingte Wahrscheinlichkeit $P(\text{zweite Karte rot | erste Karte rot}) = \frac{25}{51}$, falls 26 rote und 26 schwarze Karten vorliegen und die erste rot war.

## Häufige Fehler und Tipps

- Disjunkte und unabhängige Ereignisse sind nicht zu verwechseln: Disjunkte Ereignisse können nicht gemeinsam eintreten ($A \cap B = \emptyset$), während unabhängige Ereignisse sich nicht beeinflussen.
- Bei der Additionsregel für nicht disjunkte Ereignisse ist der Schnitt $$P(A \cap B)$$ nicht doppelt zu zählen; er wird subtrahiert.
- Bedingte Wahrscheinlichkeiten sind nur anzuwenden, wenn $P(B) > 0$; andernfalls ist die Formel undefiniert.
- Auf die Unabhängigkeit ist zu achten: Bei sequentiellen Versuchen ohne Zurücklegen liegt Abhängigkeit vor.

## Weiterführendes

Für vertiefte Kenntnisse in der Wahrscheinlichkeitsrechnung eignen sich Themen wie Wahrscheinlichkeitsverteilungen oder der Satz von Bayes. In der Datenanalyse finden Wahrscheinlichkeiten Anwendung in Hypothesentests und Modellvalidierungen.
