---
title: "Dichtefunktion"
description: "Die Dichtefunktion beschreibt die Verteilung der Wahrscheinlichkeiten für stetige Zufallsvariablen über ihren gesamten Wertebereich."
sources:
    - title: "Dichtefunktion | Mathebibel"
      url: "https://www.mathebibel.de/dichtefunktion"
    - title: "Dichtefunktion & Wahrscheinlichkeitsdichte einfach erklärt!"
      url: "https://www.statistikpsychologie.de/dichtefunktion/"
---

Die **Dichtefunktion** (auch Wahrscheinlichkeitsdichte oder _Probability Density Function_) definiert die Verteilung der Wahrscheinlichkeitsmasse einer stetigen [Zufallsvariable](zufallsvariable). Bei stetigen Variablen werden einzelnen Werten keine konkreten Wahrscheinlichkeiten zugeordnet. Stattdessen gibt die Dichtefunktion die Konzentration der Werte in einem Bereich an. Der Funktionswert an einer Stelle stellt die Dichte dar. Wahrscheinlichkeiten ergeben sich aus der Fläche unter der Kurve innerhalb eines Intervalls.

## Lernziele

- Unterschiede zwischen Dichtefunktion und Wahrscheinlichkeitsfunktion benennen.
- Mathematische Voraussetzungen einer Dichtefunktion bestimmen.
- Zusammenhang zwischen Dichtefunktion und kumulativer [Verteilungsfunktion](verteilung) erläutern.
- Wahrscheinlichkeiten für Intervalle interpretieren.

## Überblick

Eine Funktion ist eine Dichtefunktion, wenn sie im Definitionsbereich keine negativen Werte annimmt und die Gesamtfläche unter der Kurve den Wert 1 ergibt. Die Gesamtwahrscheinlichkeit aller Ergebnisse beträgt immer 100 %. In der [Datenanalyse](datenanalyse) dient die Funktion zur Visualisierung von Verteilungsformen und zur Definition von Schwellenwerten für Prozesse.

## Kontext und Einordnung

In der Statistik wird zwischen diskreten und stetigen Modellen unterschieden.

### Diskrete Zufallsvariablen

Bei diskreten Variablen (beispielsweise die Anzahl von Fehlern) wird die Wahrscheinlichkeitsfunktion verwendet. Die Wahrscheinlichkeit für einen exakten Wert ist direkt definiert:
$$ P(X = x) = f(x) $$
Die Summe aller Einzelwahrscheinlichkeiten ergibt 1.

### Stetige Zufallsvariablen

Bei stetigen Variablen (beispielsweise Prozessdauer oder Temperaturmessungen) kann die Variable unendlich viele Werte annehmen. Die Wahrscheinlichkeit für einen exakten Punktwert beträgt 0:
$$ P(X = x) = 0 $$
Wahrscheinlichkeiten werden für Intervalle über das Integral der Dichtefunktion berechnet.

## Mathematische Eigenschaften

Eine gültige Dichtefunktion
$$ f(x) $$
muss zwei Bedingungen erfüllen:

1. **Nichtnegativität**: Die Funktion nimmt keine negativen Werte an.
   $$ f(x) \geq 0 $$

2. **Normierung**: Das Integral über den gesamten Wertebereich ist 1.
   $$ \int\_{-\infty}^{\infty} f(x) \, dx = 1 $$

Der Funktionswert kann an einzelnen Stellen größer als 1 sein, solange die Gesamtfläche der Normierung entspricht.

## Zusammenhang zur Verteilungsfunktion

Die Dichtefunktion steht in direktem Bezug zur kumulativen [Verteilungsfunktion](verteilung). Diese gibt die Wahrscheinlichkeit an, dass die Zufallsvariable einen Wert kleiner oder gleich einem Schwellenwert annimmt.

- **Integration**: Die Verteilungsfunktion ist das Integral der Dichtefunktion.
  $$ F(x) = P(X \leq x) = \int\_{-\infty}^{x} f(t) \, dt $$

- **Ableitung**: Die Dichtefunktion ist die erste Ableitung der Verteilungsfunktion.
  $$ f(x) = F'(x) $$

## Beispiel

Ein logistischer Prozess hat eine Bearbeitungsdauer zwischen 0 und 10 Minuten. Es liegt eine Gleichverteilung vor. Die Dichtefunktion ist in diesem Bereich konstant.

**Berechnung der Dichte**:
Da die Fläche (Breite mal Höhe) den Wert 1 ergeben muss, gilt bei einer Breite von 10:
$$ 10 \times c = 1 \implies c = 0,1 $$
Die Dichtefunktion lautet:
$$ f(x) = \begin{cases} 0,1 & \text{für } 0 \leq x \leq 10 \\ 0 & \text{sonst} \end{cases} $$

**Berechnung einer Wahrscheinlichkeit**:
Die Wahrscheinlichkeit für eine Dauer zwischen 2 und 5 Minuten entspricht der Fläche im Intervall:
$$ P(2 \leq X \leq 5) = \int\_{2}^{5} 0,1 \, dx = [0,1x]\_2^5 = 0,5 - 0,2 = 0,3 $$
Die Wahrscheinlichkeit beträgt 30 %.

## Analyse häufiger Fehler

- **Verwechslung von Dichte und Wahrscheinlichkeit**: Der Funktionswert ist keine Wahrscheinlichkeit. Maßgeblich ist die Fläche unter der Kurve.
- **Annahme begrenzter Funktionswerte**: Die Dichte kann Werte größer als 1 annehmen, insbesondere bei geringer Streuung der Daten.
- **Fehlende Integration**: Zur Bestimmung von Wahrscheinlichkeiten muss die Dichtefunktion integriert oder die bereits integrierte Verteilungsfunktion genutzt werden.

## Selbsttest

1. Warum ist die Punktwahrscheinlichkeit bei stetigen Verteilungen 0?
2. Welche zwei Bedingungen definieren eine Dichtefunktion?
3. Wie wird die Wahrscheinlichkeit für ein Intervall berechnet?
4. In welchem mathematischen Verhältnis stehen Dichtefunktion und Verteilungsfunktion?
