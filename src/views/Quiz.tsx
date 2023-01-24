import { ReactElement, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Answer, QuizPart } from "../types"

interface propsType {
    title: string,
    quiz: QuizPart[],
    path: string
}

export default function Quiz({ title, quiz, path }: propsType) {
    const [partIndex, setPartIndex] = useState(0)
    const [answerIndex, setAnswerIndex] = useState(-1)

    const button: ReactElement = partIndex === quiz.length - 1
        ? <Link to={path}><button>Zurück zur Lektion</button></Link>
        : <button type="button" disabled={answerIndex === -1 ? true : false} onClick={onNextQuestion}>Nächste Frage</button>


    function onSelectAnswer(index: number) {
        setAnswerIndex(index)
    }

    function onNextQuestion() {
        setPartIndex((prevIndex: number) => prevIndex + 1)
        setAnswerIndex(-1)
    }

    function renderQuestions() {
        const part: QuizPart = quiz[partIndex]
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

    return (
        <div>
            <p>quiz length: {quiz.length}</p>
            <p>partIndex: {partIndex}</p>
            <h2>{title}</h2>
            {renderQuestions()}
            <div>
                {button}
            </div>
        </div>
    )
}