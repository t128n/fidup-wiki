---
title: "UML (Unified Modeling Language)"
description: "UML ist eine standardisierte grafische Modellierungssprache zur Spezifikation, Konstruktion, Dokumentation und Visualisierung von Software-Systemen und anderen Systemen."
sources:
  - title: "Unified Modeling Language – Wikipedia"
    url: "https://de.wikipedia.org/wiki/Unified_Modeling_Language"
  - title: "Unified Modeling Language Specification Version 2.5.1 – OMG"
    url: "https://www.omg.org/spec/UML/2.5.1/About-UML"
---

Die **UML (Unified Modeling Language)** ist eine standardisierte grafische Modellierungssprache zur Spezifikation, Konstruktion, Dokumentation und Visualisierung von Software-Systemen und anderen Systemen. Sie umfasst Diagramme für statische Strukturen und dynamische Abläufe und unterstützt die objektorientierte Softwareentwicklung.

## Kurzüberblick
UML ist eine grafische Modellierungssprache, die zur Spezifikation, Konstruktion, Dokumentation und Visualisierung von Software-Systemen dient. Sie wurde von der Object Management Group (OMG) entwickelt und ist als ISO/IEC 19505 genormt. UML umfasst 14 Diagrammtypen, die in Struktur- und Verhaltensdiagramme unterteilt werden und in verschiedenen Phasen der Softwareentwicklung Anwendung finden.

## Kontext und Einordnung
UML entstand in den 1990er Jahren aus der Vereinigung von Modellierungsmethoden der drei Software-Ingenieure Grady Booch, Ivar Jacobson und James Rumbaugh, die als die "drei Amigos" bekannt sind. Die aktuelle Version ist UML 2.5.1, veröffentlicht im Dezember 2017. Die Standardisierung erfolgt durch die OMG, ein offenes Konsortium für Enterprise-Integration-Standards. UML ist zudem als ISO-Norm anerkannt, was ihre internationale Geltung unterstreicht.

## Begriffe und Definitionen
UML-Diagramme lassen sich in zwei Hauptgruppen einteilen: Strukturdiagramme zeigen statische Aspekte eines Systems, wie Klassen, Komponenten und Pakete. Verhaltensdiagramme fokussieren auf dynamische Aspekte, wie Interaktionen, Zustandsänderungen und Aktivitäten.

Wichtige Diagrammarten umfassen:

- **Klassendiagramm**: Strukturdiagramm zur Darstellung von Klassen, Schnittstellen und deren Beziehungen. Es zeigt Attribute, Operationen und Assoziationen.
- **Sequenzdiagramm**: Verhaltensdiagramm für zeitliche Abläufe von Nachrichten zwischen Objekten. Es visualisiert Interaktionen in einem bestimmten Szenario.
- **Anwendungsfalldiagramm**: Verhaltensdiagramm zur Modellierung von Anforderungen mit Anwendungsfällen und Akteuren. Es beschreibt, was das System tun soll.
- **Zustandsdiagramm**: Verhaltensdiagramm für Zustandsautomaten eines Objekts. Es zeigt Zustände und Ereignisse, die Zustandswechsel auslösen.
- **Aktivitätsdiagramm**: Verhaltensdiagramm für Abläufe als Graph aus Aktionen, Kontrollflüssen und Datenflüssen. Es ähnelt Flussdiagrammen.

Weitere Diagramme sind das Komponentendiagramm, Verteilungsdiagramm, Paketdiagramm und Kommunikationsdiagramm. Details zu einzelnen Diagrammen finden sich in spezifischen Artikeln wie dem [UML-Klassendiagramm](uml-klassendiagramm).

## Vorgehen
In der Softwareentwicklung wird UML in verschiedenen Phasen eingesetzt:

1. Anforderungsanalyse: Mit Anwendungsfalldiagrammen werden Systemfunktionen modelliert.
2. Systementwurf: Klassendiagramme definieren die Struktur.
3. Dokumentation: Diagramme dienen zur Kommunikation mit Stakeholdern.
4. Konstruktion: Sequenzdiagramme spezifizieren Interaktionen.

UML basiert auf einer vierstufigen Metamodellierungshierarchie: M0 für konkrete Objekte, M1 für Modelle, M2 für Metamodelle und M3 für das Metametamodell (MOF). Dies ermöglicht den Austausch von Modellen über Formate wie XMI.

## Beispiele
Ein einfaches Klassendiagramm zeigt eine Klasse "Kunde" mit Attributen wie "name: String" und Operationen wie "bestellen()". Eine Assoziation verbindet sie mit der Klasse "Bestellung".

Für ein Sequenzdiagramm: Ein Objekt "Benutzer" sendet die Nachricht "login()" an das Objekt "System", das mit "erfolgreich" antwortet. Dies visualisiert einen Anmeldevorgang. Weitere Beispiele finden sich im [UML-Sequenzdiagramm](uml-sequenzdiagramm).

## Häufige Fehler

- Nicht UML als Programmiersprache missverstehen; es ist eine Notation zur Beschreibung von Systemen.
- Strukturdiagramme nicht für Abläufe verwenden; stattdessen Verhaltensdiagramme.

## Weiterführendes

- [UML-Sequenzdiagramm](uml-sequenzdiagramm)
- [UML-Klassendiagramm](uml-klassendiagramm)
- [UML-Zustandsdiagramm](uml-zustandsdiagramm)
- [UML-Aktivitätsdiagramm](uml-aktivitaetsdiagramm)
- [UML-Anwendungsfalldiagramm](uml-anwendungsfalldiagramm)

## Einzelnachweise
Die Definitionen und Details stammen aus den Frontmatter-Quellen.
