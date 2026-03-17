---
title: "Geometrisches Mittel"
description: "Das geometrische Mittel ist ein statistischer Lagewert zur Berechnung durchschnittlicher Wachstumsraten und multiplikativer Prozesse."
sources:
    - title: "Geometrisches Mittel - einfach erklärt"
      url: "https://studyflix.de/statistik/geometrisches-mittel-1038"
    - title: "Geometrisches Mittel"
      url: "https://de.wikipedia.org/wiki/Geometrisches_Mittel"
    - title: "Geometrisches Mittel – Definition, Formel & Beispiele"
      url: "https://www.bachelorprint.de/statistik/geometrisches-mittel/"
---

Das **geometrische Mittel** ist ein statistischer Lagewert, der multiplikative Prozesse analysiert. Die Berechnung erfolgt durch das Ziehen der n-ten Wurzel aus dem Produkt von n positiven Messwerten. Im Gegensatz zum [arithmetischen Mittel](arithmetisches-mittel) berücksichtigt es die proportionale Natur von Datenänderungen. Es ist die mathematische Grundlage für die Bestimmung durchschnittlicher Wachstumsraten, Zinseszinsen oder Indexveränderungen.

## Lernziele

- Definition des geometrischen Mittels und Abgrenzung zu anderen Mittelwerten wie dem [Median](median).
- Anwendung der mathematischen Formel für n Werte.
- Unterscheidung zwischen Wachstumsraten und Wachstumsfaktoren.
- Berechnung praxisnaher Beispiele aus der Finanzmathematik und Betriebswirtschaft.

## Methodik und Voraussetzungen

Das geometrische Mittel findet Anwendung, wenn Werte nacheinander auf derselben Basis aufbauen, wie bei Zinsen auf bereits verzinstes Kapital. Es ermittelt den konstanten Faktor, der über einen Zeitraum zum gleichen Endergebnis führt wie unterschiedliche Einzelwerte. Eine Voraussetzung für die Berechnung ist die Positivität aller betrachteten Werte:

$$
x_i > 0
$$

## Formel zur Berechnung

Die mathematische Bestimmung erfolgt über das Produkt der Einzelwerte. Aus diesem Produkt wird anschließend die Wurzel entsprechend der Anzahl der Werte gezogen:

$$
\bar{x}_{\text{geom}} = \sqrt[n]{\prod_{i=1}^{n} x_i} = \sqrt[n]{x_1 \cdot x_2 \cdot \dots \cdot x_n}
$$

Die verwendeten Variablen bezeichnen:

- x-quer_geom: Geometrisches Mittel
- n: Anzahl der Messwerte
- x_i: Einzelne positive Messwerte (beispielsweise Wachstumsfaktoren)

## Vergleich mit dem arithmetischen Mittel

Die Wahl des passenden Mittelwerts richtet sich nach der mathematischen Verknüpfung der Daten. Das arithmetische Mittel ist für additive Zusammenhänge geeignet, während das geometrische Mittel multiplikative Prozesse korrekt abbildet.

| Merkmal        | Arithmetisches Mittel                    | Geometrisches Mittel                          |
| :------------- | :--------------------------------------- | :-------------------------------------------- |
| **Logik**      | Additiv (Summe)                          | Multiplikativ (Produkt)                       |
| **Anwendung**  | Absolute Werte (z. B. Körpergröße)       | Relative Werte (z. B. Wachstum)               |
| **Verhältnis** | Meist größer als das geometrische Mittel | Kleiner oder gleich dem arithmetischen Mittel |

In der [Datenanalyse](datenanalyse) führt die Verwendung des arithmetischen Mittels bei prozentualen Veränderungen oft zu einem systematisch verzerrten, zu hohen Ergebnis.

## Beispiel: Durchschnittliches Wachstum

Ein Kapital von 1.000 EUR wächst über drei Jahre mit unterschiedlichen Raten. Zur Bestimmung der durchschnittlichen jährlichen Entwicklung erfolgt zunächst die Ermittlung der Wachstumsfaktoren:

-   1. Jahr: +5 % entspricht Faktor 1,05
-   2. Jahr: +10 % entspricht Faktor 1,10
-   3. Jahr: -2 % entspricht Faktor 0,98

Die Berechnung des durchschnittlichen Faktors erfolgt über das geometrische Mittel:

$$
\bar{x}_{\text{geom}} = \sqrt[3]{1,05 \cdot 1,10 \cdot 0,98} \approx \sqrt[3]{1,1319} \approx 1,0421
$$

Das Ergebnis von ca. 1,0421 entspricht einer durchschnittlichen jährlichen Wachstumsrate von etwa 4,21 %.

## Typische Fehlerquellen

- **Falsche Basiswerte:** Die direkte Nutzung von Prozentwerten (z. B. 5) führt zu Fehlern. Korrekt ist die Verwendung von Faktoren (1,05), um die multiplikative Verknüpfung abzubilden.
- **Negative Werte:** Das geometrische Mittel ist für negative Zahlen nicht definiert. Eine Abnahme (z. B. 10 %) ist daher stets als Faktor (0,90) auszudrücken.
- **Wurzelexponent:** Der Wurzelexponent muss exakt der Anzahl der multiplizierten Faktoren entsprechen.

## Selbsttest

1. Warum liefert das arithmetische Mittel bei Zinsrechnungen falsche Ergebnisse?
2. Wie lautet der Wachstumsfaktor bei einer Wertminderung von 20 %?
3. Weshalb müssen alle Werte beim geometrischen Mittel positiv sein?
4. In welchem Fall sind das arithmetische und das geometrische Mittel identisch?
