---
title: "Softwaretechnische Absicherung"
description: "Softwaretechnische Absicherung beschreibt Maßnahmen zur Absicherung von IT-Systemen durch User-Management, Firewalls, Port-Security und TPM-basierte Schlüsselverwaltung, um Vertraulichkeit, Integrität und Verfügbarkeit zu gewährleisten."
sources:
  - title: "Microsoft Learn - TPM Fundamentals"
    url: "https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/tpm-fundamentals"
  - title: "Trusted Computing Group - TPM 2.0 Specification"
    url: "https://trustedcomputinggroup.org/new-tpm-specification-redefines-firmware-security-for-connected-devices"
  - title: "IBM Think - RBAC Definition"
    url: "https://www.ibm.com/de-de/think/topics/rbac"
---

Softwaretechnische Absicherung umfasst softwarebasierte Sicherheitsmechanismen zum Schutz von Systemen und Netzwerken gegen unbefugten Zugriff, Angriffe und Datenlecks. Dazu gehören rollenbasierte Zugriffskontrolle, Firewalls, Port-Security und TPM-basierte Schlüsselverwaltung. Diese Maßnahmen sichern Vertraulichkeit, Integrität und Verfügbarkeit der IT-Sicherheit. In der Daten- und Prozessanalyse schützt sie sensible Informationen und ermöglicht sichere Analyseumgebungen.

## Lernziele

Der Artikel vermittelt Kenntnisse über Funktionen und Anwendungsbereiche von User-Management, Firewalls, Port-Security und TPM. Er grenzt rollenbasierte Zugriffskontrolle von anderen Modellen ab und wendet NIST-Regeln an. Unterschiede zwischen Firewalls, IDS/IPS und Webfiltern werden beschrieben. Port-Security wird als Layer-2-Maßnahme auf Switches eingeordnet, und MAC-Adressfilterung als statische Konfiguration verstanden. TPM wird als Hardware-Komponente für Schlüsselmanagement und Plattformintegrität erläutert, ohne es mit Verschlüsselungsalgorithmen zu verwechseln.

## Kurzüberblick

Softwaretechnische Absicherung bildet die Grundlage für den Schutz von IT-Infrastrukturen durch software- und hardwaregestützte Mechanismen. Sie adressiert Risiken wie unbefugten Zugriff, Netzwerkangriffe und Datenverlust. Der Fokus liegt auf präventiven Maßnahmen, die in Unternehmensnetzwerken und Analyseumgebungen integriert werden. Historisch basiert sie auf Standards wie RBAC nach NIST und TPM-Spezifikationen der Trusted Computing Group.

## Kontext und Einordnung

Softwaretechnische Absicherung ergänzt hardwarebasierte Maßnahmen und bildet einen Kernbereich der IT-Sicherheit. Sie findet Anwendung in Unternehmensnetzwerken, Cloud-Umgebungen und Analyseplattformen, wo Datenvertraulichkeit entscheidend ist. Im Vergleich zum [IT-Grundschutzmodell](it-grundschutzmodell) bietet sie spezifische technische Implementierungen, die auf der [CIA-Triade](cia-triade) aufbauen. Sie wird oft mit physischen Sicherheitsmaßnahmen kombiniert, um eine mehrschichtige Verteidigung (Defense in Depth) zu erreichen.

## Begriffe und Definitionen

### Rollenbasierte Zugriffskontrolle (RBAC)

RBAC ist ein Zugriffsmodell, das Berechtigungen basierend auf Benutzerrollen zuweist. Nach NIST umfasst es Kernregeln wie Rollenhierarchie und Trennung von Pflichten. Es unterscheidet sich von attributbasierten Modellen (ABAC) durch die rollenorientierte Struktur.

### Firewall und IDS/IPS

Eine Firewall filtert Netzwerkverkehr basierend auf Regeln, während IDS Angriffe erkennt und IPS sie blockiert. Webfilter kategorisieren und blockieren Inhalte. IDS und IPS ergänzen Firewalls, bilden aber keine integrierten Funktionen.

### Port-Security

Port-Security sichert Switch-Ports durch MAC-Adressfilterung und Begrenzung der Adressanzahl. Sie ist eine Layer-2-Funktion und kein Protokoll wie MAC.

### TPM als Schlüsselmanagement

TPM ist eine Hardware-Komponente zur sicheren Schlüsselgenerierung und -speicherung. Es unterstützt Plattformintegrität, aber keine Verschlüsselungsalgorithmen direkt.

## Vorgehen

Das Vorgehen umfasst:

1. Bewertung der Systemanforderungen anhand der CIA-Triade.
2. Implementierung von RBAC mit Rollenzuweisung und MFA.
3. Konfiguration von Firewalls mit Regeln und Integration von IDS/IPS.
4. Aktivierung von Port-Security auf Switches mit MAC-Filterung.
5. Integration von TPM für Schlüsselmanagement und Integritätsprüfung.
6. Überwachung von Aktivitäten durch Logging und regelmäßige Audits.

## Beispiele

### RBAC in einem Analyseprojekt

In einem Datenanalyse-Team erhält der Analyst die Rolle "Leser" für Rohdaten und "Bearbeiter" für Berichte. Der Administrator weist Berechtigungen zu, MFA verhindert unbefugte Anmeldungen.

### Firewall mit IDS/IPS

Eine Next-Generation-Firewall blockiert eingehenden Traffic von unbekannten IPs. IDS erkennt SQL-Injection-Muster und IPS blockiert die Verbindung automatisch.

### Port-Security auf einem Switch

Auf einem Büro-Switch wird Port 5 so konfiguriert, dass nur die MAC-Adresse des firmeneigenen Laptops zugelassen ist. Bei Verstoß schaltet der Port ab.

### TPM-Schlüsselverwaltung

TPM generiert einen Storage Root Key für Festplattenverschlüsselung. Bei Systemstart prüft es die Integrität und entschlüsselt Daten nur bei Übereinstimmung.

## Häufige Fehler und Tipps

- Verwechslung von TPM mit Verschlüsselungsalgorithmen: TPM managt Schlüssel, nicht Algorithmen wie AES.
- Fehlende Trennung von IDS und IPS: IDS detektiert, IPS präventiert – beide ergänzen Firewalls.
- MAC-Adressfilterung als dynamisch missverstehen: Sie ist statisch und switch-spezifisch.
- RBAC ohne NIST-Regeln implementieren: Nutzen Sie Hierarchie und Pflichtentrennung für Sicherheit.

## Selbsttest

1. Was ist der Hauptzweck von RBAC? (Antwort: Rollenbasierte Zuweisung von Berechtigungen.)
2. Wie unterscheidet sich IDS von IPS? (Antwort: IDS erkennt, IPS blockiert.)
3. Was ist Port-Security? (Antwort: Layer-2-Sicherung auf Switches.)
4. Welche Funktion hat TPM? (Antwort: Hardwaregestütztes Schlüsselmanagement.)
5. Nennen Sie ein Beispiel für Defense in Depth. (Antwort: Kombination von Firewall und Port-Security.)
