import Lesson from "../../views/Lesson";
import { quiz_3_1 } from "../quizzes/quiz-3-1";
import LessonListEl from "../ui/LessonListEl";
import { LessonProps } from "../../types";

export default function Section_3_1({ lessonData }: LessonProps) {
    return <Lesson lessonData={lessonData} quiz={quiz_3_1}>
        <LessonListEl paragraphId="3-1-1" pageNumber="A50/B74-A52/B76">
            Hier beginnt der zweite Teil der Transzendentalen Elementarlehre,
            in welcher sich Kant mit der Transzendentalen Logik beschäftigt.
            Dieser Teil, welcher etwa drei Viertel der <i>Kritik der reinen Vernunft</i> umfasst,
            untersucht das Vermögen des Verstandes bzw. der Vernunft.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-2">
            Zunächst wiederholt Kant das Lehrstück von den zwei Stämmen der Erkenntnis,
            die nur gemeinsam Erkenntnis ergeben können.
            Wie auch bei der Anschauung gibt es reine Begriffe (die keine Empfindung zum Inhalt haben)
            und empirische Begriffe (die Empfindung zum Inhalt haben).
            Ein reiner Begriff enthält „allein die Form des Denkens eines Gegenstandes überhaupt“ (A51/B75). <b>Logik</b> ist
            die Wissenschaft von den Regeln dieses Denkens.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-3" pageNumber="A52/B76-A55/B79">
            Logik ist entweder <b>allgemeine</b> oder <b>besondere</b> Logik.
            Die allgemeine Logik handelt vom allgemeinen Verstandesgebrauch,
            die besondere Logik von der Logik besonderer Wissenschaften.
            Die allgemeine Logik ist zugleich <b>reine</b> Logik, weil sie a priori ist.
            Sie ist kein „Organon“, aus welchem sich neue Erkenntnisse ableiten lassen,
            sondern nur ein „Kanon“, welcher Grundsätze zum richtigen Gebrauch des Verstandes enthält.
            Was Kant über <b>angewandte</b> Logik sagt, ist nicht sonderlich erheblich.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-4" isQuestion>
            Es ist bei Kants begrifflichen Unterscheidungen oft hilfreich, sich diese in einem Schaubild zu verdeutlichen.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-5" pageNumber="A55/B79-A57/B82">
            Eine Erkenntnis heißt <b>transzendental</b>, wenn sie sich darauf bezieht,
            wie (synthetische) Erkenntnisse a priori möglich sind.
            Die Wissenschaft davon, wie Begriffe a priori möglich sind und einen Bezug auf Gegenstände haben können,
            heißt <b>transzendentale Logik</b>.
            Sie unterscheidet sich dadurch von der allgemeinen Logik, dass letztere von allem Inhalt des Denkens abstrahiert
            (also auch davon, ob es rein oder empirisch ist),
            während erstere den Ursprung und die Bedingungen der Möglichkeit des reinen Denkens thematisiert.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-6">
            Wie leicht zu erkennen ist, hat Kant einen sehr weiten Logikbegriff, der nicht mit der „formalen Logik“ gleichzusetzen ist,
            wie sie heute im ersten Semester gelehrt wird, wenn man Philosophie studiert.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-7" isQuestion>
            Falls du dich schon mit formaler Logik beschäftigt hast:
            Worin würdest du die Gemeinsamkeiten und Unterschiede zur allgemeinen Logik in Kants Sinn sehen bzw. vermuten?
        </LessonListEl>
        <LessonListEl paragraphId="3-1-8" pageNumber="A57/B82">
            <i>„Diallele“</i> = Zirkelschluss, also ein Fehlschluss, bei dem Sätze sich gegenseitig beweisen.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-9" pageNumber="A58/B82">
            <i>„Die Namenserklärung der Wahrheit…“</i> – „Erklärung“ bedeutet bei Kant meistens Definition.
            Eine <b>Nominaldefinition</b> (= „Namenserklärung“) erläutert einen Begriff durch andere Begriffe,
            während eine <b>Realdefinition</b> ein allgemeines Kriterium angibt,
            wodurch die Möglichkeit des Gegenstands des definierten Begriffs aufgezeigt wird (vgl. A241f. Anm.).
            Der Ausdruck „das allgemeine und sichere Kriterium der Wahrheit“ verdeutlicht,
            dass es Kant um die Möglichkeit einer Realdefinition von „Wahrheit“ geht.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-10">
            <i>„Übereinstimmung der Erkenntnis mit ihrem Gegenstande“</i> – Kants Nominaldefinition von „Wahrheit“ zeigt,
            dass er eine Korrespondenztheorie der Wahrheit (im weitesten Sinn) vertritt.
            Das heißt, ein Satz ist wahr, wenn der durch ihn ausgedrückte Sachverhalt der Fall ist.
            So ist zum Beispiel der Satz „Kant ist der Autor der Kritik der reinen Vernunft“ genau dann wahr,
            wenn Kant der Autor der Kritik der reinen Vernunft ist.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-11" pageNumber="A58f./B82">
            Kant unterscheidet nun zwischen einem materiellen und einem formalen Kriterium der Wahrheit.
            Ein materielles Kriterium ist unmöglich, weil die Materie der Erkenntnis deren Inhalt ist
            und am Inhalt einer Erkenntnis – ohne Betrachtung des Gegenstands, auf den sie sich bezieht – nicht entschieden werden kann,
            ob die Erkenntnis wahr ist.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-12" pageNumber="A59/B83">
            <i>„ungereimt“</i> = absurd
        </LessonListEl>
        <LessonListEl paragraphId="3-1-13" pageNumber="A59f./B83f.">
            Ein formales Kriterium – wenn auch nur ein negatives – ist jedoch möglich,
            denn eine Erkenntnis ist falsch, wenn sie sich widerspricht.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-14" isQuestion>
            Überlege, warum Kant in der Einleitung in die allgemeine Logik
            die Frage nach der Möglichkeit eines allgemeinen Wahrheitskriteriums stellt.
            Was ist der thematische Bezug zur allgemeinen Logik?
        </LessonListEl>
        <LessonListEl paragraphId="3-1-15" pageNumber="A60/B84-A62/B86">
            Sofern die allgemeine Logik als Kanon und nicht als Organon betrieben wird, ist sie analytisch.
            Doch sobald sie als Organon betrachtet wird, das für sich zur Erwerbung neuer Erkenntnisse hinreicht,
            wird sie dialektisch (das heißt, sie verfällt in Fehlschlüsse).
            Die <b>Analytik</b> der allgemeinen Logik betrachtet daher die Regeln des richtigen Verstandesgebrauchs,
            während die <b>Dialektik</b> der allgemeinen Logik die Fehlschlüsse aufdeckt,
            durch die wir die Logik als Organon zu benutzen geneigt sind.
        </LessonListEl>
        <LessonListEl paragraphId="3-1-16" pageNumber="A62/B87-A64/B88">
            Ebenso wie die allgemeine Logik kann auch die transzendentale Logik analytisch und dialektisch werden.
            Kant unterteilt daher die transzendentale Logik in eine <b>transzendentale Analytik</b> und eine <b>transzendentale Dialektik</b>.
        </LessonListEl>
    </Lesson>
}