---
title: "DBMS"
description: "Ein Datenbankmanagementsystem (DBMS) ist die zentrale Software zur Verwaltung, Speicherung und Abfrage von Daten, die Sicherheit und Konsistenz durch ACID-Prinzipien garantiert."
sources:
  - title: "Datenbankmanagementsystem (DBMS) • Definition"
    url: "https://wirtschaftslexikon.gabler.de/definition/datenbankmanagementsystem-dbms-28184"
  - title: "ANSI-3-Ebenenmodell Definition & Erklärung"
    url: "https://www.datenbanken-verstehen.de/lexikon/ansi-drei-ebenenmodell/"
  - title: "Was ist ACID?"
    url: "https://www.bigdata-insider.de/was-ist-acid-a-776182/"
---

Ein **DBMS** (Datenbankmanagementsystem) ist eine Software, die als Schnittstelle zwischen Anwendern, Anwendungsprogrammen und den physisch gespeicherten Daten fungiert. Es stellt Methoden zur effizienten Erstellung, Verwaltung und Nutzung von Datenbeständen bereit. Das DBMS verbirgt dabei die technische Speicherstruktur vor dem Nutzer. Zusammen mit der Datenbank bildet das DBMS ein vollständiges Datenbanksystem (DBS).

## Lernziele
Nach der Lektüre dieses Artikels können folgende Aspekte erläutert werden:

* Definition und Kernaufgaben eines DBMS
* Schichten der ANSI-SPARC-Architektur
* Bedeutung der ACID-Prinzipien für die Transaktionssicherheit
* Unterschiede zwischen relationalen und nicht-relationalen Systemen
* Mechanismen zur Datensicherheit und Integrität

## Aufgaben und Funktionsweise
Ein DBMS kontrolliert sämtliche Zugriffe auf die Datenbank. Zu den primären Aufgaben gehören die Datenspeicherung, das Transaktionsmanagement sowie die Sicherstellung der Datenkonsistenz. Durch Abstraktion ermöglicht es eine logische Sicht auf Informationen, die unabhängig von der physischen Ablage auf Speichermedien bleibt.

In modernen IT-Infrastrukturen bildet das DBMS die Grundlage der Datenverarbeitung. Es koordiniert den gleichzeitigen Zugriff vieler Nutzer (*Multi-User-Betrieb*), verhindert Konflikte bei Schreibvorgängen und schützt vor Datenverlust. Während in klassischen Unternehmensanwendungen meist relationale Systeme zum Einsatz kommen, nutzen Big-Data-Szenarien oft NoSQL-Lösungen für eine höhere Skalierbarkeit.

## Begriffe und Definitionen

* **Datenunabhängigkeit:** Trennung von Datenstruktur und Anwendungsprogrammen. Änderungen an der physischen Speicherung erfordern keine Anpassung der Software.
* **Transaktion:** Logische Einheit von Arbeitsschritten, die entweder vollständig oder gar nicht ausgeführt wird.
* **Schema:** Beschreibung der logischen Struktur der Daten (z. B. Tabellen, Spalten, Beziehungen).

## Die ANSI-SPARC-Architektur
Um Datenunabhängigkeit zu erreichen, wird das ANSI-SPARC-Modell (Drei-Ebenen-Schema-Architektur) eingesetzt. Es unterteilt die Beschreibung der Daten in drei Schichten:

1. **Externe Ebene (Sichten):** Individuelle Sicht einzelner Benutzer oder Anwendungen auf Teile der Daten.
2. **Konzeptionelle Ebene (Logische Ebene):** Beschreibung der gesamten logischen Struktur der Datenbank (Inhalte und Beziehungen), unabhängig von der technischen Speicherung.
3. **Interne Ebene (Physische Ebene):** Technische Umsetzung der Speicherung (Art und Ort der Datenablage auf dem Speichermedium).

Durch diesen Aufbau ist die [ANSI-SPARC-Architektur](ansi-sparc-architektur) der Standard für flexible und wartbare Datenbanksysteme.

## Transaktionssicherheit durch ACID
Zur Gewährleistung der Zuverlässigkeit bei Datenoperationen erfüllen DBMS die ACID-Eigenschaften. Dies ist essentiell, wenn mehrere Prozesse gleichzeitig auf identische Informationen zugreifen.

| Eigenschaft | Bedeutung | Beschreibung |
| :--- | :--- | :--- |
| **A**tomicity | Atomarität | Eine Transaktion wird vollständig oder gar nicht ausgeführt („Alles-oder-nichts-Prinzip“). |
| **C**onsistency | Konsistenz | Die Datenbank muss nach Abschluss einer Transaktion in einem gültigen Zustand sein. |
| **I**solation | Isolation | Gleichzeitige Transaktionen dürfen sich nicht gegenseitig beeinflussen. |
| **D**urability | Dauerhaftigkeit | Erfolgreiche Änderungen bleiben auch bei Systemfehlern dauerhaft erhalten. |

## Interaktion und Datenabfrage
Ein DBMS stellt Schnittstellen für die Interaktion mit Daten bereit. In relationalen Systemen erfolgt dies primär über die Abfragesprache [SQL](sql).

### Ablauf einer Datenabfrage

1. **Analyse:** Das DBMS prüft die Syntax der Anfrage auf Korrektheit.
2. **Optimierung:** Der Query Optimizer ermittelt den effizientesten Zugriffspfad.
3. **Ausführung:** Die Daten werden von der internen Ebene gelesen.
4. **Bereitstellung:** Das Ergebnis wird über die externe Ebene an den Nutzer zurückgegeben.

## Systemarten
Je nach Anwendungsfall kommen unterschiedliche DBMS-Typen zum Einsatz:

* **Relational (SQL):** PostgreSQL oder MySQL für strukturierte Geschäftsdaten wie Buchhaltung oder Kundenlisten.
* **Dokumentenorientiert (NoSQL):** MongoDB für flexible, JSON-ähnliche Strukturen, beispielsweise bei Web-Inhalten.
* **In-Memory:** Redis zur Speicherung im Hauptspeicher für extrem schnelle Zugriffszeiten (Caching).

## Typische Fehler und Best Practices

* **Begriffsverwechslung:** DBMS und Datenbank werden oft synonym verwendet.
  * *Korrekt:* Das DBMS ist die Software (der Motor), die Datenbank die strukturierte Sammlung der Daten (der Kraftstoff).
* **Fehlende Indizes:** Abfragen bei großen Datenmengen ohne Indexierung.
  * *Lösung:* Indizes beschleunigen Suchvorgänge massiv, verlangsamen jedoch Schreiboperationen. Einsatz gezielt bei häufig genutzten Suchfeldern.
* **Fehlende referenzielle Integrität:** Vernachlässigung von Beziehungen zwischen Datensätzen.
  * *Lösung:* Fremdschlüsselbeziehungen sollten direkt im DBMS definiert werden, um logische Fehler wie "verwaiste" Datensätze zu vermeiden.

## Selbsttest

1. Welchen Vorteil bietet die Trennung von konzeptioneller und interner Ebene?
2. Wie verhält sich eine Transaktion gemäß dem Atomaritäts-Prinzip bei einem Systemabsturz?
3. In welchen Szenarien ist ein NoSQL-System gegenüber einer SQL-Datenbank im Vorteil?
4. Welches ACID-Prinzip stellt sicher, dass Buchungen bei gleichzeitigem Zugriff korrekt verarbeitet werden?
