---
title: "Software-Anforderungen"
description: "Ein Leitfaden zu funktionalen und nicht-funktionalen Anforderungen sowie deren Dokumentation und Priorisierung in der Softwareentwicklung."
sources:
  - title: "ISO 25010 – Kriterien zur Qualität von Software"
    url: "https://inztitut.de/blog/glossar/iso-25010/"
  - title: "Funktionale und nicht-funktionale Anforderungen ~ Beispiele"
    url: "https://www.johner-institut.de/blog/iec-62304-medizinische-software/funktionale-und-nicht-funktionale-anforderungen/"
  - title: "Die MoSCoW-Priorisierung - Einzelne Anforderungen einfach priorisieren"
    url: "https://www.peterjohann-consulting.de/moscow-priorisierung/"
---

Die Definition und das Management von **Software-Anforderungen** (Requirements Engineering) bilden das Fundament jeder Softwareentwicklung. Sie beschreiben Eigenschaften und Leistungen, die ein System erbringen muss, um die Bedürfnisse der Stakeholder zu erfüllen. In der Praxis wird zwischen funktionalen Anforderungen („Was soll das System tun?“) und nicht-funktionalen Anforderungen („Wie soll das System sein?“) unterschieden. Eine präzise Anforderungsanalyse reduziert das Risiko von Fehlentwicklungen und schafft eine verbindliche Kommunikationsbasis zwischen Auftraggebern und Entwicklungsteams.

## Funktionale vs. Nicht-funktionale Anforderungen

Anforderungen werden grundlegend in zwei Kategorien unterteilt, die unterschiedliche Aspekte eines Systems beleuchten.

### Funktionale Anforderungen
Funktionale Anforderungen legen fest, **was** das System tun soll. Sie beschreiben konkrete Funktionen, Dienstleistungen und das Verhalten der Software bei bestimmten Eingaben.

*   **Beispiel:** „Das System muss es ermöglichen, Rechnungen als PDF zu exportieren.“
*   **Fokus:** Geschäftsprozesse, Datenverarbeitung, Benutzerschnittstellen.

### Nicht-funktionale Anforderungen (NFR)
Nicht-funktionale Anforderungen definieren, **wie** das System die Funktionen ausführen soll. Sie beschreiben Qualitätsmerkmale und Rahmenbedingungen, die oft systemweit gelten.

*   **Beispiel:** „Der PDF-Export darf maximal zwei Sekunden dauern.“
*   **Fokus:** Performance, Sicherheit, Benutzbarkeit, Zuverlässigkeit.

Für die Konzeption ist es entscheidend, beide Arten frühzeitig zu identifizieren, da NFRs massiven Einfluss auf die Architektur und die Kosten eines Projekts haben.

## Softwarequalität nach ISO/IEC 25010

Die internationale Norm **ISO/IEC 25010** bietet ein Modell zur Klassifizierung von Softwarequalität. Sie dient als Checkliste, um sicherzustellen, dass wesentliche Qualitätsaspekte systematisch berücksichtigt werden.

Die acht Hauptkategorien sind:

1.  **Funktionale Tauglichkeit:** Erfüllt die Software die fachlichen Aufgaben?
2.  **Leistungseffizienz:** Wie schnell reagiert das System (Antwortzeiten, Ressourcenverbrauch)?
3.  **Kompatibilität:** Wie gut arbeitet die Software mit anderer Software oder Hardware zusammen?
4.  **Benutzbarkeit (*Usability*):** Wie einfach lässt sich die Software erlernen und bedienen?
5.  **Zuverlässigkeit:** Wie stabil läuft das System auch unter Belastung oder bei Fehlern?
6.  **Sicherheit:** Wie gut sind Daten vor unbefugtem Zugriff geschützt ([Datenschutz](datenschutz) und Datensicherheit)?
7.  **Wartbarkeit:** Wie leicht lässt sich die Software ändern oder erweitern (Analysierbarkeit, Modifizierbarkeit)?
8.  **Übertragbarkeit (*Portabilität*):** Wie einfach kann die Software in eine andere Umgebung verschoben werden?

## Dokumentation: Lastenheft und Pflichtenheft

In der klassischen Softwareentwicklung wird die Dokumentation in zwei zentralen Dokumenten festgehalten:

*   **Lastenheft:** Wird vom **Auftraggeber** erstellt. Es beschreibt die Gesamtheit der Forderungen an die Lieferungen und Leistungen eines Auftragnehmers.
*   **Pflichtenheft:** Wird vom **Auftragnehmer** auf Basis des Lastenhefts erstellt. Es beschreibt die technische Umsetzung der Anforderungen.

| Merkmal | Lastenheft | Pflichtenheft |
| :--- | :--- | :--- |
| **Ersteller** | Auftraggeber (Kunde) | Auftragnehmer (Entwickler) |
| **Inhalt** | Ziele, Anforderungen, Rahmenbedingungen | Konkrete Umsetzung, Spezifikationen |
| **Zeitpunkt** | Vor der Ausschreibung / Vergabe | Nach der Auftragsvergabe |

## Agiles Requirements Engineering

In agilen Projekten werden Anforderungen kontinuierlich im Projektverlauf verfeinert, statt sie vorab vollständig statisch zu fixieren.

### User Stories
Eine häufig genutzte Form sind **User Stories**. Sie beschreiben eine Anforderung aus der Sicht des Endanwenders:

*   „Als **[Rolle]** möchte ich **[Ziel/Wunsch]**, um **[Nutzen]**.“
*   **Beispiel:** „Als Buchhalter möchte ich alle offenen Posten filtern können, um Mahnungen schneller zu versenden.“

Ergänzt werden User Stories durch **Akzeptanzkriterien**, die festlegen, wann eine Anforderung als erfolgreich umgesetzt gilt.

## Priorisierung mit der MoSCoW-Methode

Da Ressourcen begrenzt sind, müssen Anforderungen priorisiert werden. Die **MoSCoW-Methode** ist hierfür ein Standardwerkzeug:

*   **M**ust have: Anforderungen, die zwingend für den Erfolg notwendig sind.
*   **S**hould have: Wichtige Anforderungen, die nicht kritisch für den Start sind.
*   **C**ould have: Optionale Wünsche („Nice-to-have“).
*   **W**on't have: Anforderungen, die in diesem Release explizit nicht umgesetzt werden.

## Häufige Fehler und Best Practices

*   **Vage Formulierungen:** Begriffe wie „schnell“ oder „benutzerfreundlich“ ohne messbare Kriterien erschweren die Abnahme. Statt „die Suche soll schnell sein“, sollte definiert werden: „Die Suche liefert Ergebnisse in unter 500 ms.“
*   **Fehlende Stakeholder:** Eine unvollständige [Stakeholder-Analyse](stakeholder-analyse) führt dazu, dass Anforderungen von Endanwendern oder dem IT-Betrieb übersehen werden.
*   **Vernachlässigung von NFRs:** Nicht-funktionale Anforderungen werden oft erst spät bemerkt. Sie müssen von Beginn an in die Planung einfließen.
