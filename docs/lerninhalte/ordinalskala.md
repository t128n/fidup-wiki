---
title: "Ordinalskala"
description: "Die Ordinalskala ist ein Skalenniveau in der Statistik, das Rangordnungen ermöglicht und Vergleiche wie größer oder kleiner zulässt, ohne dass Abstände quantifizierbar sind. Sie findet Anwendung in Bewertungen und Rankings wie Schulnoten oder Kundenzufriedenheit."
sources:
  - title: "Skalenniveaus | Methodenportal der Uni Leipzig"
    url: "https://home.uni-leipzig.de/methodenportal/skalenniveaus/"
  - title: "Skalenniveaus – Datenanalyse mit R"
    url: "https://datenanalyse.ifkw.lmu.de/skalenniveaus/"
  - title: "Skalenniveau – Wikipedia"
    url: "https://de.wikipedia.org/wiki/Skalenniveau"
---

Die **Ordinalskala** ist ein Skalenniveau in der Statistik, das Merkmalsausprägungen in eine logische Rangordnung bringt. Sie erlaubt Vergleiche auf Gleichheit und Ungleichheit sowie größer oder kleiner, ohne dass Abstände zwischen den Rängen quantifizierbar sind. Typische Anwendungen sind Bewertungen wie Schulnoten oder Likert-Skalen in Umfragen.

## Lernziele

Nach diesem Artikel können folgende Kenntnisse angewendet werden:

- Die Eigenschaften der Ordinalskala und ihre Abgrenzung zu anderen Skalenniveaus beschreiben.
- Zulässige statistische Methoden für ordinalskalierte Daten identifizieren.
- Praktische Beispiele für Ordinalskalen in Datenanalysen erkennen.

## Kurzüberblick

Die Ordinalskala gehört zu den vier klassischen Skalenniveaus nach Stevens und ist das zweitniedrigste Niveau nach der [Nominalskala](nominalskala). Im Gegensatz zur Nominalskala, die nur Kategorien ohne Ordnung unterscheidet, ermöglicht sie Rangordnungen, aber keine quantitativen Abstände. Sie findet sich häufig in subjektiven Bewertungen, bei denen eine Reihenfolge besteht, ohne dass Abstände messbar sind.

## Kontext und Einordnung

Die Ordinalskala ordnet sich in die Hierarchie der Skalenniveaus ein, die von Stanley Smith Stevens definiert wurde. Sie baut auf der Nominalskala auf, indem sie zusätzlich eine Ordnungsrelation hinzufügt. Nominal- und Ordinalskalen gelten als kategorial, Intervall- und Verhältnisskalen als metrisch. Die Einordnung bestimmt, welche statistischen Operationen und Analysen zulässig sind.

## Begriffe und Definitionen

Die Ordinalskala zeichnet sich durch folgende Merkmale aus:

- **Relationen der Gleichheit und Ungleichheit**: Merkmalsausprägungen können als gleich oder ungleich klassifiziert werden, ähnlich der Nominalskala.
- **Ordnungsrelation**: Werte können in eine Rangfolge gebracht werden, um zu bestimmen, ob ein Wert größer oder kleiner als ein anderer ist.
- **Keine quantifizierbaren Abstände**: Die Differenzen zwischen benachbarten Rängen sind nicht messbar oder interpretierbar.

Beispiele für ordinalskalierte Daten sind Schulnoten (1 bis 6), Platzierungen in Wettkämpfen oder Zufriedenheitsbewertungen wie "unzufrieden", "neutral" und "zufrieden".

## Vorgehen

Für die Analyse ordinalskalierter Daten gelten spezifische Regeln:

1. Das Skalenniveau wird anhand der Datenmerkmale identifiziert.
2. Zulässige statistische Maßzahlen werden gewählt: Modus für den häufigsten Wert und Median für den mittleren Rang.
3. Unzulässige Operationen wie das arithmetische Mittel oder Standardabweichungen werden vermieden.
4. Bei quasi-metrischen Skalen wie Likert-Skalen erfolgt in der Praxis oft eine Näherung an metrische Methoden, dies jedoch mit Vorsicht.

## Beispiele

Ein Beispiel für eine Ordinalskala ist die Bewertung der Kundenzufriedenheit in einer Umfrage mit den Kategorien "sehr unzufrieden" (1), "unzufrieden" (2), "neutral" (3), "zufrieden" (4) und "sehr zufrieden" (5). Hier kann eine Rangordnung gebildet werden, etwa dass "sehr zufrieden" besser als "neutral" ist. Der Abstand zwischen "unzufrieden" und "neutral" ist jedoch nicht quantifizierbar.

Ein weiteres Beispiel sind Fußballtabellenplätze: Der erste Platz ist höher als der zweite, aber die Punktedifferenz von 25 zu 18 Punkten impliziert nicht, dass der Erstplatzierte zweimal besser ist.

## Häufige Fehler und Tipps

Häufiger Fehler: Die Abstände zwischen Rängen als gleich oder messbar zu interpretieren, wie bei Schulnoten, wo "2" nicht genau so viel besser als "1" ist wie "3" besser als "2". Stattdessen sollte die Ordnung betont werden, ohne quantitative Schlüsse zu ziehen.

Tipp: Bei quasi-metrischen Skalen, wie Schulnoten oder Likert-Skalen, werden in der Praxis oft arithmetische Mittel berechnet, obwohl dies statistisch nicht streng zulässig ist. Dies sollte transparent kommuniziert werden, um Fehlinterpretationen zu vermeiden.

## Selbsttest

1. Welche Relation erlaubt die Ordinalskala zusätzlich zur Nominalskala?
2. Warum ist das arithmetische Mittel bei ordinalskalierten Daten nicht zulässig?
3. Nenne zwei Beispiele für ordinalskalierte Daten.
4. Wie grenzt sich die Ordinalskala von der [Intervallskala](intervallskala) ab?
5. Welche statistischen Maßzahlen sind bei Ordinalskalen empfohlen?

## Weiterführendes

Weitere Informationen zu Skalenniveaus finden sich in der Stevens-Klassifikation, die Nominal-, Ordinal-, Intervall- und Verhältnisskalen unterscheidet. Für praktische Anwendungen in Datenanalyse-Tools wie R oder SPSS sind spezifische Pakete für ordinalskalierte Daten verfügbar.
