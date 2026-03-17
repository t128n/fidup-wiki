---
title: "Standardabweichung"
description: "Die Standardabweichung misst die Streuung von Daten um den Mittelwert und ist ein zentrales Maß in der Daten- und Prozessanalyse. Dieser Artikel erklärt die Berechnung für Gesamtheit und Stichprobe, Interpretation sowie Anwendungen."
sources:
    - title: "Standardabweichung - Destatis eLearning Modul 16"
      url: "https://service.destatis.de/eLearning/modul16/lm_pg_3032.html"
    - title: "Standardabweichung - Lexikon der Psychologie (Spektrum.de)"
      url: "https://www.spektrum.de/lexikon/psychologie/standardabweichung/14759"
---

Die **Standardabweichung** ist ein statistisches Maß für die Streuung von Daten um den Mittelwert. Sie zeigt an, wie stark die Werte in einem Datensatz variieren, und hat die gleiche Einheit wie die ursprünglichen Daten. Dies macht sie leichter interpretierbar als die [Varianz](varianz), aus der sie als Quadratwurzel abgeleitet wird. Die Standardabweichung findet Anwendung in vielen Bereichen der Datenanalyse, um die Variabilität zu quantifizieren, ist aber empfindlich gegenüber Ausreißern.

## Grundlagen

### Was ist die Standardabweichung?

Die Standardabweichung misst die typische Abweichung der Datenpunkte vom [Mittelwert](arithmetisches-mittel). Ein niedriger Wert deutet auf eine enge Streuung um den Mittelwert hin, ein hoher Wert auf eine weite Streuung. Sie ist nur sinnvoll für intervallskalierte Daten, bei denen die Differenzen zwischen Werten eine Bedeutung haben.

### Beziehung zur Varianz

Die Standardabweichung ist die Quadratwurzel der [Varianz](varianz). Während die Varianz in quadrierten Einheiten angegeben wird, hat die Standardabweichung die gleichen Einheiten wie die Daten. Zum Beispiel beträgt die Varianz von Längen in Quadratmetern, die Standardabweichung aber in Metern.

### Wann wird sie verwendet?

Die Standardabweichung kommt in der Qualitätskontrolle, Finanzanalyse und Prozessanalyse zum Einsatz, um Risiken oder Instabilitäten zu bewerten. Sie eignet sich für intervallskalierte Messungen und hilft, die Zuverlässigkeit von Durchschnittswerten einzuschätzen.

## Formeln und Berechnung

Die Berechnung erfolgt in zwei Varianten: für die vollständige Gesamtheit (Population) und für Stichproben (Sample). Die Symbole sind:

- σ oder s: Standardabweichung
- n: Anzahl der Datenpunkte
- x_i: einzelner Datenpunkt
- x̄: [Mittelwert](arithmetisches-mittel) der Daten

### Gesamtheit

Für eine vollständige Gesamtheit wird die Formel verwendet, wenn alle Daten vorliegen:

$$
\sigma = \sqrt{\dfrac{1}{n}\sum^{n}_{i=1}(x_i-\bar{x})^2}
$$

Dies ergibt die exakte Standardabweichung der Population.

### Stichprobe

Bei einer Stichprobe, die die Gesamtheit schätzt, wird durch n-1 geteilt (Bessel-Korrektur). Diese Korrektur stellt eine unverzerrte Schätzung der Populationsvarianz sicher, da Stichproben tendenziell die Streuung unterschätzen:

$$
s = \sqrt{\dfrac{1}{n - 1}\sum^{n}_{i=1}(x_i-\bar{x})^2}
$$

### Rechenbeispiel

Angenommen, die Daten: 2, 4, 5, 6, 8, 9, 14, 16. Der Mittelwert x̄ = 8.

Für die Gesamtheit (n=8):
Quadrierte Abweichungen: (2-8)²=36, (4-8)²=16, (5-8)²=9, (6-8)²=4, (8-8)²=0, (9-8)²=1, (14-8)²=36, (16-8)²=64. Summe=166. σ = √(166/8) = √20,75 ≈ 4,56.

Für die Stichprobe: s = √(166/7) = √23,71 ≈ 4,87.

## Interpretation

### Größe der Standardabweichung

Eine kleine Standardabweichung bedeutet geringe Streuung; die Werte liegen nah am Mittelwert. Eine große deutet auf hohe Variabilität hin. Der Vergleich mit der Skala der Daten hilft: Bei Einkommen in Euro ist 1000 € Streuung viel, bei Preisen in Cent wenig.

### Empirische Regel

Bei normalverteilten Daten liegen etwa 68 % innerhalb einer Standardabweichung vom Mittelwert, 95 % innerhalb zweier und 99,7 % innerhalb dreier. Dies hilft, die Streuung intuitiv zu verstehen.

### Variationskoeffizient

Für relative Vergleiche wird der Variationskoeffizient verwendet:

$$
\frac{\sigma}{\bar{x}} \times 100\%
$$

Er zeigt die Streuung als Prozentsatz des Mittelwerts und eignet sich für unterschiedliche Skalen.

## Abgrenzung und Zusammenhänge

### Vergleich mit anderen Streuungsmaßen

| Maß                   | Beschreibung                                | Einheit           | Robustheit gegenüber Ausreißern |
| --------------------- | ------------------------------------------- | ----------------- | ------------------------------- |
| Spannweite            | Differenz zwischen Maximum und Minimum      | Gleiche wie Daten | Nicht robust                    |
| Interquartilsabstand  | Differenz zwischen 75. und 25. Perzentil    | Gleiche wie Daten | Robust                          |
| [Varianz](varianz)    | Durchschnitt der quadrierten Abweichungen   | Quadriert         | Nicht robust                    |
| Standardabweichung    | Quadratwurzel der Varianz                   | Gleiche wie Daten | Nicht robust                    |
| Variationskoeffizient | Standardabweichung geteilt durch Mittelwert | Prozent           | Abhängig von Daten              |

### Stärken und Schwächen

Stärken: Leichte Interpretierbarkeit durch gleiche Einheit. Schwächen: Empfindlich gegenüber Ausreißern; bei schiefen Verteilungen weniger aussagekräftig.

## Anwendungen in der Datenanalyse

In der Qualitätskontrolle zeigt die Standardabweichung die Prozessstabilität (z. B. Six Sigma). In der Finanzanalyse misst sie die Volatilität von Aktien. In der Prozessanalyse hilft sie, Abweichungen zu identifizieren und zu minimieren.

## Häufige Fehler und Tipps

- Nicht verwechseln: Population (σ, durch n) vs. Stichprobe (s, durch n-1).
- Bei Ausreißern: Robuste Alternativen wie Median-Abweichung prüfen.
- Interpretation: Immer im Kontext der Daten skalieren.

## Einzelnachweise

- Destatis eLearning Modul 16: Definition und Formel.
- Spektrum Lexikon: Streuungsmaß und Intervallskalierung.
