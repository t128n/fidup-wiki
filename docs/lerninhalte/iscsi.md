---
title: "iSCSI"
description: "iSCSI ist ein Protokoll zur Übertragung von SCSI-Befehlen über IP-Netzwerke und ermöglicht den Zugriff auf blockbasierte Speicherlösungen ohne teure Fibre-Channel-Infrastruktur."
sources:
  - title: "Was ist iSCSI?"
    url: "https://www.storage-insider.de/was-ist-iscsi-a-679345"
  - title: "RFC 7143: Internet Small Computer System Interface (iSCSI)"
    url: "https://www.rfc-editor.org/rfc/rfc7143.html"
  - title: "iSCSI"
    url: "https://de.wikipedia.org/wiki/ISCSI"
---

**iSCSI** steht für Internet Small Computer System Interface und ist ein Protokoll für den Zugriff auf zentral verfügbare Speicherressourcen. Es verbindet das SCSI-Protokoll mit IP-Netzwerken und basiert auf dem [Client-Server-Modell](client-server). Dadurch ermöglicht es den Zugriff auf [blockbasierte Speicherlösungen](speicherloesungen) über [TCP/IP](tcp-ip-modell), ohne eine teure [Fibre Channel](fibre-channel)-Infrastruktur zu benötigen. iSCSI findet Anwendung in Storage Area Networks und bietet flexible, kostengünstige Speicherlösungen.

## Definition und Grundlagen
iSCSI steht für Internet Small Computer System Interface. Es handelt sich um ein Protokoll, das den Zugriff auf zentral verfügbare Speicherressourcen ermöglicht. Das Protokoll verbindet SCSI mit IP und basiert auf dem [Client-Server-Modell](client-server). Es erlaubt den Zugriff auf [blockbasierte Speicherlösungen](speicherloesungen) über [TCP/IP](tcp-ip-modell), ohne eine teure [Fibre Channel](fibre-channel)-Infrastruktur zu benötigen.

## Akteure
Die Hauptakteure in einem iSCSI-System sind die iSCSI-Nodes, die in Initiator- und Target-Nodes unterteilt werden. Jede Node erhält einen weltweit eindeutigen Namen, den iSCSI Node Name, der meist als IQN (iSCSI Qualified Name) bezeichnet wird.

- **iSCSI-Initiator-Nodes**: Diese fungieren als Clients. Sie sind Treiber, die im Betriebssystem installiert sind und SCSI-Befehle in [TCP/IP-Paketen](tcp-ip-modell) verpacken und versenden.
- **iSCSI-Target-Nodes**: Diese fungieren als Server, die Speicherplatz bereitstellen. Sie entpacken die iSCSI-Befehle und wandeln sie in SCSI-Befehle um, was zu einer hohen Rechenlast führen kann. Jedes Target stellt eine oder mehrere Logical Units (LUs) bereit, die dezidierte Festplatten-Adressierungen darstellen.

## Funktionsweise
Die Funktionsweise von iSCSI folgt einem strukturierten Ablauf:

1. Der iSCSI-Initiator baut eine Session mit dem iSCSI-Target auf. Dies kann eine normale operative Session oder eine Discovery-Session sein.
2. Der iSCSI-Initiator verpackt Befehle in Protocol Data Units (PDUs) und sendet sie anschließend.
3. Das iSCSI-Target entpackt die Befehle und beantwortet die Anfrage.

## Vor- und Nachteile
iSCSI bietet mehrere Vorteile, bringt aber auch Nachteile mit sich.

- **Vorteile**:
  - Nutzung vorhandener Infrastruktur und Hardware.
  - Administratoren sind bereits mit [Ethernet](ethernet) und [TCP/IP](tcp-ip-modell) vertraut.
  - Flexibilität durch das [TCP/IP-Protokoll](tcp-ip-modell), das Routing über Netzwerksegmente ermöglicht.
  - Kostengünstiger Aufbau, einfache Wartung, hohe Flexibilität und Skalierbarkeit.

- **Nachteile**:
  - Höhere Latenzzeit im Vergleich zu [Fibre Channel](fibre-channel).
  - Performance-Einbußen durch den Overhead von [TCP/IP](tcp-ip-modell).
  - Die [LAN](netzwerkkonzepte)-Performance beeinträchtigt den Speicherzugriff.