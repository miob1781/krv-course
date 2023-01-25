import { ReactElement, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Answer, QuizPart } from "../types"

interface propsType {
    title: string,
    quiz: QuizPart[],
    path: string
}

// shuffles array by the Fisher-Yates algorithm
function shuffleArray(arr: QuizPart[] | Answer[]): QuizPart[] | Answer[] {
    for (let i: number = arr.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        const temp: QuizPart | Answer = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}

export default function Quiz({ title, quiz, path }: propsType) {
    const [shuffledQuiz, setShuffledQuiz] = useState<QuizPart[] | null>(null)
    const [partIndex, setPartIndex] = useState(0)
    const [answerIndex, setAnswerIndex] = useState(-1)

    const button: ReactElement = shuffledQuiz && partIndex === shuffledQuiz.length - 1
        ? <Link to={path}><button>Zurück zur Lektion</button></Link>
        : <button type="button" disabled={answerIndex === -1 ? true : false} onClick={onNextQuestion}>Nächste Frage</button>


    function onSelectAnswer(index: number) {
        setAnswerIndex(index)
    }

    function onNextQuestion() {
        setPartIndex((prevIndex: number) => prevIndex + 1)
        setAnswerIndex(-1)
    }

    function renderQuestions(): ReactElement {
        const part: QuizPart = shuffledQuiz![partIndex]
        return (
            <section>
                <h3>{partIndex + 1}. Frage</h3>
                <p>{part.question}</p>
                {part.answers.map((answer: Answer, index: number) => {
                    const icon: ReactElement = answerIndex === index
                        ? <FontAwesomeIcon icon={answer.correct ? faCircleCheck : faCircleXmark} />
                        : <div />
                    return (
                        <div>
                            <p onClick={() => onSelectAnswer(index)}>{answer.suggestion} {icon}</p>
                            <p style={{ display: answerIndex === index ? "block" : "none" }}>{answer.solution}</p>
                        </div>
                    )
                })}
            </section>
        )
    }

    useEffect(() => {
        shuffleArray(quiz)
        quiz.forEach((part: QuizPart) => {
            shuffleArray(part.answers)
        })
        setShuffledQuiz(quiz)
    }, [])

    return (
        <div>
            <h2>{title}</h2>
            {shuffledQuiz && renderQuestions()}
            <div>
                {shuffledQuiz && button}
            </div>
        </div>
    )
}