---
title: "Katastrophenwiederherstellung (Disaster Recovery)"
description: "Ein Leitfaden zur Planung und Umsetzung von Strategien zur technischen Wiederherstellung der IT-Infrastruktur nach kritischen Ausfällen."
sources:
    - title: "Business Continuity vs. Disaster Recovery"
      url: "https://www.ibm.com/think/topics/business-continuity-vs-disaster-recovery-plan"
    - title: "Was ist BCDR? (Business Continuity und Disaster Recovery)"
      url: "https://www.acronis.com/de-de/blog/posts/what-is-bcdr/"
    - title: "BSI-Standard 200-4: Business Continuity Management"
      url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/BSI-Standards/BSI-Standard-200-4-Business-Continuity-Management/bsi-standard-200-4_Business_Continuity_Management_node.html"
---

Die **Katastrophenwiederherstellung** (englisch _Disaster Recovery_, kurz _DR_) umfasst alle Strategien, technischen Maßnahmen und Prozesse zur Wiederherstellung der IT-Infrastruktur und Datenbestände nach schwerwiegenden Ausfällen. Ursachen für solche Ereignisse reichen von Hardwaredefekten und Cyberangriffen bis hin zu menschlichem Versagen oder Naturkatastrophen. Während [Backups](backup) primär der Datensicherung dienen, stellt Disaster Recovery die Verfügbarkeit ganzer Systeme innerhalb definierter Zeitrahmen sicher.

## Kerninhalte

Der Artikel behandelt folgende Schwerpunkte:

- Abgrenzung zwischen Disaster Recovery und Business Continuity.
- Definition und Anwendung der Metriken RTO, RPO und RCO.
- Strukturierte Phasen der Katastrophenplanung nach BSI-Standards.
- Einsatz von Disaster Recovery as a Service (DRaaS).

## Grundlagen und Abgrenzung

Disaster Recovery und Business Continuity sind eng miteinander verknüpft, verfolgen jedoch unterschiedliche Zielsetzungen innerhalb der organisatorischen Resilienz.

### Disaster Recovery vs. Business Continuity

Die Katastrophenwiederherstellung stellt einen technischen Teilbereich des übergeordneten Business Continuity Managements (BCM) dar.

- **Disaster Recovery (DR):** Konzentriert sich auf die reaktive Wiederherstellung der IT-Infrastruktur (Server, Netzwerke, Datenbanken). Das Ziel ist die technische Wiederaufnahme des IT-Betriebs nach einem Notfall.
- **Business Continuity (BC):** Verfolgt einen ganzheitlichen Management-Ansatz. Es wird sichergestellt, dass die Organisation als Ganzes – inklusive Personal, Standorte und kritische Geschäftsprozesse – während und nach einer Krise arbeitsfähig bleibt.

Die Kombination beider Ansätze wird oft unter dem Begriff **BCDR** zusammengefasst, um die Verzahnung von organisatorischer Stabilität und technischer Wiederherstellung zu verdeutlichen.

## Zentrale Metriken (Recovery Objectives)

Zur Quantifizierung und Planung von Wiederherstellungsstrategien dienen drei Kernmetriken, die für jede Anwendung spezifisch festgelegt werden.

### Recovery Time Objective (RTO)

Das RTO bezeichnet die maximale Zeitspanne, die zwischen einem Ausfall und der vollständigen Wiederherstellung eines IT-Systems oder Geschäftsprozesses vergehen darf. Es definiert somit die geforderte Wiederherstellungsgeschwindigkeit.

### Recovery Point Objective (RPO)

Das RPO beschreibt den maximal tolerierbaren Datenverlust in einem Zeitintervall. Es gibt an, wie weit der letzte Sicherungszeitpunkt vor dem Ereignis zurückliegen darf.
$$ \text{Zeitpunkt des Ausfalls} - \text{Zeitpunkt der letzten Sicherung} \leq RPO $$

### Recovery Consistency Objective (RCO)

Das RCO legt die erforderliche Konsistenz der Daten über verschiedene Systeme fest. In komplexen IT-Landschaften mit verteilten Datenbanken stellt das RCO sicher, dass die Daten nach der Wiederherstellung logisch zueinander passen und keine Inkonsistenzen zwischen Teilsystemen entstehen.

## Phasen der Katastrophenplanung

Die methodische Planung stellt sicher, dass im Ernstfall strukturierte Abläufe die Fehleranfälligkeit reduzieren.

1.  **Risikoanalyse:** Identifikation und Bewertung von Bedrohungsszenarien wie Naturkatastrophen, Ransomware-Angriffen oder Fehlbedienungen. Dabei werden Eintrittswahrscheinlichkeit und Schadensausmaß analysiert.
2.  **Business Impact Analyse (BIA):** Bewertung der Auswirkungen von IT-Ausfällen auf die Geschäftsprozesse. In dieser Phase erfolgt die Einstufung der Kritikalität von Anwendungen sowie die Festlegung der Zielwerte für RTO, RPO und RCO.
3.  **Strategieentwicklung:** Definition technischer Maßnahmen. Dazu gehören Konzepte wie Datenspiegelung, der Betrieb geografisch getrennter Standorte oder automatisierte Failover-Verfahren.
4.  **Implementierung und Test:** Aufbau der Infrastruktur und regelmäßige Durchführung von Wiederherstellungstests (Disaster Recovery Tests). Diese Validierung ist notwendig, um die Wirksamkeit der Pläne unter realnahen Bedingungen zu prüfen.

## Moderne Ansätze: Disaster Recovery as a Service (DRaaS)

Das Modell **Disaster Recovery as a Service (DRaaS)** nutzt Cloud-Ressourcen, um die IT-Infrastruktur extern zu replizieren. Ein Provider stellt im Notfall die notwendige Rechenkapazität bereit.

Wesentliche Merkmale:

- **Kosteneffizienz:** Verzicht auf eigene, physische Zweitstandorte und teure Hardware-Vorhaltung.
- **Automatisierung:** Schnelles Hochfahren der Systeme durch automatisierte Orchestrierung.
- **Garantierte Metriken:** Explizite Zusicherung von RTO und RPO innerhalb von [Service-Level-Vereinbarungen](sla).

## Beispiele und Tipps

Eine wirksame Strategie basiert auf der Priorisierung von Ressourcen nach ihrem geschäftlichen Nutzen.

### Beispiel: Klassifizierung von Anwendungen

Die folgende Tabelle zeigt eine beispielhafte Priorisierung zur Optimierung der Wiederherstellungskosten:

| Anwendung     | Kritikalität      | RTO        | RPO                  |
| :------------ | :---------------- | :--------- | :------------------- |
| ERP-System    | Geschäftskritisch | 2 Stunden  | 0 Minuten (Echtzeit) |
| E-Mail-Dienst | Wichtig           | 8 Stunden  | 1 Stunde             |
| Archiv-System | Unterstützend     | 72 Stunden | 24 Stunden           |

### Praxishinweise zur Umsetzung

- **Ganzheitlichkeit:** Ein Backup allein ersetzt keinen Disaster-Recovery-Plan. Ein vollständiger Plan umfasst Verantwortlichkeiten, Kommunikationswege und die logistische Verfügbarkeit von Ersatzhardware.
- **Medienbruch bei Dokumentation:** Die Dokumentation der Wiederherstellung darf nicht ausschließlich auf den Systemen lagern, deren Ausfall sie absichern soll. Notfallhandbücher müssen unabhängig vom Primärstandort (z. B. physisch oder in einem separaten Cloud-Speicher) zugänglich sein.
- **Geografische Trennung:** Standorte sollten ausreichend weit voneinander entfernt sein, um nicht gleichzeitig von derselben Katastrophe (z. B. Hochwasser oder großflächiger Stromausfall) betroffen zu sein.

## Selbsttest

1. Worin unterscheidet sich der Fokus von Disaster Recovery von dem des Business Continuity Managements?
2. Welche technischen Anforderungen ergeben sich aus einem RPO von 0 Minuten?
3. Inwiefern beeinflusst die Business Impact Analyse (BIA) die Budgetierung von IT-Schutzmaßnahmen?
4. Welche Bedeutung hat die Konsistenz (RCO) bei der Wiederherstellung verteilter Datenbanksysteme?
5. Warum ist die regelmäßige Aktualisierung des DR-Plans bei Änderungen der Software-Infrastruktur zwingend erforderlich?
