---
title: "Datenaustauschformate"
description: "Standardisierte Formate zur strukturierten Datenübertragung zwischen IT-Systemen. Erklärt CSV, XML und JSON sowie technische Grundlagen wie UTF-8 und Validierung."
sources:
  - title: "Dateiformate zum Datenaustausch - AP2 Lernplattform"
    url: "https://ap2.online/entwicklung/dateiformate"
  - title: "XML vs. JSON: Ein umfassender Vergleich"
    url: "https://contabo.com/blog/de/xml-vs-json/"
---

**Datenaustauschformate** sind standardisierte Strukturen zur Darstellung von Informationen, die eine verlustfreie Übermittlung zwischen unterschiedlichen IT-Systemen ermöglichen. Sie stellen sicher, dass Sender und Empfänger Daten unabhängig von ihrer internen Architektur korrekt interpretieren können. Die Wahl des Formats hängt von der Komplexität der Daten, den Performance-Anforderungen und dem Einsatzgebiet ab, beispielsweise bei [API-Schnittstellen](api-schnittstellen) oder dem Export von Datenbankinhalten.

## Lernziele
Nach diesem Artikel können Auszubildende:

* die Unterschiede zwischen flachen und hierarchischen Datenstrukturen erläutern.
* die Einsatzgebiete von CSV, XML und JSON voneinander abgrenzen.
* den Unterschied zwischen Wohlgeformtheit und Validität bei XML erklären.
* die Bedeutung von UTF-8 für die internationale Kompatibilität einordnen.
* grundlegende Validierungsmethoden für die [Datenqualität](datenqualitaet) benennen.

## Kontext und Einordnung
Wenn Systeme Informationen austauschen (z. B. ein Onlineshop mit einem Warenwirtschaftssystem), ist eine gemeinsame Struktur erforderlich. Da Anwendungen oft unterschiedliche interne Datenmodelle nutzen, müssen Daten für den Versand serialisiert (in ein Standardformat umgewandelt) und beim Empfänger deserialisiert (wieder in das interne Modell eingelesen) werden.

## CSV (Tabellarische Daten)
Das Format *Comma-Separated Values* (CSV) wird primär für einfache, tabellarische Datenstrukturen verwendet.

### Merkmale und Struktur
Die Daten werden zeilenweise gespeichert. Die einzelnen Werte eines Datensatzes sind durch ein Trennzeichen separiert. Im deutschsprachigen Raum wird häufig das Semikolon (`;`) anstelle des Kommas genutzt, um Konflikte mit dem Dezimalkomma zu vermeiden.

### Vor- und Nachteile

* **Vorteile:** Geringer Speicherbedarf (Overhead) und einfache Verarbeitung durch Tabellenkalkulationen.
* **Nachteile:** Keine Unterstützung für hierarchische oder tief verschachtelte Strukturen. Sonderzeichen oder Zeilenumbrüche innerhalb der Felder können die Struktur zerstören.

### Beispiel
```csv
ID,Produkt,Preis,Lagerbestand
1,"Datenspeicher 1TB",59.90,120
2,"Monitor 27\"",249.00,45
```

## XML (Hierarchische Strukturen)
Die *Extensible Markup Language* (XML) ist ein erweiterbares Format, das Daten hierarchisch mittels Tags strukturiert.

### Wohlgeformtheit vs. Validität
Ein XML-Dokument muss technische Mindeststandards erfüllen:

1.  **Wohlgeformtheit:** Das Dokument hält sich an die allgemeine XML-Syntax (z. B. jedes Start-Tag hat ein End-Tag, korrekte Schachtelung).
2.  **Validität:** Das Dokument entspricht zusätzlich einem spezifischen Regelwerk (z. B. XSD - XML Schema Definition), das die erlaubten Elemente und Datentypen festlegt.

### Vor- und Nachteile

* **Vorteile:** Hohe Flexibilität und Selbstbeschreibung; ideal für komplexe Unternehmensdaten.
* **Nachteile:** Großer Overhead durch wiederkehrende Tags; das Auslesen (Parsing) ist rechenintensiv.

### Beispiel
```xml
<Lagerbestand>
    <Artikel id="1">
        <Name>Datenspeicher 1TB</Name>
        <Preis waehrung="EUR">59.90</Preis>
    </Artikel>
</Lagerbestand>
```

## JSON (Web-Standard)
Die *JavaScript Object Notation* (JSON) ist das dominierende Format für moderne Web-Anwendungen und mobile Apps.

### Syntax-Regeln
JSON verwendet eine kompakte Schlüssel-Wert-Struktur. Schlüssel (Keys) müssen zwingend in doppelten Anführungszeichen stehen. Die Validierung erfolgt meist über *JSON Schema*.

### Vor- und Nachteile

* **Vorteile:** Deutlich leichtgewichtiger als XML und nativ in fast allen modernen Programmiersprachen integriert.
* **Nachteile:** Weniger geeignet für textlastige Dokumente mit komplexen Metadaten.

### Beispiel
```json
{
  "artikel": [
    {
      "id": 1,
      "name": "Datenspeicher 1TB",
      "preis": 59.90
    }
  ]
}
```

## Technischer Hintergrund
Für einen stabilen Datenaustausch sind technische Rahmenbedingungen entscheidend.

### Zeichenkodierung (UTF-8)
**UTF-8** ist der globale Standard für die Zeichenkodierung. Er stellt sicher, dass Umlaute und Sonderzeichen systemübergreifend korrekt dargestellt werden. Ohne einheitliche Kodierung entstehen beim Empfänger Darstellungsfehler (Encoding-Fehler).

### Validierung und Qualitätssicherung
Fehlerhafte Datenstrukturen können automatisierte Prozesse unterbrechen. Daher werden Austauschdateien vor der Verarbeitung gegen ein Schema geprüft. Dies stellt sicher, dass beispielsweise in einem Feld für den „Preis“ nur numerische Werte stehen.

## Vergleichsmatrix

| Merkmal | CSV | XML | JSON |
| :--- | :--- | :--- | :--- |
| **Struktur** | Flach (Tabelle) | Hierarchisch | Hierarchisch |
| **Lesbarkeit** | Gut (bei wenigen Spalten) | Gut (selbstbeschreibend) | Sehr gut (kompakt) |
| **Overhead** | Minimal | Hoch | Mittel |
| **Einsatzgebiet** | Datenexport / Import | Enterprise-Systeme | Web-APIs / Mobile |
| **Validierung** | Eingeschränkt | Sehr stark (XSD) | Gut (JSON Schema) |

## Häufige Fehler und Tipps

* **Trennzeichen-Konflikt:** Kommata innerhalb von Textfeldern in CSV-Dateien können die Spaltentrennung verfälschen. **Tipp:** Textfelder konsequent in Anführungszeichen setzen.
* **Ungültige JSON-Syntax:** Das Weglassen von Anführungszeichen bei Schlüsseln (z. B. `id: 1`) führt zu Fehlern.
* **Encoding-Konflikte:** Dokumente werden in ANSI gespeichert, aber als UTF-8 interpretiert. **Tipp:** Alle beteiligten Systeme fest auf UTF-8 konfigurieren.

## Selbsttest

1. Welches Format eignet sich am besten für den einfachen Export einer Datenbanktabelle?
2. Worin besteht der Unterschied zwischen einem wohlgeformten und einem validen XML-Dokument?
3. Warum bevorzugen Web-Entwickler JSON gegenüber XML?
4. Welche Rolle spielt UTF-8 beim Datenaustausch zwischen verschiedenen Betriebssystemen?
5. Warum müssen Schlüssel in JSON in Anführungszeichen stehen?
