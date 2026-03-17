---
title: "Euklidische Distanz"
description: "Die euklidische Distanz ist ein grundlegendes Abstandsmaß in der Datenanalyse, das den direkten Abstand (Luftlinie) zwischen zwei Punkten berechnet."
sources:
    - title: "Euklidischer Abstand"
      url: "https://de.wikipedia.org/wiki/Euklidischer_Abstand"
    - title: "Was ist der k-Nearest-Neighbor-Algorithmus (KNN)?"
      url: "https://www.ibm.com/de-de/think/topics/knn"
    - title: "inf-schule: Abstandsmaß"
      url: "https://inf-schule.de/ki/menueansicht/maschinelles_lernen_mit_python/data_science/projekt_empfehlungssysteme/modellentwicklung/knn_erlernen/abstandsbestimmung_mathematisch"
---

Die **euklidische Distanz** (auch euklidischer Abstand) ist das geometrische Maß für die direkte Entfernung zwischen zwei Punkten in einem Koordinatensystem. Sie entspricht der Länge einer geraden Verbindungslinie, die im zweidimensionalen Raum als „Luftlinie“ bekannt ist. In der [Datenanalyse](datenanalyse) dient sie dazu, die Ähnlichkeit zwischen Objekten mathematisch zu bestimmen. Ein geringerer Abstand signalisiert dabei eine höhere Ähnlichkeit der betrachteten Datenelemente.

## Lernziele

Nach der Bearbeitung dieses Artikels sind folgende Kompetenzen vorhanden:

- Die euklidische Distanz definieren und geometrisch einordnen.
- Die Berechnung für zwei- und mehrdimensionale Räume anwenden.
- Den mathematischen Zusammenhang zum Satz des Pythagoras erläutern.
- Die Bedeutung der Skalierung für die Ergebnisqualität bewerten.

## Kontext und Einordnung

In der Welt des [maschinellen Lernens](maschinelles-lernen) werden Objekte als Punkte in einem Vektorraum dargestellt. Die euklidische Distanz ermöglicht es, die Verwandtschaft dieser Datensätze objektiv zu messen. Zentrale Einsatzgebiete sind:

- **[k-Nearest-Neighbor](k-nearest-neighbor)**: Ein Verfahren zur [Klassifikation](klassifikation), das die Klasse eines neuen Datenpunkts anhand seiner räumlich nächsten Nachbarn bestimmt.
- **[Clustering](clustering)**: Die automatische Gruppierung von Datenpunkten durch Minimierung der Abstände zu einem gemeinsamen Zentrum.

Das folgende Diagramm verdeutlicht die Berechnung über die Katheten eines rechtwinkligen Dreiecks:

```mermaid
graph LR
    A[Punkt 1] -- "Differenz x" --> B[Hilfspunkt]
    B -- "Differenz y" --> C[Punkt 2]
    A -- "Euklidische Distanz" --> C
```

## Definition und Formel

Die Berechnung basiert auf dem Satz des Pythagoras. Im zweidimensionalen Raum bilden die Differenzen der Koordinaten zweier Punkte die Katheten eines rechtwinkligen Dreiecks. Die direkte Verbindung stellt die Hypotenuse dar.

Für zwei Punkte in der Ebene gilt:
$$ d(P_1, P_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

In einem Raum mit einer beliebigen Anzahl an Dimensionen wird die Formel verallgemeinert:
$$ d(P*1, P_2) = \sqrt{\sum*{i=1}^n (p*{2i} - p*{1i})^2} $$

Hierbei repräsentieren die Werte in der Summe die Merkmale der betrachteten Punkte über alle vorhandenen Dimensionen.

## Vorgehen bei der Berechnung

Die Ermittlung der Distanz erfolgt in vier systematischen Schritten:

1. **Differenzbildung**: Für jedes Merkmal wird die Differenz zwischen den Werten der beiden Punkte berechnet.
2. **Quadrierung**: Jede einzelne Differenz wird quadriert. Dadurch werden alle Ergebnisse positiv und größere Abweichungen erhalten ein höheres Gewicht.
3. **Summierung**: Die quadrierten Differenzen aller Dimensionen werden zu einer Gesamtsumme addiert.
4. **Wurzelziehen**: Die Quadratwurzel der Summe ergibt die euklidische Distanz.

## Praxisbeispiel

Betrachtet wird der Vergleich zweier Datenpunkte in einem zweidimensionalen Koordinatensystem.

Punkt 1 weist folgende Koordinaten auf:
$$ (1, 2) $$

Punkt 2 weist folgende Koordinaten auf:
$$ (4, -2) $$

**Schrittweise Berechnung:**

1. Differenzen der Merkmale bestimmen:
   $$ 4 - 1 = 3 $$
$$ -2 - 2 = -4 $$

2. Quadrate der Differenzen berechnen:
   $$ 3^2 = 9 $$
$$ (-4)^2 = 16 $$

3. Summe der quadrierten Werte bilden:
   $$ 9 + 16 = 25 $$

4. Wurzel aus der Gesamtsumme ziehen:
   $$ \sqrt{25} = 5 $$

Die euklidische Distanz zwischen den beiden Punkten beträgt 5 Einheiten.

## Herausforderungen und Tipps

- **Fehlende Skalierung**: Die Distanz reagiert empfindlich auf unterschiedliche Wertebereiche. Merkmale mit großen Zahlenwerten dominieren das Ergebnis. Vor der Berechnung ist daher oft eine Normalisierung der Daten notwendig.
- **Fluch der Dimensionalität**: In sehr hochdimensionalen Räumen verlieren Distanzmaße an Aussagekraft, da die relativen Abstände zwischen den Punkten mathematisch gesehen konvergieren.
- **Datentypen**: Dieses Abstandsmaß setzt numerische Werte voraus. Für kategorische Merkmale müssen alternative Verfahren oder Kodierungen gewählt werden.

## Selbsttest

1. Welcher mathematische Satz bildet die geometrische Grundlage für die euklidische Distanz?
2. Welchen Zweck erfüllt das Quadrieren der Differenzen im Berechnungsprozess?
3. Warum ist eine Skalierung der Daten vor der Distanzberechnung oft unerlässlich?
4. Wie wirkt sich die Anzahl der Dimensionen auf die Aussagekraft der Distanz aus?
