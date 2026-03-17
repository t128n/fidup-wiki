---
title: "Information"
description: "Grundlagen der Informationstheorie: Berechnung des Informationsgehalts von Ereignissen mittels Wahrscheinlichkeit, Anwendungen in Datenkompression, Entscheidungsbäumen und maschinellem Lernen."
sources:
    - title: "Informationstheorie – Wikipedia"
      url: "https://de.wikipedia.org/wiki/Informationstheorie"
    - title: "Informationstheorie nach Shannon – logn.de"
      url: "https://logn.de/theorie/shannon/"
    - title: "Entropy (information theory) – Wikipedia"
      url: "https://en.wikipedia.org/wiki/Entropy_(information_theory)"
---

Der **Informationsgehalt** eines Ereignisses misst den quantitativen Gehalt, der sich aus seiner Unwahrscheinlichkeit ableitet. Er quantifiziert die Überraschung, die ein Ereignis hervorruft, und bildet die Grundlage für Konzepte wie Entropie in der Informationstheorie. Diese Theorie, entwickelt von Claude Shannon, findet Anwendung in Bereichen wie Datenkompression, [Entscheidungsbäumen](entscheidungsbaum), [Maschinelles Lernen](maschinelles-lernen) und [Kryptographie](kryptographie).

## Lernziele

Der Artikel vermittelt Kenntnisse zu folgenden Themen:

- Berechnung des Informationsgehalts eines Ereignisses anhand seiner Wahrscheinlichkeit.
- Bedeutung von Bits als Maßeinheit für Information.
- Unterschiede zwischen Informationsgehalt und Entropie.
- Typische Anwendungen der Informationstheorie in praktischen Kontexten.

## Kurzüberblick

Die Informationstheorie behandelt die Quantifizierung von Information durch mathematische Formeln. Der Kern ist die Berechnung des Informationsgehalts eines Ereignisses basierend auf seiner Wahrscheinlichkeit. Je unwahrscheinlicher ein Ereignis, desto höher sein Informationsgehalt, gemessen in Bits. Sichere Ereignisse liefern keine Information, während unabhängige Ereignisse additiv sind. Dies ermöglicht Anwendungen in der Datenverarbeitung und Entscheidungsfindung.

## Kontext und Einordnung

Die Informationstheorie entstand in den 1940er Jahren durch Claude Shannons Arbeit und wandelte die Kommunikationstechnik. Sie trennt Information von Bedeutung und konzentriert sich auf Wahrscheinlichkeiten. Im Gegensatz zum alltäglichen Informationsbegriff geht es hier um die Messbarkeit von Überraschung. Die Theorie bildet die Basis für moderne Technologien wie Datenkompression und maschinelles Lernen.

## Begriffe und Definitionen

### Informationsgehalt

Der Informationsgehalt I(x) eines Ereignisses x wird durch die Formel berechnet:

$$I(x) = -\log_2(P(x))$$

wobei P(x) die Wahrscheinlichkeit des Ereignisses ist. Er quantifiziert die Überraschung oder Informativität. Je niedriger P(x), desto höher I(x).

### Bits

Ein Bit ist die Maßeinheit für Information und entspricht dem Informationsgehalt einer Ja/Nein-Entscheidung. Die Formel mit Logarithmus zur Basis 2 ergibt natürlicherweise Bits. N Bits entsprechen zwei hoch n gleichwahrscheinlichen Möglichkeiten.

### Entropie

Die Entropie H(X) ist der durchschnittliche Informationsgehalt aller möglichen Ereignisse einer Quelle. Sie misst die Unsicherheit und ist maximal bei Gleichverteilung.

## Grundformel für Information

Die Grundformel zur Berechnung des Informationsgehalts eines Ereignisses x lautet:

$$I(x) = -\log_2(P(x))$$

Dabei gilt:

- I(x): Der Informationsgehalt des Ereignisses x.
- P(x): Die Wahrscheinlichkeit des Ereignisses x.

Wichtige Eigenschaften:

- Einheit: Bits.
- Unwahrscheinlichkeit: Höhere Unwahrscheinlichkeit führt zu höherem Informationsgehalt.
- Sichere Ereignisse: Bei P(x) = 1 gilt $I(x) = 0$.
- Additivität: Für unabhängige Ereignisse x und y gilt $I(x, y) = I(x) + I(y)$.

## Beispiele

### Worked Example 1: Münzwurf

Bei einem fairen Münzwurf beträgt P(Kopf) = 0.5. Der Informationsgehalt beträgt:

$$I(\text{Kopf}) = -\log_2(0.5) = 1$$

Bit. Dies entspricht einer Ja/Nein-Entscheidung.

### Worked Example 2: Würfel

Bei einem fairen Würfel beträgt P(eine 6) = 1/6 ≈ 0.1667. Der Informationsgehalt ist

$$I(\text{eine 6}) = -\log_2(0.1667) \approx 2.58$$

Bits. Dies liegt zwischen 2 und 3 Bits, da 2 Bits 4 Möglichkeiten und 3 Bits 8 Möglichkeiten abdecken.

### Worked Example 3: Sicheres Ereignis

Bei Sonnenaufgang morgen beträgt P(Sonnenaufgang) = 1. Der Informationsgehalt ist

$$I(\text{Sonnenaufgang}) = -\log_2(1) = 0$$

Bits. Keine Überraschung bedeutet keine Information.

## Anwendungsbereiche

### Entscheidungsbäume

Bei der Konstruktion von Entscheidungsbäumen wie ID3 wird der Informationsgewinn berechnet, um die beste Merkmalsaufteilung zu finden. Dies reduziert die Entropie des Datensatzes.

### Datenkompression

Die Entropie gibt die theoretische Untergrenze für verlustfreie Datenkompression an. Verfahren wie Huffman-Kodierung nutzen Wahrscheinlichkeiten, um kürzere Codes für häufige Zeichen zu erstellen.

### Maschinelles Lernen

In maschinellem Lernen werden Maße wie Kreuzentropie zur Bewertung von Modellen verwendet. Dies hilft bei der Optimierung neuronaler Netze.

### Kryptographie

Die Sicherheit von Verschlüsselungsverfahren hängt von der Entropie des Schlüssels ab. Ein 128-Bit-Schlüssel bietet hohe Unsicherheit.

## Zusammenhang zur Entropie

Während der Informationsgehalt I(x) den Gehalt eines einzelnen Ereignisses misst, beschreibt die Entropie H(X) den durchschnittlichen Gehalt einer Quelle:

$$H(X) = -\sum_{i} P(x_i) \log_2(P(x_i))$$

Die Entropie ist ein Maß für Unsicherheit und maximal bei Gleichverteilung. Sie dient als Basis für Kompression und Entscheidungsalgorithmen.

## Häufige Fehler und Tipps

- Nicht verwechseln: Informationsgehalt (einzelnes Ereignis) vs. Entropie (Durchschnitt).
- Hinweis: Sichere Ereignisse haben keinen Informationsgehalt.
- Tipp: Bei Berechnungen immer die Basis 2 verwenden für Bits.
- Fehler: Logarithmus ohne negatives Vorzeichen – das ergibt negative Werte.

## Selbsttest

1. Berechnen des Informationsgehalts eines Ereignisses mit P(x) = 0.25.
2. Warum hat ein sicheres Ereignis keinen Informationsgehalt?
3. Was misst die Entropie im Gegensatz zum Informationsgehalt?
4. Nennen von zwei Anwendungen der Informationstheorie.
5. Wie viele gleichwahrscheinliche Möglichkeiten entsprechen 3 Bits?
6. Warum ist die Entropie maximal bei Gleichverteilung?
