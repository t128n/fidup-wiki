---
title: "Schutz- und Gewährleistungsziele der Informationssicherheit"
description: "Die Schutz- und Gewährleistungsziele der Informationssicherheit umfassen Prinzipien wie Verfügbarkeit, Integrität und Vertraulichkeit, ergänzt durch Datenminimierung, Transparenz, Intervenierbarkeit und Nichtverkettung. Diese Ziele helfen Auszubildenden in Daten- und Prozessanalyse, den Schutz von Informationen und Systeme zu verstehen und umzusetzen."
sources:
  - title: "Datenschutz-Grundverordnung (DSGVO)"
    url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679"
  - title: "ISO/IEC 27001:2022"
    url: "https://www.iso.org/standard/82875.html"
---

Die **Schutz- und Gewährleistungsziele der Informationssicherheit** sind grundlegende Prinzipien, die den Schutz von Informationen und Systemen vor verschiedenen Bedrohungen sicherstellen. Sie unterteilen sich in Kernziele der Informationssicherheit wie Verfügbarkeit, Integrität und Vertraulichkeit sowie in ergänzende Ziele des Datenschutzes wie Datenminimierung, Transparenz, Intervenierbarkeit und Nichtverkettung. Diese Ziele orientieren sich an rechtlichen und technischen Anforderungen und unterstützen die Sicherstellung von Datenschutz und Systemsicherheit in Unternehmen.

## Kurzüberblick

Die Schutz- und Gewährleistungsziele der Informationssicherheit stellen ein Rahmenwerk zur Absicherung von Daten und Systemen dar. Die Kernziele – Verfügbarkeit, Integrität und Vertraulichkeit – stammen aus der klassischen Informationssicherheit und verhindern Ausfälle, Manipulationen und unbefugten Zugriff. Ergänzende Ziele wie Datenminimierung, Transparenz, Intervenierbarkeit und Nichtverkettung richten sich nach Datenschutzvorschriften und fördern den verantwortungsvollen Umgang mit personenbezogenen Daten. Zusammen ermöglichen sie eine umfassende Sicherheitsstrategie, die rechtliche Anforderungen erfüllt und Risiken minimiert.

## Kernschutzziele der Informationssicherheit

Die Kernschutzziele, auch als CIA-Triade bekannt, sind zentrale Säulen der Informationssicherheit und richten sich auf den Schutz von Systemen und Daten vor technischen Bedrohungen.

### Verfügbarkeit

Verfügbarkeit stellt sicher, dass Informationen und Systeme jederzeit für autorisierte Benutzer zugänglich sind. Sie verhindert Ausfallzeiten und sichert die kontinuierliche Nutzbarkeit.

Maßnahmen zur Erreichung der Verfügbarkeit umfassen Redundanzen, etwa durch [Backup-Systeme](backup), sowie Lastverteilung und Failover-Mechanismen. Regelmäßige Wartung und Updates halten Systeme stabil.

### Integrität

Integrität bedeutet, dass Daten korrekt, vollständig und unverändert bleiben. Sie schützt vor Manipulationen und Fehlern, die die Zuverlässigkeit beeinträchtigen könnten.

Zur Gewährleistung der Integrität kommen Prüfziffern und [Hash-Funktionen](hashing) zum Einsatz, um Daten zu validieren. Zugriffsrechte verhindern unautorisierte Änderungen, und regelmäßige Audits überprüfen die Datenintegrität.

### Vertraulichkeit

Vertraulichkeit sorgt dafür, dass Informationen nur von autorisierten Personen eingesehen werden können. Sie verhindert unbefugten Zugriff auf sensible Daten.

Maßnahmen beinhalten [Verschlüsselung](verschluesselungsart) für Datenübertragungen und -speicherungen sowie starke Authentifizierungsmechanismen wie Zwei-Faktor-Authentifizierung. Schulungen sensibilisieren Mitarbeiter für den Umgang mit sensiblen Daten.

## Ergänzende Schutzziele des Datenschutzes

Die ergänzenden Ziele orientieren sich an Datenschutzvorschriften wie der DSGVO und ergänzen die Kernziele um Aspekte des Datenschutzes.

### Datenminimierung

Datenminimierung beschränkt die Erhebung und Verarbeitung auf das notwendige Maß. Sie reduziert Risiken durch Minimierung der Datenmenge.

Praktische Schritte umfassen die Überprüfung der Datenanforderungen, Anonymisierung oder Pseudonymisierung sowie regelmäßige Löschung nicht mehr benötigter Daten.

### Transparenz

Transparenz erfordert die Offenlegung von Datenverarbeitungsprozessen. Sie baut Vertrauen durch klare Kommunikation auf.

Maßnahmen umfassen die Erstellung von [Datenschutzrichtlinien](datenschutz), Informationsveranstaltungen und Bereitstellung von Informationen über Verarbeitungszwecke.

### Intervenierbarkeit

Intervenierbarkeit ermöglicht Eingriffe in Datenverarbeitungsprozesse, um Betroffenenrechte wahrzunehmen.

Sie wird durch Verfahren zur Datenkorrektur und -löschung auf Anfrage sowie Kontaktstellen für Betroffene umgesetzt. Schulungen für Mitarbeiter unterstützen die Ausübung dieser Rechte.

### Nichtverkettung

Nichtverkettung verhindert die Verknüpfung von Daten, um Rückschlüsse auf Einzelpersonen zu vermeiden. Sie schützt die Privatsphäre durch Trennung von Datensätzen.

Techniken wie Datenbanktrennung, Anonymisierung und Überprüfung auf mögliche Verkettungen helfen dabei.

## Beispiele

Ein E-Commerce-System vermeidet durch redundante Server und automatische Failover-Mechanismen Ausfälle, sodass Kunden jederzeit einkaufen können.

Für Integrität dient eine Datenbank mit Hash-Werten, die Änderungen erkennen und rückgängig machen, um Manipulationen zu verhindern.

Vertraulichkeit zeigt sich in der [Verschlüsselung](verschluesselungsart) von Kundendaten in einer Cloud-Anwendung, die nur mit spezifischen Schlüsseln zugänglich ist.

Datenminimierung könnte die Speicherung nur von notwendigen Adressdaten für eine Lieferung bedeuten, anstatt komplette Profile zu sammeln.

Transparenz umfasst eine Datenschutzerklärung auf einer Website, die klar die Verwendung von Cookies erklärt.

Intervenierbarkeit ermöglicht es einem Nutzer, per Anfrage die Löschung seiner Daten aus einem Newsletter-System zu fordern.

Nichtverkettung trennt Verkaufsdaten von personenbezogenen Informationen, um Profiling zu vermeiden.

## Häufige Fehler und Tipps

- **Häufiger Fehler:** Vernachlässigung der Verfügbarkeit führt zu Ausfällen.
  **Tipp:** Implementiere Redundanz, um kontinuierliche Zugänglichkeit zu sichern.

- **Häufiger Fehler:** Fehlende Integritätsprüfungen erlauben Manipulationen.
  **Tipp:** Nutze Hash-Funktionen, um Änderungen zu erkennen.

- **Häufiger Fehler:** Schwache Authentifizierung gefährdet Vertraulichkeit.
  **Tipp:** Wähle Zwei-Faktor-Authentifizierung, um Zugriff zu schützen.

- **Häufiger Fehler:** Übermäßige Datensammlung erhöht Risiken.
  **Tipp:** Minimiere Daten, um Angriffsflächen zu reduzieren.

- **Häufiger Fehler:** Mangelnde Transparenz baut kein Vertrauen.
  **Tipp:** Kommuniziere Prozesse klar, um Compliance zu fördern.

- **Häufiger Fehler:** Ignorieren von Betroffenenrechten führt zu Bußgeldern.
  **Tipp:** Schaffe Interventionsmöglichkeiten, um Rechte zu wahren.

- **Häufiger Fehler:** Verkettete Daten erlauben Rückschlüsse.
  **Tipp:** Trenne Datensätze, um Privatsphäre zu schützen.
