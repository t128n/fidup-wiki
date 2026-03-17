---
title: "Plausibilitätskontrollen"
description: "Plausibilitätskontrollen sind Verfahren zur Überprüfung der Glaubwürdigkeit und Konsistenz von Daten in der Daten- und Prozessanalyse. Dieser Artikel erklärt verschiedene Arten von Kontrollen, ihre Implementierung, Vorteile und Best Practices für Auszubildende."
sources:
  - title: "Datenvalidierung"
    url: "https://www.ibm.com/de-de/think/topics/data-validation"
  - title: "Datenvalidierung - Eurostat"
    url: "https://ec.europa.eu/eurostat/de/data/data-validation"
---

**Plausibilitätskontrollen** sind Verfahren zur Sicherstellung der [Datenqualität](datenqualitaet), bei denen die Glaubwürdigkeit und logische Konsistenz von Daten überprüft werden. Sie dienen der Erkennung unplausibler oder fehlerhafter Datensätze und tragen zur Vermeidung von Fehlentscheidungen bei.

## Lernziele

- Definition und Bedeutung von Plausibilitätskontrollen für die Datenqualität erklären.
- Verschiedene Arten von Plausibilitätskontrollen kennen und Beispiele dafür nennen.
- Implementierung von Plausibilitätskontrollen und auftretende Herausforderungen verstehen.
- Best Practices für die Durchführung von Plausibilitätskontrollen anwenden.

## Kurzüberblick
Plausibilitätskontrollen sind ein zentraler Bestandteil der [Datenvalidierung](datenvalidierung) und helfen dabei, Datenfehler frühzeitig zu identifizieren. Sie umfassen verschiedene Prüfarten, die sowohl manuell als auch automatisiert durchgeführt werden können. Durch ihre Anwendung wird die Zuverlässigkeit von Daten verbessert, was besonders in der Daten- und Prozessanalyse wichtig ist.

## Kontext und Einordnung
Plausibilitätskontrollen sind bereits in der amtlichen Statistik etabliert und werden im Europäischen Statistischen System harmonisiert. Sie unterscheiden sich von rein syntaktischen Prüfungen dadurch, dass sie die logische Konsistenz überprüfen. Als Teil des Datenqualitätsmanagements ergänzen sie andere Aspekte wie Datenbereinigung und Metadatenverwaltung.

## Begriffe und Definitionen

- **Plausibilitätskontrollen**: Verfahren zur Sicherstellung der Datenqualität, bei denen die Glaubwürdigkeit und logische Konsistenz von Daten überprüft werden.
- **Datenvalidierung**: Prozess der Überprüfung, ob Daten sauber, genau und einsatzbereit sind, wozu Plausibilitätskontrollen als Teilbereich gehören.

## Vorgehen
Plausibilitätskontrollen können in verschiedene Arten unterteilt werden, die je nach Anforderung eingesetzt werden:

1. **Wertebereichsprüfungen**: Überprüfung, ob Werte innerhalb festgelegter Grenzen liegen, z. B. muss das Alter einer Person zwischen 0 und 120 Jahren liegen.
2. **Formatprüfungen**: Sicherstellung der korrekten Datenstruktur, z. B. müssen Postleitzahlen fünfstellig sein.
3. **Logische Prüfungen**: Prüfung der Konsistenz zwischen Datenelementen, z. B. muss das Geburtsdatum vor dem aktuellen Datum liegen.
4. **Relationskontrollen**: Untersuchung von Beziehungen zwischen Datenfeldern, z. B. muss das Nettogewicht kleiner sein als das Bruttogewicht.
5. **Vollständigkeitsprüfungen**: Sicherstellung, dass alle erforderlichen Felder ausgefüllt sind, z. B. müssen Pflichtfelder in einem Formular vollständig sein.

## Beispiele
Ein Beispiel für Wertebereichsprüfungen ist die Überprüfung von Temperaturwerten in einem Datensatz: Werte unter -50 °C oder über 50 °C könnten als unplausibel markiert werden.

Für Relationskontrollen: In einem Bestellformular muss das Lieferdatum vor dem Rechnungsdatum liegen.

## Implementierung
Plausibilitätskontrollen können automatisiert bei der Dateneingabe erfolgen, z. B. durch Skripte oder Datenintegrationsplattformen. Regelmäßige Überprüfungen des Datenbestands sind ebenso möglich. Software-Tools unterstützen die Durchführung und erleichtern die Automatisierung.

## Vorteile
Die frühzeitige Erkennung von Datenfehlern verbessert die Grundlage für Entscheidungen und spart Kosten, indem Folgefehler vermieden werden. Sie tragen zur Gesamtdatenqualität bei und erhöhen die Vertrauenswürdigkeit von Analysen.

## Herausforderungen
Die Definition geeigneter Prüfregeln erfordert Fachwissen, da zu strenge Kontrollen Flexibilität einschränken können. Ausnahmen und Sonderfälle müssen berücksichtigt werden, um Fehlalarme zu vermeiden.

## Häufige Fehler und Tipps

- Nicht X: Grenzen für Wertebereichsprüfungen willkürlich festlegen; stattdessen Y: Grenzen fachlich begründen, z. B. anhand physikalischer oder gesetzlicher Limits.
- Nicht X: Kontrollen nur einmalig durchführen; stattdessen Y: Regelmäßige Aktualisierung der Regeln, um Änderungen in den Daten zu berücksichtigen.

## Kontrollfragen

1. Was ist der Hauptzweck von Plausibilitätskontrollen?
2. Nenne drei Arten von Plausibilitätskontrollen mit je einem Beispiel.
3. Welche Herausforderungen treten bei der Definition von Prüfregeln auf?
