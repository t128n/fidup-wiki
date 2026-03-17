---
title: "Prüfverfahren"
description: "Prüfverfahren wie N-Version Programming und Redundanz sind Methoden zur Sicherstellung der Zuverlässigkeit und Korrektheit in Daten- und Prozessanalyse. Sie helfen, Fehler frühzeitig zu erkennen und Systeme ausfallsicherer zu gestalten."
sources:
  - title: "N-Version Programming"
    url: "https://en.wikipedia.org/wiki/N-version_programming"
  - title: "Redundancy (Engineering)"
    url: "https://en.wikipedia.org/wiki/Redundancy_(engineering)"
  - title: "Was ist Redundanz in der IT und warum ist sie für technikinteressierte IT-Entscheider wichtig?"
    url: "https://www.hagel-it.de/it-insights/was-ist-redundanz-in-der-it-und-warum-ist-sie-fuer-technikinteressierte-it-entscheider-wichtig.html"
---

**Prüfverfahren** sind Methoden zur Überprüfung der Korrektheit, Konsistenz und Zuverlässigkeit von Daten sowie Prozessen in der Daten- und Prozessanalyse. Zu den zentralen Ansätzen gehören N-Version Programming und Redundanz, die in kritischen Systemen wie Softwareentwicklung, Datenübertragung und Infrastrukturen eingesetzt werden. Diese Verfahren steigern die Qualität, erfordern jedoch zusätzliche Ressourcen und bergen Herausforderungen wie erhöhte Komplexität.

## Kurzübersicht

Prüfverfahren dienen der Sicherstellung von Zuverlässigkeit durch Vergleich oder Duplizierung. N-Version Programming vergleicht unabhängig entwickelte Programmversionen zur Fehleraufdeckung, während Redundanz zusätzliche Komponenten nutzt, um Ausfälle zu vermeiden. Beide Ansätze finden sich in der IT, Luftfahrt und Medizintechnik, wo sie die Sicherheit erhöhen, aber Kosten und Komplexität mit sich bringen.

## Kontext und Einordnung

Prüfverfahren sind Teil der Qualitätssicherung in der Daten- und Prozessanalyse. Sie ergänzen Methoden wie [Hardwaretests](hardwaretest) oder [Backup](backup)-Strategien und adressieren Risiken wie Datenverlust oder Prozessfehler. In der Softwareentwicklung unterstützen sie die Entwicklung zuverlässiger Systeme, während sie in kritischen Infrastrukturen Ausfallzeiten minimieren.

## Begriffe und Definitionen

### N-Version Programming

N-Version Programming bezeichnet die Entwicklung mehrerer funktionell äquivalenter Programme aus derselben Spezifikation durch unabhängige Teams. Das Ziel ist die Fehlererkennung durch Vergleich der Ausgaben, wobei die Unabhängigkeit die Wahrscheinlichkeit identischer Fehler reduziert. Es handelt sich um eine Form der Software-Redundanz.

### Redundanz

Redundanz bedeutet die absichtliche Duplizierung kritischer Komponenten zur Zuverlässigkeitssteigerung. Sie umfasst Hardware-, Software- und Informations-Redundanz. Aktive Redundanz nutzt Monitoring und Voting Logic, während passive Redundanz auf Überkapazität setzt.

## Vorgehen

### Bei N-Version Programming

1. Erstellung einer gemeinsamen Spezifikation.
2. Unabhängige Entwicklung von N Programmversionen.
3. Vergleich der Ausgaben unter identischen Testbedingungen.
4. Analyse von Abweichungen und Korrektur.

### Bei Redundanz

1. Identifikation kritischer Komponenten.
2. Implementierung zusätzlicher Instanzen, beispielsweise Backup-Server.
3. Einrichtung von Voting Logic für Entscheidungen bei Mehrfachausgaben.
4. Monitoring und automatische Umschaltung bei Ausfällen.

## Beispiele

### N-Version Programming

In einem Sortieralgorithmus werden zwei unabhängige Implementierungen entwickelt: eine in Python, eine in Java. Bei gleichen Eingabedaten vergleichen sie die Ausgaben; Abweichungen deuten auf Fehler hin.

### Redundanz

In einem Datenbanksystem nutzt [RAID](raid) mehrere Festplatten zur Datensicherung. Bei Ausfall einer Platte übernehmen die anderen die Funktion, dank Voting Logic, die die korrekten Daten auswählt.

## Häufige Fehler

Bei N-Version Programming besteht das Unabhängigkeitsproblem: Teams können ähnliche Fehler machen, wenn sie aus ähnlichen Hintergründen stammen. Daher sollten Teams aus verschiedenen Kulturen gewählt und regelmäßige Tests durchgeführt werden. Bei Redundanz führt Überkomplexität zu neuen Fehlerquellen; klare Voting-Regeln sind essenziell, um dies zu vermeiden.

## Weiterführendes

Für tiefergehende Einblicke in Software-Entwicklungsmethoden siehe [Software-Anforderungen](software-anforderungen). In kritischen Systemen ergänzen Prüfverfahren Ansätze wie [Fehlerbehandlung](fehlerbehandlung).
