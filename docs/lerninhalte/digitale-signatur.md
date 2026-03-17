---
title: "Digitale Signatur"
description: "Die digitale Signatur ist ein kryptografisches Verfahren zur Sicherstellung der Authentizität und Integrität digitaler Daten und bildet die technische Basis für rechtsverbindliche elektronische Signaturen."
sources:
    - title: "eIDAS-Verordnung über elektronische Identifizierung und Vertrauensdienste"
      url: "https://www.bsi.bund.de/DE/Themen/Oeffentliche-Verwaltung/eIDAS-Verordnung/eidas-verordnung_node.html"
    - title: "Digitale Signatur - Funktionsweise und Algorithmen"
      url: "https://www.elektronik-kompendium.de/sites/net/1910131.htm"
    - title: "Elektronische Signatur Arten nach der eIDAS-Verordnung"
      url: "https://www.d-velop.de/blog/compliance/elektronische-signatur-arten/"
---

Die **digitale Signatur** ist ein mathematisches Verfahren, das die Authentizität und Integrität digitaler Dokumente sicherstellt. Sie ermöglicht es, eine Nachricht zweifelsfrei einem Absender zuzuordnen (Authentizität) und Veränderungen am Inhalt nach der Unterzeichnung erkennbar zu machen (Integrität). Technisch basiert dieses Verfahren auf asymmetrischen [Verschlüsselungsmethoden](verschluesselungsart) und [Hash-Funktionen](hashing).

## Lernziele

- Unterscheidung zwischen digitaler und elektronischer Signatur
- Beschreibung der technischen Teilschritte (Hashing und Verschlüsselung)
- Abgrenzung der drei Sicherheitsniveaus der eIDAS-Verordnung
- Einordnung der Rolle von Zertifizierungsstellen im Vertrauensmodell

## Technische Funktionsweise

Die Erstellung und Prüfung einer digitalen Signatur folgt einem festen Ablauf unter Verwendung eines asymmetrischen Schlüsselpaars (Public Key und Private Key).

### Signaturerstellung (Absender)

1.  **Hashwert-Erzeugung**: Aus dem Dokument wird mittels einer [Hash-Funktion](hashing) ein eindeutiger Prüfwert (Fingerabdruck) fester Länge berechnet.
2.  **Verschlüsselung des Hashwerts**: Das System verschlüsselt diesen Hashwert mit dem privaten Schlüssel (_Private Key_) des Absenders. Das Ergebnis ist die digitale Signatur.
3.  **Versand**: Das Dokument wird zusammen mit der digitalen Signatur an den Empfänger übermittelt.

### Signaturprüfung (Empfänger)

Der Empfänger nutzt den öffentlichen Schlüssel (_Public Key_) des Absenders zur Validierung:

1.  **Entschlüsselung**: Die Signatur wird mit dem öffentlichen Schlüssel des Absenders entschlüsselt, um den ursprünglichen Hashwert wiederherzustellen.
2.  **Eigener Hashwert**: Der Empfänger berechnet aus dem erhaltenen Dokument mit derselben Hash-Funktion einen neuen Hashwert.
3.  **Vergleich**: Das System vergleicht beide Hashwerte.

$$ \text{Hash}_{\text{neu}} = \text{Hash}_{\text{entschlüsselt}} $$

Stimmen beide Werte überein, ist die Signatur gültig. Dies beweist, dass das Dokument vom Inhaber des privaten Schlüssels stammt und seit der Signierung nicht verändert wurde.

## Rechtliche Einordnung (eIDAS)

In der Europäischen Union regelt die eIDAS-Verordnung die Anerkennung elektronischer Signaturen. Es existieren drei Stufen:

| Signaturniveau                                    | Anforderungen                                                                                                                                        | Rechtswirkung                                                                     |
| :------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **Einfache elektronische Signatur (EES)**         | Keine spezifischen Formvorgaben (z. B. eingescannte Unterschrift, E-Mail-Signatur).                                                                  | Geringe Beweiskraft; nicht ausreichend für Verträge mit gesetzlicher Schriftform. |
| **Fortgeschrittene elektronische Signatur (FES)** | Eindeutige Zuordnung zum Unterzeichner; Schutz vor nachträglicher Veränderung; Erstellung mit Mitteln unter alleiniger Kontrolle des Unterzeichners. | Hohe Beweiskraft; geeignet für viele geschäftliche Dokumente (z. B. Angebote).    |
| **Qualifizierte elektronische Signatur (QES)**    | Basiert auf einem qualifizierten Zertifikat; Erstellung durch eine sichere Signaturerstellungseinheit (z. B. Signaturkarte).                         | **Rechtlich der handschriftlichen Unterschrift gleichgestellt** (§ 126a BGB).     |

## Rollen im Vertrauensmodell

Eine Public-Key-Infrastruktur (PKI) stellt sicher, dass ein öffentlicher Schlüssel tatsächlich einer bestimmten Person oder Organisation zugeordnet werden kann.

- **Zertifizierungsstelle (CA)**: Eine unabhängige Instanz, die Identitäten prüft und digitale Zertifikate ausstellt. Das Zertifikat verknüpft die Identität mit dem öffentlichen Schlüssel.
- **Trust Center**: Betreiber der technischen Infrastruktur zur Verwaltung von Zertifikaten.
- **Widerrufslisten (CRL)**: Verzeichnisse ungültiger oder kompromittierter Zertifikate, um deren weitere Nutzung zu verhindern.

## Beispiele und Anwendungen

Digitale Signaturen sichern verschiedene digitale Prozesse ab:

- **Sicheres Surfen**: Bei [HTTPS](https)-Verbindungen belegen Zertifikate die Authentizität einer Webseite.
- **E-Mail-Verschlüsselung**: Standards wie S/MIME nutzen Signaturen zur Absicherung der Absenderidentität.
- **Software-Verteilung**: Entwickler signieren Programmcode (_Code Signing_), damit Betriebssysteme die Unversehrtheit der Software vor der Installation prüfen können.
- **Vertragswesen**: Rechtssicheres Unterzeichnen von Arbeitsverträgen oder behördlichen Anträgen mittels QES.

## Häufige Fehler und Tipps

- **Begriffsverwechslung**: Eine digitale Signatur verschlüsselt nicht das gesamte Dokument (Vertraulichkeit), sondern nur den Hashwert (Integrität und Authentizität).
- **Gültigkeitsprüfung**: Ein technisches Erfolgssignal (z. B. grünes Häkchen) bestätigt nur die mathematische Korrektheit. Die Vertrauenswürdigkeit der Zertifizierungsstelle und die aktuelle Gültigkeit des Zertifikats müssen zusätzlich beachtet werden.
- **Schutz des privaten Schlüssels**: Der Zugriff Dritter auf den privaten Schlüssel ermöglicht eine missbräuchliche Signatur im Namen des Besitzers. Der Schutz durch Passwörter oder Hardware-Token ist daher essenziell.

## Selbsttest

1. Welcher Teil des Prozesses sichert die Integrität der Daten?
2. Warum wird für die Signaturprüfung der öffentliche Schlüssel des Absenders benötigt?
3. Welche Signaturstufe ist gemäß BGB der handschriftlichen Unterschrift gleichgestellt?
4. Wie reagiert die Signaturprüfung auf die Änderung eines einzelnen Zeichens im Dokument?
5. Welche Aufgabe übernimmt eine Zertifizierungsstelle (CA)?
