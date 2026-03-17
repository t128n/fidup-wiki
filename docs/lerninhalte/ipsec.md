---
title: "IPsec"
description: "IPsec ist eine Gruppe von Protokollen zur Sicherung von IP-Verbindungen, häufig für VPNs verwendet. Es bietet Verschlüsselung, Authentifizierung und Integritätsschutz durch AH, ESP und IKE."
sources:
  - title: "IPsec – Wikipedia"
    url: "https://en.wikipedia.org/wiki/IPsec"
  - title: "IPsec – Wikipedia (German)"
    url: "https://de.wikipedia.org/wiki/IPsec"
  - title: "IPsec – Security Architecture for IP (VPN)"
    url: "https://www.elektronik-kompendium.de/sites/net/0906191.htm"
---

**IPsec** bezeichnet eine Gruppe von Protokollen zur Sicherung von Verbindungen auf der Ebene des [Internetprotokolls](tcp-ip-modell) (IP). Es findet häufig Anwendung in [VPNs](vpn-modelle) und ermöglicht die Verschlüsselung von IP-Paketen, die Authentifizierung der Quelle sowie den Schutz der Integrität der Daten.


## Kurzüberblick
IPsec erreicht drei Sicherheitsziele: Vertraulichkeit durch Verschlüsselung, Integrität durch Hash-Funktionen und Authentizität durch digitale Signaturen. Es basiert auf den Protokollen Authentication Header (AH) für Integrität und Authentifizierung, Encapsulating Security Payload (ESP) für Verschlüsselung und Integrität sowie Internet Key Exchange (IKE) für den automatischen Schlüsselaustausch. IPsec arbeitet in zwei Modi: Transportmodus für End-to-End-Schutz und Tunnelmodus für Netzwerk-zu-Netzwerk-Verbindungen. Eine Security Association (SA) definiert die Parameter für jede sichere Verbindung.

## Kontext und Einordnung
IPsec gehört zur IP-Sicherheitsarchitektur und dient häufig in VPNs zur Sicherstellung der Kommunikation über unsichere Netze wie das Internet. Es integriert sich nahtlos in bestehende IP-basierte Netzwerke, ohne dass Anwendungen angepasst werden müssen. Im Vergleich zu anderen VPN-Technologien wie SSL VPN bietet IPsec eine höhere Sicherheitsstufe auf Netzwerkebene, erfordert jedoch eine komplexere Konfiguration.

## Begriffe und Definitionen

- **Authentication Header (AH)**: Protokoll, das die Integrität der IP-Pakete und die Authentizität der Quelle sicherstellt, ohne Verschlüsselung. AH modifiziert den IP-Header, was es inkompatibel mit NAT macht.
- **Encapsulating Security Payload (ESP)**: Protokoll, das Verschlüsselung, Authentifizierung und Integrität bietet. ESP kann im Transportmodus nur den Payload verschlüsseln oder im Tunnelmodus das gesamte Paket.
- **Security Association (SA)**: Logische, unidirektionale Verbindung, die die Sicherheitsparameter wie Algorithmen, Schlüssel und Lebensdauer definiert. SAs werden in einer Security Association Database (SAD) gespeichert und sind keine Protokolle, sondern Kontexte.
- **Internet Key Exchange (IKE)**: Protokoll für den automatischen Austausch von Schlüsseln und die Aushandlung von SAs. IKEv2 ist die modernere Version mit verbesserter NAT-Unterstützung.
- **Transportmodus**: IPsec-Header werden zwischen IP-Header und Payload eingefügt; ursprüngliche IP-Adressen bleiben sichtbar.
- **Tunnelmodus**: Das gesamte ursprüngliche IP-Paket wird in ein neues IP-Paket eingekapselt; Netzwerktopologie bleibt verborgen.
- **NAT-Traversal (NAT-T)**: Erweiterung, die IPsec durch NAT-Router ermöglicht, indem ESP-Pakete in UDP eingekapselt werden.

## Vorgehen
Die Einrichtung einer IPsec-Verbindung erfolgt in zwei Phasen:

1. **IKE-Phase 1**: Aushandlung der IKE-SA für sichere Kommunikation zwischen den Endpunkten.
2. **IKE-Phase 2**: Erstellung der IPsec-SAs für den Datenverkehr.
3. **Datenübertragung**: Pakete werden entsprechend dem Modus (Transport oder Tunnel) verarbeitet und übertragen.

Im Transportmodus werden nur die Daten verschlüsselt, während im Tunnelmodus das gesamte Paket eingekapselt wird, was zusätzlichen Overhead verursacht.

### Transport- vs. Tunnelmodus
| Aspekt | Transportmodus | Tunnelmodus |
|--------|----------------|-------------|
| Verschlüsselungsumfang | Nur Payload | Gesamtes Paket (IP-Header + Payload) |
| IP-Adressen | Ursprüngliche Adressen sichtbar | Neue Adressen für Tunnel-Endpunkte |
| Overhead | Geringer | Höher (zusätzlicher IP-Header) |
| Anwendung | Host-to-Host, Host-to-Gateway | Gateway-to-Gateway, Netzwerk-zu-Netzwerk |
| NAT-Kompatibilität | Problematisch bei AH | Besser mit ESP, NAT-T erforderlich |

## Internet Key Exchange (IKE)
IKE dient der automatischen Schlüsselverwaltung und Aushandlung von SAs. In IKEv1 gibt es drei Modi: Main Mode für sichere Aushandlung, Aggressive Mode für schnelle Verbindungen und Quick Mode für IPsec-SAs. IKEv2 vereinfacht dies auf zwei Austausche: IKE_SA_INIT und IKE_AUTH. Authentifizierung erfolgt über Pre-Shared Keys (PSK), Zertifikate oder öffentliche Schlüssel. IKE verwendet UDP-Ports 500 (IKEv1) oder 4500 (IKEv2/NAT-T).

## NAT-Traversal
Da AH den IP-Header modifiziert und ESP ohne Anpassung durch NAT blockiert wird, ist NAT-Traversal essenziell. NAT-T kapselt ESP-Pakete in UDP-Pakete (Port 4500), wodurch sie NAT-Router passieren können. Die Entscheidung für NAT-T wird während der IKE-Aushandlung getroffen.

## Beispiele
Ein einfaches Beispiel für eine IPsec-VPN-Verbindung zwischen zwei Netzwerken: Ein Gateway verschlüsselt den Datenverkehr im Tunnelmodus und sendet ihn über das Internet zum entfernten Gateway, das die Pakete entschlüsselt. Dabei bleiben interne IP-Adressen verborgen.

Bei Host-to-Host-Kommunikation im Transportmodus authentifiziert ESP den Absender und verschlüsselt nur die Nutzdaten, ohne die IP-Adressen zu ändern.

## Häufige Fehler und Tipps

- **Falsche Moduswahl**: Für VPNs eignet sich der Tunnelmodus, um Netzwerktopologie zu verbergen; Transportmodus ist für direkte Host-Kommunikation geeignet.
- **NAT-Probleme**: NAT-T sollte aktiviert werden, wenn NAT-Router involviert sind, da AH sonst fehlschlägt.
- **UDP-Fehlannahme**: IPsec-Daten werden nicht als UDP übertragen; AH und ESP sind eigenständige IP-Protokolle (Nummern 51 und 50).
- **SA-Verwirrung**: SA ist kein Protokoll, sondern ein Sicherheitskontext und wird häufig mit IKE verwechselt.
- Tipp: Die Konnektivität lässt sich mit Tools wie ping oder traceroute prüfen.


## Weiterführendes
Für praktische Implementierung können RFC 4301 für IPsec-Architektur und RFC 7296 für IKEv2 konsultiert werden. Ein Vergleich von IPsec mit SSL VPN ist für unterschiedliche Anwendungsfälle hilfreich.
