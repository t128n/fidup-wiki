---
title: "PowerShell"
description: "PowerShell ist ein plattformübergreifendes Framework zur Aufgabenautomatisierung und Konfigurationsverwaltung, das als Befehlszeilenshell und Skriptsprache dient. Es ermöglicht die effiziente Verwaltung von Systemen und Anwendungen auf Windows, Linux und macOS, insbesondere für Daten- und Prozessanalyse."
sources:
  - title: "Was ist PowerShell? - PowerShell | Microsoft Learn"
    url: "https://learn.microsoft.com/de-de/powershell/scripting/overview"
  - title: "PowerShell-Dokumentation - PowerShell | Microsoft Learn"
    url: "https://learn.microsoft.com/de-de/powershell/"
  - title: "Cmdlet-Übersicht - PowerShell | Microsoft Learn"
    url: "https://learn.microsoft.com/de-de/powershell/scripting/developer/cmdlet/cmdlet-overview"
---

**PowerShell** ist ein plattformübergreifendes Framework zur Aufgabenautomatisierung und Konfigurationsverwaltung, bestehend aus einer Befehlszeilenshell und einer Skriptsprache. Anders als viele traditionelle Shells, die nur Text verarbeiten, arbeitet PowerShell mit .NET-Objekten, was die Automatisierung komplexer Aufgaben in der Daten- und Prozessanalyse erleichtert.

## Lernziele

Der Artikel behandelt:

- Grundkonzepte von PowerShell und deren Unterschiede zu anderen Shells wie [Bash](bash).
- Anwendung von Cmdlets mit der Verb-Substantiv-Konvention und Nutzung der Pipeline.
- Erstellung und Ausführung einfacher Skripte für Datenverarbeitung.
- Umsetzung von Praxisbeispielen für die Analyse von Prozessen und Daten.

## Was ist PowerShell?

PowerShell dient der Automatisierung von Aufgaben in der Systemadministration und Konfigurationsverwaltung. Es läuft auf Windows, [Linux](linux) und [macOS](macos) und unterscheidet sich von textbasierten Shells dadurch, dass es .NET-Objekte statt reinen Text verarbeitet. Dies ermöglicht eine präzisere und effizientere Datenmanipulation ohne manuelles Parsing.

Im Kontext der Daten- und Prozessanalyse eignet sich PowerShell für die Extraktion, Filterung und Verarbeitung von Systemdaten, Logdateien oder Prozessinformationen.

## Grundkonzepte

### Cmdlets

Cmdlets sind die grundlegenden Befehle in PowerShell und folgen einer einheitlichen Verb-Substantiv-Konvention, wie Get-Process oder Set-Location. Sie führen Aktionen aus und geben .NET-Objekte zurück.

### Pipeline

Die Pipeline verkettet Befehle mit dem Operator `|`, wobei die Ausgabe eines Cmdlets als Eingabe in das nächste fließt. Anders als in textbasierten Shells werden Objekte übergeben, was die Datenverarbeitung vereinfacht.

### Module

PowerShell ist modular erweiterbar. Module enthalten zusätzliche Cmdlets für spezifische Technologien, wie Azure oder SQL Server. Sie werden mit Import-Module geladen.

## Wichtige Cmdlets

Zu den grundlegenden Cmdlets gehören:

- Get-Command: Listet verfügbare Cmdlets auf.
- Get-Help: Zeigt Hilfe zu Cmdlets an.
- Get-Process: Listet laufende Prozesse auf.
- Set-Location: Wechselt das Verzeichnis.
- Copy-Item, Move-Item, Remove-Item: Für Dateioperationen.

## Variablen und Datentypen

Variablen werden mit `$` deklariert, z. B. `$name = "Wert"`. Sie können Zeichenketten, Zahlen, Arrays oder Objekte speichern. PowerShell ist case-insensitive bei Variablennamen.

## Kontrollstrukturen

### Bedingte Anweisungen

Bedingte Anweisungen verwenden `if ($bedingung) { ... }` oder `switch` für Mehrfachbedingungen.

### Schleifen

- for-Schleife: `for ($i = 1; $i -le 5; $i++) { ... }`
- while-Schleife: `while ($bedingung) { ... }`
- foreach-Schleife: `foreach ($item in $sammlung) { ... }` – ideal für die Verarbeitung von Datenlisten.

## Funktionen und Skripte

Funktionen gruppieren Befehle: `function Name { # Befehle }`.

Skripte tragen die Endung `.ps1` und werden mit `.\script.ps1` ausgeführt. Die Ausführungsrichtlinie (Execution Policy) muss oft angepasst werden, z. B. auf RemoteSigned, um Skripte zuzulassen.

## Tipps für die effiziente Arbeit

- Tab-Vervollständigung: Tab-Taste für automatische Befehlsvervollständigung.
- Befehlsverlauf: Pfeiltasten oder Get-History.
- Hilfesystem: Get-Help mit Parametern wie -Examples oder -Online. Hilfe aktualisieren mit Update-Help.

## Praxisbeispiele für Daten- und Prozessanalyse

### CSV-Dateien verarbeiten

```powershell
$data = Import-Csv -Path "daten.csv"
foreach ($row in $data) {
    Write-Output "Name: $($row.Name), Wert: $($row.Wert)"
}
```

### Prozesse filtern

```powershell
Get-Process | Where-Object { $_.CPU -gt 10 } | Select-Object Name, CPU
```

### Logdateien analysieren

```powershell
Get-Content "log.txt" | Where-Object { $_ -match "Fehler" } | Measure-Object
```

### WMI-Abfragen

```powershell
Get-CimInstance -ClassName Win32_Process | Select-Object Name, ProcessId
```

## Erweiterbarkeit

PowerShell nutzt die PowerShell Gallery für Module. Find-Module und Install-Module dienen dem Finden und Installieren von Erweiterungen.

## Häufige Fehler und Tipps

- Nicht: Skripte aus unbekannten Quellen ohne Prüfung ausführen. Stattdessen: RemoteSigned als Execution Policy verwenden und den Code prüfen.
- Nicht: Text als Eingabe erwarten, wenn Objekte fließen. Stattdessen: Pipeline für Objektmanipulation nutzen.

## Selbsttest

1. Was ist die Verb-Substantiv-Konvention bei Cmdlets?
2. Wie verkettet man Befehle in der Pipeline?
3. Nennen Sie ein Beispiel für eine foreach-Schleife in PowerShell.
4. Wie lädt man ein Modul?
5. Welche Execution Policy erlaubt signierte Skripte?
6. Wie filtert man Prozesse nach CPU-Nutzung?

## Weiterführendes

Weitere Informationen finden Sie in der offiziellen PowerShell-Dokumentation auf Microsoft Learn.