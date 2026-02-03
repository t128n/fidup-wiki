# Mermaid ASCII Diagramme

Diese Seite demonstriert ASCII-Diagramme mit beautiful-mermaid.

## Einfacher Graph

```mermaid-ascii
graph LR
    A --> B
    B --> C
```

[[Math]]

## Workflow-Diagramm

```mermaid-ascii
graph TD
    Start[Start] --> Check{Bedingung?}
    Check -->|Ja| Process[Verarbeiten]
    Check -->|Nein| End[Ende]
    Process --> End
```

## Sequenzdiagramm

```mermaid-ascii
sequenceDiagram
    Alice->>Bob: Hallo Bob!
    Bob-->>Alice: Hallo Alice!
    Alice->>Bob: Wie geht es dir?
    Bob-->>Alice: Gut, danke!
```

## Klassendiagramm

```mermaid-ascii
classDiagram
    Animal <|-- Dog
    Animal <|-- Cat
    Animal: +String name
    Animal: +int age
    Animal: +makeSound()
    Dog: +bark()
    Cat: +meow()
```

## Vergleich: Standard vs ASCII

Zum Vergleich hier ein Standard-Mermaid-Diagramm (mit VitePress-Renderer):

```mermaid
graph LR
    A --> B
    B --> C
```

Und das gleiche als ASCII (mit beautiful-mermaid):

```mermaid-ascii
graph LR
    A --> B
    B --> C
```
