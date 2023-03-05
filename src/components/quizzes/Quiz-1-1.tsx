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
    },
    {
        question: <span>Was ist <b>kein</b> Merkmal von Urteilen a priori?</span>,
        answers: [
            {
                suggestion: <span>Strenge Allgemeinheit</span>,
                solution: <span>Das ist falsch. Strenge Allgemeinheit ist ein Merkmal von Urteilen a priori.</span>,
                correct: false
            },
            {
                suggestion: <span>Notwendigkeit</span>,
                solution: <span>Das ist falsch. Notwendigkeit ist ein Merkmal von Urteilen a priori.</span>,
                correct: false
            },
            {
                suggestion: <span>Analytizität</span>,
                solution: <span>Richtig. Analytizität ist für Kant kein Merkmal von Urteilen a priori, da es auch synthetische Urteile a priori gibt.</span>,
                correct: true
            }
        ]
    },
    {
        question: <span>Welche Wissenschaften verfügen laut Kant <b>nicht</b> über synthetische Urteile a priori?</span>,
        answers: [
            {
                suggestion: <span>Mathematik</span>,
                solution: <span>Das ist falsch. Mathematik besteht laut Kant zum großen Teil aus synthetischen Urteilen a priori.</span>,
                correct: false
            },
            {
                suggestion: <span>Naturwissenschaft</span>,
                solution: <span>Das ist falsch. Zwar ist Naturwissenschaft zum größten Teil empirisch, doch sie verfügt Kant gemäß auch über Sätze, die a priori gelten.</span>,
                correct: false
            },
            {
                suggestion: <span>Metaphysik</span>,
                solution: <span>Metaphysik besteht laut Kant aus synthetischen Urteilen a priori.</span>,
                correct: false
            },
            {
                suggestion: <span>Logik</span>,
                solution: <span>Korrekt. Logik besteht laut Kant aus analytischen Urteilen.</span>,
                correct: true
            }
        ]
    },
    {
        question: <span>Ergänze: In analytischen Urteilen ist das Prädikat…</span>,
        answers: [
            {
                suggestion: <span>...im Subjekt enthalten.</span>,
                solution: <span>Jep.</span>,
                correct: true
            },
            {
                suggestion: <span>...gleich dem Subjekt.</span>,
                solution: <span>Leider nicht. Das trifft nur auf „identische“ Urteile zu, die allenfalls als eine bestimmte Art von analytischen Urteilen aufgefasst werden können.</span>,
                correct: false
            },
            {
                suggestion: <span>...nicht im Subjekt enthalten.</span>,
                solution: <span>Leider nicht. Das träfe auf synthetische Urteile zu.</span>,
                correct: false
            },
            {
                suggestion: <span>...sehr wertvoll.</span>,
                solution: <span>Nein, das macht keinen Sinn.</span>,
                correct: false
            }
        ]
    },
    {
        question: <span>Wie würde Kant dieses Urteil klassifizieren: „Alle Preußen sind Menschen“?</span>,
        answers: [
            {
                suggestion: <span>Analytisch und a priori</span>,
                solution: <span>Richtig. Das Urteil ist analytisch und alle analytischen Urteile gelten a priori.</span>,
                correct: true
            },
            {
                suggestion: <span>Analytisch und a posteriori</span>,
                solution: <span>Leider nicht. Das Urteil ist zwar analytisch, doch sind alle analytischen Urteile a priori.</span>,
                correct: false
            },
            {
                suggestion: <span>Synthetisch und a priori</span>,
                solution: <span>Leider nicht. Das Urteil ist analytisch und somit auch a priori, da „Mensch“ in „Preuße“ enthalten ist.</span>,
                correct: false
            },
            {
                suggestion: <span>Synthetisch und a posteriori</span>,
                solution: <span>Leider nicht. Das Urteil ist analytisch und somit auch a priori, da „Mensch“ in „Preuße“ enthalten ist.</span>,
                correct: false
            }
        ]
    },
    {
        question: <span>Womit befasst sich eine Kritik der reinen Vernunft?</span>,
        answers: [
            {
                suggestion: <span>Mit den bestehenden philosophischen Systemen</span>,
                solution: <span>Leider nicht. Das bestreitet Kant explizit.</span>,
                correct: false
            },
            {
                suggestion: <span>Mit einem System aller Prinzipien der reinen Vernunft</span>,
                solution: <span>Leider nicht. Das wäre eine Transzendental-Philosophie, die über eine Kritik der reinen Vernunft insofern hinausgeht, als sie die Begriffe der reinen Vernunft vollständig zergliedert.</span>,
                correct: false
            },
            {
                suggestion: <span>Mit den Quellen und Grenzen der reinen Vernunft</span>,
                solution: <span>Richtig. Dabei werden zwar die Stammbegriffe der Vernunft behandelt, aber nicht vollständig zergliedert.</span>,
                correct: true
            },
            {
                suggestion: <span>Mit den ersten Prinzipen der Metaphysik</span>,
                solution: <span>Leider nicht. Die Kritik der reinen Vernunft befasst sich mit den ersten Prinzipien der Erkenntnis, wodurch erst Metaphysik ermöglicht wird.</span>,
                correct: false
            },
        ]
    }
]

export default function Quiz_1_1() {
    return <Quiz
        title="Einleitung"
        quiz={quiz}
        lessonId="1-1"
    />
}