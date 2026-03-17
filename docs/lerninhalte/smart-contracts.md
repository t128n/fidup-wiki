---
title: "Smart Contracts"
description: "Smart Contracts sind selbst-ausführende Programme auf der Blockchain, die Vertragsbedingungen in Code umsetzen und automatisch ausführen. Sie ermöglichen effiziente, transparente Transaktionen ohne Zwischenparteien und finden Anwendung in Finanzen, Supply Chain und Identitätsmanagement, bergen aber Risiken durch Programmierfehler."
sources:
  - title: "Einführung in Smart Contracts | ethereum.org"
    url: "https://ethereum.org/de/developers/docs/smart-contracts/"
  - title: "Was sind Ethereum Smart Contracts? | Krypto-online.de"
    url: "https://krypto-online.de/kryptowaehrungen/ethereum/ethereum-smart-contracts/"
---

**Smart Contracts** sind Computerprogramme, die auf einer [Blockchain](block-chain) gespeichert werden und als digitale Verträge fungieren. Sie formulieren Bedingungen in programmierbarer Logik und führen diese automatisch aus, sobald die Voraussetzungen erfüllt sind. Diese Technologie dient der Automatisierung von Vereinbarungen, ohne dass eine zentrale Instanz wie Banken oder Notare erforderlich ist, und findet in Bereichen wie dezentralen Finanzen und Tokenisierung Anwendung.

## Kurzüberblick

Smart Contracts sind Programme, die Vertragsbedingungen in Code übertragen und auf einer Blockchain wie [Ethereum](ethereum) ausgeführt werden. Sie ermöglichen die automatische Abwicklung von Transaktionen ohne menschliches Eingreifen, sobald definierte Kriterien erfüllt sind. Diese Technologie unterstützt die Entwicklung dezentraler Anwendungen und reduziert den Bedarf an Vermittlern, birgt jedoch Herausforderungen in Sicherheit und Rechtssicherheit.

## Definition

Ein Smart Contract ist ein Computerprogramm, das auf einer Blockchain gespeichert und automatisch ausgeführt wird, sobald festgelegte Bedingungen erfüllt sind. Im Gegensatz zu klassischen Verträgen, die juristische Texte verwenden und menschliche Durchsetzung erfordern, basieren Smart Contracts auf Programmcode mit Wenn-Dann-Logik. Nach der Bereitstellung sind sie unveränderlich und benötigen keine dritte Partei zur Ausführung, was sie von traditionellen Rechtsdokumenten unterscheidet.

## Technische Funktionsweise

Die Entwicklung von Smart Contracts erfolgt typischerweise mit der Programmiersprache Solidity, die speziell für Ethereum entwickelt wurde und syntaktisch an JavaScript und C++ anlehnt. Der Code wird kompiliert und auf der Ethereum Virtual Machine (EVM) ausgeführt, einer virtuellen Umgebung, die auf allen Netzwerkknoten identische Ergebnisse gewährleistet.

Der Deployment-Prozess umfasst folgende Schritte:

1. Schreiben des Codes in Solidity.
2. Kompilierung in Bytecode für die EVM.
3. Bereitstellung auf der Blockchain durch eine Transaktion, die eine Adresse für den Vertrag erzeugt.
4. Ausführung bei Interaktionen, wobei jede Operation Gas verbraucht – eine Maßeinheit für Rechenleistung, die in Ether bezahlt wird.

Komplexere Verträge erfordern mehr Gas und erhöhen die Kosten, wobei der Absender der Transaktion diese trägt.

## Arten und Merkmale

Smart Contracts können verschiedene Formen annehmen. Multisig-Verträge erfordern mehrere Signaturen für Ausführungen und steigern die Sicherheit für kritische Transaktionen. Die Komposition ermöglicht es Verträgen, andere Verträge aufzurufen, was modulare Strukturen schafft. Ein zentrales Merkmal ist die Unveränderlichkeit: Nach dem Deployment ist der Code nicht mehr änderbar, was Fehler irreversibel macht, aber auch Manipulationsresistenz gewährleistet.

## Anwendungsgebiete

Smart Contracts finden in diversen Bereichen Anwendung. In dezentralen Finanzen (DeFi) automatisieren sie Kredite, Börsen und Liquiditäts-Pools ohne Banken. Die Tokenisierung ermöglicht die Umwandlung von Vermögenswerten wie Immobilien oder Kunst in digitale Tokens für einfachere Transaktionen. Im Supply Chain Management dienen sie der Rückverfolgung von Waren und der Dokumentation von Lieferscheinen. Für Identitätsverwaltung bieten sie dezentrale Lösungen zur Authentifizierung ohne zentrale Behörden, was die [Dezentralität](dezentralisierung) stärkt.

## Vorteile

Smart Contracts bieten Automatisierung, die manuelle Prozesse reduziert und Effizienz steigert. Ihre Dezentralität eliminiert Abhängigkeiten von zentralen Instanzen und fördert Unabhängigkeit. Die Transparenz durch die Blockchain ermöglicht Nachvollziehbarkeit aller Transaktionen, und Kosteneinsparungen entstehen durch den Wegfall von Zwischenhändlern. Zudem sind Bedingungen klar definiert, was Eindeutigkeit schafft.

## Nachteile und Risiken

Programmierfehler können zu unerwarteten Ergebnissen führen, da der Code nach Bereitstellung unveränderlich ist. Sicherheitslücken wie Hintertüren gefährden die Integrität, und das Orakelproblem entsteht durch die Abhängigkeit von externen Datenquellen für Off-Chain-Informationen, die manipuliert werden könnten. Rechtliche Lücken bestehen, da viele Jurisdiktionen Smart Contracts nicht explizit anerkennen, was zu Uneinheitlichkeit führt. Hohe Gas-Kosten und Skalierbarkeitsprobleme belasten die Effizienz.

## Beispiel

Ein einfacher Smart Contract für einen automatischen Zahlungseinzug könnte folgendermaßen aussehen: Wenn ein Käufer 1 Ether an den Vertrag sendet, erhält er Zugang zu einem digitalen Produkt. Der Code prüft die Bedingung und führt die Übertragung aus, ohne weitere Eingriffe. Bei einem Preis von 0,5 Ether und einer Transaktion am 20. Dezember 2025 würde der Vertrag automatisch die Zahlung bestätigen und das Produkt freigeben.

## Häufige Fehler und Tipps

- Tests vor dem Deployment vernachlässigen: Sicherheitsaudits sind empfehlenswert, um Fehler frühzeitig zu erkennen.
- Unveränderlichkeit ignorieren: Besondere Sorgfalt bei der Entwicklung, da Korrekturen nachträglich kaum möglich sind.
- Externe Daten ohne Orakel einbinden: Manipulationsrisiken minimieren.
- Ineffizienten Code schreiben: Optimierung vor Deployment, um Gas-Kosten zu senken.
