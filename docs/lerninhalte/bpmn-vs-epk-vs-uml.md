---
title: "BPMN vs. EPK vs. UML"
description: "Ein detaillierter Vergleich der Notationen BPMN, EPK und UML zur Modellierung von Geschäftsprozessen und Systemen. Erfahren Sie mehr über Stärken, ISO-Standards und Einsatzgebiete."
sources:
  - title: "Prozessmodellierung im Vergleich - PPV Consulting"
    url: "https://www.ppv-consulting.com/de/details/prozessmodellierung-im-vergleich.php"
  - title: "BPMN oder EPK? - Prozessoptimierung Sprung"
    url: "https://prozessoptimierung-sprung.de/flussdiagramm-erstellen-mit-bpmn-oder-epk/"
  - title: "BPMN vs. UML Vergleich - Miro"
    url: "https://miro.com/de/diagramm/bpmn-vs-uml/"
---

**BPMN vs. EPK vs. UML** bezeichnet den Vergleich der drei führenden Notationen zur Modellierung von [Geschäftsprozessen](geschaeftsprozess) und IT-Systemen. Während die [BPMN](bpmn) (Business Process Model and Notation) der weltweite Standard für die Prozessautomatisierung ist, liegt der Schwerpunkt der [EPK](eepk) (Ereignisgesteuerte Prozesskette) auf der betriebswirtschaftlichen Logik, insbesondere im SAP-Umfeld. Die [UML](uml) (Unified Modeling Language) dient primär dem Entwurf technischer Softwarearchitekturen. Für [Daten- und Prozessanalysten](datenanalyse) ist das Verständnis dieser Unterschiede essenziell, um Anforderungen präzise zu dokumentieren und die Kommunikation zwischen Fachbereichen und IT sicherzustellen.

## Lernziele
Nach der Bearbeitung dieses Artikels lassen sich folgende Punkte umsetzen:

* Die spezifischen Anwendungsbereiche von BPMN, EPK und UML unterscheiden.
* Die passende Notation für ein gegebenes Projekt-Szenario auswählen.
* Die Bedeutung von ISO-Normen (ISO 19510 und ISO 19505) für die Dokumentationssicherheit einordnen.
* Die Vorteile der BPMN 2.0 für die direkte technische Ausführung von Prozessen erläutern.

## Kontext und Einordnung
Die Auswahl der Modellierungssprache hängt vom Ziel der Dokumentation und der Zielgruppe ab. Die Notationen decken unterschiedliche Schwerpunkte ab:

* **[BPMN](bpmn)** fungiert als Schnittstelle zwischen Business und IT.
* **[EPK](eepk)** fokussiert auf die rein betriebswirtschaftliche Logik und Übersicht.
* **[UML](uml)** konzentriert sich auf die technische Realisierung und Datenstrukturen.

## Vorstellung der Notationen

### BPMN (Business Process Model and Notation)
Die BPMN 2.0 (ISO/IEC 19510) ermöglicht eine detaillierte Abbildung von Abläufen, einschließlich technischer Aspekte wie Fehlermeldungen, Zeitereignissen und Datenflüssen. Durch die Strukturierung in *Pools* und *Lanes* werden Verantwortlichkeiten eindeutig zugewiesen. Ein wesentliches Merkmal ist die technische Ausführbarkeit: BPMN-Modelle können direkt in Workflow-Engines geladen und automatisiert werden.

### EPK (Ereignisgesteuerte Prozesskette)
Die EPK basiert auf der logischen Verknüpfung von Ereignissen und Funktionen. Die Modellierung folgt einem strikten Schema: Ein Ereignis löst eine Funktion aus, die wiederum zu einem neuen Ereignis führt. Diese Notation ist durch das ARIS-Konzept und im SAP-Kontext weit verbreitet. Sie ist intuitiv lesbar, bietet jedoch weniger Details für die IT-seitige Implementierung als die BPMN.

### UML (Unified Modeling Language)
UML ist der Standard für die objektorientierte Modellierung (ISO/IEC 19505). Zur Darstellung von Prozessen wird meist das **Aktivitätsdiagramm** genutzt. Obwohl dieses in seiner Logik einem Flussdiagramm ähnelt, ist die UML insgesamt wesentlich breiter aufgestellt. Sie umfasst Diagrammtypen für Systemzustände, Klassenstrukturen und Interaktionen, was sie zum zentralen Werkzeug für die Softwarearchitektur macht.

## Vergleich der Merkmale

| Kriterium | BPMN 2.0 | EPK | UML (Aktivitätsdiagramm) |
| :--- | :--- | :--- | :--- |
| **Standard** | ISO/IEC 19510 | De-facto-Standard (ARIS) | ISO/IEC 19505 |
| **Primärer Fokus** | Prozessautomatisierung | Betriebswirtschaftliche Logik | Software- und Systemdesign |
| **Hauptzielgruppe** | Prozessmanager, IT-Analysten | Fachabteilungen, Berater | Softwareentwickler, Architekten |
| **Detailtiefe** | Sehr hoch (ausführbar) | Mittel (logisch) | Hoch (technisch-strukturell) |
| **Verantwortlichkeit** | Integriert (Swimlanes) | Optional (in eEPK) | Integriert (Swimlanes) |
| **Kernstärke** | Standardisierung & IT-Nähe | Einfache Erlernbarkeit | Umfassende Systembeschreibung |

## Stärken und Schwächen

### BPMN

* **Vorteil:** Hohe Ausdruckskraft und weltweite Anerkennung; ermöglicht die Automatisierung von Prozessen.
* **Nachteil:** Hohe Komplexität durch eine Vielzahl spezialisierter Symbole; erfordert Einarbeitung.

### EPK

* **Vorteil:** Übersichtliche Darstellung; ideal für die Dokumentation von Standard-Abläufen; etabliert im SAP-Umfeld.
* **Nachteil:** Keine direkte technische Ausführung vorgesehen; international weniger verbreitet als BPMN.

### UML

* **Vorteil:** Deckt den gesamten Software-Lebenszyklus ab; präzise Definition von Systemgrenzen.
* **Nachteil:** Für rein fachliche Geschäftsprozesse oft zu technisch orientiert; Fokus liegt weniger auf dem betriebswirtschaftlichen Wertschöpfungsprozess.

## Entscheidungshilfe
Die Auswahl der Notation orientiert sich an den Anforderungen des Projekts:

1. **Soll der Prozess automatisiert werden?**
   * Ja: **BPMN 2.0**
2. **Erfolgt die fachliche Dokumentation primär im SAP-Kontext?**
   * Ja: **EPK**
3. **Muss der Prozess als Teil einer Softwarearchitektur beschrieben werden?**
   * Ja: **UML (Aktivitätsdiagramm)**
4. **Wird eine international standardisierte Notation benötigt?**
   * Ja: **BPMN** oder **UML**

## Beispiel: Kundenbestellung
Der Prozess einer Kundenbestellung verdeutlicht die unterschiedlichen Perspektiven:

* **EPK:** Konzentriert sich auf die Kette: "Bestellung eingegangen" (Ereignis) → "Bestellung prüfen" (Funktion) → "Bestellung geprüft" (Ereignis).
* **BPMN:** Zeigt zusätzlich, ob die Prüfung automatisiert oder manuell erfolgt, wie Daten fließen und wie auf Zeitüberschreitungen (Timeouts) reagiert wird.
* **UML:** Legt den Fokus darauf, welches Systemobjekt (z. B. Klasse `OrderManager`) welche Operation ausführt, um den Status der Bestellung zu ändern.

## Typische Fehler und Tipps

* **Mischformen vermeiden:** BPMN-Symbole (z. B. Gateways) dürfen nicht in einer EPK verwendet werden und umgekehrt. Dies führt zu semantischen Fehlern.
* **Zielgruppe berücksichtigen:** Komplexe BPMN-Diagramme mit vielen Symbolen können Fachabteilungen überfordern. In solchen Fällen ist die Nutzung von Unterprozessen (Chunking) sinnvoll.
* **ISO-Standards nutzen:** Der Bezug auf ISO-Normen in der Argumentation gegenüber Stakeholdern unterstreicht die Revisionssicherheit und Zukunftsfähigkeit der Dokumentation.

## Selbsttest

1. Welche Notation ist durch die ISO-Norm 19510 spezifiziert?
2. Warum ist die EPK besonders für den Einstieg in die fachliche Prozessdokumentation geeignet?
3. In welchem Szenario bevorzugen Softwarearchitekten die UML gegenüber der BPMN?
4. Welchen Vorteil bietet die BPMN 2.0 im Hinblick auf die IT-Implementierung?
5. Was ist der wesentliche Unterschied zwischen einer Funktion (EPK) und einer Aktivität (BPMN)?
