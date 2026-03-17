---
title: "Versionsmanagement"
description: "Versionsmanagement bezeichnet den systematischen Prozess der Verwaltung und Nachverfolgung von Änderungen an Dateien und Projekten über die Zeit. Es ermöglicht die Zusammenarbeit mehrerer Personen, die Fehlerbehebung durch Wiederherstellung früherer Zustände sowie die Dokumentation von Entwicklungen. Beliebte Systeme sind Git, SVN und Mercurial."
sources:
  - title: "Git - Die dokumentierte Referenz"
    url: "https://git-scm.com/docs/git/de"
  - title: "Informationen zu Git - GitHub-Dokumentation"
    url: "https://docs.github.com/de/get-started/using-git/about-git"
  - title: "Was ist Git? - Azure DevOps | Microsoft Learn"
    url: "https://learn.microsoft.com/de-de/devops/develop/git/what-is-git"
---

**Versionsmanagement** beschreibt den systematischen Prozess der Verwaltung und Nachverfolgung von Änderungen an Dateien und Projekten über die Zeit. Es unterstützt die Zusammenarbeit mehrerer Personen an denselben Ressourcen, verhindert Konflikte und ermöglicht die Wiederherstellung früherer Zustände. Beliebte Versionskontrollsysteme wie Git, SVN und Mercurial bilden die Grundlage für effiziente Softwareentwicklung und Datenanalyse.

## Lernziele

Dieser Artikel vermittelt Kenntnisse zu:

- Dem Begriff Versionskontrollsystem (VCS) und dem Unterschied zwischen zentralen und verteilten Systemen.
- Grundkonzepten wie Repository, Commit, Branching und Merging.
- Einfachen Git-Befehlen für Branching, Merging und Konfliktlösung.
- Häufigen Fehlern im Versionsmanagement und bewährten Praktiken.

## Kurzüberblick

Versionsmanagement dient der systematischen Nachverfolgung von Änderungen in Projekten. Es speichert die Historie aller Modifikationen, ermöglicht parallele Arbeit und unterstützt die Wiederherstellung vergangener Zustände. Zentrale Systeme wie SVN arbeiten mit einem gemeinsamen Server, während verteilte Systeme wie Git jedem Nutzer eine vollständige Kopie des Projekts bereitstellen. Das fördert Flexibilität und Offline-Arbeit.

## Kontext und Einordnung

Versionsmanagement entstand aus der Notwendigkeit, Änderungen in Softwareprojekten zu koordinieren. In der Daten- und Prozessanalyse hilft es, Analysen nachzuvollziehen und Iterationen zu dokumentieren. Es grenzt sich von einfachem Speichern ab, da es nicht nur Dateien archiviert, sondern eine Historie mit Metadaten wie Autor und Zeitstempel erstellt. Moderne Tools integrieren es in Workflows wie [Projektmanagement](projektmanagement) oder kontinuierliche Verbesserungsprozesse.

## Begriffe und Definitionen

### Versionskontrollsystem (VCS)

Ein Versionskontrollsystem (VCS) ist ein Tool, das Änderungen an Dateien und Projekten über die Zeit nachverfolgt und die Historie speichert. Es ermöglicht die Wiederherstellung früherer Versionen und unterstützt die Zusammenarbeit. Zentrale VCS wie SVN erfordern einen Server für Commits, während verteilte VCS wie Git lokale Kopien der Historie erlauben.

### Repository

Ein Repository enthält die vollständige Sammlung aller Projektdateien und deren Änderungshistorie. Bei verteilten Systemen ist es eine eigenständige Einheit, die lokal und remote existieren kann. Es speichert nicht nur Dateien, sondern auch Metadaten wie Commits und Branches.

### Commit

Ein Commit ist eine Momentaufnahme des Projektzustands zu einem bestimmten Zeitpunkt. Er enthält geänderte Dateien, Metadaten (Autor, Datum, Nachricht) und eine eindeutige Kennung (Hash). Commits sind atomisch und erlauben die Rückkehr zu früheren Zuständen.

### Branching

Branching ermöglicht das Erstellen paralleler Entwicklungslinien. Ein Branch wie "main" oder "feature-x" isoliert Änderungen, sodass sie nicht die Hauptlinie beeinträchtigen. Der Standard-Branch heißt heute "main" (früher "master").

### Merging

Merging integriert Änderungen aus verschiedenen Branches. Es kann automatisch erfolgen oder Konflikte erfordern, die manuell aufgelöst werden. Pull Requests auf Plattformen wie GitHub erleichtern die Überprüfung vor dem Merge.

## Systemvergleich: Zentrale vs. verteilte VCS

Zentrale Systeme wie SVN arbeiten mit einem einzigen Repository auf einem Server. Jeder Commit erfordert eine Netzwerkverbindung, und der Server ist ein Single Point of Failure. Verteilte Systeme wie Git geben jedem Nutzer eine vollständige Kopie, was Offline-Arbeit und Resilienz ermöglicht. Der Vergleich zeigt:

| Aspekt | Zentral (z. B. SVN) | Verteilt (z. B. Git) |
|--------|---------------------|----------------------|
| Architektur | Ein zentrales Repository | Jeder hat eine Arbeitskopie |
| Arbeitsweise | Online-Arbeit erforderlich | Offline-Arbeit möglich |
| Geschwindigkeit | Netzwerkabhängig | Schnelle lokale Operationen |
| Sicherheit | Server als Schwachstelle | Krypto-Hashes für Integrität |

Verteilte Systeme bieten Vorteile in der Flexibilität, während zentrale einfacher in der Administration sind.

## Vorteile und Herausforderungen

Vorteile umfassen effiziente Kollaboration, Fehlerbehebung durch Historie und Dokumentation von Änderungen. Herausforderungen sind die anfängliche Komplexität, mögliche Konflikte bei Merges und der Lernaufwand für neue Nutzer. Große Repositories können Speicherplatz beanspruchen.

## Praktische Beispiele

### Beispiel: Branching und Merging mit Git

In einem Beispielprojekt hat der Haupt-Branch den Namen "main". Ein Entwickler erstellt einen Feature-Branch:

```
git checkout -b feature-neue-analyse
```

Er ändert eine Datei (z. B. hinzufügen einer Analysefunktion) und committet:

```
git add neue_analyse.py
git commit -m "feat: Neue Analysefunktion hinzufügen"
```

Zurück im "main"-Branch wird gemergt:

```
git checkout main
git merge feature-neue-analyse
```

Bei Konflikten (z. B. beide Branches ändern dieselbe Zeile) öffnet Git einen Editor zur Auflösung.

### Beispiel: Pull Request

Auf GitHub erstellt man einen Pull Request, um Änderungen vorzuschlagen. Der Code wird reviewed, und bei Genehmigung gemergt. Das fördert Qualitätssicherung.

## Häufige Fehler und Tipps

- Fehlende Commit-Nachrichten vermeiden: Beschreibende Nachrichten verwenden, wie "fix: Fehler in Berechnung beheben".
- Große Commits vermeiden: Änderungen atomisch halten (eine logische Einheit pro Commit).
- Haupt-Branch nicht direkt bearbeiten: In Feature-Branches arbeiten und via Pull Request mergen.
- Bei Konflikten: Git-Tools wie `git mergetool` zur Auflösung verwenden.

## Selbsttest

1. Was ist der Unterschied zwischen einem zentralen und einem verteilten VCS?
2. Was ist ein Commit und warum ist er wichtig?
3. Welcher Befehl erstellt einen neuen Branch in Git?
4. Wie werden Merge-Konflikte aufgelöst?

## Weiterführendes

Für tiefergehende Kenntnisse zu Git empfiehlt sich die offizielle Dokumentation. In der Datenanalyse kann Versionsmanagement mit Tools wie [ETL-Prozessen](etl) kombiniert werden.
