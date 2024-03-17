import { QuizPart } from "../../../types";

export const quiz_6_2: QuizPart[] = [
    {
        question: <span>Wodurch unterscheiden sich extensive von intensiven Größen? Wähle die beste Antwort.</span>,
        answers: [
            {
                suggestion: <span>Extensive Größen sind Gegenstände der Mathematik.</span>,
                solution: <span>Nicht ganz, auch intensive Größen sind Gegenstände der Mathematik.</span>,
                correct: false
            },
            {
                suggestion: <span>Bei extensiven Größen machen die Teile die ganze Größe möglich.</span>,
                solution: <span>Genau!</span>,
                correct: true
            },
            {
                suggestion: <span>Bei extensiven Größen macht das Ganze die Teile möglich.</span>,
                solution: <span>Nein, vielmehr machen umgekehrt die Teile das Ganze möglich.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Wahr oder falsch: Die Axiome der Anschauung besagen, dass alle Wahrnehmungen extensive Größen seien.</span>,
        answers: [
            {
                suggestion: <span>Wahr</span>,
                solution: <span>Leider nicht. Wahrnehmungen sind bewusste Vorstellungen, doch die Axiome der Anschauung besagen, dass <b>alle</b> Anschauungen – also auch unbewusste – extensive Größen seien.</span>,
                correct: false
            },
            {
                suggestion: <span>Falsch</span>,
                solution: <span>Genau, der Satz ist falsch, weil die Axiome der Anschauung besagen, dass <b>alle</b> Anschauungen, also auch unbewusste Anschauungen, extensive Größen seien. Wahrnehmungen sind ja bewusste Vorstellungen.</span>,
                correct: true
            },
        ]
    },
    {
        question: <span>Sind extensive Größen immer aus extensiven Größen zusammengesetzt?</span>,
        answers: [
            {
                suggestion: <span>Ja, denn extensive Größen sind nie einfache Teile.</span>,
                solution: <span>Genau.</span>,
                correct: true
            },
            {
                suggestion: <span>Nein, denn jede extensive Größe besteht letztlich aus einfachen Teilen, die wiederum extensive Größen sind.</span>,
                solution: <span>Leider nicht. Kant bestreitet diesen Satz in der Zweiten Antinomie.</span>,
                correct: false
            },
            {
                suggestion: <span>Nein, denn intensive Größen können Teile von extensiven Größen sein.</span>,
                solution: <span>Leider nicht, denn extensive Größen bestehen ausschließlich aus anderen extensiven Größen.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Gelten laut Kant mathematische Sätze in der Physik?</span>,
        answers: [
            {
                suggestion: <span>Nein, denn in der Physik gibt es, anders als in der Mathematik, einfache Teile.</span>,
                solution: <span>Leider nicht. Weder in der Mathematik noch in der Physik gibt es laut Kant einfache Teile.</span>,
                correct: false
            },
            {
                suggestion: <span>Nein, denn die Mathematik beruht, anders als die Physik, auf der reinen Anschauung, weshalb wir sie nicht in der Physik verwenden können.</span>,
                solution: <span>Leider nicht. Die Mathematik beruht ebenso wie die Physik auf der Anschauung, daher gelten die Sätze der Mathematik in der Physik.</span>,
                correct: false
            },
            {
                suggestion: <span>Ja, denn die Bedingungen der reinen Anschauung, auf welcher die Mathematik beruht, gelten ebenso für die Physik.</span>,
                solution: <span>So ist es.</span>,
                correct: true
            },
        ]
    },
]