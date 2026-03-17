---
title: "Penetration Testing"
description: "Penetration Testing simuliert Angriffe auf IT-Systeme, um Schwachstellen zu identifizieren und die Sicherheit zu verbessern. Auszubildende erfahren mehr über Phasen, Arten und Best Practices dieses Verfahrens in der Daten- und Prozessanalyse."
sources:
  - title: "BSI - Pen Tests und IS Webcheck"
    url: "https://www.bsi.bund.de/DE/Themen/Oeffentliche-Verwaltung/Sicherheitspruefungen/Pen_Test_und_IS_Webcheck/pent-tests-und-is-webcheck_node.html"
  - title: "OWASP Web Security Testing Guide"
    url: "https://owasp.org/www-project-web-security-testing-guide/"
  - title: "NIST - Penetration Testing Glossary"
    url: "https://csrc.nist.gov/glossary/term/penetration_testing"
---

**Penetration Testing** bezeichnet einen simulierten Angriff auf IT-Systeme, um Schwachstellen aufzudecken und die Sicherheit zu bewerten. Es dient der Identifikation potenzieller Angriffspunkte, der Prüfung von Sicherheitsmaßnahmen und der Verbesserung der Gesamtsicherheit.

## Kurzüberblick

Penetration Testing simuliert Angriffe auf IT-Systeme, um Schwachstellen zu identifizieren und die Wirksamkeit von Sicherheitsmaßnahmen zu prüfen. Es umfasst verschiedene Arten wie Black Box, White Box und Gray Box Testing sowie standardisierte Phasen von der Planung bis zum Reporting. Dabei kommen Tools wie Metasploit oder Nmap zum Einsatz, und Standards wie BSI-Richtlinien oder OWASP WSTG leiten den Prozess.

## Kontext und Einordnung

Penetration Testing ist ein Teilbereich der Informationssicherheit und ergänzt Maßnahmen wie [Schwachstellenanalyse](schwachstellenanalyse) und [präventive IT-Sicherheitsmaßnahmen](praeventive-it-sicherheitsmassnahmen). Es findet Anwendung in Unternehmen, um die Abwehr gegen Cyberangriffe zu stärken, und wird oft in Kombination mit anderen Sicherheitsaudits durchgeführt.

## Begriffe und Definitionen

- **Exploit**: Ein Code oder Programm, das eine Schwachstelle ausnutzt, um Zugriff auf ein System zu erlangen.
- **Payload**: Der Teil eines Exploits, der die gewünschte Aktion ausführt, etwa Datenabzug oder Systemkontrolle.
- **Risikobewertung**: Einschätzung der Schwere und Wahrscheinlichkeit von Sicherheitsrisiken basierend auf identifizierten Schwachstellen.

## Arten von Penetration Tests

### Black Box Testing
Der Tester hat keine Vorkenntnisse über das System und simuliert einen externen Angreifer, der nur öffentlich zugängliche Informationen nutzt.

### White Box Testing
Der Tester verfügt über vollständige Kenntnisse, wie Quellcode oder Systemarchitektur, und simuliert einen internen Angreifer mit Insiderwissen.

### Gray Box Testing
Der Tester besitzt teilweise Informationen und kombiniert Ansätze von Black Box und White Box Testing.

## Vorgehen

### Phasen eines Penetration Tests

#### 1. Planung und Vorbereitung
Ziele definieren, Genehmigungen einholen und den Umfang festlegen. Rechtlich ist eine schriftliche Genehmigung erforderlich, da unautorisierte Tests strafbar sind (§ 202c StGB).

#### 2. Informationsbeschaffung
Sammlung von Daten über das Zielsystem, wie IP-Adressen oder offene Ports, mit Tools wie Nmap.

#### 3. Schwachstellenscanning
Automatisierte Scans zur Identifikation von Schwachstellen, unterstützt durch Tools wie Nessus oder OpenVAS.

#### 4. Exploitation
Ausnutzung identifizierter Schwachstellen zur Erlangung von Zugriff, oft mit Metasploit oder Burp Suite.

#### 5. Post-Exploitation
Analyse des erlangten Zugriffs, einschließlich Lateralbewegungen im Netzwerk und Einrichtung von Persistenz zur Simulation dauerhafter Bedrohungen.

#### 6. Reporting
Dokumentation der Ergebnisse, empfohlener Maßnahmen und Erstellung eines Berichts für Stakeholder.

## Tools für Penetration Testing

Häufig verwendete Tools umfassen Metasploit für Exploits, Burp Suite und OWASP ZAP für Webanwendungen sowie Nmap für Netzwerkscans. Diese Tools dienen sowohl Penetrationstestern als auch Verteidigern zur Sicherheitsanalyse.

## Beispiele

Ein einfaches Beispiel ist die Simulation einer SQL-Injection in einer Webanwendung: Der Tester identifiziert eine Eingabefeld-Schwachstelle, nutzt sie aus, um Daten abzufragen, und empfiehlt anschließend eine Validierung der Eingaben zur Behebung.

## Best Practices und Standards

### Rechtliche und ethische Rahmenbedingungen
Penetration Tests erfordern eine schriftliche Genehmigung, da sie ohne diese strafbar sind (§ 202c StGB). Ethische Standards wie die Vermeidung von Datenverlust sind einzuhalten.

### BSI-Richtlinien
Das BSI empfiehlt moderate Angriffsstärke und regelmäßige Tests nach dem IS-Penetrationstest-Ansatz, der sich auf externe Schnittstellen konzentriert.

### OWASP WSTG
Der OWASP Web Security Testing Guide bietet ein Framework für standardisierte Tests von Webanwendungen mit Best Practices zur Strukturierung und Versionskontrolle.

## Häufige Fehler und Tipps

- Fehler: Tests ohne Genehmigung durchführen – Tipps: Es empfiehlt sich, eine schriftliche Zustimmung einzuholen und den Umfang klar zu definieren.
- Fehler: Nur oberflächliche Scans – Tipps: Es sollte tiefergehende Exploitation und Post-Exploitation eingeschlossen werden, um realistische Szenarien zu simulieren.
- Fehler: Ergebnisse nicht nachverfolgen – Tipps: Maßnahmen sollten implementiert und deren Wirksamkeit überprüft werden.

## Weiterführendes

Für vertiefte Kenntnisse zu Tools und Frameworks bieten sich Schulungen zu Metasploit oder Zertifizierungen wie CEH an.
