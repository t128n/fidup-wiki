---
title: "Funktionale und nicht-funktionale Anforderungen"
description: "Unterscheidung, Messbarkeit und Dokumentation funktionaler sowie nicht-funktionaler Anforderungen mit Fokus auf Daten- und Prozessanalyse. Praktische Hinweise zur Formulierung (Fit‑Criterion), ISO/IEC 25010‑Einordnung und Beispiele."
sources:
    - title: "ISO/IEC 25010:2023 - Systems and software engineering — Product quality model"
      url: "https://www.iso.org/standard/78176.html"
    - title: "Functional vs. Non-Functional Requirements — Jama Software"
      url: "https://www.jamasoftware.com/requirements-management-guide/writing-requirements/functional-vs-non-functional-requirements/"
    - title: "Volere Requirements Specification Template (Volere/ReqView)"
      url: "https://www.reqview.com/doc/volere-template/"
---

Funktionale und nicht-funktionale Anforderungen sind zwei komplementäre Klassen von Anforderungen in der System- und Softwareentwicklung. Funktionale Anforderungen beschreiben die konkreten Funktionen und das Verhalten eines Systems. Nicht-funktionale Anforderungen (NFA) definieren Qualitätsmerkmale, Betriebsbedingungen und Einschränkungen, unter denen diese Funktionen erbracht werden. Beide Typen beeinflussen die Testbarkeit, Architekturentscheidungen und Akzeptanzkriterien eines Produkts.

Funktionale Anforderungen (FA) legen fest, was ein System leisten soll, beispielsweise bestimmte Datenverarbeitungsschritte, Benutzeraktionen oder das Verhalten von Schnittstellen. Nicht-funktionale Anforderungen (NFA) beschreiben, wie gut oder unter welchen Bedingungen das System seine Funktionen bereitstellt, etwa hinsichtlich Antwortzeit, Verfügbarkeit oder Sicherheit. In Projekten der [Datenanalyse](datenanalyse) sind insbesondere Performance, Datenintegrität, Skalierbarkeit, Sicherheit und Interoperabilität von Bedeutung.

Das Produktqualitätsmodell nach ISO/IEC 25010 dient zur Einordnung nicht-funktionaler Anforderungen. Zu den typischen Qualitätsdimensionen zählen funktionale Eignung, Leistungseffizienz (Performance), Zuverlässigkeit, Sicherheit, Wartbarkeit, Kompatibilität beziehungsweise Interoperabilität, Benutzbarkeit und Übertragbarkeit. Für die [Datenanalyse](datenanalyse) und Prozessanalyse sind insbesondere Durchsatz (z. B. bei ETL-Prozessen), Abfragelatenz, Datenintegrität und Schnittstellenfähigkeit relevant. Nicht-funktionale Anforderungen beeinflussen die Systemarchitektur, das Monitoring, die Definition von Service Level Agreements (SLA) und Maßnahmen der [Qualitätssicherung](qualitaetssicherung-und-qualitaetskontrolle).

## Begriffe und Definitionen

### Funktionale Anforderungen

Funktionale Anforderungen sind Forderungen an ein konkretes Verhalten oder eine Funktion eines Systems. Sie sind kontextbezogen, beobachtbar und durch Akzeptanzkriterien testbar. Ein Beispiel ist: "Das System exportiert Berichte im CSV‑Format mit dem Präfix report_YYYYMMDD.csv."

### Nicht-funktionale Anforderungen (NFA)

Nicht-funktionale Anforderungen (NFA) beziehen sich auf Qualitätsattribute, Betriebsbedingungen oder Einschränkungen wie Latenz, Verfügbarkeit oder Skalierbarkeit. Sie gelten häufig systemweit und benötigen zur Testbarkeit eine Metrik (Fit‑Criterion). Ein Beispiel: "Systemverfügbarkeit ≥ 99,99 % gemessen pro Quartal."

### Fit‑Criterion (Messkriterium)

Ein Fit‑Criterion (Messkriterium) ist eine klare, messbare Bedingung, die angibt, wann eine Anforderung als erfüllt gilt, beispielsweise das 95‑Perzentil der Antwortzeit ≤ 3 s unter einem definierten Lastprofil. Das Volere-Template empfiehlt Fit‑Criteria als Pflichtfeld in Requirements-Spezifikationen.

Für die Formulierung und Dokumentation von Anforderungen empfiehlt sich ein strukturiertes Vorgehen. Zunächst werden Quelle oder Stakeholder (beispielsweise durch eine [Stakeholder-Analyse](stakeholder-analyse)) angegeben und der Typ der Anforderung (funktional oder nicht-funktional) festgelegt. Es folgt eine Kurzbeschreibung der Anforderung. Für die Testbarkeit werden Fit‑Criterion oder Akzeptanzkriterien definiert, die eine Metrik, eine Bedingung und eine Messmethode enthalten. Weitere Angaben wie Priorität, Abhängigkeiten, Verantwortliche, Testmethoden (z. B. Lasttest, Monitoring-Query) und Traceability (ID, Versionierung, Verknüpfung zu User Story oder Lastenheft) erhöhen die Nachvollziehbarkeit.

Ein Fit‑Criterion sollte folgende Aspekte abdecken: eine eindeutige Kennzahl (z. B. Antwortzeit, Durchsatz, Fehlerquote), einen numerischen Grenzwert (z. B. "≤ 3 s“, "≥ 99,99 %"), eine Bedingung (z. B. Lastprofil), die Messperiode und Aggregation (z. B. 95‑Perzentil, quartalsweise) sowie die Messmethode und Verantwortlichkeit (z. B. Lasttest-Tool, Monitoring-Owner).

## Entscheidungsregeln

Beschreibt eine Anforderung eine Funktionalität, wird sie als funktionale Anforderung klassifiziert. Bezieht sie sich auf ein Qualitätsmerkmal, eine Betriebsbedingung oder Einschränkung, handelt es sich um eine nicht-funktionale Anforderung. In hybriden Fällen, etwa bei Fehlertoleranz, erfolgt die Klassifikation nach dem primären Zweck; beide Aspekte können in den Akzeptanzkriterien abgebildet werden.

## Beispiele

### Funktionale Anforderung

Eine funktionale Anforderung könnte lauten: "Das System generiert Monatsberichte und stellt diese als CSV‑Datei bereit." Die Akzeptanzkriterien umfassen, dass der Export eine Datei mit dem Präfix report_YYYYMM.csv erzeugt, alle Spalten des Berichts enthalten sind und die Datei mit Standard-Tabellenkalkulationen geöffnet werden kann.

### Nicht-funktionale Anforderung (Performance)

Ein Beispiel für eine nicht-funktionale Anforderung im Bereich Performance ist: "Ad-hoc-Query-Antwortzeiten sollen interaktiv bleiben." Das Fit‑Criterion lautet:

$$
95\text{-Perzentil der Antwortzeit} \le 3\ \text{s}
$$

Die Bedingung ist, dass dies bei 1.000 gleichzeitigen Analysten mit einem definierten Query-Mix gemessen wird. Die Testmethode ist ein reproduzierbarer Lasttest, die Aggregation erfolgt über das 95‑Perzentil aller Messläufe.

### Nicht-funktionale Anforderung (Datenintegrität)

Für Datenintegrität kann eine nicht-funktionale Anforderung lauten: "ETL-Fehlerquote ≤ 0,01 % pro Monat." Das Fit‑Criterion umfasst die Metrik (Anzahl fehlerhafter Datensätze im Verhältnis zu verarbeiteten Datensätzen), die Schwelle (≤ 0,01 %) und die Bedingung (Monatsaggregat, Validierung durch Prüfsummenvergleiche).

## Häufige Fehler und Hinweise

Unpräzise Begriffe wie "schnell“ oder "robust“ sollten vermieden werden; stattdessen sind Metrik und Schwellenwert anzugeben. Nicht-funktionale Anforderungen sollten nicht als optional betrachtet werden, da viele von ihnen Akzeptanzkriterien darstellen. Funktionale Logik sollte nicht in NFAs versteckt werden; eine klare Trennung und Nachverfolgbarkeit (Traceability) sind zu empfehlen. Für jede NFA ist ein Fit‑Criterion zu definieren, um Tests und SLA-Verhandlungen zu erleichtern. Die Priorisierung sollte nach Risiko und Kosten erfolgen, da beispielsweise hohe Sicherheitsanforderungen die Leistung beeinflussen können.

## Siehe auch

- [Qualitätssicherung und Qualitätskontrolle](qualitaetssicherung-und-qualitaetskontrolle)
- [Datenanalyse](datenanalyse)

## Literatur und Weblinks

- ISO/IEC 25010: Produkt-Qualitätsmodell (Standardreferenz zur Klassifikation von NFAs)
- Volere / ReqView: Template und Fit‑Criterion-Konzept zur praktischen Formulierung
- Jama Software: Praxisleitfaden zu funktionalen vs. nicht-funktionalen Anforderungen

## Einzelnachweise

- ISO/IEC 25010:2023 - Systems and software engineering — Product quality model. https://www.iso.org/standard/78176.html
- Functional vs. Non-Functional Requirements — Jama Software. https://www.jamasoftware.com/requirements-management-guide/writing-requirements/functional-vs-non-functional-requirements/
- Volere Requirements Specification Template (Volere/ReqView). https://www.reqview.com/doc/volere-template/
