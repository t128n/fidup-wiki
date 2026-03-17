---
title: "MAC-Adresse"
description: "Die MAC-Adresse ist eine eindeutige Hardwarekennung für Netzwerkschnittstellen, die in der Daten- und Prozessanalyse zur Identifikation von Geräten in lokalen Netzwerken verwendet wird. Sie operiert auf Ebene 2 des OSI-Modells und besteht aus 48 Bit, die hexadezimal dargestellt werden."
sources:
  - title: "MAC-Adresse – Wikipedia"
    url: "https://de.wikipedia.org/wiki/MAC-Adresse"
  - title: "Unicast, Multicast, Broadcast und Anycast – Elektronik-Kompendium"
    url: "https://www.elektronik-kompendium.de/sites/net/2505121.htm"
  - title: "Guidelines for Use of Extended Unique Identifier (EUI), OUI, and CID – IEEE"
    url: "https://standards-support.ieee.org/hc/en-us/articles/4888705676564-Guidelines-for-Use-of-Extended-Unique-Identifier-EUI-Organizationally-Unique-Identifier-OUI-and-Company-ID-CID"
---

Die **MAC-Adresse** ist eine eindeutige physische Adresse, die Netzwerkschnittstellen auf Ebene 2 des [OSI-Modells](osi-modell) zugewiesen wird. Sie dient zur Identifizierung von Geräten in lokalen Netzwerken und besteht aus 48 Bit, die in hexadezimaler Form dargestellt werden. Im Gegensatz zu logischen Adressen wie IP-Adressen, die auf Ebene 3 operieren, bleibt die MAC-Adresse unverändert, solange die Hardware nicht gewechselt wird.

## Kurzueberblick
Die MAC-Adresse, auch Media Access Control Address genannt, identifiziert jedes Gerät in einem lokalen Netzwerk eindeutig. Sie besteht aus sechs Oktetts, wobei die ersten drei die Herstellerkennung bilden und die letzten drei die individuelle Zuweisung. Adressen können unicast (für einzelne Geräte), multicast (für Gruppen) oder broadcast (für alle) sein. Moderne Geräte nutzen oft zufällige Adressen zum Datenschutz, und MAC-Adressen lassen sich bei Bedarf ändern, was Sicherheitsrisiken birgt.

## Kontext und Einordnung
MAC-Adressen operieren auf der Datensicherungsschicht des [OSI-Modells](osi-modell), wo sie die physikalische Ebene unterstützen. Sie ermöglichen die Kommunikation innerhalb eines lokalen Netzwerks, ohne Routing über größere Entfernungen. Im Kontrast dazu dienen IP-Adressen der logischen Adressierung über Netzwerkgrenzen hinweg. Protokolle wie [ARP](arp) lösen IP-Adressen in MAC-Adressen auf, um Datenpakete korrekt zu übertragen.

## Struktur und Format
Eine MAC-Adresse umfasst 48 Bit, die in sechs Gruppen zu je zwei hexadezimalen Ziffern unterteilt sind. Diese Gruppen werden typischerweise durch Bindestriche (-) oder Doppelpunkte (:) getrennt dargestellt, beispielsweise `50-9A-4C-29-E3-11` oder `50:9A:4C:29:E3:11`. Die kanonische Darstellung folgt der Reihenfolge von Least Significant Bit (LSB) zuerst. Alternative Formate existieren, etwa bei Token Ring, wo die Bit-Reihenfolge umgekehrt ist.

## Herstellerkennung und Zuweisung
Die ersten drei Oktetts bilden die Organizationally Unique Identifier (OUI), die vom Institute of Electrical and Electronics Engineers (IEEE) vergeben wird. Der Hersteller erhält einen OUI-Bereich, in dem er die letzten drei Oktetts individuell für jedes Gerät zuweist. Dies ermöglicht bis zu 16.777.216 Adressen pro OUI. Neuere Zuweisungen nutzen Varianten wie MA-L, MA-M oder MA-S für unterschiedliche Blockgrößen, um den begrenzten Adressraum zu schonen.

## Adresstypen
MAC-Adressen unterscheiden sich nach ihrem Typ, der durch spezifische Bits bestimmt wird.

### Unicast
Unicast-Adressen adressieren genau ein Gerät. Das niedrigstwertigste Bit des ersten Oktetts (I/G-Bit) ist auf 0 gesetzt. Dies ist der Standardtyp für normale Geräteadressen, bei denen die Netzlast mit der Anzahl der Hosts steigt.

### Multicast
Multicast-Adressen richten sich an eine Gruppe von Empfängern. Das I/G-Bit ist auf 1 gesetzt. Beispiele sind Adressen wie `01-00-5E` für IPv4-Multicast oder `33-33` für IPv6. Router duplizieren das Paket für alle Gruppenmitglieder, was effizienter ist als separate Unicast-Übertragungen.

### Broadcast
Broadcast-Adressen erreichen alle Geräte im lokalen Netzwerk. Alle 48 Bits sind auf 1 gesetzt, was `FF-FF-FF-FF-FF-FF` entspricht. Broadcast-Frames werden typischerweise nicht über Router weitergeleitet und dienen beispielsweise für ARP-Anfragen.

## Globale und lokale Adressen
Adressen können global oder lokal verwaltet sein, bestimmt durch das U/L-Bit im ersten Oktett.

### Universally Administered Addresses (UAA)
Bei UAA ist das U/L-Bit auf 0 gesetzt. Diese Adressen sind vom IEEE vergeben und global eindeutig. Sie basieren auf einem zugewiesenen OUI und sind in der Regel fest in die Hardware eingebrannt.

### Locally Administered Addresses (LAA)
LAA haben das U/L-Bit auf 1 gesetzt und beginnen mit spezifischen Hex-Werten wie 2, 6, A oder E. Sie werden lokal vom Netzwerkadministrator oder durch Software generiert, beispielsweise für virtuelle Maschinen oder Datenschutz. Diese Adressen sind nur im lokalen Kontext eindeutig.

## Sicherheit und Einschraenkungen
MAC-Adressen bieten keine starke Sicherheit. Sie können durch MAC-Spoofing geändert werden, um Filter zu umgehen. Moderne Smartphones randomisieren Adressen für Datenschutz, was Auswirkungen auf Netzwerkmanagement hat. MAC-Filter sind ein schwacher Schutz und sollten durch stärkere Authentifizierung ergänzt werden.

## Praktische Anwendung
MAC-Adressen finden in der Netzwerkverwaltung Anwendung, etwa bei MAC-Filtern in Routern für Zugriffskontrolle oder in Lizenzierungen, die an die Hardware gebunden sind. Bei Hardware-Reparaturen können Adressen dupliziert werden. Protokolle wie [ARP](arp) und [DHCP](dhcp) nutzen MAC-Adressen zur automatischen Konfiguration.

## Haeufige Fehler und Tipps

- MAC- und IP-Adressen sind nicht zu verwechseln; MAC-Adressen sind lokal, IP-Adressen global.
- Lokale Adressen können für VMs verwendet werden, um Konflikte zu vermeiden.
- MAC-Adressen sollten nur bei Notwendigkeit geändert werden, da dies Sicherheitsrisiken birgt.
- Adressen können mit Tools wie ipconfig oder ifconfig geprüft werden.