---
title: "Datenschutz"
description: "Grundlagen des Schutzes personenbezogener Daten gemäß DSGVO, inklusive der sieben Grundprinzipien, Betroffenenrechte sowie technischer und organisatorischer Maßnahmen für die Datenanalyse."
sources:
  - title: "Grundsätze der Datenschutz-Grundverordnung"
    url: "https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_de"
  - title: "Das Standard-Datenschutzmodell (SDM)"
    url: "https://www.bfdi.bund.de/DE/Fachthemen/Inhalte/Technik/SDM.html"
  - title: "Pseudonymisierung – Wie funktioniert das eigentlich?"
    url: "https://www.dr-datenschutz.de/pseudonymisierung-wie-funktioniert-das-eigentlich/"
---

Der **Datenschutz** umfasst alle rechtlichen, technischen und organisatorischen Konzepte, die dem Schutz personenbezogener Daten und der Wahrung der Privatsphäre dienen. In der Europäischen Union bildet die Datenschutz-Grundverordnung (DSGVO) den verbindlichen Rechtsrahmen. Ziel ist die Gewährleistung der informationellen Selbstbestimmung sowie der verantwortungsbewusste Umgang mit persönlichen Informationen.

## Lernziele
Nach der Lektüre dieses Artikels sind folgende Kompetenzen erworben:

*   Personenbezogene Daten sicher identifizieren und einordnen.
*   Die sieben Grundprinzipien der DSGVO im Kontext von Geschäftsprozessen anwenden.
*   Zentrale Betroffenenrechte benennen und deren Relevanz verstehen.
*   Den Unterschied zwischen Anonymisierung und Pseudonymisierung für die Datenanalyse bewerten.
*   Technische und organisatorische Maßnahmen (TOM) sowie das Standard-Datenschutzmodell (SDM) zur Absicherung heranziehen.

## Grundlagen: Personenbezogene Daten
Den Kern des Datenschutzes bildet der Begriff der personenbezogenen Daten. Dies sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.

### Identifizierbarkeit
Eine Person gilt als identifizierbar, wenn sie direkt (z. B. durch einen Namen) oder indirekt bestimmt werden kann. Indirekte Identifikatoren sind beispielsweise IP-Adressen, Standortdaten oder spezifische Merkmale wie Personalnummern. Jede Form der Verarbeitung – von der Erhebung über die Speicherung bis zur Löschung – unterliegt strengen gesetzlichen Anforderungen.

## Die 7 Grundprinzipien (DSGVO Art. 5)
Die Verarbeitung von Daten ist nur zulässig, wenn sie den folgenden sieben Grundprinzipien folgt:

1.  **Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz**: Es muss eine Rechtsgrundlage (z. B. Einwilligung oder Vertrag) vorliegen, und die Verarbeitung muss für Betroffene nachvollziehbar sein.
2.  **Zweckbindung**: Daten werden nur für festgelegte, eindeutige und legitime Zwecke erhoben.
3.  **Datenminimierung**: Die Erhebung ist auf das für den Zweck notwendige Maß zu beschränken.
4.  **Richtigkeit**: Unrichtige Daten sind unverzüglich zu löschen oder zu berichtigen.
5.  **Speicherbegrenzung**: Die Speicherung erfolgt nur so lange, wie es für den Zweck erforderlich ist.
6.  **Integrität und Vertraulichkeit**: Der Schutz vor unbefugter Verarbeitung, Verlust oder Zerstörung ist durch technische Maßnahmen sicherzustellen.
7.  **Rechenschaftspflicht (Accountability)**: Die verantwortliche Stelle muss die Einhaltung dieser Prinzipien nachweisen können.

## Betroffenenrechte
Individuen haben gegenüber datenverarbeitenden Stellen umfassende Rechte, um die Kontrolle über ihre Informationen zu behalten:

*   **Auskunftsrecht**: Bestätigung über die Verarbeitung und Kopie der Daten (Art. 15).
*   **Berichtigung**: Korrektur unrichtiger Informationen (Art. 16).
*   **Löschung („Recht auf Vergessenwerden“)**: Löschung bei Wegfall des Zwecks oder Widerruf der Einwilligung (Art. 17).
*   **Einschränkung der Verarbeitung**: Pausieren der Datenverwendung in strittigen Fällen (Art. 18).
*   **Datenübertragbarkeit**: Erhalt der Daten in einem maschinenlesbaren Format (Art. 20).
*   **Widerspruchsrecht**: Widerspruch gegen die Verarbeitung in besonderen Situationen oder bei Direktwerbung (Art. 21).

## Technische und organisatorische Maßnahmen (TOM)
Um den Schutz zu gewährleisten, implementieren Organisationen geeignete [technische und organisatorische Maßnahmen](tom). Diese orientieren sich häufig an etablierten Standards wie dem [IT-Grundschutzmodell](it-grundschutzmodell). Eine enge Verzahnung besteht zudem mit den Anforderungen an die [Compliance](compliance).

### Das Standard-Datenschutzmodell (SDM)
In Deutschland nutzen Aufsichtsbehörden das SDM, um die rechtlichen Anforderungen der DSGVO in prüfbare technische Gewährleistungsziele zu überführen:

*   **Nichtverkettung**: Daten aus verschiedenen Quellen dürfen nicht ohne Rechtsgrundlage zusammengeführt werden.
*   **Transparenz**: Alle Verarbeitungsschritte sind zu dokumentieren und müssen nachvollziehbar sein.
*   **Intervenierbarkeit**: Betroffene müssen ihre Rechte jederzeit technisch wirksam ausüben können.

## Datenanalyse: Pseudonymisierung vs. Anonymisierung
Für die Datenanalyse ist die Unterscheidung zwischen diesen beiden Verfahren entscheidend für die Risikobewertung.

| Merkmal | Pseudonymisierung | Anonymisierung |
| :--- | :--- | :--- |
| **Definition** | Ersetzen von Identifikatoren durch ein Pseudonym (z. B. ID). | Unumkehrbare Aufhebung des Personenbezugs. |
| **Rückführbarkeit** | Mit Zusatzwissen (getrennt aufbewahrt) möglich. | Faktisch nicht mehr möglich. |
| **DSGVO-Status** | Gilt weiterhin (Sicherheitsmaßnahme). | Fällt aus dem Anwendungsbereich der DSGVO. |
| **Anwendung** | Interne Analysen, Tests in Entwicklungsumgebungen. | Veröffentlichung von Statistiken, Open Data. |

## Häufige Fehler und Tipps

*   **Fehler**: Annahme, dass eine ID-Nummer bereits eine Anonymisierung darstellt.
    *   *Fakt*: Solange eine Liste existiert, die IDs echten Namen zuordnet, handelt es sich um eine Pseudonymisierung. Die DSGVO ist vollumfänglich anzuwenden.
*   **Fehler**: Daten ohne klaren Verwendungszweck speichern.
    *   *Lösung*: Implementierung von Löschroutinen bereits im Design-Prozess (*Privacy by Design*), um dem Prinzip der Speicherbegrenzung gerecht zu werden.

## Selbsttest

1.  Gehört eine dynamische IP-Adresse zu den personenbezogenen Daten?
2.  Welches Prinzip wird verletzt, wenn Marketingdaten für die Gehaltsabrechnung genutzt werden?
3.  Darf ein Unternehmen die Löschung von Daten verweigern, wenn eine gesetzliche Aufbewahrungsfrist besteht?
4.  Was ist der wesentliche Vorteil der Anonymisierung gegenüber der Personenbezogenheit aus rechtlicher Sicht?

---
*Hinweis: Zur Vertiefung technischer Schutzmaßnahmen empfiehlt sich ein Blick in die Konzepte zur [Datensicherheit](datensicherheit) sowie zur [Datensparsamkeit](datensparsamkeit).*
