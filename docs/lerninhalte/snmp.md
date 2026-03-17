---
title: "SNMP (Simple Network Management Protocol)"
description: "SNMP ermöglicht die Überwachung und Steuerung von Netzwerkgeräten in Daten- und Prozessanalyse-Umgebungen. Als Standardprotokoll nutzt es ein Manager-Agent-Modell mit MIB und OID für effiziente Netzwerkverwaltung und Alarmierung."
sources:
  - title: "SNMP Grundlagen – Thomas-Krenn-Wiki"
    url: "https://www.thomas-krenn.com/de/wiki/SNMP_Grundlagen"
  - title: "Was ist SNMP? – IT Explained | Paessler PRTG"
    url: "https://www.paessler.com/de/it-explained/snmp"
---

Das **Simple Network Management Protocol (SNMP)** dient der Überwachung und Steuerung von Netzwerkgeräten wie Routern, Switches, Servern und Druckern. Es ermöglicht den Austausch von Informationen zwischen einem zentralen Management-System und Agenten auf den Geräten, um Netzwerkleistung zu optimieren und Fehler frühzeitig zu erkennen.

## Kurzüberblick

SNMP ist ein Protokoll auf der Anwendungsschicht des [OSI-Modells](osi-modell), das über [UDP](tcp-udp) transportiert wird. Es verwendet die Ports 161 für Anfragen und 162 für Traps. Im Kern steht das Manager-Agent-Modell, bei dem ein zentraler Manager Geräte abfragt oder konfiguriert, während Agenten auf den Geräten antworten oder unaufgefordert Benachrichtigungen senden. Die MIB beschreibt die abfragbaren Objekte mit eindeutigen OIDs in hierarchischer Struktur.

## Kontext und Einordnung

SNMP ordnet sich in die Netzwerkverwaltung ein, wo es für Monitoring und Konfiguration von Infrastrukturkomponenten in Unternehmensnetzwerken unerlässlich ist. Es ergänzt Protokolle wie ICMP für grundlegende Erreichbarkeitstests, indem es detaillierte Daten wie CPU-Auslastung oder Bandbreitennutzung liefert. In Daten- und Prozessanalyse-Umgebungen unterstützt SNMP die Überwachung von Servern und Netzwerkgeräten, um Ausfälle zu vermeiden und Leistung zu analysieren.

## Begriffe und Definitionen

### Manager-Agent-Modell
Das Modell teilt die Verantwortlichkeiten: Der SNMP-Manager initiiert Anfragen und empfängt Benachrichtigungen, während der Agent auf den Geräten die Daten bereitstellt oder Änderungen vornimmt.

### MIB und OID
Die Management Information Base (MIB) ist eine Textdatei (.mib), die alle abfragbaren Objekte eines Geräts beschreibt, ohne selbst Daten zu speichern. Jedes Objekt erhält eine eindeutige Object Identifier (OID), eine hierarchische Zahlenfolge wie 1.3.6.1.4.1.6574, die den Pfad im Namensraum angibt.

### Nachrichtentypen
SNMP nutzt sechs Haupttypen von Protokolldateneinheiten (PDUs):

- GET: Anfrage eines spezifischen Werts.
- GETNEXT: Abruf des nächsten Objekts in der MIB-Hierarchie, nützlich für Tabellen.
- GETBULK: Effiziente Anfrage mehrerer Werte, ab SNMPv2c verfügbar.
- SET: Änderung eines Werts auf dem Agenten.
- TRAP: Unaufgeforderte Benachrichtigung ohne Bestätigung, z. B. bei Fehlern.
- INFORM: Ähnlich wie TRAP, aber mit Bestätigung durch den Manager.

## Vorgehen

1. Installation und Konfiguration des SNMP-Agenten auf den Geräten mit passender MIB.
2. Einrichtung des Managers, z. B. mit Tools wie Nagios oder Zabbix.
3. Abfrage von Daten via GET oder SET über UDP-Port 161.
4. Empfang asynchroner Traps über Port 162.
5. Bei Bedarf MIB-Updates für neue Geräte oder OID-Prüfungen.

## Beispiele

Ein typisches Szenario: Der Manager fragt die CPU-Auslastung eines Routers ab. OID: 1.3.6.1.4.1.9.2.1.58 (Cisco-spezifisch).

- GET-Anfrage: Manager sendet "GET 1.3.6.1.4.1.9.2.1.58" an Agent auf Port 161.
- Agent antwortet mit aktuellem Wert, z. B. "85 %".
- Bei Überschreitung eines Schwellwerts sendet der Agent einen TRAP an Port 162.

Für Tabellen wie Interface-Statistiken verwendet GETNEXT oder GETBULK, um alle Einträge zu durchlaufen.

## Häufige Fehler und Tipps

- SNMPv1/v2c sollten in unsicheren Netzen vermieden werden, da Community-Strings im Klartext übertragen werden. SNMPv3 mit authPriv bietet Verschlüsselung.
- Bei großen MIBs empfiehlt sich GETBULK statt mehrerer GETNEXT-Anfragen, um Netzwerkbelastung zu reduzieren.
- OIDs sollten mit MIB-Dateien interpretiert werden, da die Zahlen allein schwer lesbar sind.
- Für TRAPs sollte beachtet werden, dass diese ohne Bestätigung verloren gehen können; bei kritischen Alarmen bietet INFORM eine zuverlässigere Option.

## Zusammenfassung

- MIB beschreibt abfragbare Objekte und deren OIDs in Textform.
- Port 161 dient für SNMP-Anfragen.
- INFORM erfordert Empfangsbestätigung im Gegensatz zu TRAP.
- SNMPv3 mit authPriv bietet Verschlüsselung.
- GETBULK dient der effizienten Abfrage mehrerer Werte, ab v2c.
- Vorteile: Zentrale Verwaltung, skalierbare Alarmierung.

## Weiterführendes

Für praktische Implementierung empfiehlt sich die Lektüre der RFCs 3411–3418 für SNMPv3-Details.