---
title: "Datenmengen"
description: "Datenmengen werden in dezimalen SI-Einheiten (kB, MB, GB) und binären IEC-Einheiten (KiB, MiB, GiB) gemessen. Dieser Artikel erklärt die Unterschiede, die Umrechnung und die Relevanz in der Praxis."
sources:
    - title: "Speicherkapazität (Elektronik-Kompendium)"
      url: "https://www.elektronik-kompendium.de/sites/com/2208181.htm"
    - title: "Maßeinheiten für Speicherdaten (IBM Documentation)"
      url: "https://www.ibm.com/docs/de/storage-insights?topic=overview-units-measurement-storage-data"
---

**Datenmengen** beschreiben den Umfang digitaler Informationen, die auf Datenträgern gespeichert oder über Netzwerke übertragen werden. In der Praxis existieren zwei verschiedene Maßsysteme: das dezimale SI-System (Basis 10) und das binäre IEC-System (Basis 2). Die präzise Unterscheidung ist notwendig, da die Verwendung identischer Präfixe für unterschiedliche mathematische Basen häufig zu Abweichungen bei Kapazitätsangaben führt.

## Lernziele

Der Artikel vermittelt folgende Kenntnisse:

- Abgrenzung zwischen SI- und IEC-Präfixen.
- Umrechnung von Datenmengen zwischen dezimalen und binären Systemen.
- Gründe für abweichende Kapazitätsanzeigen in Betriebssystemen.
- Einschätzung der wachsenden Differenz bei großen Datenvolumen.

## Grundlagen

In der Informatik erfolgt die Messung von Datenmengen in Bit und Byte. Da moderne Dateien und Speichermedien Milliarden Bytes umfassen, kommen Präfixe zum Einsatz. Historisch wurden die SI-Präfixe (Kilo, Mega, Giga) uneinheitlich sowohl für das Dezimal- als auch für das Binärsystem genutzt. Um diese Mehrdeutigkeit aufzulösen, definierte die International Electrotechnical Commission (IEC) im Jahr 1998 spezifische Binärpräfixe (Kibi, Mebi, Gibi).

## SI-Einheiten vs. IEC-Einheiten

### SI-Einheiten (Dezimalsystem)

SI-Einheiten basieren auf der Potenz zur Basis 10. Sie werden primär für Übertragungsraten in der [Vernetzung](vernetzung) sowie für die Vermarktung von Hardwarekapazitäten durch Hersteller verwendet.

| Einheit  | Abkürzung | Wert in Byte      | Potenz    |
| :------- | :-------- | :---------------- | :-------- |
| Kilobyte | kB        | 1.000             | $10^3$    |
| Megabyte | MB        | 1.000.000         | $10^6$    |
| Gigabyte | GB        | 1.000.000.000     | $10^9$    |
| Terabyte | TB        | 1.000.000.000.000 | $10^{12}$ |

### IEC-Einheiten (Binärsystem)

IEC-Einheiten basieren auf der Potenz zur Basis 2. Diese entsprechen der physischen Adressierung in Computersystemen. Sie finden Anwendung bei der Angabe von Arbeitsspeicher-Kapazitäten und der internen Berechnung von Dateigrößen in vielen Betriebssystemen.

| Einheit  | Abkürzung | Wert in Byte      | Potenz   |
| :------- | :-------- | :---------------- | :------- |
| Kibibyte | KiB       | 1.024             | $2^{10}$ |
| Mebibyte | MiB       | 1.048.576         | $2^{20}$ |
| Gibibyte | GiB       | 1.073.741.824     | $2^{30}$ |
| Tebibyte | TiB       | 1.099.511.627.776 | $2^{40}$ |

## Relevanz in der Praxis

Die Differenz zwischen den Systemen führt bei [Speicherlösungen](speicherloesungen) regelmäßig zu Unklarheiten. Hardwarehersteller geben die Kapazität von Festplatten oder SSDs fast ausschließlich in SI-Einheiten (GB/TB) an, da dies zu höheren Nominalwerten führt.

Viele Betriebssysteme berechnen den Speicherplatz jedoch binär (Faktor 1.024), nutzen dabei aber teils fälschlicherweise weiterhin SI-Abkürzungen. Eine als „1 TB“ deklarierte Festplatte wird daher oft nur mit ca. „931 GB“ (effektiv GiB) angezeigt. Mit steigender Kapazität wächst die Abweichung: Während der Unterschied bei einem Gigabyte ca. 7,4 % beträgt, liegt er bei einem Terabyte bereits bei rund 10 %.

## Umrechnung

Die Überführung eines Wertes von einem System in das andere erfolgt über die allgemeine Formel:

$$ \text{Ergebnis} = \frac{\text{Wert} \times \text{Quellfaktor}}{\text{Zielfaktor}} $$

### Beispiel: 500 GB in GiB

Ein Speichermedium mit einer Herstellerangabe von 500 GB (SI) soll in die binäre Entsprechung GiB (IEC) umgerechnet werden.

1. Quellfaktor (GB): $10^9$
2. Zielfaktor (GiB): $2^{30}$

$$ \text{Ergebnis} = \frac{500 \times 10^9}{2^{30}} \approx \frac{500.000.000.000}{1.073.741.824} \approx 465,66 \text{ GiB} $$

## Fehlerquellen und Anwendungshinweise

- **Präfix-Disziplin:** „kB“ steht für 1.000 Byte, „KiB“ für 1.024 Byte. Die Verwendung von „KB“ (großes K) für binäre Kilo-Werte ist verbreitet, entspricht aber nicht dem offiziellen Standard.
- **Kontextprüfung:** Angaben zum Datendurchsatz (z. B. 100 Mbit/s) beziehen sich meist auf das Dezimalsystem. Die Belegung von Datenspeichern wird hingegen oft binär interpretiert.
- **Faustformel:** Für eine schnelle Schätzung der im Betriebssystem angezeigten Kapazität kann der SI-Wert einer Festplatte mit dem Faktor 0,93 multipliziert werden.

## Selbsttest

1. Welche exakte Anzahl an Bytes entspricht einem Mebibyte (MiB)?
2. Warum weicht die Kapazitätsanzeige einer 2-TB-Festplatte in Windows von der Herstellerangabe ab?
3. In welchen technischen Bereichen werden SI-Einheiten bevorzugt zur Messung eingesetzt?
4. Wie entwickelt sich der prozentuale Unterschied zwischen dezimalen und binären Einheiten bei zunehmender Datenmenge?
