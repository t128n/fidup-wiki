---
title: "API-Schnittstellen"
description: "Application Programming Interfaces (APIs) bilden das Rückgrat moderner Softwarearchitekturen, indem sie den strukturierten Datenaustausch zwischen Anwendungen ermöglichen."
sources:
  - title: "REST, GraphQL und gRPC im Vergleich"
    url: "https://www.predic8.de/rest-graphql-grpc-api-vergleich-artikel.htm"
  - title: "REST vs. GraphQL vs. gRPC vs. SOAP"
    url: "https://apidog.com/de/blog/rest-vs-graphql-vs-grpc-vs-soap-6/"
  - title: "Best Practices für REST-APIs"
    url: "https://techpulsion.com/de/Best-Practices-f%C3%BCr-Rest-APIs/"
---

Eine **API-Schnittstelle** (*Application Programming Interface*) ist eine definierte Menge an Regeln und Protokollen, die Softwarekomponenten die Kommunikation und den Datenaustausch ermöglicht. Sie fungiert als verbindlicher Vertrag auf Quellcode-Ebene und legt fest, welche Funktionen verfügbar sind und wie Anfragen sowie Antworten strukturiert sein müssen. APIs sind essenziell für die Integration von Drittanbieter-Software, die Anbindung von [Cloud-Diensten](cloud-dienste) und die Automatisierung von [Geschäftsprozessen](geschaeftsprozess).

## Lernziele
Nach der Lektüre dieses Artikels sind folgende Kompetenzen erworben:

- Der fundamentale Unterschied zwischen einer API und einer ABI ist bekannt.
- Gängige API-Architekturen wie REST, GraphQL, gRPC und SOAP können gegeneinander abgegrenzt werden.
- Passende [Datenaustauschformate](datenaustauschformate) und Protokolle lassen sich für spezifische Anwendungsfälle identifizieren.
- Grundlegende Best Practices in den Bereichen Sicherheit, Dokumentation und Versionierung sind verstanden.

## Grundlagen und Abgrenzung
Um die Funktionsweise einer API zu verstehen, ist die Abgrenzung zur Binärschnittstelle entscheidend:

### API vs. ABI

*   **API (Application Programming Interface):** Ein Vertrag auf Quellcode-Ebene. Er stellt sicher, dass Programme, die gegen diese Schnittstelle geschrieben wurden, auf verschiedenen Systemen kompiliert und ausgeführt werden können, sofern die Schnittstelle stabil bleibt (Quellcode-Portabilität).
*   **ABI (Application Binary Interface):** Ein Vertrag auf Binär-Ebene (Maschinencode). Die ABI definiert, wie kompilierte Programme im Speicher miteinander interagieren, etwa durch die Belegung von Prozessorregistern oder das Datenlayout von Strukturen. Während die API die Portabilität des Quellcodes sichert, ermöglicht die ABI die Lauffähigkeit von Programmen auf einem spezifischen Betriebssystem und einer Hardware-Architektur.

## Moderne API-Architekturen
Je nach Anforderung und Einsatzgebiet haben sich unterschiedliche Architekturstile etabliert:

### REST (Representational State Transfer)
REST gilt als etablierter Standard für Web-APIs. Dieser Architekturstil ist zustandslos und nutzt die Standard-Methoden des [HTTPS](https)-Protokolls (GET, POST, PUT, DELETE). Daten werden meist im JSON-Format übertragen. REST zeichnet sich durch hohe Skalierbarkeit und einfache Integration aus.

### GraphQL
GraphQL ist eine von Facebook entwickelte Abfragesprache. Im Gegensatz zu REST, bei dem der Server die Struktur der Antwort vorgibt, legt bei GraphQL der Client fest, welche Daten benötigt werden. Dies verhindert *Over-fetching* (zu viele Daten) und *Under-fetching* (zu wenige Daten, was Folgeanfragen nötig macht).

### gRPC (Google Remote Procedure Call)
gRPC ist ein performantes Hochleistungs-Framework, das auf HTTP/2 basiert. Es nutzt Protocol Buffers (Protobuf) als binäres Serialisierungsformat. Aufgrund der hohen Effizienz wird es vorrangig für die interne Kommunikation in verteilten Systemen und modernen Softwarearchitekturen (Backend-to-Backend) eingesetzt.

### SOAP (Simple Object Access Protocol)
SOAP ist ein XML-basierter Standard mit strengen Definitionen. Er bietet durch Erweiterungen wie WS-Security hohe Sicherheitsstandards. SOAP findet primär in Legacy-Systemen oder im Enterprise-Umfeld (z. B. Banken) Anwendung, insbesondere wenn ACID-Transaktionen über Schnittstellen hinweg erforderlich sind.

## Protokolle und Datenformate
Die Wahl des Protokolls und des Formats beeinflusst die Performance und Kompatibilität einer API:

| Format | Beschreibung | Typischer Einsatz |
| :--- | :--- | :--- |
| **JSON** | Leichtgewichtiges, textbasiertes Format; gut lesbar für Mensch und Maschine. | REST-APIs, Web-Anwendungen |
| **XML** | Hierarchisch strukturiert und flexibel, jedoch mit höherem Overhead. | SOAP, Konfigurationsdateien |
| **Protobuf** | Binäres Format; extrem kompakt und effizient in der Verarbeitung. | gRPC, verteilte Systeme |

## Best Practices
Für eine professionelle API-Entwicklung gelten folgende Standards:

1.  **Dokumentation:** Der Standard **OpenAPI** (ehemals Swagger) ermöglicht eine maschinenlesbare und interaktive Dokumentation der Schnittstelle.
2.  **Versionierung:** Um bestehende Anwendungen bei Änderungen nicht zu beeinträchtigen (*Breaking Changes*), erfolgt die Versionierung meist im Pfad (z. B. `/v1/users`) oder über den HTTP-Header.
3.  **Sicherheit:** Die Übertragung muss über verschlüsselte Verbindungen (TLS/HTTPS) erfolgen. Für die Authentifizierung werden Verfahren wie OAuth2 oder JSON Web Tokens (JWT) eingesetzt. Zudem schützt *Rate Limiting* vor Überlastung und Missbrauch.

## Praxisbeispiel: Datenaustausch CRM und ERP
In einem Unternehmen soll das Customer-Relationship-Management-System (CRM) automatisch Daten mit dem Enterprise-Resource-Planning-System (ERP) abgleichen, sobald ein neuer Auftrag angelegt wird.

1.  **Trigger:** Ein Auftrag wird im CRM gespeichert.
2.  **API-Call:** Das CRM sendet per REST-API einen POST-Request an das ERP-System.
3.  **Payload:** Die Auftragsdaten werden als JSON-Objekt übertragen:
    ```json
    {
      "order_id": "A1005",
      "customer_id": "C-992",
      "amount": 450.00,
      "currency": "EUR"
    }
    ```

4.  **Verarbeitung:** Das ERP validiert die Daten, legt den Auftrag an und sendet den Status `201 Created` zurück.

## Häufige Fehler und Tipps

- **Keine Versionierung:** Änderungen an der API ohne Versionierung führen oft dazu, dass bestehende Clients unbrauchbar werden. Von Beginn an sollte eine Versionsnummer (z. B. `/v1/`) eingeplant werden.
- **Unpräzise Fehlermeldungen:** Ein generischer `500 Internal Server Error` erschwert die Fehlersuche. Stattdessen sollten spezifische HTTP-Statuscodes wie `404 Not Found` oder `400 Bad Request` mit hilfreichen Details im Antwortkörper genutzt werden.

## Selbsttest

1. Was ist der Hauptunterschied zwischen einer API und einer ABI?
2. Warum eignet sich GraphQL besonders gut für mobile Anwendungen mit begrenzter Bandbreite?
3. Welche Rolle spielt das Protokoll HTTP/2 bei der Verwendung von gRPC?
4. Welche drei Sicherheitsmaßnahmen sind für öffentliche Web-APIs wesentlich?
5. In welchem Szenario ist SOAP gegenüber REST vorzuziehen?
