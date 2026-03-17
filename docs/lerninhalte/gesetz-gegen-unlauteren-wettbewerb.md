---
title: "Gesetz gegen den unlauteren Wettbewerb (UWG)"
description: "Das UWG schützt Mitbewerber, Verbraucher und die Allgemeinheit vor unlauteren Geschäftspraktiken. Es regelt zentrale Aspekte für die IT-Branche wie Spam-Schutz, Screen Scraping und rechtskonformes Marketing."
sources:
  - title: "Gesetz gegen den unlauteren Wettbewerb (UWG)"
    url: "https://www.gesetze-im-internet.de/uwg_2004/index.html"
  - title: "Unlauterer Wettbewerb - IHK Frankfurt am Main"
    url: "https://www.frankfurt-main.ihk.de/recht/uebersicht-alle-rechtsthemen/wettbewerbsrecht/unlauterer-wettbewerb/uebersicht"
  - title: "E-Mail-Marketing: Leitfaden zur rechtssicheren Gestaltung"
    url: "https://www.it-recht-kanzlei.de/rechtssichere-e-mail-werbung.html"
---

Das **Gesetz gegen den unlauteren Wettbewerb (UWG)** bildet in Deutschland die rechtliche Grundlage für einen fairen Wettbewerb. Es schützt Mitbewerber, Verbraucher sowie das Interesse der Allgemeinheit an einem unverfälschten Marktgeschehen. Durch das Verbot unlauterer geschäftlicher Handlungen verhindert das Gesetz, dass sich Unternehmen durch unfaire Methoden – wie Täuschung, Belästigung oder gezielte Behinderung – Vorteile verschaffen.

## Lernziele
Der Artikel vermittelt Wissen über folgende Schwerpunkte:

* Schutzzweck und Grundstruktur des UWG.
* Identifikation unlauterer Praktiken im IT-Kontext (z. B. Spam, irreführende Benchmarks).
* Rechtliche Anforderungen an das E-Mail-Marketing und das Double-Opt-In-Verfahren.
* Wettbewerbsrechtliche Einordnung der Datenanalyse mittels Screen Scraping.
* Wesentliche Rechtsfolgen bei Wettbewerbsverstößen.

## Grundlagen des Wettbewerbsrechts
Das UWG basiert auf einem dreigliedrigen Schutzzweck: Es schützt Mitbewerber vor unfairem Verhalten, sichert die Entscheidungsfreiheit der Verbraucher und wahrt das allgemeine Interesse an einem funktionsfähigen Wettbewerb.

Die zentrale Norm ist die Generalklausel in § 3 UWG. Sie untersagt unlautere geschäftliche Handlungen, die geeignet sind, die Interessen der Marktteilnehmer spürbar zu beeinträchtigen. Ergänzend listet der Anhang zum UWG (die „Schwarze Liste“) 30 Praktiken auf, die unter allen Umständen unzulässig sind – beispielsweise Lockvogelangebote oder aggressive Verkaufstechniken.

## Unlautere Praktiken in der IT
In der Softwareentwicklung und Systemintegration sind Transparenz und Wahrhaftigkeit gegenüber Kunden und Marktteilnehmern entscheidend.

### Irreführung und Täuschung
Nach § 5 UWG ist eine geschäftliche Handlung irreführend, wenn sie unwahre oder zur Täuschung geeignete Angaben über wesentliche Merkmale enthält. Im IT-Sektor betrifft dies insbesondere:

* **Leistungsversprechen:** Unzutreffende Angaben zu Rechengeschwindigkeiten, Sicherheitszertifikaten oder der tatsächlichen Verfügbarkeit von Systemen (Service Level Agreements).
* **Software-Funktionen:** Bewerbung von Funktionen, die erst in zukünftigen Versionen implementiert werden, ohne diesen Umstand deutlich zu kennzeichnen.
* **Referenzen:** Die unberechtigte Nutzung von Logos bekannter Unternehmen zu Referenzzwecken.

### Vergleichende Werbung
Vergleichende Werbung ist gemäß § 6 UWG zulässig, sofern sie objektiv nachprüfbare Merkmale (z. B. Preis oder technische Spezifikationen) gegenüberstellt. Unzulässig ist sie, wenn:

* Mitbewerber herabgesetzt oder verunglimpft werden.
* Eine Verwechslungsgefahr zwischen dem Werbenden und dem Mitbewerber entsteht.
* Irreführende Vergleiche vorgenommen werden (z. B. durch einseitige Auswahl vorteilhafter Benchmark-Ergebnisse).

## Direktmarketing und Spam (§ 7 UWG)
Das Verbot der unzumutbaren Belästigung ist für die [Prozessautomatisierung](automatisierung-von-geschaeftsprozessen) im Marketing von zentraler Bedeutung. Werbliche Ansprachen per E-Mail, Telefon oder SMS unterliegen strengen Regularien.

### Das Opt-In-Verfahren
Elektronische Post ohne ausdrückliche Einwilligung stellt nach § 7 Abs. 2 Nr. 3 UWG eine unzumutbare Belästigung dar. Technischer Standard zur rechtssicheren Einholung dieser Einwilligung ist das **Double-Opt-In-Verfahren (DOI)**:

1. Der Nutzer trägt seine Daten in ein Webformular ein.
2. Das System versendet automatisiert eine Bestätigungs-E-Mail mit einem Aktivierungslink.
3. Die Einwilligung wird erst durch das aktive Klicken auf diesen Link wirksam.

Dieses Verfahren verhindert, dass E-Mail-Adressen missbräuchlich durch Dritte angemeldet werden. Dabei müssen stets die Grundsätze zum [Datenschutz](datenschutz) beachtet werden.

### Die Bestandskundenausnahme
Unter den Voraussetzungen des § 7 Abs. 3 UWG ist E-Mail-Werbung ausnahmsweise auch ohne ausdrückliche Einwilligung zulässig:

* Die E-Mail-Adresse wurde im Zusammenhang mit dem Verkauf einer Ware oder Dienstleistung erhoben.
* Die Verwendung erfolgt für Direktwerbung für eigene, ähnliche Waren oder Dienstleistungen.
* Der Kunde hat der Verwendung nicht widersprochen.
* Der Kunde wird bei der Erhebung und jeder Verwendung klar auf das jederzeitige Widerspruchsrecht hingewiesen.

## Datenanalyse und Wettbewerb
Für Fachkräfte im Bereich Data Analytics ist das automatisierte Auslesen von Daten (Screen Scraping) wettbewerbsrechtlich relevant.

### Screen Scraping und Marktbeobachtung
Die automatisierte Marktbeobachtung (z. B. Preis- oder Sortimentsvergleiche) ist grundsätzlich zulässig. Eine gezielte Behinderung nach § 4 Nr. 4 UWG liegt jedoch vor, wenn:

* Technische Schutzmaßnahmen umgangen werden.
* Die IT-Infrastruktur des Mitbewerbers durch eine übermäßige Anzahl automatisierter Anfragen beeinträchtigt wird.
* Ausgelesene Daten unter Verletzung des Urheberrechts oder der Nutzungsbedingungen in großem Umfang verwertet werden.

## Rechtsfolgen bei Verstößen
Das UWG sieht ein abgestuftes Sanktionssystem vor:

* **Abmahnung:** Das bedeutendste Instrument der außergerichtlichen Streitbeilegung. Der Verletzte fordert die Einstellung des Verhaltens und die Abgabe einer strafbewehrten Unterlassungserklärung.
* **Unterlassungsanspruch:** Verpflichtet zur Nichtwiederholung der unlauteren Handlung.
* **Schadensersatz:** Bei vorsätzlichen oder fahrlässigen Verstößen können finanzielle Einbußen geltend gemacht werden.
* **Gewinnabschöpfung:** Bei vorsätzlichen, massenhaften Verstößen kann der erzielte Gewinn zugunsten des Bundeshaushalts eingezogen werden (§ 10 UWG).

## Praxisrelevanz und Fehlervermeidung

* **Fehler:** Versand von Werbe-E-Mails an allgemeine Firmenadressen ("info@..."), in der Annahme, im B2B-Bereich sei keine Einwilligung erforderlich.
* **Korrekt:** Auch im B2B-Verkehr ist für E-Mail-Marketing eine ausdrückliche oder zumindest mutmaßliche Einwilligung erforderlich, wobei in der Praxis meist ein Opt-In verlangt wird.

> **Merke:** Eine lückenlose Dokumentation des Double-Opt-In-Prozesses (Zeitstempel, IP-Adresse) ist essenziell, da das werbende Unternehmen im Streitfall die Beweislast trägt.

## Selbsttest

1. Welche drei Interessengruppen schützt das UWG?
2. Warum stellt das Double-Opt-In-Verfahren den rechtlichen Standard im E-Mail-Marketing dar?
3. Unter welchen Bedingungen ist vergleichende Werbung im IT-Bereich zulässig?
4. Welche Rechtsfolge tritt ein, wenn ein Unternehmen vorsätzlich und massenhaft gegen das UWG verstößt?
5. Wann wird automatisiertes Screen Scraping als gezielte Behinderung eingestuft?
