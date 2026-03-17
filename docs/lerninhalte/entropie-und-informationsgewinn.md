---
title: "Entropie und Informationsgewinn"
description: "Mathematische Grundlagen zur Optimierung von Entscheidungsbäumen: Erfahren Sie, wie Entropie die Unordnung in Daten misst und wie der Informationsgewinn den besten Split für die Klassifikation bestimmt."
sources:
    - title: "ID3 und C4.5 - Lernmodul"
      url: "https://www.hsbi.de/elearning/data/FH-Bielefeld/lm_data/lm_1358898/dtl/dtl6-id3.html"
    - title: "Was versteht man unter einem Decision Tree? | IBM"
      url: "https://www.ibm.com/de-de/think/topics/decision-trees"
    - title: "Iterative Dichotomiser 3 – Wikipedia"
      url: "https://de.wikipedia.org/wiki/Iterative_Dichotomiser_3"
---

**Entropie und Informationsgewinn** sind Konzepte der Informationstheorie, die zur Optimierung von [Entscheidungsbäumen](entscheidungsbaum) im [Maschinellen Lernen](maschinelles-lernen) dienen. Während die Entropie den Grad der Unreinheit oder Unsicherheit in einem Datensatz quantifiziert, misst der Informationsgewinn die Reduktion dieser Unsicherheit durch die Aufteilung der Daten nach einem Merkmal. Ziel ist die Identifikation von Attributen, die eine möglichst trennscharfe Klassifikation ermöglichen.

## Kerninhalte

Der Artikel behandelt folgende Aspekte:

- Definition der Entropie als Maß für Unordnung.
- Zusammenhang zwischen Entropie und der Reinheit von Daten.
- Berechnung des Informationsgewinns als Entscheidungskriterium.
- Grenzen des ID3-Algorithmus und die Lösung durch C4.5 (Gain Ratio).

## Kontext und Einordnung

In der [Datenanalyse](datenanalyse) zerlegen Entscheidungsbäume komplexe Datensätze schrittweise in homogene Teilmengen. Um zu entscheiden, welches Attribut an einem Knoten die beste Aufteilung liefert, werden mathematische Kriterien benötigt. **Entropie und Informationsgewinn** bewerten die Qualität eines „Splits“ objektiv und ermöglichen so einen effizienten Aufbau der Baumstruktur.

## Die Entropie (Maß der Unordnung)

Die Entropie beschreibt den Grad der Unsicherheit oder die Mischung innerhalb eines Datensatzes. In einem binären Klassifikationsproblem liegt der Wert zwischen 0 und 1:

- **0 (Maximale Reinheit):** Alle Datenpunkte gehören zur selben Klasse. Eine eindeutige Klassifikation ist ohne weitere Information möglich.
- **1 (Maximale Unordnung):** Die Klassen sind gleichmäßig verteilt (z. B. 50 % Erfolg, 50 % Fehlschlag). Es besteht keine Tendenz zu einer bestimmten Klasse.

### Mathematische Definition

Die Berechnung der Entropie $H(S)$ für einen Datensatz $S$ erfolgt über die Summe der Wahrscheinlichkeiten $p(c)$ der einzelnen Klassen $c$:

$$H(S) = - \sum_{c \in C} p(c) \log_2 p(c)$$

Hierbei steht $C$ für die Menge aller Klassen und $p(c)$ für den Anteil der Datenpunkte der Klasse $c$ am Gesamtdatensatz. Das negative Vorzeichen resultiert daraus, dass Logarithmen von Werten zwischen 0 und 1 negativ sind, das Ergebnis jedoch positiv sein muss.

## Der Informationsgewinn (Information Gain)

Der Informationsgewinn ist die Differenz zwischen der Entropie vor und nach der Teilung eines Datensatzes anhand eines Attributs. Er gibt an, wie viel Unsicherheit durch die Wahl dieses Attributs reduziert wird. Algorithmen wie ID3 wählen an jedem Knoten das Attribut mit dem höchsten Informationsgewinn.

### Berechnung

Der Informationsgewinn $G(S, A)$ eines Attributs $A$ berechnet sich aus der ursprünglichen Entropie abzüglich der gewichteten Summe der Entropien der resultierenden Teilmengen:

$$G(S, A) = H(S) - \sum_{v \in V(A)} \frac{|S_v|}{|S|} H(S_v)$$

Dabei ist $V(A)$ die Menge der möglichen Werte von $A$ und $S_v$ die Teilmenge der Daten, für die das Attribut $A$ den Wert $v$ annimmt. Der Term $\frac{|S_v|}{|S|}$ gewichtet die Entropie der Teilmenge entsprechend ihrem Anteil am Gesamtdatensatz.

## Praxis-Beispiel

Ein Unternehmen wertet 91 Werbemaßnahmen aus (51 erfolgreich, 40 fehlgeschlagen).

1. **Ausgangsentropie berechnen:**
   Die Wahrscheinlichkeiten betragen $p(\text{Erfolg}) = 51/91 \approx 0{,}56$ und $p(\text{Fehlschlag}) = 40/91 \approx 0{,}44$.

    $$H(S) = - (0{,}56 \cdot \log_2 0{,}56 + 0{,}44 \cdot \log_2 0{,}44) \approx 0{,}9894$$

2. **Split bewerten:**
   Wird der Datensatz nach dem Merkmal „Zielgruppe“ geteilt, entstehen neue Teilmengen. Sind diese reiner als der Ausgangszustand, sinkt ihre gewichtete Entropie. Die Differenz zur Ausgangsentropie (0,9894) stellt den Informationsgewinn dar.

## Probleme und Grenzen

Der klassische Informationsgewinn im ID3-Algorithmus bevorzugt Attribute mit vielen Ausprägungen (z. B. eindeutige IDs). Da jede ID oft nur einen Datenpunkt enthält, ist die Entropie der Teilmengen 0. Dies führt zu einem rechnerisch maximalen Informationsgewinn, verhindert jedoch eine Generalisierung auf neue Daten.

Der C4.5-Algorithmus löst dies durch das **Gain Ratio** (Informationsgewinnverhältnis). Dabei wird der Informationsgewinn durch die intrinsische Information des Attributs normalisiert, um die Bevorzugung vielschichtiger Merkmale zu korrigieren.

## Wissenswertes und Tipps

> **Merke:** Es wird stets der Split gewählt, der den Informationsgewinn maximiert, um kompakte und effiziente Bäume zu erzeugen.

- In der Praxis dient oft der Gini-Index als rechentechnisch schnellere Alternative zur Entropie (z. B. im CART-Algorithmus), da dieser ohne Logarithmen auskommt.
- Eine Entropie von 0,5 ist bei zwei Klassen nicht der schlechteste Wert; die maximale Unordnung liegt bei 1.

## Selbsttest

1. Was bedeutet eine Entropie von 0 für die Reinheit eines Datensatzes?
2. Warum bevorzugt der ID3-Algorithmus Attribute wie Kundennummern?
3. In welchem Wertebereich bewegt sich die Entropie bei einer binären Klassifikation?
4. Welches Maß gleicht im C4.5-Algorithmus die Schwächen des Informationsgewinns aus?
