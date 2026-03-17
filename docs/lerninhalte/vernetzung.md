---
title: "Vernetzung"
description: "Vernetzung ermöglicht den Datenaustausch zwischen Geräten und Systemen. Sie umfasst lokale Netzwerke (LAN), weitreichende Netzwerke (WAN), städtische Netzwerke (MAN) und virtuelle private Netzwerke (VPN). Technologien wie Ethernet, Wi-Fi und IoT-Protokolle unterstützen Ressourcenteilung, Zugänglichkeit und Skalierbarkeit, erfordern aber Sicherheitsmaßnahmen."
sources:
  - title: "RFC 1392 - Internet Users' Glossary"
    url: "https://datatracker.ietf.org/doc/html/rfc1392"
  - title: "MQTT - The Standard for IoT Messaging"
    url: "https://mqtt.org/"
  - title: "TCP - Glossary | MDN Web Docs"
    url: "https://developer.mozilla.org/en-US/docs/Glossary/TCP"
---

**Vernetzung** ist die Verbindung verschiedener Geräte, Systeme oder Netzwerke, um den Austausch von Daten und Ressourcen zu ermöglichen. Sie bildet die Grundlage für Kommunikation und Zusammenarbeit in der Daten- und Prozessanalyse, indem sie lokale und globale Verbindungen unterstützt.

## Lernziele

Dieser Artikel erklärt verschiedene Arten von Netzwerken wie LAN, WAN und VPN. Er beschreibt die Funktionsweise von Vernetzungstechnologien wie Ethernet und IoT-Protokollen. Zudem werden Vorteile und Nachteile der Vernetzung sowie bewährte Praktiken zur Sicherung behandelt.

## Begriffsdefinitionen

Vernetzung bezeichnet die Verbindung von verschiedenen Geräten, Systemen oder Netzwerken, um den Austausch von Daten und Ressourcen zu ermöglichen. Sie unterscheidet sich von isolierten Systemen dadurch, dass sie Interaktion und gemeinsame Nutzung fördert.

## Arten der Vernetzung

Vernetzung lässt sich nach geografischer Ausdehnung und Zweck in verschiedene Arten unterteilen. Die Abgrenzung erfolgt primär geografisch, nicht technologisch.

### LAN (Local Area Network)

Ein LAN ist ein Datennetzwerk, das einen begrenzten geografischen Bereich abdeckt, typischerweise wenige Quadratkilometer. Es ermöglicht die Verbindung von Computern und anderen Geräten zum gemeinsamen Zugriff auf Ressourcen wie Drucker, Dateiserver und Internetverbindungen.

### WAN (Wide Area Network)

Ein WAN ist ein Netzwerk, das große geografische Bereiche abdeckt, typischerweise Städte, Länder oder Kontinente. WANs werden häufig von Dienstanbietern bereitgestellt und nutzen Kommunikationsleitungen wie Glasfaser, Kupferkabel oder Satellitenverbindungen. Das Internet ist das weltweit größte WAN.

### MAN (Metropolitan Area Network)

Ein Metropolitan Area Network ist ein Netzwerk, das einen Bereich annähernd der Größe einer Stadt oder eines großen geografischen Gebiets abdeckt. MANs verbinden oft mehrere LANs und werden von Telekommunikationsanbietern oder städtischen Unternehmen betrieben.

### VPN (Virtual Private Network)

Ein Virtual Private Network ist ein verschlüsselter, sicherer Zugang zu einem privaten Netzwerk über öffentliche Netzwerke wie das Internet. VPNs erstellen sichere Tunnel durch Verschlüsselung und Authentifizierung. Typische Protokolle sind IPSec und SSL/TLS.

## Vernetzungstechnologien

Vernetzung nutzt verschiedene Technologien für kabelgebundene und drahtlose Kommunikation sowie spezifische Protokolle.

### Kabelgebundene Technologien

[Ethernet](ethernet) ist ein weit verbreiteter Standard für kabelgebundene LANs, der die Kommunikation zwischen Geräten über Twisted-Pair-Kabel oder Glasfaser ermöglicht. Es verwendet das CSMA/CD-Verfahren und bietet Geschwindigkeiten von 10 Mbit/s bis über 400 Gbit/s.

### Drahtlose Technologien

Wi-Fi ist eine Familie von drahtlosen Netzwerkprotokollen basierend auf dem IEEE 802.11-Standard, die die drahtlose Vernetzung von Geräten über Funkwellen ermöglicht. Bluetooth ist ein Industriestandard für drahtlose Kurzstreckenkommunikation zwischen Geräten, ideal für persönliche Netzwerke, mit einer typischen Reichweite von 10 Metern.

### Netzwerkprotokolle

Das Internet Protocol (IP) ist ein Netzwerkprotokoll auf der Vermittlungsschicht, das die Adressierung und den Austausch von Datenpaketen über Netzwerke regelt. Es ist verbindungslos und unterscheidet IPv4 und IPv6.

### IoT-Protokolle

MQTT ist ein OASIS-Standard-Messagingprotokoll für das [Internet der Dinge](iot). Es ist als leichtgewichtiges Publish/Subscribe-Messaging konzipiert, das einen zentralen Broker nutzt und drei Quality of Service (QoS)-Stufen bietet: 0 für höchstens einmal, 1 für mindestens einmal und 2 für exakt einmal. Zigbee ist ein drahtloses Kommunikationsprotokoll basierend auf IEEE 802.15.4, das Mesh-Netzwerke und niedrigen Energieverbrauch unterstützt. Z-Wave ist ein proprietäres drahtloses Protokoll für die Heimautomatisierung, das zuverlässige Kommunikation mit geringem Energieverbrauch ermöglicht und sich von Zigbee durch proprietäre Standards und Sub-GHz-Frequenzen unterscheidet.

## Vorteile der Vernetzung

Vernetzung bietet Ressourcenteilung, wie die gemeinsame Nutzung von Druckern und Speichern. Sie ermöglicht Zugänglichkeit von Daten und Anwendungen von verschiedenen Standorten aus, was die Zusammenarbeit fördert. Skalierbarkeit erlaubt die einfache Erweiterung um neue Geräte oder Benutzer. Zentralisierte Verwaltung erleichtert die Überwachung und den Betrieb.

## Nachteile der Vernetzung

Vernetzung birgt Sicherheitsrisiken, da vernetzte Systeme anfälliger für Cyberangriffe und Datenlecks sind. Die Komplexität der Verwaltung und Konfiguration erfordert Fachwissen. Eine Abhängigkeit von der Infrastruktur führt zu Ausfällen bei Netzwerkunterbrechungen. Kosten für Einrichtung und Wartung können hoch sein.

## Best Practices für die Vernetzung

Sicherheitsmaßnahmen wie Firewalls, Verschlüsselung und Authentifizierung sind essenziell. Regelmäßige Wartung umfasst Updates und Überprüfungen. Dokumentation von Netzwerkarchitekturen hilft bei der Verwaltung. Monitoring erkennt Anomalien und stellt die Leistung sicher.

## Beispiele

Ein Büro-LAN verbindet PCs, Drucker und Server über Ethernet, um gemeinsame Ressourcen zu nutzen. In einem IoT-Szenario sendet ein Temperatursensor Daten via MQTT an einen Broker, wo sie von einer Anwendung abonniert werden, um Klimaanlagen zu steuern.

## Häufige Fehler und Tipps

Vernetzung ohne Sicherheitsmaßnahmen birgt Risiken, da Systeme anfälliger für Cyberangriffe sind. Die Verwendung von Firewalls und Verschlüsselung verhindert Cyberangriffe. Komplexe Netzwerke ohne Dokumentation erschweren die Verwaltung. Regelmäßige Aktualisierung von Plänen erleichtert die Fehlerbehebung.

## Selbsttest

Was ist der Hauptunterschied zwischen LAN und WAN? Wie funktioniert das Publish/Subscribe-Modell in MQTT? Welche QoS-Stufe in MQTT garantiert exakte Zustellung? Warum sind VPNs wichtig für Sicherheit? Welche Technologie ermöglicht Mesh-Netzwerke in IoT? Was ist der Vorteil von IPv6 gegenüber IPv4?
