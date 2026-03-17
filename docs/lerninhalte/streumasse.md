---
title: "Streumaße"
description: "Streumaße messen die Streuung von Daten um ihr Zentrum und sind essenziell in Daten- und Prozessanalyse. Erfahre mehr über Spannweite, Interquartilsabstand, Varianz, Standardabweichung und Variationskoeffizient."
sources:
    - title: "Streuungsmaß • Definition"
      url: "https://wirtschaftslexikon.gabler.de/definition/streuungsmass-45610"
    - title: "Statistische Maßzahlen für die Streuung"
      url: "https://methodenzentrum.ruhr-uni-bochum.de/e-learning/quantitative-datenanalyse/univariate-statistik/statistische-masszahlen-fuer-die-streuung/"
    - title: "Streuungsmaße - Variationskoeffizient"
      url: "https://service.destatis.de/eLearning/modul16/lm_pg_3036.html"
---

**Streumaße** sind statistische Kennzahlen, die die Variation oder Streuung von Daten um deren Zentrum beschreiben. Sie ergänzen [arithmetische Mittelwerte](arithmetisches-mittel) und andere Lagemaße, indem sie Aufschluss über die Unterschiedlichkeit der Werte geben und so ein vollständigeres Bild der Datenverteilung liefern. In der Daten- und Prozessanalyse helfen sie, Variabilität zu erkennen, Prozessstabilität zu bewerten und Qualitätsabweichungen zu identifizieren.

## Lernziele

- Streumaße von Lagemaßen unterscheiden und ihre Bedeutung in der Datenanalyse erklären.
- Die wichtigsten Streumaße benennen, ihre Berechnung und Anwendung beschreiben.
- Das geeignete Streumaß basierend auf Skalenniveau, Ausreißerempfindlichkeit und Anwendungskontext auswählen.
- Streumaße in der Prozessanalyse anwenden, um Stabilität und Qualität zu beurteilen.

## Kurzübersicht

Streumaße quantifizieren die Streuung einer Datenmenge um ein Zentrum, wie den [arithmetische Mittelwert](arithmetisches-mittel). Sie unterscheiden sich in absolute (z. B. Spannweite, Varianz) und relative Maße (z. B. Variationskoeffizient). Die Wahl hängt vom Skalenniveau ab: Ordinal für Spannweite und Interquartilsabstand, metrisch für Varianz und Standardabweichung. Manche Maße sind empfindlich gegenüber Ausreißern, andere robust.

## Kontext und Einordnung

In der Daten- und Prozessanalyse ergänzen Streumaße Lagemaße wie den [Median](median) oder den [Modalwert](modalwert), um Verteilungen vollständig zu beschreiben. Während Lagemaße die zentrale Tendenz angeben, zeigen Streumaße die Variabilität. In der Qualitätskontrolle indiziert geringe Streuung konsistente Prozesse; hohe Streuung kann auf Instabilität oder Vielfalt hinweisen. Sie unterstützen Entscheidungen in Produktion, Finanzen und Forschung, indem sie Risiken und Abweichungen quantifizieren.

## Begriffe und Definitionen

### Absolute Streumaße

Diese messen die Streuung in der Einheit der Daten.

- **Spannweite**: Differenz zwischen Maximum und Minimum. Erfordert ordinales Skalenniveau. Stark empfindlich gegenüber Ausreißern; geeignet für schnelle Übersichten, aber vorsichtig bei Extremwerten.

- **Interquartilsabstand (IQR)**: Differenz zwischen dem 75. und 25. Perzentil (dritten und ersten Quartil). Erfordert ordinales Skalenniveau. Robust gegenüber Ausreißern; beschreibt die Streuung der mittleren 50 % der Daten.

- **Varianz**: Durchschnitt der quadrierten Abweichungen vom Mittelwert. Erfordert metrisches Skalenniveau. Einheit ist Quadrat der Originaleinheit; Grundlage für viele statistische Tests, aber empfindlich gegenüber Ausreißern.

- **Standardabweichung**: Quadratwurzel der Varianz. Erfordert metrisches Skalenniveau. Einheit wie Originaldaten; interpretiert als durchschnittliche Abweichung; bei Normalverteilung liegen etwa 68 % der Werte innerhalb ±1 Standardabweichung.

### Relative Streumaße

Diese ermöglichen Vergleiche über verschiedene Skalen.

- **Variationskoeffizient**: Verhältnis von Standardabweichung zu Mittelwert, oft in Prozent. Erfordert metrisches Skalenniveau und positive Mittelwerte. Dimensionslos; ideal für Vergleiche bei unterschiedlichen Einheiten, aber irreführend bei Mittelwerten nahe null.

## Vorgehen

1. Daten skalenniveau bestimmen (nominal, ordinal, metrisch).
2. Ausreißer prüfen (z. B. über grafische Darstellungen wie Boxplots).
3. Streumaß wählen: Robust (IQR) bei Ausreißern, sensitiv (Standardabweichung) bei Normalverteilung, relativ (Variationskoeffizient) für Vergleiche.
4. Berechnen und interpretieren im Kontext.

## Beispiele

### Rechenbeispiel 1: Produktionszeiten

Daten: 10 Produktionszeiten in Minuten: 12, 13, 14, 15, 16, 50 (Ausreißer).

- Spannweite: 50 - 12 = 38 (dominiert vom Ausreißer).
- IQR: Q1=13, Q3=16 → 16-13=3 (robuster).
- Varianz: $$ \frac{\sum (x_i - \bar{x})^2}{n} = \frac{1064}{10} \approx 106.4 $$ (Minuten²).
- Standardabweichung: $$ \sqrt{106.4} \approx 10.3 $$ Minuten.
- Variationskoeffizient: (10.3 / 18.3) ≈ 0.56 oder 56 % (Mittelwert ≈18.3).

Interpretation: Hohe Streuung deutet auf Prozessinstabilität; IQR zeigt typische Variation.

### Rechenbeispiel 2: Umsatzvergleich

Zwei Produkte: Produkt A (Mittelwert 100 €, SD 10 €), Produkt B (Mittelwert 1000 €, SD 100 €).

Variationskoeffizient: A: 10/100=0.1, B: 100/1000=0.1. Gleiche relative Streuung trotz absoluter Unterschiede.

## Häufige Fehler und Tipps

- Nicht absolute Maße bei unterschiedlichen Einheiten vergleichen; stattdessen Variationskoeffizient verwenden.
- Ausreißer ignorieren: Spannweite und Standardabweichung können verzerren; IQR bevorzugen.
- Varianz direkt interpretieren: Schwierig wegen Quadrateinheit; Standardabweichung wählen.
- Hohe Streuung als negativ werten: Kann erwünschte Vielfalt anzeigen.

## Selbsttest

1. Was misst die Spannweite? (Differenz Max-Min)
2. Warum ist der Interquartilsabstand robust? (Ignoriert Extremwerte)
3. Welches Skalenniveau braucht die Varianz? (Metrisch)
4. Was ist der Anwendungsbereich des Variationskoeffizienten? (Vergleich verschiedener Skalen)
5. Wie beeinflussen Ausreißer die Standardabweichung? (Erhöhen sie stark)
6. In welchem Kontext hilft geringe Streuung? (Qualitätskontrolle, Prozessstabilität)

## Weiterführendes

Ein vertieftes Verständnis statistischer Verteilungen wie der [Normalverteilung](verteilung) ermöglicht weiterführende Analysen.
