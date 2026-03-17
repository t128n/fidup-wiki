---
title: "Apache Spark"
description: "Apache Spark ist ein Open-Source-Framework für skalierbare Big-Data-Verarbeitung, das In-Memory-Computing nutzt und Komponenten für SQL, Streaming und maschinelles Lernen bietet. Es richtet sich an Auszubildende in Daten- und Prozessanalyse."
sources:
  - title: "Apache Spark 4.1.0 Documentation - Overview"
    url: "https://spark.apache.org/docs/latest/index.html"
  - title: "What Is Apache Spark? | IBM"
    url: "https://www.ibm.com/think/topics/apache-spark"
  - title: "What Is a Resilient Distributed Dataset (RDD)? | IBM"
    url: "https://www.ibm.com/think/topics/resilient-distributed-dataset"
---

**Apache Spark** ist ein Open-Source-Framework für skalierbare Big-Data-Verarbeitung. Es nutzt In-Memory-Computing zur Beschleunigung von Geschwindigkeit und bietet Komponenten für strukturierte Daten, SQL, Streaming und maschinelles Lernen.

## Lernziele

Dieser Artikel vermittelt Kenntnisse ueber:

- Grundlagen der Apache Spark-Architektur und Funktionsweise
- Unterschiede zwischen RDDs und DataFrames
- Anwendungsbereiche der verschiedenen Spark-Komponenten
- Bedeutung von In-Memory-Computing
- Lazy Evaluation und DAG-basierte Aufgabenplanung

## Kurzübersicht

Apache Spark entstand 2009 am AMPLab der University of California, Berkeley als Alternative zu MapReduce. Seit 2013 wird es von der Apache Software Foundation gepflegt. Spark basiert auf einem gerichteten azyklischen Graphen (DAG) zur Aufgabenplanung und verwendet Resilient Distributed Datasets (RDDs) als zentrale Datenstruktur. Durch In-Memory-Verarbeitung erreicht Spark Geschwindigkeitsvorteile gegenüber traditionellen Ansätzen wie [Apache Hadoop](hadoop) MapReduce.

## Kontext und Einordnung

Spark ergaenzt das [Hadoop](hadoop)-Ökosystem durch direkte Integration in HDFS und YARN. Er kann parallel auf Cluster-Knoten laufen und unterstuetzt Hive. Spark integriert sich mit Cloud-Plattformen und Tools wie Kafka.

## Begriffe und Definitionen

### Resilient Distributed Dataset (RDD)

Ein RDD ist eine unveränderliche, fehlertolerante Sammlung von Elementen, die auf mehrere Cluster-Knoten verteilt und parallel verarbeitet werden kann. RDDs sind die zentrale Datenstruktur in Spark Core und befinden sich im Wartungsmodus.

### Directed Acyclic Graph (DAG)

Ein DAG wird von Spark zur Aufgabenplanung und Orchestrierung von Aufgaben ueber den Cluster verwendet. Im Gegensatz zum zweistufigen MapReduce-Ansatz bietet der DAG-Scheduler effiziente Fehlertoleranz und Optimierung des Workflows.

### Spark Core

Spark Core ist die Basis-Engine von Apache Spark. Sie stellt grundlegende Funktionen wie Scheduling, Optimierung, RDD-Abstraktion und Datenabstraktion bereit. Spark Core bildet das Fundament fuer alle anderen Spark-Bibliotheken.

### Spark SQL

Spark SQL ermoglicht SQL-Abfragen auf DataFrames und integriert sich mit Apache Hive. Es bietet eine einheitliche Abfragesprache fuer strukturierte Daten.

### Spark Streaming

Spark Streaming erweitert die Core-API um Echtzeit-Verarbeitung von Datenströmen. Es gibt zwei Ansaeze: DStreams (aeltere Mikro-Batch-Verarbeitung) und Structured Streaming (auf DataFrames basiert, empfohlen fuer neue Projekte).

### MLlib / Spark ML

MLlib ist die Bibliothek fuer maschinelles Lernen in Spark. Spark ML ist die neuere API auf Basis von DataFrames und bietet vorgefertigte Pipelines.

### GraphX

GraphX erweitert Spark um Graph-Verarbeitung. Es basiert auf RDDs und integriert sich in Cluster-Rechenum.

## Architektur von Apache Spark

Die Architektur besteht aus folgenden Komponenten:

- **Driver-Programm:** Steuert die Anwendung und ueber den Cluster.
- **Cluster-Manager:** Verwaltet Cluster-Ressourcen und Aufgabenplanung.
- **Worker Nodes:** Fuehren Executors aus, verarbeiten Tasks.
- **Executors:** Fuehren Tasks auf RDD-Partitionen.

## Verwendung

Bei der Verwendung von Spark werden Daten in RDDs oder DataFrames geladen, Transformationen angewendet und Aktionen ausgefuehrt.

## Beispiele

### Beispiel 1: RDD-Transformation und -Aktion

Eine Liste von Zahlen [1, 2, 3, 4, 5] wird in ein RDD geladen. Eine Transformation verdoppelt die Werte, und eine Aktion (Summe) liefert das Ergebnis zurueck.

### Beispiel 2: DataFrame-Abfrage mit Spark SQL

Ein DataFrame mit Kundendaten wird erstellt. Eine SQL-Abfrage filtert Kunden ueber 30 Jahren und liefert ein Ergebnis als DataFrame zurueck.

## Häufige Fehler und Tipps

Ein haeufiger Fehler ist die Verwendung von RDDs fuer neue Projekte. DataFrames sind bevorzugt. Structured Streaming wird fuer neue Anwendungen empfohlen.

Lazy Evaluation wird oft uebersehen. Lazy Evaluation besagt, dass Transformationen nicht sofort ausgefuehrt werden.

Eine Aktion ist erforderlich, um Ergebnisse zurueckzugeben.

## Selbsttest

1. Was ist der Hauptvorteil von Apache Spark?
2. Nenne zwei Hauptkomponenten von Spark Core?
3. Wie unterscheidet sich RDD von DataFrame?
4. Was ist der Zweck von Lazy Evaluation?
5. Nenne eine Streaming-API?
6. Erkläre die Architektur-Komponenten.
7. Nenne drei Vorteile von In-Memory-Computing?

## Weiterführendes

Weitere Informationen finden Sie in der offiziellen Dokumentation von Apache Spark. Spark integriert sich mit [Big-Data](big-data)-Tools wie Kafka und Hive in Big-Data-Pipelines.
