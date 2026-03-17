---
title: "Quadratisches Mittel"
description: "Das Quadratische Mittel, auch RMS-Wert genannt, ist ein Maß für den Effektivwert von Daten in der Datenanalyse und Physik. Es berechnet die Quadratwurzel des Durchschnitts der Quadrate der Werte und findet Anwendung in Signalverarbeitung, Elektrotechnik und Statistik."
sources:
    - title: "Quadratisches Mittel"
      url: "https://de.wikipedia.org/wiki/Quadratisches_Mittel"
    - title: "Root-Mean-Square"
      url: "https://mathworld.wolfram.com/Root-Mean-Square.html"
---

Das **Quadratische Mittel** ist eine statistische Maßzahl, die den Durchschnitt der Quadrate einer Menge von Zahlen berechnet. Es findet Anwendung in Physik, Elektrotechnik und Signalverarbeitung, insbesondere bei der Berechnung von Leistungen oder Energien.

## Lernziele

Nach diesem Artikel lassen sich folgende Inhalte erarbeiten:

- Das Quadratische Mittel definieren und seine mathematische Formel anwenden.
- Die Anwendungen des Quadratischen Mittels in Elektrotechnik, Physik und Statistik erklären.
- Das Quadratische Mittel von anderen Mittelwerten wie dem [arithmetischen Mittel](arithmetisches-mittel) abgrenzen.
- Ein einfaches Beispiel zur Berechnung des Quadratischen Mittels durchführen.

## Kurzüberblick

Das Quadratische Mittel ist die Quadratwurzel des Durchschnitts der quadrierten Werte einer Datenmenge. Anders als das arithmetische Mittel gewichtet es größere Werte stärker und ist daher empfindlich gegenüber Ausreißern. Es kommt häufig bei der Analyse von Wechselgrößen zum Einsatz, beispielsweise in der Elektrotechnik für den Effektivwert von Strömen und Spannungen.

## Kontext und Einordnung

Das Quadratische Mittel gehört zu den Potenzmitteln und ist das Potenzmittel zweiter Ordnung, bezeichnet als M₂. Es steht in einer Hierarchie von Mittelwerten: Das harmonische Mittel ist kleiner oder gleich dem geometrischen Mittel, das kleiner oder gleich dem arithmetischen Mittel ist, das wiederum kleiner oder gleich dem Quadratischen Mittel ist. Diese Beziehung ergibt sich aus mathematischen Ungleichungen und hängt vom Anwendungsfall ab – während das arithmetische Mittel für additive Größen geeignet ist, eignet sich das Quadratische Mittel für Größen, die mit dem Quadrat zusammenhängen, wie Energie oder Leistung.

## Begriffe und Definitionen

Das Quadratische Mittel ist die Quadratwurzel des Durchschnitts der Quadrate einer Zahlenmenge. Für eine diskrete Menge von Werten x₁, x₂, ..., xₙ lautet die Formel:

$$\bar{x}_{QM} = \sqrt{\frac{x_1^2 + x_2^2 + \dots + x_n^2}{n}}$$

Für kontinuierliche Größen, wie bei Funktionen über einem Intervall, wird stattdessen integriert:

$$\bar{x}_{QM} = \sqrt{\frac{1}{t_2 - t_1} \int_{t_1}^{t_2} f(t)^2 \, dt}$$

Geometrisch lässt sich das Quadratische Mittel als die Seitenlänge eines Quadrats interpretieren, dessen Fläche dem Durchschnitt der Flächen der Quadrate entspricht, die durch die einzelnen Werte gebildet werden. Bei sinusförmigen Wechselgrößen beträgt der RMS-Wert etwa 70,7 % des Spitzenwerts.

## Vorgehen

Die Berechnung des Quadratischen Mittels für diskrete Daten erfolgt in diesen Schritten:

1. Quadriere jeden Wert der Datenmenge.
2. Berechne den Durchschnitt der quadrierten Werte, indem die Summe durch die Anzahl der Werte geteilt wird.
3. Ziehe die Quadratwurzel aus diesem Durchschnitt.

Für kontinuierliche oder periodische Größen integriere die quadrierte Funktion über den Bereich, teile durch die Intervalllänge und ziehe die Quadratwurzel.

## Beispiele

Bei den Werten 3, 4 und 5 erfolgt die Berechnung des Quadratischen Mittels so:

1. Quadriere die Werte: 3² = 9, 4² = 16, 5² = 25.
2. Berechne den Durchschnitt der quadrierten Werte: (9 + 16 + 25) / 3 = 50 / 3 ≈ 16,67.
3. Ziehe die Quadratwurzel: √16,67 ≈ 4,08.

Das Quadratische Mittel beträgt etwa 4,08. Das arithmetische Mittel liegt bei 4,00.

Ein weiteres Beispiel ist eine sinusförmige Wechselspannung mit dem Spitzenwert 10 Volt. Der RMS-Wert beträgt 10 / √2 ≈ 7,07 Volt, was den Effektivwert für Leistungsberechnungen darstellt.

## Häufige Fehler und Tipps

- Verwechsle das Quadratische Mittel nicht mit der Standardabweichung. Das Quadratische Mittel berechnet den RMS-Wert der Werte selbst, während die Standardabweichung die Streuung um einen Mittelwert misst. In manchen naturwissenschaftlichen Kontexten bezeichnet RMS die Quadratwurzel der mittleren quadratischen Abweichung.
- Achte darauf, alle Werte zu quadrieren, bevor gemittelt wird; das Vergessen dieses Schritts führt zu falschen Ergebnissen.
- Bei negativen Werten ist das Quadrieren essenziell, da es alle Werte positiv macht und das Ergebnis unabhängig vom Vorzeichen wird.
- Nutze das Quadratische Mittel, wenn Ausreißer stärker gewichtet werden sollen, wie bei Energie- oder Leistungsberechnungen; für einfache Durchschnitte bevorzuge das arithmetische Mittel.

## Selbsttest

1. Was ist der Hauptzweck des Quadratischen Mittels? (Antwort: Den Durchschnitt unter Berücksichtigung der Quadrate der Werte zu berechnen, um Energie oder Leistung zu messen.)
2. Berechne das Quadratische Mittel für die Werte 1, 2, 3. (Antwort: √((1+4+9)/3) = √14/3 ≈ 2,16)
3. In welchem Bereich wird das Quadratische Mittel häufig als Effektivwert bezeichnet? (Antwort: In der Elektrotechnik für Wechselstrom und -spannung.)

## Weiterführendes

Weitere Mittelwerte sind das [harmonische Mittel](harmonisches-mittel) und das [geometrische Mittel](geometrisches-mittel), die in unterschiedlichen Anwendungskontexten verwendet werden.
