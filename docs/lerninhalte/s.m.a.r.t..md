---
title: "Self-Monitoring, Analysis and Reporting Technology"
description: "Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.) überwacht den Zustand von Festplatten und prognostiziert potenzielle Ausfälle. Diese Technologie nutzt Sensoren zur Messung von Parametern wie Lesefehlerrate und Temperatur, um frühzeitig auf Probleme hinzuweisen und die Datenintegrität zu sichern."
sources:
  - title: "Self-Monitoring, Analysis and Reporting Technology – Wikipedia"
    url: "https://en.wikipedia.org/wiki/S.M.A.R.T."
  - title: "Hard Drive Reliability Stats - Backblaze"
    url: "https://www.backblaze.com/blog/hard-drive-reliability-stats/"
  - title: "Failure Trends in a Large Disk Drive Population - Google Research"
    url: "https://static.googleusercontent.com/media/research.google.com/en//archive/disk_failures.pdf"
---

**Self-Monitoring, Analysis and Reporting Technology** (S.M.A.R.T.) bezeichnet ein eingebautes Überwachungssystem in Festplatten. Es erfasst Betriebsparameter, um potenzielle Ausfälle frühzeitig zu erkennen und zu melden. Die Technologie basiert auf Sensoren in der Festplatte. Sie ermöglicht eine kontinuierliche Bewertung des Hardwarezustands und gibt Warnungen aus, wenn Schwellenwerte überschritten werden.

## Kurzüberblick

S.M.A.R.T. dient der Selbstüberwachung, Analyse und Berichterstattung des Zustands von Festplattenlaufwerken. Es ist eine standardisierte Technologie seit Mitte der 1990er-Jahre. Sie integriert sich in die Firmware von HDD und SSD. Durch kontinuierliche Erfassung von Daten wie Betriebsstunden, Fehlerquoten und Temperaturwerten ermöglicht S.M.A.R.T. eine Prognose möglicher Defekte. Dies geschieht, bevor sie zu Datenverlust führen. Die Daten werden über standardisierte Befehle abgerufen. Betriebssysteme, BIOS oder spezielle Tools werten sie aus.

## Kontext und Einordnung

S.M.A.R.T. entstand als Reaktion auf die zunehmende Komplexität von Datenspeichern und den Bedarf an präventiver Wartung. In Umgebungen, in denen Datenausfälle hohe Kosten verursachen, minimiert die Technologie Risiken. Sie ergänzt Ansätze zur Datensicherung wie regelmäßige [Backups](backup) oder [RAID](raid)-Konfigurationen. Sie ersetzt diese jedoch nicht. Studien zeigen, dass S.M.A.R.T. etwa 50 bis 70 Prozent der Festplattenausfälle vorhersagt. Plötzliche Fehler wie Controller-Ausfälle bleiben oft unvorhergesehen.

## Begriffe und Definitionen

- **S.M.A.R.T.-Attribute**: Messwerte, die die Festplatten-Firmware erfasst. Dazu gehören Fehlerquoten oder Betriebszeiten. Jedes Attribut hat eine ID-Nummer und Schwellenwerte.
- **Pre-Failure Condition**: Zustand, bei dem ein oder mehrere Attribute außerhalb des Normbereichs liegen. Ein Ausfall wird wahrscheinlich.
- **Reallocation**: Prozess, bei dem fehlerhafte Sektoren auf Ersatzbereiche der Festplatte umgeleitet werden.
- **Wear Leveling**: Bei SSD eine Technik, die Schreibvorgänge gleichmäßig über die Speicherzellen verteilt. Dies vermeidet Verschleiß.

## Funktionsweise

S.M.A.R.T. arbeitet mit integrierten Sensoren und Firmware-Algorithmen. Die Festplatte sammelt kontinuierlich Daten über ihren Betrieb. Diese Daten werden über S.M.A.R.T.-Befehle abgefragt. Betriebssysteme wie Windows oder Linux unterstützen diese. Wenn ein Attribut einen vordefinierten Schwellenwert überschreitet, meldet die Festplatte eine Warnung. Das BIOS oder UEFI kann diese Daten anzeigen. Tools wie smartctl oder CrystalDiskInfo werten sie aus. Bei Überschreitung mehrerer Schwellen gilt die Festplatte als kritisch.

## Parameter

S.M.A.R.T. überwacht zahlreiche Parameter, die je nach Hersteller variieren. Häufige Attribute sind:

- **ID 1 (Raw Read Error Rate)**: Häufigkeit von Fehlern beim Lesen von Daten von der Plattenoberfläche.
- **ID 3 (Spin-Up Time)**: Zeit, die benötigt wird, um die Platte auf Betriebsgeschwindigkeit zu bringen. Dies gilt für HDD.
- **ID 5 (Reallocated Sector Count)**: Anzahl der fehlerhaften Sektoren, die auf Ersatzbereiche umgeleitet wurden.
- **ID 7 (Seek Error Rate)**: Häufigkeit von Fehlern bei der Kopfpositionierung.
- **ID 9 (Power-On Hours)**: Gesamte Betriebszeit der Festplatte.
- **ID 12 (Power Cycle Count)**: Anzahl der Einschaltzyklen.
- **ID 194 (Temperature)**: Aktuelle Temperatur der Festplatte. Sie ist entscheidend für die Zuverlässigkeit.
- **ID 197 (Current Pending Sector Count)**: Anzahl der Sektoren, die auf Reallokation warten.
- **ID 198 (Uncorrectable Sector Count)**: Anzahl der nicht wiederherstellbaren Sektoren.

Diese Parameter zeigen mechanische oder elektronische Probleme an. Schwellenwerte unterscheiden sich je nach Hersteller und Modell.

## HDD vs. SSD Unterschiede

Bei HDD (Hard Disk Drives) fokussiert S.M.A.R.T. auf mechanische Aspekte wie Spin-Up-Zeit und Suchfehler. Diese Laufwerke haben bewegliche Teile. Bei SSD (Solid State Drives) überwacht es NAND-bezogene Metriken wie Wear Leveling, Erase-Zyklen und Programmierungsvorgänge. Einige Attribute sind herstellerspezifisch und nicht direkt vergleichbar. SSD-Fehler treten oft plötzlich auf. HDD-Ausfälle lassen sich häufiger vorhersagen.

## Grenzen und Zuverlässigkeit

S.M.A.R.T. garantiert keine Vorhersage aller Ausfälle. Falsch-positive Warnungen kommen vor, wenn eine Platte trotz Warnung weiter funktioniert. Falsch-negative Fälle bleiben unerkannt, besonders bei SSD-Controller-Fehlern. Die Genauigkeit liegt bei etwa 50 bis 70 Prozent. Dies hängt von Studien wie denen von Google Research ab. S.M.A.R.T. ersetzt nicht regelmäßige Backups. Es dient als Ergänzung zu anderen Schutzmaßnahmen. Herstellerspezifische Schwellenwerte erschweren eine einheitliche Interpretation.

## Praktische Anwendung

In der Praxis setzt man S.M.A.R.T. zur präventiven Wartung ein. Bei Servern ersetzt man Festplatten während geplanter Wartungsfenster, wenn Warnungen auftreten. Für Desktop-Systeme nutzt man Tools zur kontinuierlichen Überwachung. In RAID-Umgebungen hilft es, einzelne Laufwerke zu identifizieren. Bei Warnungen führt man sofort Backups durch und testet die Platte. Ein hoher Reallocated Sector Count zeigt an, dass die Platte bald ausfallen könnte. Dies priorisiert die Datensicherung.

## Häufige Fehler und Tipps

- **Vernachlässigung von Warnungen**: S.M.A.R.T.-Meldungen sollten nicht ignoriert werden. Unmittelbares Handeln ist ratsam, da Ausfälle unvorhersehbar sind.
- **Überinterpretation von Werten**: Nicht jeder hohe Wert bedeutet einen unmittelbaren Ausfall. Schwellenwerte sollten geprüft und mit Herstellerdokumentation verglichen werden.
- **Fehlende Überwachung**: Regelmäßige Prüfungen sollten eingeplant werden, besonders bei kritischen Systemen. Tools wie smartctl für Linux oder CrystalDiskInfo für Windows können zur Überwachung genutzt werden.
- **Vertrauen in S.M.A.R.T. allein**: S.M.A.R.T. sollte nicht als Ersatz für Backups genutzt werden. Eine Kombination mit redundanten Speichern wie RAID ist empfehlenswert.

## Weiterführendes

Für tiefergehende Analysen dienen Quellen wie Backblaze-Statistiken oder die Google-Studie. Ergänzende Themen sind Backup-Strategien und RAID-Konfigurationen. Diese behandeln separate Artikel.
