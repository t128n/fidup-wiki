---
title: "Relationenmodell"
description: "Das Relationenmodell beschreibt die Organisation von Daten in tabellarischer Form und ihre Beziehungen zueinander, basierend auf den Arbeiten von E.F. Codd."
sources:
  - title: "Relationenmodell • Definition | Gabler Wirtschaftslexikon"
    url: "https://wirtschaftslexikon.gabler.de/definition/relationenmodell-44637"
  - title: "Was ist eine relationale Datenbank? | Oracle Deutschland"
    url: "https://www.oracle.com/de/database/what-is-a-relational-database/"
  - title: "inf-schule | Vom ER- zum Relationalen Datenmodell"
    url: "https://inf-schule.de/datenbanksysteme/ermodelle/datenmodell"
---

Das **Relationenmodell** folgt auf das [Entity-Relationship-Modell](entity-relationship-modell) in der Datenbankentwicklung. Es wandelt die darin definierten Strukturen in eine tabellenbasierte Form um, die in relationalen Datenbanken gespeichert und verarbeitet werden kann.

## Lernziele

Der Artikel vermittelt folgende Kenntnisse:

- Die Grundkonzepte des Relationenmodells, wie Relationen, Tupel und Attribute, erklären.
- Den Unterschied zwischen dem Entity-Relationship-Modell und dem Relationenmodell beschreiben.
- Beziehungstypen wie 1:1, 1:n und n:m in tabellarische Strukturen umwandeln.
- Die Bedeutung von Primär- und Fremdschlüsseln sowie atomaren Attributen erkennen.

## Kurzüberblick

Das Relationenmodell, entwickelt von E.F. Codd im Jahr 1970, organisiert Daten in Form von Tabellen, die als Relationen bezeichnet werden. Jede Tabelle besteht aus Zeilen, den Tupeln, und Spalten, den Attributen. Beziehungen zwischen Tabellen werden durch Fremdschlüssel hergestellt. Dies ermöglicht eine effiziente Speicherung und Abfrage von Daten in relationalen Datenbanken.

## Kontext und Einordnung

Das Relationenmodell baut auf dem konzeptionellen [Entity-Relationship-Modell](entity-relationship-modell) auf, das Datenstrukturen grafisch darstellt. Während das Entity-Relationship-Modell Entitäten und ihre Beziehungen visualisiert, übersetzt das Relationenmodell diese in eine logische, tabellenbasierte Form. Diese Transformation ist erforderlich, um Daten in Systemen wie MySQL oder PostgreSQL zu verwalten. Das Modell unterstützt die Normalisierung, um Redundanzen zu vermeiden und Datenintegrität zu wahren.

## Begriffe und Definitionen

- **Relation (Tabelle)**: Eine mathematische Entsprechung einer Tabelle, bestehend aus Tupeln mit identischen Attributen.
- **Tupel (Datensatz)**: Eine Zeile in einer Relation, die eine Entität repräsentiert.
- **Attribut (Spalte)**: Eine Eigenschaft der Entitäten, dargestellt als Spaltenüberschrift.
- **Primärschlüssel**: Ein eindeutiger Identifikator für jedes Tupel in einer Relation, oft unterstrichen notiert.
- **Fremdschlüssel**: Ein Attribut, das auf den Primärschlüssel einer anderen Relation verweist, um Beziehungen herzustellen.
- **Atomare Attribute**: Attribute, die nicht weiter zerlegbar sind, z. B. eine einzelne Zahl oder ein Text ohne Unterstrukturen.

## Vorgehen

Die Transformation vom Entity-Relationship-Modell zum Relationenmodell erfolgt in Schritten:

1. **Entitätstypen zu Tabellen umwandeln**: Jeder Entitätstyp wird zu einer Tabelle mit Attributen als Spalten.
2. **Primärschlüssel definieren**: Wähle einen eindeutigen Schlüssel für jede Tabelle.
3. **Beziehungen abbilden**:
    - Bei 1:1-Beziehungen: Füge einen Fremdschlüssel in eine der beiden Tabellen ein oder kombiniere die Tabellen.
    - Bei 1:n-Beziehungen: Füge einen Fremdschlüssel auf der "n"-Seite hinzu.
    - Bei n:m-Beziehungen: Erstelle eine separate Beziehungstabelle mit Fremdschlüsseln zu beiden beteiligten Tabellen.
4. **Normalisierung anwenden**: Stelle sicher, dass Attribute atomar sind und Redundanzen minimiert werden, beginnend mit der ersten Normalform.

## Beispiele

### Einfache Darstellung ohne Fremdschlüssel

Lehrer (Personalnummer, Name, Vorname, Schulform, Fachgebiet)
Schüler (Schülernummer, Name, Vorname)
Klasse (Klassenbezeichnung, Raum)
Zeugnis (Zeugnis_ID, Ausgabedatum)

### Erweiterte Darstellung mit Fremdschlüsseln

T_Lehrer(P_Personalnummer, Name, Vorname, Schulform, Fachgebiet)
T_Schüler(P_Schülernummer, Name, Vorname)
Klasse(P_Klassenbezeichnung, F_Lehrernummer, Raum)
Zeugnis(P_Zeugnis_ID, F_Schülernummer, Ausgabedatum)
Klassenzugehörigkeit(P_ID, F_Schülernummer, F_Klassenbezeichnung)

In diesem Beispiel repräsentiert die Tabelle "Klasse" eine 1:n-Beziehung zu Lehrern (ein Lehrer kann mehrere Klassen haben), und "Klassenzugehörigkeit" bildet die n:m-Beziehung zwischen Schülern und Klassen ab.

## Häufige Fehler und Tipps

- **Fehler**: Annahme, dass jede Beziehung eine eigene Tabelle benötigt. Hinweis: Bei 1:n-Beziehungen genügt ein Fremdschlüssel auf der n-Seite.
- **Fehler**: Nicht-atomare Attribute verwenden, z. B. eine Adresse in einem Feld. Hinweis: Zerlege in separate Attribute wie Straße, PLZ, Ort.
- **Fehler**: Verwechselung von Primär- und Fremdschlüssel. Hinweis: Primärschlüssel identifiziert innerhalb der eigenen Tabelle, Fremdschlüssel verweist auf eine andere.
- **Fehler**: Das irreführende Beispiel mit "Klasse" vermeiden, indem korrekt zwischen 1:n und n:m unterschieden wird.

## Selbsttest

1. Was ist der Unterschied zwischen einer Relation und einem Tupel?
2. Wie wird eine n:m-Beziehung im Relationenmodell abgebildet?
3. Warum müssen Attribute atomar sein?
4. Welches Beispiel verdeutlicht die Unterscheidung zwischen Primär- und Fremdschlüssel?

## Weiterführendes

Das Relationenmodell bildet die Basis für Abfragesprachen wie [SQL](sql). Für tiefergehende Kenntnisse zur Datenoptimierung empfiehlt sich das Studium der Normalformen.
