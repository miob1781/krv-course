import { quiz_4_1 } from "../../consts/quizzes/quiz-4-1";
import { LessonProps } from "../../types";
import Lesson from "../../views/Lesson";
import LessonListEl from "../ui/LessonListEl";

export default function Section_4_1({lessonData}: LessonProps) {
    return <Lesson lessonData={lessonData} quiz={quiz_4_1}>
        <LessonListEl paragraphId="4-1-1" pageNumber="A84f./B116f.">
            Der Begriff <b>Deduktion</b> ist aus der Rechtswissenschaft übernommen,
            ebenso wie die Unterscheidung zwischen „quid facti“ und „quid juris“.
            Ersteres betrifft bei einem Rechtsstreit die Frage, was vorgefallen ist, letzteres die Frage, was rechtens ist.
            Die Begriffe, die wir haben, entsprechen dem quid facti,
            während die <b>objektive Realität</b> dieser Begriffe analog zum quid juris ist.
            Denn objektive Realität bedeutet, dass es ein (zumindest mögliches) Objekt gibt, das dem Begriff entspricht
            (ein sehr ähnlicher Begriff ist <b>objektive Gültigkeit</b>).
            Es ist gleichsam illegal, einen Begriff zu verwenden, der keine objektive Realität hat
            (zumindest, wenn man für ihn objektive Realität beansprucht).
            Der Nachweis der objektiven Realität ist die Deduktion dieses Begriffs.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-2">
            Bei empirischen Begriffen erübrigt sich eine Deduktion, weil die objektive Realität unmittelbar dadurch gezeigt werden kann,
            dass die Gegenstände des Begriffs in der Erfahrung vorkommen.
            Doch bei Begriffen wie „Glück“ oder „Schicksal“, die nicht aus der Erfahrung abgeleitet werden können, sieht das anders aus.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-3" pageNumber="A85/B117">
            Eine <b>transzendentale Deduktion</b> beweist die objektive Realität von Begriffen a priori.
            Eine <b>empirische Deduktion</b> hingegen ist keine Deduktion im oben definierten Sinn,
            da sie nicht die Rechtmäßigkeit des Gebrauchs des Begriffs, sondern das „Factum“ (mithin das quid facti) betrifft.
            Bei empirischen Begriffen wird jedoch durch die empirische Deduktion zugleich die Rechtmäßigkeit gezeigt.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-4" pageNumber="A85f./B118-A87/B119">
            Eine empirische Deduktion von Begriffen a priori ist nicht möglich, weil sie nicht empirisch gebildet werden können.
            Daher muss von diesen Begriffen eine transzendentale Deduktion geführt werden.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-5" pageNumber="A87/B119-A91/B123">
            Nachdem Kant gezeigt hat, dass von nicht-empirischen Begriffen keine empirische Deduktion möglich ist, diskutiert er nun,
            warum eine transzendentale Deduktion von ihnen unverzichtbar ist.
            Der Grund dafür ist,
            dass ohne eine solche Deduktion die Reichweite und Grenzen des richtigen Gebrauchs des Begriffs nicht bestimmt werden könnten.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-6">
            Die transzendentale Deduktion von Raum und Zeit ist, so Kant hier, in der Transzendentalen Ästhetik durch den Nachweis erfolgt,
            dass sie Formen der uns gegebenen Erscheinungen sind.
            Die objektive Realität von Raum und Zeit wird daher zwar nicht direkt durch Erfahrung gezeigt, jedoch dadurch,
            dass Raum und Zeit notwendige Bedingungen der Möglichkeit der Erscheinungen sind.
            Man pflegt, dies ein „transzendentales Argument“ zu nennen,
            da aus der Existenz der Gegenstände und den Bedingungen ihrer Möglichkeit auf die Existenz dieser Bedingungen geschlossen wird.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-7">
            Wir können jedoch nicht ebenso einfach aus der Wirklichkeit der in der Anschauung gegebenen Gegenstände
            auf die objektive Realität der Kategorien schließen. Denn Anschauungen enthalten nicht Kategorien und bedürfen ihrer auch nicht.
            Um den Unterschied zwischen Anschauung und Erfahrung zu verdeutlichen:
            Bei ersterer ist nur das Vermögen der Sinnlichkeit im Spiel,
            der Verstand bleibt weitgehend außen vor (wobei er allerdings durch Selbstaffektion den inneren Sinn erst möglich macht).
            Doch Erfahrung ist eine Erkenntnis der empirisch gegebenen Gegenstände, die vom Verstand bewirkt wird.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-8" pageNumber="A91f./B123f.">
            Kant betont nochmals am Beispiel des Begriffs der Ursache, dass bei Kategorien keine empirische Deduktion möglich ist.
            Denn durch Erfahrung lässt sich zwar feststellen, dass faktisch immer B auf A folgt, aber nicht, dass das notwendig geschieht,
            wie es für die Kategorie der Ursache und Wirkung erforderlich wäre.
            Wie wir unten sehen werden, ist dies eine Anspielung auf Humes kausalen Skeptizismus.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-9" pageNumber="A92/B124-A94/B127">
            Die Möglichkeit der Anschauungen beruht auf zwei Bedingungen:
            Die Materie (Empfindungen) ist dadurch möglich, dass wir von einem Gegenstand affiziert werden.
            Die Form hingegen ist dadurch möglich, dass wir Raum und Zeit als reine Anschauungen a priori hervorbringen.
            Dies will Kant auf Erfahrung übertragen: Der Materie nach ist Erfahrung dadurch möglich, dass uns Anschauungen gegeben sind,
            an denen wir eine Synthesis vollziehen können.
            Doch der Form nach ist Erfahrung dadurch möglich, dass wir die Form der Erfahrung – was also die Kategorien und dem,
            was daraus abgeleitet wird, betrifft – a priori zu Stande bringen.
            Dadurch möchte Kant die transzendentale Deduktion der Kategorien erbringen.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-10" pageNumber="B127f.">
            In der zweiten Auflage folgt ein kurzer Vergleich von Kants Ansatz mit den Herangehensweisen von Locke und Hume.
            Laut Kant hat Locke alle Erkenntnisse aus Erfahrung ableiten wollen,
            hat sich dann jedoch inkonsequenterweise an Gegenstände herangewagt, die außerhalb des Bereichs der Erfahrung liegen.
            Hume hingegen hat einen Skeptizismus in Bezug auf synthetische Erkenntnis a priori vertreten,
            weshalb er den Begriff der Kausalität für lediglich der psychischen Gewohnheit entsprungen hält.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-11" pageNumber="B128f.">
            Die „Erklärung der Kategorien“ kann möglicherweise als Realdefinition verstanden werden.
            Die Erklärung ist nicht etwa so zu verstehen,
            dass Kategorien als Begriffe in den Urteilen enthalten sein müssten – vielmehr wird gezeigt,
            dass aus der Struktur eines Urteils die Zuordnung zu den Kategorien nicht ableitbar ist – sondern
            dass die Synthesis analog zur Funktion eines Urteils ist.
        </LessonListEl>
        <LessonListEl paragraphId="4-1-12" pageNumber="A94f.">
            In der ersten Auflage folgt stattdessen die Unterscheidung zwischen drei Vermögen:
            Sinn, Einbildungskraft und Apperzeption. Hier zeigen sich bereits Unterschiede zwischen beiden Auflagen.
            Denn während die Einbildungskraft in der ersten Auflage als eigenständiges Vermögen benannt wird,
            gilt sie in der zweiten Auflage als eine Handlung des Verstandes, die an der Sinnlichkeit ausgeübt wird.
            Auch taucht der Begriff der „Synopsis“ in der zweiten Auflage nicht auf.
            Es ist hier, wie auch in anderen Fällen, nicht leicht zu entscheiden,
            ob dies nur ein Unterschied in der Darstellung oder ein tatsächlicher inhaltlicher Unterschied ist.
        </LessonListEl>
    </Lesson>
}