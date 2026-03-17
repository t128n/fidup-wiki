---
title: "Ransomware"
description: "Ransomware verschlüsselt Daten und fordert Lösegeld. Arten wie Crypto- und Locker-Ransomware verbreiten sich via Phishing. Vorbeugung durch Backups, Sicherheit und Schulung; Reaktion mit Isolation und Wiederherstellung."
sources:
  - title: "Ransomware – Vorsicht vor Erpressersoftware"
    url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Schadprogramme/Ransomware/ransomware_node.html"
  - title: "Top 10 Ransomware-Maßnahmen"
    url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Cyber-Sicherheitslage/Analysen-und-Prognosen/Ransomware-Angriffe/Top-10-Ransomware-Massnahmen/top-10-ransomware-massnahmen.html"
  - title: "#StopRansomware Guide"
    url: "https://www.cisa.gov/stopransomware/ransomware-guide"
---

**Ransomware** ist eine Schadsoftware, die den Zugriff auf Daten und Systeme blockiert. Sie fordert Lösegeld für die Freigabe, ohne Garantie auf Wiederherstellung. Ransomware kann zu Datenverlust, finanziellen Schäden und Rufschädigung führen. Die häufigste Form ist Crypto-Ransomware, die Dateien verschlüsselt und einen Entschlüsselungsschlüssel fordert. Moderne Varianten verwenden oft Double Extortion: Sie verschlüsseln Daten und drohen zugleich mit deren Veröffentlichung.

## Arten von Ransomware

Ransomware tritt in verschiedenen Formen auf, die sich in ihrer Funktionsweise unterscheiden.

### Crypto-Ransomware

Crypto-Ransomware verschlüsselt Dateien auf dem Computer des Opfers und fordert Lösegeld für den Entschlüsselungsschlüssel. Dies ist die häufigste Form und kann angeschlossene Netzlaufwerke betreffen, wodurch der Schaden größer wird.

### Locker-Ransomware

Locker-Ransomware sperrt den Zugriff auf das gesamte System, sodass der Benutzer nicht mehr auf Dateien oder Anwendungen zugreifen kann. Die Daten werden meist nicht verschlüsselt, aber der Zugriff auf die Benutzeroberfläche wird verhindert. Die Wiederherstellung ist oft möglich, etwa durch Booten von einem Live-System.

### Scareware

Scareware täuscht vor, dass das System infiziert ist, und fordert eine Gebühr für die Behebung, obwohl keine echte Bedrohung besteht. Es ist eine Form von Social Engineering und weniger destruktiv, da keine echte Verschlüsselung stattfindet.

## Verbreitungswege

Ransomware verbreitet sich meist über Kanäle, die menschliches Fehlverhalten oder technische Schwachstellen ausnutzen.

### Phishing-E-Mails

Ransomware verbreitet sich oft über gefälschte E-Mails mit schädlichen Anhängen oder Links. [Phishing](phishing) nutzt die Unaufmerksamkeit der Empfänger. Moderne Kampagnen verwenden kompromittierte E-Mail-Konten von Mitarbeitern oder Partnern, um vertrauenswürdiger zu erscheinen. Anhänge in Office-Dokumenten mit Makros sind häufig.

### Drive-by-Downloads

Malware lädt sich automatisch herunter, wenn eine kompromittierte Website besucht wird. Dies nutzt Sicherheitslücken in Browsern oder Plugins. Aktualisierte Browser und eingeschränkte Plugin-Nutzung senken das Risiko.

### Remote Desktop Protocol (RDP)

Angreifer nutzen unsichere RDP-Verbindungen, um einzudringen und Ransomware zu installieren. RDP ist ein häufiger Angriffsvektor, da der Dienst oft unsicher aus dem Internet exponiert ist. Bei Bedarf sollte RDP nur über VPN mit Zwei-Faktor-Authentifizierung verwendet werden. Der Port 3389 darf nicht ohne Schutz direkt erreichbar sein.

## Auswirkungen

Die Folgen eines Ransomware-Angriffs sind weitreichend und betreffen technische sowie wirtschaftliche Bereiche.

### Datenverlust

Verlust wichtiger Daten, wenn Lösegeld nicht gezahlt wird oder die Entschlüsselung fehlschlägt.

### Finanzielle Verluste

Kosten für Wiederherstellung, mögliche Lösegeldzahlungen und Produktionsausfälle.

### Rufschädigung

Vertrauensverlust bei Kunden und Partnern, besonders bei betroffenen Unternehmen.

## Vorbeugung

Zur Vorbeugung von Ransomware-Angriffen sind regelmäßige Pflege und Sensibilisierung wichtig.

### Regelmäßige Backups

Erstellung regelmäßiger, sicherer [Backups](backup) ermöglicht Wiederherstellung ohne Lösegeld. Backups sollten offline gespeichert und regelmäßig getestet werden. Ein Backup ist wirksam, wenn es regelmäßig überprüft wird.

### Sicherheitssoftware

Einsatz aktueller Antivirus- und Antimalware-Software erkennt und blockiert Bedrohungen. Moderne Varianten werden oft durch Intrusion Prevention Systeme und Cloud-Dienste erkannt.

### Schulung der Mitarbeiter

Sensibilisierung für Phishing und Angriffsvektoren verringert das Infektionsrisiko. Regelmäßige Schulungen sind entscheidend, da Social Engineering Unaufmerksamkeit ausnutzt. Schulungen sollten praxisnah sein und fortgeschrittene Formen abdecken.

### Sicherheitsupdates

Regelmäßige Aktualisierungen von Betriebssystemen und Software schließen bekannte Sicherheitslücken. Besonders wichtig für internet-exponierte Systeme wie Webserver und Firewalls. Updates priorisieren, hochkritische zuerst.

## Reaktion auf einen Ransomware-Angriff

Bei einem Angriff minimiert eine schnelle, strukturierte Reaktion die Schäden.

### Isolierung des betroffenen Systems

Sofortige Trennung des infizierten Systems vom Netzwerk verhindert Ausbreitung. Dies kann auf Netzwerkebene oder physisch geschehen. Bei Cloud-Ressourcen Snapshots erstellen, um den Zustand für forensische Untersuchungen zu sichern.

### Meldung an die Behörden

Vorfall den Behörden melden. Unverzügliche Anzeige bei der Polizei. Meldepflichten je nach Branche und Daten.

### Datenwiederherstellung

Backups zur Wiederherstellung nutzen, statt Lösegeld. Systematisch vorgehen, beginnend mit kritischen Systemen. Vor Einspielen prüfen, dass die Ursache beseitigt ist.

### Analyse des Vorfalls

Untersuchung des Angriffs hilft, zukünftige Angriffe zu verhindern. Identifizierung des Initial Access, Analyse von Logs, Suche nach Persistenz-Mechanismen. Suche nach Indikatoren für Vorbereitungsmalware.
