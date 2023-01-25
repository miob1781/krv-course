import { QuizPart } from "../../types";
import Quiz from "../../views/Quiz";

const quiz: QuizPart[] = [
    {
        question: <span>Wie sollte folgender Satz am besten zitiert werden: „Ein großer Teil, und vielleicht der größte, von dem Geschäfte unserer Vernunft, besteht in Zergliederungen von Begriffen, die wir schon von Gegenständen haben“?</span>,
        answers: [
            {
                suggestion: <span>A5</span>,
                solution: <span>Leider nicht. Der Satz kommt in beiden Auflagen vor, daher sollte er mit der Paginierung von beiden Auflagen zitiert werden, damit man gleich weiß, in welchen Auflagen er vorkommt.</span>,
                correct: false
            },
            {
                suggestion: <span>B9</span>,
                solution: <span>Leider nicht. Der Satz kommt in beiden Auflagen vor, daher sollte er mit der Paginierung von beiden Auflagen zitiert werden, damit man gleich weiß, in welchen Auflagen er vorkommt.</span>,
                correct: false
            },
            {
                suggestion: <span>A5/B9</span>,
                solution: <span>Genau. Der Satz kommt in beiden Auflagen vor, daher sollte er mit der Paginierung von beiden Auflagen zitiert werden, damit man gleich weiß, in welchen Auflagen er vorkommt.</span>,
                correct: true
            },
            {
                suggestion: <span>S. 55</span>,
                solution: <span>Leider nicht. Man zitiert aus der Kritik der reinen Vernunft nicht nach der Seitenzählung der jeweiligen Ausgabe, sondern nach den Originalseiten der ersten und zweiten Auflage. Der Satz kommt in beiden Auflagen vor, daher sollte er mit der Paginierung von beiden Auflagen zitiert werden, damit man gleich weiß, in welchen Auflagen er vorkommt.</span>,
                correct: false
            }
        ]
    },
    {
        question: <span>Richtig oder falsch: Für Kant beginnt alle Erkenntnis <b>mit</b> der Erfahrung und entspringt zudem <b>aus</b> der Erfahrung.</span>,
        answers: [
            {
                suggestion: <span>Richtig.</span>,
                solution: <span>Leider nicht. Erkenntnis a priori wird zwar durch Erfahrung veranlasst, aber hat nicht Erfahrung zur Quelle.</span>,
                correct: false
            },
            {
                suggestion: <span>Falsch. Denn Erkenntnis a priori beginnt weder mit der Erfahrung noch speist sie sich aus der Erfahrung.</span>,
                solution: <span>Leider nicht. Erkenntnis a priori hat zwar ihre Quelle nicht in der Erfahrung, doch wird sie durch Erfahrung veranlasst und beginnt daher mit ihr.</span>,
                correct: false
            },
            {
                suggestion: <span>Falsch. Denn Erkenntnis a priori beginnt zwar mit Erfahrung, hat aber nicht Erfahrung als Quelle.</span>,
                solution: <span>Exakt.</span>,
                correct: true
            },
            {
                suggestion: <span>Falsch. Die Unterscheidung macht keinen Sinn und wird von Kant nicht vertreten.</span>,
                solution: <span>Leider nicht. Erkenntnis a priori speist sich laut Kant nicht aus der Erfahrung, aber beginnt mit der Erfahrung.</span>,
                correct: false
            }
        ]
    }
]

export default function Quiz_1_1() {
    return <Quiz
        title="Einleitung"
        quiz={quiz}
        path="/section-1"
    />
}