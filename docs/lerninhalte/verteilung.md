---
title: "Statistische Verteilungen"
description: "Statistische Verteilungen beschreiben, wie Wahrscheinlichkeiten über die möglichen Werte einer Zufallsvariablen verteilt sind. Dieser Artikel erklärt die Normal-, T-, Chi-Quadrat- und F-Verteilung für Auszubildende in Daten- und Prozessanalyse."
sources:
    - title: "Normalverteilung - Lexikon der Mathematik"
      url: "https://www.spektrum.de/lexikon/mathematik/normalverteilung/7436"
    - title: "Studentsche t-Verteilung - Lexikon der Mathematik"
      url: "https://www.spektrum.de/lexikon/mathematik/studentsche-t-verteilung/10101"
    - title: "Chi-Quadrat-Verteilung mit n Freiheitsgraden - Lexikon der Mathematik"
      url: "https://www.spektrum.de/lexikon/mathematik/2-verteilung-mit-n-freiheitsgraden/2318"
    - title: "F-Verteilung - Lexikon der Mathematik"
      url: "https://www.spektrum.de/lexikon/mathematik/f-verteilung/2905"
---

Statistische Verteilungen beschreiben die Verteilung von Wahrscheinlichkeiten über die möglichen Werte einer [Zufallsvariablen](zufallsvariable). Zu den wichtigsten gehören die Normalverteilung, die diskrete Gleichverteilung, die T-Verteilung, die Chi-Quadrat-Verteilung und die F-Verteilung. Diese Modelle werden in statistischen Tests und Analysen verwendet, um Wahrscheinlichkeiten und Eigenschaften von Daten zu bewerten.

## Lernziele

- Grundlegende Begriffe der Wahrscheinlichkeitsverteilungen erklären.
- Eigenschaften der Normalverteilung, T-Verteilung, Chi-Quadrat-Verteilung und F-Verteilung unterscheiden.
- Typische Anwendungen dieser Verteilungen in der Datenanalyse nennen.
- Einfache Entscheidungsregeln für die Auswahl geeigneter Verteilungen anwenden.

## Kurzüberblick

Statistische Verteilungen sind Modelle, die angeben, mit welcher Wahrscheinlichkeit bestimmte Werte einer [Zufallsvariablen](zufallsvariable) auftreten. Sie unterteilen sich in diskrete Verteilungen für abzählbare Ergebnisse und stetige Verteilungen für kontinuierliche Werte. Die Normalverteilung gilt als zentrale Verteilung, da viele natürliche Phänomene ihr folgen. Die anderen Verteilungen basieren oft auf ihr und werden bei unbekannten Parametern oder spezifischen Tests verwendet.

## Grundbegriffe

Eine Wahrscheinlichkeitsverteilung gibt an, wie Wahrscheinlichkeiten über die möglichen Werte einer [Zufallsvariablen](zufallsvariable) verteilt sind. Bei diskreten Zufallsvariablen wird dies durch eine Wahrscheinlichkeitsfunktion dargestellt, bei stetigen durch eine Dichtefunktion $f(x)$, die die Wahrscheinlichkeitsdichte anzeigt, und eine Verteilungsfunktion $F(x)$, die die kumulierte Wahrscheinlichkeit $P(X \leq x)$ angibt.

Der Erwartungswert $E(X)$ ist der durchschnittliche Wert, die [Varianz](varianz) $Var(X)$ misst die Streuung, und die [Standardabweichung](standardabweichung) $\sigma$ ist die Quadratwurzel der Varianz. Freiheitsgrade (df) geben die Anzahl unabhängiger Informationen an, die zur Schätzung eines Parameters verwendet werden.

## Normalverteilung

Die Normalverteilung, auch Gauß-Verteilung genannt, ist eine stetige Wahrscheinlichkeitsverteilung mit den Parametern Mittelwert $\mu$ und Varianz $\sigma^2$. Ihre Dichtefunktion ist symmetrisch um $\mu$, mit einem Modalwert bei $\mu$ und Wendepunkten bei $\mu \pm \sigma$.

Bei der Standardnormalverteilung ist $$\mu = 0$$ und $\sigma^2 = 1$. Nach dem zentralen Grenzwertsatz konvergiert der Mittelwert einer großen Stichprobe unabhängiger und identisch verteilter Zufallsvariablen gegen eine Normalverteilung.

Innerhalb von $\mu \pm \sigma$ liegen etwa 68,3 Prozent der Werte, innerhalb von $\mu \pm 2\sigma$ etwa 95,5 Prozent und innerhalb von $\mu \pm 3\sigma$ etwa 99,7 Prozent.

Ein Beispiel: Die Körpergrößen von Erwachsenen folgen annähernd einer Normalverteilung mit $$\mu = 170$$ cm und $$\sigma = 10$$ cm.

## Diskrete Gleichverteilung

Die diskrete Gleichverteilung tritt bei diskreten [Zufallsvariablen](zufallsvariable) auf, bei denen alle möglichen Ergebnisse die gleiche Wahrscheinlichkeit haben. Ein Beispiel ist der Wurf eines fairen Würfels, bei dem jede Augenzahl die Wahrscheinlichkeit $$1/6$$ hat.

## T-Verteilung

Die T-Verteilung, auch Studentsche t-Verteilung genannt, wurde 1908 von William Sealey Gosset veröffentlicht. Sie wird verwendet, wenn die Varianz der Grundgesamtheit unbekannt ist und eine Normalverteilung angenommen wird. Die Form hängt von den Freiheitsgraden $k$ ab.

Die T-Verteilung ist symmetrisch um 0, breiter als die Normalverteilung und hat "dicke Ränder". Für $k > 1$ ist der Erwartungswert 0, für $k > 2$ ist die Varianz $k/(k-2)$. Mit zunehmenden $k$ konvergiert sie gegen die Standardnormalverteilung; ab $k \geq 30$ kann sie approximiert werden.

Anwendungen: t-Tests und Konfidenzintervalle.

Ein Beispiel: Bei einer kleinen Stichprobe von 10 Messungen wird die T-Verteilung mit $$k = 9$$ verwendet, um den Mittelwert zu testen.

## Chi-Quadrat-Verteilung

Die Chi-Quadrat-Verteilung ist die Verteilung der Summe quadrierter Abweichungen. Sie ist asymmetrisch und umfasst nur positive Werte. Ihre Form hängt von den Freiheitsgraden $$k$$ ab.

Bei $$k = 2$$ hat sie ihr Maximum bei 0 und nähert sich mit zunehmenden $$k$$ einer Normalverteilung an.

Anwendungen: Anpassungstests und Unabhängigkeitstests bei kategorialen Daten.

Ein Beispiel: Der Chi-Quadrat-Test prüft, ob beobachtete Häufigkeiten von erwarteten abweichen, etwa bei Umfragedaten zu Präferenzen.

## F-Verteilung

Die F-Verteilung beschreibt das Verhältnis zweier unabhängiger Chi-Quadrat-verteilter Zufallsvariablen. Sie ist asymmetrisch und hat nur positive Werte, spitzer als die Chi-Quadrat-Verteilung.

Anwendungen: Vergleich von Varianzen in Varianzanalysen (ANOVA).

Ein Beispiel: Der F-Test prüft, ob zwei Stichproben die gleiche Varianz haben, etwa bei Qualitätskontrollen in Produktionsprozessen.

## Häufige Fehler und Tipps

Nicht jede Verteilung ist normal. Die Daten sollten immer geprüft werden. Bei kleinen Stichproben sollte die T-Verteilung statt der Normalverteilung verwendet werden, da sie die Unsicherheit berücksichtigt. Freiheitsgrade korrekt berechnen: Für t-Verteilung $df = n-1$, für Chi-Quadrat $df = k-1$.

## Zentrale Fragen

1. Was beschreibt die Dichtefunktion einer stetigen Verteilung?
2. Wann wird die T-Verteilung anstelle der Normalverteilung verwendet?
3. Wie unterscheidet sich die Chi-Quadrat-Verteilung von der Normalverteilung?
4. Welche Anwendung hat die F-Verteilung?
5. Was sind Freiheitsgrade und wie werden sie berechnet?
6. Nach welcher Regel liegen etwa 95 Prozent der Werte einer Normalverteilung?
