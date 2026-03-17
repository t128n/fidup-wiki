---
title: "Switching"
description: "Switching erklärt den Prozess der Datenweiterleitung auf Ebene 2 des OSI-Modells, bei dem Ethernet-Frames basierend auf MAC-Adressen weitergeleitet werden."
sources:
  - title: "Switching - Elektronik-Kompendium"
    url: "https://www.elektronik-kompendium.de/sites/net/0907141.htm"
  - title: "Switch (Netzwerktechnik) – Wikipedia"
    url: "https://de.wikipedia.org/wiki/Switch_(Netzwerktechnik)"
  - title: "Eine Einführung in das Layer 2 Switching – BlueOptics"
    url: "https://www.blueoptics.de/eine-einfuehrung-in-das-layer-2-switching"
---

**Switching** bezeichnet den Prozess auf Ebene 2 des [OSI-Modells](osi-modell), bei dem Ethernet-Frames basierend auf MAC-Adressen analysiert und weitergeleitet werden. Frames werden von einem eingehenden Port empfangen, die Ziel-MAC-Adresse wird überprüft und das Frame an den passenden Ausgangsport gesendet. Dies ermöglicht eine effiziente Datenübertragung in lokalen Netzwerken ohne unnötige Broadcasts.

## Kontext und Einordnung

Switching arbeitet auf der Sicherungsschicht (Layer 2) des [OSI-Modells](osi-modell) und der Netzzugangsschicht des [TCP/IP-Modells](tcp-ip-modell). Es dient der Weiterleitung von Datenpaketen innerhalb eines lokalen Netzwerks (LAN). Im Gegensatz zum Routing, das auf Layer 3 basiert und IP-Adressen verwendet, nutzt Switching hardwarebasierte MAC-Adressen für schnelle Entscheidungen. Switches sind wichtig für moderne Netzwerke, da sie Kollisionen reduzieren und die Leistung steigern. Ohne Switching wären Netzwerke auf Hubs beschränkt, die alle Daten an alle Geräte senden.

## Begriffe und Definitionen

- **MAC-Adresse**: Eine eindeutige 48-Bit-Hardwareadresse, die jedem Netzwerkinterface zugewiesen ist. Sie besteht aus sechs hexadezimalen Paaren, getrennt durch Doppelpunkte, und dient der Adressierung auf Layer 2.
- **Forwarding Database (FDB)**: Eine Tabelle im Switch, die MAC-Adressen den zugehörigen Ports zuordnet. Sie wird auch als MAC-Tabelle bezeichnet und bildet die Basis für Weiterleitungsentscheidungen.
- **Ethernet-Frame**: Die Dateneinheit auf Layer 2, die Nutzdaten sowie Header mit Quell- und Ziel-MAC-Adresse enthält. Frames haben eine Mindestlänge von 64 Bytes.
- **MAC-Learning**: Der automatische Prozess, bei dem der Switch Quell-MAC-Adressen aus eingehenden Frames extrahiert und in der FDB speichert.
- **Broadcast**: Eine Übertragung an alle Geräte im Netzwerk, etwa bei unbekannten Zieladressen.
- **Multicast**: Eine selektive Übertragung an eine Gruppe von Geräten.

## Vorgehen

Der Switching-Prozess umfasst folgende Schritte:

1. **Empfang des Frames**: Ein Ethernet-Frame trifft an einem Switch-Port ein.
2. **Analyse der Adressen**: Der Switch extrahiert die Quell-MAC-Adresse (für MAC-Learning) und die Ziel-MAC-Adresse.
3. **Lookup in der FDB**: Die Ziel-MAC-Adresse wird in der Forwarding Database gesucht.
4. **Weiterleitung oder Flooding**:
   - Ist die Adresse bekannt, wird das Frame an den zugehörigen Port gesendet (Unicast).
   - Ist sie unbekannt, wird es an alle Ports außer dem Quellport geflutet (Broadcast).
5. **Aktualisierung der FDB**: Die Quell-MAC-Adresse wird mit dem Empfangsport eingetragen oder aktualisiert.

## Beispiele

### Beispiel 1: MAC-Learning in einem kleinen Netzwerk

Angenommen, ein Switch mit drei Ports verbindet Computer A (Port 1, MAC: AA:AA:AA:AA:AA:AA), B (Port 2, MAC: BB:BB:BB:BB:BB:BB) und C (Port 3, MAC: CC:CC:CC:CC:CC:CC).

- Computer A sendet ein Frame an B. Der Switch empfängt es an Port 1, lernt AA:AA:AA:AA:AA:AA zu Port 1 hinzu, sucht BB:BB:BB:BB:BB:BB (unbekannt) und floodet an Port 2 und 3.
- B antwortet an A. Switch lernt BB:BB:BB:BB:BB:BB zu Port 2, findet AA:AA:AA:AA:AA:AA bei Port 1 und leitet direkt weiter.

### Beispiel 2: Broadcast-Handling

Bei einem ARP-Request (Adressauflösung) ist die Ziel-MAC unbekannt (Broadcast-Adresse FF:FF:FF:FF:FF:FF). Der Switch floodet das Frame an alle Ports außer dem Quellport, da ARP auf Layer 2 arbeitet.

## Switching-Methoden

Switches verwenden verschiedene Methoden zur Frame-Verarbeitung, die Latenz und Fehlerbehandlung beeinflussen.

### Store-and-Forward

- **Funktionsweise**: Das gesamte Frame wird empfangen, auf Fehler geprüft (CRC) und dann weitergeleitet.
- **Vorteile**: Zuverlässig, fehlerhafte Frames werden verworfen.
- **Nachteile**: Höhere Latenz, abhängig von Frame-Größe.

### Cut-Through

- **Funktionsweise**: Weiterleitung beginnt nach Empfang der Ziel-MAC-Adresse, ohne vollständiges Frame.
- **Vorteile**: Geringe, konstante Latenz.
- **Nachteile**: Fehlerhafte Frames werden weitergeleitet.

### Fragment-Free

- **Funktionsweise**: Wartet auf die ersten 64 Bytes (Minimallänge), um Kollisionsfragmente zu vermeiden.
- **Vorteile**: Kompromiss zwischen Geschwindigkeit und Zuverlässigkeit.
- **Nachteile**: Etwas höhere Latenz als Cut-Through.

## Häufige Fehler

- **Verwechslung mit Routing**: Switching ist nicht Routing – es verwendet MAC-Adressen, nicht IP-Adressen, und arbeitet innerhalb einer Broadcast-Domain.
- **FDB-Aging ignorieren**: Einträge verfallen nach etwa 300 Sekunden ohne Traffic. Dies ermöglicht Anpassung an Netzwerkänderungen.
- **Broadcast-Missbrauch**: Zu viele Broadcasts überlasten das Netz. VLANs helfen bei der Segmentierung.
- **Switch vs. Hub**: Ein Hub broadcastet alles; ein Switch leitet gezielt. Switches sind Standard in modernen Netzen.

## Weiterführendes

Für tiefergehende Themen wie VLANs oder Layer-3-Switches siehe [Virtual Local Area Network](vlan) und [Routing](routing).