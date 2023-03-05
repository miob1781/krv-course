import { QuizPart } from "../../types";
import Quiz from "../../views/Quiz";

const quiz: QuizPart[] = [
    {
        question: <span>Woraus folgt laut Kant die Apriorität der Zeit?</span>,
        answers: [
            {
                suggestion: <span>Aus der Notwendigkeit der Zeit.</span>,
                solution: <span>Richtig</span>,
                correct: true
            },
            {
                suggestion: <span>Daraus, dass die Zeit Form der inneren Anschauung ist.</span>,
                solution: <span>Nicht ganz. Die Apriorität der Zeit folgt erst daraus, dass die Zeit eine notwendige Vorstellung ist.</span>,
                correct: false
            },
            {
                suggestion: <span>Aus der Unendlichkeit der Zeit.</span>,
                solution: <span>Leider nicht. Die Apriorität der Zeit folgt aus ihrer Notwendigkeit.</span>,
                correct: false
            },
            {
                suggestion: <span>Daraus, dass die Zeit nur eine Dimension hat.</span>,
                solution: <span>Leider nicht. Die Apriorität der Zeit folgt aus ihrer Notwendigkeit.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Welche Erkenntnisse sind <b>nicht</b> erst dadurch möglich, dass die Zeit reine Anschauung ist?</span>,
        answers: [
            {
                suggestion: <span>Axiome der Zeit</span>,
                solution: <span>Leider nicht. Für die Axiome der Zeit wird vorausgesetzt, dass die Zeit reine Anschauung ist.</span>,
                correct: false
            },
            {
                suggestion: <span>Allgemeine Bewegungslehre</span>,
                solution: <span>Leider nicht. Für die allgemeine Bewegungslehre wird vorausgesetzt, dass die Zeit reine Anschauung ist.</span>,
                correct: false
            },
            {
                suggestion: <span>Geometrie</span>,
                solution: <span>Richtige Antwort. Denn für die Geometrie wird nur vorausgesetzt, dass der Raum reine Anschauung ist. </span>,
                correct: true
            },
        ]
    },
    {
        question: <span>Frage 3: Welcher Satz trifft <b>nicht</b> zu?</span>,
        answers: [
            {
                suggestion: <span>Raum und Zeit sind direkt die Formen des äußeren Sinns, während die Zeit direkt die Form des inneren Sinns ist.</span>,
                solution: <span>Leider nicht. Raum ist direkt die Form des äußeren Sinns, während Zeit direkt die Form des inneren Sinns und indirekt die Form des äußeren Sinns ist.</span>,
                correct: false
            },
            {
                suggestion: <span>Raum ist direkt die Form des äußeren Sinns, während Zeit direkt die Form des inneren Sinns und indirekt die Form des äußeren Sinns ist.</span>,
                solution: <span>Genau.</span>,
                correct: true
            },
            {
                suggestion: <span>Äußere Veränderungen werden allein durch den äußeren Sinn angeschaut.</span>,
                solution: <span>Leider nicht. Da die Zeit direkt nur die Form des inneren Sinns ist, können äußere Veränderungen nur angeschaut werden, indem durch den inneren Sinn die Abfolge von äußeren Veränderungen angeschaut wird.</span>,
                correct: false
            },
            {
                suggestion: <span>Raum und Zeit sind direkt die Formen des äußeren Sinns und indirekt die Formen des inneren Sinns.</span>,
                solution: <span>Leider nicht. Raum ist direkt die Form des äußeren Sinns, während Zeit direkt die Form des inneren Sinns und indirekt die Form des äußeren Sinns ist.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Was beschreibt Kants Auffassung am besten?</span>,
        answers: [
            {
                suggestion: <span>Wir haben Vorstellungen von einer Zeitfolge, was zeigt, dass die Zeit etwas Wirkliches, mithin eine Eigenschaft der Dinge an sich, ist.</span>,
                solution: <span>Nicht ganz. Kant sagt zwar, dass dadurch gezeigt wird, dass die Zeit etwas Wirkliches ist, aber nicht, dass sie eine Eigenschaft der Dinge an sich ist.</span>,
                correct: false
            },
            {
                suggestion: <span>Unsere mentalen Zustände folgen einander; und da mentale Zustände Eigenschaften der Seele an sich sind, zeigt das, dass die Zeit eine Eigenschaft der Dinge an sich ist.</span>,
                solution: <span>Leider nicht. Laut Kant folgt daraus, dass die Vorstellungen eine Zeitfolge zum Inhalt haben, nicht, dass die Vorstellungen selber (als Zustände der Seele) in der Zeit sind.</span>,
                correct: false
            },
            {
                suggestion: <span>Da die Zeit nur die Form der inneren Anschauung ist, sind die Zeit und alle Gegenstände in ihr nichts Wirkliches.</span>,
                solution: <span>Leider nicht. Laut Kant sind die Zeit und die Gegenstände in ihr etwas Wirkliches, nämlich wirklich als Erscheinungen bzw. ihre Form.</span>,
                correct: false
            },
            {
                suggestion: <span>Die Vorstellungen haben eine Zeitfolge zum Inhalt, was zeigt, dass die Zeit etwas Wirkliches ist, nämlich die Form wirklicher Erscheinungen.</span>,
                solution: <span>Exakt.</span>,
                correct: true
            },
        ]
    },
    {
        question: <span>Welcher Satz trifft <b>nicht</b> zu?</span>,
        answers: [
            {
                suggestion: <span>Gemäß der Leibniz-Wolffischen Schule sind Raum und Zeit nur undeutliche Vorstellungen, die der Verstand erst deutlich macht.</span>,
                solution: <span>Diese Antwort ist leider falsch, denn der Satz ist korrekt.</span>,
                correct: false
            },
            {
                suggestion: <span>Für Kant sind Sinnlichkeit und Verstand zwei verschiedene und komplementäre Quellen der Erkenntnis.</span>,
                solution: <span>Diese Antwort ist leider falsch, denn der Satz ist korrekt.</span>,
                correct: false
            },
            {
                suggestion: <span>Für Kant sind Sinnlichkeit und Verstand zwei verschiedene Quellen der Erkenntnis, wobei letzterer die sinnlichen Vorstellungen deutlich macht.</span>,
                solution: <span>Diese Antwort ist richtig, denn der Satz ist falsch. Für Kant sind Sinnlichkeit und Verstand zwar verschiedene Quellen der Erkenntnis, doch der Verstand macht die Vorstellungen der Sinnlichkeit nicht deutlich, sondern bringt sie auf Begriffe. Die Vorstellungen der Sinnlichkeit sind nicht undeutlich, sondern anderen Ursprungs und andersartig.</span>,
                correct: true
            },
            {
                suggestion: <span>Wenn Raum und Zeit nicht reine Anschauungen wären, könnte man laut Kant nicht zeigen, warum die Sätze der Mathematik auf die Gegenstände der Erfahrung anwendbar sind.</span>,
                solution: <span>Diese Antwort ist leider falsch, denn der Satz ist korrekt.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Wahr oder falsch: Für Kant zeigt die Tatsache, dass der Inhalt der Anschauung von Raum und Zeit sowie den Dingen in ihnen nur aus Verhältnisse besteht, dass Raum und Zeit nicht Eigenschaften von Dingen an sich sind.</span>,
        answers: [
            {
                suggestion: <span>Wahr.</span>,
                solution: <span>Korrekt.</span>,
                correct: true
            },
            {
                suggestion: <span>Falsch.</span>,
                solution: <span>Leider nicht. Der Satz ist korrekt.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Was trifft laut Kant auf den inneren Sinn zu?</span>,
        answers: [
            {
                suggestion: <span>Alle Lebewesen haben einen inneren Sinn.</span>,
                solution: <span>Leider nicht. Laut Kant haben nur Vernunftwesen einen inneren Sinn, da dafür das Vermögen erforderlich ist, sich selbst zu affizieren.</span>,
                correct: false
            },
            {
                suggestion: <span>Der Stoff zu allen Vorstellungen des inneren Sinns wird ursprünglich vom äußeren Sinn gegeben.</span>,
                solution: <span>Leider nicht. Zwar besteht, was die Erkenntnis betrifft, der Stoff des inneren Sinns nur in äußeren Vorstellungen, doch die Vorstellungen von Gefühl und Wille werden nicht durch den äußeren Sinn gegeben.</span>,
                correct: false
            },
            {
                suggestion: <span>Zum inneren Sinn gehört Selbsttätigkeit, denn man nur dadurch einen inneren Sinn, dass man sich selbst affiziert.</span>,
                solution: <span>Korrekt. Das Vermögen, sich selbst zu affizieren und dadurch seiner selbst bewusst zu werden, heißt Apperzeption.</span>,
                correct: true
            },
            {
                suggestion: <span>Durch den inneren Sinn erkennt man, wie man an sich selbst beschaffen ist.</span>,
                solution: <span>Leider nicht. Durch den inneren Sinn erkennt man sich laut Kant nur, wie man sich erscheint.</span>,
                correct: false
            },
        ]
    },
    {
        question: <span>Was ist „ursprüngliche Anschauung“?</span>,
        answers: [
            {
                suggestion: <span>Die Anschauung, wodurch Gott zugleich die Gegenstände erschafft.</span>,
                solution: <span>Leider nicht. Durch die ursprüngliche Anschauung werden Gegenstände nicht erschaffen.</span>,
                correct: false
            },
            {
                suggestion: <span>Eine Anschauung, wodurch Gegenstände unmittelbar, ohne Sinnlichkeit, gegeben werden.</span>,
                solution: <span>Korrekt.</span>,
                correct: true
            },
            {
                suggestion: <span>Eine Anschauung, wodurch Gegenstände unmittelbar in den Formen von Raum und Zeit gegeben werden.</span>,
                solution: <span>Nicht ganz. Durch ursprüngliche Anschauung werden Gegenstände unmittelbar gegeben, aber ohne die Formen der Sinnlichkeit.</span>,
                correct: false
            },
            {
                suggestion: <span>Die Anschauung von Lebewesen, die nicht über einen inneren Sinn verfügen.</span>,
                solution: <span>Leider nicht. Die ursprüngliche Anschauung ist eine Anschauung, durch die Gegenstände unmittelbar, ohne Sinnlichkeit gegeben werden, und kann daher keinem Lebewesen zugeschrieben werden.</span>,
                correct: false
            },
        ]
    }
]

export default function Quiz_2_3() {
    return <Quiz
        lessonId="2-3"
        quiz={quiz}
        title="Transzendentale Ästhetik, §§ 4–8"
    />
}