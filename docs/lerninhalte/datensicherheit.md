---
title: "Datensicherheit"
description: "Datensicherheit umfasst alle technischen und organisatorischen Maßnahmen zum Schutz von Daten vor Manipulation, Verlust und unbefugtem Zugriff. Sie bildet die Grundlage für einen wirksamen Datenschutz."
sources:
  - title: "BSI - Lerneinheit 4.1: Grundlegende Definitionen"
    url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/Zertifizierte-Informationssicherheit/IT-Grundschutzschulung/Online-Kurs-IT-Grundschutz/Lektion_4_Schutzbedarfsfeststellung/4_01_Definitionen.html"
  - title: "Datenschutz vs. Datensicherheit: Den Unterschied verstehen"
    url: "https://www.sofortdatenschutz.de/blog/datenschutz-vs-datensicherheit-den-unterschied-verstehen/"
  - title: "Technisch organisatorische Maßnahmen (TOM) nach DSGVO"
    url: "https://www.proliance.ai/blog/technische-und-organisatorische-massnahmen-tom"
---

Die **Datensicherheit** beschreibt den Zustand, in dem Informationen durch technische und organisatorische Maßnahmen vor unbefugtem Zugriff, Verlust, Zerstörung oder Verfälschung geschützt sind. Während der [Datenschutz](datenschutz) den Schutz personenbezogener Daten und die Privatsphäre fokussiert, bezieht sich die Datensicherheit auf den Schutz aller Datenbestände – ob digital oder analog. Sie bildet das technische Fundament für die Integrität von Geschäftsprozessen und die Einhaltung rechtlicher Vorgaben.

## Lernziele
Der Artikel vermittelt Kenntnisse zu folgenden Schwerpunkten:

*   Definition und Abgrenzung der Datensicherheit.
*   Die CIA-Triade als zentrales Modell der Schutzziele.
*   Unterscheidung zwischen technischer Sicherheit und rechtlichem Datenschutz.
*   Kategorisierung technischer und organisatorischer Maßnahmen (TOM).
*   Grundlagen der Schutzbedarfsfeststellung.

## Kernkonzept der Datensicherheit
Datensicherheit zielt darauf ab, Informationen als Wirtschaftsgut (*Asset*) zu schützen. Dabei werden Risiken identifiziert und durch Sicherheitsvorkehrungen auf ein akzeptables Maß minimiert. Dies umfasst nicht nur digitale Daten auf Servern, sondern auch die physische Sicherheit von Datenträgern sowie die Übertragungswege in Netzwerken. Eine hohe Datensicherheit ist erreicht, wenn die definierten Schutzziele dauerhaft und nachweisbar erfüllt werden.

## Die CIA-Triade – Die drei Säulen der Sicherheit
Die wesentlichen Ziele der Datensicherheit werden im Modell der CIA-Triade zusammengefasst:

*   **Vertraulichkeit (Confidentiality):** Sicherstellung, dass Daten nur für berechtigte Personen oder Systeme zugänglich sind. Ein Bruch der Vertraulichkeit liegt vor, wenn Unbefugte Einsicht in sensible Informationen erhalten (z. B. durch [Phishing](phishing)).
*   **Integrität (Integrity):** Gewährleistung der Korrektheit und Vollständigkeit von Daten. Informationen dürfen nicht unbemerkt oder unautorisiert verändert werden. Manipulationen müssen jederzeit erkennbar sein.
*   **Verfügbarkeit (Availability):** Sicherstellung, dass berechtigte Nutzer jederzeit auf Daten und Systeme zugreifen können. Cyberangriffe (z. B. [Ransomware](ransomware)) oder Hardwaredefekte gefährden dieses Ziel.

In der Praxis entstehen oft Zielkonflikte: Extrem hohe Sicherheitsvorkehrungen zur Wahrung der Vertraulichkeit können die Geschwindigkeit oder den Komfort des Zugriffs und damit die Verfügbarkeit einschränken.

## Abgrenzung: Datensicherheit vs. Datenschutz
Obwohl beide Begriffe eng verknüpft sind, verfolgen sie unterschiedliche Ansätze:

| Merkmal | Datensicherheit | Datenschutz |
| :--- | :--- | :--- |
| **Fokus** | Schutz der Daten (Asset-Schutz) | Schutz der Person (Privatsphäre) |
| **Gegenstand** | Alle Daten (z. B. Konstruktionspläne, Bilanzen) | Personenbezogene Daten (z. B. Name, Adresse) |
| **Ziel** | Vertraulichkeit, Integrität, Verfügbarkeit | Rechtmäßigkeit der Verarbeitung, Betroffenenrechte |
| **Grundlage** | IT-Grundschutz, ISO 27001, Stand der Technik | DSGVO, Bundesdatenschutzgesetz (BDSG) |

Die Datensicherheit dient als technisches Werkzeug, um die Anforderungen des Datenschutzes umzusetzen. Ohne eine sichere IT-Infrastruktur ist ein rechtskonformer [Datenschutz](datenschutz) nicht realisierbar.

## Technische und organisatorische Maßnahmen (TOM)
Zur Erreichung der Schutzziele werden Maßnahmen in zwei Kategorien unterteilt:

### Technische Maßnahmen
Diese wirken direkt auf der Hard- und Softwareebene sowie der physischen Infrastruktur:

*   **Verschlüsselung:** Schutz von Daten bei der Übertragung (*In Transit*) und auf Speichermedien (*At Rest*).
*   **Zugriffskontrolle:** Einsatz von Firewalls, Identitätsmanagement und Multi-Faktor-Authentifizierung (MFA).
*   **Datensicherung:** Regelmäßige Erstellung von [Backups](backup), um die Verfügbarkeit nach einem Datenverlust wiederherzustellen.
*   **Physische Sicherheit:** Zutrittskontrollen zu Rechenzentren, Alarmanlagen und Brandschutz.

### Organisatorische Maßnahmen
Diese regeln Abläufe, Richtlinien und das Verhalten der Beteiligten:

*   **Schulungen:** Sensibilisierung für Bedrohungen wie Social Engineering.
*   **Berechtigungskonzepte:** Umsetzung des *Need-to-know*-Prinzips (Vergabe minimal notwendiger Rechte).
*   **Notfallpläne:** Dokumentierte Prozesse für die Reaktion auf Sicherheitsvorfälle.
*   **Richtlinien:** Verbindliche Anweisungen zur Passwortsicherheit oder zur Nutzung privater Endgeräte (BYOD).

## Praxisbeispiel: Schutzbedarfsfeststellung
Vor der Implementierung von Maßnahmen muss der Schutzbedarf ermittelt werden. Das Bundesamt für Sicherheit in der Informationstechnik (BSI) unterscheidet drei Kategorien:

1.  **Normal:** Begrenzte Schadensauswirkungen (z. B. interne Telefonliste).
2.  **Hoch:** Erhebliche Schäden für die Reputation oder Gesetzesverstöße (z. B. Kundendatenbank).
3.  **Sehr hoch:** Existenzbedrohende Schäden für die Organisation (z. B. geheime Rezepturen oder Staatsgeheimnisse).

Die Auswahl der TOM orientiert sich strikt am ermittelten Schutzbedarf, um Wirtschaftlichkeit und Sicherheit in Einklang zu bringen.

## Häufige Fehler und Empfehlungen

*   **Einseitiger Fokus auf Technik:** Organisatorische Mängel (z. B. unverschlossene Serverräume oder Passwörter an Monitoren) hebeln technische Hürden aus.
*   **Faktor Mensch:** Das schwächste Glied in der Sicherheitskette ist oft der Mensch. Awareness-Trainings sind ebenso kritisch wie technische Updates.
*   **Ungeprüfte Datensicherungen:** Ein [Backup](backup) ist nur dann zuverlässig, wenn die Wiederherstellung (*Restore*) regelmäßig erfolgreich getestet wird.

## Selbsttest

1. Worin liegt der Hauptunterschied im Fokus zwischen Datensicherheit und Datenschutz?
2. Welche drei Schutzziele bilden die CIA-Triade?
3. In welche Kategorie fällt ein Berechtigungskonzept: technisch oder organisatorisch?
4. Warum zählt die Verfügbarkeit zu den Schutzzielen der Datensicherheit?
5. Was besagt das *Need-to-know*-Prinzip bei der Rechtevergabe?
