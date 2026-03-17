---
title: "Server Message Block"
description: "Das Server Message Block (SMB) Protokoll ermöglicht die gemeinsame Nutzung von Dateien und Druckern in Netzwerken. Es unterstützt verschiedene Versionen und bietet Sicherheitsfeatures wie Verschlüsselung und Authentifizierung, wird hauptsächlich in Windows-Umgebungen eingesetzt und ist auch auf anderen Plattformen über Samba verfügbar."
sources:
  - title: "Was ist die SMB-Dateifreigabe für Windows und Windows Server?"
    url: "https://learn.microsoft.com/de-de/windows-server/storage/file-server/file-server-smb-overview"
  - title: "SMB-Protokoll – IBM AIX Dokumentation"
    url: "https://www.ibm.com/docs/de/aix/7.3.0?topic=management-smb-protocol"
---

Der **Server Message Block (SMB)** ist ein Netzwerkprotokoll für die gemeinsame Nutzung von Dateien und Druckern. Es ermöglicht Clients den Zugriff auf entfernte Ressourcen über eine Client-Server-Architektur und unterstützt Authentifizierung sowie Dateisperren zur Koordination gleichzeitiger Zugriffe.

## Lernziele

Nach diesem Artikel können folgende Inhalte verstanden werden:

- die Grundlagen des SMB-Protokolls und seiner Funktionsweise erklären,
- verschiedene SMB-Versionen und ihre Sicherheitsimplikationen benennen,
- typische Anwendungsszenarien wie UNC-Pfade und Netzlaufwerk-Mapping beschreiben,
- Risiken älterer SMB-Versionen wie SMBv1 und deren Vermeidung verstehen.

## Kurzübersicht

SMB dient als Standardprotokoll für Datei- und Druckerfreigabe in Netzwerken, insbesondere in Windows-Umgebungen. Es basiert auf einer Client-Server-Architektur, bei der Clients Anfragen an Server senden, um Ressourcen zu nutzen. Das Protokoll hat sich von frühen Versionen wie SMB 1.0 zu modernen wie SMB 3.1.1 entwickelt, die verbesserte Sicherheit und Leistung bieten. Neben Windows wird SMB durch Samba auch auf Linux und macOS unterstützt.

## Kontext und Einordnung

SMB entstand ursprünglich aus der Entwicklung von IBM und wurde von Microsoft weiterentwickelt. Historisch als Common Internet File System (CIFS) bekannt, stellt SMB den Nachfolger dar. Es konkurriert mit anderen Protokollen wie NFS für Dateifreigabe, unterscheidet sich jedoch durch seinen Fokus auf Windows-Integration und Authentifizierung. Im Kontext der Daten- und Prozessanalyse ermöglicht SMB den Zugriff auf geteilte Ressourcen in Unternehmensnetzwerken, was für Analysen von verteilten Datenquellen relevant ist.

## Begriffe und Definitionen

### Server Message Block (SMB)
Ein client-server-basiertes Kommunikationsprotokoll für den gemeinsamen Zugriff auf Dateien, Verzeichnisse, Drucker und andere Ressourcen in einem Netzwerk. SMB ermöglicht das Lesen, Erstellen und Aktualisieren von Dateien auf Remoteservern über Transportprotokolle wie [TCP/IP](tcp-ip-modell).

### Client-Server-Architektur
Modell, bei dem SMB-Clients Anfragen an SMB-Server senden. Der Server stellt Ressourcen bereit und antwortet auf Anfragen. Beide Rollen können auf demselben System ausgeführt werden, etwa wenn Windows sowohl Client als auch Server ist.

### SMB-Versionen
SMB existiert in verschiedenen Dialekten, die Protokollversionen repräsentieren:

- **SMB 1.0**: Ursprüngliche Version mit grundlegenden Funktionen, aber Sicherheitslücken wie EternalBlue.
- **SMB 2.0**: Einführung in Windows Vista, mit verbesserter Leistung und Sicherheit.
- **SMB 3.0**: Ab Windows 8, bietet Verschlüsselung, Multichannel und RDMA-Unterstützung.
- **SMB 3.1.1**: Aktuellste Version, mit stärkerer Verschlüsselung und Kerberos-Authentifizierung.

Höhere Versionen bieten Abwärtskompatibilität, aber für Sicherheit sollte mindestens SMB 2.0 verwendet werden.

## Vorgehen

SMB arbeitet in einem Anfrage-Antwort-Modell:

1. Der Client baut eine Verbindung zum Server auf, typischerweise über [TCP/IP](tcp-ip-modell) auf Port 445.
2. Authentifizierung erfolgt mittels NTLM oder Kerberos.
3. Der Client sendet Anfragen, z. B. zum Öffnen einer Datei oder Drucken.
4. Der Server verarbeitet die Anfrage, wendet Zugriffsrechte an und sendet eine Antwort.
5. Dateisperren koordinieren gleichzeitige Zugriffe, um Dateninkonsistenzen zu vermeiden.

Für praktische Nutzung erfolgt der Zugriff oft über UNC-Pfade wie `\\server\share\datei.txt` oder durch Mapping als Netzlaufwerk.

## Beispiele

### UNC-Pfad-Zugriff
Ein Benutzer greift auf eine geteilte Datei zu: `\\fileserver\public\bericht.xlsx`. Der Client verwendet SMB, um die Datei zu öffnen, als wäre sie lokal gespeichert. Authentifizierung erfolgt automatisch über Windows-Anmeldedaten.

### Netzlaufwerk-Mapping
Ein Laufwerk Z: wird auf `\\server\share` gemappt. Der Benutzer kann dann im Explorer auf Z:\ zugreifen, und SMB handhabt die Netzwerkkommunikation im Hintergrund.

### Druckdienst
Ein Dokument wird an einen Netzwerkdrucker gesendet: Der Client sendet die Druckanfrage über SMB an den Server, der die Datei an den Drucker weiterleitet.

## Häufige Fehler und Tipps

- **SMBv1 verwenden**: Führt zu Sicherheitsrisiken wie WannaCry. Empfehlung: SMBv1 sollte deaktiviert und mindestens SMB 2.0 verwendet werden, da höhere Versionen Abwärtskompatibilität bieten.
- **Fehlende Authentifizierung**: Zugriff verweigert. Empfehlung: Anmeldedaten sollten korrekt sein und Kerberos anstelle von NTLM verwendet werden.
- **Langsame Übertragungen**: Bei großen Dateien. Empfehlung: SMB Multichannel sollte für Bandbreitenaggregation aktiviert werden oder SMB Direct für RDMA.
- **Kompatibilitätsprobleme mit Samba**: Auf Linux-Systemen. Empfehlung: Samba-Versionen sollten auf SMB 3.0-Unterstützung überprüft werden.

## Selbsttest

1. Was ist der Hauptzweck von SMB?
2. Welche SMB-Version sollte mindestens verwendet werden, und warum?
3. Wie lautet ein typischer UNC-Pfad?
4. Welche Sicherheitsrisiken birgt SMBv1?

## Weiterführendes

Für tiefergehende Informationen zu Netzwerkprotokollen siehe [OSI-Modell](osi-modell). Alternativen zu SMB umfassen NFS für Unix-basierte Systeme.
