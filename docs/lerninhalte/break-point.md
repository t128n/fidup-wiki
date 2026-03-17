---
title: "Breakpoint"
description: "Ein Breakpoint (Haltepunkt) ist ein gezielter Stoppunkt im Programmcode, der zur Analyse des Systemzustands während des Debugging-Prozesses dient."
sources:
    - title: "Verwenden des richtigen Haltepunkttyps - Visual Studio"
      url: "https://learn.microsoft.com/de-de/visualstudio/debugger/using-breakpoints?view=visualstudio"
    - title: "Breakpoints | IntelliJ IDEA Documentation"
      url: "https://www.jetbrains.com/help/idea/using-breakpoints.html"
---

Ein **Breakpoint** (auch Haltepunkt) ist eine gezielte Unterbrechung der Programmausführung durch einen Debugger. Diese Pause ermöglicht es, den aktuellen Systemzustand – wie Variableninhalte, die Speicherbelegung oder den Aufrufstapel (_Call Stack_) – zu einem exakten Zeitpunkt zu analysieren. Der Einsatz von Breakpoints ist ein zentraler Bestandteil der [Fehlerdiagnose](debugging), da er Einblicke in interne Abläufe gewährt, die während der regulären Laufzeit verborgen bleiben.

## Lernziele

Die folgenden Kernaspekte werden in diesem Artikel behandelt:

- Funktionsweise und Zweck von Breakpoints im Entwicklungsprozess.
- Unterscheidung verschiedener Breakpoint-Typen und deren Einsatzgebiete.
- Abgrenzung zwischen harten Stopps und der [Ablaufverfolgung](ablaufverfolgung) (Tracepoints).
- Best Practices für eine effiziente Fehlersuche.

## Typen von Breakpoints

Moderne Entwicklungsumgebungen (IDEs) bieten spezialisierte Breakpoint-Typen, um Fehlerursachen präzise zu isolieren.

### Zeilen-Breakpoints (Line Breakpoints)

Dies ist die einfachste Form eines Haltepunkts. Der Debugger stoppt die Ausführung unmittelbar vor dem Erreichen einer markierten Codezeile. Dieser Typ eignet sich für eine grundlegende Untersuchung des Programmflusses.

### Bedingte Breakpoints (Conditional Breakpoints)

Die Unterbrechung erfolgt nur, wenn eine zuvor definierte logische Bedingung erfüllt ist. Dies ist besonders bei Schleifen oder häufig aufgerufenen Funktionen hilfreich, wenn ein Fehler nur unter bestimmten Parametern auftritt.

- **Beispiel:** Ein Stopp erfolgt nur, wenn `user_id == 0` gilt.

### Daten-Breakpoints (Watchpoints)

Ein Daten-Breakpoint reagiert auf den Zugriff oder die Änderung einer bestimmten Speicheradresse oder Variable. Er ist nicht an eine Codezeile, sondern an das Datenelement gebunden. Dies hilft dabei, unerwartete Wertänderungen durch Seiteneffekte aufzuspüren.

### Ausnahme-Breakpoints (Exception Breakpoints)

Diese Breakpoints werden automatisch ausgelöst, wenn das Programm eine Ausnahme (_Exception_) wirft. Der Debugger springt direkt an die Stelle des Fehlers, noch bevor eine eventuelle Ausnahmebehandlung (z. B. ein `catch`-Block) greift.

### Ablaufverfolgungspunkte (Tracepoints)

Ein Tracepoint ist ein spezieller Breakpoint, der die Programmausführung nicht unterbricht. Stattdessen führt er beim Erreichen eine Aktion aus, meist das Protokollieren einer Nachricht in der Konsole. Dies erlaubt eine [Überwachung](ablaufverfolgung), ohne das zeitliche Verhalten des Programms massiv zu verändern.

## Steuerung im Debugging-Prozess

Sobald ein Breakpoint erreicht wurde, verharrt das Programm im Pausenzustand. Die Steuerung erfolgt über standardisierte Befehle:

1. **Step Over (Schritt überspringen):** Führt die aktuelle Zeile aus und hält bei der nächsten Zeile an, ohne in Funktionsaufrufe hineinzuspringen.
2. **Step Into (Schritt hinein):** Springt in eine aufgerufene Funktion, um deren internen Ablauf zu prüfen.
3. **Step Out (Schritt hinaus):** Führt den Rest der aktuellen Funktion aus und hält in der aufrufenden Funktion an.
4. **Continue (Fortfahren):** Setzt die Programmausführung bis zum nächsten Breakpoint fort.

## Vorteile und Herausforderungen

Der Einsatz von Breakpoints ermöglicht eine effiziente Fehlerbehebung ohne manuelle Codeänderungen (wie temporäre `print`-Ausgaben). Analysen können flexibel durchgeführt werden, ohne Zeitverlust durch Neukompilierung.

Allerdings beeinflussen Breakpoints die Performance. In zeitkritischen Systemen (z. B. Echtzeitsteuerungen) kann das Anhalten zu Folgefehlern führen, die im Normalbetrieb nicht auftreten (_Heisenbugs_). Zudem erschwert ein übermäßiger Einsatz vieler gleichzeitig aktiver Breakpoints die Übersichtlichkeit der Debugging-Sitzung.

## Best Practices

- **Strategisch setzen:** Breakpoints an entscheidenden Kontrollstrukturen oder Datenschnittstellen platzieren.
- **Muting nutzen:** Bei Bedarf alle Breakpoints temporär deaktivieren, um Initialisierungsphasen schnell zu überspringen.
- **Hit Counts verwenden:** Bei Fehlern, die erst nach vielen Durchläufen auftreten, den Breakpoint so konfigurieren, dass er erst beim $n$-ten Treffer stoppt.
- **Regelmäßig aufräumen:** Nicht mehr benötigte Breakpoints entfernen.

## Beispiel: Bedingter Breakpoint

Wenn eine Liste von 1.000 Transaktionen verarbeitet wird und ein Fehler nur bei negativen Beträgen auftritt, ist ein bedingter Breakpoint effizient.

**Vorgehen:**

1. Setzen eines Breakpoints in der Verarbeitungsschleife.
2. Konfiguration der Bedingung: `transaction.amount < 0`.
3. Der Debugger ignoriert alle gültigen Buchungen und hält exakt beim fehlerhaften Datensatz an.

## Selbsttest

1. Was unterscheidet einen Zeilen-Breakpoint von einem Tracepoint?
2. In welcher Situation ist ein Daten-Breakpoint (Watchpoint) hilfreicher als ein Zeilen-Breakpoint?
3. Welcher Befehl wird genutzt, um eine Funktion im Detail zu untersuchen?
4. Warum können Breakpoints in Echtzeitsystemen problematisch sein?
5. Welchen Zweck erfüllt ein _Hit Count Breakpoint_?
