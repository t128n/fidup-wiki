---
title: "Cloud-Computing"
description: "Cloud-Computing ist ein Modell für den bedarfsorientierten Zugriff auf IT-Ressourcen über Netzwerke. Es umfasst verschiedene Service- und Bereitstellungsmodelle wie IaaS, PaaS und SaaS sowie Public, Private und Hybrid Clouds."
sources:
  - title: "Cloud Computing Grundlagen"
    url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Grundlagen/grundlagen_node.html"
  - title: "Big Data und Cloud Computing"
    url: "https://www.alexanderthamm.com/de/blog/big-data-und-cloud-computing/"
---

**Cloud-Computing** (deutsch: Rechnerwolke) bezeichnet die bedarfsorientierte Bereitstellung von IT-Ressourcen über ein Netzwerk, meist das Internet. Zu diesen Ressourcen zählen Rechenleistung, Speicherplatz, Datenbanken und spezialisierte Anwendungen. Die Dienste werden in der Regel automatisiert konfiguriert und nach tatsächlichem Verbrauch abgerechnet. Cloud-Computing bildet das technologische Fundament für skalierbare IT-Architekturen, mobile Dienste und komplexe [Datenanalysen](datenanalyse).

## Lernziele
Der Artikel vermittelt Kenntnisse über folgende Schwerpunkte:

* Grundlegende Merkmale von Cloud-Computing nach NIST und ISO.
* Abgrenzung der Servicemodelle IaaS, PaaS und SaaS.
* Übersicht der Bereitstellungsmodelle (Public, Private, Hybrid, Community).
* Relevanz der Cloud für [Big-Data](big-data)-Analysen.
* Bewertung von Chancen, Risiken und wirtschaftlichen Faktoren.

## Merkmale nach NIST/ISO
Cloud-Computing unterscheidet sich von klassischem IT-Outsourcing durch fünf Kernmerkmale gemäß NIST (National Institute of Standards and Technology):

* **On-demand Self-Service**: Nutzer fordern Ressourcen eigenständig an, ohne manuelle Interaktion mit dem Anbieter.
* **Broad Network Access**: Dienste sind über Standardprotokolle und verschiedene Endgeräte netzweit verfügbar.
* **Resource Pooling**: Der Anbieter bündelt physische Ressourcen für mehrere Kunden gleichzeitig (Multi-Tenancy), wobei die Zuweisung dynamisch erfolgt.
* **Rapid Elasticity**: Die Kapazitäten lassen sich schnell und oft automatisiert an wechselnde Anforderungen anpassen.
* **Measured Service**: Die Ressourcennutzung wird präzise erfasst und ermöglicht eine verbrauchsabhängige Abrechnung (Pay-per-Use).

## Kontext in der Datenanalyse
In der Analyse fungiert die Cloud als zentraler Ermöglicher (Enabler). Rechenintensive Aufgaben, wie das Training von Machine-Learning-Modellen oder die Verarbeitung massiver Datenmengen, erfordern Infrastrukturen, deren lokaler Betrieb oft unwirtschaftlich wäre. Die Cloud ermöglicht es, diese Kapazitäten kurzfristig zu mieten und die Kosten direkt an den Projektumfang zu koppeln.

## Servicemodelle
Die Verantwortlichkeit zwischen Anbieter und Nutzer wird durch das *Shared Responsibility Model* (Modell der geteilten Verantwortung) geregelt. Je nach Servicemodell verschieben sich diese Grenzen:

### Infrastructure as a Service (IaaS)
Bereitstellung grundlegender Infrastruktur wie virtuelle Server, Speicher und Netzwerke. Nutzer verwalten Betriebssysteme, Middleware und Anwendungen selbst. Dies bietet die höchste Kontrolle, erfordert aber auch den größten Administrationsaufwand.

### Platform as a Service (PaaS)
Bereitstellung von Laufzeit- und Entwicklungsumgebungen. Nutzer konzentrieren sich auf die Entwicklung und Ausführung eigener Software, während der Anbieter die zugrunde liegende Infrastruktur (Wartung, Updates des Betriebssystems) übernimmt.

### Software as a Service (SaaS)
Bereitstellung fertiger Anwendungen über das Internet, meist via Webbrowser. Der Anbieter ist für den gesamten Software-Stack verantwortlich. Nutzer konsumieren den Dienst lediglich, ohne Einfluss auf die technische Basis zu nehmen.

## Bereitstellungsmodelle
Je nach Zugriffskreis und Einsatzort werden folgende Modelle unterschieden:

* **Public Cloud**: Dienste sind für die allgemeine Öffentlichkeit über das Internet zugänglich.
* **Private Cloud**: Die Infrastruktur wird exklusiv für eine Organisation betrieben (intern oder extern gehostet).
* **Hybrid Cloud**: Kombination aus Public und Private Cloud, um sensible Daten intern zu halten und Lastspitzen extern abzufangen.
* **Community Cloud**: Gemeinsame Nutzung einer Cloud durch Organisationen mit ähnlichen Anforderungen (z. B. Behörden oder Branchenverbünde).
* **Multi-Cloud**: Paralleler Einsatz von Diensten verschiedener Provider zur Vermeidung von Abhängigkeiten (*Vendor Lock-in*).

## Vorgehen bei der Einführung
Bei der Integration von Cloud-Lösungen sind folgende Schritte wesentlich:

1. **Anforderungsdefinition**: Ermittlung von benötigter Rechenleistung, Latenzanforderungen und Speicherdauer.
2. **Compliance-Prüfung**: Abgleich mit [Datenschutzvorgaben](datenschutz) (z. B. DSGVO) und Identifikation zulässiger Serverstandorte.
3. **Wirtschaftlichkeitsanalyse**: Vergleich von Investitionskosten (CapEx) für eigene Hardware mit laufenden Betriebskosten (OpEx) der Cloud.
4. **Integrationsdesign**: Planung der Vernetzung mit lokalen Systemen und [Schnittstellen](api-schnittstellen).

## Beispiel
Ein Unternehmen implementiert eine automatisierte Qualitätskontrolle mittels Bilderkennung. Da die Rechenlast schwankt, wird eine **PaaS-Lösung** gewählt.
Bilder werden über eine Schnittstelle an den Analysedienst übertragen. Die Plattform skaliert für die Bearbeitungszeit automatisch auf die benötigte Anzahl an Rechenkernen und reduziert diese danach wieder auf null. Kosten entstehen nur für die tatsächlich verarbeiteten Bilder.

## Häufige Fehler und Tipps
> **Merke**: Cloud-Computing ist ein Werkzeug für Flexibilität, kein automatischer Garant für Kosteneinsparung. Eine unpassende Architektur kann zu unerwarteten Ausgaben führen.

* **Fehler**: Vernachlässigung von Datenübertragungskosten (*Egress Fees*) beim Abruf großer Mengen aus der Cloud.
* **Tipp**: Datenverarbeitung möglichst nah am Speicherort (Cloud-Region) durchführen, um Kosten und Latenzen zu minimieren.
* **Fehler**: Fehlkonfiguration von Sicherheitsgruppen oder Firewalls in IaaS-Umgebungen.
* **Tipp**: Eine Strategie für [Backups](backup) und Disaster Recovery festlegen, da die Verfügbarkeitsgarantie des Providers nicht automatisch die Integrität der Nutzerdaten einschließt.

## Selbsttest

1. Inwiefern unterscheidet sich die Nutzerverantwortung bei IaaS im Vergleich zu SaaS?
2. Welche NIST-Merkmale ermöglichen die Reaktion auf Lastschwankungen?
3. Welches Bereitstellungsmodell eignet sich für die Trennung von sensiblen und unkritischen Daten?
4. Wie beeinflusst das Pay-per-Use-Modell die Wirtschaftlichkeit von [Big-Data](big-data)-Projekten?
5. Warum stellt der "Vendor Lock-in" ein strategisches Risiko dar?
