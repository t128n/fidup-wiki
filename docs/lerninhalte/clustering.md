---
title: "Clustering"
description: "Einführung in das Clustering: Funktionsweise von K-Means, hierarchischen Verfahren und Distanzmaßen zur automatischen Gruppenbildung in Datensätzen."
sources:
    - title: "Clusteranalyse einfach erklärt: Data Science für Anfänger"
      url: "https://www.dataproofed.de/clusteranalyse/"
    - title: "Clusteranalyse - Methodenberatung UZH"
      url: "https://www.methodenberatung.uzh.ch/de/datenanalyse_spss/interdependenz/gruppierung/cluster.html"
---

**Clustering** (auch Clusteranalyse genannt) ist ein [unüberwachtes Lernverfahren](ueberwachtes-und-nicht-ueberwachtes-lernen), bei dem Datenpunkte so in Gruppen unterteilt werden, dass die Objekte innerhalb einer Gruppe eine hohe Ähnlichkeit aufweisen (Homogenität), während sie sich von Objekten anderer Gruppen möglichst stark unterscheiden (Heterogenität). Als exploratives Verfahren erfordert es keine vordefinierten Klassen oder Labels; Strukturen werden eigenständig auf Basis der Datenmerkmale identifiziert.

## Lernziele

Der Artikel vermittelt Kenntnisse über:

- Die Zielsetzung und das Grundprinzip der Clusteranalyse.
- Den Ablauf des K-Means-Algorithmus.
- Den Unterschied zwischen agglomerativen und divisiven hierarchischen Verfahren.
- Die Bedeutung von Distanzmaßen wie der [euklidischen Distanz](euklidische-distanz) für die Gruppenbildung.
- Die Interpretation eines Dendrogramms.

## Kontext und Einordnung

In der Datenanalyse dient Clustering dazu, in großen, ungeordneten Mengen verborgene Muster zu finden. Im Gegensatz zur Klassifikation, die Daten bekannten Kategorien zuordnet, steht beim Clustering die Entdeckung neuer Strukturen im Vordergrund. Typische Anwendungsfälle sind die Kundensegmentierung, Bildkompression oder die Identifikation von Anomalien in Systemprotokollen.

## Distanzmaße als Basis der Ähnlichkeit

Um die Ähnlichkeit zwischen Datenpunkten zu bestimmen, berechnen Algorithmen deren räumliche Entfernung. Die Wahl des Distanzmaßes beeinflusst das Ergebnis der Gruppenbildung maßgeblich.

### Euklidische Distanz

Die [euklidische Distanz](euklidische-distanz) entspricht der direkten Verbindungslinie („Luftlinie“) zwischen zwei Punkten in einem n-dimensionalen Raum. Sie findet vorrangig bei metrischen Daten Anwendung.

### Manhattan-Distanz

Die Manhattan-Distanz (City-Block-Distanz oder L1-Norm) berechnet die Entfernung als summe der absoluten Differenzen der Koordinaten. Sie misst den Weg entlang rechtwinkliger Achsen.

Die Formel für zwei Punkte P1 und P2 lautet:
$$ d(P*1, P_2) = \sum*{i=1}^{n} |x*{1i} - x*{2i}| $$

**Beispiel:**
Für zwei Punkte P1(4, 5) und P2(20, 2) im zweidimensionalen Raum ergibt sich:
$$ |20 - 4| + |2 - 5| = 16 + 3 = 19 $$

## K-Means-Algorithmus

K-Means ist ein partitionsorientiertes Verfahren, das einen Datensatz in eine vorab festgelegte Anzahl k von Clustern zerlegt. Ziel ist die Minimierung der Summe der quadrierten Abweichungen der Datenpunkte zu ihren jeweiligen Clusterzentren (Zentroiden).

### Vorgehensweise

1. **Initialisierung:** Festlegung der Anzahl k und Auswahl von k Startpunkten als initiale Zentroiden.
2. **Zuordnung:** Jeder Datenpunkt wird dem Cluster zugeordnet, dessen Zentroid die geringste Distanz aufweist.
3. **Aktualisierung:** Die Position jedes Zentroiden wird als Mittelwert aller zugeordneten Datenpunkte neu berechnet.
4. **Iteration:** Die Schritte 2 und 3 werden wiederholt, bis die Zentroiden stabil bleiben oder ein Abbruchkriterium erfüllt ist.

### Bestimmung der optimalen Clusterzahl

Die Wahl von k erfolgt häufig mithilfe eines **Elbow-Plots**. Hierbei wird die Varianz innerhalb der Cluster gegen die Anzahl k aufgetragen. Ein deutlicher „Knick“ (Ellbogen) im Kurvenverlauf deutet auf die optimale Clusterzahl hin, da eine weitere Erhöhung von k nur noch geringe Verbesserungen der Varianzreduktion erzielt.

## Hierarchisches Clustering

Hierarchische Verfahren erzeugen eine strukturierte Abfolge von Clustern. Es existieren zwei grundlegende Ansätze:

- **Agglomerativ (Bottom-up):** Jeder Datenpunkt bildet zunächst ein eigenes Cluster. Sukzessiv werden die ähnlichsten Cluster fusioniert, bis alle Punkte in einem einzigen Cluster vereint sind.
- **Divisiv (Top-down):** Alle Datenpunkte starten in einem gemeinsamen Cluster, das schrittweise in kleinere Einheiten aufgeteilt wird.

### Dendrogramm

Das Ergebnis wird als Baumdiagramm visualisiert. Die horizontale Achse führt die Datenpunkte auf, während die vertikale Achse die Distanz der Verschmelzung anzeigt. Eine hohe Verbindungslinie signalisiert eine geringe Ähnlichkeit der fusionierten Cluster.

### Linkage-Methoden

Die Distanz zwischen zwei Clustern wird über Linkage-Methoden definiert:

- **Single-Linkage:** Distanz zwischen den zwei am nächsten beieinander liegenden Punkten der Cluster.
- **Complete-Linkage:** Distanz zwischen den zwei am weitesten entfernten Punkten.
- **Average-Linkage:** Durchschnittliche Distanz zwischen allen Punktpaaren der beiden Cluster.

## Typische Herausforderungen

- **Skalierung:** Da Distanzmaße auf absoluten Werten basieren, müssen Merkmale mit unterschiedlichen Einheiten (z. B. Alter und Einkommen) vorab normiert oder standardisiert werden.
- **Wahl von k:** Eine unpassende Anzahl von Clustern bei K-Means führt zu Fehlinterpretationen.
- **Ausreißer:** K-Means reagiert empfindlich auf extreme Werte, da diese die Position der Zentroiden verzerren.

## Selbsttest

- Warum gilt Clustering als unüberwachtes Verfahren?
- Wie unterscheiden sich Homogenität und Heterogenität in der Clusteranalyse?
- Welcher Rechenschritt erfolgt bei der Aktualisierung der Zentroiden im K-Means-Verfahren?
- Welche Information liefert die vertikale Achse eines Dendrogramms?
- Welchen Zweck erfüllt die Datennormierung vor der Analyse?
