---
title: "NoSQL"
description: "NoSQL-Datenbanken sind nicht-relationale Systeme, die für Skalierbarkeit und Flexibilität bei großen Datenmengen entwickelt wurden. Sie umfassen Typen wie dokumentenorientiert, spaltenorientiert, Key-Value Stores und Graph-Datenbanken mit Eventual Consistency."
sources:
  - title: "CAP Twelve Years Later: How the 'Rules' Have Changed"
    url: "https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/"
  - title: "What is NoSQL?"
    url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql"
  - title: "Dynamo: Amazon's Highly Available Key-value Store"
    url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf"
---

**NoSQL** steht für "Not Only SQL" und bezeichnet nicht-relationale Datenbanksysteme, die entwickelt wurden, um die Einschränkungen traditioneller relationaler Datenbanken zu überwinden. Sie bieten gute Skalierbarkeit und Flexibilität, insbesondere bei der Verarbeitung großer und unstrukturierter Datenmengen, und verzichten oft auf strikte Konsistenz zugunsten von Verfügbarkeit und Fehlertoleranz.

## Lernziele

Nach der Lektüre dieses Artikels ist es möglich:

- Die Hauptunterschiede zwischen [SQL](sql)- und NoSQL-Datenbanken zu erklären.
- Die vier Haupttypen von NoSQL-Datenbanken zu benennen und ihre Anwendungsfälle zu beschreiben.
- Das CAP-Theorem und seine Auswirkungen auf verteilte Systeme zu verstehen.
- Eventual Consistency als Alternative zu strikter Konsistenz einzuordnen.
- ACID und BASE als Konzepte für Datenkonsistenz zu kontrastieren.

## Kurzüberblick

NoSQL-Datenbanken sind nicht-relationale Datenbanksysteme, die entwickelt wurden, um die Einschränkungen traditioneller relationaler Datenbanken zu überwinden. Sie bieten gute Skalierbarkeit und Flexibilität, insbesondere bei der Verarbeitung großer und unstrukturierter Datenmengen, und verzichten oft auf strikte Konsistenz zugunsten von Verfügbarkeit und Fehlertoleranz. Im Gegensatz zu [SQL](sql)-Datenbanken, die feste Schemas und tabellarische Strukturen verwenden, erlauben NoSQL-Systeme flexible Datenmodelle, die sich an die Anforderungen moderner Anwendungen anpassen.

## Kontext und Einordnung

NoSQL-Datenbanken entstanden aus dem Bedarf, große Datenmengen effizient zu verarbeiten, wie sie in Anwendungen des Web 2.0, bei Big Data und Echtzeitanalysen auftreten. Das CAP-Theorem, benannt nach Eric Brewer, beschreibt die Trade-offs in verteilten Systemen: Es besagt, dass maximal zwei der drei Eigenschaften Konsistenz (Consistency), Verfügbarkeit (Availability) und Partitionstoleranz (Partition Tolerance) gleichzeitig erreicht werden können. NoSQL-Systeme priorisieren oft Verfügbarkeit und Partitionstoleranz, was zu eventual consistency führt – einer Garantie, dass Datenänderungen asynchron verteilt werden und alle Replikate schließlich konsistent sind.

Im Vergleich zu relationalen Datenbanken, die ACID-Prinzipien (Atomicity, Consistency, Isolation, Durability) folgen, verwenden NoSQL-Systeme BASE (Basically Available, Soft state, Eventual consistency). Dies ermöglicht höhere Skalierbarkeit, birgt aber Risiken für Datenintegrität in kritischen Anwendungen.

## Begriffe und Definitionen

- **Schemafreiheit**: Datenstrukturen sind flexibel und erfordern kein festes Schema, im Gegensatz zu relationalen Tabellen.
- **Horizontale Skalierbarkeit**: Daten können einfach auf mehrere Server verteilt werden, was Sharding ermöglicht.
- **Eventual Consistency**: Konsistenz wird nicht sofort garantiert; Änderungen werden asynchron synchronisiert.
- **CAP-Theorem**: In verteilten Systemen können maximal zwei von Konsistenz, Verfügbarkeit und Partitionstoleranz erreicht werden.
- **ACID vs. BASE**: ACID sichert Transaktionen strikt; BASE priorisiert Verfügbarkeit über sofortige Konsistenz.

## Vorgehen

Bei der Auswahl und Implementierung einer NoSQL-Datenbank sind folgende Schritte hilfreich:

1. Anforderungen analysieren: Welche Datenart (strukturiert, unstrukturiert), Skalierbarkeit und Konsistenzbedarf bestehen?
2. Typ wählen: Dokumentenorientiert für flexible Objekte, spaltenorientiert für Analysen, Key-Value für einfache Zugriffe, Graph für Beziehungen.
3. System evaluieren: Beispiele wie MongoDB für Dokumente, Cassandra für Spalten, Redis für Key-Value, Neo4j für Graphen prüfen.
4. Konsistenzmodell festlegen: Eventual Consistency für viele Anwendungsfälle akzeptieren oder strenge Konsistenz wählen.
5. Prototyp erstellen: Mit Dummy-Daten testen und Skalierbarkeit überprüfen.

## Beispiele

### Dokumentenorientierte Datenbank (MongoDB)

Ein Benutzerprofil könnte als JSON-Dokument gespeichert werden:

```json
{
  "user_id": "12345",
  "name": "Max Mustermann",
  "email": "max@example.com",
  "preferences": {
    "theme": "dark",
    "language": "de"
  },
  "orders": [
    {"order_id": "o001", "amount": 99.99},
    {"order_id": "o002", "amount": 49.50}
  ]
}
```

Dies ermöglicht flexible Abfragen, z. B. nach eingebetteten Objekten wie Bestellungen.

### Spaltenorientierte Datenbank (Cassandra)

Zeitreihe-Daten für Sensoren werden in Spaltenfamilien organisiert:

| row_key | timestamp       | sensor_id | value |
|---------|-----------------|-----------|-------|
| s001   | 2023-01-01T10:00| s001      | 23.5  |
| s001   | 2023-01-01T10:05| s001      | 24.0  |

Effizient für Analysen großer Datenmengen.

### Key-Value Store (Redis)

Einfache Zugriffe: Schlüssel "session:123" mit Wert {"user": "max", "last_login": "2023-01-01"}.

### Graph-Datenbank (Neo4j)

Beziehungen modellieren: Knoten "Person" (Max) verbunden mit "Freund" (Anna) via Edge "kennt".

## Häufige Fehler und Tipps

- **Falsche Typwahl**: Nicht dokumentenorientiert für relationale Daten verwenden; stattdessen Typ an Datenstruktur anpassen.
- **Konsistenz übersehen**: Eventual Consistency für Finanzdaten vermeiden; ACID-ähnliche NoSQL-Varianten prüfen.
- **Skalierbarkeit ignorieren**: Ohne Sharding-Tests kann Performance leiden; frühzeitig verteilte Setups testen.
- **Tipp**: Kleine Prototypen erleichtern die Erprobung und Dokumentation von CAP-Trade-offs.

## Selbsttest

1. Welche drei Eigenschaften beschreibt das CAP-Theorem?
2. Nenne zwei Unterschiede zwischen ACID und BASE.
3. Für welchen Anwendungsfall eignet sich ein Key-Value Store am besten?
4. Was bedeutet Eventual Consistency?
5. Welcher NoSQL-Typ speichert Beziehungen explizit?
6. Warum sind NoSQL-Datenbanken schemafrei?

## Weiterführendes

Weitere Informationen zu [Datenbank](datenbank)-Systemen und Vergleichen mit [SQL](sql) finden sich in den entsprechenden Artikeln. Für praktische Implementierungen sind die Dokumentationen von MongoDB oder Cassandra empfehlenswert.
