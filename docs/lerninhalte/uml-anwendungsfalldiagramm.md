---
title: "UML-Anwendungsfalldiagramm"
description: "Das UML-Anwendungsfalldiagramm ist ein Verhaltensdiagramm der Unified Modeling Language (UML), das das erwartete Verhalten eines Systems darstellt und zur Spezifikation von Systemanforderungen eingesetzt wird. Es richtet sich an Auszubildende in Daten- und Prozessanalyse und hilft bei der Modellierung funktionaler Anforderungen aus Sicht der Akteure."
sources:
  - title: "UML-Anwendungsfalldiagramm – Wikipedia"
    url: "https://de.wikipedia.org/wiki/Anwendungsfalldiagramm"
  - title: "UML Use Case Diagrams – uml-diagrams.org"
    url: "https://www.uml-diagrams.org/use-case.html"
  - title: "UML Anwendungsfalldiagramme – OER Informatik"
    url: "https://oer-informatik.de/uml-usecase"
---

Das **UML-Anwendungsfalldiagramm** ist ein Verhaltensdiagramm der Unified Modeling Language (UML), das das erwartete Verhalten eines Systems darstellt und zur Spezifikation von Systemanforderungen eingesetzt wird. Es visualisiert Anwendungsfälle und Akteure mit ihren Beziehungen und Abhängigkeiten und unterstützt die Kommunikation zwischen Auftraggebern und Entwicklern.

## Kurzüberblick
Das UML-Anwendungsfalldiagramm modelliert funktionale Anforderungen aus der Perspektive der Nutzer und Systeme. Es zeigt, welche Akteure mit dem System interagieren und welche Anwendungsfälle diese ausführen. Seit UML 2 gilt es als Verhaltensdiagramm und unterscheidet sich von Strukturdiagrammen wie dem [Klassendiagramm](uml-klassendiagramm). Es findet Anwendung in der Anforderungsanalyse, der Geschäftsprozessmodellierung und der Darstellung des Systemverhaltens aus Anwendersicht. Zentrale Elemente sind Systemgrenzen, Akteure, Anwendungsfälle und Beziehungen wie Assoziation, Generalisierung, Include und Extend.

## Kontext und Einordnung
Das UML-Anwendungsfalldiagramm gehört zu den Verhaltensdiagrammen der UML 2.x und spezifiziert das erwartete Systemverhalten, ohne Abläufe darzustellen. Im Gegensatz zu [Aktivitätsdiagrammen](uml-aktivitaetsdiagramm) oder [Sequenzdiagrammen](uml-sequenzdiagramm) fokussiert es auf funktionale Einheiten und deren Interaktionen. Es grenzt das System von seiner Umgebung ab und hilft bei der Identifikation von Stakeholdern. In der Praxis dient es der frühzeitigen Anforderungserfassung und der Abstimmung zwischen Fachabteilungen und IT-Entwicklung.

## Begriffe und Definitionen

- **Systemgrenze**: Ein Rechteck, das die Anwendungsfälle definiert, die zum modellierten System gehören. Es grenzt System und Umgebung ab und trägt einen Namen.
- **Akteur**: Eine Person, Rolle oder ein externes System, das mit dem modellierten System interagiert. Akteure werden als Strichmännchen dargestellt und können primär (initiierend) oder sekundär (unterstützend) sein.
- **Anwendungsfall**: Eine vollständige Einheit nützlicher Funktionalität, die von einem System in Zusammenarbeit mit Akteuren ausgeführt wird und ein beobachtbares Ergebnis von Wert liefert. Anwendungsfälle können abstrakt sein, wenn sie unvollständig und für Vererbung gedacht sind.
- **Assoziation**: Eine Beziehung, die zeigt, dass ein Akteur mit einem Anwendungsfall interagiert. Sie wird als Linie dargestellt, manchmal mit Pfeil.
- **Multiplizität**: Gibt an, wie viele Instanzen eines Akteurs oder Anwendungsfalls an einer Beziehung beteiligt sind, z. B. 1..* für beliebig viele.
- **Generalisierung**: Eine Vererbungsbeziehung, bei der ein spezialisierter Akteur oder Anwendungsfall Eigenschaften eines allgemeineren erbt. Dargestellt als Pfeil mit hohlem Dreieck.
- **Include-Beziehung**: Bedeutet, dass ein Basis-Anwendungsfall einen anderen zwangsläufig beinhaltet. Dargestellt als gestrichelte Linie mit «include».
- **Extend-Beziehung**: Bedeutet, dass ein Anwendungsfall einen anderen unter bestimmten Bedingungen optional erweitert. Dargestellt als gestrichelte Linie mit «extend». Erweiterungsstellen können definiert werden.

## Elemente und Beziehungen
Das Diagramm besteht aus Elementen wie Systemgrenzen, Akteuren und Anwendungsfällen sowie Beziehungen zwischen ihnen. Systemgrenzen umfassen die Anwendungsfälle in einem Rechteck. Akteure stehen außerhalb und interagieren via Assoziationen mit Anwendungsfällen. Multiplizitäten spezifizieren die Anzahl der Beteiligten. Generalisierungen erlauben Hierarchien. Include und Extend strukturieren Abhängigkeiten: Include für obligatorische Einbindungen, Extend für optionale Erweiterungen. Eine Include-Beziehung zeigt z. B., dass «Bestellen» immer «Warenkorb verwalten» beinhaltet. Eine Extend-Beziehung könnte «PayPal-Zahlung» optional zu «Bestellen» hinzufügen, wenn der Kunde PayPal wählt.

```mermaid
usecaseDiagram
    rectangle "E-Commerce-System" as System {
        (Bestellen) ..> (Warenkorb verwalten) : <<include>>
        (Bestellen) .> (PayPal-Zahlung) : <<extend>>
        note right of (PayPal-Zahlung) : Erweiterungsstelle: Zahlart wählen
    }
    Kunde --> (Bestellen)
    Kunde <|-- Premiumkunde
```

Dieses Diagramm veranschaulicht ein E-Commerce-System mit Include und Extend.

## Beispiel
In einem Zeiterfassungssystem interagieren Akteure wie Mitarbeiter und Administratoren. Der Anwendungsfall «Zeit buchen» assoziiert mit dem Mitarbeiter (Multiplizität 1..*). «Zeit genehmigen» generalisiert zu «Bericht erstellen». Include bindet «Login prüfen» zwangsläufig in «Zeit buchen» ein, während «Überstunden melden» optional via Extend hinzukommt, wenn die Zeit über 40 Stunden liegt.

## Häufige Fehler und Tipps
Include und Extend werden oft verwechselt. Include findet für zwingende Teile Verwendung, Extend für bedingte Ergänzungen. Zu viele Extend-Beziehungen führen zu erhöhter Komplexität. Anwendungsfälle stellen eine erkennbare Funktionalität dar und sind nicht zu granular. Abstrakte Anwendungsfälle werden kursiv gekennzeichnet. Multiplizitäten werden sparsam eingesetzt, um die Übersichtlichkeit zu wahren. Generalisierungen beruhen auf klaren Is-a-Beziehungen. Erweiterungsstellen werden explizit notiert, um Extend-Beziehungen präzise zu machen.
