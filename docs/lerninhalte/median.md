---
title: "Median"
description: "Der Median (Zentralwert) ist ein robuster Lageparameter der Statistik, der eine sortierte Datenreihe in zwei gleich große Hälften teilt."
sources:
    - title: "Statistisches Bundesamt: Median"
      url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Einkommen-Konsum-Lebensbedingungen/Glossar/median.html"
    - title: "StatistikPsychologie: Median verständlich erklärt"
      url: "https://www.statistikpsychologie.de/median/"
    - title: "Welt der BWL: Median / Zentralwert"
      url: "https://welt-der-bwl.de/Median"
---

Der **Median**, auch Zentralwert genannt, ist ein Lageparameter in der Statistik, der eine sortierte Datenreihe in zwei gleich große Hälften teilt. Er markiert den Punkt, an dem 50 % der Beobachtungen kleiner oder gleich und 50 % der Beobachtungen größer oder gleich diesem Wert sind. Im Gegensatz zum [arithmetischen Mittel](arithmetisches-mittel) ist der Median robust gegenüber Ausreißern. Er findet daher bevorzugt Anwendung, wenn Datensätze extrem hohe oder niedrige Einzelwerte enthalten, die einen Durchschnittswert verzerren würden.

## Merkmale und Voraussetzungen

Der Median fungiert als positionsorientierter Kennwert. Seine Bestimmung basiert nicht auf der Summe aller Werte, sondern ausschließlich auf der relativen Position innerhalb einer Rangfolge. In der deskriptiven Statistik wird er auch als 50 %-Quantil bezeichnet.

Für eine korrekte Bestimmung müssen folgende Bedingungen erfüllt sein:

- **Sortierung:** Die Daten müssen in einer aufsteigenden Rangliste vorliegen. Bei einer unsortierten Liste ist die Bestimmung des Zentralwerts nicht möglich.
- **Skalenniveau:** Der Median erfordert mindestens [Ordinalskalenniveau](ordinalskala). Die Daten müssen sich also in eine natürliche Rangfolge bringen lassen (z. B. Schulnoten, Zufriedenheitsgrade). Bei [nominalen Daten](nominalskala) (z. B. Automarken) ist der Median nicht definiert. Bei metrisch skalierten Daten ([Kardinalskala](kardinalskala)) wie Einkommen stellt er ein zentrales Analyseinstrument dar.

## Methodik der Berechnung

Die Bestimmung erfolgt systematisch in Abhängigkeit vom Stichprobenumfang $$ n $$.

### Datenaufbereitung

Grundlage ist die Überführung der Urliste in eine sortierte Rangliste.

- Unsortiert: 15, 3, 8, 22, 10
- Sortiert: 3, 8, 10, 15, 22

### Median bei ungeradem Stichprobenumfang

Bei einer ungeraden Anzahl an Messwerten entspricht der Median exakt dem Wert an der mittleren Position. Die Position wird wie folgt ermittelt:

$$ \text{Position} = \frac{n + 1}{2} $$

Der Median $$ \tilde{x} $$ ist der Wert an dieser Stelle:

$$ \tilde{x} = x\_{\frac{n + 1}{2}} $$

_Beispiel:_ Bei $$ n = 5 $$ Werten liegt die Position bei $$ (5+1)/2 = 3 $$. Der Median ist der dritte Wert der sortierten Liste.

### Median bei geradem Stichprobenumfang

Bei einer geraden Anzahl an Messwerten existieren zwei mittlere Positionen. Der Median wird hier als arithmetisches Mittel dieser beiden Werte definiert:

$$ \text{Position}\_1 = \frac{n}{2} $$
$$ \text{Position}\_2 = \frac{n}{2} + 1 $$

Die Berechnung des Medians $$ \tilde{x} $$ lautet:

$$ \tilde{x} = \frac{1}{2} \cdot (x*{\frac{n}{2}} + x*{\frac{n}{2} + 1}) $$

_Beispiel:_ Bei $$ n = 4 $$ Werten sind die Positionen 2 und 3 maßgeblich. Der Median bildet das Zentrum zwischen diesen beiden Werten.

## Vergleich mit dem arithmetischen Mittel

Die Stärke des Medians liegt in der Ausreißerresistenz. Während das [arithmetische Mittel](arithmetisches-mittel) empfindlich auf Extremwerte reagiert, bleibt der Median stabil.

| Datensatz      | Werte               | Arithm. Mittel | Median |
| :------------- | :------------------ | :------------- | :----- |
| Ohne Ausreißer | 10, 12, 13, 15, 20  | 14,0           | 13     |
| Mit Ausreißer  | 10, 12, 13, 15, 100 | 30,0           | 13     |

Der Ausreißer (100) verschiebt den Durchschnittswert deutlich nach oben, während der Median unverändert die Mitte der Verteilung repräsentiert.

## Typische Fehlerquellen

- **Fehlende Sortierung:** Ohne vorherige Rangfolgebildung ist das Ergebnis mathematisch wertlos.
- **Falsche Fallunterscheidung:** Die Wahl der Berechnungsmethode muss strikt nach dem Stichprobenumfang (gerade oder ungerade) erfolgen.
- **Unpassendes Skalenniveau:** Die Anwendung auf nicht-ordinale Merkmale führt zu fehlerhaften Interpretationen.

## Kontrollfragen

1. Warum liefert der Median bei der Analyse von Gehaltsstrukturen oft ein realistischeres Bild als der Durchschnitt?
2. Wie wird der Median der Reihe 2, 4, 6, 8, 10, 12 berechnet?
3. Welchen Einfluss hat eine Verringerung des kleinsten Werts auf den Median?
4. Weshalb ist für die Variable „Wohnort“ kein Median definierbar?
