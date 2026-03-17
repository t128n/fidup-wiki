---
title: "SQL-Datenbanken"
description: "SQL-Datenbanken sind relationale Datenbanksysteme, die strukturierte Daten in Tabellen organisieren und mit ACID-Eigenschaften für zuverlässige Transaktionen sorgen. Sie eignen sich für komplexe Abfragen in Geschäftsumgebungen, bieten aber begrenzte horizontale Skalierbarkeit."
sources:
  - title: "PostgreSQL: Documentation: 18: 2.2. Concepts"
    url: "https://www.postgresql.org/docs/current/tutorial-concepts.html"
  - title: "Vergleich der relationalen und NoSQL-Daten - .NET"
    url: "https://learn.microsoft.com/de-de/dotnet/architecture/cloud-native/relational-vs-nosql-data"
  - title: "Oracle Database 18: Transactions"
    url: "https://docs.oracle.com/en/database/oracle/oracle-database/18/cncpt/transactions.html"
---

**SQL-Datenbanken** sind relationale Datenbanksysteme, die Daten in Tabellen mit festen Schemata organisieren. Sie nutzen die Structured Query Language (SQL) für Abfragen und Manipulationen, gewährleisten durch ACID-Eigenschaften die Zuverlässigkeit von Transaktionen und finden Anwendung in Bereichen wie Finanzwesen und Unternehmenssoftware.

## Lernziele
Dieser Artikel vermittelt Kenntnisse über

- das relationale Modell und die Rolle von SQL in Datenbanken,
- die ACID-Eigenschaften und ihre Bedeutung für Transaktionen,
- Unterschiede zwischen SQL-Datenbanken und [NoSQL](no-sql)-Datenbanken,
- typische Anwendungsfälle und Herausforderungen.

## Kurzüberblick
SQL-Datenbanken basieren auf dem relationalen Modell, bei dem Daten in Tabellen mit Zeilen und Spalten gespeichert werden. Ein festes Schema definiert die Struktur, und SQL ermöglicht standardisierte Abfragen. Sie bieten starke Konsistenz durch ACID-Eigenschaften, eignen sich aber weniger für horizontale Skalierung als [NoSQL](no-sql)-Systeme. Hauptanwendungen liegen in Geschäftssystemen, wo komplexe Datenbeziehungen und Transaktionen erforderlich sind.

## Kontext und Einordnung
Relationale Datenbanken entstanden in den 1970er Jahren aus dem Bedarf nach strukturierten Datenverwaltung in Unternehmen. Im Gegensatz zu hierarchischen oder netzwerkartigen Modellen ermöglicht das relationale Modell flexible Abfragen über mehrere Tabellen. SQL-Datenbanken sind Teil der RDBMS-Familie (Relational Database Management Systems) und werden in traditionellen Formen wie MySQL oder PostgreSQL sowie modernen NewSQL-Varianten wie CockroachDB verwendet, die horizontale Skalierbarkeit mit SQL-Kompatibilität kombinieren.

## Begriffe und Definitionen

- **Relationales Modell**: Datenorganisationsform, bei der Informationen in Tabellen (Relationen) gespeichert werden, die durch Schlüsselbeziehungen verknüpft sind.
- **Schema**: Vordefinierte Struktur einer Datenbank, einschließlich Tabellen, Spalten und Datentypen.
- **Transaktion**: Atomare Einheit von Datenbankoperationen, die entweder vollständig ausgeführt oder rückgängig gemacht wird.
- **Normalisierung**: Prozess zur Reduzierung von Redundanzen durch Aufteilung von Daten in separate Tabellen.
- **Indizierung**: Erstellung von Indexstrukturen zur Beschleunigung von Abfragen.

## Vorgehen

1. **Schema entwerfen**: Tabellen mit Spalten und Datentypen werden definiert, basierend auf den Datenanforderungen.
2. **Daten normalisieren**: Daten werden aufgeteilt, um Redundanzen zu vermeiden und Integrität zu sichern.
3. **Indizes anlegen**: Indizes für häufig abgefragte Spalten werden hinzugefügt, um die Performance zu verbessern.
4. **Transaktionen steuern**: COMMIT wird verwendet, um Änderungen zu speichern, oder ROLLBACK, um Änderungen rückgängig zu machen.

## Beispiele
Ein einfaches Beispiel für eine Kundendatenbank: Eine Tabelle für Kunden mit Spalten wie ID, Name und E-Mail wird erstellt. Eine Abfrage wie `SELECT Name FROM Kunden WHERE ID = 1;` ruft den Namen ab. Bei einer Banküberweisung wird eine Transaktion verwendet, um den Kontostand zu aktualisieren – entweder beide Konten ändern oder keines, um Atomarität zu gewährleisten.

## Häufige Fehler und Tipps

- **Nicht normalisieren**: Führt zu Redundanzen und Inkonsistenzen; stattdessen Daten in separate Tabellen aufteilen und mit Fremdschlüsseln verknüpfen.
- **Übermäßige Indizierung**: Verlangsamt Schreiboperationen; Indizierung sollte sich auf Spalten mit hohem Leseaufkommen beschränken.
- **Ignorieren von Transaktionen**: Kann Datenverluste verursachen; ACID-Prinzipien stets beachten, besonders bei finanziellen Daten.
- **Falsche Skalierung**: Vertikale Skalierung reicht oft nicht; NewSQL für größere Datenmengen in Betracht ziehen.

## Weiterführendes
Für tiefergehende Kenntnisse in SQL-Abfragen empfiehlt sich das Studium der [Normalisierung](normalisierung)-Prinzipien. Vergleiche mit [NoSQL](no-sql)-Systemen helfen bei der Auswahl des geeigneten Datenbanksystems.
