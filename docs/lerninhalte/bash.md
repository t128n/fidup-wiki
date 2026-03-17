---
title: "Bash"
description: "Die Bourne Again Shell (Bash) ist ein Unix-Shell- und Befehlssprachen-Interpreter zur Automatisierung von Systemaufgaben und Datenverarbeitungsprozessen."
sources:
    - title: "GNU Bash Reference Manual"
      url: "https://www.gnu.org/software/bash/manual/"
    - title: "bash(1) - Linux manual page"
      url: "https://man7.org/linux/man-pages/man1/bash.1.html"
    - title: "Bash 5.3 Released: Command Substitution and Beyond"
      url: "https://kurtulusoz.medium.com/bash-5-3-released-command-substitution-and-beyond-b91aa8a4b3e1"
---

Die **Bash** (Bourne Again Shell) ist ein Unix-Shell- und Befehlssprachen-Interpreter, der als Standard-Shell in den meisten Linux-Distributionen sowie unter macOS dient. Brian Fox entwickelte sie 1987 für das GNU-Projekt als freie Alternative zur Bourne-Shell (sh). Als Schnittstelle zwischen Benutzereingabe und Betriebssystem ermöglicht sie die interaktive Steuerung sowie die Ausführung von Skripten zur Automatisierung von Arbeitsabläufen.

## Lernziele

- Einordnung der Bash in die Unix-Architektur.
- Handhabung von Variablen, Kontrollstrukturen und Funktionen.
- Anwendung von Shell-Expansionen und Datenstrom-Umleitungen.
- Erstellung von Automatisierungsskripten für [ETL-Prozesse](etl).
- Nutzung der Bash zur vorbereitenden [Datenanalyse](datenanalyse).

## Kontext und Einordnung

Die Bash fungiert als Schnittstelle zur Orchestrierung spezialisierter Programme. Während Hochsprachen wie Python für komplexe Logik genutzt werden, ist die Bash das primäre Werkzeug für Dateimanipulationen, Systemadministration und Datenpipelines. Es wird zwischen _Builtins_ (shell-interne Befehle wie `cd` oder `echo`) und externen Programmen (wie `ls` oder `grep`) unterschieden. Da Builtins direkt vom Shell-Prozess ausgeführt werden, entfällt der Overhead eines Prozessstarts.

## Kernkonzepte

### Variablen und Befehlsstruktur

Variablen speichern Werte für die Wiederverwendung innerhalb einer Sitzung oder eines Skripts. Die Zuweisung erfolgt ohne Leerzeichen: `pfad="/var/log"`. Der Zugriff auf den Inhalt erfolgt über das Dollar-Präfix: `echo $pfad`.

### Shell-Expansionen

Vor der Befehlsausführung findet die Expansion der Eingabe statt. Platzhalter werden nach festen Regeln durch Werte ersetzt:

1. **Brace Expansion**: `{a,b}.txt` wird zu `a.txt b.txt`.
2. **Parameter Expansion**: `$USER` wird zum Namen des angemeldeten Benutzers aufgelöst.
3. **Command Substitution**: `$(date)` führt den Befehl aus und fügt das Ergebnis in die Befehlszeile ein.
4. **Pathname Expansion**: Wildcards wie `*.csv` werden zu einer alphabetisch sortierten Liste passender Dateinamen aufgelöst.

Seit Version 5.3 existiert die **Inline Command Substitution** `${| command; }`. Diese führt Befehle ohne Erzeugung einer Subshell aus, wodurch Variablenänderungen in der aktuellen Shell erhalten bleiben:
$$ \text{Effizienz}_{\text{inline}} > \text{Effizienz}_{\text{subshell}} $$

Zusätzlich erlaubt die Variable `GLOBSORT` die Steuerung der Sortierreihenfolge bei der Dateinamen-Expansion (z. B. nach Dateigröße oder Zeitstempel).

### Datenströme: Pipes und Redirection

Die Datenverarbeitung basiert auf drei Standard-Datenströmen: _stdin_ (Standardeingabe, Dateideskriptor 0), _stdout_ (Standardausgabe, Deskriptor 1) und _stderr_ (Standardfehlerausgabe, Deskriptor 2).

- **Pipes (`|`)**: Verbinden den _stdout_ eines Befehls mit dem _stdin_ des nachfolgenden Befehls.
- **Redirection (`>`, `>>`)**: Lenken Ausgaben in Dateien um. Während `>` die Zieldatei überschreibt, hängt `>>` Daten an das Ende an. Fehlermeldungen werden separat über `2>` umgeleitet.

```mermaid
graph LR
    A[Befehl 1] -- stdout --> B((Pipe |))
    B -- stdin --> C[Befehl 2]
    C -- stdout --> D[Datei >]
```

## Automatisierung und Skripterstellung

Ein [Skript](shellprogrammierung) bündelt Befehle in einer ausführbaren Datei. Wesentliche Elemente sind:

- **Shebang**: Die Zeile `#!/bin/bash` am Dateianfang legt den Interpreter fest.
- **Berechtigungen**: Die Datei benötigt Ausführungsrechte (z. B. via `chmod +x`).
- **Kontrollstrukturen**: `if`-Bedingungen und `for`-Schleifen steuern den Programmablauf.

### Beispiel: Backup-Skript

Das folgende [Backup-Skript](backup) nutzt eine Funktion zur Sicherung eines Verzeichnisses:

```bash
#!/bin/bash
# Definition einer Funktion
backup_erstellen() {
    local quelle=$1
    local ziel=$2
    cp -r "$quelle" "$ziel"
}

# Aufruf der Funktion
backup_erstellen "/data/input" "/data/backup"
```

## Praxisbeispiel: Datenbereinigung

In der Datenverarbeitung werden Dateien oft gefiltert, bevor die eigentliche Analyse beginnt. Dieses Skript entfernt Zeilen mit dem Inhalt "NULL" aus allen CSV-Dateien im Verzeichnis:

```bash
#!/bin/bash
for datei in *.csv; do
    grep -v "NULL" "$datei" > "clean_$datei"
done
```

## Häufige Fehler und Best Practices

- **Quoting**: Variablen in doppelten Anführungszeichen (`"$variable"`) verhindern Fehler bei Leerzeichen im Wert.
- **Shebang**: Das Fehlen der Shebang-Zeile kann dazu führen, dass Skripte von inkompatiblen Shells (z. B. `dash`) fehlerhaft interpretiert werden.
- **Exit-Codes**: Jeder Befehl gibt einen Statuscode zurück (`$?`).
  $$ 0 = \text{Erfolg} $$
$$ >0 = \text{Fehler} $$

## Selbsttest

1. Welcher Unterschied besteht zwischen den Operatoren `>` und `>>`?
2. Warum ist das Quoting von Variablen für stabile Skripte notwendig?
3. Welchen Vorteil bietet die Inline-Befehlsersetzung `${| ... }`?
4. Mit welcher Syntax werden Standardausgabe und Fehlerausgabe in dieselbe Datei umgeleitet?
