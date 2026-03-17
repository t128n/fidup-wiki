---
title: "Tunneling"
description: "Tunneling transportiert Daten über Netzwerke durch Einkapselung von Paketen in andere Pakete. Es ermöglicht sichere Verbindungen in VPNs und Übertragung nicht unterstützter Protokolle. Protokolle wie GRE und IPsec werden häufig verwendet."
sources:
  - title: "Was ist Tunneling? | Tunneling in Netzwerken"
    url: "https://www.cloudflare.com/de-de/learning/network-layer/what-is-tunneling/"
  - title: "Understand IPsec IKEv1 Protocol"
    url: "https://www.cisco.com/c/en/us/support/docs/security-vpn/ipsec-negotiation-ike-protocols/217432-understand-ipsec-ikev1-protocol.html"
  - title: "RFC 6071 - IP Security (IPsec) and Internet Key Exchange (IKE) Document Roadmap"
    url: "https://datatracker.ietf.org/doc/html/rfc6071"
---

Der Begriff **Tunneling** beschreibt eine Methode zum Transportieren von Datenpaketen über Netzwerke, indem Pakete eines Protokolls in die Nutzlast von Paketen eines anderen Protokolls eingebettet werden. Dadurch entsteht ein virtueller Tunnel durch das vermittelnde Netzwerk, der die Übertragung nicht unterstützter Protokolle ermöglicht und häufig in virtuellen privaten Netzwerken zur Sicherung der Kommunikation eingesetzt wird.

## Funktionsweise

### Einkapselung

Bei der Einkapselung werden der Header und die Nutzlast des ursprünglichen Pakets in den Nutzlastbereich eines neuen Pakets platziert. Das ursprüngliche Paket wird damit zur Nutzlast des neuen Pakets.

```mermaid
graph TD
    A[Originales Paket: Header + Nutzlast] --> B[Eingekapseltes Paket: Äußerer Header + (Innerer Header + Nutzlast)]
```

### Tunneling-Phasen

Der Tunneling-Prozess umfasst drei Phasen:

- Encapsulation am Tunnel-Eingang: Das ursprüngliche Paket wird in ein neues Paket eingebettet.
- Transport durch das Netzwerk: Das eingekapselte Paket wird über das vermittelnde Netzwerk geleitet.
- Decapsulation am Tunnel-Ausgang: Das ursprüngliche Paket wird aus dem umgebenden Paket extrahiert.

## Vorteile

Tunneling ermöglicht die Übertragung von Protokollen, die vom Netzwerk nicht unterstützt werden, beispielsweise IPv6 über IPv4. Es bietet Protokoll-Transparenz, ermöglicht verschlüsselte Verbindungen und erhöht die Flexibilität in Netzwerkinfrastrukturen.

## Anwendung in VPNs

### VPN-Grundlagen

Ein VPN stellt eine sichere, verschlüsselte Verbindung über ein öffentliches Netzwerk her und erweitert ein privates Netzwerk über öffentliche Infrastruktur. Tunneling dient als Transportmechanismus für VPN-Pakete.

### VPN-Protokolle

#### IPsec

IPsec ist eine Protokoll-Suite, die auf der IP-Schicht (Schicht 3 des [OSI-Modells](osi-modell)) arbeitet und Authentifizierung, Vertraulichkeit sowie Verschlüsselung bietet. Sie umfasst Komponenten wie AH (Authentication Header), ESP (Encapsulating Security Payload) und IKE (Internet Key Exchange).

IPsec funktioniert in zwei Phasen:

- Phase 1: IKE/ISAKMP SA für den Aufbau sicherer Verbindungen.
- Phase 2: IPsec SA für den Datenschutz.

Es gibt Transport Mode (nur Nutzlast verschlüsselt) und Tunnel Mode (ganzes Paket eingekapselt). IPsec-v2 und IPsec-v3 unterscheiden sich in SA-Verwaltung und Spezifikationen; IPsec-v3 bietet erweiterte Funktionen.

#### TLS-basiertes VPN

TLS arbeitet auf Schicht 5 oder 6 des [OSI-Modells](osi-modell) und bietet Sicherheit für Datenübertragungen. Es wird in VPNs für Verschlüsselung verwendet und gilt als Alternative zu IPsec, mit Vorteilen in der Anwendungsschicht-Integration, aber potenziell höherem Overhead.

### Split Tunneling

Split Tunneling ermöglicht, dass ein Teil des Datenverkehrs durch den VPN-Tunnel geleitet wird, während ein anderer Teil den Tunnel umgeht. Dies steigert die Leistung und Flexibilität, birgt jedoch Sicherheitsrisiken, da nicht geschützter Traffic anfällig für Angriffe ist. Typische Anwendungen sind parallele Verbindungen zu öffentlichen und privaten Netzwerken.

## Tunneling-Protokolle

### GRE

GRE kapselt Pakete eines Routing-Protokolls in Pakete eines anderen Protokolls und fügt GRE-Header sowie IP-Header hinzu. Es bietet keine eingebaute Verschlüsselung und wird häufig mit IPsec kombiniert für geschützte Tunnel.

### IP-in-IP

Dies ist die einfachste Form des Tunneling, bei der IP-Pakete in andere IP-Pakete eingekapselt werden. Es bietet keine Verschlüsselung und wird für IPv6-Übertragung verwendet.

### SSH-Tunneling

SSH-Tunneling nutzt Secure Shell für verschlüsselte Tunnel und arbeitet auf Schicht 7 des [OSI-Modells](osi-modell). Es unterstützt Port Forwarding und SOCKS-Proxy für sichere Verbindungen.

### PPTP

PPTP ist ein veraltetes Protokoll, das als unsicher gilt. Alternativen wie IPsec oder SSTP werden empfohlen.

### SSTP

SSTP basiert auf HTTPS und durchdringt Firewalls. Es ist Microsoft-spezifisch und bietet SSL/TLS-basierte Sicherheit.

### L2TP

L2TP arbeitet auf Schicht 2 des [OSI-Modells](osi-modell) und wird typischerweise mit IPsec kombiniert, um Sicherheit zu gewährleisten.

### VXLAN

VXLAN kapselt MAC-Adressen in UDP- oder IP-Paketen und erweitert VLANs auf mehr als 4096 in virtuellen Netzwerken und Cloud-Umgebungen.

## Sicherheit und Performance

### Sicherheitsrisiken

Reine Tunneling-Protokolle wie GRE oder IP-in-IP bieten keine Verschlüsselung, was sie anfällig für Man-in-the-Middle-Angriffe macht. Authentifizierung und Verschlüsselung müssen zusätzlich implementiert werden.

### Performance-Aspekte

Einkapselung erzeugt Overhead durch zusätzliche Header, was Latenz und Bandbreite beeinflusst. Optimierungen wie Hardware-Beschleunigung können dies minimieren.

## Häufige Fehler

Tunneling wird häufig mit Verschlüsselung verwechselt. Reine Tunneling-Protokolle wie GRE bieten keine Sicherheit. Eine Kombination mit IPsec erhöht den Schutz.

OSI-Schicht-Positionierungen werden häufig ignoriert. Schicht-Positionen sind für eine korrekte Netzwerkarchitektur relevant.

## Beispiele

Ein Unternehmen nutzt IPsec-Tunneling für VPN-Zugang: Ein Remote-Mitarbeiter kapselt IPv6-Pakete in IPv4-Paketen ein, die über das Internet geleitet und am Firmennetzwerk decapsuliert werden. Dies ermöglicht sichere IPv6-Kommunikation über IPv4-Netzwerke.

Ein weiteres Beispiel ist GRE over IPsec: GRE kapselt Routing-Informationen, IPsec verschlüsselt den gesamten Tunnel für sicheren Transport.

## Einzelnachweise

1. Cloudflare: Definition und Einkapselung.
2. Cisco: IPsec-Details.
3. RFC 6071: IPsec-Spezifikationen.
