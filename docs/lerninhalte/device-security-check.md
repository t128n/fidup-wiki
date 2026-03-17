---
title: "Device Security Check"
description: "Systematische Überprüfung und Sicherstellung des Sicherheitsstatus von Endgeräten zur Minimierung von Cyberrisiken und Gewährleistung der Compliance."
sources:
  - title: "MDM vs EDR: Do You Need Both?"
    url: "https://preyproject.com/blog/mdm-vs-edr"
  - title: "Device Security | Definition, Anwendung & Praxisbeispiel"
    url: "https://keepbit.de/it-lexikon/device-security/"
---

Der **Device Security Check** (Endgerätesicherheitsprüfung) bezeichnet die systematische Untersuchung des Sicherheitsstatus von Endgeräten (*Endpoints*) in einem IT-Netzwerk. Der Prozess umfasst die Prüfung von IT-Komponenten wie Laptops, Smartphones, Tablets und Workstations auf Schwachstellen, Softwareaktualität sowie die Einhaltung interner Richtlinien. Ziel ist die Minimierung der Angriffsfläche, der Schutz vor unbefugtem Zugriff und die Sicherstellung der [Datensicherheit](datensicherheit).

## Lernziele
Die Vermittlung umfasst folgende Schwerpunkte:

* Definition und Zielsetzung der Endgerätesicherheitsprüfung.
* Differenzierung zwischen proaktiven und reaktiven Sicherheitsmaßnahmen.
* Funktionsweise zentraler Komponenten wie MDM, EDR und Patch-Management.
* Strukturierter Ablauf einer Sicherheitsüberprüfung.
* Bedeutung von [Compliance](compliance)-Vorgaben für die Sicherheit der Endgeräte.

## Kontext und Einordnung
Endgeräte bilden häufig die Schnittstelle zwischen Nutzern und Unternehmensressourcen. Ein Device Security Check dient als Kontrollmechanismus, um einen definierten Sicherheitsstandard für alle Geräte zu erzwingen, die auf interne Systeme zugreifen. Dies ist besonders bei mobiler Arbeit oder *Bring Your Own Device* (BYOD) relevant.

Der Prozess ist Bestandteil einer *Layered Security*-Strategie (Schichtmodell der Sicherheit):

* **Proaktive Ebene**: Verhindert Sicherheitslücken durch Konfigurationsvorgaben und Patch-Management.
* **Reaktive Ebene**: Erkennt und isoliert Bedrohungen während eines Angriffs durch Überwachungssysteme.

## Kernkomponenten

### Mobile Device Management (MDM)
Ein MDM-System ermöglicht die zentrale Verwaltung mobiler Endgeräte. Die IT-Administration kann hierüber Sicherheitsrichtlinien erzwingen, Applikationen verteilen und bei Verlust eines Geräts Daten per Fernzugriff zu löschen (*Remote Wipe*).

### Endpoint Detection and Response (EDR)
EDR-Lösungen überwachen Endgeräte kontinuierlich auf verhaltensbasierte Anomalien. Im Gegensatz zu signaturbasierten Antivirus-Programmen analysiert EDR Prozessaktivitäten, um auch unbekannte Bedrohungen wie *Zero-Day-Exploits* zu identifizieren.

### Patch-Management
Das Patch-Management steuert die regelmäßige Aktualisierung von Betriebssystemen und Anwendungen. Die zeitnahe Behebung bekannter Schwachstellen durch Software-Updates reduziert das Risiko erfolgreicher Angriffe erheblich.

## Verfahrensablauf
Die Durchführung eines Device Security Checks erfolgt in strukturierten Phasen:

1. **Inventarisierung**: Erfassung sämtlicher Geräte mit Netzwerkzugriff.
2. **Soll-Ist-Vergleich**: Prüfung der Gerätekonfiguration gegen Sicherheitsrichtlinien (z. B. Passwortrichtlinien, Verschlüsselungsstatus).
3. **Schwachstellen-Analyse**: Automatisierte Suche nach Sicherheitslücken in installierter Software.
4. **Compliance-Prüfung**: Verifikation gesetzlicher oder interner Anforderungen.
5. **Remediation**: Behebung identifizierter Mängel durch Updates oder Konfigurationsanpassungen.
6. **Dokumentation**: Erstellung von Prüfberichten für das Risikomanagement oder Audits.

## Praxisbeispiele

### Beispiel 1: Zugangsprüfung beim VPN-Aufbau
Vor dem Aufbau einer VPN-Verbindung prüft ein lokaler Agent den Sicherheitsstatus des Laptops:

* Status der Festplattenverschlüsselung.
* Aktualität der Antivirus-Signaturen.
* Vorhandensein kritischer Betriebssystem-Updates.
Der Zugriff auf das Unternehmensnetzwerk wird nur gewährt, wenn das Gerät als "Compliant" eingestuft wird.

### Beispiel 2: Bedrohungserkennung durch EDR
Ein EDR-System registriert auf einer Workstation den Versuch eines Prozesses, Dateien in hoher Frequenz zu verschlüsseln (typisches Muster von [Ransomware](ransomware)). Das System isoliert das betroffene Gerät automatisch vom Netzwerk und initiiert eine Alarmierung der IT-Sicherheit.

## Fehlerquellen und Risiken

* **Verzögertes Patching**: Bekannte Sicherheitslücken bleiben ungeschlossen, obwohl Updates verfügbar sind. Ein automatisiertes Patch-Management minimiert dieses Risiko.
* **Schatten-IT**: Nicht erfasste Geräte entziehen sich der Sicherheitsprüfung. Eine netzwerkseitige Zugangskontrolle ist zur Absicherung notwendig.
* **Physische Sicherheit**: Der Fokus auf Software-Sicherheit vernachlässigt oft physische Risiken. Fehlende Verschlüsselung führt bei Geräteverlust unmittelbar zum Datenabfluss.
* **Faktor Mensch**: Technische Kontrollen können durch die Preisgabe von Zugangsdaten oder Social Engineering umgangen werden.

## Selbsttest

1. Worin unterscheiden sich MDM und EDR in ihrer Zielsetzung?
2. Warum stellt die Inventarisierung die Basis für einen effektiven Security Check dar?
3. Welche Rolle übernimmt das Patch-Management bei der Prävention von Cyberangriffen?
4. Welche Konsequenzen hat ein "Remote Wipe" für die Daten auf einem Endgerät?
