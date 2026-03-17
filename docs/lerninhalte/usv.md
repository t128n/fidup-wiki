---
title: "Unterbrechungsfreie Stromversorgung"
description: "Die unterbrechungsfreie Stromversorgung (USV) schützt elektronische Geräte vor Stromausfällen und Netzstörungen. Sie wird in Büro, Industrie und IT eingesetzt, um Datenverlust zu vermeiden und kontinuierliche Betriebsfähigkeit zu gewährleisten, insbesondere für Auszubildende in Daten- und Prozessanalyse."
sources:
  - title: "What are the Different Types of UPS Systems?"
    url: "https://www.vertiv.com/de-emea/about/news-and-insights/articles/educational-articles/what-are-the-different-types-of-ups-systems/"
  - title: "Unterbrechungsfreie Stromversorgung"
    url: "https://de.wikipedia.org/wiki/Unterbrechungsfreie_Stromversorgung"
---

Die **unterbrechungsfreie Stromversorgung** (USV) stellt als elektronisches Gerät eine kontinuierliche Energieversorgung für kritische Lasten bei Netzstörungen sicher. Sie überbrückt Stromausfälle, glättet Spannungsschwankungen und verhindert Datenverlust oder Hardware-Schäden. USVs kommen in IT-Infrastrukturen, medizinischen Geräten und industriellen Prozessen zum Einsatz, wo Unterbrechungen teure Folgen haben können.

## Kurzüberblick
USV-Systeme wandeln und speichern Energie, um Netzstörungen wie Ausfälle, Unter- oder Überspannungen sowie Frequenzschwankungen zu kompensieren. Die Klassifizierung nach IEC 62040-3 unterscheidet drei Klassen: VFI (Voltage and Frequency Independent, Online/Doppelwandler), VI (Voltage Independent, Line-Interactive) und VFD (Voltage and Frequency Dependent, Offline/Standby). Jeder Typ bietet unterschiedliche Schutzgrade und Umschaltzeiten, die von 0 ms bei VFI bis 10 ms bei VFD reichen. Batterietechnologien wie AGM oder Li-Ion bestimmen die Laufzeit und Wartungsintervalle.

## Kontext und Einordnung
USVs ergänzen Netzwerkinfrastrukturen wie [redundante Systeme](redundante-systeme), indem sie kurzfristige Unterbrechungen überbrücken. Sie unterscheiden sich von Notstromaggregaten, die längerfristige Versorgung bieten, aber Umschaltzeiten von Sekunden haben. In der Daten- und Prozessanalyse kommen USVs bei Servern und [Datenspeichern](datenspeicher) zum Einsatz, um die Integrität von Analysen zu wahren.

## Begriffe und Definitionen

- **Umschaltzeit (Transfer Time):** Zeitspanne vom Netzbetrieb zum Batteriebetrieb. Bei VFI beträgt sie 0 ms, bei VI 2–6 ms und bei VFD 6–10 ms.
- **AVR (Automatic Voltage Regulator):** Spannungsregler in VI-Systemen, der Schwankungen ausgleicht ohne Batterie-Einsatz.
- **Double Conversion:** Technik bei VFI, wo Netz-AC zu DC und zurück zu AC gewandelt wird für vollständige Isolation.

## Auswahl und Betrieb
Die Auswahl einer USV umfasst typischerweise die Analyse des Einsatzszenarios, die Berechnung der erforderlichen Laufzeit basierend auf der Batteriekapazität, die Wahl des geeigneten Typs sowie die Prüfung der Installation und die Planung der Wartung.

## Beispiele
**Beispiel für VFD-USV:** In einem Büro mit instabilem Netz schützt eine 500 VA VFD-USV einen PC. Bei Ausfall wechselt sie in 8 ms auf Batterie, überbrückt 10 Minuten für geordnetes Herunterfahren.

**Beispiel für VI-USV:** Bei häufigen Spannungseinbrüchen in einer Produktionshalle verwendet eine 1 kVA VI-USV AVR, um Spannungen von 180 V auf 230 V zu heben, ohne Batterie zu belasten.

**Beispiel für VFI-USV:** In einem Rechenzentrum versorgt eine 10 kVA VFI-USV Server kontinuierlich. Double Conversion filtert Oberschwingungen, Laufzeit beträgt 30 Minuten bei voller Last.

## Häufige Fehler und Empfehlungen
Häufige Fehler umfassen die Wahl einer VFD-USV für sensible IT-Systeme, was aufgrund der Umschaltzeiten zu Ausfällen führen kann. Stattdessen eignen sich VI- oder VFI-Typen, da sie schneller reagieren und Spannungen regulieren.

Ebenso kann die Überlastung der Batterien durch Überschreitung der Nennleistung deren Lebensdauer verkürzen; daher ist die Berechnung der Last unter Berücksichtigung des Leistungsfaktors wichtig.

Empfehlungen beinhalten regelmäßige Tests, da defekte Batterien den Schutz mindern. AGM-Batterien sollten alle 3–8 Jahre gewechselt werden, Li-Ion alle 5–10 Jahre.

Die Umgebungstemperatur sollte unter 25 °C gehalten werden, da höhere Temperaturen die Batterieleistung reduzieren und das Ausfallrisiko erhöhen.
