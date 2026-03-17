---
title: "TCP und UDP"
description: "TCP und UDP sind die beiden Haupttransportprotokolle im Netzwerk. TCP bietet zuverlässige und geordnete Datenübertragung, ideal für Anwendungen wie Downloads und E-Mails. UDP priorisiert Geschwindigkeit und Effizienz, geeignet für Echtzeitanwendungen wie Streaming und Spiele. Dieser Artikel erklärt ihre Unterschiede und Anwendungsfälle."
sources:
  - title: "RFC 793: Transmission Control Protocol"
    url: "https://www.rfc-editor.org/rfc/rfc793"
  - title: "RFC 768: User Datagram Protocol"
    url: "https://www.rfc-editor.org/rfc/rfc768"
  - title: "TCP-Handshake - Glossary | MDN Web Docs"
    url: "https://developer.mozilla.org/de/docs/Glossary/TCP_handshake"
---

**TCP und UDP** sind die zwei wichtigsten Transportprotokolle im Internet, die auf der Transportschicht des [OSI-Modells](osi-modell) und des [TCP/IP-Modells](tcp-ip-modell) arbeiten. TCP stellt eine garantierte und geordnete Datenübertragung sicher, UDP setzt auf Geschwindigkeit ohne Garantien.

## Kurzüberblick

TCP und UDP arbeiten beide auf der Transportschicht und leiten Datenpakete von einer Anwendung zur anderen weiter. TCP baut eine Verbindung auf, garantiert die korrekte Reihenfolge und wiederholt verlorene Pakete, was es zuverlässig, aber langsamer macht. UDP verzichtet auf diese Garantien für höhere Geschwindigkeit und eignet sich für Anwendungen, bei denen geringe Latenz wichtiger ist als Vollständigkeit.

## Kontext und Einordnung

Die Transportschicht ermöglicht die End-zu-End-Kommunikation zwischen Prozessen auf verschiedenen Geräten. TCP und UDP ergänzen die Netzwerkschicht, die für Routing zuständig ist, und die Anwendungsschicht, die Daten bereitstellt. Anders als Protokolle niedrigerer Schichten wie IP, die Adressierung handhaben, arbeiten TCP und UDP mit Ports und bieten Mechanismen für die Datenübertragung.

## TCP (Transmission Control Protocol)

Das Transmission Control Protocol ist verbindungsorientiert und stellt eine zuverlässige Datenübertragung sicher. Es etabliert eine Verbindung durch einen Drei-Wege-Handshake: Der Sender sendet ein SYN-Paket, der Empfänger antwortet mit SYN-ACK, und der Sender bestätigt mit ACK. Dies bestätigt die Bereitschaft beider Seiten.

Während der Übertragung nutzt TCP Sequenznummern für die Reihenfolge und Bestätigungen für den Empfang. Bei verlorenen Paketen erfolgt eine Wiederholung. Flow Control verhindert Überlastung des Empfängers, Congestion Control vermeidet Netzwerküberlastung. Der TCP-Header umfasst mindestens 20 Byte und enthält Felder für Sequenz- und Bestätigungsnummern.

TCP eignet sich für Anwendungen, bei denen Datenintegrität entscheidend ist, wie E-Mail, Datei-Downloads, Web-Browsing (HTTP/HTTPS) und sichere Übertragungen (FTP, Telnet, SMTP).

## UDP (User Datagram Protocol)

Das User Datagram Protocol ist verbindungslos und sendet Datagramme ohne Verbindungsaufbau. Es bietet keine Garantie für Lieferung, Reihenfolge oder Duplikatschutz. Eine einfache Checksumme dient der Fehlererkennung, Pakete können jedoch verloren gehen oder in falscher Reihenfolge eintreffen.

UDP unterstützt Broadcasting (Senden an alle in einem lokalen Netzwerk) und Multicasting (Senden an eine Gruppe von Empfängern), was TCP nicht kann. Der UDP-Header ist nur 8 Byte groß und enthält Quell- und Zielport sowie Länge und Checksumme. Dies macht UDP effizient und schnell, aber unzuverlässig.

UDP wird eingesetzt für Echtzeitanwendungen wie Videostreaming, Online-Spiele, VoIP sowie für Protokolle wie [DNS](dns), [DHCP](dhcp), TFTP und [SNMP](snmp).

## Vergleich TCP vs. UDP

| Aspekt                  | TCP                          | UDP                          |
|-------------------------|------------------------------|------------------------------|
| Verbindungsart         | Verbindungsorientiert       | Verbindungslos              |
| Header-Größe           | 20 Byte                     | 8 Byte                      |
| Datenübertragung       | Garantiert                  | Nicht garantiert            |
| Reihenfolge            | Einhaltung garantiert       | Keine Garantie              |
| Fehlererkennung        | Umfassend (Flow/Congestion Control, Retransmission) | Schwach (Checksumme)        |
| Geschwindigkeit        | Langsamer                   | Schneller                   |
| Retransmission         | Ja                          | Nein                        |
| Sequenzierung          | Ja                          | Nein                        |
| Broadcasting/Multicasting | Nein                        | Ja                          |
| Anwendungsgebiete      | E-Mail, Downloads, HTTP/HTTPS | Streaming, Spiele, DNS, DHCP |

## Beispiele

- **Web-Browsing:** HTTP nutzt TCP, um vollständiges Laden von Webseiten in korrekter Reihenfolge zu gewährleisten.
- **Videostreaming:** UDP ermöglicht schnelles Streaming, bei dem verlorene Frames toleriert werden, um Latenz zu vermeiden.
- **DNS-Abfragen:** UDP dient schnellen Namensauflösungen, da verlorene Anfragen einfach wiederholt werden können.

## Häufige Fehler und Tipps

- TCP eignet sich nicht für Echtzeitanwendungen, da der Overhead zu hoher Latenz führt. UDP verzichtet auf Garantien und ist daher besser geeignet.
- TCP und UDP teilen sich die gleichen Portnummern, arbeiten jedoch mit unterschiedlichen Protokollen.
- UDP ist nicht immer vorzuziehen; für Datenintegrität wird TCP verwendet, da es Paketverlust korrigiert.

## Weiterführendes

Für tiefergehende Informationen zu Netzwerkprotokollen siehe die Artikel zu [OSI-Modell](osi-modell) und [TCP/IP-Modell](tcp-ip-modell).

## Einzelnachweise

- RFC 793 für TCP-Spezifikationen.
- RFC 768 für UDP-Spezifikationen.
- MDN Web Docs für den TCP-Handshake.