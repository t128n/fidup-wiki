---
title: "Redundante Systeme"
description: "Redundante Systeme nutzen zusätzliche Komponenten, um Verfügbarkeit und Zuverlässigkeit in IT-Infrastrukturen zu steigern. Sie umfassen Hardware-, Software- und Datenredundanz, bieten Vorteile wie Fehlertoleranz, bergen jedoch Herausforderungen wie höhere Kosten und Komplexität."
sources:
  - title: "Reliability Pillar - AWS Well-Architected Framework"
    url: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel-pillar-design-principles.html"
  - title: "Redundancy (engineering) - Wikipedia"
    url: "https://en.wikipedia.org/wiki/Redundancy_(engineering)"
  - title: "RAID - Wikipedia"
    url: "https://en.wikipedia.org/wiki/RAID"
---

**Redundante Systeme** sind IT-Infrastrukturen, die durch mehrfache Auslegung technischer Komponenten und Daten die Verfügbarkeit und Zuverlässigkeit erhöhen. Sie vermeiden Single Points of Failure und sichern die Kontinuität von Diensten bei Ausfällen. In der Daten- und Prozessanalyse tragen sie zur Stabilisierung von Betriebsabläufen und zur Risikominimierung bei.

## Kurzüberblick
Redundante Systeme fügen zusätzliche Komponenten in IT-Infrastrukturen ein, um Ausfälle zu verhindern und die Zuverlässigkeit zu steigern. Sie beruhen auf Prinzipien wie Fehlertoleranz und Hochverfügbarkeit, wobei Hardware, Software und Daten dupliziert werden. Typische Einsatzgebiete sind Server-Cluster und Datenspeicher. Die Umsetzung erfordert eine Abwägung zwischen Kosten und Nutzen, da Redundanz die Komplexität erhöht.

## Kontext und Einordnung
In der IT sichern redundante Systeme kritische Prozesse ab, besonders in der Datenanalyse und -verarbeitung. Sie ergänzen Ansätze wie [Disaster Recovery](disaster-recovery), indem sie nicht nur Wiederherstellung ermöglichen, sondern kontinuierliche Verfügbarkeit gewährleisten. Historisch entstanden sie aus der Notwendigkeit, Hardware-Ausfälle in Großrechenanlagen zu kompensieren, und sind heute unverzichtbar für Cloud-Infrastrukturen und verteilte Systeme.

## Begriffe und Definitionen

- **Single Point of Failure (SPoF)**: Ein einzelner Ausfallpunkt, dessen Versagen den Gesamtbetrieb gefährdet.
- **Fehlertoleranz**: Die Fähigkeit eines Systems, trotz eines Fehlers weiter zu arbeiten.
- **Hochverfügbarkeit**: Zustand, in dem ein System für einen hohen Anteil der Zeit betriebsbereit ist, etwa 99,99 Prozent.

## Arten von Redundanz

- **Hardware-Redundanz**: Einsatz zusätzlicher physischer Komponenten wie Server, Festplatten oder Netzteile, die bei Ausfall aktiv werden.
- **Software-Redundanz**: Einsatz von Softwarelösungen, die bei einem Fehler in einer Anwendung automatisch zu einer alternativen Instanz wechseln.
- **Daten-Redundanz**: Speicherung von Daten an mehreren Orten zur Vermeidung von Datenverlust, etwa durch [RAID-Systeme](raid).
- **Georedundanz**: Räumliche Verteilung von Systemen über mehrere Standorte, um vor lokalen Katastrophen zu schützen.

## Implementierung
Redundante Systeme werden durch Cluster-Systeme umgesetzt, in denen mehrere Server zusammenarbeiten. Aktiv/Aktiv-Cluster verteilen die Last gleichmäßig, während Aktiv/Passiv-Cluster einen Standby-Server bereithalten. Hot-Swap-fähige Komponenten ermöglichen den Austausch ohne Abschaltung. Bei Georedundanz synchronisieren Systeme Daten in Echtzeit oder im Warm-Standby-Modus, wobei ein Mindestabstand von 200 Kilometern zwischen Standorten erforderlich ist.

## Vorteile
Redundante Systeme steigern die Zuverlässigkeit, indem sie Ausfallzeiten reduzieren. Sie erlauben schnelle Wiederherstellung durch sofort verfügbare Alternativen. Außerdem verbessern sie die Benutzererfahrung und schützen vor lokalen Störungen.

## Herausforderungen und Risiken
Die Einführung verursacht höhere Kosten durch zusätzliche Hardware und Wartung. Sie erhöht die Komplexität der Verwaltung, die spezialisiertes Wissen erfordert. Selbst redundante Systeme bleiben anfällig für Konfigurationsfehler oder Replikationslatenzen.