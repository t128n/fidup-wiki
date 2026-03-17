---
title: "SQL"
description: "SQL ist eine standardisierte Abfragesprache zur Verwaltung relationaler Datenbanken. Sie ermöglicht die Definition von Tabellenstrukturen, Datentypen, Integritätsregeln sowie die Durchführung von CRUD-Operationen und komplexen Abfragen mit Joins und Aggregatfunktionen. Beispiele für Datenbanksysteme, die SQL unterstützen, sind MySQL und PostgreSQL."
sources:
  - title: "The SQL Standard - ISO/IEC 9075:2023 (ANSI X3.135)"
    url: "https://blog.ansi.org/ansi/sql-standard-iso-iec-9075-2023-ansi-x3-135/"
  - title: "SQL Standards"
    url: "https://docs.oracle.com/en/database/oracle/oracle-database/18/sqlrf/SQL-Standards.html"
  - title: "Primary and foreign key constraints - SQL Server"
    url: "https://learn.microsoft.com/en-us/sql/relational-databases/tables/primary-and-foreign-key-constraints?view=sql-server-ver17"
---

**SQL** ist eine standardisierte Abfragesprache zur Verwaltung relationaler Datenbanken. Sie basiert auf dem relationalen Modell, das Daten in Tabellen mit fester Struktur organisiert und Beziehungen zwischen diesen Tabellen durch Schlüssel herstellt. SQL unterstützt verschiedene Datentypen, Integritätsregeln sowie Operationen zur Datenmanipulation und -abfrage. Zu den gängigen Datenbanksystemen, die SQL verwenden, gehören MySQL, PostgreSQL und Oracle. Der aktuelle Standard ist ISO/IEC 9075:2023, der ursprünglich auf ANSI X3.135-1986 zurückgeht.

## Lernziele

Dieser Artikel vermittelt Kenntnisse zu:

- Den Grundlagen des relationalen Modells und der Rolle von SQL als Abfragesprache.
- Der korrekten Wahl von Datentypen in SQL und ihren Eigenschaften.
- Der Anwendung von Integritätsregeln wie Primär- und Fremdschlüssel sowie referenzieller Integrität.
- Der Durchführung von CRUD-Operationen mit SQL-Befehlen.
- Der Formulierung komplexer Abfragen mit Joins, Unterabfragen und Aggregatfunktionen.
- Der Vermeidung häufiger Fehler bei der Verwendung von SQL und der Berücksichtigung von Performance-Optimierungen.

## Kurzüberblick

SQL ermöglicht die Interaktion mit relationalen Datenbanken durch standardisierte Befehle. Sie unterteilt sich in DDL (Data Definition Language) für die Strukturierung von Tabellen, DML (Data Manipulation Language) für die Datenänderung und DQL (Data Query Language) für Abfragen. Zentrale Konzepte sind Datentypen, Schlüssel zur Sicherung der Datenintegrität, Joins zur Verknüpfung von Tabellen sowie Aggregatfunktionen für Berechnungen über Datenmengen. SQL arbeitet mit Datenmengen (Sets) statt mit einzelnen Datensätzen und bietet automatische Navigation in Beziehungen.

## Kontext und Einordnung

Relationale Datenbanken speichern Daten in Tabellen mit fester Struktur, wobei Zeilen Datensätze und Spalten Attribute darstellen. Beziehungen zwischen Tabellen werden durch Schlüssel hergestellt, die auf dem relationalen Modell von Edgar F. Codd basieren. SQL dient als standardisierte Schnittstelle (data sublanguage) zu diesen Datenbanken und unterscheidet sich von allgemeinen Programmiersprachen, da sie logische Operationen auf Datenmengen ermöglicht, ohne Implementierungsdetails zu berücksichtigen. Gängige Datenbanksysteme wie [DBMS](dbms) implementieren SQL mit proprietären Erweiterungen, bleiben aber kompatibel zum Standard.

## Begriffe und Definitionen

### Datentypen in SQL

SQL definiert Datentypen zur Speicherung unterschiedlicher Datenarten, um Speichereffizienz und Integrität zu gewährleisten:

- **Boolean:** Wahrheitswerte TRUE oder FALSE.
- **Integer:** Ganzzahlen wie INT oder BIGINT.
- **Float/Double:** Gleitkommazahlen für approximative Berechnungen (z. B. bei Messwerten).
- **Decimal/Numeric:** Festkommazahlen für präzise Berechnungen (z. B. Finanzdaten).
- **Date/Time:** Datums- und Zeitwerte wie DATE, TIMESTAMP oder TIME.
- **Char/Varchar:** Texte fester (CHAR) oder variabler Länge (VARCHAR).
- **Text/CLOB:** Große Textmengen (Character Large Objects).
- **BLOB:** Binäre Daten wie Bilder (Binary Large Objects).
- **Geometry:** Für Geodaten, nicht in allen [DBMS](dbms) verfügbar.

Die Wahl des Datentyps beeinflusst die Genauigkeit und Leistung; DECIMAL/Numeric ist präziser als Float/Double, welches Rundungsfehler verursachen kann. VARCHAR ist flexibler als CHAR.

### Integrität und Schlüssel

Integritätsregeln sichern die Konsistenz der Daten.

- **Primärschlüssel (Primary Key):** Eine Spalte oder Kombination, die jeden Datensatz eindeutig identifiziert. Er erzwingt Entitätsintegrität, alle Spalten müssen NOT NULL sein. Der Datenbankserver erstellt automatisch einen Index für Leistungsoptimierung.
- **Fremdschlüssel (Foreign Key):** Eine Spalte, die auf den Primärschlüssel einer anderen Tabelle verweist. Er stellt referenzielle Integrität her und ermöglicht Beziehungen.
- **Referenzielle Integrität:** Regelwerk, das Beziehungen gültig hält. Optionen wie CASCADE propagieren Änderungen (z. B. ON UPDATE CASCADE), aber nicht mit TIMESTAMP-Spalten. Alternativen sind NO ACTION (Fehler), SET NULL oder SET DEFAULT. Fremdschlüssel sollten oft manuell indexiert werden, um Join-Leistung zu verbessern.

## Vorgehen

### Tabellen erstellen und ändern (DDL)

Tabellenstrukturen werden mit CREATE TABLE definiert, Datentypen und Schlüssel integriert. Änderungen erfolgen mit ALTER TABLE.

### Daten manipulieren (DML)

CRUD-Operationen umfassen:

- **Create:** INSERT INTO tabelle (spalten) VALUES (werte);
- **Read:** SELECT spalten FROM tabelle WHERE bedingung;
- **Update:** UPDATE tabelle SET spalte = wert WHERE bedingung;
- **Delete:** DELETE FROM tabelle WHERE bedingung;

### Abfragen formulieren (DQL)

SELECT-Anweisungen mit WHERE filtern Daten, ORDER BY sortiert, GROUP BY gruppiert mit Aggregaten, HAVING filtert Gruppen.

### Komplexe Abfragen

Unterabfragen sind verschachtelte SELECTs. Joins verknüpfen Tabellen: INNER JOIN für Schnittmengen, LEFT JOIN für alle linken Zeilen (mit NULL), RIGHT JOIN für rechte, FULL JOIN für alle, CROSS JOIN für kartesisches Produkt.

### Indizes für Performance

CREATE INDEX idx_name ON tabelle (spalte); beschleunigt Abfragen, verlangsamt aber Schreibvorgänge. Sparsam einsetzen, besonders bei Fremdschlüsseln.

## Beispiele

### Tabellenerstellung mit Schlüsseln

```sql
CREATE TABLE kunden (
  kunden_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100)
);

CREATE TABLE bestellungen (
  bestell_id INT PRIMARY KEY,
  kunden_id INT,
  produkt VARCHAR(100),
  menge INT,
  FOREIGN KEY (kunden_id) REFERENCES kunden (kunden_id) ON DELETE CASCADE
);
```

Dies definiert Tabellen mit Primär- und Fremdschlüssel, CASCADE beim Löschen.

### CRUD-Operationen

Einfügen: INSERT INTO kunden (kunden_id, name, email) VALUES (1, 'Max Mustermann', 'max@example.com');

Abfragen: SELECT name FROM kunden WHERE kunden_id = 1;

Aktualisieren: UPDATE kunden SET email = 'neu@example.com' WHERE kunden_id = 1;

Löschen: DELETE FROM kunden WHERE kunden_id = 1;

### Join-Abfrage

SELECT k.name, b.produkt FROM kunden k INNER JOIN bestellungen b ON k.kunden_id = b.kunden_id;

Gibt Namen und Produkte übereinstimmender Datensätze zurück.

### Aggregatfunktion

SELECT AVG(menge) AS durchschnittsmenge FROM bestellungen GROUP BY produkt HAVING AVG(menge) > 5;

Berechnet Durchschnittsmenge pro Produkt, filtert Gruppen über 5.

### Vergleichsoperatoren

| Operator | Bedeutung | Beispiel |
|----------|-----------|----------|
| = | Gleich | WHERE id = 1 |
| <> oder != | Ungleich | WHERE status <> 'aktiv' |
| < | Kleiner | WHERE alter < 30 |
| > | Größer | WHERE preis > 100 |
| <= | Kleiner oder gleich | WHERE menge <= 10 |
| >= | Größer oder gleich | WHERE wert >= 50 |

Logische Operatoren: AND, OR, NOT. LIKE für Muster ('A%'), BETWEEN für Bereiche, IN für Listen.

## Häufige Fehler und Tipps

- **NULL in Aggregaten:** SUM, AVG, COUNT(spalte) ignorieren NULL; COUNT(*) zählt alle. Für NULL-Behandlung eignet sich COALESCE.
- **Joins ohne Index:** Langsame Abfragen; Fremdschlüssel sollten indiziert werden.
- **CASCADE mit Timestamps:** Nicht möglich; mögliche Optionen sind SET NULL oder NO ACTION.
- **Datentyp-Fehlwahl:** Float für Geld führt zu Rundungsfehlern; für solche Fälle ist DECIMAL geeignet.
- **Performance:** Indizes beschleunigen Lesezugriffe, verlangsamen Schreibvorgänge. Mit EXPLAIN lässt sich die Leistung prüfen.
- **Syntaxfehler:** Semikolon am Ende, korrekte Klammern bei Funktionen.
- **Gruppierung:** WHERE filtert vor GROUP BY, HAVING danach.

## Selbsttest

1. Was ist der Unterschied zwischen INNER JOIN und LEFT JOIN?
2. Welcher Datentyp eignet sich für Geldbeträge und warum?
3. Wie werden CRUD-Operationen mit Beispielen erklärt?
4. Wann wird referenzielle Integrität verletzt?
5. Wie wird die Summe einer Spalte mit Bedingung berechnet?
6. Was macht COUNT(*) im Gegensatz zu COUNT(spalte)?

## Weiterführendes

Für praktische Übungen empfehlen sich Tutorials in [SQL-Datenbanken](sql-datenbanken) wie MySQL oder PostgreSQL. Vertiefung in fortgeschrittene Themen wie Stored Procedures oder Views. Der Standard ISO/IEC 9075:2023 bietet detaillierte Spezifikationen.
