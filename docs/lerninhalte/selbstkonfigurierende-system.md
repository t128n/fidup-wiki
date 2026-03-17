---
title: "Selbstkonfigurierende Systeme"
description: "Einführung in selbstkonfigurierende Systeme als Teil des Autonomic Computing, mit Fokus auf Self-CHOP-Prinzipien, MAPE-K-Loop und praktischen Anwendungen in Daten- und Prozessanalyse."
sources:
  - title: "Autonomic Computing – Wikipedia"
    url: "https://de.wikipedia.org/wiki/Autonomic_Computing"
  - title: "What is Autonomic Computing and How Does It Work?"
    url: "https://www.techtarget.com/whatis/definition/What-is-autonomic-computing"
  - title: "Was Autonomic in DB2 leistet"
    url: "https://www.computerwoche.de/article/2877376/was-autonomic-in-db2-leistet.html"
---

**Selbstkonfigurierende Systeme** sind IT-Systeme, die ihre Konfiguration automatisch anpassen und optimieren können, ohne menschliches Eingreifen. Sie basieren auf dem Paradigma des Autonomic Computing und zielen darauf ab, die Komplexität der IT-Verwaltung zu reduzieren.

## Lernziele

Nach diesem Artikel lassen sich die Grundprinzipien des Autonomic Computing erläutern.
Nach diesem Artikel können die Self-CHOP-Prinzipien und der MAPE-K-Loop beschrieben werden.
Nach diesem Artikel sind die Reifegrade der Autonomie von selbstverwaltenden Systemen bekannt.
Nach diesem Artikel können praktische Anwendungen in Datenbanken und Cloud-Umgebungen benannt werden.
Nach diesem Artikel lassen sich Vorteile und Herausforderungen selbstkonfigurierender Systeme abwägen.

## Kurzüberblick

Autonomic Computing, auch bekannt als selbstverwaltende Systeme, umfasst vier zentrale Prinzipien: Selbstkonfiguration, Selbstheilung, Selbstoptimierung und Selbstschutz, zusammen als Self-CHOP bezeichnet. Diese Prinzipien werden durch den MAPE-K-Loop umgesetzt, einem geschlossenen Regelkreis aus Monitoring, Analyse, Planung und Ausführung, unterstützt durch eine Wissensbasis. Die Entwicklung hin zu autonomen Systemen erfolgt über fünf Reifegrade, von grundlegenden Ansätzen bis zu vollständig autonomen Infrastrukturen.

## Kontext und Einordnung

Autonomic Computing wurde 2001 von IBM eingeführt, um die wachsende Komplexität von IT-Systemen zu bewältigen. Es orientiert sich an der Analogie zum autonomen Nervensystem des Menschen, das den Körper ohne bewusste Kontrolle reguliert. Selbstkonfigurierende Systeme sind ein spezifischer Aspekt dieses Paradigmas, der sich auf die automatische Anpassung der Konfiguration konzentriert. Sie unterscheiden sich von rein KI-basierten Systemen, indem sie traditionell auf Regelwerken und geschlossenen Regelkreisen basieren, wenngleich moderne Ansätze maschinelles Lernen integrieren können.

## Begriffe und Definitionen

- **Autonomic Computing**: Ein Paradigma, das IT-Systeme befähigt, sich selbst zu verwalten, mit minimaler menschlicher Intervention. Es umfasst Selbstkonfiguration, Selbstheilung, Selbstoptimierung und Selbstschutz.
- **Self-CHOP-Prinzipien**: Die vier zentralen Prinzipien: Selbstkonfiguration (automatische Konfiguration von Komponenten), Selbstheilung (automatische Erkennung und Korrektur von Störungen), Selbstoptimierung (kontinuierliche Verbesserung der Leistung) und Selbstschutz (vorausschauende Abwehr von Angriffen).
- **MAPE-K-Loop**: Der Steuerungsmechanismus mit den Phasen Monitoring (Datensammlung), Analysis (Auswertung), Planning (Planung) und Execution (Ausführung), unterstützt durch eine Knowledge-Basis (Wissensbasis).
- **Reifegrade der Autonomie**: Fünf Stufen von grundlegend (einzelne Bestandteile getrennt verwaltet) bis autonom (vollständig zielgesteuerte Infrastruktur).

## Vorgehen

Selbstkonfigurierende Systeme folgen dem MAPE-K-Loop:

1. **Monitoring**: Das System sammelt kontinuierlich Daten über seinen Zustand und die Umgebung.
2. **Analysis**: Die Daten werden analysiert, um Probleme, Trends oder Optimierungsmöglichkeiten zu identifizieren.
3. **Planning**: Basierend auf der Analyse werden Aktionen geplant.
4. **Execution**: Die geplanten Aktionen werden automatisch ausgeführt, wobei die Wissensbasis aktualisiert wird.

Dieser Regelkreis ermöglicht eine dynamische Anpassung, beispielsweise die automatische Skalierung von Ressourcen in [Cloud-Umgebungen](cloud-computing).

## Beispiele

In IBM DB2 unterstützt der Configuration Advisor die Selbstkonfiguration, indem er Empfehlungen für Parameteroptimierungen basierend auf Lastprofilen gibt. Der Health Center überwacht den Betrieb und sendet Meldungen bei Überschreitungen von Schwellwerten, was zur Selbstheilung beiträgt. Der Design Advisor schlägt Verbesserungen für Datenbankstrukturen vor, um die Selbstoptimierung zu fördern.

## Häufige Fehler und Tipps

Nicht alle automatisierten Systeme sind autonom; es ist wichtig, zwischen regelbasierten Ansätzen und KI zu unterscheiden. Bei der Implementierung sollten Sicherheitsaspekte priorisiert werden, da Selbstschutz essenziell ist. Eine hohe Abhängigkeit von Technologie birgt Risiken; regelmäßige Überprüfungen menschlicher Expertise sind ratsam.

## Selbsttest

Was sind die vier Self-CHOP-Prinzipien?
Welche Phasen umfasst der MAPE-K-Loop?
Warum sind Reifegrade der Autonomie relevant?
Nenne ein Beispiel für Selbstkonfiguration in Datenbanken.
Welche Vorteile bieten selbstkonfigurierende Systeme?

## Weiterführendes

Selbstkonfigurierende Systeme finden Anwendung in [IoT](iot)-Geräten, Netzwerkmanagement und Edge Computing. Ihre Entwicklung trägt zur Kostensenkung und Effizienzsteigerung in der Daten- und Prozessanalyse bei.
