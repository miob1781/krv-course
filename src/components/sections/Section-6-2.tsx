import { quiz_6_2 } from "../quizzes/quiz-6-2";
import { LessonProps } from "../../types";
import Lesson from "../../views/Lesson";
import LessonListEl from "../ui/LessonListEl";

export default function Section_6_2({ lessonData }: LessonProps) {
    return <Lesson lessonData={lessonData} quiz={quiz_6_2}>
        <LessonListEl paragraphId="6-2-1" pageNumber="A162, B202">
            Jedem Abschnitt der Grundsätze des reinen Verstandes ist ein Lehrsatz vorangestellt, der im Anschluss bewiesen wird.
            Die Formulierungen des Lehrsatzes der Axiome der Anschauung unterscheiden sich,
            kommen inhaltlich aber im Wesentlichen auf dasselbe hinaus:
            Anschauungen sind „extensive Größen“, wobei Kant diesen Begriff im Haupttext erklären wird.
        </LessonListEl>
        <LessonListEl paragraphId="6-2-2" pageNumber="B202f.">
            In der zweiten Auflage hat Kant in den meisten Fällen einen prägnanten Beweis des Lehrsatzes ergänzt,
            welcher dem eigentlichen Haupttext vorangestellt ist.
        </LessonListEl>
        <LessonListEl paragraphId="6-2-3">
            Der Beweis der Axiome der Anschauung beruht darauf,
            dass alle Anschauungen in den Formen von Raum und Zeit gegeben werden und für Wahrnehmung
            eine Synthesis der Apprehension erforderlich ist.
            Da Apprehension nur dadurch möglich ist, dass ein Gleichartiges zu einem anderen hinzugefügt wird,
            und dieses wiederum nur möglich ist, wenn diese Gegenstände Größen sind, sind alle Anschauungen Größen.
            Kant fügt noch hinzu, dass es sich um <b>extensive</b> Größen handelt – ein Begriff, den er erst im Haupttext erklärt.
        </LessonListEl>
        <LessonListEl paragraphId="6-2-4" pageNumber="A162f./B203f.">
            <i>„Eine extensive Größe nenne ich diejenige…“</i> – Jeder Gegenstand ist (zumindest in Kants Sprachgebrauch) eine Größe,
            da man von ihm sagen kann, wie viel er in einer bestimmten Hinsicht ist.
            Eine extensive Größe ist eine Größe, bei der die Teile das Ganze möglich machen.
            Das unterscheidet sie von <b>intensiven</b> Größen, von denen in den Antizipationen der Wahrnehmung die Rede sein wird.
            Da bei räumlichen und zeitlichen Ausdehnungen die Teile das Ganze möglich machen,
            handelt es sich bei diesen um extensive Größen. Extensive Größen haben daher ein Wie-viel an Raum oder ein Wie-viel an Zeit.
        </LessonListEl>
        <LessonListEl paragraphId="6-2-5">
            Kant wiederholt das Lehrstück, dass Anschauungen durch eine sukzessive Synthesis apprehendiert werden müssen,
            um ins Bewusstsein aufgenommen zu werden.
            Da Erscheinungen nur durch eine sukzessive Synthesis erkannt werden können, sind sie nie einfache Vorstellungen,
            sondern „Aggregate“ von einer Vielheit von Teilen. Das bedeutet, dass Erscheinungen extensive Größen sind.
        </LessonListEl>
        <LessonListEl paragraphId="6-2-6">
            Gemäß dem obersten Grundsatz der synthetischen Urteile sind die Bedingungen der Erfahrung
            zugleich Bedingungen der Gegenstände der Erfahrung.
            Der Grundsatz der Axiome der Anschauung zeigt, dass wegen der Eigenschaft der Apprehension,
            nur gleichartige Größen einander hinzufügen zu können, was nur bei extensiven Größen möglich ist,
            es eine Bedingung der Erfahrung ist, dass alle Anschauungen extensive Größen sind.
            Daher ist es auch eine Bedingung der Gegenstände der Erfahrung, dass sie extensive Größen sind.
        </LessonListEl>
        <LessonListEl paragraphId="6-2-7" isQuestion>
            Wenn Erscheinungen nur durch eine sukzessive Synthesis erkannt werden können, setzt das voraus,
            dass die Synthesis bei einer einfachen Vorstellung starten muss, um nach und nach die Teile der Erscheinung hinzuzufügen?
        </LessonListEl>
        <LessonListEl paragraphId="6-2-8" pageNumber="A163/B204">
            <i>„Auf diese sukzessive Synthesis der produktiven Einbildungskraft...“</i> – Die Geometrie handelt von räumlichen Größen
            und die geometrischen Axiome beruhen auf der Erzeugung dieser Größen durch die produktive Einbildungskraft.
            Die mathematischen Axiome sind es, welche dem Kapitel den Namen geben (vgl. B162/B202) – wobei offenbleibt,
            ob es nur in der Geometrie Axiome gibt.
        </LessonListEl>
        <LessonListEl paragraphId="6-2-9" pageNumber="A163/B204-A165/B206">
            <i>„Was aber die Größe…“</i> – Axiome sind unmittelbar gewisse Sätze, aber nicht jeder unmittelbar gewisse Satz ist ein Axiom.
            Denn die analytischen Schlussregeln der Mathematik sind ebenso wenig Axiome wie die „Zahlformeln“ (Berechnungen).
        </LessonListEl>
        <LessonListEl paragraphId="6-2-10" pageNumber="A165f./B206f.">
            <i>„Dieser transzendentale Grundsatz der Mathematik der Erscheinungen…“</i> – Hier beschäftigt sich Kant mit dem Problem,
            warum Mathematik auf die Wirklichkeit, insbesondere die Erscheinungen, anwendbar ist.
            Die Fragestellung ist: Was berechtigt uns dazu,
            physikalische Ereignisse mathematisch zu erfassen oder auch nur Geld zu zählen?
            Oder, um bei Kants Beispiel zu bleiben, warum folgt aus der mathematisch beweisbaren unendlichen Teilbarkeit
            eines mathematischen Raums die unendliche Teilbarkeit des physikalischen Raums?
            Kants Antwort ist, dass die Mathematik von extensiven Größen handelt, und da Erscheinungen extensive Größen sind,
            haben die Sätze der Mathematik Gültigkeit für Erscheinungen.
        </LessonListEl>
    </Lesson>
}