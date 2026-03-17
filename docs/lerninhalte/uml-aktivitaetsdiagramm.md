---
title: "UML-Aktivitätsdiagramm"
description: "Das UML-Aktivitätsdiagramm ist ein Verhaltensdiagramm der Unified Modeling Language zur grafischen Darstellung von Aktivitätsabläufen in Systemen, Geschäftsprozessen und Algorithmen."
sources:
  - title: "Aktivitätsdiagramm – Wikipedia"
    url: "https://de.wikipedia.org/wiki/Aktivitätsdiagramm"
  - title: "UML Activity Diagrams – uml-diagrams.org"
    url: "https://www.uml-diagrams.org/activity-diagrams.html"
  - title: "Workflows und Algorithmen mit dem UML Aktivitätsdiagramm entwerfen/dokumentieren – OER Informatik"
    url: "https://oer-informatik.de/uml-aktivitaetsdiagramm"
---

Das **UML-Aktivitätsdiagramm** ist ein Verhaltensdiagramm der [Unified Modeling Language](uml), das den Ablauf von Aktivitäten in einem System grafisch darstellt. Es dient zur Modellierung von Anwendungsfällen, Geschäftsprozessen und Algorithmen, wobei es parallele Abläufe, Verzweigungen und Synchronisation unterstützt.

## Kurzüberblick
Das UML-Aktivitätsdiagramm visualisiert den Fluss von Aktivitäten in einem System. Es baut auf dem Token-Modell auf: Ein Token wird am Startknoten erzeugt und fließt entlang der Kanten, wobei es sich bei Entscheidungen verzweigt oder bei Parallelisierungen vervielfacht. Im Vergleich zu einfachen Flussdiagrammen ermöglicht es Objektflüsse, Signal-Kommunikation und Exception-Handling. Es ist besonders nützlich für die Modellierung komplexer Abläufe mit Bedingungen und Parallelität.

## Kontext und Einordnung
Das UML-Aktivitätsdiagramm entstand als objektorientierte Weiterentwicklung des klassischen Programmablaufplans. Es gehört zu den Verhaltensdiagrammen der [UML](uml) und konzentriert sich auf den Ablauf von Aktivitäten, im Gegensatz zum [Sequenzdiagramm](sequenzdiagramm), das den Nachrichtenaustausch zwischen Objekten zeigt. In UML 2.x wurden wesentliche Erweiterungen wie Pins, Parameter und eine präzisere Semantik eingeführt, während UML 1.x einfacher gehalten war. Es findet Anwendung in der Softwareentwicklung, Geschäftsprozessmodellierung und Algorithmus-Visualisierung.

## Begriffe und Definitionen

- **Aktivität**: Ein parametrisiertes Verhalten, das als koordinierter Fluss von Aktionen modelliert wird. Eine Aktivität kann andere Aktivitäten aufrufen und Hierarchien bilden.
- **Aktion**: Ein ausführbarer Teilbereich einer Aktivität, der eine atomare Operation darstellt, wie eine Berechnung oder ein Methodenaufruf.
- **Token-Modell**: Tokens sind gedankte Markierungen, die ausgeführte Aktionen kennzeichnen. Ein Token entsteht am Startknoten und fließt entlang der Kanten, wobei sich die Anzahl bei Verzweigungen ändert.
- **Kontrollfluss**: Ein gerichteter Pfeil, der die Reihenfolge der Ausführung von Aktionen verbindet.
- **Objektfluss**: Ein gerichteter, gestrichelter Pfeil, der den Fluss von Datenobjekten zwischen Aktionen darstellt.
- **Startknoten**: Ein schwarzer ausgefüllter Kreis, der den Anfang einer Aktivität markiert.
- **Endknoten**: Ein schwarzer Kreis mit konzentrischem Kreis, der das Ende aller Kontrollflüsse markiert.
- **Fluss-Endknoten**: Ein Kreis mit diagonalem Strich (×), der das Ende eines einzelnen Kontrollflusses markiert.
- **Entscheidungsknoten**: Eine Raute, die einen bedingten Verzweigungspunkt mit Guards (boolesche Bedingungen in eckigen Klammern) darstellt.
- **Zusammenführen**: Ein Knoten, der mehrere Ströme zu einem Ausgang kombiniert.
- **Gabel**: Ein dicker Balken, der einen Fluss in parallele Ströme aufspaltet.
- **Zusammenführen (Join)**: Ein dicker Balken, der parallele Ströme wieder vereint.
- **Swimlanes**: Partitionen, die Aktionen nach Verantwortungsbereichen gruppieren; maximal 3–5 empfohlen für Übersichtlichkeit.
- **Pins**: Kleine Quadrate am Rand einer Aktion, die Ein- oder Ausgabewerte für Datenobjekte darstellen (UML 2.x).
- **Parameter**: Platzhalter für Ein- und Ausgabewerte einer Aktivität (UML 2.x).
- **Signal senden/empfangen**: Knoten für asynchrone Kommunikation, wie Send-Signal für das Versenden und Accept-Event für das Empfangen.
- **Exception-Handling**: Konstrukte für abnormale Verläufe, oft mit Blitz-Symbol, zur Modellierung von Fehlerfällen.

## Vorgehen
Ein mögliches Vorgehen zur Erstellung eines UML-Aktivitätsdiagramms umfasst folgende Schritte:

1. Definition des Zwecks: Bestimmung, ob es um einen Geschäftsprozess, Algorithmus oder Anwendungsfall geht.
2. Identifikation von Start- und Endpunkten: Setzung des Startknotens und mindestens eines Endknotens.
3. Skizzierung des Hauptflusses: Zeichnung von Aktionen und Verbindung mit Kontrollflüssen.
4. Hinzufügung von Bedingungen: Verwendung von Entscheidungsknoten mit disjunkten Guards.
5. Integration von Parallelität: Nutzung von Gabel und Join für parallele Ströme.
6. Berücksichtigung von Daten: Ergänzung von Objektflüssen und Pins, wenn Datenflüsse relevant sind.
7. Trennung von Verantwortlichkeiten: Einsatz von Swimlanes, jedoch Begrenzung auf 3–5.
8. Prüfung auf Vollständigkeit: Sicherstellung, dass alle Pfade zu einem Endknoten führen und das Token-Modell beachtet wird.

## Beispiele
### Beispiel 1: Einfacher Bestellprozess
Eine Aktivität beginnt am Startknoten mit der Aktion "Bestellung empfangen". Ein Entscheidungsknoten prüft [Bestand verfügbar?]. Bei [ja] folgt "Ware versenden" und dann der Endknoten. Bei [nein] folgt "Ablehnen" und Endknoten. Hier fließt ein Token sequenziell, mit einer Verzweigung.

### Beispiel 2: Algorithmus mit Schleife
Für einen einfachen Suchalgorithmus: Startknoten → Aktion "Index initialisieren" → Entscheidung [Index < Länge?] → [ja]: "Element vergleichen" → Entscheidung [gefunden?] → [ja]: Endknoten; [nein]: "Index erhöhen" → zurück zur ersten Entscheidung. Bei [nein] zur ersten Entscheidung: Endknoten. Dies zeigt Wiederholungen durch Guards.

### Beispiel 3: Prozess mit Swimlanes
In einem Bestellprozess: Swimlane "Kunde": "Bestellung aufgeben". Swimlane "Lager": "Prüfen" → Entscheidung. Swimlane "Versand": "Versenden". Swimlanes trennen die Rollen visuell.

## Häufige Fehler und Tipps

- Aktivität und Aktion sind verschieden; Aktionen werden für atomare Schritte verwendet.
- Zu viele Swimlanes führen zu Unübersichtlichkeit; maximal 3–5 werden empfohlen und Gruppierung ist möglich.
- Guards müssen disjunkt sein; Bedingungen sollten sich gegenseitig ausschließen.
- Objektfluss wird nur eingesetzt, wenn er den Datenfluss klärt; ansonsten Kontrollfluss bevorzugen.
- Mermaid oder einfache Flowcharts sind kein Ersatz für UML; Tools wie PlantUML werden für echte Notation verwendet.
- Bei Parallelität: Alle parallelen Pfade sollten bei Join zusammenkommen, um Tokens zu synchronisieren.
- Exception-Handling sollte nicht vergessen werden: Fehlerfälle werden frühzeitig modelliert für robuste Systeme.

## Weiterführendes
Für tiefergehende Modellierung wird die OMG-UML-Spezifikation empfohlen. Tools wie PlantUML oder Draw.io unterstützen die Erstellung. Vergleiche mit anderen Diagrammen wie dem Zustandsdiagramm bieten ergänzende Perspektiven.

## Einzelnachweise

- Aktivitätsdiagramm – Wikipedia
- UML Activity Diagrams – uml-diagrams.org
- Workflows und Algorithmen mit dem UML Aktivitätsdiagramm entwerfen/dokumentieren – OER Informatik
