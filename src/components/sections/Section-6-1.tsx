import { quiz_6_1 } from "../../consts/quizzes/quiz-6-1";
import { LessonProps } from "../../types";
import Lesson from "../../views/Lesson";
import LessonListEl from "../ui/LessonListEl";

export default function Section_6_1({ lessonData }: LessonProps) {
    return <Lesson lessonData={lessonData} quiz={quiz_6_1}>
        <LessonListEl paragraphId="6-1-1" pageNumber="A148/B187-A150/B189">
            Kant schreitet nun zu den Grundsätzen des reinen Verstandes,
            zu welchen die transzendentale Urteilskraft dank des Schematismus der reinen Verstandesbegriffe befähigt ist.
            Diese sind deswegen Grundsätze,
            weil andere Sätzen aus ihnen folgen und sie nicht aus weiteren objektiven Grundsätzen abgeleitet sind.
            Dennoch bedürfen sie eines Beweises, da sie nicht (wie mathematische Axiome) unmittelbar gewiss sind,
            sondern aus den subjektiven Quellen des Verstandes abgeleitet werden müssen.
        </LessonListEl>
        <LessonListEl paragraphId="6-1-2" pageNumber="A150/B189-A153/B193">
            Der oberste Grundsatz aller analytischen Urteile ist der Satz vom Widerspruch.
            Er wird hier vor allem zur Unterscheidung vom höchsten Grundsatzes aller synthetischen Urteile angeführt.
            Der Satz des Widerspruchs ist eine hinreichende Bedingung aller analytischen Urteile,
            aber nur eine notwendige Bedingung aller synthetischen Urteile. Kant legt Wert darauf,
            dass in der Formulierung des Satzes vom Widerspruch keine zeitliche Bedingung vorkommt.
            Dieser Einwand ist übrigens zuvor von Moses Mendelssohn gegen Kant erhoben worden
            und wurde dann von letzterem als richtig anerkannt.
        </LessonListEl>
        <LessonListEl paragraphId="6-1-3" pageNumber="A154/B193-A158/B197">
            Der oberste Grundsatz aller synthetischen Urteile a priori leitet sich im Wesentlichen
            aus der transzendentalen Deduktion der reinen Verstandesbegriffe her.
            Denn dort ist die objektive Realität der Kategorien dadurch gezeigt worden,
            dass nur durch die synthetische Einheit der Apperzeption Erfahrung möglich ist.
            Diese hängt wiederum an weiteren Bedingungen: Urteilsfunktionen ermöglichen die Einheit einer Erkenntnis
            (denn Erfahrung ist empirische Erkenntnis), Kategorien ermöglichen die Einheit der Synthesis der Einbildungskraft, usw.
            Da Urteile objektiv gültig sind, wenn ein Objekt der möglichen Erfahrung unter sie subsumiert werden kann,
            ist die Möglichkeit der Erfahrung das höchste Prinzip aller synthetischen Urteile a priori.
            Oder in Kants Sprache: <i>„ein jeder Gegenstand steht unter den notwendigen Bedingungen
                der synthetischen Einheit des Mannigfaltigen der Anschauung in einer möglichen Erfahrung“</i> (A158/B197).
            Die Grundsätze des Verstandes (z.B. der Grundsatz der Beharrlichkeit der Substanz) beruhen also allesamt auf dem Prinzip,
            dass ohne sie Erfahrung nicht möglich wäre.
        </LessonListEl>
        <LessonListEl paragraphId="6-1-4" pageNumber="A156/B195">
            <i>„Selbst der Raum und die Zeit…“</i> – Es ist nicht ohne Weiteres ersichtlich, warum Raum und Zeit Schemata sein sollen.
            Sie können nicht die Schemata von mathematischen Begriffen sein, da für diese spezifischere Schemata erforderlich sind.
            Zudem ist kaum verständlich, warum Kant hier die reproduktive Einbildungskraft erwähnt und nicht die produktive.
        </LessonListEl>
        <LessonListEl paragraphId="6-1-5" pageNumber="A158/B197">
            <i>„die Bedingungen der <b>Möglichkeit der Erfahrung</b> überhaupt
                sind zugleich Bedingungen der <b>Möglichkeit</b> der <b>Gegenstände der Erfahrung</b>“</i> – Dieser Satz
            bedeutet im Grunde dasselbe wie die Behauptung vom Ende der transzendentalen Deduktion,
            dass die Kategorien den Gegenständen Gesetze vorschreiben.
            Denn eben deswegen, weil Gegenstände in unserer Erfahrung vorkommen, müssen sie den Bedingungen gerecht werden,
            unter denen wir nur Erfahrung von ihnen haben können.
        </LessonListEl>
        <LessonListEl paragraphId="6-1-6" pageNumber="A158/B197-A162/B202">
            Gemäß den vier Klassen der Kategorien stellt Kant vier Arten von Grundsätzen in einer Tafel vor,
            nämlich die „Axiomen der Anschauung“ (Quantität), „Antizipationen der Wahrnehmung“ (Qualität),
            „Analogien der Erfahrung“ (Relation) und „Postulate des empirischen Denkens überhaupt“ (Modalität).
            Die ersten beiden Arten sind die „mathematischen“ Grundsätze, letztere jedoch die „dynamischen“ Grundsätze.
            Wie die in der zweiten Auflage hinzugefügte Fußnote B201f. Anm. erläutert,
            unterscheiden sich diese durch die Art der Synthesis.
            Die mathematischen Grundsätze behandeln eine Synthesis des Gleichartigen (z.B. einen bestimmten Raum),
            die dynamischen Grundsätze hingegen die Synthesis von etwas Ungleichartigem (z.B. Ursache und Wirkung).
        </LessonListEl>
    </Lesson>
}