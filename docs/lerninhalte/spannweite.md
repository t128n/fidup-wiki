---
title: "Spannweite"
description: "Die Spannweite ist ein einfaches Maß zur Bestimmung der Variabilität von Daten in der deskriptiven Statistik. Sie gibt den Abstand zwischen dem größten und kleinsten Wert an und gehört zu den Streumaßen."
sources:
    - title: "Streuungsmaße - Spannweite (Statistisches Bundesamt)"
      url: "https://service.destatis.de/eLearning/modul16/lm_pg_3020.html"
    - title: "Spannweite (Statistik) – Wikipedia"
      url: "https://de.wikipedia.org/wiki/Spannweite_(Statistik)"
    - title: "The Range • SOGA-R • Freie Universität Berlin"
      url: "https://userpage.fu-berlin.de/soga/soga-r/200/2020_descriptive_statistics/20221_range.html"
---

Die **Spannweite** ist ein grundlegendes Maß in der deskriptiven Statistik, das die Variabilität einer Datenreihe beschreibt. Sie ergibt sich aus der Differenz zwischen dem größten und dem kleinsten Wert und gehört zu den [Streumaßen](streumasse).

## Kurzüberblick

Die Spannweite quantifiziert den Gesamtbereich, in dem die Werte einer Datenreihe liegen. Sie ist einfach zu berechnen, aber anfällig für Verzerrungen durch Ausreißer. Als Maß der Variabilität eignet sie sich besonders für schnelle Übersichten bei kleinen Datensätzen auf metrischem Skalenniveau.

## Kontext und Einordnung

Die Spannweite zählt zu den [Streumaßen](streumasse), die die Streuung oder Variabilität von Daten messen. Im Gegensatz zu komplexeren Maßen wie der [Standardabweichung](standardabweichung) berücksichtigt sie nur die Extremwerte. Sie findet Anwendung in der explorativen Datenanalyse, der Qualitätskontrolle und der Visualisierung wie Boxplots.

## Begriffe und Definitionen

Die Spannweite wird als Differenz zwischen dem Maximum und dem Minimum einer Datenreihe definiert. Sie erfordert metrisches Skalenniveau, da nur dann eine sinnvolle Differenzbildung möglich ist. Die Formel lautet:

$$
R = x_{\text{max}} - x_{\text{min}}
$$

Dabei steht R für die Spannweite, x_max für den größten und x_min für den kleinsten Wert. Die Spannweite hat die gleiche Maßeinheit wie die ursprünglichen Daten.

## Vorgehen

Die Berechnung der Spannweite erfolgt in folgenden Schritten:

1. Der größte Wert in der Datenreihe wird ermittelt.
2. Der kleinste Wert in der Datenreihe wird ermittelt.
3. Der kleinste Wert wird vom größten subtrahiert.

Bei großen Datensätzen kann die Sortierung der Daten hilfreich sein, um Minimum und Maximum zu finden.

## Beispiele

### Einfaches Beispiel ohne Ausreißer

Betrachte die Altersangaben einer Gruppe: 18, 22, 25, 27, 29. Der kleinste Wert ist 18, der größte 29. Die Spannweite beträgt 29 - 18 = 11 Jahre.

### Beispiel mit Ausreißer

Die Datenreihe 18, 22, 25, 27, 29, 67 enthält einen Ausreißer (67). Ohne den Ausreißer beträgt die Spannweite 11 Jahre, mit ihm 67 - 18 = 49 Jahre. Dies zeigt, wie ein einzelner extremer Wert die Spannweite verzerren kann.

## Häufige Fehler und Tipps

- Die Spannweite sollte nicht als alleiniges Maß der Streuung verwendet werden, wenn Ausreißer vorhanden sind. Die Daten können visuell überprüft werden, oder robuste Maße wie der Quartilsabstand können verwendet werden.
- Es sollte sichergestellt werden, dass die Daten metrisch skaliert sind. Bei ordinalen Daten ist die Spannweite nicht anwendbar.
- Die Spannweite gibt keine Informationen über die Verteilung innerhalb des Bereichs.
- Bei großen Stichproben verliert die Spannweite an Aussagekraft. Dann können andere Streumaße berücksichtigt werden.

## Weiterführendes

Für robustere Streumaße siehe den Artikel zu Streumaßen. Die gleitende Spannweite eignet sich für Zeitreihenanalysen, um Veränderungen der Variabilität über Zeit zu beobachten.
