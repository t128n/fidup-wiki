---
title: "Präventive IT-Sicherheitsmaßnahmen"
description: "Präventive IT-Sicherheitsmaßnahmen umfassen technische, organisatorische und menschliche Ansätze zur Vorbeugung von Cyberbedrohungen. Sie zielen auf die Reduzierung der Angriffsfläche ab und sind Teil eines ganzheitlichen Informationssicherheits-Managementsystems."
sources:
  - title: "BSI IT-Grundschutz-Schulungen"
    url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/Zertifizierte-Informationssicherheit/IT-Grundschutzschulung/it-grundschutzschulung_node.html"
  - title: "IT-Grundschutzkompendium des BSI"
    url: "https://it-grundschutzkompendium.de/"
---

**Präventive IT-Sicherheitsmaßnahmen** sind Ansätze zur Vorbeugung von Cyberbedrohungen, indem sie die Angriffsfläche reduzieren, den Zugriff auf Systeme kontrollieren und die Widerstandsfähigkeit von Infrastrukturen stärken. Sie umfassen technische, organisatorische und menschliche Aspekte und basieren auf dem Prinzip der Abwehr in der Tiefe, bei der mehrere Schutzschichten kombiniert werden. Präventive Maßnahmen grenzen sich von detektiven (erkennenden) und reaktiven (reagierenden) Maßnahmen ab, indem sie Angriffe bereits im Vorfeld verhindern. Sie sind Teil eines ganzheitlichen Informationssicherheits-Managementsystems wie dem BSI IT-Grundschutz und werden zunehmend durch regulatorische Anforderungen wie die NIS-2-Richtlinie gefordert.

## Lernziele

Dieser Artikel vermittelt:

- Das Unterscheiden präventiver Maßnahmen von detektiven und reaktiven sowie deren Bedeutung für die IT-Sicherheit.
- Die Grundprinzipien technischer Maßnahmen wie Netzwerksegmentierung und Systemhärtung.
- Die Umsetzung organisatorischer Ansätze wie Schulung und Schwachstellenmanagement.
- Die Bewertung des Beitrags präventiver Maßnahmen zu einem ganzheitlichen Sicherheitskonzept.

## Kontext und Einordnung

Präventive IT-Sicherheitsmaßnahmen zielen darauf ab, Sicherheitsvorfälle zu verhindern, bevor sie eintreten. Im Gegensatz zu detektiven Maßnahmen, die Angriffe erkennen, oder reaktiven Maßnahmen, die auf Vorfälle reagieren, legen präventive Ansätze den Fokus auf Risikominimierung. Das Prinzip der Abwehr in der Tiefe bedeutet, dass keine einzelne Maßnahme allein ausreicht; stattdessen werden mehrere Schichten kombiniert, um Angreifer auf verschiedenen Ebenen zu stoppen. Diese Maßnahmen sind in ein Informationssicherheits-Managementsystem (ISMS) eingebettet, wie es der BSI IT-Grundschutz oder ISO 27001 vorschreiben, um eine systematische und nachhaltige Sicherheit zu gewährleisten.

## Netzwerkbasierte Maßnahmen

Netzwerkbasierte Maßnahmen schützen die Infrastruktur auf der Ebene des Datenverkehrs und der Netzwerkarchitektur.

### Netzwerksegmentierung

Die Netzwerksegmentierung teilt das Netzwerk in logische Teilbereiche auf, um kritische Systeme zu isolieren und die seitliche Ausbreitung von Angriffen zu erschweren. Dies geschieht durch Virtual Local Area Networks (VLANs) und Firewalls zwischen Segmenten. Ein Beispiel ist die Trennung von Produktions- und Verwaltungsnetzen, wodurch ein kompromittiertes Verwaltungssystem nicht automatisch Zugriff auf Produktionsdaten erhält.

### Firewall-Konfiguration

Firewalls filtern eingehenden und ausgehenden Datenverkehr basierend auf Regeln. Ein Whitelisting-Ansatz erlaubt nur explizit zugelassene Verbindungen, im Gegensatz zu Blacklisting, das unerwünschte Verbindungen blockiert. Regeln müssen regelmäßig überprüft und angepasst werden, da veraltete Regeln Sicherheitslücken schaffen können. Next-Generation Firewalls bieten zusätzlich Anwendungskontrolle und Intrusion Prevention, um fortschrittliche Bedrohungen abzuwehren.

### Intrusion Detection/Prevention Systeme (IDS/IPS)

IDS-Systeme überwachen den Netzwerkverkehr auf verdächtige Aktivitäten und melden Auffälligkeiten, während IPS-Systeme erkannte Angriffe automatisch abwehren. Sie verwenden Signaturen und Regeln, die regelmäßig aktualisiert werden, um neue Bedrohungen zu erkennen. IDS ist rein detektiv, IPS präventiv, aber IPS kann Fehlalarme verursachen, die legitimen Datenverkehr blockieren; daher sollten Tests vor der Aktivierung erfolgen.

## Systembasierte Maßnahmen

Systembasierte Maßnahmen stärken die Sicherheit einzelner Geräte und Betriebssysteme.

### Systemhärtung

Systemhärtung minimiert unnötige Funktionen und aktiviert Schutzmechanismen. Dazu gehört die Deaktivierung unnötiger Dienste und Ports, um die Angriffsfläche zu reduzieren. Sichere Betriebssystemkonfigurationen aktivieren Features wie Data Execution Prevention (DEP), das die Ausführung von Code in Datenspeicherbereichen verhindert, und Address Space Layout Randomization (ASLR), das Speicheradressen randomisiert, um Exploits zu erschweren. Application Whitelisting erlaubt nur die Ausführung zugelassener Anwendungen und ist besonders effektiv, kann aber in dynamischen Umgebungen wie Entwicklungssystemen Einschränkungen verursachen. Regelmäßige Überprüfungen sind essenziell, da Änderungen die Härtung untergraben können.

### Zugriffskontrolle

Zugriffskontrolle regelt den Zugang zu Systemen und Daten. Starke Authentifizierung nutzt komplexe Passwortrichtlinien, Zwei-Faktor-Authentifizierung (2FA) und Single Sign-On (SSO) für Benutzerfreundlichkeit. Privileged Access Management (PAM) überwacht privilegierte Konten und gewährt Just-in-Time-Zugriff, um Risiken zu minimieren. Rollenbasierte Zugriffskontrolle (RBAC) weist Berechtigungen nach dem Prinzip der geringsten Privilegien zu, wobei regelmäßige Überprüfungen Privilege Creep verhindern.

### Datensicherheit

Datensicherheit schützt Informationen vor Verlust und Manipulation. Verschlüsselung mit Algorithmen wie AES-256 sichert Daten im Ruhezustand und während der Übertragung. Die 3-2-1-Backup-Strategie erstellt drei Kopien auf zwei verschiedenen Medien, wovon eine außerhalb des Standorts gespeichert wird; Backups müssen regelmäßig getestet werden. Data Loss Prevention (DLP) überwacht und verhindert Datenlecks durch Identifizierung sensibler Informationen.

## Organisatorische und menschliche Maßnahmen

Diese Maßnahmen adressieren den menschlichen Faktor und organisatorische Prozesse.

### Schulung und Sensibilisierung

Schulungen fördern das Bewusstsein für Risiken wie [Phishing](phishing)-Angriffe und Social Engineering. Phishing-Simulationen testen die Aufmerksamkeit ohne Schuldzuweisungen. Klare Sicherheitsrichtlinien werden kommuniziert und durch technische Maßnahmen unterstützt, um einheitliches Verhalten zu gewährleisten.

### Schwachstellenmanagement

Schwachstellenmanagement identifiziert und behebt Lücken proaktiv. Regelmäßige Audits wie [Penetrationstests](penetrations-test) und Vulnerability Scans priorisieren Maßnahmen. Patch-Management installiert Updates zeitnah, vorzugsweise automatisiert, nach Tests in Staging-Umgebungen, da ungepatchte Systeme schnell Ziel von Angreifern werden.

## Monitoring und Überwachung

Monitoring ergänzt präventive Maßnahmen durch kontinuierliche Überwachung, die frühzeitig auf Abweichungen hinweist.

### Netzwerküberwachung

Security Information and Event Management (SIEM) sammelt und analysiert Sicherheitsereignisse zentralisiert, um Anomalien zu erkennen und Alarme auszulösen. Kontinuierliches Netzwerk-Monitoring identifiziert ungewöhnliche Muster basierend auf Basislinien, wobei Alerting mit Incident Response verknüpft wird, um auf Vorfälle zu reagieren.

## Regulatorische Anforderungen

Regulatorische Rahmen wie die NIS-2-Richtlinie der EU fordern präventive Maßnahmen für kritische Infrastrukturen. Diese Richtlinie verlangt Schwachstellenmanagement, Zugriffskontrolle und Schulungen, um die Sicherheit wichtiger Einrichtungen zu stärken. Unternehmen müssen diese Anforderungen in ihr ISMS integrieren, um Compliance zu gewährleisten.

## Beispiele

Ein Unternehmen segmentiert sein Netzwerk, indem es Produktionsserver in einem VLAN isoliert und eine Next-Generation Firewall mit IPS konfiguriert. Zusätzlich führt es regelmäßige Schulungen durch und testet Backups jährlich. Dies verhindert einen Angriff, bei dem ein kompromittierter Arbeitsplatzrechner nicht auf sensible Daten zugreift.

## Häufige Fehler und Tipps

Häufiger Fehler: Eine Firewall als einzige Schutzmaßnahme betrachten. Empfehlung: Mehrere Schichten wie IDS/IPS und Zugriffskontrolle kombinieren, um Abwehr in der Tiefe zu erreichen.

Häufiger Fehler: Backups ohne Tests erstellen. Empfehlung: Recovery-Tests durchführen, um die Wiederherstellbarkeit zu bestätigen.

Häufiger Fehler: Schulungen einmalig durchführen. Empfehlung: Regelmäßige Auffrischungen und Simulationen planen, um das Bewusstsein aufrechtzuerhalten.

## Selbsttest

- Was unterscheidet präventive von detektiven Maßnahmen?
- Nenne drei Beispiele für Systemhärtung.
- Warum ist die 3-2-1-Backup-Strategie wichtig?
- Wie unterstützt RBAC das Prinzip der geringsten Privilegien?
- Welche Rolle spielt der menschliche Faktor in präventiven Maßnahmen?

## Weiterführendes

Weitere Informationen zu spezifischen Maßnahmen finden sich in den Bausteinen des BSI IT-Grundschutz-Kompendiums, die detaillierte Umsetzungsleitfäden bieten. Für regulatorische Details lohnt sich die NIS-2-Richtlinie.

## Einzelnachweise

Die genannten Quellen unterstützen die Beschreibungen der Maßnahmen im Kontext des BSI IT-Grundschutzes.
