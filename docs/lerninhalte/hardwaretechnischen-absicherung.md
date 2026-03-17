---
title: "Hardwaretechnische Absicherung"
description: "Hardwaretechnische Absicherung umfasst physische Sicherheitsmaßnahmen zum Schutz von IT-Infrastruktur vor unbefugtem Zugriff, Diebstahl und Schäden. Sie beinhaltet Zutrittskontrolle, Überwachungssysteme und Notfallpläne für Auszubildende in Daten- und Prozessanalyse."
sources:
  - title: "IT-Grundschutz-Kompendium des BSI - INF.2 Rechenzentrum sowie Serverraum"
    url: "https://it-grundschutzkompendium.de/inf_infrastruktur/inf.2_rechenzentrum_sowie_serverraum"
  - title: "Universität Kassel - Serverräume nach BSI IT-Grundschutz"
    url: "https://www.uni-kassel.de/hochschulverwaltung/organisation/beauftragte/informationssicherheit/it-betreibende/serverraeume.html"
---

**Hardwaretechnische Absicherung** bezeichnet Maßnahmen zur physischen Sicherheit von IT-Infrastrukturen und Gebäuden. Sie zielt darauf ab, unbefugten Zugang zu verhindern, Risiken zu minimieren und die Integrität von Hardware zu gewährleisten. Dazu gehören Zugangskontrollen, Überwachungssysteme, Barrieren und Alarmanlagen, ergänzt durch Schulungen und Notfallpläne.

## Lernziele

Dieser Artikel vermittelt:

- die Grundlagen der hardwaretechnischen Absicherung und ihre Abgrenzung zur logischen IT-Sicherheit,
- die Bedeutung von Sicherheitszonen nach BSI,
- Zutrittskontrollsysteme und deren Komponenten,
- physische Barrieren und Überwachungssysteme,
- Maßnahmen zur Hardware-Sicherung und Brandschutz,
- häufige Fehler in der Praxis.

## Kurzüberblick

Hardwaretechnische Absicherung ergänzt logische Sicherheitsmaßnahmen wie Firewalls oder Verschlüsselung, indem sie physische Bedrohungen wie Diebstahl, Feuer oder unbefugten Zugang adressiert. Sie folgt dem Prinzip der mehrschichtigen Sicherheit und orientiert sich an Standards wie dem BSI IT-Grundschutz. Typische Anwendungen finden sich in Rechenzentren, Serverräumen und Bürogebäuden, wo sensible Daten und Infrastruktur geschützt werden müssen.

## Begriffe und Definitionen

### Hardwaretechnische Absicherung

Maßnahmen zur Vermeidung von Gefahren durch körperliche Einwirkung auf IT-Systeme und Infrastruktur, von verschlossenen Rechnergehäusen bis zu gesicherten Rechenzentren.

### Zutrittskontrolle

Systeme zur Regelung und Überwachung des Zugangs zu sensiblen Bereichen, einschließlich technischer Lösungen wie Kartenleser und organisatorischer Prozesse wie Berechtigungsmanagement.

### Physische Barrieren

Bauliche Maßnahmen wie Zäune, Mauern und Türen zur Verhinderung unbefugten Eindringens.

### Überwachungssysteme

Techniken zur Erkennung von Vorfällen, darunter Videoüberwachung, Alarmanlagen und automatische Infrastrukturüberwachung.

### Hardware-Sicherung

Schutz von Hardware-Komponenten durch abschließbare Schränke, ordnungsgemäßes Kabelmanagement und redundante Stromversorgung.

### Brandschutz und Notfallplanung

Maßnahmen zur Brandvermeidung, -erkennung und -bekämpfung sowie Pläne für Evakuierung und Reaktion auf Notfälle.

## Sicherheitszonen nach BSI

Das BSI unterscheidet Sicherheitszonen mit abgestuften Schutzstufen:

- **A-Zone**: Strengster Bereich, z. B. Serverraum mit Servern und Netzkomponenten. Zugang nur für autorisiertes Personal.
- **B-Zone**: Vorbereitungsbereich, z. B. Büros oder Lager. Erhöhte Kontrolle, aber weniger streng als A-Zone.
- **C-Zone**: Allgemein zugängliche Bereiche mit grundlegenden Sicherheitsanforderungen.

Diese Zonen erlauben eine stufenweise Absicherung, wobei der Übergang zwischen Zonen durch Barrieren und Kontrollen gesichert wird. Beispiel: Ein Rechenzentrum definiert den Serverraum als A-Zone, angrenzende Büros als B-Zone und das Gebäudeumfeld als C-Zone.

## Zutrittskontrolle

Zutrittskontrollsysteme regeln den Zugang zu sensiblen Bereichen:

1. **Technische Systeme**: Einsatz von Kartenlesern, biometrischen Scannern oder PIN-Codes.
2. **Organisatorische Maßnahmen**: Berechtigungsmanagement, Schlüsselverwaltung und Besuchermanagement.
3. **Protokollierung**: Erfassung aller Zugänge zur Nachverfolgung und Auditierung.

Beispiel: In einem Serverraum erfolgt der Zugang nur mit einer Chipkarte und PIN, wobei jeder Eintritt protokolliert wird. Besucher erhalten temporäre Berechtigungen und werden begleitet.

## Physische Barrieren

Physische Barrieren schützen Gelände und Gebäude vor Eindringlingen:

- **Zäune und Mauern**: Umfassender Schutz des Perimeters.
- **Sicherheits-Türen**: Verstärkte Türen mit erhöhtem Widerstand nach DIN EN 1627.
- **Fenster**: Mit Sichtschutz und Manipulationsschutz.

Diese Barrieren wirken in Kombination mit Überwachungssystemen. Beispiel: Ein Zaun um das Gelände wird durch Bewegungsmelder ergänzt, die bei Annäherung Alarm auslösen.

## Überwachungssysteme

Überwachungssysteme erkennen und dokumentieren Vorfälle:

- **Videoüberwachung**: Kameras zur Erfassung von Bewegungen, unter Berücksichtigung des [Datenschutz](datenschutz).
- **Alarmanlagen**: Einbruchmeldeanlagen für unbefugten Zugang und Brandmeldeanlagen für Feuer.
- **Automatische Überwachung**: Kontrolle von Temperatur, Luftfeuchtigkeit und Stromversorgung.

Beispiel: In einem Serverraum überwachen Sensoren die Raumtemperatur und lösen Alarm aus, wenn Grenzwerte überschritten werden. Videoaufzeichnungen dienen der Nachverfolgung von Vorfällen.

## Hardware-Sicherung

Der Schutz von Hardware umfasst:

- **Server-Racks und Schränke**: Abschließbare Einheiten zur Verhinderung von Manipulation.
- **Kabelmanagement**: Ordnungsgemäße Verlegung von Leitungen zur Vermeidung von Schäden oder Abhören.
- **Stromversorgung**: [USV](backup) und Netzersatzanlagen für Ausfallsicherheit.

Beispiel: Server in einem Rack werden verschlossen, Kabel gebündelt und gekennzeichnet. Eine USV sorgt für Strom bei Netzausfall.

## Brandschutz und Notfallplanung

Brandschutz beinhaltet:

- **Brand- und Rauchabschnitte**: Abtrennung von Bereichen zur Brandbegrenzung.
- **Löschanlagen**: Automatische Systeme oder Handfeuerlöscher.
- **Notfallpläne**: Evakuierungspläne, Reaktionsketten und regelmäßige Übungen.

Beispiel: Bei einem Brandalarm werden Serverräume automatisch abgeschaltet, und Mitarbeiter evakuiert. Übungen testen die Pläne jährlich.

## Häufige Fehler und Empfehlungen

- Häufiger Fehler: Vernachlässigung physischer Sicherheit zugunsten digitaler Maßnahmen. Empfehlung: Beide Ebenen sollten für vollständigen Schutz integriert werden.
- Häufiger Fehler: Fehlende Protokollierung bei Zutrittskontrolle. Empfehlung: Alle Zugriffe sollten erfasst werden.
- Häufiger Fehler: Unzureichende Wartung von Alarmanlagen. Empfehlung: Regelmäßige Tests sollten durchgeführt werden.
- Häufiger Fehler: Notfallpläne nur auf Papier. Empfehlung: Szenarien sollten praktisch geübt werden.

## Selbsttest

1. Was unterscheidet A- und B-Zonen im BSI-Konzept?
2. Nenne drei Komponenten der Zutrittskontrolle.
3. Warum ist USV wichtig für Hardware-Sicherung?
4. Welche Rolle spielen Brandabschnitte im Brandschutz?
5. Welcher häufige Fehler tritt bei Videoüberwachung auf?