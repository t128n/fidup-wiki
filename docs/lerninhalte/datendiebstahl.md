---
title: "Datendiebstahl"
description: "Datendiebstahl bezeichnet das unbefugte Erlangen digitaler Informationen. Der Artikel erläutert rechtliche Aspekte (§ 202a StGB), Angriffsmethoden und DSGVO-Pflichten."
sources:
    - title: "BSI - Methoden der Cyber-Kriminalität"
      url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/methoden-der-cyber-kriminalitaet.html"
    - title: "§ 202a StGB - Ausspähen von Daten"
      url: "https://www.gesetze-im-internet.de/stgb/__202a.html"
    - title: "Art. 33 DSGVO - Meldung von Datenschutzverletzungen"
      url: "https://dsgvo-gesetz.de/art-33-dsgvo/"
---

Der Begriff **Datendiebstahl** beschreibt das unbefugte Erlangen, Kopieren oder Übertragen digitaler Informationen. Da Daten im rechtlichen Sinne keine körperlichen Gegenstände sind, wird dieser Vorgang juristisch meist als Ausspähen von Daten eingestuft. Ziel ist häufig der Zugriff auf personenbezogene Informationen, Finanzdaten oder Betriebsgeheimnisse. Für betroffene Organisationen resultieren daraus finanzielle Schäden sowie Reputationsverluste.

## Definition und rechtlicher Rahmen

In der deutschen Rechtsprechung ist der Begriff „Diebstahl“ eng mit körperlichen Sachen verknüpft (§ 242 StGB). Da Daten immateriell sind, greifen beim unbefugten Entwenden andere Tatbestände.

Zentral ist das **Ausspähen von Daten** gemäß § 202a StGB. Strafbar handelt, wer sich unbefugt Zugang zu Daten verschafft, die nicht für die eigene Person bestimmt und gegen unberechtigten Zugriff besonders gesichert sind. Eine wesentliche Voraussetzung ist die Überwindung einer Zugangssicherung, beispielsweise eines Passwortschutzes oder einer Firewall.

Davon abzugrenzen ist der **Datenmissbrauch**, bei dem der Zugriff zwar rechtmäßig erfolgt, die Verwendung jedoch entgegen der Zweckbindung oder gesetzlicher Vorgaben der [Datenschutz-Grundverordnung](datenschutz) erfolgt.

## Angriffsmethoden

Angriffe auf Datenbestände nutzen meist eine Kombination aus technischer Infiltration und menschlichen Verhaltensweisen.

### Psychologische Manipulation

Häufig bildet der Mensch eine Schwachstelle in der Sicherheitskette:

- **Social Engineering**: Durch Manipulation oder das Vortäuschen falscher Identitäten werden Personen dazu bewegt, Passwörter preiszugeben oder Sicherheitsmechanismen zu deaktivieren.
- **[Phishing](phishing)**: Über manipulierte E-Mails oder betrügerische Webseiten versuchen Angreifer, Zugangsdaten von Benutzern abzugreifen.

### Technische Infiltration

- **Schadsoftware**: Trojaner oder Spyware infizieren Systeme, um im Hintergrund Daten auszulesen oder Tastatureingaben zu protokollieren.
- **SQL-Injection**: Sicherheitslücken in Webanwendungen werden genutzt, um über Eingabemasken schädliche Datenbankbefehle einzuschleusen.
- **Hacking**: Gezieltes Eindringen in Netzwerke durch Ausnutzung von Software-Schwachstellen oder Fehlkonfigurationen.

## Meldepflichten nach DSGVO

Betrifft ein Datendiebstahl personenbezogene Daten, löst dies als Datenpanne (_Data Breach_) spezifische Verpflichtungen aus.

Gemäß Art. 33 DSGVO besteht eine **Meldepflicht** gegenüber der zuständigen Aufsichtsbehörde. Die Meldung muss unverzüglich, spätestens jedoch binnen 72 Stunden nach Bekanntwerden der Verletzung, erfolgen. Eine Ausnahme besteht nur, wenn die Verletzung voraussichtlich zu keinem Risiko für die Rechte und Freiheiten natürlicher Personen führt.

Bei einem hohen Risiko für die Betroffenen müssen diese zusätzlich informiert werden. Jede Datenpanne ist intern lückenlos zu dokumentieren, um der Rechenschaftspflicht nachzukommen.

## Prävention und IT-Grundschutz

Ein effektiver Schutz basiert auf einem mehrschichtigen Sicherheitskonzept aus technischen und organisatorischen Maßnahmen:

- **Zugriffskontrollen**: Das Prinzip der minimalen Rechtevergabe (Least Privilege) stellt sicher, dass Nutzer nur auf erforderliche Daten zugreifen.
- **Verschlüsselung**: Sensible Daten sollten sowohl bei der Speicherung (_at rest_) als auch bei der Übertragung (_in transit_) durch [Verschlüsselungsverfahren](verschluesselungsart) geschützt werden.
- **Multi-Faktor-Authentisierung (MFA)**: Die Absicherung von Konten durch mindestens zwei unabhängige Merkmale erschwert den Missbrauch gestohlener Zugangsdaten.
- **[Penetrationstests](penetrations-test)**: Simulierte Angriffe identifizieren Schwachstellen in der IT-Infrastruktur präventiv.

## Beispiel: SQL-Injection

In einem Szenario nutzt ein Angreifer ein unsicheres Suchfeld eines Online-Shops. Anstatt eines regulären Suchbegriffs wird ein SQL-Befehl eingegeben:

$$
\text{' OR 1=1 --}
$$

Durch eine fehlende Validierung der Eingabe interpretiert die Datenbank diesen Befehl als Teil der Abfrage und liefert alle Datensätze der Kundentabelle zurück. Da die Daten unbefugt kopiert wurden, liegt ein Ausspähen von Daten vor, das eine Meldepflicht nach DSGVO auslöst.
