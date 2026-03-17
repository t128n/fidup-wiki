---
title: "Identity & Access Management"
description: "Identity & Access Management (IAM) umfasst Strategien und Technologien zur Verwaltung digitaler Identitäten und Zugriffsrechte. Es zielt darauf ab, Sicherheit zu gewährleisten, indem Authentifizierung, Zugriffssteuerung und Überwachung eingesetzt werden, um Risiken zu minimieren."
sources:
  - title: "Was ist Identity und Access Management (IAM)? | IBM"
    url: "https://www.ibm.com/de-de/think/topics/identity-access-management"
  - title: "What Is the Principle of Least Privilege? - Palo Alto Networks"
    url: "https://www.paloaltonetworks.com/cyberpedia/what-is-the-principle-of-least-privilege"
---

Der **Identity & Access Management**-Begriff bezeichnet eine Disziplin der Cybersicherheit, die sich mit der Erstellung, Verwaltung und dem Schutz digitaler Identitäten sowie der Steuerung von Zugriffsrechten in IT-Systemen beschäftigt. IAM-Lösungen stellen sicher, dass autorisierte Benutzer sicheren Zugriff auf Ressourcen erhalten, während unbefugter Zugriff verhindert wird. Dies ist besonders wichtig in modernen Umgebungen mit Cloud-Diensten, Remote-Arbeit und einer Vielzahl an digitalen Identitäten, um Risiken wie Datenlecks oder Cyberangriffe zu minimieren.

## Was ist Identity & Access Management (IAM)?

IAM ist ein Rahmenwerk aus Strategien, Richtlinien und Technologien zur Verwaltung digitaler Identitäten und Zugriffsrechte. Der Hauptzweck besteht darin, die richtigen Personen zur richtigen Zeit aus den richtigen Gründen auf die richtigen Ressourcen zugreifen zu lassen. IAM deckt sowohl menschliche Benutzer wie Mitarbeiter und Kunden als auch nicht-menschliche Identitäten wie Bots, IoT-Geräte oder KI-Agenten ab. In Zeiten von Cloud-Computing, Remote-Arbeit und zunehmenden Cyberbedrohungen gewinnt IAM an Bedeutung, da über 30 Prozent der Cyberangriffe den Diebstahl und Missbrauch gültiger Konten betreffen.

## Die vier Säulen von IAM

IAM basiert auf vier Kernbereichen, die zusammen eine umfassende Verwaltung ermöglichen.

### Identitätsverwaltung (Administration)

Dieser Bereich umfasst den Lebenszyklus von Identitäten: Erstellung, Aktualisierung und Deaktivierung von Benutzerkonten. In Unternehmen erfolgt dies oft durch Self-Service-Portale, wo Benutzer ihre eigenen Konten anlegen können, oder durch manuelle Provisionierung durch Administratoren. Zentralisierte Systeme wie Verzeichnisdienste speichern Identitätsdaten und ermöglichen eine effiziente Verwaltung.

### Authentifizierung

Authentifizierung beantwortet die Frage "Wer bist du?" und überprüft die Identität eines Benutzers. Traditionell basiert sie auf Passwörtern, heute jedoch zunehmend auf Multi-Faktor-Authentifizierung (MFA), die mehrere unabhängige Faktoren kombiniert: etwas, das der Benutzer weiß (z. B. Passwort), etwas, das er besitzt (z. B. Smartphone) und etwas, das er ist (z. B. Fingerabdruck). Ein Beispiel für Zwei-Faktor-Authentifizierung (2FA) ist die Kombination von Passwort und SMS-Code; MFA kann auch drei oder mehr Faktoren umfassen. Single Sign-On (SSO) ermöglicht den Zugriff auf mehrere Anwendungen mit einem einzigen Anmeldevorgang, oft über Identity Federation mit Standards wie SAML oder OIDC.

### Autorisierung

Autorisierung regelt, was ein authentifizierter Benutzer tun darf, und basiert auf Zugriffskontrollmodellen. Rollenbasierte Zugriffskontrolle (RBAC) weist Berechtigungen über definierte Rollen zu, z. B. "Administrator" oder "Benutzer". Attributbasierte Zugriffskontrolle (ABAC) ist granularer und entscheidet basierend auf Attributen wie Abteilung, Standort oder Uhrzeit. Andere Modelle sind Mandatory Access Control (MAC) für streng regulierte Umgebungen und Discretionary Access Control (DAC) für flexible Zuweisungen.

### Überwachung (Auditing)

Überwachung umfasst die Aufzeichnung von Zugriffsversuchen und -aktivitäten in Audit-Logs sowie die Erstellung von Compliance-Berichten. Identity Governance & Administration (IGA) erweitert dies um Governance, Audit und Reporting über den gesamten Lebenszyklus. Tools wie SailPoint oder One Identity helfen dabei, unangemessene Zugriffsebenen zu identifizieren und regulatorische Anforderungen wie [DSGVO](datenschutz) oder SOX zu erfüllen.

## Wichtige IAM-Tools und Technologien

- Verzeichnisdienste wie Active Directory (AD) speichern Identitätsinformationen und nutzen das Lightweight Directory Access Protocol (LDAP) für Abfragen.
- Authentifizierungstools umfassen MFA-Lösungen, SSO-Portale und passwortlose Methoden wie biometrische Authentifizierung.
- Zugriffskontrolltools implementieren RBAC oder ABAC.
- Privileged Access Management (PAM) sichert Konten mit erhöhten Berechtigungen durch Tresore und Just-in-Time-Zugriff.
- Identity Threat Detection and Response (ITDR) erkennt Bedrohungen wie Privilege Escalation in Echtzeit.

## Best Practices für IAM

- Das Principle of Least Privilege (PoLP) sollte angewendet werden, das Benutzern nur den minimal erforderlichen Zugriff gewährt, um Aufgaben zu erfüllen. Dies reduziert die Angriffsfläche und unterstützt Zero Trust Security.
- Regelmäßige Zugriffsreviews sollten durchgeführt werden, um Berechtigungen zu überprüfen und zu widerrufen.
- MFA sollte für alle Konten implementiert werden, und Benutzer sollten in Sicherheitspraktiken geschult werden.
- IAM sollte in Zero Trust-Architekturen integriert werden, die jede Anfrage verifizieren.

## Vor- und Nachteile von IAM

### Vorteile

- Erhöhte Sicherheit durch zentrale Verwaltung und MFA.
- Effizienzsteigerung durch SSO und automatisierte Prozesse.
- Compliance mit Vorschriften wie [GDPR](compliance) oder PCI DSS.

### Nachteile

- Hohe Komplexität und Kosten bei Implementierung und Wartung.
- Risiko eines Single Point of Failure bei zentralisierten Systemen.
- Potenzielle Beeinträchtigung der Benutzerfreundlichkeit durch zusätzliche Sicherheitsmaßnahmen.

## Sicherheitstesting und Überprüfung

Penetrationstests simulieren Angriffe, um Schwachstellen aufzudecken. Vulnerability Scanner wie Nessus identifizieren bekannte Sicherheitslücken automatisch. Regelmäßige Audits und Compliance-Prüfungen stellen die Einhaltung von Standards sicher.

## Beispiele

In einem Unternehmen mit Rollen wie "Manager" und "Mitarbeiter" nutzt RBAC die Rolle "Manager" für Zugriff auf Finanzdaten, während ABAC zusätzlich prüft, ob der Manager in der Abteilung "Finanzen" arbeitet und die Anfrage zwischen 9:00 und 17:00 Uhr erfolgt. Für privilegierte Zugriffe verwendet PAM einen Tresor, der Administratoren temporären Root-Zugriff gewährt und automatisch widerruft.

## Häufige Fehler und Tipps

- Fehler: Berechtigungen nicht regelmäßig überprüfen, was zu "Privilege Creep" führt. Quartalsweise Reviews sollten geplant werden.
- Fehler: MFA nur für bestimmte Konten aktivieren. MFA sollte standardmäßig für alle Benutzer aktiviert werden.
- Fehler: SSO ohne zusätzliche Sicherheit implementieren. SSO sollte mit MFA kombiniert werden, um Risiken zu minimieren.
- Fehler: LDAP als Tool statt als Protokoll behandeln. LDAP sollte zur Kommunikation mit Verzeichnisdiensten wie AD verwendet werden.

## Selbsttest

1. Was sind die vier Säulen von IAM?
2. Erklären Sie den Unterschied zwischen Authentifizierung und Autorisierung.
3. Wie funktioniert RBAC im Vergleich zu ABAC?
4. Warum ist das Principle of Least Privilege wichtig?
5. Nennen Sie ein Beispiel für einen IAM-Tooltyp.
