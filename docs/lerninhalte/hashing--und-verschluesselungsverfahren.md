---
title: "Hashing-Verfahren"
description: "Hashing-Verfahren schützen Datenintegrität durch Umwandlung von Daten in feste Hashwerte. Sie helfen Auszubildenden, sichere Methoden für digitale Signaturen und Integritätsprüfungen zu verstehen und anzuwenden."
sources:
  - title: "NIST Policy on Hash Functions"
    url: "https://csrc.nist.gov/Projects/Hash-Functions/NIST-Policy-on-Hash-Functions"
  - title: "NIST Retires SHA-1 Cryptographic Algorithm"
    url: "https://www.nist.gov/news-events/news/2022/12/nist-retires-sha-1-cryptographic-algorithm"
  - title: "RFC 9155: Deprecating MD5 and SHA-1 in TLS 1.2"
    url: "https://www.rfc-editor.org/rfc/rfc9155.html"
---

**Hashing-Verfahren** sind Methoden zur Sicherung von Datenintegrität. Sie wandeln Daten beliebiger Größe in feste Werte um, um deren Unveränderlichkeit zu prüfen, ohne dass der Originalinhalt wiederhergestellt werden kann.

## Kurzüberblick

Hashing dient der Integritätsprüfung von Daten. Eine Hashfunktion erzeugt aus Eingabedaten einen eindeutigen, festen Wert, der sich bei geringsten Änderungen der Eingabe ändert. Dies ermöglicht die Erkennung von Manipulationen. Hashing findet Anwendung in der [Datensicherheit](datensicherheit), [Compliance](compliance) und bei [digitalen Signaturen](digitale-signatur) in der Daten- und Prozessanalyse.

## Begriffe und Definitionen

- **Hashfunktion**: Eine einwegige Funktion, die Eingabedaten beliebiger Größe in einen festen Hashwert umwandelt. Sie ist kollisionsresistent, sodass es unwahrscheinlich ist, dass zwei verschiedene Eingaben denselben Hash erzeugen.
- **Kollision**: Ein Fall, in dem zwei unterschiedliche Eingaben denselben Hashwert erzeugen, was bei unsicheren Algorithmen möglich ist.
- **Integrität**: Gewährleistung, dass Daten nicht verändert wurden, z. B. durch Hashing.

## Vorgehen

### Auswahl von Hashing-Verfahren

Für Integritätsprüfungen oder digitale Signaturen sind kollisionsresistente Algorithmen erforderlich. Veraltete Verfahren wie MD5 gelten als deprecated in TLS und sind nur für nicht-sicherheitskritische Prüfsummen geeignet. SHA-1 gilt seit 2022 als zurückgezogen und muss bis zum 31. Dezember 2030 durch SHA-256 oder SHA-3 ersetzt werden. SHA-256 aus der SHA-2-Familie ist das Minimum für sichere Anwendungen. SHA-3 bietet Zukunftssicherheit mit variablen Längen.

## Beispiele

### Integritätsprüfung

Angenommen, eine Datei enthält den Text "Hallo Welt". Der SHA-256-Hash könnte "2d2da19605a34e037dbe82173f98a992a530a5fdd53dad882f570d4ba204ef30" sein. Wenn der Text zu "Hallo welt" geändert wird (kleine Änderung), ändert sich der Hash komplett, z. B. zu "a1401e39ea9735fdcebc52013babcc1143ff56664e025cae31b4323382e16e57". Dies zeigt den Avalanche-Effekt: Geringe Änderungen führen zu völlig unterschiedlichen Hashwerten, was Manipulationen erkennbar macht.

## Häufige Fehler und Tipps

- Verwendung von SHA-1 oder MD5 für neue Anwendungen. Die Verwendung von SHA-256 wird empfohlen, da es von NIST als Minimum empfohlen wird.
- Regelmäßige Prüfung von Sicherheitsempfehlungen von NIST, da Algorithmen wie SHA-1 bis 2030 phasenweise abgeschafft werden.

## Weiterführendes

Die Lektüre von NIST-Richtlinien bietet tiefergehende Kenntnisse zu [Datenschutz](datenschutz) und Implementierungen in der Datenanalyse.

## Einzelnachweise

- NIST Policy on Hash Functions: Empfehlungen zu SHA-1-Transition und SHA-2/SHA-3.
- NIST Retires SHA-1: Rückzugsdatum und Timeline für SHA-1.
- RFC 9155: Deprecation von MD5 in TLS.