---
title: "Datenbankarchitektur"
description: "Einführung in Datenbankarchitekturen: Von Stand-Alone-Systemen bis hin zu komplexen Multi-User-Umgebungen, inklusive ANSI-SPARC-Modell und Konkurrenzverwaltung."
sources:
  - title: "Datenbankarchitekturen im Überblick"
    url: "https://www.datenbanken-verstehen.de/datenbank-grundlagen/datenbankarchitektur/"
  - title: "Das ANSI-Architekturmodell (3-Schichten-Architektur)"
    url: "https://info-wsf.de/das-ansi-architekturmodell-3-schichten-architektur/"
  - title: "Komponenten der Datenbankarchitektur"
    url: "https://docwiki.embarcadero.com/RADStudio/Athens/de/Datenbankarchitektur"
---

Die **Datenbankarchitektur** beschreibt die strukturelle Organisation und das Zusammenwirken der Komponenten eines Informationssystems zur effizienten Datenverwaltung. Sie umfasst verschiedene Konzepte – von einfachen Einzelplatzlösungen bis hin zu verteilten Systemen, die den gleichzeitigen Zugriff vieler Anwender koordinieren. Eine gut gewählte Architektur gewährleistet Datenkonsistenz, die Unabhängigkeit der Anwendungen von der physischen Speicherung sowie eine bedarfsgerechte Systemleistung.

## Lernziele
Behandelt werden folgende Schwerpunkte:

* Unterscheidung zwischen Stand-Alone- und Multi-User-Systemen.
* Prinzip der Datenunabhängigkeit im ANSI-SPARC-Modell.
* Mechanismen der Konkurrenzverwaltung (Locking).
* Schichten und Komponenten einer Datenbankanwendung.

## Architekturkonzepte
Die Wahl der Architektur richtet sich nach der Benutzeranzahl und der Komplexität der Datenzugriffe.

### Stand-Alone-Systeme
Stand-Alone-Systeme sind für den Betrieb auf einem einzelnen Endgerät vorgesehen. Da nur ein Benutzer gleichzeitig auf die Daten zugreift, sind keine Mechanismen zur Synchronisation erforderlich. Diese Systeme sind oft leichtgewichtig und eignen sich für lokale Anwendungen oder Projekte mit geringem Datenaufkommen.

### Multi-User-Systeme
Multi-User-Systeme werden in professionellen Umgebungen meist als [Client-Server-Modelle](client-server) realisiert. Ein zentraler Server übernimmt die Verwaltung der Datenbestände, während mehrere Clients (Anwendungsprogramme) Anfragen stellen. Diese Architektur erfordert eine präzise Berechtigungsvergabe und eine effiziente Steuerung gleichzeitiger Zugriffe.

## Die ANSI-SPARC-Architektur
Theoretische Grundlage vieler moderner Systeme ist die [ANSI-SPARC-Architektur](ansi-sparc-architektur). Dieses Drei-Ebenen-Modell trennt die Benutzersicht von der physischen Speicherung der Daten:

1.  **Externe Ebene**: Individuelle Benutzersichten (z. B. Formulare oder Berichte).
2.  **Konzeptionelle Ebene**: Logische Gesamtstruktur aller Daten und deren Beziehungen (logisches Schema).
3.  **Interne Ebene**: Physische Speicherung auf dem Datenträger.

Diese Trennung ermöglicht die Datenunabhängigkeit: Änderungen an der Hardware oder der Speicherstruktur (intern) beeinflussen nicht zwangsläufig das logische Schema oder die Anwendungssicht (extern).

## Konkurrenzverwaltung
Bei gleichzeitigem Zugriff mehrerer Benutzer auf identische Datensätze stellt das [DBMS](dbms) die Datenkonsistenz sicher. Dazu werden verschiedene Sperrverfahren (Locking) eingesetzt:

*   **Optimistic Locking**: Das System geht davon aus, dass Konflikte selten auftreten. Benutzer bearbeiten Daten zunächst frei. Erst beim Speichern wird geprüft, ob der Datensatz zwischenzeitlich geändert wurde (z. B. über Zeitstempel oder Versions-IDs). Dies fördert die Produktivität, erhöht jedoch den Implementierungsaufwand für die Konfliktlösung.
*   **Pessimistic Locking**: Das System sperrt einen Datensatz sofort beim Zugriff. Andere Benutzer müssen warten, bis die Sperre aufgehoben wird. Dies garantiert Konsistenz, kann aber bei hoher Auslastung zu Wartezeiten führen.
*   **Release Lock**: Hierbei wird die Sperrlogik direkt im Anwendungscode implementiert, was hohe Flexibilität bei steigendem Entwicklungsaufwand ermöglicht.

## Komponenten der Anwendungsarchitektur
Datenbankanwendungen werden modular aufgebaut, um die Wartbarkeit zu erhöhen. Ein typisches Modell umfasst folgende Elemente:

*   **Benutzeroberfläche (UI)**: Die visuelle Schicht für die Interaktion.
*   **Datenmodul**: Ein Container für nicht-visuelle Komponenten, der die Verbindungslogik bündelt und die Wiederverwendbarkeit fördert.
*   **Datenquelle**: Bindeglied zwischen UI und den Datenmengen; sie synchronisiert die Steuerelemente.
*   **Datenmenge**: Eine abstrakte Repräsentation von Datensätzen (z. B. Tabellen oder Abfrageergebnisse).
*   **Datenverbindung**: Technischer Mechanismus zur Kommunikation mit dem Datenbankserver oder lokalen Dateien.

## Beispiel: Buchungssystem
Ein Reisebüro nutzt ein Multi-User-System. Möchten zwei Mitarbeiter gleichzeitig denselben Flugplatz buchen, greift das **Pessimistic Locking**: Sobald der erste Mitarbeiter den Buchungsvorgang öffnet, wird der Platz gesperrt. Der zweite Mitarbeiter erhält einen Hinweis, dass der Datensatz aktuell bearbeitet wird. Eine Doppelbuchung wird so verhindert.

## Häufige Fehler und Tipps

*   **Zu starre Kopplung**: Die Benutzeroberfläche sollte nicht direkt mit der Datenbankstruktur verdrahtet sein. Schichten wie Datenmodule ermöglichen Anpassungen am Backend, ohne die gesamte Oberfläche ändern zu müssen.
*   **Sperrdauer**: Bei *Pessimistic Locking* sollten Sperrzeiten so kurz wie möglich gehalten werden, um andere Benutzer nicht zu blockieren.
*   **Fehlende Synchronisation**: Korrekt konfigurierte Datenquellen stellen sicher, dass Änderungen in einem Formularfeld sofort in allen verknüpften Elementen sichtbar sind.

## Selbsttest

1. Worin liegt der Hauptunterschied zwischen Stand-Alone- und Multi-User-Systemen?
2. Welche Ebene der ANSI-SPARC-Architektur beschreibt die physische Speicherung?
3. In welchen Szenarien ist *Optimistic Locking* vorteilhafter als *Pessimistic Locking*?
4. Welche Aufgabe übernimmt die Komponente „Datenquelle“?
