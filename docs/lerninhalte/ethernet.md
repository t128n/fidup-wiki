---
title: "Ethernet"
description: "Ethernet ist der weltweit führende Standard für kabelgebundene lokale Netzwerke (LAN) und definiert die Datenübertragung sowie Adressierung auf der Sicherungsschicht."
sources:
    - title: "Ethernet-Standards von IEEE 802.3"
      url: "https://www.elektronik-kompendium.de/sites/net/1406171.htm"
    - title: "Was ist ein Ethernet-Frame? Definition, Aufbau und Varianten"
      url: "https://www.ionos.de/digitalguide/server/knowhow/ethernet-frame/"
    - title: "Was ist Ethernet? Definition & Erklärung"
      url: "https://www.ionos.de/digitalguide/server/knowhow/ethernet-ieee-8023/"
---

**Ethernet** bezeichnet eine Familie von Netzwerktechnologien für lokale kabelgebundene Netzwerke (LAN). Die im Standard IEEE 802.3 definierte Technologie bildet das Fundament der modernen Netzwerkkommunikation. Ethernet legt fest, wie Datenpakete formatiert und über physische Medien wie Kupfer- oder Glasfaserkabel übertragen werden. Während die Technologie ursprünglich auf geteilten Medien basierte, ermöglichen moderne Varianten durch [Switches](switching) und Vollduplex-Verbindungen eine effiziente, kollisionsfreie Übertragung.

## Lernziele

Nach der Bearbeitung dieses Artikels können folgende Punkte erläutert werden:

- Einordnung von Ethernet in Schichtenmodelle.
- Funktion und Aufbau einer [MAC-Adresse](mac).
- Struktur eines Ethernet-Frames inklusive der MTU.
- Unterschied zwischen CSMA/CD und modernem Switching.

## Kurzüberblick

Ethernet ist die dominierende Technologie für kabelgebundene Verbindungen zwischen Computern, Servern und Netzwerkgeräten. Im Vergleich zu Funktechnologien (WLAN) bietet Ethernet eine höhere Stabilität, geringere Latenzen und hohe Datenraten (aktuell von 10 Mbit/s bis zu 400 Gbit/s). Die Standardisierung durch das IEEE sichert die Interoperabilität zwischen Geräten verschiedener Hersteller.

## Kontext und Einordnung

Innerhalb des [OSI-Modells](osi-modell) agiert Ethernet primär auf Schicht 2, der Sicherungsschicht (_Data Link Layer_). Dort erfolgt die physikalische Adressierung und die Fehlererkennung auf Paketebene. In der Hierarchie des [TCP/IP-Modells](tcp-ip-modell) wird Ethernet der Netzzugriffsschicht zugeordnet. Es dient als Transportmittel für Protokolle wie das [Internet Protocol (IP)](ip), welches Daten in Ethernet-Frames kapselt, um sie innerhalb eines lokalen Segments zu übertragen.

## Begriffe und Definitionen

### MAC-Adresse

Die _Media Access Control_-Adresse ([MAC-Adresse](mac)) ist eine weltweit eindeutige Hardware-Adresse eines Netzwerkadapters. Sie besteht aus 48 Bit, die üblicherweise als sechs hexadezimale Paare dargestellt werden (z. B. `00:80:41:ae:fd:7e`). Die ersten drei Paare identifizieren den Hersteller (OUI), die letzten drei Paare bilden eine fortlaufende Nummerierung des Herstellers.

### MTU (Maximum Transmission Unit)

Die MTU definiert die maximale Größe der Nutzdaten (_Payload_), die in einem einzelnen Frame übertragen werden können. Der Standardwert für Ethernet beträgt:
$$ MTU = 1500 \text{ Bytes} $$
Datenmengen oberhalb dieses Schwellenwerts müssen auf der Vermittlungsschicht fragmentiert werden.

## Funktionsweise und Struktur

### Der Ethernet-Frame

Daten werden in sogenannten Frames (Rahmen) übertragen. Ein Standard-Frame (Ethernet II) ist wie folgt strukturiert:

1.  **Header**: Enthält die Ziel-MAC-Adresse (6 Byte), die Quell-MAC-Adresse (6 Byte) und das Typ-Feld (2 Byte). Letzteres gibt das Protokoll der nächsthöheren Schicht (z. B. IPv4) an.
2.  **Payload**: Die eigentlichen Nutzdaten (46 bis 1500 Byte).
3.  **Trailer**: Enthält die _Frame Check Sequence_ (FCS, 4 Byte), eine Prüfsumme zur Erkennung von Übertragungsfehlern.

Die minimale Gesamtlänge eines Frames beträgt 64 Byte, die maximale Länge 1518 Byte (exklusive Präambel).

### Vom Shared Medium zum Switching

In frühen Ethernet-Installationen ([Bus-Topologie](netzwerktopologie)) teilten sich alle Geräte ein gemeinsames Medium. Der Zugriff wurde über das Verfahren **CSMA/CD** (_Carrier Sense Multiple Access with Collision Detection_) geregelt:

- **Carrier Sense**: Prüfung, ob das Medium frei ist.
- **Multiple Access**: Gleichzeitiger Zugriff mehrerer Geräte.
- **Collision Detection**: Erkennung von Kollisionen bei gleichzeitigen Sendeversuchen mit anschließendem Neustart nach einer zufälligen Wartezeit.

Moderne Netzwerke nutzen eine Stern-Topologie mit [Switches](switching). Ein Switch stellt dedizierte Punkt-zu-Punkt-Verbindungen zwischen den Geräten her. Dadurch entfällt die Notwendigkeit von CSMA/CD. Im **Vollduplex-Modus** kann gleichzeitig gesendet und empfangen werden, ohne dass Kollisionen auftreten.

## Beispiel: Datenversand im LAN

Beim Versand von Daten an einen Dateiserver im lokalen Netzwerk wird ein IP-Paket in einen Ethernet-Frame verpackt:

1.  Der Absender ermittelt die MAC-Adresse des Ziels.
2.  Die eigene MAC wird als Quelle und die des Servers als Ziel in den Header eingetragen.
3.  Der Switch wertet das Ziel-Feld aus und leitet den Frame an den entsprechenden Port weiter.
4.  Der Empfänger prüft die FCS-Prüfsumme und entnimmt bei Korrektheit die Nutzdaten.

## Häufige Fehler und Tipps

> **Kabelkategorien**: Für Gigabit-Ethernet ist mindestens ein Cat.5e-Kabel erforderlich. Ältere Cat.5-Kabel unterstützen oft nur 100 Mbit/s.

- **Duplex-Mismatch**: Wenn ein Gerät fest auf Vollduplex und die Gegenseite auf Autonegotiation oder Halbduplex eingestellt ist, sinkt die Performance durch Signalfehlinterpretationen drastisch.
- **MTU-Konflikte**: In VPN- oder VLAN-Umgebungen kann die nutzbare MTU sinken. Werden Frames nicht korrekt fragmentiert, kommt es zu Paketverlusten.

## Selbsttest

1.  Auf welcher Schicht des OSI-Modells ist Ethernet primär angesiedelt?
2.  Wie viele Bits umfasst eine MAC-Adresse?
3.  Warum ist CSMA/CD in modernen geswitchten Netzwerken nicht mehr notwendig?
4.  Was gibt der Wert der MTU bei Ethernet an?
5.  Welchen Zweck erfüllt die Frame Check Sequence (FCS)?
