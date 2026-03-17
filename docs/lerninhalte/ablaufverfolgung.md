---
title: "Ablaufverfolgung"
description: "Die Ablaufverfolgung ermöglicht die systematische Überwachung von Geschäftsprozessen und Softwareabläufen. Sie dient der Transparenz, Optimierung und Fehlerdiagnose in operativen und technischen Systemen."
sources:
  - title: "Process Mining: Definition und Einsatzgebiete im Überblick"
    url: "https://www.haufe-akademie.de/blog/glossar/process-mining/"
  - title: "Ablaufverfolgung (Tracing) – Wikipedia"
    url: "https://de.wikipedia.org/wiki/Ablaufverfolgung"
  - title: "Business Process Management einfach erklärt"
    url: "https://www.gbtec.com/de/wiki/prozessmanagement/bpm-business-process-management/"
---

Die **Ablaufverfolgung** (auch Prozessverfolgung oder *Tracing*) bezeichnet die systematische Erfassung, Überwachung und Dokumentation von Vorgängen innerhalb eines Systems. In der Prozessanalyse dient sie dazu, den Fortschritt von [Geschäftsprozessen](geschaeftsprozess) transparent zu machen und deren Effizienz zu bewerten. In der Informationstechnik beschreibt sie die detaillierte Protokollierung von Programmschritten zur Fehlerdiagnose und Leistungsoptimierung. Durch die kontinuierliche Beobachtung lassen sich Engpässe identifizieren, die Einhaltung von Vorgaben (Compliance) prüfen und die Prozessqualität nachhaltig steigern.

## Lernziele
Der Artikel vermittelt Kenntnisse zu folgenden Schwerpunkten:

- Differenzierung zwischen operativem Monitoring und retrospektivem Process Mining.
- Einordnung der Ablaufverfolgung in die strategische Prozessoptimierung.
- Abgrenzung von technischem Tracing gegenüber klassischen Debugging-Methoden.
- Identifikation und Einsatzbereiche typischer Werkzeuge für die Prozessverfolgung.

## Grundlagen der Ablaufverfolgung
Die Ablaufverfolgung findet in zwei wesentlichen Disziplinen Anwendung: dem Prozessmanagement und der Softwareentwicklung. Während im Prozessmanagement die Durchführung organisatorischer Aufgaben im Fokus steht, befasst sich die technische Ablaufverfolgung mit der Ausführung von Programmcode. Beiden Ansätzen ist das Ziel gemeinsam, Transparenz über zeitliche Abläufe zu schaffen.

### Abgrenzung der Begriffe

- **Monitoring:** Operative Überwachung laufender Vorgänge in Echtzeit.
- **Tracing:** Detaillierte Protokollierung von Einzelschritten, primär in technischen Systemen oder zur Tiefenanalyse komplexer Prozesse.
- **Process Mining:** Datengestützte Methode zur Rekonstruktion tatsächlicher Prozessverläufe aus vorhandenen Log-Daten (Event Logs).

## Ablaufverfolgung im Prozessmanagement
Im Rahmen des [Prozessmanagements](prozessmanagement) bildet die Ablaufverfolgung die Brücke zwischen der Prozessausführung und der Prozessoptimierung. Sie ist der Monitoring-Phase im BPM-Lebenszyklus zuzuordnen.

### Operatives Prozess-Monitoring
Hierbei werden laufende Prozessinstanzen überwacht, um den aktuellen Status jedes Falls zu kennen und bei Abweichungen steuernd einzugreifen.

- **Echtzeit-Tracking:** Visualisierung des aktuellen Prozessfortschritts über Dashboards.
- **KPI-Überwachung:** Messung von Kennzahlen wie Durchlaufzeiten oder Fehlerquoten.
- **Benachrichtigungen:** Automatisierte Alarme bei Überschreitung definierter Schwellenwerte (z. B. maximale Bearbeitungszeit).

### Process Mining zur retrospektiven Analyse
Im Gegensatz zum operativen Monitoring betrachtet Process Mining abgeschlossene Vorgänge. Aus digitalen Spuren in IT-Systemen (z. B. ERP- oder CRM-Systemen) wird der reale Ist-Prozess visualisiert. Dies ermöglicht den Abgleich mit dem geplanten Soll-Prozess. So lassen sich Schwachstellen wie „Flaschenhälse“ (Bottlenecks) und ineffiziente Prozesspfade identifizieren, die in der offiziellen Dokumentation oft nicht abgebildet sind.

## Ablaufverfolgung in der IT und Softwareentwicklung
In der Softwareentwicklung wird die Ablaufverfolgung meist als Tracing bezeichnet. Sie dient dazu, den Pfad eines Datenpakets oder eines Funktionsaufrufs durch ein System nachzuvollziehen.

### Tracing vs. Debugging
Im Gegensatz zum [Debugging](debugging), bei dem Programme häufig an Haltepunkten (Breakpoints) gestoppt werden, erfolgt Tracing während des laufenden Betriebs. Das System sendet Statusmeldungen über interne Zustände, ohne den Ausführungsfluss zu unterbrechen. Dies ist insbesondere in verteilten Systemen (Microservices) essenziell, um Anfragen über verschiedene Servergrenzen hinweg zu verfolgen (*Distributed Tracing*).

### Observability
Modernes Tracing ist Bestandteil der *Observability* (Beobachtbarkeit), die sich auf drei Säulen stützt:

1. **Logs:** Zeitgestempelte Aufzeichnungen spezifischer Ereignisse.
2. **Metriken:** Aggregierte Zahlenwerte zur Systemleistung (z. B. CPU-Last).
3. **Traces:** Zusammenhängende Pfade einzelner Vorgänge durch alle Systemkomponenten.

## Werkzeuge und Methoden
Für eine effektive Ablaufverfolgung kommen spezialisierte Werkzeuge zum Einsatz:

- **[Business-Process-Management-Systeme (BPMS)](bpmn):** Steuerung und Überwachung von Workflows auf Basis modellierter Prozesse.
- **Process-Mining-Tools:** Rekonstruktion von Prozessen durch die Analyse von Event-Logs.
- **Tracing-Frameworks:** Erfassung technischer Abläufe innerhalb der Software (z. B. OpenTelemetry).

## Typische Fehler und Best Practices

- **Zu hohe Granularität:** Die Protokollierung trivialer Ereignisse führt zu einer Informationsflut, die die Analyse erschwert. Eine gezielte Auswahl relevanter Messpunkte ist notwendig.
- **Lückenhafte Datenbasis:** Ohne eindeutige Zeitstempel und Identifikatoren (IDs) lassen sich Einzelereignisse nicht zu einem konsistenten Prozessstrang verknüpfen.
- **Fehlende Auswertung:** Die reine Datensammlung ohne regelmäßige Analyse bietet keinen Mehrwert für die Prozessoptimierung.

## Selbsttest

1. Worin besteht der Hauptunterschied zwischen operativem Prozess-Monitoring und Process Mining?
2. Warum ist Tracing für die Analyse von Produktivsystemen oft besser geeignet als klassisches Debugging?
3. Welche Bedeutung haben Event Logs für die Rekonstruktion von Abläufen?
4. Nenne zwei primäre Ziele der Ablaufverfolgung im Kontext des Prozessmanagements.
