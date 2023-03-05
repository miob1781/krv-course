import { QuizPart } from "../../types";
import Quiz from "../../views/Quiz";

const quiz: QuizPart[] = [
    {
        question: <span>Welchen Satz vertritt Kant?</span>,
        answers: [
            {
                suggestion: <span>Anschauungen ohne Begriffe sind leer, Gedanken ohne Inhalt sind blind.</span>,
                solution: <span>Leider nicht. Anschauungen ohne Begriffe sind blind, Gedanken ohne Inhalt sind leer.</span>,
                correct: false
            },
            {
                suggestion: <span>Anschauungen und Begriffe sind Quellen der Erkenntnis, die je für sich, unabhängig voneinander, Erkenntnisse ergeben können.</span>,
                solution: <span>Leider nicht. Laut Kant können Anschauung und Begriffe nur in Verbindung Erkenntnis erreichen.</span>,
                correct: false
            },
            {
                suggestion: <span>Ein reiner Begriff enthält die reine Form des Denkens überhaupt.</span>,
                solution: <span>Korrekt.</span>,
                correct: true
            },
            {
                suggestion: <span>Als Vermögen der Spontaneität kann der Verstand Anschauungen auch ohne Empfindung hervorbringen.</span>,
                solution: <span>Leider nicht. Der Verstand bringt Begriffe und Urteile hervor, aber nicht Anschauungen.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Was trifft <b>nicht</b> zu?</span>,
        answers: [
            {
                suggestion: <span>Logik ist die Wissenschaft von den Verstandesregeln, also den Regeln des Denkens.</span>,
                solution: <span>Leider nicht. Dieser Satz ist richtig.</span>,
                correct: false
            },
            {
                suggestion: <span>Logik wird unterteilt in allgemeine Logik und transzendentale Logik.</span>,
                solution: <span>Genau, dieser Satz ist falsch. Logik wird unterteilt in allgemeine und besondere Logik; und transzendentale Logik ist eine Form der besonderen Logik.</span>,
                correct: true
            },
            {
                suggestion: <span>Allgemeine Logik wird unterteilt in reine Logik und angewandte Logik.</span>,
                solution: <span>Leider nicht. Dieser Satz ist richtig.</span>,
                correct: false
            },
            {
                suggestion: <span>Während die allgemeine Logik von den allgemeinen Regeln des Denkens handelt, handelt die besondere Logik von den Regeln des Denkens in einer bestimmten Wissenschaft.</span>,
                solution: <span>Leider nicht. Dieser Satz ist richtig.</span>,
                correct: false
            },
            {
                suggestion: <span>Die allgemeine Logik abstrahiert von allem Inhalt des Denkens, während die transzendentale Logik den Ursprung und die Bedingungen der Möglichkeit des reinen Denkens betrachtet.</span>,
                solution: <span>Leider nicht. Dieser Satz ist richtig.</span>,
                correct: false
            }
        ]
    },
    {
        question: <span>Was wäre laut Kant ein Beispiel für eine transzendentale Erkenntnis?</span>,
        answers: [
            {
                suggestion: <span>Die Winkelsumme eines Dreiecks beträgt 180 Grad.</span>,
                solution: <span>Leider nicht. Das ist keine transzendentale Erkenntnis, denn transzendentale Erkenntnisse handeln davon, wie bestimmte Vorstellungen a priori möglich sind.</span>,
                correct: false
            },
            {
                suggestion: <span>Ein Satz, der sich widerspricht, ist falsch.</span>,
                solution: <span>Leider nicht. Das ist keine transzendentale Erkenntnis, denn transzendentale Erkenntnisse handeln davon, wie bestimmte Vorstellungen a priori möglich sind.</span>,
                correct: false
            },
            {
                suggestion: <span>Der Raum ist die Form der Anschauung.</span>,
                solution: <span>Korrekt. Das ist eine transzendentale Erkenntnis.</span>,
                correct: true
            },
            {
                suggestion: <span>Die Sonne erwärmt den Stein.</span>,
                solution: <span>Leider nicht. Das ist keine transzendentale Erkenntnis, denn transzendentale Erkenntnisse handeln davon, wie bestimmte Vorstellungen a priori möglich sind.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Was ist die Nominaldefinition („Namenserklärung“) von „Wahrheit“?</span>,
        answers: [
            {
                suggestion: <span>Übereinstimmung von Erkenntnis und Gegenstand</span>,
                solution: <span>Richtig.</span>,
                correct: true
            },
            {
                suggestion: <span>Widerspruchsfreiheit</span>,
                solution: <span>Leider nicht. Die Nominaldefinition von „Wahrheit“ ist die Übereinstimmung von Erkenntnis und Gegenstand. Widerspruchsfreiheit ist eine notwendige Bedingung von Wahrheit, aber keine hinreichende.</span>,
                correct: false
            },
            {
                suggestion: <span>Der eine melkt den Bock, der andere hält ein Sieb darunter.</span>,
                solution: <span>Haha! Nein, die Nominaldefinition von „Wahrheit“ ist die Übereinstimmung von Erkenntnis und Gegenstand.</span>,
                correct: false
            },
            {
                suggestion: <span>Es gibt keine Nominaldefinition von „Wahrheit“, weil bei einem allgemeinen Kriterium von allem Inhalt der Erkenntnis abstrahiert wird.</span>,
                solution: <span>Leider nicht. Es gibt zwar keine Realdefinition von „Wahrheit“, aber die Nominaldefinition von „Wahrheit“ ist die Übereinstimmung von Erkenntnis und Gegenstand.</span>,
                correct: false
            }
        ]
    },
    {
        question: <span>Welcher Satz trifft <b>nicht</b> zu?</span>,
        answers: [
            {
                suggestion: <span>Der Satz des Widerspruchs ist ein negatives, formales Kriterium der Wahrheit.</span>,
                solution: <span>Leider nicht. Dieser Satz ist korrekt.</span>,
                correct: false
            },
            {
                suggestion: <span>Ein allgemeines Kriterium ist in jedem Fall eine Realdefinition.</span>,
                solution: <span>Richtig, dieser Satz ist falsch. Der Satz vom Widerspruch ist zwar ein allgemeines Kriterium, aber keine Realdefinition, da er nur ein negatives Kriterium darstellt.</span>,
                correct: true
            },
            {
                suggestion: <span>Ein allgemeines, materielles Wahrheitskriterium müsste von allem Inhalt der Erkenntnis abstrahieren, was unmöglich ist.</span>,
                solution: <span>Leider nicht. Dieser Satz ist korrekt.</span>,
                correct: false
            },
            {
                suggestion: <span>Wenn es ein allgemeines und positives Wahrheitskriterium gäbe, dann wäre die allgemeine Logik ein Organon, das die Erkenntnis erweitert.</span>,
                solution: <span>Leider nicht. Dieser Satz ist korrekt.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Wovon handelt die transzendentale Analytik?</span>,
        answers: [
            {
                suggestion: <span>Vom Ursprung und den Bedingungen der Möglichkeit des reinen Denkens</span>,
                solution: <span>Korrekt.</span>,
                correct: true
            },
            {
                suggestion: <span>Von Begriffen, Urteilen und Schlüssen</span>,
                solution: <span>Leider nicht. Das wird in der Analytik der allgemeinen Logik behandelt.</span>,
                correct: false
            },
            {
                suggestion: <span>Von den Fehlschlüssen, welche das reine Denken zum Organon machen wollen, wodurch wir unsere Kenntnisse von Gegenständen erweitern</span>,
                solution: <span>Leider nicht. Das ist das Thema der transzendentalen Dialektik.</span>,
                correct: false
            },
            {
                suggestion: <span>Von den allgemeinen Regeln des Denkens</span>,
                solution: <span>Leider nicht. Das ist das Thema der allgemeinen Logik.</span>,
                correct: false
            },
        ]
    },
]

export default function Quiz_3_1() {
    return <Quiz
        lessonId="3-1"
        quiz={quiz}
        title="Einleitung zur Transzendentalen Logik"
    />
}