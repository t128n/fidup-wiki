---
title: "IP"
description: "Das Internet Protocol (IP) ist das Grundprotokoll des Internets auf Ebene 3 des OSI-Modells. Es umfasst IPv4 und IPv6 für Adressierung, Subnetze und verschiedene Adresstypen wie Unicast, Multicast und Broadcast."
sources:
  - title: "Classless Inter-Domain Routing - Wikipedia"
    url: "https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"
  - title: "Network Layer - NetworkAcademy.IO"
    url: "https://www.networkacademy.io/ccna/network-fundamentals/network-layer"
  - title: "IPv4 vs IPv6 - AWS"
    url: "https://aws.amazon.com/compare/the-difference-between-ipv4-and-ipv6/"
---

**Das Internet Protocol (IP)** bildet die Grundlage der Datenübertragung im Internet. Es arbeitet auf Ebene 3 des [OSI-Modells](osi-modell), der Vermittlungsschicht. Als verbindungsloses Protokoll regelt es die Adressierung von Geräten, die Aufteilung in Subnetze und verschiedene Adresstypen. Es unterstützt sowohl IPv4 als auch IPv6.

## Adressierung

### IPv4
IPv4-Adressen sind 32 Bit lang und werden als vier durch Punkte getrennte Dezimalzahlen dargestellt, beispielsweise `192.168.1.1`. Der begrenzte Adressraum umfasst etwa 4,3 Milliarden mögliche Adressen, die 2011 erschöpft waren. Jede IPv4-Adresse besteht aus einem Netzwerk- und einem Hostsegment. Historisch waren IPv4-Adressen in feste Klassen (A-E) unterteilt, die heute durch das flexiblere CIDR-System abgelöst sind.

### IPv6
IPv6-Adressen sind 128 Bit lang und bestehen aus acht durch Doppelpunkte getrennten Gruppen von je vier hexadezimalen Ziffern, zum Beispiel `2001:0db8:85a3:0000:0000:8a2e:0370:7334`. Durch Null-Kompression kann dies auch als `2001:db8:85a3::8a2e:370:7334` geschrieben werden. Dies ermöglicht nahezu unbegrenzte Adressen (etwa 340 Sextillionen) sowie effizienteres Datenrouting und verbesserte Paketverarbeitungsfunktionen. Eine IPv6-Adresse gliedert sich in drei Teile:

- **Netzwerk-Identifikator**: identifiziert das globale Netzwerk (erste 48 Bit)
- **Subnetz-Identifikator**: identifiziert ein lokales Subnetz (folgende 16 Bit)  
- **Interface-Identifikator**: identifiziert ein spezifisches Gerät (letzte 64 Bit)

IPv6 unterstützt die automatische Konfiguration durch SLAAC (Stateless Address Autoconfiguration), was DHCP-Server überflüssig macht.

### Subnetzmaske und CIDR
Die Subnetzmaske teilt ein IP-Netzwerk in kleinere Subnetze auf. Classless Inter-Domain Routing (CIDR) ermöglicht eine flexible Adressierung ohne starre Klassengrenzen. Die CIDR-Notation gibt die Anzahl der führenden Einsen in der Subnetzmaske an, beispielsweise `192.168.1.0/24` bedeutet 24 Bit für den Netzwerkteil. Variable Length Subnet Mask (VLSM) erlaubt die Verwendung unterschiedlicher Subnetzmasken innerhalb desselben Netzwerks für eine noch feinere Aufteilung.

### Adressraum-Management
Der Adressraum wird von der Internet Assigned Numbers Authority (IANA) hierarchisch verwaltet: IANA → Regional Internet Registries (RIRs) → Local Internet Registries (LIRs) → Endnutzer.

**Privater Adressraum** ist nicht im Internet routbar und nur innerhalb eines lokalen Netzwerksegments erreichbar. Dazu gehören:

- **10.0.0.0 – 10.255.255.255** (/8) - Klasse A
- **172.16.0.0 – 172.31.255.255** (/12) - Klasse B  
- **192.168.0.0 – 192.168.255.255** (/16) - Klasse C

**Öffentlicher Adressraum** ist im gesamten Internet eindeutig und routbar. Network Address Translation (NAT) übersetzt private Adressen in öffentliche Adressen für den Internetzugang.

### Adresstypen
IP-Adressen unterstützen verschiedene Typen für die Kommunikation:

- **Unicast**: 1-zu-1 Kommunikation, adressiert ein einzelnes Gerät (beide Versionen)
- **Multicast**: 1-zu-viele Kommunikation, adressiert eine definierte Host-Gruppe (beide Versionen)
- **Broadcast**: 1-zu-alle Kommunikation, adressiert alle Geräte im lokalen Netz (nur IPv4)
- **Anycast**: 1-zum-nächsten Kommunikation, adressiert das nächstgelegene Gerät einer Gruppe (nur IPv6)
- **Hinweis**: Loopback-Adressen `127.0.0.1` (IPv4) und `::1` (IPv6) für Selbsttest

### Historische IPv4-Klassen
IPv4-Adressen sind historisch in Klassen unterteilt, die den Adressbereich definieren:

1. **Klasse A**: 0.0.0.0 – 127.255.255.255 (/8)
2. **Klasse B**: 128.0.0.0 – 191.255.255.255 (/16)  
3. **Klasse C**: 192.0.0.0 – 223.255.255.255 (/24)
4. **Klasse D**: 224.0.0.0 – 239.255.255.255 (Multicast)
5. **Klasse E**: 240.0.0.0 – 255.255.255.255 (Reserviert)

Diese Klassen sind heute durch das flexiblere CIDR-System ersetzt, bleiben aber für historisches Verständnis relevant.
