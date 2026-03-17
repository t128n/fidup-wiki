---
title: "Lagemaße"
description: "Lagemaße sind statistische Kennzahlen, die das Zentrum einer Datenverteilung beschreiben. Dieser Artikel erklärt das arithmetische Mittel, Median und Modalwert für Auszubildende in Daten- und Prozessanalyse."
sources:
    - title: "Median - Statistisches Bundesamt"
      url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Einkommen-Konsum-Lebensbedingungen/Glossar/median.html"
    - title: "Lageparameter - Lexikon der Geographie (Spektrum.de)"
      url: "https://www.spektrum.de/lexikon/geographie/lageparameter/4515"
    - title: "Statistische Maßzahlen für Lage und zentrale Tendenz - Ruhr-Universität Bochum"
      url: "http://methodenzentrum.ruhr-uni-bochum.de/e-learning/dataliteracy/statistische-masszahlen-fuer-lage-und-zentrale-tendenz/"
---

**Lagemaße** sind statistische Kennzahlen, die das Zentrum einer Datenverteilung beschreiben. Sie fassen große Datenmengen zu einem repräsentativen Wert zusammen, um Vergleiche zu erleichtern und die Interpretation von Daten in Bereichen wie Wirtschaft, Sozialwissenschaften und Naturwissenschaften zu unterstützen.

## Kurzüberblick

Lagemaße, auch Maße der zentralen Tendenz genannt, beschreiben den typischen oder mittleren Wert einer Datenmenge. Die wichtigsten sind das arithmetische Mittel, der Median und der Modalwert. Sie unterscheiden sich in ihren Anforderungen an das Skalenniveau und ihrer Sensibilität gegenüber Ausreißern.

## Kontext und Einordnung

In der Statistik dienen Lagemaße dazu, eine Vielzahl von Datenpunkten zu einem einzigen Wert zu reduzieren. Dies erleichtert den Vergleich zwischen verschiedenen Datensätzen und hilft bei der Identifizierung von Mustern oder Anomalien. Sie sind grundlegend für die Datenanalyse und werden in vielen Fachgebieten angewendet, wobei die Wahl des Maßes vom Skalenniveau der Daten und der Verteilung abhängt.

## Begriffe und Definitionen

- **Arithmetisches Mittel**: Der Durchschnittswert einer Datenreihe, berechnet als Summe aller Werte geteilt durch die Anzahl der Werte. Es erfordert metrisches Skalenniveau und ist anfällig für Ausreißer, die das Ergebnis stark verzerren können.
- **Median**: Der mittlere Wert in einer nach Größe sortierten Datenreihe, der die Daten so teilt, dass jeweils die Hälfte der Werte darunter und darüber liegt. Er erfordert mindestens ordinales Skalenniveau und ist robust gegenüber Ausreißern.
- **Modalwert**: Der Wert, der in einer Datenreihe am häufigsten vorkommt. Er funktioniert bereits bei nominalem Skalenniveau und ist die einzige Option für kategoriale Daten ohne Rangfolge.

## Vorgehen

Zur Berechnung und Auswahl eines Lagemaßes:

1. Das Skalenniveau der Daten wird ermittelt: nominal (Kategorien ohne Ordnung), ordinal (mit Ordnung, aber keine Abstände) oder metrisch (mit interpretierbaren Abständen).
2. Das geeignete Lagemaß wird gewählt: [Modalwert](modalwert) für nominale Daten, [Median](median) für ordinale oder schiefe metrische Verteilungen, [Arithmetisches Mittel](arithmetisches-mittel) für symmetrische metrische Verteilungen.
3. Die Daten werden bei Bedarf sortiert und der Wert gemäß der Definition berechnet.
4. Auf Ausreißer wird geprüft und überlegt, ob ein robusteres Maß besser geeignet ist.

## Beispiele

### Beispiel für arithmetisches Mittel

Bei den Noten 2, 4, 6, 8 und 10 ergibt sich das arithmetische Mittel als:

$$ \bar{x} = \frac{2 + 4 + 6 + 8 + 10}{5} = \frac{30}{5} = 6 $$

Dieser Wert liegt im Zentrum der Daten.

### Beispiel für Median

Für die Einkommen 2000, 2500, 3000, 3500 und 10000 Euro (sortiert: 2000, 2500, 3000, 3500, 10000) ist der Median der mittlere Wert: 3000 Euro. Der hohe Ausreißer beeinflusst den Median nicht, im Gegensatz zum arithmetischen Mittel von etwa 4000 Euro.

### Beispiel für Modalwert

In einer Umfrage zu Lieblingssportarten mit Ergebnissen Fußball, Tennis, Fußball, Basketball, Fußball ist der Modalwert Fußball, da er am häufigsten genannt wird.

## Häufige Fehler und Tipps

- Das arithmetische Mittel sollte nicht bei schiefen Verteilungen oder Ausreißern verwendet werden, da es verzerrt wird. Stattdessen kann der Median verwendet werden.
- Der Modalwert sollte nicht bei metrischen Daten vernachlässigt werden; er kann wichtige Informationen über Häufungen geben, insbesondere bei multimodalen Verteilungen.
- Auf das Skalenniveau ist zu achten: Der Modalwert ist die einzige Möglichkeit für nominale Daten, während das arithmetische Mittel metrische Daten erfordert.

## Weiterführendes

Weitere Lagemaße wie Quantile oder das geometrische Mittel erweitern die Analyse. In der Datenanalyse spielen Lagemaße eine Rolle in der [Datenanalyse](datenanalyse), wo sie zur Beschreibung von Verteilungen dienen.
