---
title: "Varianz"
description: "Die Varianz ist ein zentrales Streuungsmaß in der Statistik, das die durchschnittliche quadratische Abweichung vom arithmetischen Mittel quantifiziert. Dieser Artikel richtet sich an Auszubildende in Daten- und Prozessanalyse und erklärt, wie die Varianz berechnet wird, wann sie verwendet wird und wie sie sich von der Standardabweichung unterscheidet."
sources:
    - title: "Varianz - Lexikon der Mathematik"
      url: "https://www.spektrum.de/lexikon/mathematik/varianz/10628"
    - title: "Varianz - Streuungsmaße (DESTATIS eLearning)"
      url: "https://service.destatis.de/eLearning/modul16/lm_pg_3027.html"
---

Die **Varianz** misst die Streuung von Datenpunkten um ihr [arithmetisches Mittel](arithmetisches-mittel). Sie quantifiziert, wie stark die Werte einer Datenmenge variieren, und dient als Grundlage für viele statistische Analysen in der Daten- und Prozessanalyse.

## Lernziele

- Die Varianz als Maß für die durchschnittliche quadratische Abweichung vom arithmetischen Mittel verstehen.
- Den Unterschied zwischen der Varianz einer Gesamtheit und einer Stichprobe kennen, einschließlich der Besselschen Korrektur.
- Die Beziehung zwischen Varianz und Standardabweichung erklären und deren Vor- und Nachteile bewerten.
- Einfache Berechnungen der Varianz mit Dummy-Daten durchführen.
- Häufige Fehler bei der Anwendung der Varianz vermeiden.

## Grundlagen & Intuition

Die Varianz beschreibt, wie weit die einzelnen Datenpunkte durchschnittlich vom arithmetischen Mittel entfernt sind. Dabei werden die Abweichungen quadriert, um negative Werte zu vermeiden und die Summe zu bilden. Das Ergebnis liegt in quadrierten Einheiten, was die Einheit der Daten ändert – beispielsweise von Metern zu Quadratmetern. Dies erschwert die direkte Interpretation, macht die Varianz aber mathematisch nützlich für weitere Berechnungen.

Ein Beispiel: Bei Körpergrößen in cm ist die Varianz in cm² angegeben. Dies hat keine intuitive Bedeutung, zeigt aber, ob die Größen eng beieinander liegen oder stark streuen.

## Formale Definition

Die Varianz wird als durchschnittliche quadratische Abweichung definiert. Sie unterscheidet sich je nachdem, ob die gesamte Datenmenge (Gesamtheit) oder nur eine Teilmenge (Stichprobe) betrachtet wird.

### Varianz der Gesamtheit

Für eine vollständige Gesamtheit mit n Datenpunkten x₁ bis xn und dem arithmetischen Mittel \(\bar{x}\) gilt:

$$
\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2
$$

Hier wird durch n geteilt, da alle Datenpunkte bekannt sind.

### Varianz einer Stichprobe

Bei einer Stichprobe aus der Gesamtheit wird die Besselsche Korrektur angewendet, um eine unverzerrte Schätzung zu erhalten. Die Formel lautet:

$$
s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2
$$

Die Division durch n-1 statt n kompensiert den Bias, der durch die Verwendung einer Stichprobe entsteht, da der Mittelwert der Stichprobe näher an den Daten liegt als der der Gesamtheit.

### Verschiebungssatz

Für praktische Berechnungen kann der Verschiebungssatz hilfreich sein: Die Varianz entspricht dem arithmetischen Mittel der quadrierten Werte minus dem Quadrat des arithmetischen Mittels:

$$
\sigma^2 = \frac{1}{n} \sum x_i^2 - \left( \frac{1}{n} \sum x_i \right)^2
$$

## Varianz vs. Standardabweichung

Die [Standardabweichung](standardabweichung) ist die positive Quadratwurzel der Varianz und hat die gleiche Einheit wie die ursprünglichen Daten. Während die Varianz die Streuung in quadrierten Einheiten angibt, ermöglicht die Standardabweichung eine intuitivere Interpretation. Die Varianz wird oft in theoretischen Berechnungen verwendet, die Standardabweichung hingegen in praktischen Anwendungen, wo die Einheit relevant ist. Beide Maße sind empfindlich gegenüber Ausreißern.

## Eigenschaften

- Die Varianz ist stets nicht-negativ, da sie auf quadrierten Abweichungen basiert.
- Bei einer Konstanten ist die Varianz null, bei größerer Streuung steigt sie an.
- Für lineare Transformationen gilt: Die Varianz von aX + b ist a²-mal die Varianz von X.
- Bei unabhängigen Zufallsvariablen addiert sich die Varianz: Var(X + Y) = Var(X) + Var(Y).
- Die Varianz reagiert empfindlich auf Ausreißer, da diese die quadrierten Abweichungen stark erhöhen.

## Vor- und Nachteile

Die Varianz bietet eine solide mathematische Grundlage für statistische Analysen und dient als Basis für Tests und Modelle. Ihre Empfindlichkeit gegenüber Ausreißern kann in manchen Fällen nützlich sein, um Anomalien zu erkennen. Allerdings erschwert die Angabe in quadrierten Einheiten die Interpretation, besonders im Vergleich zur [Standardabweichung](standardabweichung). Zudem ist die Varianz nicht robust gegenüber Ausreißern, was zu verzerrten Ergebnissen führen kann.

## Beispiele

### Beispiel 1: Varianz einer Gesamtheit

Gegeben seien die Werte: 2, 4, 5, 6, 8. Das arithmetische Mittel ist \(\bar{x} = 5\). Die Abweichungen sind: -3, -1, 0, 1, 3. Quadriert: 9, 1, 0, 1, 9. Summe: 20. Varianz: \(\sigma^2 = 20 / 5 = 4\).

### Beispiel 2: Varianz einer Stichprobe

Mit den gleichen Werten als Stichprobe: \(\bar{x} = 5\), Summe der quadrierten Abweichungen: 20. Varianz: \(s^2 = 20 / 4 = 5\).

### Beispiel 3: Verschiebungssatz

Summe der quadrierten Werte: 4 + 16 + 25 + 36 + 64 = 145. Quadrat des Mittels: 25. Varianz: 145/5 - 25 = 29 - 25 = 4.

## Häufige Fehler und Tipps

- Nicht die Besselsche Korrektur bei Stichproben anwenden: Dies führt zu einer Unterschätzung der Varianz. Tipp: Immer n-1 verwenden, wenn es sich um eine Stichprobe handelt.
- Quadrierte Einheiten missverstehen: Die Varianz hat nicht die Einheit der Daten, was Verwirrung stiftet. Tipp: Zur Interpretation die [Standardabweichung](standardabweichung) verwenden.
- Ausreißer ignorieren: Die Varianz ist empfindlich, aber das ist keine Eigenschaft – es ist ein bewusstes Design. Tipp: Bei verdächtigen Daten robuste Alternativen prüfen.

## Selbsttest

- Was misst die Varianz und in welcher Einheit wird sie angegeben?
- Was ist der Unterschied zwischen Varianz der Gesamtheit und der Stichprobe?
- Wie lautet die Varianz für die Werte 1, 3, 5?
- Warum ist die Varianz empfindlich gegenüber Ausreißern?
- Wann wird die Varianz statt der Standardabweichung verwendet?
- Was besagt der Verschiebungssatz?

## Weiterführendes

Die Varianz bildet die Grundlage für die Normalverteilung und Hypothesentests. Für tiefergehende Analysen lohnt sich die Betrachtung von Kovarianz und Korrelation, die auf der Varianz aufbauen.
