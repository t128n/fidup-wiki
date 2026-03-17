---
title: "Hardware-Redundanz"
description: "Fachartikel über Mechanismen der Hardware-Redundanz wie Failover, RAID und Cluster zur Steigerung der Ausfallsicherheit und Vermeidung von Single Points of Failure."
sources:
    - title: "Hochverfügbarkeit und Redundanzplanung"
      url: "https://www.schaefer-it-systems.de/de/newsroom/detail/hochverfuegbarkeit-und-redundanzplanung/"
    - title: "What are N+1, 2N, and 2(N+1) redundancy?"
      url: "https://americas.fujielectric.com/what-are-n1-2n-and-2n1-redundancy/"
    - title: "RAID - Redundant Array of Independent Disk"
      url: "https://www.elektronik-kompendium.de/sites/com/1001011.htm"
---

**Hardware-Redundanz** bezeichnet die Bereitstellung zusätzlicher physischer IT-Komponenten über den eigentlichen Leistungsbedarf hinaus. Ziel ist die Steigerung der Ausfallsicherheit und die Gewährleistung des Dauerbetriebs bei Defekten. Durch den Einsatz redundanter Ressourcen werden _Single Points of Failure_ (SPoF) – einzelne Schwachstellen, deren Ausfall das Gesamtsystem stoppt – eliminiert.

## Lernziele

Nach der Bearbeitung dieses Artikels lassen sich folgende Themenbereiche erläutern:

- Definition und Bedeutung von Hardware-Redundanzen in IT-Infrastrukturen.
- Differenzierung der Failover-Modi (Hot, Warm, Cold).
- Kapazitätsplanung mittels Redundanzgraden (N+1, 2N, 2(N+1)).
- Verfahren zur Speicher- und Netzwerk-Redundanz.
- Strategien zur Identifikation und Vermeidung von SPoFs.

## Fachliche Einordnung

Redundante Hardware bildet das technische Fundament für Hochverfügbarkeit. Kritische Komponenten wie Netzteile, Speichermedien oder Netzwerkpfade werden mehrfach verbaut, um bei einem Bauteildefekt den unterbrechungsfreien Betrieb zu ermöglichen. Der Übergang auf eine Ersatzkomponente erfolgt entweder automatisch durch ein Failover oder manuell per Switchover.

Verfügbarkeit wird häufig in „Neunen“ ausgedrückt (z. B. 99,999 %). Ohne redundante Auslegung führen Defekte an zentralen Komponenten zu Downtimes, die hohe Kosten oder Datenverluste nach sich ziehen können. In diesem Zusammenhang ergänzt das [Disaster Recovery](disaster-recovery) die präventiven Maßnahmen, um den Betrieb nach katastrophalen Störungen wiederherzustellen. Eine sinnvolle Ergänzung zur Hardware-Sicherung stellt zudem ein strukturiertes [Backup](backup) dar.

## Begriffe und Konzepte

### Failover-Modi

Failover beschreibt das automatisierte Umschalten auf ein Ersatzsystem im Fehlerfall. Drei Modi definieren die Reaktionszeit und Einsatzbereitschaft:

- **Hot Failover:** Das Standby-System läuft synchron zum Primärsystem. Ein Wechsel erfolgt nahezu verzögerungsfrei ohne Unterbrechung der Dienste.
- **Warm Failover:** Das Ersatzsystem ist eingeschaltet, benötigt jedoch eine kurze Anlaufzeit, um Dienste oder Anwendungen zu starten.
- **Cold Failover:** Die Hardware ist vorhanden, aber ausgeschaltet. Die Inbetriebnahme erfordert einen Neustart, was zu einer spürbaren Downtime führt.

### Redundanzgrade (N-Nomenklatur)

Die Planung redundanter Kapazitäten folgt standardisierten Modellen:

- **N+1:** Für die notwendige Anzahl an Komponenten ($N$) steht eine zusätzliche Einheit als Reserve zur Verfügung.
- **2N:** Die gesamte Infrastruktur ist zweifach vorhanden (z. B. zwei unabhängige Stromwege).
- **2(N+1):** Diese Kombination sieht zwei unabhängige Systeme vor, die jeweils intern nach dem N+1-Prinzip abgesichert sind.

## Speicher-Redundanz (RAID)

Ein zentrales Verfahren zur Datensicherung auf Hardware-Ebene ist das [RAID](raid) (_Redundant Array of Independent Disks_). Hierbei werden mehrere physische Festplatten zu einem logischen Verbund zusammengeschlossen. Durch Spiegelung (_Mirroring_) oder Paritätsberechnungen bleibt der Datenzugriff auch beim Ausfall einzelner Laufwerke erhalten.

## Netzwerk-Redundanz

Die Absicherung der Kommunikationswege verhindert die Isolation von Systemen:

- **Link Aggregation (LACP):** Mehrere physische Leitungen bilden eine logische Verbindung. Ein Kabelbruch führt lediglich zu reduzierter Bandbreite, nicht zum Verbindungsabbruch.
- **Spanning Tree Protocol (STP):** Dieses Protokoll deaktiviert redundante Pfade zur Vermeidung von Schleifen und aktiviert sie im Fehlerfall automatisiert.
- **Router-Redundanz (VRRP/HSRP):** Mehrere Router bilden einen virtuellen Router. Fällt das aktive Gerät aus, übernimmt ein Standby-Router die IP-Adresse und Funktion.
- **Multipathing:** In Storage Area Networks (SAN) sichert Multipathing redundante Pfade zwischen Servern und Speichersystemen ab.

## Redundanzplanung im Überblick

Der Prozess der Implementierung umfasst folgende Analyseschritte:

1. **Identifikation von SPoFs:** Untersuchung der Versorgungskette (Energie, Kühlung) und der IT-Komponenten.
2. **Definition der Verfügbarkeitsziele:** Festlegung der maximal tolerierbaren Ausfallzeit pro Jahr.
3. **Wahl der Redundanzmethode:** Kosten-Nutzen-Analyse (z. B. einfache N+1-Absicherung gegenüber einer kostenintensiven 2N-Lösung).
4. **Technische Umsetzung:** Installation der Hardware und Konfiguration von Monitoring-Tools.
5. **Validierung:** Regelmäßige Durchführung von Failover-Tests und Lastsimulationen.

## Praxisbeispiele

- **Redundante Stromversorgung:** Servergehäuse mit zwei Netzteilen, die an getrennte Phasen oder USV-Anlagen angeschlossen sind.
- **Hochverfügbarkeits-Cluster:** Zwei Server arbeiten im Verbund. Ein passiver Knoten überwacht den aktiven Dienst und übernimmt bei Störungen dessen Aufgaben.

## Fehlerquellen und Optimierung

- **Scheinredundanz:** Mehrere redundante Komponenten teilen sich eine gemeinsame Ressource (z. B. dieselbe Steckdosenleiste). Ein Ausfall dieser Ressource hebelt die gesamte Redundanz aus.
- **Vernachlässigte Tests:** Mechanismen, die im Realbetrieb nie geprüft wurden, bergen das Risiko, im Ernstfall aufgrund von Konfigurationsfehlern zu versagen.
- **Überkomplexität:** Eine zu komplexe Redundanzstruktur erschwert die Fehlerdiagnose und erhöht die Fehleranfälligkeit bei Wartungsarbeiten.

## Selbsttest

1. Worin besteht der funktionale Unterschied zwischen Failover und Switchover?
2. Aus welchem Grund bietet ein RAID 0 keine Redundanz?
3. In welchen Szenarien ist eine 2N-Konfiguration einer N+1-Lösung überlegen?
4. Welche Rolle übernimmt das Protokoll VRRP bei der Router-Redundanz?
5. Wie trägt Multipathing zur Stabilität in SAN-Umgebungen bei?
