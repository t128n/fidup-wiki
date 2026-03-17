---
title: "Pseudocode"
description: "Pseudocode beschreibt Algorithmen in einer informellen, menschenlesbaren Form ohne spezifische Programmiersprache und unterstützt Auszubildende in der Daten- und Prozessanalyse bei der Planung von Programmabläufen und Kommunikation von Ideen."
sources:
  - title: "Algorithmen mit Pseudocode dokumentieren"
    url: "https://oer-informatik.de/pseudocode"
  - title: "Pseudocode • Definition"
    url: "https://wirtschaftslexikon.gabler.de/definition/pseudocode-46714"
  - title: "Pseudocode – Wikipedia"
    url: "https://de.wikipedia.org/wiki/Pseudocode"
---

**Pseudocode** stellt eine informelle, menschenlesbare Darstellung von [Algorithmen](algorithmus) oder Programmabläufen dar, die unabhängig von spezifischen Programmiersprachen formuliert wird. Er dient der klaren Beschreibung der Logik und Struktur, um die Entwicklung, Planung und Kommunikation von Ideen zu erleichtern, bevor eine konkrete Implementierung erfolgt.

## Lernziele
Nach diesem Artikel sind die Grundlagen von Pseudocode bekannt und er lässt sich zur Beschreibung einfacher Algorithmen anwenden. Es besteht die Fähigkeit, Pseudocode von ausführbarem Code zu unterscheiden, sowie Kenntnis verschiedener Notationsvarianten und Alternativen zur visuellen Darstellung.

## Kurzüberblick
Pseudocode ist eine sprachunabhängige Methode zur Dokumentation oder zum Entwurf von Algorithmen. Er verwendet einfache Sprache und Programmierkonzepte wie Variablen, Bedingungen und Schleifen, ohne strikte Syntaxregeln einzuhalten. Sein Fokus liegt auf Verständlichkeit und Planung, nicht auf Ausführbarkeit. In der Praxis findet Pseudocode Anwendung in der Ausbildung, Teamkommunikation und als Zwischenschritt vor der Programmierung.

## Kontext und Einordnung
Pseudocode grenzt sich von echtem Programmcode ab, da er nicht ausführbar ist und keine spezifischen Sprachregeln folgt. Er steht in Beziehung zu visuellen Darstellungsformen wie [Struktogrammen](struktogramm) oder Programmablaufplänen, die ähnliche Ziele verfolgen, aber grafisch arbeiten. Für Auszubildende in der Daten- und Prozessanalyse bietet Pseudocode ein Hilfsmittel zur strukturierten Beschreibung von Prozessen, etwa in IHK-Prüfungen, wo Deutsches Pseudo-Pascal häufig verwendet wird.

## Begriffe und Definitionen
### Pseudocode
Pseudocode ist eine Methode zur Darstellung von Algorithmen, die Programmiersprachen ähnelt, aber keine syntaktischen Regeln einer konkreten Sprache einhält. Er dient der Veranschaulichung und Kommunikation von Programmlogik ohne Implementierungsdetails.

### Kontrollstrukturen
Kontrollstrukturen steuern den Programmablauf durch Bedingungen und Schleifen. Sie werden in Pseudocode mit Schlüsselwörtern wie IF/THEN/ELSE oder WHILE ausgedrückt und sind in fast allen Programmiersprachen vorhanden.

### Variablendeklaration
Eine Variablendeklaration benennt einen Speicherplatz für Daten, oft mit einem optionalen Datentyp. In Pseudocode erfolgt dies vereinfacht, beispielsweise durch `i: integer` oder nur `i`.

## Vorgehen
Pseudocode wird erstellt, indem der Algorithmus in logische Schritte zerlegt wird. Dabei erfolgt die Wahl einer konsistenten Notation, etwa Deutsches Pseudo-Pascal für IHK-Kontexte. Strukturelemente wie Variablen, Bedingungen und Schleifen werden verwendet. Die Abstraktionsebene wird einheitlich gehalten, und unnötige Details werden vermieden. Schließlich wird der Entwurf auf Verständlichkeit geprüft.

## Beispiele
### Einfache Berechnung
```
FUNKTION berechneSumme(a, b)
    SET summe ZU a + b
    GIB summe ZURÜCK
ENDE FUNKTION
```

### Schleifenbeispiel mit Array
```
SET zahlen ZU [1, 2, 3, 4, 5]
SET summe ZU 0
FÜR JEDES element IN zahlen TU
    SET summe ZU summe + element
ENDE FÜR
```

### Bedingte Ausführung
```
WENN alter >= 18 DANN
    AUSGEBEN "Volljährig"
SONST
    AUSGEBEN "Minderjährig"
ENDE WENN
```

## Häufige Fehler und Tipps
Vermeidung von Mischungen aus abstrakter Logik und detailreichen Implementierungen; stattdessen eine einheitliche Abstraktionsebene beibehalten. Keine sprachspezifischen Konstrukte verwenden; stattdessen sprachunabhängige Begriffe wählen. Kommentare sparsam einsetzen, nur wenn sie die Klarheit erhöhen.

## Selbsttest

1. Was unterscheidet Pseudocode von ausführbarem Code?
2. Was sind drei Kontrollstrukturen in Pseudocode?
3. Warum ist Konsistenz in der Notation wichtig?
4. Wie lässt sich eine Schleife im Pseudocode beschreiben?
5. Welche Alternative zu Pseudocode ist grafisch?
6. Wofür eignet sich Deutsches Pseudo-Pascal besonders?
