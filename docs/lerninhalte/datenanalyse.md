---
title: "Datenanalyse"
description: "Systematische Untersuchung von Daten zur Gewinnung von Erkenntnissen, Mustererkennung und zur Unterstützung fundierter Entscheidungen mittels verschiedener Reifegrade von deskriptiv bis präskriptiv."
sources:
    - title: "Die 4 Arten der Datenanalyse: Beispiele & Nutzen"
      url: "https://insightsoftware.com/de/blog/comparing-descriptive-predictive-prescriptive-and-diagnostic-analytics/"
    - title: "CRISP-DM: das Standard-Vorgehensmodell für Data Mining"
      url: "https://datasolut.com/crisp-dm-standard/"
    - title: "Methoden der Datenanalyse"
      url: "https://datalab-westsax.de/methoden-der-datenanalyse/"
---

Die **Datenanalyse** ist der systematische Prozess der Inspektion, Bereinigung, Transformation und Modellierung von Daten. Ziel ist es, nützliche Informationen zu gewinnen, Schlussfolgerungen zu ziehen und die Entscheidungsfindung in Organisationen zu unterstützen. Statistische Methoden und moderne Technologien machen verborgene Muster, Trends und Zusammenhänge in [großen Datenmengen](big-data) sichtbar, um komplexe Sachverhalte verständlich darzustellen und zukünftige Entwicklungen abzuschätzen.

## Lernziele

- Abgrenzung der vier grundlegenden Arten der Datenanalyse.
- Beschreibung des standardisierten Analyseprozesses nach dem [CRISP-DM-Modell](crisp-dm).
- Identifikation verschiedener Datenarten und deren spezifischer Herausforderungen.
- Erläuterung grundlegender Methoden zur Datenverarbeitung und -visualisierung.
- Benennung praxisnaher Anwendungsfelder für analytische Verfahren.

## Kurzüberblick

Datenanalyse bildet die Grundlage für datengesteuerte Entscheidungen in Unternehmen. Sie wandelt Rohdaten in verwertbares Wissen um. Das Spektrum reicht von der einfachen Aufbereitung historischer Verkaufszahlen bis hin zur komplexen Steuerung automatisierter Systeme durch Handlungsempfehlungen. Die Qualität der Ergebnisse hängt maßgeblich von der [Datenqualität](datenqualitaet) und der Wahl der passenden Analysemethodik ab.

## Die vier Arten der Datenanalyse

In der Praxis erfolgt die Unterteilung der Datenanalyse häufig in vier Reifegrade, die sich in ihrer Komplexität und ihrem Wertschöpfungspotenzial unterscheiden:

1. **Deskriptive Analyse (_Descriptive Analytics_):** Diese Basisstufe beantwortet die Frage „Was ist passiert?“. Sie fasst historische Daten zusammen und stellt den Ist-Zustand durch Kennzahlen wie Mittelwerte oder Summen sowie durch Diagramme dar.
2. **Diagnostische Analyse (_Diagnostic Analytics_):** Hier steht die Frage „Warum ist es passiert?“ im Mittelpunkt. Durch Techniken wie Drill-Down oder [Data Mining](data-mining) werden Ursachen für Trends oder Abweichungen gesucht, um beispielsweise [Korrelationen](korrelationskoeffizient) zwischen verschiedenen Einflussfaktoren aufzudecken.
3. **Prädiktive Analyse (_Predictive Analytics_):** Diese Stufe nutzt statistische Modelle und Machine-Learning-Algorithmen, um die Frage „Was wird wahrscheinlich passieren?“ zu beantworten. Sie berechnet Wahrscheinlichkeiten für zukünftige Ereignisse auf Basis von Mustern in den Vergangenheitsdaten.
4. **Präskriptive Analyse (_Prescriptive Analytics_):** Als höchste Stufe adressiert sie die Frage „Was sollen wir tun?“. Sie liefert konkrete Handlungsempfehlungen oder automatisiert Entscheidungen, um ein gewünschtes Ziel zu erreichen oder Risiken zu minimieren.

## Analyseprozess (CRISP-DM)

Ein erfolgreiches Analyseprojekt folgt meist einem strukturierten Vorgehensmodell wie dem [CRISP-DM](crisp-dm) (_Cross-Industry Standard Process for Data Mining_). Dieser zyklische Prozess umfasst sechs Phasen:

1. **Business Understanding:** Definition der Ziele und Anforderungen aus geschäftlicher Sicht.
2. **Data Understanding:** Erste Datensammlung, Identifikation von Qualitätsproblemen und Entdeckung erster Erkenntnisse.
3. **Data Preparation:** Auswahl, Bereinigung und Transformation der Daten in das für die Modellierung benötigte Format.
4. **Modeling:** Auswahl und Anwendung verschiedener mathematischer Modellierungstechniken.
5. **Evaluation:** Prüfung der Modelle auf Erreichung der geschäftlichen Ziele vor der Freigabe.
6. **Deployment:** Überführung der Ergebnisse in den operativen Betrieb oder die Erstellung von Berichten.

## Datenarten und Herausforderungen

Daten liegen in unterschiedlichen Formen vor, die jeweils spezifische Anforderungen an die Verarbeitung stellen:

- **Rohdaten:** Unverarbeitete Informationen direkt aus der Quelle (z. B. Logfiles, Sensordaten).
- **Strukturierte Daten:** Hochgradig organisierte Daten in festen Formaten, wie Tabellen in relationalen Datenbanken.
- **Unstrukturierte Daten:** Daten ohne festes Schema, wie Texte, Bilder oder Videos, die eine aufwendige Vorverarbeitung erfordern.

### Herausforderungen

Verschiedene Faktoren können die Analyse erschweren und die Genauigkeit beeinflussen:

- **Variabilität:** Unterschiedliche Interpretationen gleicher Datenpunkte je nach Kontext.
- **Fehlender Kontext:** Datenwerte ohne Metadaten lassen oft keine Rückschlüsse auf die Ursache zu.
- **Ausreißer:** Extremwerte, die statistische Kennzahlen wie das [arithmetische Mittel](arithmetisches-mittel) verzerren können.
- **Aggregationsproblematik:** Zu starke Zusammenfassungen können wichtige Details und Trends verdecken.

## Methoden und Werkzeuge

Zur Durchführung der Analyse werden verschiedene technische Verfahren eingesetzt:

- **Datenbereinigung:** Identifikation fehlerhafter Datensätze und Standardisierung von Formaten.
- **Aggregation:** Zusammenfassung von Einzelwerten zu aussagekräftigen Metriken.
- **Segmentierung:** Aufteilung des Datensatzes in homogene Gruppen (z. B. nach Kundenmerkmalen).
- **Statistische Analyse:** Mathematische Untersuchung von Datenbeziehungen.
- **Visualisierung:** Grafische Darstellung komplexer Zusammenhänge mittels Dashboards oder Infografiken.

Mathematische Zusammenhänge, wie die Berechnung des [arithmetischen Mittels](arithmetisches-mittel), lassen sich formal beschreiben:
$$ \bar{x} = \frac{1}{n} \sum\_{i=1}^{n} x_i $$

## Praxisbeispiele

- **Marketing:** Analyse von Klickpfaden und Kaufhistorien zur Erstellung personalisierter Angebote und Optimierung von Werbebudgets.
- **Finanzwesen:** Bewertung von Kreditrisiken durch prädiktive Modelle und Erkennung von betrügerischen Transaktionsmustern in Echtzeit.
- **Instandhaltung:** Vorhersage von Maschinenausfällen (_Predictive Maintenance_) basierend auf Sensordaten zur Vermeidung von Stillstandszeiten.

## Selbsttest

1. Was unterscheidet die diagnostische von der deskriptiven Analyse?
2. Welche Phase im CRISP-DM-Modell bereitet die Daten unmittelbar für die Modellierung vor?
3. Warum stellen unstrukturierte Daten eine besondere Herausforderung dar?
4. In welchem Fall ist eine präskriptive Analyse einer prädiktiven Analyse vorzuziehen?
