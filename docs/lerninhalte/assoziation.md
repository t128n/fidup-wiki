---
title: "Assoziationsanalyse"
description: "Die Assoziationsanalyse identifiziert Muster und Regeln in großen Datenmengen, um Zusammenhänge zwischen Elementen wie Warenkorbkombinationen aufzudecken."
sources:
    - title: "Apriori-Algorithmus"
      url: "https://www.ibm.com/de-de/think/topics/apriori-algorithm"
    - title: "Data Science Crashkurs: Kapitel 5"
      url: "https://data-science-crashkurs.de/chapters/kapitel_05.html"
---

Die **Assoziationsanalyse** ist ein Verfahren des [Data Minings](data-mining), um statistische Zusammenhänge zwischen Objekten in großen Datensätzen zu identifizieren. Sie ermittelt Abhängigkeiten nach dem Prinzip: Wenn Ereignis A eintritt, folgt mit einer messbaren Wahrscheinlichkeit auch Ereignis B. Ein häufiges Einsatzgebiet ist der Einzelhandel, wo Transaktionsdaten im Rahmen einer Warenkorbanalyse untersucht werden, um Kaufmuster von Produkten zu erkennen.

## Lernziele

- Das Grundprinzip und die Anwendungsbereiche der Assoziationsanalyse erläutern.
- Die Kennzahlen Support, Konfidenz und Lift berechnen sowie interpretieren.
- Die Funktionsweise des Apriori-Algorithmus und die Apriori-Eigenschaft beschreiben.
- Vorteile des FP-Growth-Verfahrens gegenüber dem Apriori-Algorithmus benennen.

## Kontext und Einordnung

Die Methode wird dem [unüberwachten Lernen](ueberwachtes-und-nicht-ueberwachtes-lernen) zugeordnet, da die Suche nach Mustern in Datenbeständen ohne vorgegebene Zielvariablen erfolgt. Neben dem Handel findet die Analyse Anwendung in folgenden Bereichen:

- **Web-Usage-Mining**: Identifikation häufig aufeinanderfolgender Seitenaufrufe.
- **Medizin**: Zusammenhangsanalyse zwischen Symptomen und Diagnosen.
- **IT-Betrieb**: Ursachenforschung durch Korrelation von Fehlermeldungen in Logdateien.

## Zentrale Kennzahlen

Zur Bewertung der Relevanz und Stärke einer Assoziationsregel dienen mathematische Maße. Eine Regel wird formal wie folgt dargestellt:

$$ A \rightarrow B $$

### Support

Der Support gibt die relative Häufigkeit an, mit der eine Kombination von Elementen (ein Itemset) im Gesamtdatensatz auftritt. Er dient als Maß für die statistische Relevanz und wird wie folgt berechnet:

$$ Support(A) = \frac{\text{Anzahl der Transaktionen mit A}}{\text{Gesamtanzahl der Transaktionen}} $$

### Konfidenz

Die Konfidenz misst die Zuverlässigkeit einer Regel. Sie gibt an, in welchem Anteil der Transaktionen, die das Itemset A enthalten, auch das Itemset B vorhanden ist:

$$ Konfidenz(A \rightarrow B) = \frac{Support(A \cup B)}{Support(A)} $$

### Lift

Der Lift bewertet die Stärke des Zusammenhangs im Vergleich zum Zufall. Die Berechnung erfolgt über das Verhältnis von Konfidenz zum Support des Itemsets B:

$$ Lift(A \rightarrow B) = \frac{Konfidenz(A \rightarrow B)}{Support(B)} $$

Dabei gelten folgende Interpretationen:

- Bei einem Wert von 1 sind die Itemsets statistisch unabhängig.
- Ein Wert größer als 1 deutet auf einen positiven Zusammenhang hin (das Itemset A tritt häufiger gemeinsam mit dem Itemset B auf als erwartet).
- Ein Wert kleiner als 1 weist darauf hin, dass sich die Elemente eher gegenseitig ausschließen.

## Verfahren zur Regelgenerierung

Die Extraktion von Regeln erfolgt meist zweistufig: Zuerst werden häufig vorkommende Itemsets (_Frequent Itemsets_) gesucht, anschließend werden daraus Regeln abgeleitet, die definierte Mindestwerte für Support und Konfidenz erfüllen.

### Apriori-Algorithmus

Der Apriori-Algorithmus arbeitet iterativ und basiert auf der **Apriori-Eigenschaft**: Ein Itemset kann nur dann häufig sein, wenn auch alle seine Teilmengen häufig sind.

1. **Join-Schritt**: Bildung neuer Kandidaten-Sets durch Kombination bereits bekannter häufiger Sets.
2. **Prune-Schritt**: Aussortieren von Itemsets, deren Support unter einem Schwellenwert (_Minimum Support_) liegt.

### FP-Growth-Algorithmus

Das _Frequent Pattern Growth_-Verfahren ist eine effiziente Alternative, die ohne die iterative Generierung von Kandidaten auskommt.

- Die Daten werden in einer kompakten Baumstruktur (**FP-Tree**) gespeichert.
- Die Datenbank muss nur zweimal gescannt werden.
- Dies reduziert den Rechenaufwand bei massiven Datenmengen erheblich.

## Beispiel einer Warenkorbanalyse

Ein Datensatz enthält vier Transaktionen:

| ID  | Produkte             |
| --- | -------------------- |
| 1   | Brot, Milch          |
| 2   | Brot, Windeln        |
| 3   | Milch, Windeln       |
| 4   | Brot, Milch, Windeln |

Untersuchung der Regel:

$$ Brot \rightarrow Milch $$

- **Support**: Die Kombination aus Brot und Milch kommt in zwei von vier Transaktionen vor. Dies entspricht einem Wert von:
  $$ Support = 0,5 $$

- **Konfidenz**: Brot ist in drei Transaktionen enthalten (1, 2, 4). In zwei davon ist auch Milch dabei. Die Zuverlässigkeit der Regel beträgt daher:
  $$ Konfidenz \approx 0,67 $$

- **Lift**: Der Support von Milch beträgt 0,75 (drei von vier Transaktionen). Daraus ergibt sich für den Lift folgende Berechnung:
  $$ Lift = \frac{0,67}{0,75} \approx 0,89 $$

> **Interpretation**: Ein Lift-Wert unter 1 bedeutet in diesem Beispiel, dass die Kombination aus Brot und Milch seltener auftritt, als es bei einer statistischen Unabhängigkeit der beiden Produkte zu erwarten wäre.

## Interpretation und Stolperfallen

- **Scheinkorrelationen**: Ein hoher Support oder eine hohe Konfidenz allein sind nicht aussagekräftig, wenn ein Produkt (z. B. Plastiktüten) ohnehin in fast jedem Warenkorb liegt. Hier ist der Lift entscheidend.
- **Kausalität**: Die Analyse zeigt statistische Zusammenhänge (Korrelation), begründet aber keine ursächliche Wirkung (Kausalität).
- **Schwellenwerte**: Zu hohe Mindestwerte unterdrücken interessante Nischenregeln; zu niedrige Werte führen zu einer unüberschaubaren Menge an unbedeutenden Regeln.

## Selbsttest

1. Warum führt die Apriori-Eigenschaft zu einer Leistungssteigerung des Algorithmus?
2. Wie unterscheidet sich die Aussagekraft von Konfidenz und Lift?
3. In welcher Situation ist der FP-Growth-Algorithmus dem Apriori-Verfahren vorzuziehen?
4. Wie hoch ist der Support für ein Itemset, das in 150 von 1.500 Transaktionen auftritt?
