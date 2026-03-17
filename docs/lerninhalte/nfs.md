---
title: "Network File System"
description: "Das Network File System (NFS) ist ein verteiltes Dateisystem-Protokoll für den Zugriff auf Dateien über Netzwerke, als wären sie lokal. Es bietet Funktionen wie Caching, Dateisperren und Synchronisation, entwickelt für Unix/Linux-Umgebungen."
sources:
  - title: "RFC 7530 - Network File System (NFS) Version 4 Protocol"
    url: "https://www.rfc-editor.org/rfc/rfc7530"
  - title: "RFC 5661 - Network File System (NFS) Version 4 Minor Version 1 Protocol"
    url: "https://www.rfc-editor.org/rfc/rfc5661"
  - title: "Wikipedia: Network File System"
    url: "https://en.wikipedia.org/wiki/Network_File_System"
---

Das **Network File System** (NFS) ist ein verteiltes Dateisystem-Protokoll, das den Zugriff auf Dateien auf einem Remote-Server ermöglicht, als wären sie lokal gespeichert. Es wurde von Sun Microsystems entwickelt und ist besonders in Linux-Umgebungen verbreitet. NFS unterstützt Mechanismen wie clientseitiges Caching zur Leistungssteigerung, Dateisperren zur Vermeidung von Konflikten und Synchronisation von Dateiattributen für Datenkonsistenz.

## Übersicht
NFS ermöglicht den transparenten Zugriff auf entfernte Dateien über ein Netzwerk, indem es eine Client-Server-Architektur verwendet. Der Client greift auf Dateien zu, als wären sie lokal, während der Server den Zugriff verwaltet. Wichtige Versionen sind NFSv4, die Sicherheit und Effizienz verbessern. Es findet Anwendung in Dateifreigabe-Szenarien in Unternehmensnetzwerken.

## Kontext
NFS wurde 1984 von Sun Microsystems entwickelt und hat sich zu einem Standard in Unix/Linux-Netzwerken entwickelt. Aktuelle Versionen wie NFSv4.0 und NFSv4.1 bieten verbesserte Sicherheit durch Kerberos und effizientere Mechanismen wie Delegation. Im Vergleich zu [SMB](smb), das in Windows-Umgebungen dominiert, ist NFS für Unix-Systeme optimiert und unterstützt ähnliche Funktionen wie Caching und Locking, aber mit unterschiedlichen Protokollen.

## Definitionen

- **Client-Server-Architektur**: Modell, in dem der Client Anfragen stellt und der Server diese bearbeitet.
- **Delegation**: Mechanismus in NFSv4, bei dem der Server dem Client erlaubt, Dateien lokal zu cachen, um Netzwerkverkehr zu reduzieren.
- **[RPC](rpc)**: Protokoll, das NFS für die Kommunikation zwischen Client und Server verwendet.

## Funktionsweise
Um NFS zu nutzen, wird typischerweise der Server konfiguriert, um Freigaben zu exportieren, und der Client mountet diese Freigaben. Schritte umfassen:

1. Server einrichten: NFS-Dienst starten und Verzeichnisse exportieren.
2. Client konfigurieren: Mount-Befehl verwenden, um entfernte Freigabe einzubinden.
3. Zugriff: Dateien wie lokal verwenden, mit automatischem Caching und Sperren.

## Beispiele
In einem Unternehmen teilt ein NFS-Server ein Verzeichnis /data mit Kundenaufträgen. Ein Client mountet es als /mnt/data. Der Benutzer bearbeitet Dateien wie lokal, z. B. editiert order123.txt, und Änderungen werden synchronisiert.

## Häufige Probleme

- Zugriff verweigert wegen Berechtigungen: UID/GID auf Client und Server synchronisieren.
- Langsame Leistung durch fehlendes Caching: Aktivierung von clientseitigem Caching in NFSv4.
- NFSv2/v3 verwenden für Sicherheit: Die Verwendung von NFSv4 mit Kerberos für Authentifizierung wird empfohlen.

## Weiterführende Informationen
Für tiefergehende technische Details siehe die RFCs. Vergleiche mit [SMB](smb) für Alternativen in heterogenen Netzwerken.
