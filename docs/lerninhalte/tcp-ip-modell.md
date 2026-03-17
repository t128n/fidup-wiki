---
title: "TCP/IP-Modell"
description: "Das TCP/IP-Modell ist das grundlegende Referenzmodell für die Netzwerkkommunikation im Internet. Es beschreibt vier Schichten zur Datenübertragung und dient Auszubildenden in Daten- und Prozessanalyse als Einführung in Protokolle wie TCP, IP und UDP."
sources:
  - title: "Einführung in TCP/IP - Referenzmodelle"
    url: "http://www.cfd.tu-berlin.de/Lehre/EDV2/tcpip/kap_1_3.html"
  - title: "Internet Protocol - RFC 791"
    url: "https://www.ietf.org/rfc/rfc791"
  - title: "Internet protocol suite - Wikipedia"
    url: "https://en.wikipedia.org/wiki/Internet_protocol_suite"
---

Das **TCP/IP-Modell** ist das grundlegende Referenzmodell für die Kommunikation in Computernetzwerken. Es standardisiert den Datenaustausch in dezentralen Netzwerken durch vier hierarchische Schichten und bildet die technische Basis des modernen Internets.

## Das TCP/IP-Referenzmodell im Überblick

Das TCP/IP-Modell, auch Internetprotokollfamilie genannt, gliedert die Netzwerkkommunikation in vier Schichten: Anwendungsschicht, Transportschicht, Internetschicht und Netzzugangsschicht. Im Gegensatz zum theoretischen OSI-Modell mit sieben Schichten ist das TCP/IP-Modell praxisorientiert und hat sich seit den 1970er Jahren aus dem ARPANET-Projekt heraus entwickelt. Es ermöglicht standort- und herstellerunabhängige Datenübertragungen durch offene Standards.

## Schichten des TCP/IP-Modells

### Anwendungsschicht

Die Anwendungsschicht ist die oberste Schicht und stellt Schnittstellen für Anwendungsprogramme bereit. Sie fasst die Funktionen der oberen OSI-Schichten zusammen und umfasst Protokolle wie HTTP für Webbrowser, FTP für Dateitransfer, SMTP für E-Mail-Versand, POP/IMAP für E-Mail-Empfang sowie DNS für die Namensauflösung von Domänennamen in IP-Adressen. TLS/SSL sorgt hier für sichere Verbindungen, beispielsweise bei HTTPS.

### Transportschicht

Die Transportschicht gewährleistet die End-zu-Ende-Kommunikation zwischen Hosts. Sie verwendet [Ports](tcp-udp) zur Adressierung von Diensten, etwa Port 80 für HTTP. Die wichtigsten Protokolle sind TCP und UDP: TCP ist verbindungsorientiert und zuverlässig – es baut eine Verbindung auf, stellt die korrekte Reihenfolge und Vollständigkeit der Daten sicher und bietet Flusssteuerung sowie Fehlerbehandlung. UDP ist verbindungslos und unzuverlässig, dafür schneller, und eignet sich für Echtzeit-Anwendungen wie Streaming oder VoIP.

TCP eignet sich für Webseiten, E-Mails und Dateitransfers, wo Zuverlässigkeit entscheidend ist. UDP wird bei Online-Spielen oder Videokonferenzen verwendet, wo geringe Latenz wichtiger als perfekte Datenintegrität ist.

### Internetschicht

Die Internetschicht ist für die logische Adressierung und das Routing von Datenpaketen zuständig. Das Kernprotokoll ist IP, das Geräte durch eindeutige Adressen identifiziert. IPv4-Adressen bestehen aus 32 Bit (z. B. 192.168.1.1), IPv6 aus 128 Bit (z. B. 2001:0db8::1) für mehr Adressen. Routing erfolgt durch Router, die Pakete anhand von Zieladressen weiterleiten, ohne den Inhalt zu kennen. ICMP dient der Diagnose, etwa bei Ping-Befehlen.

### Netzzugangsschicht

Die Netzzugangsschicht regelt die physische Verbindung zu lokalen Netzwerken und umfasst sowohl die physische als auch die Sicherungsschicht des OSI-Modells. Sie arbeitet mit physischen Adressen wie MAC-Adressen. Beispiele sind [Ethernet](ethernet) für kabelgebundene Verbindungen und IEEE 802.11 für WLAN. Diese Schicht ist nicht einheitlich definiert und variiert je nach Technologie.

## Funktionsweise des TCP/IP-Modells

Daten durchlaufen die Schichten von oben nach unten: Eine HTTP-Anfrage wird in der Anwendungsschicht erstellt, in der Transportschicht zu einem TCP-Segment, in der Internetschicht zu einem IP-Paket und in der Netzzugangsschicht zu einem Ethernet-Frame verkapselt. Jede Schicht fügt Header-Informationen hinzu. Beim Empfänger werden diese in umgekehrter Reihenfolge entfernt.

DNS übersetzt Domänennamen wie www.beispiel.de in IP-Adressen. Routing bestimmt den Weg durch Netzwerke, und TCP stellt Zuverlässigkeit durch erneute Übertragung verlorener Pakete sicher.

## Abgrenzung zum OSI-Modell

Das OSI-Modell ist ein theoretisches 7-Schichten-Modell, während TCP/IP pragmatisch 4 Schichten hat. Eine 1:1-Zuordnung ist nicht möglich, aber grob entspricht die Anwendungsschicht den OSI-Schichten 5–7, Transportschicht der OSI-Schicht 4, Internetschicht der OSI-Schicht 3 und Netzzugangsschicht den OSI-Schichten 1–2. TCP/IP hat sich in der Praxis durchgesetzt, da es einfacher und effizienter ist.

## Sicherheit im TCP/IP-Modell

Sicherheit wird auf mehreren Schichten implementiert: IPSec auf der Internetschicht verschlüsselt IP-Kommunikation, TLS/SSL auf der Anwendungsschicht sichert Protokolle wie HTTPS. Firewalls überwachen Datenströme auf verschiedenen Ebenen.

## Beispiele

Ein Benutzer gibt www.beispiel.de in den Browser ein. DNS löst den Namen in 192.168.1.100 auf. Der Browser sendet eine HTTP-Anfrage: Anwendungsschicht (HTTP), Transportschicht (TCP-Segment mit Port 80), Internetschicht (IP-Paket mit Zieladresse), Netzzugangsschicht (Ethernet-Frame). Der Server antwortet entsprechend.

## Häufige Fehler und Tipps

- TCP ist ungeeignet für Echtzeit-Streams, da es Overhead erzeugt – UDP ist hier besser.
- IP-Adressen sind logisch, MAC-Adressen physisch.
- Bei IPv4/IPv6: IPv6 löst Adressknappheit, ist aber noch nicht überall standardmäßig.

## Weiterführendes

Für tiefergehende Analysen in Daten- und Prozessanalyse empfiehlt sich die Betrachtung spezifischer Protokolle wie [TCP und UDP](tcp-udp) oder [Ethernet](ethernet).
