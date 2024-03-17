import { quiz_5_1 } from "./quizzes/quiz-5-1";
import { LessonProps } from "../../types";
import Lesson from "../../views/Lesson";
import LessonListEl from "../ui/LessonListEl";

export default function Section_5_1({ lessonData }: LessonProps) {
    return <Lesson lessonData={lessonData} quiz={quiz_5_1}>
        <LessonListEl paragraphId="5-1-1" pageNumber="A130/B169-A132/B171">
            Die Einteilung der allgemeinen Logik in die Lehren von Begriffen, Urteilen und Schlüssen
            entspricht den traditionellen Logik-Lehrbüchern.
            Neu ist bei Kant, dass diese Themen nicht nur in der allgemeinen Logik,
            sondern auch in der von ihm neu eingeführten transzendentalen Logik behandelt werden.
            Die <b>Urteilskraft</b> ist der Gegenstand der Analytik der Grundsätze.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-2" pageNumber="A132/B171-A136/B175">
            Urteilskraft ist nicht das Vermögen zu urteilen, sondern das Vermögen,
            etwas Besonderes unter eine Regel zu bringen (subsumieren).
            Eine Regel ist <i>„die Vorstellung einer allgemeinen Bedingung,
                nach welcher ein gewisses Mannigfaltige … gesetzt werden kann“</i> (A113).
            Kategorien – von denen in der Folge hauptsächlich die Rede sein wird – sind also Regeln,
            doch das gilt generell für Begriffe und allgemeine Urteile.
            Ein Beispiel für Subsumtion: Sokrates wird unter den Begriff Grieche subsumiert, da er Grieche ist.
            In der allgemeinen Logik kann das Vermögen der Urteilskraft aus dem Grund nicht „gelehrt“ werden,
            dass der richtige Gebrauch der Urteilskraft nicht aus gewissen Lehrsätzen abgeleitet, sondern nur geübt werden kann.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-3">
            Die transzendentale Logik hingegen bringt bezüglich der Urteilskraft Lehrsätze hervor,
            weil sie nicht nur die Regel, sondern auch den Fall der Anwendung der Regel a priori angibt.
            In der transzendentalen Logik besteht die Regel in den Kategorien,
            die Anwendung geschieht aber in Bezug auf die sinnliche Bedingung, unter der Kategorien gebraucht werden können.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-4" pageNumber="A137/B176">
            <i>„In allen Subsumtionen eines Gegenstands unter einen Begriff…“</i> – Der Begriff „gleichartig“ meint,
            dass der Gegenstand das Merkmal aufweist, das der Begriff ausdrückt.
            Zum Beispiel enthält ein Teller das Merkmal der Rundung, welches durch den Begriff des Kreises ausgedrückt wird.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-5">
            <i>„So hat der empirische Begriff eines Tellers…“</i> – Es wird häufig diskutiert,
            ob in diesem Satz die Begriffe durcheinandergeraten sind.
            Vermutlich ist gemeint, dass sich die Rundung, die im Begriff des Zirkels (Kreises) gedacht wird,
            in der Erscheinung eines Tellers anschauen lassen muss.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-6" pageNumber="A137f./B176f.">
            <i>„Nun sind aber reine Verstandesbegriffe…“</i> – Bei Kategorien gibt es keine Gleichartigkeit mit den Erscheinungen,
            wie sie in der Anschauung gegeben werden.
            Denn die Kategorien sind allesamt nicht in der Anschauung enthalten.
            Das mag bei Kausalität recht offensichtlich sein, aber es gilt genauso für die anderen Kategorien.
            Was meint Kant also damit, dass Kategorien „auf Erscheinungen überhaupt angewandt“ werden können?
            Er meint, dass wir in der objektiven Einheit der Apperzeption,
            die von der spezifischen Beschaffenheit der Anschauung abstrahiert, ein Objekt gemäß den Kategorien denken,
            das auch die Kategorien zum transzendentalen Inhalt hat.
            Auch durch den Schematismus erhalten Anschauungen keinen kategorialen Inhalt.
            Das ist keine unkontroverse Interpretation, aber sie wird im Folgenden zugrunde gelegt.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-7">
            <i>„Nun ist aber klar, dass es ein Drittes geben müsse…“</i> – Dieser Absatz kann leicht missverstanden werden.
            Gemeint ist nicht, dass ein transzendentales Schema auf eine gewisse Art zugleich Anschauung und Begriff sein könnte.
            Vielmehr ist ein Schema eine begriffliche Vorstellung mit einem gewissen Inhalt, der in der Sinnlichkeit gegeben wird.
            Das soll im Folgenden deutlicher werden.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-8" pageNumber="A138f./B177f.">
            <i>„Der Verstandesbegriff enthält eine reine synthetische Einheit des Mannigfaltigen überhaupt…“</i> – Hier erläutert Kant
            die verschiedenen Weisen, auf denen ein transzendentales Schema mit der Sinnlichkeit einerseits
            und mit den Kategorien andererseits gleichartig ist,
            und identifiziert das transzendentale Schema mit den <b>transzendentalen Zeitbestimmungen</b>.
            Eine transzendentale Zeitbestimmung ist mit den Kategorien gleichartig,
            da Kategorien die Regel der Synthesis der Zeitbestimmungen sind.
            Andererseits ist eine transzendentale Zeitbestimmung mit der sinnlichen Anschauung gleichartig,
            da die Zeit die Form jeder Anschauung ist.
            Man beachte, dass Kant noch nicht erklärt hat, was eine transzendentale Zeitbestimmung oder ein Schema ist.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-9" pageNumber="A139f./B178f.">
            <i>„Nach demjenigen, was in der Deduktion der Kategorien gezeigt worden…“</i> – Kant sagt in diesem Absatz lediglich,
            dass wir Kategorien nur auf Erscheinungen anwenden können und es daher nur in Bezug auf diese einen Schematismus gibt.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-10" pageNumber="A139/B178">
            <i>„von transzendentalem Gebrauche“</i> – Damit meint Kant nicht,
            dass der Gebrauch „transzendent“ ist – also auf Gegenstände jenseits der Erfahrung bezogen – sondern,
            dass wir beim Gebrauch der Kategorien davon abstrahieren, ob es Gegenstände der Erfahrung sind oder nicht.
            Das bedeutet das nachgestellte Wort „überhaupt“.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-11" pageNumber="A140/B179">
            <i>„Wir wollen diese formale und reine Bedingung der Sinnlichkeit…“</i> – Das ist die erste Definition von „Schema“,
            der weitere folgen werden.
            Die verschiedenen Charakterisierungen des Schemas habe viel Verwirrung hervorgerufen und lassen sich nicht ohne Weiteres
            miteinander vereinbaren.
            Hier haben wir es nicht mit einer allgemeinen Definition des Schemas zu tun,
            sondern nur mit einer des transzendentalen Schemas.
            Was ein <b>Schematismus</b> ist, werden wir im Folgenden besser beurteilen können.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-12" pageNumber="A140/B179">
            <i>„Das Schema ist an sich selbst jederzeit nur ein Produkt der Einbildungskraft…“</i> – Ein transzendentales Schema
            ist deswegen das Produkt der Einbildungskraft,
            weil transzendentale Zeitbestimmungen durch die Synthesis der Apprehension bewusst gemacht werden
            (dessen ungeachtet werden die Zeitbestimmungen bereits mit dem inneren Sinn gegeben,
            auch wenn wir unser Bewusstsein nicht darauf richten).
            Was Kant mit „Bild“ meint, ist nicht ganz klar,
            doch offenbar bezeichnet dieser Ausdruck eine konkrete sinnliche Vorstellung,
            die auf einen Begriff bezogen ist und unter diesen subsumiert werden kann.
            Zum Beispiel sind die fünf physischen Punkte aus Druckerschwärze im Buch ein Bild der Zahl 5.
            Im Unterschied zum Bild ist ein Schema nicht konkret, sondern hat allgemeine Merkmale.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-13" pageNumber="A140/B179f.">
            <i>„Dagegen, wenn ich eine Zahl überhaupt nur denke…“</i> – Das Denken einer Zahl ist das Haben eines Begriffs.
            Kant setzt dies nicht etwa mit der „Vorstellung einer Methode“ gleich,
            sondern sagt, dass das Denken einer Zahl dieser nahekommt.
            Entsprechend sollte auch das Schema eines Begriffs nicht mit diesem Begriff selbst gleichgesetzt werden.
            Schließlich bezeichnet Kant das Schema als die <i>„Vorstellung … von einem allgemeinen Verfahren der Einbildungskraft,
                einem Begriff sein Bild zu verschaffen“</i>.
            Das sollte vermutlich aber auch nicht wörtlich genommen werden,
            da Schemata zwar einen wesentlichen Aspekt dieses Verfahrens ausmachen, aber schwerlich mit diesem gleichgesetzt werden können.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-14" pageNumber="A140/B180-A142/B181">
            <i>„In der Tat liegen unsern reinen sinnlichen Begriffen nicht Bilder der Gegenstände…“</i> – Wenn Kant sagt,
            dass Bilder nicht die Grundlage für „reine sinnliche Begriffe“ sind – z.B. ein Dreieck („Triangel“) – dann liegt das daran,
            dass Bilder nicht allgemein sind.
            Das gilt auch für empirische Anschauungen im Verhältnis zu empirischen Begriffen (Kant gibt dafür das Beispiel des Hundes).
            Nur wird daraus noch nicht klar, warum statt Begriffen den Bildern Schemata zugrunde liegen sollen.
            Der Grund scheint zu sein, dass Schemata mit den sinnlichen Eigenschaften identisch sind,
            von denen die Einbildungskraft in der Anschauung eine Einheit herstellt.
            Im Fall der reinen Verstandesbegriffe sind diese Eigenschaften die transzendentalen Zeitbestimmungen (dazu später mehr),
            bei mathematischen Begriffen die mathematischen Figuren und bei empirischen Begriffen die Gestalt der jeweiligen Gegenstände.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-15">
            Dazu passt, dass Kant neben dem reinen Vermögen der produktiven Einbildungskraft,
            durch welches die reine Synthesis gemäß den Kategorien oder auch mathematischen Begriffen erfolgt,
            noch ein <i>„empirisches Vermögen der produktiven Einbildungskraft“</i> einführt,
            welches eine Synthesis gemäß empirischen Begriffen durchführt
            und nicht mit der reproduktiven Einbildungskraft zu verwechseln ist.
            Schematismus ist das Verfahren, durch Schemata diese Synthesis zu vollziehen.
            Zu beachten ist zudem, dass das Schema nicht eine besondere Art von Vorstellungen ist,
            sondern eine besondere Art von Eigenschaften, die sich in der Anschauung finden,
            aber natürlich auch durch Begriffe gedacht werden können.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-16" pageNumber="A142/B181">
            <i>„Ohne uns nun bei einer trockenen und langweiligen Zergliederung…“</i> – Hier kulminiert die Frustration der Leserin.
            Man gewinnt den Eindruck, dass Kant an dieser Stelle wichtige Informationen ausgelassen hat.
            Es verwundert, dass Kant das Schematismus-Kapitel in der zweiten Auflage nicht überarbeitet hat,
            da es diverse Unklarheiten und Unstimmigkeiten enthält.
            Im Folgenden zählt Kant jedenfalls die Schemata der einzelnen Kategorien auf.
            Er tut dies zwar ohne Herleitung der Schemata, doch gibt es dafür einen halbwegs guten Grund.
            Denn die Anwendung des Verstands, und damit auch der Kategorien,
            auf Erfahrung ist a priori nur durch die transzendentale Doktrin der Urteilskraft möglich,
            welche erst im nachfolgenden Kapitel erörtert wird.
            Dennoch gibt Kant auch dort keine Begründung für die Zuordnung der transzendentalen Schemata zu den Kategorien.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-17" pageNumber="A142f./B182">
            Kant differenziert hier nicht zwischen den einzelnen Kategorien der Quantität, sondern behandelt sie als Klasse.
            Das Schema dieser Kategorien ist die Zahl, weil in der Synthesis der Anschauung eine Größe apprehendiert wird.
            Der Ausdruck „reines Bild“ bedeutet vermutlich dasselbe wie Bild, nur dass der Gegenstand, der die Größe veranschaulicht,
            kein empirischer Gegenstand ist, sondern in den reinen Anschauungen von Raum und Zeit besteht.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-18" pageNumber="A143/B182f.">
            Das Schema der Realität besteht in der sukzessiven Erzeugung von etwas dem Grad der Intensität nach.
            Die Schemata der Kategorien der Negation und Limitation werden nicht explizit erklärt,
            doch lassen sie sich wohl aus dem Schema der Realität ableiten.
            Eine Interpretationsschwierigkeit besteht darin, dass Kant das Schema der Realität nicht mit der Erfülltheit der Zeit,
            sondern dem Vorgang der Erfüllung gleichsetzt, was von der Behandlung der anderen Schemata abweicht.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-19" pageNumber="A144f./B183f.">
            Die Schemata der dynamischen Kategorien (also der Klassen der Relation und Modalität) werden mit nur wenigen Worten erklärt.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-20" pageNumber="A145/B184f.">
            Ebenso wie die Kategorien lassen sich die Schemata unter Klassen bringen,
            nämlich Zeitreihe (Quantität), Zeitinhalt (Quantität), Zeitordnung (Relation) und Zeitinbegriff (Modalität).
            Die Schemata sind mithin <i>„Zeitbestimmungen a priori nach Regeln“</i>.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-21" pageNumber="A145f./B185">
            Kant hebt hervor, dass durch die Schemata die Einheit der Anschauung im inneren Sinn hergestellt wird,
            da sie die Momente der Synthesis enthalten.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-22" pageNumber="A146/B185-A147/B187">
            Durch die Schemata wird der Gebrauch der Kategorien aber zugleich auf die Erscheinungen beschränkt.
            Hier führt Kant eine Unterscheidung ein,
            die in der Literatur die zwischen „schematisierten“ und „reinen“ Kategorien genannt wird.
            Reine Kategorien beinhalten nur die Kategorie als solche, schematisierte hingegen zusätzlich das Schema.
            So ist die reine Kategorie der Substanz nur die des realen Subjekts, das den Akzidenzien zugrunde liegt,
            während die schematisierte Kategorie der Begriff eines beharrlichen realen Subjekts in der Zeit ist.
        </LessonListEl>
        <LessonListEl paragraphId="5-1-23">
            Die Verwendung des Begriffs des <b>Phänomenons</b> an dieser Stelle ist kein Zufall.
            Denn dieses ist das Ding an sich im empirischen Sinn, wie es als physikalisches Objekt in einem Urteil gedacht wird,
            im Unterschied zur Erscheinung im empirischen Sinn,
            die in der zufälligen Gegebenheit eines Gegenstands in der Anschauung besteht und von Kant manchmal <b>Apparenz</b> genannt wird.
            Das Phänomenon enthält zusätzlich zum Schema (die Zeitbestimmung) die reine Kategorie, die Apparenz jedoch nicht,
            da Kategorien kein Merkmal der Anschauung sind.
        </LessonListEl>
    </Lesson>
}