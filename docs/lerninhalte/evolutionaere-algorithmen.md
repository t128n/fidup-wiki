---
title: "Evolutionäre Algorithmen"
description: "Evolutionäre Algorithmen sind stochastische, metaheuristische Optimierungsverfahren, die biologische Evolutionsprinzipien zur Lösung komplexer Probleme nutzen."
sources:
    - title: "Evolutionärer Algorithmus – Wikipedia"
      url: "https://de.wikipedia.org/wiki/Evolution%C3%A4rer_Algorithmus"
    - title: "Evolutionäre Algorithmen | Wiki.js TU Berlin"
      url: "https://wiki.neuro.tu-berlin.de/en/home/teaching/2024ws-AlgoDat-SE/algorithms/Evolution%C3%A4re-Algorithmen"
    - title: "Evolutionäre Algorithmen | Springer Nature"
      url: "https://link.springer.com/chapter/10.1007/978-3-8348-8299-8_10"
---

**Evolutionäre Algorithmen** (EA) sind stochastische, metaheuristische Optimierungsverfahren, deren Funktionsweise auf den Prinzipien der biologischen Evolution basiert. Als naturanaloge Verfahren simulieren sie Prozesse wie Selektion, Rekombination und Mutation, um für komplexe Problemstellungen in akzeptabler Zeit hinreichend gute Lösungen zu finden. Sie kommen vor allem dort zum Einsatz, wo exakte mathematische Verfahren aufgrund der Problemkomplexität ineffizient sind, etwa in der [Datenanalyse](datenanalyse) oder beim Entwurf intelligenter Systeme.

## Lernziele

Der Artikel vermittelt Kenntnisse zu folgenden Aspekten:

- Biologische Analogie hinter evolutionären Algorithmen.
- Ablauf des evolutionären Zyklus (Phasen).
- Funktionsweise von Mutation, Rekombination und Selektion.
- Gängige Selektionsverfahren (z. B. Tournament-Selektion).
- Einsatzgebiete und theoretische Grenzen (No-Free-Lunch-Theorem).

## Kurzüberblick

Evolutionäre Algorithmen sind Bestandteil des [maschinellen Lernens](maschinelles-lernen) und der Computational Intelligence. Sie basieren auf der Annahme, dass sich eine Menge von Lösungskandidaten über Generationen hinweg verbessert, indem die am besten angepassten Individuen bevorzugt werden.

### Biologische Analogie

In der Natur überleben Individuen, die am besten an ihre Umwelt angepasst sind (_Survival of the Fittest_), und geben ihr Erbgut an die nächste Generation weiter. In der Informatik wird dieses Prinzip abstrahiert:

| Biologisches Konzept | Informatische Entsprechung                                     |
| :------------------- | :------------------------------------------------------------- |
| **Individuum**       | Ein konkreter Lösungskandidat für ein Problem.                 |
| **Population**       | Die Menge der aktuell betrachteten Lösungskandidaten.          |
| **Erbgut (Genom)**   | Die kodierte Darstellung der Lösung (z. B. als Bitstring).     |
| **Fitness**          | Die Güte einer Lösung (Maß für die Annäherung an das Optimum). |
| **Selektion**        | Auswahlmechanismus für die Fortpflanzung oder das Überleben.   |

Ein wesentliches Merkmal ist die Trennung zwischen **Genotyp** (die kodierte Repräsentation, auf der Operatoren wirken) und **Phänotyp** (die tatsächliche Lösungsausprägung, die bewertet wird).

## Der evolutionäre Zyklus

Ein evolutionärer Algorithmus durchläuft mehrere Phasen in einer Schleife, bis ein Abbruchkriterium (z. B. Zeitlimit, Erreichen einer Zielgüte oder maximale Generationenanzahl) erfüllt ist.

1. **Initialisierung**: Erzeugung einer Startpopulation (meist zufällig).
2. **Bewertung**: Zuweisung eines Fitnesswertes für jedes Individuum basierend auf einer Zielfunktion.
3. **Selektion**: Auswahl der Individuen für die Erzeugung von Nachkommen.
4. **Variation**: Erzeugung neuer Lösungsvorschläge durch Rekombination und Mutation.
5. **Ersatz**: Bildung einer neuen Generation, die die vorherige Population teilweise oder vollständig ersetzt.

## Genetische Operatoren

Die Operatoren dienen der Exploration (Erschließen neuer Bereiche) und Exploitation (Verfeinerung bekannter guter Bereiche) des Suchraums.

### Mutation

Mutationen verändern Teile des Genoms eines Individuums zufällig. Dies stellt sicher, dass neue genetische Informationen in die Population gelangen und verhindert ein vorzeitiges Verharren in lokalen Optima.
_Beispiel: In einem Bitstring wird ein Bit von 0 auf 1 invertiert._

### Rekombination (Crossover)

Die Rekombination kombiniert die Erbinformationen von Elternindividuen, um neue Nachkommen zu erzeugen.

- **Single-Point Crossover**: Die Bitstrings der Eltern werden an einem zufälligen Punkt getrennt und über Kreuz neu zusammengesetzt.
- **Uniforme Rekombination**: Jedes Bit des Kindes wird mit einer definierten Wahrscheinlichkeit (z. B. 50 %) von einem der beiden Elternteile übernommen.

## Selektionsverfahren

Die Selektion bestimmt, welche Individuen ihre Gene weitergeben. Der Selektionsdruck (Bevorzugung fitter Individuen) wird durch verschiedene Modelle gesteuert.

### Tournament Selection

Bei der Turnier-Selektion werden zufällig $k$ Individuen aus der Population ausgewählt. Das Individuum mit der höchsten Fitness gewinnt das Turnier und wird für die nächste Generation vorgemerkt. Dieses Verfahren ist robust gegenüber Ausreißern in der Fitnessbewertung.

### Fitness Based Selection (Roulette-Rad)

Die Wahrscheinlichkeit $P(x)$, dass ein Individuum $x$ ausgewählt wird, ist proportional zu seiner Fitness im Verhältnis zur Gesamtfitness der Population:

$$
P(x) = \frac{fitness(x)}{\sum_{y \in \text{population}} fitness(y)}
$$

### Ranking Based Selection

Anstelle der absoluten Fitnesswerte wird der Rang der Individuen verwendet (z. B. Rang 1 für das beste Individuum). Dies verhindert, dass extrem dominante Individuen die Population zu schnell monopolisieren.

$$
P(x) = \frac{g(r(x))}{\sum_{y \in \text{population}} g(r(y))}
$$

Dabei stellt $r(x)$ den Rang dar und $g$ ist eine monoton fallende Gewichtungsfunktion.

## Anwendungsgebiete und Grenzen

### Typische Einsatzbereiche

Evolutionäre Algorithmen sind effektiv bei Problemen mit sehr großen Suchräumen, für die keine effizienten exakten Algorithmen existieren:

- **Designoptimierung**: Formgebung von Bauteilen für maximale Stabilität bei minimalem Materialeinsatz.
- **Logistik**: Tourenplanung und Optimierung von Infrastrukturnetzen.
- **Wirtschaft**: Analyse komplexer Marktdaten und Vorhersagemodelle.

### Theoretische Grenzen

- **NP-Härte**: Viele Optimierungsprobleme sind NP-hart. Evolutionäre Algorithmen garantieren keine globale Optimallösung, liefern jedoch in der Praxis oft hochwertige Approximationen.
- **No-Free-Lunch-Theorem (NFL)**: Es existiert kein universeller Algorithmus, der für alle Probleme gleichermaßen überlegen ist. Ein evolutionärer Algorithmus muss stets auf die spezifische Problemstellung (Kodierung, Operatoren, Fitnessfunktion) angepasst werden.

## Häufige Fehler und Optimierung

- **Zu hohe Mutationsrate**: Der Algorithmus nähert sich einer reinen Zufallssuche an; stabile Lösungen werden kaum gefunden.
- **Zu geringer Selektionsdruck**: Fortschrittliche Individuen setzen sich nicht ausreichend durch, was die Konvergenz verzögert.

> **Optimierungstipp**: Zu Beginn der Suche ermöglicht eine hohe Mutationsrate (Exploration) das Erschließen weiter Bereiche des Suchraums. Im Verlauf kann ein höherer Selektionsdruck (Exploitation) die Feinabstimmung der gefundenen Optima unterstützen.

## Selbsttest

1. Was ist der Unterschied zwischen Genotyp und Phänotyp in einem evolutionären Algorithmus?
2. Welche Funktion übernimmt die Mutation im Suchprozess?
3. Warum garantieren evolutionäre Algorithmen nicht das Erreichen des globalen Optimums?
4. Erkläre das Prinzip der Tournament-Selektion.
5. In welchen Fällen kann eine Fitness-proportionale Selektion problematisch sein?
