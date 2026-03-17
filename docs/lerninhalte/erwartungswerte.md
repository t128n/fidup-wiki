---
title: "Erwartungswert"
description: "Der Erwartungswert ist ein zentraler Lageparameter der Stochastik, der den langfristigen Durchschnittswert einer Zufallsvariablen bei unendlicher Wiederholung beschreibt."
sources:
    - title: "Erwartungswert – Wikipedia"
      url: "https://de.wikipedia.org/wiki/Erwartungswert"
    - title: "Erwartungswert einfach erklärt"
      url: "https://studyflix.de/mathematik/erwartungswert-1648"
    - title: "Erwartungswert-Regel • Definition"
      url: "https://wirtschaftslexikon.gabler.de/definition/erwartungswert-regel-53917"
---

Der **Erwartungswert** ist ein grundlegender Kennwert der Wahrscheinlichkeitsrechnung. Er gibt an, welchen Wert eine Zufallsvariable im Durchschnitt annimmt, wenn das zugrunde liegende Zufallsexperiment unendlich oft unter gleichen Bedingungen wiederholt wird. Als theoretischer Mittelwert einer Wahrscheinlichkeitsverteilung dient er als zentraler Lageparameter in der [Datenanalyse](datenanalyse).

## Grundlagen und Definition

Der Erwartungswert beschreibt den Schwerpunkt einer Wahrscheinlichkeitsverteilung. Er entspricht nicht zwingend einem Wert, den die Zufallsvariable tatsächlich annehmen kann.

Ein klassisches Beispiel ist der Wurf eines fairen sechsseitigen Würfels. Die möglichen Ergebnisse sind die Zahlen 1 bis 6, jeweils mit einer Wahrscheinlichkeit von 1/6.

$$
E(X) = 3,5
$$

Obwohl ein Ergebnis von 3,5 bei einem einzelnen Wurf unmöglich ist, stabilisiert sich der Durchschnitt der Ergebnisse bei einer hohen Anzahl von Versuchen genau bei diesem Wert. Dieser Zusammenhang wird mathematisch durch das Gesetz der großen Zahlen beschrieben.

### Diskrete Zufallsvariablen

Bei einer diskreten [Zufallsvariable](zufallsvariable), die eine abzählbare Anzahl an Werten annehmen kann (wie Augenzahlen oder Fehleranzahlen), ist der Erwartungswert die Summe der Produkte aus jedem Wert und seiner Eintrittswahrscheinlichkeit:

$$
E(X) = \sum_{i=1}^{n} x_i \cdot P(X = x_i)
$$

Hierbei steht der jeweilige Wert für die Ausprägung und der zweite Faktor für die dazugehörige Wahrscheinlichkeit.

### Stetige Zufallsvariablen

Bei stetigen Zufallsvariablen, die jeden beliebigen Wert in einem Intervall annehmen können (z. B. Zeitdauern oder Messwerte), erfolgt die Berechnung über ein Integral. Dabei wird das Produkt aus dem Wert und der [Dichtefunktion](dichtefunktion) über den gesamten Definitionsbereich integriert:

$$
E(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx
$$

## Eigenschaften und Rechenregeln

Der Erwartungswert ist ein linearer Operator. Für eine Zufallsvariable und konstante Faktoren gilt:

$$
E(aX + b) = a \cdot E(X) + b
$$

Diese Eigenschaft ist nützlich bei der Transformation von Daten, etwa bei der Umrechnung von Einheiten oder der Einpreisung fixer Kosten.

## Anwendung in der Prozessanalyse

In der betrieblichen Praxis dient der Erwartungswert zur Risikoabschätzung und Entscheidungsunterstützung.

### Die Erwartungswert-Regel (μ-Regel)

Bei Entscheidungen unter Risiko hilft die Erwartungswert-Regel, vorteilhafte Alternativen zu identifizieren. Ein risikoneutraler Entscheider wählt die Option mit dem höchsten Erwartungswert für den Nutzen oder Gewinn. In der Prozessoptimierung wird so bewertet, ob eine Änderung trotz Unsicherheiten im Durchschnitt zu besseren Ergebnissen führt.

## Abgrenzung zum arithmetischen Mittel

Der theoretische Erwartungswert unterscheidet sich grundlegend vom empirischen arithmetischen Mittel:

| Merkmal        | Erwartungswert            | Arithmetisches Mittel      |
| :------------- | :------------------------ | :------------------------- |
| **Natur**      | Theoretischer Parameter   | Empirische Kennzahl        |
| **Datenbasis** | Wahrscheinlichkeitsmodell | Stichprobe (Beobachtungen) |
| **Gültigkeit** | Grundgesamtheit           | Vorhandene Daten           |

### Praxisbeispiel: Projektrisiko

Ein Unternehmen prüft ein Projekt mit drei möglichen Ausgängen. Die Tabelle zeigt die potenziellen finanziellen Ergebnisse und deren Eintrittswahrscheinlichkeiten:

| Szenario      | Ergebnis     | Wahrscheinlichkeit |
| :------------ | :----------- | :----------------- |
| Erfolg        | + 10.000 EUR | 10 % (0,10)        |
| Kostendeckung | + 500 EUR    | 30 % (0,30)        |
| Misserfolg    | - 2.000 EUR  | 60 % (0,60)        |

**Berechnung:**

$$
E(X) = (10.000 \cdot 0,10) + (500 \cdot 0,30) + (-2.000 \cdot 0,60)
$$

$$
E(X) = 1.000 + 150 - 1.200 = -50
$$

**Bewertung:** Der Erwartungswert beträgt -50 EUR. Das Projekt würde bei mehrfacher Durchführung im Durchschnitt einen Verlust von 50 EUR pro Durchlauf generieren. Auf Basis dieser Kennzahl ist das Projekt abzulehnen.

## Typische Fehlerquellen

- **Verwechslung mit dem Modus:** Der Erwartungswert beschreibt den Durchschnitt, nicht zwingend den wahrscheinlichsten Wert.
- **Fehlende Streuungsbetrachtung:** Er gibt keine Auskunft über das Risiko extremer Abweichungen. Hierfür ist die Betrachtung von [Varianz](varianz) oder [Standardabweichung](standardabweichung) erforderlich.
- **Fehlannahmen:** Der Erwartungswert reagiert empfindlich auf ungenaue Wahrscheinlichkeitsschätzungen.

## Wissenstest

1. Was kennzeichnet den Erwartungswert bei einem Zufallsexperiment?
2. Warum kann der Erwartungswert eines Würfelwurfs (3,5) kein reales Wurfergebnis sein?
3. Worin liegt der Unterschied in der Berechnung zwischen diskreten und stetigen Zufallsvariablen?
4. In welchen Situationen ist die Anwendung der Erwartungswert-Regel sinnvoll?
5. Ein Prozess hat zwei Ausgänge: Erfolg (100 Einheiten) mit 20 % und Basis (50 Einheiten) mit 80 %. Wie hoch ist der Erwartungswert?

**Lösung zu 5:**

$$
100 \cdot 0,2 + 50 \cdot 0,8 = 20 + 40 = 60
$$
