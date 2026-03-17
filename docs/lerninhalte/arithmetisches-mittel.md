---
title: "Arithmetisches Mittel"
description: "Das arithmetische Mittel ist ein zentrales Lagemaß zur Berechnung des Durchschnittswerts metrischer Daten und dient als Basis für statistische Analysen."
sources:
    - title: "arithmetisches Mittel • Definition | Gabler Wirtschaftslexikon"
      url: "https://wirtschaftslexikon.gabler.de/definition/arithmetisches-mittel-28711"
    - title: "Arithmetisches Mittel - Destatis"
      url: "https://service.destatis.de/eLearning/modul14/lm_pg_796.html"
    - title: "Median oder arithmetisches Mittel? - Statistik Berlin-Brandenburg"
      url: "https://www.statistik-berlin-brandenburg.de/news/2025/median-arithmetisches-mittel-erklaert"
---

Das **arithmetische Mittel** (umgangssprachlich Durchschnitt) ist ein grundlegendes [Lagemaß](lagemasse) in der deskriptiven Statistik. Es repräsentiert den mathematischen Schwerpunkt einer Datenmenge und gibt den Wert an, den alle Einzelbeobachtungen annehmen würden, wenn die Gesamtsumme gleichmäßig auf alle Einheiten verteilt wäre. In der Daten- und Prozessanalyse dient es dazu, die zentrale Tendenz einer Verteilung zu beschreiben und Entwicklungen über Zeiträume hinweg vergleichbar zu machen.

## Kernaspekte

Der Artikel vermittelt Wissen zu folgenden Punkten:

- Definition und mathematische Herleitung des arithmetischen Mittels.
- Abgrenzung gegenüber anderen Lagemaßen wie dem [Median](median).
- Berechnung einfacher und gewichteter Durchschnittswerte für Prozessdaten.
- Bewertung der Empfindlichkeit gegenüber Ausreißern.

## Kontext und Einordnung

In der Statistik ist die Anwendung des arithmetischen Mittels auf [kardinalskalierte](kardinalskala) (metrische) Daten beschränkt. Dies umfasst Merkmale auf Intervall- oder Verhältnisskalen. Für Daten auf einer [Nominalskala](nominalskala) oder [Ordinalskala](ordinalskala) (z. B. Befragungsergebnisse mit Rangfolge) ist die Berechnung nicht sinnvoll, da die Abstände zwischen den Werten mathematisch nicht definiert sind.

Ein prägendes Merkmal ist die Einbeziehung jedes einzelnen Werts in das Gesamtergebnis. Dies führt dazu, dass Extremwerte das Ergebnis stark beeinflussen. Bei asymmetrischen Verteilungen oder dem Vorliegen von Ausreißern liefert der [Median](median) häufig ein repräsentativeres Bild der zentralen Tendenz.

## Mathematische Grundlagen

Die Berechnung erfolgt durch die Addition aller beobachteten Einzelwerte, dividiert durch die Gesamtzahl der Werte.

### Formel

Für eine Datenmenge mit n Werten gilt:

$$
\bar{x} = \dfrac{1}{n} \sum^{n}_{i=1}x_i = \dfrac{x_1+x_2+x_3+...+x_n}{n}
$$

Dabei bezeichnet x-quer das arithmetische Mittel, n die Anzahl der Werte und x_i die einzelnen Beobachtungen.

### Gewichtetes arithmetisches Mittel

In der Prozessanalyse findet oft das gewichtete arithmetische Mittel Anwendung, wenn einzelne Werte eine unterschiedliche Relevanz oder Häufigkeit besitzen. Jeder Wert x_i wird hierbei mit einem Gewichtungsfaktor w_i (z. B. Zeitanteil oder Menge) multipliziert:

$$
\bar{x}_w = \dfrac{\sum^{n}_{i=1}(w_i \cdot x_i)}{\sum^{n}_{i=1}w_i}
$$

## Praxisbeispiele

### Einfacher Durchschnitt

In der Ticketbearbeitung werden für fünf Vorgänge folgende Zeiten in Minuten gemessen: 10, 12, 14, 15 und 18.

$$
\bar{x} = \dfrac{10 + 12 + 14 + 15 + 18}{5} = \dfrac{69}{5} = 13,8
$$

Die durchschnittliche Bearbeitungszeit beträgt 13,8 Minuten.

### Gewichteter Durchschnitt

Zur Ermittlung eines durchschnittlichen Stundensatzes werden drei Dienstleistungen mit unterschiedlichem zeitlichem Aufwand betrachtet:

- Dienstleistung A: 50 EUR (Aufwand: 20 h)
- Dienstleistung B: 75 EUR (Aufwand: 10 h)
- Dienstleistung C: 120 EUR (Aufwand: 5 h)

$$
\bar{x}_w = \dfrac{(50 \cdot 20) + (75 \cdot 10) + (120 \cdot 5)}{20 + 10 + 5} = \dfrac{1000 + 750 + 600}{35} = \dfrac{2350}{35} \approx 67,14
$$

Der gewichtete durchschnittliche Stundensatz beträgt ca. 67,14 EUR.

## Fehlerquellen und Anwendungshinweise

- **Verwechslung mit dem Median:** Das arithmetische Mittel beschreibt den Schwerpunkt der Verteilung, nicht zwangsläufig den Wert an der mittleren Position.
- **Verzerrung durch Ausreißer:** Bei extremen Abweichungen in der Datenmenge sollte das arithmetische Mittel kritisch hinterfragt und durch den [Median](median) ergänzt werden.
- **Ungeeignetes Skalenniveau:** Die Mittelwertbildung bei qualitativen Merkmalen (z. B. Kategorien oder Ränge ohne metrischen Abstand) führt zu mathematisch unbrauchbaren Ergebnissen.

## Wissensüberprüfung

1. Welchen Effekt haben extreme Ausreißer auf das arithmetische Mittel im Vergleich zum Median?
2. Warum ist die Berechnung des Mittels für ordinalskalierte Daten problematisch?
3. In welchen Situationen ist die Nutzung von Gewichtungsfaktoren zwingend erforderlich?
4. Wie lässt sich die Aussage „Das arithmetische Mittel ist der Schwerpunkt einer Verteilung“ veranschaulichen?
