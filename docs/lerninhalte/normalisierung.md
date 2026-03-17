---
title: "Normalisierung"
description: "Normalisierung ist eine Strategie zur Beseitigung von Redundanz in relationalen Datenbanken durch Überführung in Normalformen wie 1NF, 2NF und 3NF. Sie verhindert Anomalien und ermöglicht spezialisierte Abfragen."
sources:
  - title: "Was ist Datenbanknormalisierung?"
    url: "https://www.ibm.com/de-de/think/topics/database-normalization"
  - title: "Relationale Datenbanken - Kapitel 4: Der Königsweg: Normalisierung"
    url: "https://www.hdm-stuttgart.de/~riekert/lehre/db-kelz/chap4.htm"
  - title: "Normalisierung (Datenbank) - 1NF, 2NF, 3NF erklärt"
    url: "https://ausbildung-in-der-it.de/lexikon/normalisierung-datenbank"
---

**Normalisierung** bezeichnet eine Methode zur Strukturierung relationaler Datenbanken, um Redundanzen zu minimieren und Datenintegrität zu gewährleisten. Durch die schrittweise Anwendung von Normalformen werden Anomalien vermieden und effiziente Abfragen ermöglicht.

## Lernziele

Dieser Artikel vermittelt Kenntnisse zu:

- den Prinzipien der Normalisierung in relationalen Datenbanken.
- der Identifizierung und Klassifizierung funktionaler Abhängigkeiten.
- der Anwendung der Normalformen von der 1NF bis zur 3NF.
- der Erkennung und Behebung von Anomalien durch Normalisierung.
- den Vor- und Nachteilen der Normalisierung.

## Kontext und Einordnung

Normalisierung findet Anwendung im Rahmen des [relationalen Datenmodells](relationenmodell), das Daten in Tabellen organisiert. Sie baut auf dem Konzept der [funktionalen Abhängigkeiten](funktionale-abhaengigkeiten) auf und zielt darauf ab, eine Datenbank so zu gestalten, dass Änderungen an den Daten ohne unerwünschte Nebeneffekte möglich sind. Der umgekehrte Prozess, die bewusste Einführung von Redundanzen zur Verbesserung der Abfrageleistung, wird als Denormalisierung bezeichnet.

## Funktionale Abhängigkeiten

Funktionale Abhängigkeiten beschreiben Beziehungen zwischen Attributen in einer Tabelle. Ein Attribut B ist funktional abhängig von einem Attribut A (geschrieben als A → B), wenn jedem Wert von A genau ein Wert von B zugeordnet ist.

- **Vollständige funktionale Abhängigkeit**: Ein Attribut ist vollständig abhängig vom gesamten Primärschlüssel, nicht nur von einem Teil davon.
- **Partielle funktionale Abhängigkeit**: Ein Attribut ist abhängig von einem Teil des zusammengesetzten Primärschlüssels.
- **Transitive funktionale Abhängigkeit**: Ein Attribut ist indirekt über ein anderes Attribut vom Primärschlüssel abhängig.

## Normalformen

Die Normalisierung erfolgt schrittweise durch die Überführung von Tabellen in höhere Normalformen. Jede Normalform baut auf der vorherigen auf.

### 1. Normalform (1NF)

Eine Tabelle befindet sich in der 1NF, wenn alle Attribute atomare Werte enthalten, das heißt, keine Wiederholgruppen oder mehrwertigen Attribute vorhanden sind. Jede Zeile muss einen definierten Primärschlüssel haben, der die Zeile eindeutig identifiziert.

### 2. Normalform (2NF)

Eine Tabelle in 1NF befindet sich in der 2NF, wenn jedes Nichtschlüsselattribut vollständig funktional abhängig vom Primärschlüssel ist. Partielle Abhängigkeiten werden durch Auslagerung in separate Tabellen beseitigt.

### 3. Normalform (3NF)

Eine Tabelle in 2NF befindet sich in der 3NF, wenn kein Nichtschlüsselattribut transitiv funktional abhängig vom Primärschlüssel ist. Transitive Abhängigkeiten werden durch weitere Tabellenaufteilungen entfernt.

Für fortgeschrittene Anwendungen existiert die Boyce-Codd-Normalform (BCNF), die noch strengere Regeln für Abhängigkeiten definiert.

## Anomalien

Ohne Normalisierung können in Datenbanken Anomalien auftreten, die die Datenintegrität gefährden:

- **Einfüge-Anomalie**: Neue Daten können nicht eingefügt werden, ohne redundante Informationen zu erzeugen.
- **Aktualisierungs-Anomalie**: Änderungen an einem Datensatz erfordern Aktualisierungen in mehreren Zeilen, was zu Inkonsistenzen führen kann.
- **Lösch-Anomalie**: Das Löschen eines Datensatzes entfernt unbeabsichtigt auch andere Informationen.

Normalisierung verhindert diese Anomalien durch Eliminierung von Redundanzen.

## Vorgehen

Die Normalisierung erfolgt in folgenden Schritten:

1. Identifizierung des Primärschlüssels für jede Tabelle.
2. Analyse funktionaler Abhängigkeiten.
3. Schrittweise Überführung in höhere Normalformen durch Tabellenaufteilung.
4. Prüfung auf Anomalien und Optimierung der Abfrageleistung, gegebenenfalls Denormalisierung.

## Beispiele

Ein Beispiel verdeutlicht den Prozess der Normalisierung anhand einer Ausgangstabelle mit Redundanzen. Die Schritte führen zur 1NF, 2NF und 3NF.

### Ausgangslage

| R.-Nr. | R.-Name | P.-Nr. | P.-Name | Anz. | Art.-Nr. | Artikel |
|--------|---------|--------|---------|------|----------|---------|
| 1      | Müller  | 1      | Schraube| 10   | 100      | Schraube|
| 1      | Müller  | 2      | Mutter  | 5    | 101      | Mutter  |
| 2      | Meier   | 1      | Schraube| 8    | 100      | Schraube|
| 2      | Meier   | 3      | Bolzen  | 12   | 102      | Bolzen  |

### 1. Normalform (1NF)

Mehrwertige Daten werden aufgespalten, und Spalten auf Gleichartigkeit geprüft.

| R.-Nr. | R.-Name | P.-Nr. | P.-Name | Anz. | Art.-Nr. | Artikel |
|--------|---------|--------|---------|------|----------|---------|
| 1      | Müller  | 1      | Schraube| 10   | 100      | Schraube|
| 1      | Müller  | 2      | Mutter  | 5    | 101      | Mutter  |
| 2      | Meier   | 1      | Schraube| 8    | 100      | Schraube|
| 2      | Meier   | 3      | Bolzen  | 12   | 102      | Bolzen  |

### 2. Normalform (2NF)

Spalten, die nicht voll funktional abhängig sind, werden ausgelagert. Die Spalte "Anz." ist nur von "P.-Nr." abhängig, nicht von "R.-Nr.", daher werden "P.-Nr." und abhängige Spalten ausgelagert.

| R.-Nr. | R.-Name |
|--------|---------|
| 1      | Müller  |
| 2      | Meier   |

| P.-Nr. | P.-Name | Anz. | Art.-Nr. | Artikel |
|--------|---------|------|----------|---------|
| 1      | Schraube| 10   | 100      | Schraube|
| 2      | Mutter  | 5    | 101      | Mutter  |
| 3      | Bolzen  | 12   | 102      | Bolzen  |

### 3. Normalform (3NF)

Spalten, die von einem Nichtschlüsselattribut abhängig sind, werden ausgelagert. "Artikel" ist von "Art.-Nr." abhängig, wobei "Art.-Nr." kein Primärschlüssel ist.

| R.-Nr. | R.-Name |
|--------|---------|
| 1      | Müller  |
| 2      | Meier   |

| P.-Nr. | P.-Name | Anz. | Art.-Nr. |
|--------|---------|------|----------|
| 1      | Schraube| 10   | 100      |
| 2      | Mutter  | 5    | 101      |
| 3      | Bolzen  | 12   | 102      |

| Art.-Nr. | Artikel |
|----------|---------|
| 100      | Schraube|
| 101      | Mutter  |
| 102      | Bolzen  |

## Häufige Fehler und Tipps

- Nicht X: Redundanzen ignorieren, um vermeintlich einfachere Abfragen zu ermöglichen; stattdessen Y: Normalisierung konsequent anwenden und bei Bedarf selektiv denormalisieren.
- Nicht X: Transitive Abhängigkeiten übersehen; stattdessen Y: Abhängigkeiten systematisch analysieren.
- Tipp: Bei großen Datenmengen die Performance nach Normalisierung testen, da Joins zusätzliche Rechenzeit erfordern können.

## Selbsttest

1. Was ist der Hauptzweck der Normalisierung?
2. Erklären Sie den Unterschied zwischen partieller und transitiver Abhängigkeit.
3. Welche Anomalie tritt auf, wenn Daten redundant gespeichert sind?
4. Warum kann Normalisierung die Abfrageleistung beeinträchtigen?
5. Nennen Sie die drei Haupt-Normalformen und ihre Kernregeln.
6. Wann ist eine Tabelle in der 3NF?
