---
title: "Mailserver"
description: "Ein Mailserver ist ein zentrales System für den Versand, Empfang und die Speicherung von E-Mails im Internet. Dieser Artikel erklärt die Grundlagen, Protokolle, Komponenten und Sicherheitsmechanismen, die in der Daten- und Prozessanalyse relevant sind."
sources:
  - title: "Technischer Hintergrund E-Mail-Sicherheit"
    url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Onlinekommunikation/E-Mail-Sicherheit/technischer-Hintergrund-E-Mail-Sicherheit/technischer-Hintergrund-E-Mail-Sicherheit_node.html"
  - title: "Simple Mail Transfer Protocol (SMTP)"
    url: "https://datatracker.ietf.org/doc/html/rfc5321"
  - title: "E-Mail-Authentifizierung - Microsoft Defender for Office 365"
    url: "https://learn.microsoft.com/de-de/defender-office-365/email-authentication-about"
---

Der **Mailserver** ist ein System, das elektronische Nachrichten über das Internet sendet, empfängt und speichert. Er bildet die Grundlage für die Kommunikation mittels E-Mails und nutzt spezifische Protokolle sowie Sicherheitsmechanismen zur Gewährleistung von Funktionalität und Schutz.

## Lernziele
Nach der Lektüre dieses Artikels sind folgende Kenntnisse vermittelbar:

- Kenntnisse zu den Funktionen eines Mailservers.
- Verständnis für die wichtigsten Protokolle des E-Mail-Verkehrs.
- Einsicht in die Rollen der Komponenten eines Mailservers.
- Fähigkeit, grundlegende Sicherheitsmechanismen zu erklären und ihre Bedeutung einzuschätzen.

## Kurzüberblick
Mailserver sind zentrale Systeme, die den Austausch von E-Mails ermöglichen. Sie übernehmen Aufgaben wie den Transport zwischen Servern, die Zustellung an Empfänger und die Speicherung von Nachrichten. Typischerweise bestehen sie aus Software wie Postfix oder Microsoft Exchange und integrieren sich in Netzwerkinfrastrukturen.

## Kontext und Einordnung
In der Daten- und Prozessanalyse spielen Mailserver eine Rolle bei der Kommunikation in Unternehmen und der Verarbeitung von Nachrichten als Datenströme. Sie unterstützen Prozesse wie automatische Benachrichtigungen oder die Integration in Workflows, wobei Sicherheitsaspekte wie Authentifizierung und Verschlüsselung besonders relevant sind. Für eine umfassende Betrachtung siehe auch [Datensicherheit](datensicherheit).

## Begriffe und Definitionen
### Protokolle

- **SMTP**: Das Standardprotokoll für den Versand von E-Mails zwischen Servern. Es regelt den Transport von Nachrichten über das Internet und leitet diese bei Bedarf weiter.
- **POP3**: Ein Protokoll zum Abrufen von E-Mails vom Server. E-Mails werden auf das lokale Gerät heruntergeladen und typischerweise vom Server entfernt.
- **IMAP**: Ermöglicht den Zugriff auf E-Mails auf dem Server ohne vollständiges Herunterladen. Es unterstützt die Synchronisation über mehrere Geräte und behält Nachrichten auf dem Server.

### Komponenten

- **Mail Transfer Agent (MTA)**: Verantwortlich für den Versand und Empfang von E-Mails, oft unter Verwendung von SMTP. Beispiele sind Postfix oder Sendmail.
- **Mail Delivery Agent (MDA)**: Stellt E-Mails in die Postfächer der Empfänger zu und setzt Berechtigungen.
- **Mail User Agent (MUA)**: Der E-Mail-Client, mit dem Benutzer Nachrichten verfassen und lesen, wie Outlook oder Thunderbird.

### Sicherheitsmechanismen

- **TLS/SSL**: Verschlüsselt Verbindungen während der Übertragung, um Vertraulichkeit und Integrität zu schützen. Opportunistische Verschlüsselung wird häufig verwendet.
- **SPF**: Überprüft, ob E-Mails von autorisierten Servern einer Domain stammen, basierend auf [DNS](dns)-Einträgen.
- **DKIM**: Fügt digitale Signaturen zu E-Mails hinzu, die mit einem privaten Schlüssel erstellt und öffentlich verifiziert werden.
- **DMARC**: Kombiniert SPF und DKIM, legt Maßnahmen bei fehlgeschlagenen Prüfungen fest und ermöglicht Reporting.

## Beispiele
Ein typischer E-Mail-Versand verläuft wie folgt: Der Absender verfasst eine Nachricht in einem MUA, das diese via SMTP an den MTA des Absenders überträgt. Der MTA leitet die Nachricht über das Internet an den MTA des Empfängers weiter, wo ein MDA sie in das Postfach zustellt. Der Empfänger ruft die Nachricht via IMAP ab, um sie auf mehreren Geräten synchron zu halten, ohne sie zu entfernen.

## Häufige Fehler und Tipps

- Verwechslung zwischen der technischen Absenderadresse (MAIL FROM) und der angezeigten "Von"-Adresse kann zu Authentifizierungsfehlern führen. DMARC kann verwendet werden, um dies zu mindern.
- Nicht alle Verbindungen nutzen TLS; opportunistische Verschlüsselung bietet besseren Schutz als keine Verschlüsselung.
- Bei der Weiterleitung von E-Mails können SPF-Fehlschläge auftreten; autorisierte Server sollten entsprechend konfiguriert werden.

## Selbsttest

1. Was ist die Hauptfunktion von SMTP?
2. Wie unterscheidet sich IMAP von POP3?
3. Welche Rolle spielt der MDA?
4. Was schützt TLS/SSL bei E-Mails?
5. Wie funktioniert SPF grundsätzlich?
