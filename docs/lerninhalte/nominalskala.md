---
title: "Nominalskala"
description: "Die Nominalskala ist das niedrigste Skalenniveau in der Statistik, bei dem Daten in Kategorien ohne natürliche Ordnung eingeteilt werden. Sie eignet sich für qualitative Merkmale wie Geschlecht, Haarfarbe oder Blutgruppe und ermöglicht nur Häufigkeitsauszählungen und den Modus."
sources:
  - title: "Skalenniveaus | Methodenportal der Uni Leipzig"
    url: "https://home.uni-leipzig.de/methodenportal/skalenniveaus/"
  - title: "Skalenniveaus – Datenanalyse mit R (LMU München)"
    url: "https://datenanalyse.ifkw.lmu.de/skalenniveaus/"
  - title: "Nominalskala – Wikipedia"
    url: "https://de.wikipedia.org/wiki/Nominalskala"
---

Die **Nominalskala** stellt das grundlegendste Skalenniveau in der Statistik dar, bei dem Daten lediglich in sich gegenseitig ausschließende Kategorien eingeteilt werden, ohne dass eine inhärente Ordnung oder Rangfolge besteht. Sie findet Anwendung bei qualitativen Merkmalen, deren Ausprägungen unterschieden werden können, aber nicht quantitativ bewertet oder miteinander verglichen werden.

## Definition

Die Nominalskala ist das niedrigste Skalenniveau in der Hierarchie der Messskalen. Bei diesem Skalenniveau werden Ausprägungen eines Merkmals lediglich unterschieden, aber nicht in eine natürliche Ordnung gebracht. Es kann nur festgestellt werden, ob zwei Ausprägungen gleich oder ungleich sind. Eine quantitative Bewertung oder Rangordnung ist nicht möglich.

## Merkmale

Die Nominalskala zeichnet sich durch folgende Eigenschaften aus:

- Keine natürliche Ordnung: Die Kategorien weisen keine inhärente Reihenfolge auf, beispielsweise gibt es keinen logischen Grund, warum eine Haarfarbe "größer" oder "kleiner" als eine andere sein sollte.
- Sich gegenseitig ausschließende Kategorien: Jede Beobachtung gehört genau einer Kategorie an, ohne Überlappungen.
- Nur Gleichheit oder Ungleichheit bestimmbar: Es ist möglich, Kategorien zu unterscheiden, aber keine Vergleiche wie "mehr als" oder "weniger als" durchzuführen.
- Typischerweise für diskrete, kategoriale Daten: Sie eignet sich für qualitative Merkmale, die sich nicht auf einer kontinuierlichen Skala abbilden lassen.

## Beispiele

Typische Anwendungen der Nominalskala umfassen:

- Geschlecht: Männlich, weiblich, divers.
- Haarfarbe: Blond, braun, schwarz, rot.
- Blutgruppe: A, B, AB, 0.
- Fahrzeugkennzeichen: Verschiedene Buchstaben- und Zahlenkombinationen ohne Ordnung.
- Postleitzahlen: Numerische Codes, die Regionen bezeichnen, aber keine quantitative Bedeutung haben.
- Religionszugehörigkeit: Christentum, Islam, Buddhismus, Atheismus.

Ein Gegenbeispiel wäre die Schulnote: Sie weist eine Ordnung auf (1 ist besser als 2) und gehört daher zur [Ordinalskala](ordinalskala).

## Erlaubte Operationen

Für nominal skalierte Daten sind nur bestimmte statistische Operationen sinnvoll, da mathematische Berechnungen wie Addition oder Division nicht zulässig sind:

- Häufigkeitsauszählung: Absolute Anzahl (z. B. 50 männliche, 30 weibliche Personen) und relative Häufigkeit (z. B. 62,5 Prozent männlich).
- Modus: Das Maß der zentralen Tendenz, das die am häufigsten auftretende Kategorie angibt (z. B. die häufigste Haarfarbe in einer Gruppe).
- Kreuztabellen: Untersuchung von Zusammenhängen zwischen zwei nominalen Variablen, z. B. Geschlecht und Präferenz für ein Produkt.
- Chi-Quadrat-Test: Ein inferenzstatistisches Verfahren zur Prüfung, ob beobachtete Häufigkeiten von erwarteten abweichen.
- Visualisierungen: Balkendiagramme oder Kreisdiagramme zur Darstellung von Häufigkeiten.

## Häufige Fehler und Tipps

Typische Stolpersteine bei nominalen Daten sind:

- Numerische Codes falsch interpretieren: Kategorien werden oft mit Zahlen kodiert (z. B. 1 = männlich, 2 = weiblich), aber diese Codes dienen nur der Kennzeichnung. Eine Berechnung des Mittelwerts (z. B. 1,7) ist sinnlos und irreführend.
- Unzulässige Operationen anwenden: Mittelwert, Standardabweichung oder Korrelationen sind nicht erlaubt, da sie quantitative Abstände voraussetzen.
- Verwechslung mit ordinalen Daten: Wenn eine Ordnung vorhanden ist, wie bei Schulnoten, handelt es sich um eine [Ordinalskala](ordinalskala).

Das Skalenniveau sollte vor jeder Analyse geprüft werden, um passende Methoden auszuwählen und Fehlinterpretationen zu vermeiden.

## Beziehung zu anderen Skalenniveaus

Die Nominalskala bildet die Basis der Skalenniveaus, auf der höhere Niveaus aufbauen:

- **Ordinalskala**: Fügt eine Ordnung hinzu (z. B. Schulnoten: 1 besser als 2), aber keine definierten Abstände.
- **Intervallskala**: Ermöglicht definierte Abstände, aber keinen absoluten Nullpunkt (z. B. Temperatur in °C: Der Unterschied zwischen 10 °C und 20 °C ist derselbe wie zwischen 20 °C und 30 °C).
- **Verhältnisskala**: Höchstes Niveau mit absolutem Nullpunkt (z. B. Gewicht: 0 kg bedeutet kein Gewicht).

Alle Operationen, die auf nominaler Ebene erlaubt sind, bleiben auch auf höheren Ebenen möglich.
