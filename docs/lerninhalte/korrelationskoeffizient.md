---
title: "Korrelationskoeffizient"
description: "Der Korrelationskoeffizient quantifiziert die Stärke und Richtung eines linearen Zusammenhangs zwischen zwei Variablen und hilft bei der Analyse von Beziehungen in Datensätzen. Er findet Anwendung in der Datenanalyse zur Identifizierung von Mustern und zur Grundlage für statistische Modelle."
sources:
    - title: "Korrelationskoeffizient nach Bravais-Pearson - Wikipedia"
      url: "https://de.wikipedia.org/wiki/Korrelationskoeffizient_nach_Bravais-Pearson"
    - title: "Pearson correlation coefficient - Wikipedia"
      url: "https://en.wikipedia.org/wiki/Pearson_correlation_coefficient"
    - title: "Correlation coefficient - Wikipedia"
      url: "https://en.wikipedia.org/wiki/Correlation_coefficient"
---

Der **Korrelationskoeffizient** misst die Stärke und Richtung eines linearen Zusammenhangs zwischen zwei Variablen. Er nimmt Werte zwischen -1 und +1 an und unterstützt die Erkennung von Beziehungen in Daten, die für Entscheidungen in der Daten- und Prozessanalyse relevant sind.

## Lernziele

- Definition und Rolle des Korrelationskoeffizienten in der Statistik.
- Voraussetzungen für die Anwendung des Korrelationskoeffizienten sowie alternative Maße bei nicht erfüllten Bedingungen.
- Berechnung und Interpretation des Koeffizienten, einschließlich Bestimmtheitsmaß und Effektstärke.
- Unterschied zwischen Korrelation und Kausalität.

## Kurzüberblick

Der Korrelationskoeffizient, häufig als Bravais-Pearson-Korrelationskoeffizient bezeichnet, quantifiziert den linearen Zusammenhang zwischen zwei metrischen Variablen. Er basiert auf der Kovarianz und Standardabweichungen und findet Verwendung in der [Datenanalyse](datenanalyse) zur Untersuchung von Abhängigkeiten. Werte nahe 1 oder -1 zeigen starke Zusammenhänge an, während Werte nahe 0 auf fehlende lineare Beziehungen hinweisen. Neben der Pearson-Korrelation existieren alternative Maße wie Spearman für ordinale Daten.

## Begriffe und Definitionen

Der Korrelationskoeffizient drückt den Grad der linearen Abhängigkeit zwischen zwei Variablen aus. Eine positive Korrelation bedeutet, dass mit der Zunahme einer Variablen die andere tendenziell ebenfalls zunimmt. Bei negativer Korrelation nimmt eine Variable zu, während die andere abnimmt. Der Wert 0 deutet auf keinen linearen Zusammenhang hin. Der Bravais-Pearson-Korrelationskoeffizient gilt als Standardmaß für metrische Daten.

## Voraussetzungen

Für die sinnvolle Anwendung des Bravais-Pearson-Korrelationskoeffizienten müssen folgende Bedingungen erfüllt sein:

- Die Variablen weisen ein metrisches Skalenniveau auf (Intervall- oder Verhältnisskala).
- Der Zusammenhang zwischen den Variablen ist linear.
- Die Verteilungen der Variablen sind annähernd normalverteilt, insbesondere für Signifikanztests.

Wenn diese Voraussetzungen nicht zutreffen, sind alternative Korrelationsmaße zu wählen.

## Berechnung

Die Formel für den Bravais-Pearson-Korrelationskoeffizienten $$ r\_{xy} $$ lautet:

$$ r*{xy} = \dfrac{s*{xy}}{s_x \times s_y} $$

Hierbei steht $$ s\_{xy} $$ für die Kovarianz der Variablen $$ x $$ und $$ y $$, während $$ s_x $$ und $$ s_y $$ die Standardabweichungen der jeweiligen Variablen darstellen. Die Berechnung basiert auf dem [arithmetischen Mittel](arithmetisches-mittel) und der [Varianz](varianz) der Daten.

## Interpretation

Der Korrelationskoeffizient nimmt Werte zwischen -1 und +1 an:

- $$ r = 1 $$: Perfekter positiver linearer Zusammenhang.
- $$ r = -1 $$: Perfekter negativer linearer Zusammenhang.
- $$ r = 0 $$: Kein linearer Zusammenhang.

Der Betrag des Koeffizienten gibt die Stärke an, das Vorzeichen die Richtung.

## Alternative Korrelationsmaße

Bei nicht metrischen oder nicht linearen Daten kommen alternative Maße zum Einsatz:

- **Rangkorrelation (Spearman oder Kendall-Tau)**: Für ordinale Variablen, basierend auf Rängen statt absoluten Werten.
- **Punktbiseriale Korrelation**: Bei einer metrischen und einer dichotomen Variablen.
- **Biseriale Rangkorrelation**: Bei einer ordinalen und einer dichotomen Variablen.

## Bestimmtheitsmaß und Effektstärke

Das Bestimmtheitsmaß $$ r^2 $$ gibt den Anteil der Varianz einer Variablen an, der durch die andere erklärt wird. Zum Beispiel bedeutet $$ r^2 = 0,25 $$, dass 25 Prozent der Varianz erklärt werden.

Zur Einschätzung der Effektstärke gelten nach Cohen folgende Faustregeln:

- $$ |r| = 0,1 $$: Kleiner Effekt.
- $$ |r| = 0,3 $$: Mittlerer Effekt.
- $$ |r| = 0,5 $$: Großer Effekt.

## Korrelation vs. Kausalität

Korrelation zeigt keinen kausalen Zusammenhang an. Ein hoher Korrelationskoeffizient bedeutet nicht, dass eine Variable die andere verursacht. Beispiel: Die Zahl der Störche und die Geburtenrate in einem Gebiet korrelieren stark negativ, doch beide hängen von einem dritten Faktor wie dem sozioökonomischen Wandel ab.

## Beispiele

Bei den Variablen Temperatur (x) und Eisverkauf (y) mit folgenden Daten:

- x: 20, 25, 30, 35
- y: 50, 60, 70, 80

Die Berechnung ergibt $$ r \approx 1 $$, was einen starken positiven Zusammenhang anzeigt. Mit steigender Temperatur nimmt der Eisverkauf zu.

Ein weiteres Beispiel: Arbeitsstunden (x) und Produktivität (y):

- x: 8, 9, 10, 11
- y: 90, 85, 80, 75

Hier ist $$ r \approx -1 $$, ein starker negativer Zusammenhang.

## Häufige Fehler und Tipps

Ausreißer beeinflussen den Koeffizienten stark; Daten sollten auf Ausreißer geprüft werden. Scheinkorrelationen entstehen durch unbeachtete Drittvariablen. Bei nicht normalverteilten Daten alternative Maße verwenden.

## Selbsttest

1. Was misst der Korrelationskoeffizient?
2. Was sind zwei Voraussetzungen für die Pearson-Korrelation?
3. Wie interpretiert sich $$ r = 0,4 $$?
4. Warum impliziert Korrelation keine Kausalität?
5. Welches alternative Maß eignet sich für ordinale Daten?

## Weiterführendes

Weitere Informationen zu Korrelationsanalysen finden sich in Lehrbüchern zur Statistik oder in der [Datenanalyse](datenanalyse)-Literatur.
