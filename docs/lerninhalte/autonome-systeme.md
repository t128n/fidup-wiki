---
title: "Autonome Systeme"
description: "Ein Überblick über Technik, Praxis und rechtliche sowie ethische Rahmenbedingungen."
sources:
    - title: "Autonom oder hochautomatisiert: Was ist der Unterschied?"
      url: "https://www.iese.fraunhofer.de/blog/autonom-oder-vielleicht-doch-nur-hochautomatisiert-was-ist-eigentlich-der-unterschied/"
    - title: "Autonome Systeme: Definition, Trends und Herausforderungen"
      url: "https://omr.com/de/reviews/contenthub/autonome-systeme"
    - title: "KI verstehen als Automation des Entscheidens"
      url: "https://www.bitkom.org/Bitkom/Publikationen/Kuenstliche-Intelligenz-verstehen-als-Automation-des-Entscheidens.html"
---

Ein **autonomes System** bezeichnet eine technologische Einheit, die Ziele eigenständig verfolgt und flexibel auf unvorhergesehene Ereignisse reagiert. Im Gegensatz zur klassischen Automatisierung erfordern diese Systeme kein menschliches Eingreifen für die operative Steuerung. Sie basieren auf der kontinuierlichen Erfassung von Umgebungsdaten, deren Analyse mittels Algorithmen der [Künstlichen Intelligenz](ki) und der anschließenden Umsetzung in physikalische oder digitale Aktionen.

## Lernziele

Nach der Bearbeitung dieses Artikels kann:

- der Unterschied zwischen Automatisierung und Autonomie erklärt werden.
- die technische Architektur (Sensor-KI-Aktuator) beschrieben werden.
- typische Einsatzgebiete und technologische Treiber benannt werden.
- rechtliche und ethische Herausforderungen im Kontext des EU AI Acts eingeordnet werden.

## Definition und Abgrenzung

In der Fachwelt wird strikt zwischen Automatisierung und Autonomie unterschieden.

- **Automatisierung**: Ein System folgt fest programmierten Regeln (Determinismus). Das Verhalten ist bei identischen Eingangsgrößen stets gleich und vorhersehbar (z. B. ein Tempomat im Fahrzeug).
- **Autonomie**: Ein autonomes System bewertet verschiedene Handlungsoptionen eigenständig und passt sein Verhalten an eine sich verändernde, nicht vollständig planbare Umwelt an. Es ist adaptiv und oft lernfähig.

Ein Beispiel verdeutlicht den Unterschied: Während ein automatisierter Prozess in der Fertigung bei einem Hindernis stoppt, erkennt ein autonomes Transportsystem das Objekt, berechnet eine Ausweichroute und setzt den Weg fort.

## Technische Architektur

Der Kern eines autonomen Systems wird als geschlossener Regelkreis beschrieben, der aus drei Hauptkomponenten besteht:

1.  **Sensorik (Wahrnehmung)**: Erfassung der Umwelt durch Sensoren wie Lidar, Radar, Kameras oder Ultraschall. Auch digitale Datenströme aus dem [Internet of Things (IoT)](iot) dienen als Input.
2.  **Künstliche Intelligenz (Entscheidung)**: Verarbeitung der Sensordaten in Echtzeit. Hier kommen Methoden des maschinellen Lernens zum Einsatz, um Muster zu erkennen und Entscheidungen zu treffen. Das System nutzt oft [Big Data](big-data), um aus historischen und aktuellen Informationen die optimale Aktion abzuleiten.
3.  **Aktuatorik (Handlung)**: Umsetzung der Entscheidung in eine physikalische Aktion (z. B. durch Elektromotoren, Greifer oder Bremsen) oder eine digitale Reaktion.

Das funktionale Prinzip folgt der Logik:
$$ \text{Sensor-Input} \rightarrow \text{KI-Verarbeitung/Entscheidung} \rightarrow \text{Aktuator-Output} $$

## Einsatzgebiete in der Praxis

Autonome Systeme steigern Effizienz und Präzision in zahlreichen Branchen:

- **Logistik und Transport**: Autonome Gabelstapler in Lagern oder Drohnen zur Auslieferung optimieren Warenströme und senken Kosten.
- **Industrie 4.0**: Mobile Roboter (AGVs – Automated Guided Vehicles) agieren in der Fertigung flexibel neben menschlichen Arbeitskräften.
- **Landwirtschaft**: Autonome Traktoren bewirtschaften Felder präzise, was den Ressourcenverbrauch (z. B. Dünger) reduziert.
- **Gesundheitswesen**: Assistenzsysteme unterstützen bei chirurgischen Eingriffen oder übernehmen Logistikaufgaben in Krankenhäusern.

## Herausforderungen und Rahmenbedingungen

Der Einsatz autonomer Systeme ist mit technologischen, rechtlichen und ethischen Fragestellungen verbunden.

### Sicherheit und Haftung

Die funktionale Sicherheit (_Safety_) muss garantieren, dass das System keine Gefahr für Menschen darstellt. Rechtlich stellt sich die Frage der Haftung: Wer ist verantwortlich, wenn ein autonomes System eine Fehlentscheidung trifft? Der **EU AI Act** schafft hier einen regulatorischen Rahmen, indem er KI-Anwendungen in Risikoklassen einteilt.

### Erklärbarkeit (Explainable AI)

Für die Akzeptanz ist es entscheidend, dass KI-Entscheidungen nachvollziehbar bleiben. _Explainable AI_ (XAI) umfasst Methoden, die die Entscheidungsprozesse der Algorithmen für den Menschen transparent machen.

### Ethische Aspekte

In kritischen Situationen müssen autonome Systeme moralische Abwägungen treffen (z. B. beim autonomen Fahren). Da Maschinen kein Bewusstsein besitzen, müssen diese Regeln vorab durch menschliche Programmierung und ethische Leitlinien definiert werden.

## Häufige Fehler und Tipps

> **Fehler**: "Autonom" und "automatisiert" synonym verwenden.
> **Tipp**: Es sollte geprüft werden, ob das System auf Unvorhergesehenes reagieren kann. Wenn ja, weist es Merkmale von Autonomie auf.

> **Fehler**: Die Annahme, dass autonome Systeme ohne Daten funktionieren.
> **Tipp**: Autonomie erfordert massive Datenmengen in Echtzeit; eine stabile Vernetzung ist oft Voraussetzung.

## Selbsttest

1. Welches Hauptmerkmal unterscheidet Autonomie von klassischer Automatisierung?
2. Welche drei Komponenten bilden den zentralen Regelkreis autonomer Systeme?
3. Warum ist der EU AI Act für die Entwicklung autonomer Systeme in Europa wichtig?
4. Was wird unter dem Begriff _Explainable AI_ verstanden?
