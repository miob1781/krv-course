import { SectionProps } from "../../types";
import Introduction from "../../views/Introduction";

export default function Section_5({sectionData}: SectionProps) {
    return <Introduction sectionData={sectionData}>
        <p>
            Die traditionellen Logik-Lehrbücher unterteilen die Logik in die Lehren von Begriffen, Urteilen und Schlüssen.
            Dem folgt Kant sowohl in der allgemeinen Logik (in seinen Logik-Vorlesungen) als auch in der transzendentalen Logik.
            In seiner Abhandlung der transzendentalen Logik innerhalb der <i>Kritik der reinen Vernunft</i> hat Kant
            die Lehre von den Begriffen mit der transzendentalen Deduktion der reinen Verstandesbegriffe abgeschlossen.
            Nun schreitet er zur Lehre von den Urteilen und damit auch zur Urteilskraft.
            Urteilskraft ist nicht das Vermögen, ein Urteil zu fällen, sondern etwas Besonderes unter etwas Allgemeinem zu subsumieren.
            Dabei zeigt sich laut Kant ein Unterschied der transzendentalen Logik zur allgemeinen Logik.
            Denn während erstere den Gebrauch der Urteilskraft nicht lehren kann,
            vermag letztere den Fall der Anwendung der Urteilskraft a priori anzugeben.
            Davon handelt die Analytik der Grundsätze, welche jetzt beginnt und sich in das sogenannte „Schematismus-Kapitel“
            und das System aller Grundsätze des reinen Verstandes unterteilt.
        </p>
        <p>
            Diese Lektion befasst sich mit dem Schematismus-Kapitel,
            welches von der sinnlichen Bedingung der Anwendung der transzendentalen Urteilskraft auf Erfahrung handelt.
            Hier zeigt sich eine Schwierigkeit: Kategorien haben keine Gegenstände in der Anschauung, die ihre Merkmale enthalten.
            Was wir zum Beispiel in der Anschauung sehen, ist, dass etwas auf etwas anderes regelmäßig folgt,
            aber nicht, dass das notwendig geschieht.
            Die Kategorie der Ursache und Wirkung ist daher nicht in der Anschauung enthalten;
            und so verhält es sich mit allen übrigen Kategorien.
            Anschauungen können demnach nicht unter Kategorien subsumiert werden.
        </p>
        <p>
            Dessen ungeachtet können Kategorien auf Erfahrung angewandt werden.
            Denn in der transzendentalen Deduktion ist gezeigt worden,
            dass nur durch Kategorien ein empirischer Gegenstand gedacht werden kann.
            Der Begriff eines empirischen Gegenstandes enthält also bereits Kategorien.
            Ebenfalls in der transzendentalen Deduktion wurde nachgewiesen,
            dass jeder Kategorie eine bestimmte Handlung der Synthesis entspricht,
            die die Einheit einer bestimmten Zeitbestimmung ermöglicht.
            Kant nennt die sinnliche Bedingung der Anwendung von Begriffen ein <b>Schema</b> und das Verfahren,
            wodurch einem Begriff eine Anschauung verschafft wird, die unter ihm fällt, den <b>Schematismus</b>.
        </p>
        <p>
            Auch empirische und mathematische Begriffe haben Schemata,
            doch der wesentliche Unterschied zu den Schemata der reinen Verstandesbegriffe ist,
            dass die Schemata der empirischen und mathematischen Begriffe diesen ein <b>Bild</b> verschaffen können.
            Ein Bild eines Begriffs ist ein Gegenstand in der Anschauung, der unter einen Begriff fällt – z.B.
            sind fünf Punkte aus Druckerschwärze ein Bild der Zahl Fünf.
            Kategorien hingegen haben keine Bilder, weil ihr Inhalt nicht in der Anschauung dargestellt werden kann.
            Doch die Schemata der Kategorien ermöglichen einen Begriff, der das Schema mit der Kategorie verbindet.
            So ist zum Beispiel das Schema der Kausalität die Folge von etwas auf etwas anderem nach einer Regel.
            In Verbindung mit der Kategorie der Kausalität erhält man dann den Begriff von einer zeitlichen Ursache,
            auf welche zeitlich eine Wirkung nachfolgt.
            In der Literatur wird das als die <b>schematisierte</b> Kategorie der Kausalität bezeichnet im Unterschied zu den <b>reinen</b> Kategorie,
            welche das Schema nicht enthält. Da Anschauungen keinen kategorialen Inhalt haben,
            gehört die schematisierte Kategorie zum Begriff des <b>Phänomenons</b> (Ding an sich im empirischen Sinn),
            welches von der spezifischen Beschaffenheit der Anschauung abstrahiert.
        </p>
        <p>
            Das Schematismus-Kapitel hebt sich etwas vom Rest der <i>Kritik der reinen Vernunft</i> ab,
            da es – so zumindest eine häufig vertretene Meinung – weniger sorgfältig geschrieben ist.
            Daher gibt es viele konkurrierende Interpretationen dieses Texts.
            Insbesondere ist strittig, was genau ein Schema ist und ob nur Kategorien Schemata haben.
            Es wäre sehr wünschenswert gewesen, wenn Kant das Kapitel in der zweiten Auflage einer gründlichen Bearbeitung unterzogen hätte.
            Dennoch hat er das Kapitel bis an sein Lebensende für eines der wichtigsten der <i>Kritik der reinen Vernunft</i> gehalten.
        </p>
    </Introduction>
}