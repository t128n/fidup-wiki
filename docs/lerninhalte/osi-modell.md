---
title: "OSI-Modell"
description: "Das OSI-Modell ist ein Referenzmodell für Netzwerkkommunikation, das die Datenübertragung in sieben Schichten unterteilt. Es hilft Auszubildenden in Daten- und Prozessanalyse, Netzwerkarchitekturen zu verstehen, Fehler zu diagnostizieren und Systeme zu designen."
sources:
  - title: "ISO/IEC 7498-1:1994 - Information technology — Open Systems Interconnection — Basic Reference Model: The Basic Model"
    url: "https://www.iso.org/standard/20269.html"
  - title: "Was ist das OSI-Modell? | IBM"
    url: "https://www.ibm.com/de-de/think/topics/osi-model"
---

Das **OSI-Modell** ist ein Referenzmodell für Netzwerkprotokolle, das die Kommunikation zwischen Computersystemen in sieben hierarchische Schichten unterteilt. Es dient als theoretische Grundlage für das Verständnis von Netzwerkarchitekturen und ermöglicht eine standardisierte Entwicklung von Protokollen sowie die gezielte Fehlersuche in Netzwerken.

## Kurzueberblick
Das OSI-Modell unterteilt die Netzwerkkommunikation in sieben Schichten, von der physischen Datenübertragung bis zur Anwendungslogik. Jede Schicht übernimmt spezifische Aufgaben und kommuniziert mit benachbarten Schichten über definierte Schnittstellen. Es wurde entwickelt, um Interoperabilität zwischen verschiedenen Systemen zu gewährleisten, und bildet die Basis für viele moderne Netzwerkstandards. In der Praxis dient es als Werkzeug zur Analyse und Behebung von Netzwerkproblemen.

Der Artikel erklärt die sieben Schichten des OSI-Modells, ihre Funktionen und Protokolle. Er unterscheidet das OSI-Modell vom TCP/IP-Modell und erläutert deren praktische Relevanz. Zudem zeigt er auf, wie das OSI-Modell für Fehlersuche und Systemdesign angewendet wird.

## Kontext und Einordnung
Das OSI-Modell entstand in den späten 1970er und frühen 1980er Jahren, als die Vernetzung von Computersystemen zunahm, aber proprietäre Lösungen die Kompatibilität behinderten. Die International Organization for Standardization (ISO) und das International Telegraph and Telephone Consultative Committee (CCITT, heute ITU-T) entwickelten es als standardisiertes Framework. Im Jahr 1984 veröffentlichte die ISO das Modell offiziell als ISO/IEC 7498-1:1994, das 1994 aktualisiert und 2000 bestätigt wurde. Es definiert Bereiche für die Normenentwicklung, ohne eine Implementierung vorzuschreiben.

## Die sieben Schichten
Die sieben Schichten des OSI-Modells sind hierarchisch angeordnet, wobei die unteren Schichten die Grundlagen der Datenübertragung bilden und die oberen Schichten die Anwendungslogik behandeln. Jede Schicht kommuniziert mit der darüber- und darunterliegenden Schicht über definierte Schnittstellen. Die Schichten werden von 1 (Bitübertragungsschicht) bis 7 (Anwendungsschicht) nummeriert.

| Englisch               | Deutsch                    | Erklärung                                                                                              | Protokolle                                        |
| ---------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| **A**pplication Layer  | **A**nwendungsschicht      | Stellt Dienste, Anwendungen und Netzwerkmanagement bereit.                                           | HTTP, FTP, SSH                                    |
| **P**resentation Layer | **D**arstellungsschicht    | Wandelt systemabhängige Darstellungen (z. B. ASCII) in unabhängige Formen um.                        | X.226 (Connection-Oriented Presentation Protocol) |
| **S**ession Layer      | **S**itzungsschicht        | Verwaltet die Prozesskommunikation zwischen zwei Systemen und behebt Fehler wie Sitzungsunterbrechungen. | X.225, ISO 9548 (Connectionless Session Protocol) |
| **T**ransport Layer    | **T**ransportschicht       | Gewährleistet End-to-End-Kommunikation mit Header-Informationen und Fehlerkontrolle. Verwendet Pakete. | [TCP](tcp-udp), [UDP](tcp-udp) |
| **N**etwork Layer      | **V**ermittlungsschicht    | Steuert den Datentransfer zwischen Netzwerksegmenten. Verwendet Fragmente.                           | [IP](ip), ICMP            |
| **D**ata Link Layer    | **S**icherrungsschicht     | Sichert eine zuverlässige Kommunikation innerhalb desselben Netzwerks. Verwendet Frames.             | ARP, STP[^1]                                      |
| **P**hysical Layer     | **B**itübertragungsschicht | Definiert die elektrische, mechanische und funktionale Schnittstelle.                                | [Ethernet](ethernet), IEEE 802.11 |

### Merksätze
Zur leichteren Erinnerung an die Reihenfolge der Schichten von oben nach unten oder umgekehrt dienen folgende Merksätze:

1. **P**lease **D**o **N**ot **T**hrow **S**alami **P**izza **A**way (von unten nach oben).
2. **A**lle **D**eutsche **S**tudenten **T**rinken **V**erschiedene **S**orten **B**ier (von oben nach unten).

[^1]: Spanning Tree Protocol.

## TCP/IP-Modell im Vergleich
Das TCP/IP-Modell ist ein praktisches Modell mit vier Schichten, das in der Internetkommunikation dominiert, während das OSI-Modell theoretisch bleibt. Die TCP/IP-Schichten sind:

- Anwendungsschicht (vereint OSI-Schichten 5-7): Behandelt Anwendungsprotokolle wie HTTP.
- Transportschicht (entspricht OSI-Schicht 4): Verwendet [TCP](tcp-udp) oder [UDP](tcp-udp) für Datenübertragung.
- Internetschicht (entspricht OSI-Schicht 3): Verwendet [IP](ip) für Routing.
- Netzzugangsschicht (vereint OSI-Schichten 1-2): Behandelt physische und datenverbindungsspezifische Aspekte wie [Ethernet](ethernet).

Das TCP/IP-Modell ist in der Praxis weit verbreitet, da es die Basis des Internets bildet, wohingegen OSI als Referenz für Standards dient, aber selten vollständig implementiert wird.

## Praktische Anwendungen
Das OSI-Modell findet Anwendung in der Netzwerkverwaltung und -analyse. Bei der Fehlersuche ermöglicht es, Probleme auf spezifische Schichten zu isolieren, z. B. physikalische Verbindungsfehler in Schicht 1 oder Routing-Probleme in Schicht 3. Im Monitoring können Tools Schichten separat überwachen, um Engpässe zu identifizieren. Beim Systemdesign hilft es, Protokolle und Architekturen zu planen, indem Funktionen klar abgegrenzt werden.

## Häufige Fehler und Tipps
Häufig wird das OSI-Modell mit dem TCP/IP-Modell verwechselt; nicht: OSI ist ein theoretisches Framework; stattdessen: TCP/IP ist die praktische Implementierung für die meisten Netzwerke. Ein weiterer Fehler ist die Annahme, dass alle Schichten immer implementiert sind; nicht: OSI dient als Referenz; stattdessen: Wähle Protokolle basierend auf Anforderungen aus. Bei der Fehlersuche beginne immer bei Schicht 1 und arbeite dich nach oben.

## Weiterführendes
Das OSI-Modell bildet die Grundlage für viele Netzwerkstandards und ist in der Ausbildung zu Daten- und Prozessanalyse essenziell. Für vertiefte Kenntnisse zu spezifischen Protokollen wie [TCP/UDP](tcp-udp) oder [IP](ip) sind separate Artikel verfügbar. Bei praktischen Implementierungen dominiert das TCP/IP-Modell.
