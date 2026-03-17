---
title: "Domain Name System (DNS)"
description: "Das Domain Name System (DNS) ist die zentrale Namensauflösung im Internet, die Domainnamen in IP-Adressen übersetzt. Der Artikel erklärt die hierarchische Struktur, den Auflösungsprozess sowie sicherheitsrelevante Protokolle wie DNSSEC und DoH."
sources:
  - title: "DNS - Domain Name System (Namensauflösung)"
    url: "https://www.elektronik-kompendium.de/sites/net/0901141.htm"
  - title: "DNS-Records einfach erklärt"
    url: "https://www.pcffm.de/dns-records-erklarung-a-aaaa-mx-ns-cname-txt-alias-amp-srv/"
  - title: "Phishing - Spoofing - DNS-Hijacking"
    url: "https://www.webservice-schmitz.de/phishing-spoofing-dns-hijacking/"
---

Das **Domain Name System** (DNS) ist ein weltweit verteiltes Verzeichnis, das menschenlesbare Domainnamen in maschinenlesbare [IP-Adressen](ip) übersetzt. Es ermöglicht die Adressierung von Netzwerkressourcen über einprägsame Namen und ist damit eine Kernkomponente der Internet-Infrastruktur.

## Lernziele
Nach Abschluss dieses Artikels können folgende Aspekte erläutert werden:

- Die hierarchische Baumstruktur von der Root bis zur Subdomain.
- Der Ablauf der Namensauflösung (rekursiv vs. iterativ).
- Die Funktion gängiger Resource Records (A, AAAA, MX, CNAME).
- Sicherheitsmechanismen zur Absicherung von DNS-Abfragen (DNSSEC, DoH, DoT).
- Die Bedeutung des DNS für [Schnittstellen](api-schnittstellen) und Cloud-Dienste.

## Hierarchie des DNS
Das DNS ist als dezentrale Baumstruktur organisiert. Diese Hierarchie stellt sicher, dass keine einzelne Instanz alle Daten verwalten muss, was die Skalierbarkeit und Ausfallsicherheit erhöht.

1.  **Root-Ebene (Wurzel):** Die Spitze wird durch einen Punkt (`.`) dargestellt (z. B. `example.com.`). Root-Server verweisen auf die zuständigen Server der Top-Level-Domains.
2.  **Top-Level-Domain (TLD):** Die oberste Namensebene, unterteilt in generische Endungen (z. B. `.com`, `.org`) und länderspezifische Kennungen (z. B. `.de`).
3.  **Second-Level-Domain (SLD):** Der registrierbare Name einer Organisation (z. B. `fidup` in `fidup.wiki`).
4.  **Subdomain / Hostname:** Bezeichnet spezifische Rechner oder Dienste innerhalb einer Domain (z. B. `www` oder `mail`).

Ein vollständiger Name, der alle Ebenen inklusive des Root-Punkts umfasst, heißt *Fully Qualified Domain Name* (FQDN).

## Ablauf der Namensauflösung
Die Suche nach einer IP-Adresse erfolgt meist über einen **DNS-Resolver**. Dabei kommen zwei Abfragearten zum Einsatz:

### Rekursive Abfrage
Der Client (z. B. ein Browser) sendet die Anfrage an den DNS-Resolver (oft vom Provider). Dieser übernimmt die vollständige Suche: Er fragt nacheinander verschiedene Server ab, bis er das Ergebnis findet, und liefert die finale IP-Adresse an den Client zurück.

### Iterative Abfrage
In diesem Modus verweist ein Nameserver bei Unkenntnis auf die nächste zuständige Stelle in der Hierarchie. Er antwortet beispielsweise: „Ich kenne die Adresse nicht, aber frage den Server für .de“. Der DNS-Resolver arbeitet sich so Schritt für Schritt durch die Baumstruktur.

> **Caching:** Um die Last zu senken, speichern DNS-Resolver und Betriebssysteme Ergebnisse für eine definierte Zeit (*Time to Live*, TTL) zwischen.

## Wichtige Resource Records
Die Informationen einer Zone werden in verschiedenen Eintragstypen gespeichert:

| Typ | Funktion | Beispiel |
| :--- | :--- | :--- |
| **A** | IPv4-Adresse eines Hosts | `example.com -> 93.184.216.34` |
| **AAAA** | IPv6-Adresse eines Hosts | `example.com -> 2606:2800:220...` |
| **CNAME** | Alias für einen anderen Namen | `www.example.com -> example.com` |
| **MX** | Zuständiger Mailserver | `example.com -> mail.example.com` |
| **TXT** | Freitext (z. B. für SPF-Sicherheit) | `v=spf1 include:_spf.google.com ~all` |
| **PTR** | Reverse-Lookup (IP zu Name) | `34.216.184.93.in-addr.arpa -> example.com` |
| **SRV** | Standort von Diensten (z. B. SIP) | `_sip._tcp.example.com` |

## Sicherheitsmechanismen
Klassisches DNS ist unverschlüsselt und anfällig für Manipulationen. Zur Absicherung existieren folgende Standards:

- **DNSSEC (DNS Security Extensions):** Nutzt digitale Signaturen, um die Authentizität der Antworten zu garantieren. Dies verhindert *DNS-Spoofing* (Einschleusen falscher IP-Adressen).
- **DNS over TLS (DoT):** Verschlüsselt den DNS-Verkehr über das TLS-Protokoll auf Port 853.
- **DNS over HTTPS (DoH):** Kapselt DNS-Anfragen in Standard-HTTPS-Traffic (Port 443). Dies schützt die Privatsphäre und erschwert das Blockieren von Anfragen.

## Praxisbezug für die Datenanalyse
Ein Verständnis von DNS ist für die [Datenanalyse](datenanalyse) in vernetzten Systemen unerlässlich:

- **Dienst-Erreichbarkeit:** Datenbanken in [Cloud-Umgebungen](cloud-computing) werden über Hostnamen angesprochen. Bei DNS-Fehlern schlagen automatisierte ETL-Strecken fehl.
- **Service Discovery:** Microservices nutzen oft DNS (insbesondere SRV-Records), um dynamisch verfügbare API-Instanzen zu lokalisieren.
- **Fehlerdiagnose:** Hohe Latenzen in Anwendungen können durch langsame DNS-Antwortzeiten verursacht werden (DNS-Latency).

## Typische Fehlerquellen

- **Veralteter lokaler Cache:** Nach Änderungen an DNS-Einträgen liefert der lokale Rechner noch alte IPs. Ein manuelles Leeren des Caches (*Flush DNS*) behebt dies.
- **Zu hohe TTL:** Lange Zwischenspeicherungszeiten verzögern die weltweite Aktualisierung von neuen IP-Adressen.
- **Fehlerhafte MX-Einträge:** Ohne korrekt gesetzte Prioritäten bei mehreren Mailservern kann der E-Mail-Empfang gestört werden.

## Selbsttest

1. Welchen Zweck erfüllt die Root-Ebene im DNS?
2. Worin unterscheidet sich eine rekursive von einer iterativen Abfrage?
3. Welcher Record-Typ wird für die Mail-Zustellung benötigt?
4. Wie schützt DNSSEC vor Manipulationen?
5. Warum ist Caching für die Performance des DNS entscheidend?
