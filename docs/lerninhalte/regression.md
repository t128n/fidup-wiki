---
title: "Regression"
description: "Regression ist eine Methode des überwachten Lernens zur Vorhersage einer abhängigen Variable basierend auf unabhängigen Variablen. Sie umfasst Formen wie lineare, multiple und logistische Regression und nutzt Verfahren wie Gradientenabstieg zur Minimierung der Kostenfunktion."
sources:
    - title: "Lineare Regression | Machine Learning | Google for Developers"
      url: "https://developers.google.com/machine-learning/crash-course/linear-regression?hl=de"
    - title: "Regressionsanalyse – Wikipedia"
      url: "https://de.wikipedia.org/wiki/Regressionsanalyse"
---

Die **Regression** ist eine Methode des überwachten Lernens, bei der ausgehend von einer oder mehreren unabhängigen Variablen (Prädiktoren) auf eine abhängige Variable (Kriterium) geschlossen wird. Dies ermöglicht die Messung des Einflusses der Prädiktoren auf das Kriterium oder die Vorhersage des Kriteriums. Prädiktoren können metrisch, ordinal oder nominal sein.

## Lernziele

- Grundprinzipien der linearen und logistischen Regression erklären.
- Mathematische Formeln für verschiedene Regressionsarten anwenden.
- Berechnungsverfahren wie Gradientenabstieg und analytische Lösungen unterscheiden.
- Häufige Fehler bei der Anwendung von Regression vermeiden.

## Kurzüberblick

Regression beschreibt statistische Verfahren zur Modellierung von Beziehungen zwischen einer abhängigen Variable und einer oder mehreren unabhängigen Variablen. Haupttypen sind die einfache lineare Regression, die multiple lineare Regression und die logistische Regression. Diese Verfahren finden Anwendung in Vorhersagen, Datenbeschreibungen und Parameterschätzungen. Mathematische Methoden umfassen analytische Lösungen und Gradientenabstieg, oft kombiniert mit Feature-Skalierung.

## Kontext und Einordnung

Regression gehört zu den Methoden des überwachten Lernens im Bereich der Daten- und Prozessanalyse. Sie unterscheidet sich von der Klassifikation dadurch, dass sie kontinuierliche Werte vorhersagt, während Klassifikation diskrete Klassen zuordnet. Bei der logistischen Regression handelt es sich um eine spezielle Form, die Wahrscheinlichkeiten für binäre Ausgänge berechnet und somit zwischen Regression und Klassifikation überlappt.

## Begriffe und Definitionen

- **Regression**: Statistisches Instrumentarium zur Modellierung von Beziehungen zwischen einer abhängigen Variable (Kriterium) und einer oder mehreren unabhängigen Variablen (Prädiktoren).
- **Einfache lineare Regression**: Prognostiziert ein Kriterium anhand eines einzelnen Prädiktors mit der Formel $\hat{y} = b \times x + a = \theta_0 + \theta_1 x$, wobei $b$ die Steigung und $a$ der Achsenabschnitt ist.
- **Multiple lineare Regression**: Prognostiziert ein Kriterium anhand mehrerer Prädiktoren mit der Formel $\hat{y} = b_1 \times x_1 + b_2 \times x_2 + \dots + b_k \times x_k + a = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \dots + \theta_m x_m$.
- **Logistische Regression**: Prognostiziert eine dichotome abhängige Variable mit der Sigmoidfunktion $f(z) = \frac{1}{1 + e^{-z}}$ und der Wahrscheinlichkeitsformel $P(y = z | x_1, \dots, x_n) = \frac{1}{1 + e^{-(\theta_0 + \theta_1 x_1 + \dots + \theta_k x_k)}}$.
- **Kostenfunktion**: Misst den Fehler des Modells; für lineare Regression der Mean Squared Error (MSE) $J(\theta_0, \theta_1) = \frac{1}{2N} \sum_{n=1}^{N} (\theta_0 + \theta_1 x_n - y_n)^2$, für logistische Regression der Log-Loss oder Binary Cross-Entropy.
- **Gradientenabstieg**: Iteratives Verfahren zur Minimierung der Kostenfunktion durch Anpassung der Parameter $\theta$.
- **Feature-Skalierung**: Normierung der Merkmale auf einen Bereich, z. B. $x_{\text{scaled}}^{(n)} = \frac{x^{(n)} - \min(x)}{\max(x) - \min(x)}$, zur Beschleunigung der Konvergenz.

## Vorgehen

1. Daten vorbereiten: Abhängige und unabhängige Variablen identifizieren; Regressionstyp basierend auf der abhängigen Variable wählen (kontinuierlich: lineare Regression; binär: logistische Regression).
2. Modell formulieren: Formel und Kostenfunktion wählen.
3. Parameter schätzen: Analytische Lösung für kleine Datenmengen oder Gradientenabstieg für große verwenden.
4. Feature-Skalierung anwenden, falls Gradientenabstieg verwendet wird.
5. Modell validieren: Residuen auf Homoskedastizität und Muster analysieren.

## Beispiele

### Einfache lineare Regression

Gegeben sind Datenpunkte für Hauspreise (y) und Quadratmeter (x): (100, 200000), (150, 300000), (200, 400000). Es werden $\theta_0$ und $\theta_1$ berechnet.

Zunächst werden Mittelwerte berechnet: $\bar{x} = 150$, $\bar{y} = 300000$. [Korrelationskoeffizient](korrelationskoeffizient) r = 1 (perfekte Korrelation). [Standardabweichungen](standardabweichung) $s_x \approx 50$, $s_y \approx 100000$. Steigung b = 1 _ (100000 / 50) = 2000. Achsenabschnitt a = 300000 - 2000 _ 150 = 0. Vorhersage für x=120: 2000\*120 + 0 = 240000.

### Logistische Regression

Für binäre Klassifikation (z. B. Spam: 0 oder 1) mit einem Prädiktor (Wortzahl). Daten: (10, 0), (20, 1). Mit Gradientenabstieg Parameter schätzen, um Wahrscheinlichkeiten zu berechnen.

## Häufige Fehler und Tipps

- Nicht MSE für logistische Regression verwenden; stattdessen Log-Loss, da MSE nicht für Wahrscheinlichkeiten geeignet ist.
- Korrelation nicht mit Kausalität verwechseln; Regression zeigt nur Zusammenhänge.
- Bei Gradientenabstieg Lernrate zu klein wählen führt zu langsamer Konvergenz; zu groß zu Instabilität.
- Residuen sollten zufällig um Null verteilt sein; Muster deuten auf schlechtes Modell hin.
- Immer Feature-Skalierung vor Gradientenabstieg anwenden, um Konvergenz zu beschleunigen.

## Selbsttest

1. Was ist der Unterschied zwischen linearer und logistischer Regression?
2. Wie lautet die Formel für die einfache lineare Regression?
3. Warum wird Gradientenabstieg bei großen Datenmengen bevorzugt?
4. Was misst die Kostenfunktion?
5. Wann ist Feature-Skalierung notwendig?
6. Was bedeuten Residuen im Kontext der Regression?

## Weiterführendes

Nichtparametrische Regression, Regulärisierung wie Ridge oder Lasso, Zeitreihenanalyse.
