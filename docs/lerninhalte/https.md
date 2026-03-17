---
title: "HTTPS"
description: "Sicherer Standard für die Übertragung von Daten im Internet, der HTTP mit TLS-Verschlüsselung kombiniert, um Vertraulichkeit, Integrität und Authentifizierung zu gewährleisten."
sources:
  - title: "Transport Layer Security (TLS) - MDN Web Docs"
    url: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security"
  - title: "HTTPS - Glossary | MDN Web Docs"
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS"
  - title: "Verschlüsselung und Zertifikate | BSI"
    url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Updates-Browser-Open-Source-Software/Der-Browser/Verschluesselung-und-Zertifikate/verschluesselung-und-zertifikate_node.html"
---

Der **HTTPS**-Begriff beschreibt eine sichere Variante des HTTP-Protokolls, die TLS zur [Verschlüsselung](hashing--und-verschluesselungsverfahren) der gesamten Kommunikation zwischen Client und Server einsetzt. Dies ermöglicht den sicheren Austausch sensibler Daten wie bei Online-Banking oder E-Commerce und schützt vor Abhören oder Manipulation.

## Lernziele

Nach diesem Artikel können folgende Kenntnisse angewendet werden:

- Die grundlegenden Funktionen von HTTPS und TLS erklären.
- Den Ablauf eines TLS-Handshakes beschreiben.
- Digitale Zertifikate und deren Rolle bei der Authentifizierung verstehen.
- Sicherheitsvorteile von HTTPS gegenüber HTTP benennen.
- Häufige Fehlkonfigurationen erkennen und vermeiden.

## Kurzübersicht

HTTPS erweitert das Protokoll HTTP um [Verschlüsselung](hashing--und-verschluesselungsverfahren) und Authentifizierung durch TLS. Während HTTP Daten unverschlüsselt überträgt, sichert HTTPS die Kommunikation ab, indem es Vertraulichkeit, Integrität und Server-Authentifizierung gewährleistet. HTTPS nutzt standardmäßig Port 443, im Gegensatz zu HTTP auf Port 80. Es ist der aktuelle Standard für sichere Webkommunikation und ersetzte veraltete Techniken wie SSL.

## Kontext und Einordnung

HTTPS findet Anwendung in allen Bereichen, in denen Daten sicher übertragen werden müssen, wie die Eingabe persönlicher Informationen, Zahlungsdaten oder sensibler Unternehmensdaten in Daten- und Prozessanalyse-Systemen. Ohne HTTPS wären Angriffe wie Man-in-the-Middle möglich, bei denen Dritte Daten abfangen oder verändern. Die Einführung von HTTPS begann mit SSL, das 1995 entwickelt wurde, und wurde durch TLS abgelöst, das seit 1999 standardisiert ist. Aktuell dominiert TLS 1.3, das Sicherheitslücken schließt und die Leistung verbessert.

## Begriffe und Definitionen

- **HTTPS (HyperText Transfer Protocol Secure)**: Eine verschlüsselte Version von HTTP, die TLS zur Sicherung der Datenübertragung nutzt.
- **TLS (Transport Layer Security)**: Das Protokoll, das die [Verschlüsselung](hashing--und-verschluesselungsverfahren), Authentifizierung und Integrität der Verbindung sicherstellt; Nachfolger von SSL.
- **TLS-Handshake**: Der anfängliche Austausch zwischen Client und Server, um Sicherheitsparameter wie Cipher Suites und Schlüssel auszuhandeln.
- **Digitale Zertifikate**: Elektronische Ausweise, die die Identität eines Servers bestätigen und von Zertifizierungsstellen (CAs) ausgestellt werden.
- **Cipher Suites**: Kombinationen kryptografischer Algorithmen für Schlüsselaustausch, Authentifizierung und [Verschlüsselung](hashing--und-verschluesselungsverfahren).

## Vorgehen

Die Etablierung einer HTTPS-Verbindung erfolgt in mehreren Schritten:

1. **Initiierung**: Der Client sendet eine Anfrage an den Server auf Port 443.
2. **Handshake**: Client und Server einigen sich auf TLS-Version und Cipher Suites und tauschen Schlüssel aus. Der Server präsentiert sein Zertifikat zur Authentifizierung.
3. **Schlüsselaustausch**: Mittels asymmetrischer [Verschlüsselung](hashing--und-verschluesselungsverfahren) wird ein gemeinsamer symmetrischer Schlüssel generiert.
4. **Verschlüsselte Übertragung**: Alle weiteren Daten werden symmetrisch verschlüsselt übertragen.
5. **Verbindung beenden**: Nach der Übertragung wird die Verbindung sicher geschlossen.

## Beispiele

In einem einfachen Szenario ruft ein Browser eine Bankwebsite auf: Die URL beginnt mit "https://", der Browser führt einen TLS-Handshake durch, prüft das Zertifikat und verschlüsselt die Eingabe der Anmeldedaten. Ohne HTTPS könnten Angreifer die Daten abfangen.

Ein weiteres Beispiel: Bei der Übertragung von Analyseberichten in einem Unternehmensnetzwerk stellt HTTPS sicher, dass die Daten nicht manipuliert werden, indem Integritätsprüfungen durchgeführt werden.

## Häufige Fehler und Tipps

- **Fehler**: Verwendung veralteter TLS-Versionen wie 1.0 oder 1.1, die Sicherheitslücken aufweisen.
  Tipp: Server und Browser sollten TLS 1.2 oder 1.3 unterstützen.

- **Fehler**: Ignorieren von Zertifikatswarnungen im Browser.
  Tipp: Bei ungültigen Zertifikaten sollte die Website nicht aufgerufen werden, da dies auf Angriffe oder Fehler hindeuten kann.

- **Fehler**: Annahme, dass HTTPS vor Phishing schützt.
  Tipp: Phishing-Seiten können ebenfalls HTTPS nutzen; stets die Domain und das Zertifikat prüfen.

- **Tipp**: Automatische Weiterleitungen von HTTP zu HTTPS sollten in Server-Konfigurationen aktiviert werden.

## Selbsttest

- Was ist der Hauptunterschied zwischen HTTP und HTTPS?
- Beschreibe kurz den TLS-Handshake.
- Warum sind digitale Zertifikate wichtig für HTTPS?
- Welche TLS-Versionen sind aktuell empfohlen?
- Wie erkennt man im Browser eine sichere HTTPS-Verbindung?
