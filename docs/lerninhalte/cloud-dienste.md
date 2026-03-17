---
title: "Cloud-Dienste"
description: "Cloud-Dienste (IaaS, PaaS, SaaS) ermöglichen den flexiblen Zugriff auf IT-Ressourcen über das Internet und definieren die Verantwortlichkeiten zwischen Anbieter und Kunden neu."
sources:
  - title: "Cloud Computing Grundlagen"
    url: "https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Grundlagen/grundlagen_node.html"
  - title: "Cloud Computing • Definition"
    url: "https://wirtschaftslexikon.gabler.de/definition/cloud-computing-53360"
---

**Cloud-Dienste** bezeichnen IT-Modelle, bei denen Ressourcen wie Rechenleistung, Speicherplatz oder Software bedarfsorientiert und dynamisch über ein Netzwerk – meist das Internet – bereitgestellt werden. Unternehmen nutzen hierbei einen skalierbaren Pool gemeinsam verwendeter IT-Ressourcen, die per Self-Service verwaltet werden können. Dieses Modell entkoppelt die Nutzung von der physischen Infrastruktur und ermöglicht eine Bereitstellung, die in ihrer Verfügbarkeit oft mit der öffentlichen Versorgung durch Strom oder Wasser verglichen wird.

## Lernziele
Dieser Artikel vermittelt folgende Kompetenzen:

* Benennung der wesentlichen Merkmale von Cloud Computing nach NIST/BSI.
* Differenzierung der Service-Modelle IaaS, PaaS und SaaS.
* Erläuterung des Shared Responsibility Models und der damit verbundenen Zuständigkeiten.
* Einordnung wirtschaftlicher Vorteile (Wechsel von CAPEX zu OPEX).
* Bewertung typischer Herausforderungen wie dem Vendor Lock-in.

## Merkmale von Cloud Computing
Gemäß der Definition des Bundesamtes für Sicherheit in der Informationstechnik (BSI) und des National Institute of Standards and Technology (NIST) zeichnet sich Cloud Computing durch fünf Kerneigenschaften aus:

1.  **On-Demand Self-Service:** Nutzer können Ressourcen (z. B. Serverzeit oder Speicher) einseitig und automatisch ohne menschliche Interaktion mit dem Anbieter anfordern.
2.  **Broad Network Access:** Die Dienste sind über das Netzwerk verfügbar und der Zugriff erfolgt über Standardmechanismen (z. B. Webbrowser oder APIs).
3.  **Resource Pooling:** Die Ressourcen des Anbieters werden gebündelt, um mehrere Kunden (Multi-Tenancy) flexibel zu bedienen. Die physische Lokalisierung der Ressourcen bleibt für den Nutzer meist transparent.
4.  **Rapid Elasticity:** Kapazitäten können kurzfristig und oft automatisiert hoch- oder herunterskaliert werden, um sich dem aktuellen Bedarf anzupassen.
5.  **Measured Service:** Die Inanspruchnahme der Ressourcen wird überwacht, gesteuert und für den Kunden transparent nach dem Verursacherprinzip abgerechnet.

## Service-Modelle
Die Bereitstellung erfolgt in verschiedenen Abstraktionsstufen. Diese definieren, welche Komponenten der IT-Infrastruktur vom Anbieter betrieben und welche vom Kunden verwaltet werden.

### Infrastructure as a Service (IaaS)
IaaS stellt die fundamentale Hardware bereit, darunter virtuelle Instanzen, Speicher und Netzwerke. Der Kunde ist für die Installation und Wartung der Betriebssysteme, Middleware sowie der Anwendungen verantwortlich. Dieses Modell bietet maximale Flexibilität und Kontrolle, setzt jedoch tiefgehende Administrationskenntnisse voraus.

### Platform as a Service (PaaS)
PaaS bietet eine optimierte Laufzeitumgebung für Entwicklung und Betrieb von Anwendungen. Der Anbieter übernimmt das Management der Infrastruktur und des Betriebssystems. Entwickler können sich direkt auf die Applikationslogik konzentrieren, was moderne Ansätze wie [DevOps](devops) unterstützt. Skalierung und Updates der Plattform erfolgen meist automatisiert durch den Anbieter.

### Software as a Service (SaaS)
SaaS ist die oberste Schicht der Cloud-Modelle. Fertige Softwareanwendungen werden über das Internet (meist per Browser) konsumiert. Der Anbieter trägt die volle Verantwortung für den Betrieb, die Wartung und die [IT-Sicherheit](it-sicherheit). Nutzer greifen in der Regel über Abonnement-Modelle auf die Funktionen zu, ohne sich um die technische Basis kümmern zu müssen.

## Shared Responsibility Model
Ein zentraler Aspekt der Cloud-Nutzung ist die geteilte Verantwortung (*Shared Responsibility Model*). Es regelt präzise, welche Sicherheitsaufgaben beim Anbieter und welche beim Kunden liegen.

> **Merke:** Der Anbieter ist für die Sicherheit **der** Cloud zuständig (Infrastruktur, Hardware), während der Kunde die Sicherheit **in** der Cloud verantwortet (Daten, Konfiguration).

*   **Verantwortung des Anbieters:** Physische Sicherheit der Rechenzentren, Wartung der Hardware und Integrität der Virtualisierungsschicht.
*   **Verantwortung des Kunden:** Konfiguration der Dienste, [Datenschutz](datenschutz) der verarbeiteten Informationen sowie die Identitäts- und Zugriffsverwaltung (IAM).

Die operative Last des Kunden sinkt von IaaS über PaaS hin zu SaaS, doch die Letztverantwortung für die eigenen Daten verbleibt grundsätzlich beim Kunden.

## Alles als Dienst (XaaS)
Der Begriff *Everything as a Service* (XaaS) beschreibt die Ausweitung der Cloud-Prinzipien auf spezialisierte IT-Bereiche:

*   **Desktop as a Service (DaaS):** Bereitstellung virtueller Arbeitsplätze, die unabhängig vom Endgerät genutzt werden können.
*   **Database as a Service (DBaaS):** Verwaltete Datenbankinstanzen, bei denen der Administrationsaufwand für das Datenbanksystem entfällt.
*   **Security as a Service (SECaaS):** Integration von Sicherheitsdiensten wie Firewalls, Antivirus oder Bedrohungserkennung auf Mietbasis.

## Wirtschaftliche und technische Bewertung
Der Wechsel in die Cloud verändert sowohl finanzielle Planungen als auch operative Abläufe.

### Finanzielle Aspekte: CAPEX zu OPEX
Ein Hauptargument für Cloud-Dienste ist die Umwandlung von Investitionskosten in laufende Betriebskosten:

*   **CAPEX (Capital Expenditure):** Hohe Vorabinvestitionen in eigene Serverhardware und Rechenzentrumsinfrastruktur entfallen.
*   **OPEX (Operational Expenditure):** Es entstehen flexible Betriebskosten, die sich am tatsächlichen Verbrauch orientieren (Pay-per-Use). Dies schont die Liquidität und verbessert die Kalkulierbarkeit.

### Herausforderungen

*   **Internetabhängigkeit:** Die Verfügbarkeit der Dienste ist unmittelbar an eine stabile und performante Netzwerkanbindung gekoppelt.
*   **Vendor Lock-in:** Durch proprietäre Schnittstellen oder hohe Datenmengen kann der Wechsel zu einem anderen Anbieter erschwert werden (mangelnde Portabilität).
*   **Kontrollverlust:** Nutzer haben keinen direkten Zugriff auf die physische Hardware und müssen auf die Einhaltung der Service-Level-Agreements (SLAs) des Anbieters vertrauen.

## Häufige Fehler und Empfehlungen

*   **Fehler:** Die Annahme, der Cloud-Anbieter übernehme die vollständige Datensicherung und Compliance-Prüfung für alle Anwendungen.
*   **Empfehlung:** Das Shared Responsibility Model des gewählten Anbieters detailliert analysieren und ergänzende Sicherheitsmaßnahmen wie Verschlüsselung oder externe Backups implementieren.

## Selbsttest

1. Welches Service-Modell gewährt dem Kunden den größten Einfluss auf das Betriebssystem?
2. Wie unterscheiden sich Skalierbarkeit und Elastizität in der Cloud?
3. In welchem Modell liegt die Verantwortung für Software-Patches der Anwendung primär beim Anbieter?
4. Welche Bedeutung hat der Begriff XaaS?
5. Warum begünstigt Cloud Computing die Verlagerung von CAPEX zu OPEX?
