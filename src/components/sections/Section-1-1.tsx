import Lesson from "../../views/Lesson";
import LessonListEl from "../LessonListEl";

export default function Section_1_1() {
    return (
        <Lesson
            title="Einleitung"
            pages="A1/B1-A16/B29"
            quiz={<p>QUIZ</p>}
        >
            <LessonListEl>
                In vielen Ausgaben ist der Text der ersten Auflage links und der Text der zweiten Auflage rechts abgedruckt. Das liegt daran, dass Kant die Einleitung bei der zweiten Auflage gründlich überarbeitet und ergänzt hat.
            </LessonListEl>
            <LessonListEl>
                Denke daran: Die Seitenzahlen der ersten Auflage werden mit „A“ und die der zweiten mit „B“ angeführt. Es ist gute Praxis, beide Seitenzahlen (man nennt sie auch „Paginierungen“) anzugeben, wenn eine Textstelle in beiden Auflagen vorkommt. Zum Beispiel ist der Satz: „Gedanken ohne Inhalt sind leer, Anschauungen ohne Begriffe sind blind“, bei A51/B75 zu finden. Das mag am Anfang mühsam erscheinen, aber man gewöhnt sich dran.
            </LessonListEl>
            <LessonListEl pageNumber="B1">
                Unterscheidung zwischen Erkenntnis, die „mit“ der Erfahrung beginnt, und solcher, die „aus“ der Erfahrung entspringt. Nur letztere ist empirisch/a posteriori, weil bei ihr die Erfahrung die Quelle der Erkenntnis ist. Doch erstere ist nicht-empirisch/a priori, da man zwar erst mal Erfahrung braucht, um sich über diese Art der Erkenntnis Gedanken zu machen, ihre Quellen jedoch nicht in der Erfahrung liegen. Laut Kant hat sogar Erfahrung Elemente, die a priori erkannt werden.
            </LessonListEl>
            <LessonListEl isQuestion={true}>
                Versuche, dadurch den Satz zu verstehen: „Der Zeit nach geht also keine Erkenntnis in uns vor der Erfahrung vorher, und mit dieser fängt alle an.“ (B1)
            </LessonListEl>
            <LessonListEl pageNumber="B2" isQuestion={true}>
                Erkläre den Unterschied zwischen „a priori“ bzw. “nicht-empirisch“ und „a posteriori“ bzw. „empirisch“ mit eigenen Worten. Ist Physik a priori oder a posteriori? Könnte sie vielleicht sogar von beidem etwas haben?
            </LessonListEl>
            <LessonListEl>
                Übrigens bedeutet „a priori“ wörtlich „im Vorhinein“ und „a posteriori“ heißt „im Nachhinein“. Es ist in der Forschung umstritten, inwiefern „a priori“ mit „nicht-empirisch“ und „a posteriori“ mit „empirisch“ gleichzusetzen sind.
            </LessonListEl>
            <LessonListEl pageNumber="B2f.">
                Kant nennt eine Erkenntnis „schlechterdings“ (= völlig) a priori, wenn die Quelle überhaupt nicht in der Erfahrung liegt. Das Beispiel mit dem Haus ist nur im uneigentlichen Sinn a priori; denn man konnte aus den bekannten Naturgesetzen zwar ableiten, dass das Haus einstürzen würde, doch diese Gesetze kenne ich nur aus der Erfahrung. Kant bezeichnet diese Art der Erkenntnis gelegentlich als „comparative a priori“, doch in der Regel meint „a priori“, dass etwas völlig ohne Erfahrung erkannt wird.
            </LessonListEl>
            <LessonListEl></LessonListEl>
            <LessonListEl></LessonListEl>
            <LessonListEl></LessonListEl>
            <LessonListEl></LessonListEl>
        </Lesson>
    )
}