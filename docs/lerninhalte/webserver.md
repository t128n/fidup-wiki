---
title: "Webserver"
description: "Ein Webserver ist ein System aus Hardware und Software, das Webseiten und Webanwendungen über das Internet bereitstellt und Anfragen von Clients verarbeitet. Er verwendet Protokolle wie HTTP und HTTPS für die Kommunikation und integriert oft Datenbanken für dynamische Inhalte, während Sicherheitsmaßnahmen wie SSL/TLS und Firewalls den Schutz gewährleisten."
sources:
  - title: "HTTP caching - HTTP | MDN"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching"
  - title: "NGINX Content Caching | NGINX"
    url: "https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/"
  - title: "Dynamic Caching and Compression | Microsoft Learn"
    url: "https://learn.microsoft.com/en-us/iis/overview/dynamic-caching-and-compression"
---

Der **Webserver** ist ein System aus Hardware und Software, das Webseiten und Webanwendungen über das Internet zugänglich macht. Er verarbeitet eingehende HTTP-Anfragen von Clients, wie Webbrowsern, und liefert die entsprechenden Inhalte aus. Dabei folgt er einem Client-Server-Modell, nutzt Protokolle wie [HTTPS](https) für sichere Kommunikation und kann Datenbanken für dynamische Inhalte integrieren.

## Grundlagen

Ein Webserver besteht aus Hardware und Software, die zusammen Webseiten hosten und über das Internet bereitstellen. Die Softwarekomponente, wie Apache oder Nginx, verarbeitet Anfragen und sendet Antworten zurück. Der Webserver ermöglicht den Zugriff auf Inhalte für Clients, typischerweise über Webbrowser.

Webserver kommunizieren über das [OSI-Modell](osi-modell), wobei sie meist auf der Anwendungsschicht arbeiten und TCP für zuverlässige Übertragungen nutzen.

## Protokolle

### HTTP

HTTP dient der Übertragung von Hypermedia-Dokumenten, wie HTML-Seiten. Es folgt einem Request-Response-Modell: Der Client sendet eine Anfrage, der Server antwortet. HTTP ist zustandslos, was bedeutet, dass jede Anfrage unabhängig ist, aber Cookies können Sitzungen ermöglichen.

Typische HTTP-Methoden sind GET für den Abruf von Daten, POST für das Senden von Daten, PUT für Aktualisierungen und DELETE für das Entfernen von Ressourcen.

### HTTPS

[HTTPS](https) ist die sichere Variante von HTTP, die die Kommunikation mit SSL/TLS verschlüsselt. Dies schützt vor Abhören und Manipulation. HTTPS nutzt standardmäßig Port 443 und erfordert ein Zertifikat auf dem Server, das die Authentizität bestätigt.

## Komponenten

### Webserver-Software

Webserver-Software verarbeitet eingehende Anfragen und liefert Inhalte aus. Bekannte Beispiele sind Apache, bekannt für Flexibilität, und Nginx, das für hohe Leistung bei vielen gleichzeitigen Verbindungen optimiert ist. Die Software wird konfiguriert, um statische Dateien auszuliefern oder Skripte für dynamische Inhalte auszuführen.

### Datenbanken

Datenbanken sind separate Systeme, die oft mit Webservern verbunden werden, um dynamische Inhalte zu speichern und abzurufen. Beispiele sind MySQL oder PostgreSQL. Sie sind keine direkten Komponenten des Webservers, sondern werden über Schnittstellen wie SQL abgefragt. Webserver können auch ohne Datenbanken funktionieren, etwa für rein statische Seiten.

## Funktionsweise

Im Request-Response-Modell öffnet der Client eine TCP-Verbindung zum Server. Der Client sendet eine HTTP-Anfrage mit Methode, URL und Headern. Der Server verarbeitet die Anfrage, ruft gegebenenfalls Daten aus einer Datenbank ab und sendet eine Antwort mit Statuscode, Headern und dem Inhalt zurück.

Statische Inhalte sind vorab erstellte Dateien wie HTML oder Bilder, die unverändert ausgeliefert werden. Sie können vom Browser zwischengespeichert werden, was die Ladezeiten verbessert.

Dynamische Inhalte werden zur Laufzeit generiert, etwa durch serverseitige Skripte in PHP oder Python. Sie ermöglichen Personalisierung und Interaktivität, sind aber schwerer zu cachen.

## Sicherheit

SSL/TLS verschlüsselt die Datenübertragung und verhindert Man-in-the-Middle-Angriffe. Zertifikate von Zertifizierungsstellen bestätigen die Serveridentität.

Firewalls filtern den Netzwerkverkehr und blockieren unbefugte Zugriffe. Sie können auf Netzwerk- oder Anwendungsebene implementiert werden und schützen vor Angriffen wie SQL-Injection oder DoS.

## Beispiele

Ein einfacher Webserver könnte eine statische HTML-Seite hosten: Der Client sendet GET /index.html, der Server antwortet mit dem Dateiinhalt.

Für dynamische Inhalte: Ein Blog-System ruft Artikel aus einer Datenbank ab, generiert HTML und sendet es zurück. Hier werden Skripte verwendet, die Datenbankabfragen ausführen.

## Häufige Fehler und Tipps

Webserver und Datenbanken sind getrennt; ein Webserver kann ohne Datenbank arbeiten. HTTPS sollte für sensible Daten verwendet werden, um Verschlüsselung zu gewährleisten. Bei der Konfiguration von Webserver-Software sind Sicherheitseinstellungen wichtig, wie das Deaktivieren unnötiger Module.

## Einzelnachweise

Die genannten Protokolle und Funktionen basieren auf Standarddokumentationen zu HTTP und Webservern.