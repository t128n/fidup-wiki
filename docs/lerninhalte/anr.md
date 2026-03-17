---
title: "ANR (After Repair Failure Rate)"
description: "Die ANR misst als Kennzahl die Qualität von Reparaturprozessen, indem sie die Rate erneuter Ausfälle kurz nach einer Instandsetzung erfasst."
sources:
    - title: "What Statistics Indicate Repair Rates?"
      url: "https://sustainability-directory.com/question/what-statistics-indicate-repair-rates/"
    - title: "Service Quality Management - Wiederholreparaturquote"
      url: "https://www.msr.de/loesungen/service_quality_management/"
---

Die **After Repair Failure Rate** (ANR), im deutschen Sprachraum als **Wiederholreparaturquote** bekannt, ist eine [Kennzahl](kpi) zur Bewertung der Instandhaltungsqualität. Sie gibt an, welcher Anteil der reparierten Geräte oder Systeme innerhalb eines definierten Zeitraums nach der Instandsetzung erneut einen Defekt aufweist.

## Lernziele

Der Artikel vermittelt folgende Kompetenzen:

- Fachliche Einordnung der After Repair Failure Rate.
- Korrekte Berechnung der Kennzahl unter Berücksichtigung von Zeitfenstern.
- Identifikation systematischer Ursachen für hohe Wiederholungsfehlerraten.
- Nutzung der ANR im Rahmen des [PDCA-Zyklus](pdca) zur Prozessverbesserung.

## Kontext und Bedeutung

Im Service-Management dient die ANR als Indikator für die Effektivität von Instandhaltungsprozessen. Eine niedrige Quote signalisiert eine präzise Fehlerdiagnose und eine fachgerechte Ausführung. Steigende Werte deuten hingegen auf Mängel in der Fehleranalyse, unzureichende Ersatzteilqualität oder Defizite in der Qualifikation des Servicepersonals hin. Ziel der Überwachung ist die Reduzierung von Servicekosten und die Vermeidung von Mehrfacheinsätzen.

## Berechnung

Die ANR wird als prozentuales Verhältnis der Rückläufer zur Gesamtzahl der Reparaturen in einem festen Beobachtungszeitraum ermittelt.

$$
ANR = \frac{\text{Anzahl der Ausfälle nach Reparatur}}{\text{Gesamtzahl der Reparaturen}} \times 100
$$

### Definition des Zeitfensters

Für eine aussagekräftige Messung ist die Wahl eines passenden Zeitfensters (z. B. 14, 30 oder 90 Tage) notwendig. Nur Ausfälle innerhalb dieser Frist gelten als Wiederholfehler. Dies ermöglicht die Abgrenzung mangelhafter Reparaturen von neu auftretenden, unabhängigen Defekten durch reguläre Abnutzung.

## Abgrenzung zu verwandten Metriken

Die ANR wird häufig zusammen mit anderen Kennzahlen betrachtet, um die Servicequalität ganzheitlich zu bewerten:

- **First Time Fix Rate (FTFR):** Diese Quote misst den Anteil der Reparaturen, die bereits beim ersten Versuch erfolgreich abgeschlossen werden. Sie ist das positive Gegenstück zur ANR.
- **[MTBF](mtbf) (Mean Time Between Failures):** Während die MTBF die durchschnittliche Zeit zwischen zwei beliebigen Ausfällen angibt, fokussiert sich die ANR ausschließlich auf die Phase unmittelbar nach einem Eingriff.

## Analyse hoher Wiederholungsraten

Übersteigt die ANR definierte Schwellenwerte, folgt eine Ursachenanalyse. Häufige Faktoren sind:

1. **Unvollständige Diagnose:** Es wurde lediglich ein Symptom behoben, während die eigentliche Fehlerursache unentdeckt blieb.
2. **Ersatzteilqualität:** Der Einsatz minderwertiger oder inkompatibler Komponenten führt zu frühzeitigen Folgeschäden.
3. **Fehlende Endkontrolle:** Verzicht auf standardisierte Funktionstests nach Abschluss der Arbeiten.
4. **Umgebungsbedingungen:** Äußere Faktoren, die den Ausfall provoziert haben, wurden bei der Reparatur nicht adressiert.

## Typische Fehler und Optimierung

- Nicht alle Ausfälle ohne zeitliche Begrenzung einbeziehen; stattdessen ein produktspezifisches Zeitfenster festlegen, um die Kausalität zur Reparatur sicherzustellen.
- Die Gesamtrate nicht isoliert betrachten; stattdessen Daten nach Standorten oder Fehlerkategorien segmentieren, um gezielte Maßnahmen abzuleiten.

## Selbsttest

1. Welchen spezifischen Bereich des Produktlebenszyklus überwacht die ANR im Gegensatz zur MTBF?
2. Warum verliert die ANR an Aussagekraft, wenn kein Zeitfenster definiert wird?
3. Inwiefern unterstützt eine niedrige ANR die Wirtschaftlichkeit eines Serviceunternehmens?
4. Welche Rolle spielt die Diagnosequalität für die First Time Fix Rate?
