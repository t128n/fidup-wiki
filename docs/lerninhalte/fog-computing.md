---
title: "Fog Computing"
description: "Fog Computing ist eine dezentrale Infrastruktur, die als Zwischenschicht zwischen lokalen Endgeräten und der zentralen Cloud dient, um Latenzen zu minimieren."
sources:
  - title: "BSI - Edge und Fog Computing"
    url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/edge_fog/edge_fog_node.html"
  - title: "IONOS Digital Guide - Fog Computing"
    url: "https://www.ionos.de/digitalguide/server/knowhow/fog-computing-definition-und-erklaerung/"
  - title: "IP-Insider - Was ist Fog Computing?"
    url: "https://www.ip-insider.de/was-ist-fog-computing-fog-networking-fogging-a-069d4b7641c93a69ccf6f1581d3adeab/"
---

**Fog Computing** (auch als *Fogging* bezeichnet) ist eine Netzwerkarchitektur, die die Datenverarbeitung dezentral auf lokale Knoten verteilt. Diese Technik fungiert als Bindeglied zwischen dem [Internet of Things](iot) (IoT) und dem klassischen [Cloud-Computing](cloud-computing). Durch die Vorverarbeitung in sogenannten *Fog Nodes* in unmittelbarer Nähe der Datenquellen werden Reaktionszeiten verkürzt und die Auslastung der Netzwerkbandbreite optimiert.

## Lernziele
Nach der Bearbeitung dieses Artikels können Auszubildende:

* das Konzept des Fog Computing und die Einordnung in die IT-Infrastruktur erläutern.
* die drei Schichten (Edge, Fog, Cloud) voneinander abgrenzen.
* die Vorteile und Herausforderungen dieser Technologie benennen.
* praxisnahe Anwendungsgebiete identifizieren.

## Architektur und Schichten
Fog Computing erweitert das herkömmliche Client-Server-Modell um eine zusätzliche, dezentrale Ebene. Die Architektur gliedert sich üblicherweise in drei Schichten:

1. **Edge-Layer (Endgeräte):** Physische Sensoren und Aktoren generieren Daten oder führen Aktionen aus. Die Rechenleistung auf dieser Ebene ist meist stark begrenzt.
2. **Fog-Layer (Lokale Knoten):** Zwischengeschaltete Geräte wie Gateways, Router oder lokale Server (Fog Nodes) sammeln Daten mehrerer Edge-Geräte. Hier erfolgen Analysen, Filterungen oder Aggregationen.
3. **Cloud-Layer (Zentrales Rechenzentrum):** Hochleistungsrechner übernehmen die langfristige Speicherung sowie komplexe [Big-Data-Analysen](big-data), die nicht zeitkritisch sind.

## Vorteile und Herausforderungen

### Vorteile

* **Geringe Latenz:** Da die Verarbeitung räumlich nah an der Datenquelle erfolgt, lassen sich Entscheidungen nahezu in Echtzeit treffen.
* **Bandbreiteneffizienz:** Durch die Übertragung vorverarbeiteter oder aggregierter Daten wird das Kernnetzwerk entlastet.
* **Offline-Fähigkeit:** Systeme im Fog-Layer erhalten grundlegende Funktionen aufrecht, auch wenn die Verbindung zur zentralen Cloud unterbrochen ist.
* **Datenschutz:** Personenbezogene Informationen lassen sich lokal anonymisieren, bevor sie das interne Netzwerk verlassen (siehe [Datenschutz](datenschutz)).

### Herausforderungen

* **Hohe Komplexität:** Betrieb und Wartung einer verteilten Infrastruktur mit zahlreichen Knoten sind aufwendiger als bei zentralen Systemen.
* **Sicherheitsrisiken:** Jeder zusätzliche Fog Node vergrößert die Angriffsfläche für Manipulationen oder unbefugte Zugriffe.
* **Hardwarekosten:** Die Anschaffung intelligenter Netzwerkknoten mit ausreichender Rechenleistung erfordert höhere Investitionen.

## Anwendungsbeispiele
Fog Computing findet überall dort Anwendung, wo große Datenmengen in kurzer Zeit verarbeitet werden müssen:

* **Industrie 4.0:** In einer vernetzten Fabrik steuern Fog Nodes Roboterarme in Echtzeit, während Produktionsstatistiken zur langfristigen Analyse in die Cloud fließen.
* **Smart City:** Intelligente Ampelsysteme analysieren das Verkehrsaufkommen lokal an Kreuzungen, um die Signalphasen ohne Verzögerung durch entfernte Rechenzentren anzupassen.
* **Autonomes Fahren:** Fahrzeuge müssen Hindernisse innerhalb von Millisekunden erkennen. Die lokale Verarbeitung im Fahrzeug (Edge) und die Koordination über lokale Funkzellen (Fog) sind hierfür grundlegend.

## Häufige Fehler und Praxistipps

* **Ergänzung statt Ersatz:** Fog Computing ersetzt das Cloud Computing nicht. Komplexe Berechnungen und das Training von KI-Modellen finden weiterhin zentral statt.
* **Physische Sicherheit:** Da Fog Nodes oft an dezentralen, physisch zugänglichen Orten stehen, ist ein besonderer Schutz gegen Manipulation erforderlich.

## Selbsttest

1. Worin besteht der wesentliche Unterschied zwischen Edge Computing und Fog Computing?
2. Auf welche Weise trägt Fog Computing zur Schonung der Netzwerkbandbreite bei?
3. In welcher Schicht erfolgt üblicherweise die langfristige Archivierung von Daten?
4. Welche zwei Sicherheitsrisiken ergeben sich speziell beim Einsatz von Fog Nodes?
