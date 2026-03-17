---
title: "Embedded Systems"
description: "Eingebettete Systeme sind spezialisierte Rechnersysteme, die als Teil eines übergeordneten Produkts spezifische Steuerungs- und Überwachungsaufgaben übernehmen. Dieser Artikel erläutert Hardware-Architekturen wie MCU und MPU sowie Sicherheitsaspekte nach BSI IT-Grundschutz."
sources:
  - title: "BSI IT-Grundschutz: SYS.4.3 Eingebettete Systeme"
    url: "https://it-grundschutzkompendium.de/sys_it-systeme/sys.4.3_eingebettete_systeme"
  - title: "MCU vs MPU: What’s the Difference?"
    url: "https://polyelectronics.us/mcu-vs-mpu-whats-the-difference-and-when-should-you-use-each/"
---

Ein **Embedded System** (deutsch: eingebettetes System) ist ein informationsverarbeitendes System, das funktional in ein physikalisches Gesamtprodukt integriert ist. Im Gegensatz zu universellen Personal Computern (PC) sind diese Systeme auf spezifische Aufgaben optimiert, wie die Steuerung von Airbags, die Regelung von Haushaltsgeräten oder die Datenverarbeitung in medizinischen Geräten. Sie bilden eine Einheit aus spezialisierter Hardware und Software, die für Endanwender meist unsichtbar bleibt.

## Kernkonzepte und Merkmale
Eingebettete Systeme zeichnen sich durch eine enge Kopplung an ihre physikalische Umgebung aus. Sie erfassen Daten über Sensoren und beeinflussen Prozesse über Aktuatoren. Während IoT-Geräte oft als eigenständige, vernetzte Objekte auftreten, sind eingebettete Systeme meist fester Bestandteil eines größeren mechanischen oder elektrischen Systems.

Wesentliche Merkmale sind:

* **Spezialisierung:** Hardware und Software sind exakt auf den Anwendungszweck zugeschnitten.
* **Ressourcenbeschränkung:** Oft stehen nur begrenzte Rechenleistung, geringer Speicher und minimale Energie zur Verfügung.
* **Zuverlässigkeit:** Der Einsatz in sicherheitskritischen Umgebungen erfordert eine hohe Fehlertoleranz und Langlebigkeit.
* **Echtzeitfähigkeit:** Die Verarbeitung externer Ereignisse erfolgt innerhalb garantierter Zeitfenster.

## Hardware-Architekturen: MCU und MPU
In der Entwicklung wird primär zwischen zwei Ansätzen unterschieden, die unterschiedliche Anforderungen an Integration und Rechenleistung erfüllen.

### Mikrocontroller (MCU)
Die *Microcontroller Unit* (MCU) vereint den Prozessorkern, Arbeitsspeicher (RAM), Programmspeicher (Flash) sowie Ein- und Ausgabeschnittstellen auf einem einzigen Chip. Diese hohe Integration ermöglicht eine kompakte Bauweise und einen minimalen Stromverbrauch, was MCUs ideal für einfache Steuerungs- und Regelungsaufgaben macht.

### Mikroprozessor (MPU)
Die *Microprocessor Unit* (MPU) ist auf hohe Rechenleistung ausgelegt. Da Speicherbausteine und Peripherie extern angebunden werden, steigt die Systemkomplexität. MPUs bieten ausreichende Ressourcen für rechenintensive Anwendungen und den Betrieb vollwertiger Betriebssysteme wie Linux.

### Speicherarchitekturen
Für die interne Datenverarbeitung existieren zwei grundlegende Konzepte:

* **Von-Neumann-Architektur:** Nutzt einen gemeinsamen Bus für Daten und Befehle. Dies ist kosteneffizient, kann jedoch bei gleichzeitigem Zugriff zu Engpässen führen.
* **Harvard-Architektur:** Verwendet getrennte Busse und Speicherbereiche für Daten und Instruktionen. Dies erlaubt parallele Zugriffe und sorgt für eine deterministische Performance, weshalb dieses Modell häufig in MCUs zum Einsatz kommt.

## Software und Echtzeitfähigkeit
Die Software eines eingebetteten Systems wird als Firmware bezeichnet. Sie ist dauerhaft im System gespeichert und interagiert direkt mit der Hardware.

Für zeitkritische Prozesse wird ein **Real-Time Operating System (RTOS)** eingesetzt. Im Gegensatz zu Standard-Betriebssystemen garantiert ein RTOS Determinismus, also die Abarbeitung von Aufgaben innerhalb definierter Zeitspannen:

* **Harte Echtzeit (Hard Real-Time):** Eine Zeitüberschreitung gilt als Systemausfall (z. B. Auslösung eines Airbags).
* **Weiche Echtzeit (Soft Real-Time):** Eine Verzögerung führt zu Qualitätsverlusten, ist jedoch nicht kritisch (z. B. Benutzeroberflächen).

## Sicherheitsanforderungen nach BSI-Standard
Die Integration in kritische Infrastrukturen macht die [Datensicherheit](datensicherheit) eingebetteter Systeme unverzichtbar. Der Standard **SYS.4.3** des [BSI IT-Grundschutzes](it-grundschutzmodell) definiert hierfür zentrale Anforderungen:

1. **Schnittstellenmanagement:** Deaktivierung ungenutzter physikalischer und logischer Schnittstellen (z. B. USB-Ports, ungenutzte Netzwerkdienste).
2. **Schutz der Debug-Schnittstellen:** Hardware-Zugänge für die Fehlerdiagnose (wie JTAG-Ports) müssen nach der Produktion gesichert oder physisch unzugänglich gemacht werden, um Manipulationen zu verhindern.
3. **Integrität von Updates:** Mechanismen für Firmware-Aktualisierungen müssen die Authentizität des Codes sicherstellen, um das Einspielen unautorisierter Software zu verhindern.

## Anwendungsbereiche
Eingebettete Systeme finden sich in nahezu allen modernen Industriezweigen:

* **Automobilindustrie:** Motorsteuerung, Fahrerassistenzsysteme und Infotainment.
* **Medizintechnik:** Dialysegeräte, Herzschrittmacher und bildgebende Verfahren.
* **Industrie 4.0:** Speicherprogrammierbare Steuerungen (SPS) und Robotik.
* **Telekommunikation:** Netzwerkkomponenten wie Router und Modems.

## Typische Fehler und Best Practices

* **Nachträgliche Sicherheit:** Sicherheitsaspekte werden oft erst am Ende der Entwicklung betrachtet (*Security as an Afterthought*). Best Practice ist die Berücksichtigung von Sicherheitsmechanismen bereits in der Designphase (*Security by Design*).
* **Unterschätzte Echtzeit-Latenz:** Bei komplexen Berechnungen können die Antwortzeiten variieren. Der Einsatz der Harvard-Architektur oder dedizierter Hardware-Beschleuniger hilft, deterministische Antwortzeiten sicherzustellen.

## Review-Fragen

1. Welche Merkmale unterscheiden ein eingebettetes System von einem herkömmlichen PC?
2. Warum begünstigt die Harvard-Architektur deterministisches Systemverhalten?
3. Welche Aufgabe übernimmt ein RTOS in sicherheitskritischen Anwendungen?
4. Welche Maßnahmen sieht der BSI IT-Grundschutz für Hardware-Debug-Schnittstellen vor?
5. Worin liegt der Unterschied zwischen harter und weicher Echtzeit?
