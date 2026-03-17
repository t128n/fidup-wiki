---
title: "Hashing"
description: "Hashing ist ein kryptografisches Verfahren zur Erzeugung kompakter digitaler Fingerabdrücke, das für die Sicherung der Datenintegrität und die effiziente Suche in großen Datenmengen unverzichtbar ist."
sources:
    - title: "Hashfunktion - Lexikon der Mathematik"
      url: "https://www.spektrum.de/lexikon/mathematik/hashfunktion/3798"
    - title: "Kryptografische Hashfunktionen (MDN)"
      url: "https://developer.mozilla.org/de/docs/Glossary/Hash_function"
    - title: "BSI TR-02102: Kryptographische Verfahren (Übersicht)"
      url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr02102/tr02102_node.html"
---

Das **Hashing** bezeichnet ein kryptografisches Verfahren, bei dem Daten beliebiger Länge mithilfe einer mathematischen Funktion in einen kompakten Wert fester Länge transformiert werden. Dieser resultierende Hashwert, oft auch als „digitaler Fingerabdruck“ oder _Message Digest_ bezeichnet, dient zur eindeutigen Identifikation von Dateninhalten, ohne die ursprünglichen Daten preiszugeben. Da Hashing-Verfahren eine Einweg-Transformation darstellen, lassen sie sich im Gegensatz zur klassischen [Verschlüsselung](verschluesselungsart) nicht umkehren. Sie finden breite Anwendung in der Sicherstellung der Datenintegrität, der Authentifizierung sowie in der effizienten Verwaltung von Datenstrukturen innerhalb der [Datenbankarchitektur](datenbankarchitektur).

## Lernziele

Der Artikel vermittelt Kenntnisse über:

- Die grundlegende Funktionsweise und das Einweg-Prinzip von Hashfunktionen.
- Zentrale Eigenschaften wie Determinismus, Lawineneffekt und Kollisionsresistenz.
- Die Abgrenzung zwischen Hashing und Verschlüsselung.
- Die Auswahl geeigneter Algorithmen für moderne Sicherheitsanwendungen.
- Die Bewertung von Anwendungsfällen wie Passwortspeicherung und Integritätsprüfung.

## Kurzüberblick

Hashing transformiert eine Eingabe über eine Funktion in einen Hashwert:
$$ H(x) = y $$
Der Fokus liegt dabei nicht auf der Geheimhaltung der Nachricht (Vertraulichkeit), sondern auf deren Unveränderlichkeit (Integrität). Eine effiziente Hashfunktion zeichnet sich dadurch aus, dass sie schnell berechenbar ist und selbst bei minimalen Änderungen der Eingabedaten einen völlig unterschiedlichen Ausgabewert liefert.

## Funktionsweise und mathematische Eigenschaften

Eine kryptografische Hashfunktion muss spezifische Anforderungen erfüllen, um für Sicherheitsanwendungen geeignet zu sein:

### Determinismus

Ein identischer Eingabewert führt unter denselben Bedingungen stets zum exakt gleichen Hashwert. Diese Vorhersehbarkeit ist die Basis für den Vergleich von Daten, etwa beim Abgleich von Passwörtern oder Prüfsummen.

### Einweg-Prinzip (Pre-image Resistance)

Die Berechnung des Hashwerts aus den Eingabedaten erfolgt effizient, während die Umkehrung praktisch ausgeschlossen ist. Aus dem resultierenden Hashwert lassen sich die ursprünglichen Daten nicht mathematisch rekonstruieren.
$$ y = H(x) \implies x \text{ ist nicht aus } y \text{ ableitbar} $$

### Lawineneffekt (Avalanche Effect)

Schon die Änderung eines einzelnen Bits in der Eingabe führt zu einem massiv veränderten Hashwert. Dieser Effekt stellt sicher, dass keine Rückschlüsse von der Ähnlichkeit zweier Hashwerte auf die Ähnlichkeit der zugrunde liegenden Daten möglich sind.

### Kollisionsresistenz

Es gilt als technisch unmöglich, zwei unterschiedliche Eingaben zu finden, die denselben Hashwert erzeugen:
$$ H(x_1) = H(x_2) \quad \text{mit} \quad x_1 \neq x_2 $$
Tritt dieser Fall dennoch ein, spricht man von einer Kollision. Moderne Algorithmen sind darauf ausgelegt, die Wahrscheinlichkeit einer Kollision so gering zu halten, dass sie in der Praxis vernachlässigbar ist.

## Hashing vs. Verschlüsselung

Obwohl beide Verfahren zur Kryptografie gehören, verfolgen sie unterschiedliche Ziele. In der Gegenüberstellung von [Hashing und Verschlüsselungsverfahren](hashing--und-verschluesselungsverfahren) wird dies deutlich:

- **Verschlüsselung** ist bidirektional: Daten werden mit einem Schlüssel unkenntlich gemacht und können mit dem passenden Schlüssel wiederhergestellt werden. Primäres Ziel ist die Vertraulichkeit.
- **Hashing** ist unidirektional: Daten werden in eine Prüfsumme verwandelt, die nicht wieder entschlüsselt werden kann. Primäre Ziele sind Integrität und Identifikation.

## Sicherheit und Algorithmen

Die Sicherheit eines Hashverfahrens hängt maßgeblich von der Stärke des verwendeten Algorithmus ab.

### Empfohlene Verfahren

- **SHA-256 / SHA-512**: Diese gehören zur SHA-2-Familie und gelten als Industriestandard für Sicherheitsanwendungen.
- **SHA-3**: Ein moderner Nachfolger mit einer anderen mathematischen Struktur, der zusätzliche Sicherheit bietet.

### Veraltete Verfahren

Verfahren wie **MD5** oder **SHA-1** gelten als unsicher, da Kollisionen gezielt erzeugt werden können. Ein Einsatz für sicherheitsrelevante Aufgaben wie digitale Signaturen ist daher zu vermeiden.

## Praxisanwendungen

### Datenintegrität und Prüfsummen

Beim Download großer Dateien werden häufig Hashwerte bereitgestellt. Nach dem Herunterladen kann die Datei lokal gehasht und das Ergebnis mit dem bereitgestellten Wert verglichen werden. Bei Übereinstimmung ist sichergestellt, dass die Datei während der Übertragung nicht verändert wurde.

### Passwortsicherheit (Salt & Pepper)

In professionellen Systemen werden Passwörter nicht im Klartext gespeichert. Stattdessen wird der Hashwert des Passworts in der Datenbank hinterlegt. Um Angriffe durch vorberechnete Tabellen (_Rainbow Tables_) zu verhindern, wird dem Passwort vor dem Hashen ein zufälliger Wert, der sogenannte **Salt**, hinzugefügt. Ein zusätzlicher, systemweiter Wert (**Pepper**) erhöht die Sicherheit weiter.

### Effiziente Datenstrukturen

In der Informatik werden Hashwerte genutzt, um Daten in sogenannten Hash-Tabellen zu organisieren. Dies ermöglicht das schnelle Auffinden von Datensätzen in großen Mengen, da die Position des Datensatzes direkt aus seinem Hashwert berechnet wird.

## Stolperfallen und häufige Fehler

- **Verwechslung mit Kompression**: Hashing reduziert die Daten zwar auf eine feste Länge, aber im Gegensatz zur Kompression können die Originaldaten nicht wiederhergestellt werden.
- **Similarity Search**: Standard-Hashfunktionen sind nicht für die Suche nach ähnlichen Inhalten geeignet. Wenn sich zwei Dokumente nur geringfügig unterscheiden, weichen ihre Hashes durch den Lawineneffekt vollkommen voneinander ab. Für die Ähnlichkeitssuche sind spezialisierte Verfahren wie _Locality Sensitive Hashing_ (LSH) erforderlich.
- **Fehlender Salt**: Das Speichern von reinen Hashes für Passwörter stellt ein hohes Sicherheitsrisiko dar, da diese mithilfe von Standard-Wörterbüchern leicht aufgedeckt werden können.

## Selbsttest

1. Warum lässt sich ein Hashwert nicht „entschlüsseln“?
2. Was wird unter dem Lawineneffekt verstanden und warum ist er für die Sicherheit wichtig?
3. In welchem Szenario ist die Kollisionsresistenz eines Algorithmus besonders kritisch?
4. Warum ist die SHA-2-Familie gegenüber MD5 zu bevorzugen?
5. Welchen Zweck erfüllt ein „Salt“ bei der Passwortspeicherung?
