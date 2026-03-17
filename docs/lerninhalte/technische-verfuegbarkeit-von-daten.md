---
title: "Technische Verfügbarkeit von Daten"
description: "Die technische Verfügbarkeit von Daten beschreibt die Fähigkeit, Daten jederzeit und ohne Unterbrechung zugänglich zu machen. Sie ist ein zentrales Ziel der Informationssicherheit und umfasst Maßnahmen zur Minimierung von Ausfallzeiten, relevant für Auszubildende in Daten- und Prozessanalyse."
sources:
    - title: "BSI - Sicherheit von Rechenzentren / Hochverfügbarkeit"
      url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Hochverfuegbarkeit/hochverfuegbarkeit_node.html"
    - title: "Microsoft Learn - What are business continuity, high availability, and disaster recovery?"
      url: "https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery"
    - title: "Microsoft Cloud Security Benchmark - Backup and recovery"
      url: "https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-backup-recovery"
---

Die **technische Verfügbarkeit von Daten** bezeichnet die Fähigkeit, Daten jederzeit und ohne Unterbrechung zugänglich zu machen. Sie gewährleistet, dass Informationen in den erforderlichen Formaten und innerhalb festgelegter Zeitrahmen bereitgestellt werden, um die Anforderungen von Benutzern und Anwendungen zu erfüllen. Dies ist ein Kernziel der Informationssicherheit neben Vertraulichkeit und Integrität.

## Kurzübersicht

Die technische Verfügbarkeit von Daten ist ein zentraler Aspekt der Informationssicherheit, der die kontinuierliche Zugänglichkeit von Informationen gewährleistet. Sie wird durch technische Maßnahmen wie [Redundante Systeme](redundante-systeme), [Backup](backup) und [Load-Balancing](load-balancing) erreicht. Herausforderungen umfassen hohe Kosten und Komplexität bei der Implementierung. Die Verfügbarkeit lässt sich als Prozentwert messen und ist entscheidend für den Betrieb von IT-Systemen in Unternehmen.

## Kontext und Einordnung

Im Rahmen der Informationssicherheit bildet die Verfügbarkeit zusammen mit Vertraulichkeit und Integrität die sogenannte CIA-Trias. Sie ist besonders relevant für Unternehmen, die auf kontinuierliche Datenverarbeitung angewiesen sind, wie in der Daten- und Prozessanalyse. Ausfallzeiten können zu Produktionsstillständen, Umsatzeinbußen und Reputationsschäden führen. Normen wie ISO 27001 definieren spezifische Kontrollen zur Sicherstellung der Verfügbarkeit, während gesetzliche Anforderungen wie die DSGVO oder NIS2 Unternehmen verpflichten, angemessene Schutzmechanismen zu implementieren.

## Begriffe und Definitionen

### Verfügbarkeit

Verfügbarkeit von Dienstleistungen, Funktionen eines IT-Systems, IT-Anwendungen oder IT-Netzen oder auch von Informationen liegt vor, wenn diese von den Anwendern stets wie vorgesehen genutzt werden können. Sie ist eines der drei primären Schutzziele der Informationssicherheit neben Vertraulichkeit und Integrität. Synonyme sind Erreichbarkeit oder Betriebsbereitschaft.

### Hochverfügbarkeit

Hochverfügbarkeit beschreibt Systeme, die so konzipiert sind, dass sie nahezu durchgehend betriebsbereit bleiben und Ausfallzeiten minimieren. Typische Werte sind 99,9 Prozent („Drei Neunen") oder 99,999 Prozent („Fünf Neunen"). Sie geht über reine Redundanz hinaus und umfasst automatische Failover-Verfahren.

### Systemverfügbarkeit vs. Datenverfügbarkeit

Die Systemverfügbarkeit beschreibt die Fähigkeit eines Computersystems oder einer Anwendung, Benutzern kontinuierlich Zugriff auf benötigte Ressourcen zu gewähren. Die Datenverfügbarkeit hingegen fokussiert auf die Möglichkeit, Informationen schnell und zuverlässig abzurufen, zu speichern und zu verarbeiten. Beide Aspekte sind eng miteinander verbunden, da ohne Datenverfügbarkeit auch bei funktionierendem System keine Daten bereitgestellt werden können.

### Verfügbarkeitsberechnung

Die Verfügbarkeit wird als Prozentwert berechnet:

$$ Verfügbarkeit = \frac{Betriebszeit}{Betriebszeit + Ausfallzeit} \times 100 $$

Bei einem System, das in 30 Tagen insgesamt 43 Minuten ausfällt, ergibt sich eine Verfügbarkeit von 99,9 Prozent. Diese Messung ist essenziell für die Bewertung der Servicequalität und Compliance.

## Vorgehen

Die Sicherstellung der technischen Verfügbarkeit von Daten erfolgt durch eine Kombination von Maßnahmen. Zunächst wird eine Risikoanalyse durchgeführt, um Schwachstellen zu identifizieren. Anschließend werden redundante Systeme implementiert, um Ausfälle zu kompensieren. Regelmäßige Backups und Disaster-Recovery-Pläne verhindern Datenverlust. Load-Balancing verteilt die Last gleichmäßig, während Monitoring die Leistung kontinuierlich überwacht. In Cloud-Umgebungen wird das Shared-Responsibility-Modell berücksichtigt, bei dem der Kunde für Architektur und Backups verantwortlich ist. Service Level Agreements definieren verbindliche Verfügbarkeitsziele.

## Beispiele

### Berechnung der Verfügbarkeit

Ein Unternehmen betreibt ein Datenbanksystem, das über ein Jahr (8760 Stunden) läuft. Bei einer geplanten Verfügbarkeit von 99,9 Prozent beträgt die maximale Ausfallzeit 43 Minuten pro Jahr. Tatsächlich fällt das System 50 Minuten aus, was zu einer tatsächlichen Verfügbarkeit von 99,89 Prozent führt. Dies zeigt, wie geringe Abweichungen die Qualität beeinflussen.

### Redundante Systeme in der Praxis

In einem E-Commerce-Unternehmen werden zwei Server für die Datenverarbeitung eingesetzt. Bei Ausfall des primären Servers übernimmt automatisch der sekundäre, wodurch die Verfügbarkeit auf über 99,9 Prozent steigt. Bei 1000 Transaktionen pro Stunde fallen ohne Redundanz 10 aus, mit Redundanz nur 1.

## Häufige Fehler und Tipps

Ein häufiger Fehler ist die Vernachlässigung regelmäßiger Backup-Tests, was bei einem tatsächlichen Ausfall zu Datenverlust führt. Die 3-2-1-Regel für Backups sieht drei Kopien auf zwei verschiedenen Medien vor, davon eine extern. Ein weiterer Fehler ist die Überlastung einzelner Systeme ohne Load-Balancing, was zu Performance-Einbußen führt. Frühzeitig implementierte Skalierungsmechanismen können Performance-Einbußen durch Systemüberlastung reduzieren. Bei Cloud-Lösungen wird oft die Kundenverantwortung unterschätzt; sorgfältige Prüfung von SLAs und die Erstellung von Notfallplänen sind notwendig.

## Weiterführendes

Für vertiefende Informationen zu verwandten Themen siehe [Datensicherheit](datensicherheit), [Cloud-Dienste](cloud-dienste) und [Systemlastanalyse](systemlastanalyse).
