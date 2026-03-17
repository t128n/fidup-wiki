---
title: "Mean Time Between Failures (MTBF)"
description: "MTBF (Mean Time Between Failures) bezeichnet die durchschnittliche Zeitspanne zwischen aufeinanderfolgenden Ausfällen eines Systems. Es ist ein zentraler Kennwert in der Zuverlässigkeitsanalyse für Auszubildende in Daten- und Prozessanalyse, um Verfügbarkeit und Ausfallrate zu berechnen."
sources:
    - title: "Mean Time Between Failures (MTBF) - Wikipedia"
      url: "https://en.wikipedia.org/wiki/Mean_time_between_failures"
---

Der **MTBF** (Mean Time Between Failures) beschreibt die durchschnittliche Zeitspanne zwischen zwei aufeinanderfolgenden Ausfällen eines Systems. Dieser Kennwert wird in der Zuverlässigkeitsanalyse verwendet, um die Verfügbarkeit zu bestimmen und die Ausfallrate zu ermitteln.

## Kurzueberblick

MTBF ist ein Maß für die Zuverlässigkeit reparierbarer Systeme. Es gibt an, wie lange ein System im Durchschnitt zwischen Ausfällen läuft. Höhere MTBF-Werte deuten auf weniger häufige Ausfälle hin. MTBF basiert auf statistischen Daten und hilft bei der Bewertung der Systemleistung.

## Kontext und Einordnung

MTBF findet Anwendung in der Zuverlässigkeitsanalyse von IT-Systemen, Maschinen und Produktionsanlagen. Es ist Teil des Zuverlässigkeitsingenieurwesens und unterstützt die Planung von Wartung, Redundanzen und Qualitätssicherung. In der Daten- und Prozessanalyse dient MTBF zur Optimierung von Prozessen und zur Vorhersage von Systemverhalten.

## Begriffe und Definitionen

- **MTBF**: Mean Time Between Failures – Durchschnittliche Zeit zwischen Ausfällen eines reparierbaren Systems.
- **MTTR**: Mean Time To Repair – Durchschnittliche Zeit, die für die Reparatur eines Systems benötigt wird.
- **MTTF**: Mean Time To Failure – Durchschnittliche Zeit bis zum ersten Ausfall eines nicht reparierbaren Systems.
- **Verfügbarkeit**: Anteil der Zeit, in der ein System funktioniert, berechnet als MTBF geteilt durch MTBF plus MTTR.
- **Ausfallrate**: Wahrscheinlichkeit eines Ausfalls pro Zeiteinheit, definiert als 1 geteilt durch MTBF.

## Vorgehen

Die Berechnung von MTBF erfolgt in folgenden Schritten:

1. Daten über die Gesamtbetriebszeit des Systems und die Anzahl der Ausfälle werden gesammelt.
2. Die Gesamtbetriebszeit wird durch die Anzahl der Ausfälle geteilt.
3. Der Wert wird im Kontext des Systems interpretiert und mit MTTR für eine vollständige Verfügbarkeitsanalyse verglichen.

Die Verfügbarkeit berechnet sich als:

$$
p = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}
$$

Die Ausfallrate ergibt sich als:

$$
\lambda = \frac{1}{\text{MTBF}}
$$

## Beispiele

Angenommen, ein Produktionsserver läuft insgesamt 2000 Betriebsstunden und erleidet dabei 4 Ausfälle. Dann beträgt der MTBF:

$$
\text{MTBF} = \frac{2000}{4} = 500 \text{ Stunden}
$$

Wenn die durchschnittliche Reparaturzeit 10 Stunden beträgt, ergibt sich die Verfügbarkeit als:

$$
p = \frac{500}{500 + 10} = 0,98 \text{ oder 98 \%}
$$

Dies bedeutet, dass der Server zu 98 Prozent der Zeit verfügbar ist.

## Haeufige Fehler

- MTBF wird mit der Lebensdauer eines Systems verwechselt; MTBF ist ein Durchschnitt über viele Ausfälle und sagt nichts über den Zeitpunkt des nächsten Ausfalls aus.
- MTTR wird nicht berücksichtigt, obwohl ein hoher MTBF bei langer Reparaturzeit zu niedriger Verfügbarkeit führen kann.
- MTBF setzt eine konstante Ausfallrate voraus, was nicht immer realistisch ist; die Annahmen für das System müssen geprüft werden.

## Verwandte Konzepte

MTBF ist eng mit Konzepten wie [Redundante Systeme](redundante-systeme) und [Verfügbarkeit](technische-verfuegbarkeit-von-daten) verbunden. Für tiefergehende Anwendungen in der Industrie 4.0 ist [Predictive Maintenance](predictive-maintenance) relevant.
