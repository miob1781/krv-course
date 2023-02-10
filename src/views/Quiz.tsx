import { CSSProperties, ReactElement, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Answer, QuizPart } from "../types"
import "../style/Quiz.css"

interface Props {
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

// indexes of answers
const answerIndexes: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"]

export default function Quiz({ title, quiz, path }: Props) {
    const [shuffledQuiz, setShuffledQuiz] = useState<QuizPart[] | null>(null)
    const [partIndex, setPartIndex] = useState(0)
    const [answerIndex, setAnswerIndex] = useState(-1)
    const [wronglyAnsweredQuestions, setWronglyAnsweredQuestions] = useState<QuizPart[]>([])
    const [repeating, setRepeating] = useState(false)

    function onSelectAnswer(part: QuizPart, correct: boolean, index: number) {
        if (answerIndex > -1) return
        setAnswerIndex(index)
        if (!correct) {
            setWronglyAnsweredQuestions((prev: QuizPart[]) => [...prev, part])
        }
    }

    function onNextQuestion() {
        setAnswerIndex(-1)
        if (repeating && partIndex === shuffledQuiz!.length - 1) {
            setPartIndex(0)
            setShuffledQuiz(wronglyAnsweredQuestions)
            setWronglyAnsweredQuestions([])
        } else {
            setPartIndex((prevIndex: number) => prevIndex + 1)
        }
    }

    function handleRepeatQuestions() {
        setRepeating(true)
        setShuffledQuiz(wronglyAnsweredQuestions)
        setWronglyAnsweredQuestions([])
        setPartIndex(0)
    }

    function getButtonText(): string {
        let buttonText: string
        if (repeating) {
            buttonText = "Weiter"
        } else {
            if (partIndex + 1 === quiz.length) {
                buttonText = "Zur Auswertung"
            } else {
                buttonText = "Nächste Frage"
            }
        }
        return buttonText
    }

    function getAnswerButtonStyle(index: number, correct: boolean): CSSProperties {
        return {
            border: answerIndex === index ? `${correct ? "whitesmoke" : "red"} 3.5px solid` : "",
            borderRadius: answerIndex === index ? "10px" : "",
        }
    }

    function renderQuestions(): JSX.Element {
        const part: QuizPart = shuffledQuiz![partIndex]
        return (
            <div className="quiz-inner-cont">
                <h2>{title}</h2>
                <h3>{part.numberOfQuestion}. Frage</h3>
                <p className="quiz-question">{part.question}</p>
                <div className="quiz-answers">
                    {part.answers.map((answer: Answer, index: number) => {
                        const icon: ReactElement | null = answerIndex === index
                            ? <FontAwesomeIcon icon={answer.correct ? faCircleCheck : faCircleXmark} />
                            : null
                        return (
                            // The quiz, once shuffled, does not change, so I can use the index for the key here.
                            <div key={index} className="answer-outer-cont">
                                <div className="answer-index-cont">
                                    <span className="answer-index">{answerIndexes[index]}.</span>
                                </div>
                                <div className="answer-cont">
                                    <button
                                        className={answerIndex > -1 ? "answer" : "answer selectable-button"}
                                        style={getAnswerButtonStyle(index, answer.correct)}
                                        onClick={() => onSelectAnswer(part, answer.correct, index)}
                                    >{answer.suggestion}</button>
                                    <div className="solution-cont" style={{ display: answerIndex === index ? "flex" : "none" }}>
                                        <div className="quiz-icon-cont">{icon}</div>
                                        <p>{answer.solution}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="quiz-button-cont">
                    <button
                        type="button"
                        className={answerIndex > -1 ? "selectable-button" : ""}
                        disabled={answerIndex === -1 ? true : false}
                        onClick={onNextQuestion}
                    >{getButtonText()}</button>
                </div>
            </div>
        )
    }

    function renderResults(): JSX.Element {
        const totalQuestions: number = quiz.length
        const totalWrongAnswers: number = wronglyAnsweredQuestions.length
        const textAllAnswersCorrect: JSX.Element = (
            <div className="quiz-result">
                <p>Du hast alle Fragen im ersten Versuch richtig beantwortet. Fantastisch!</p>
                <Link to={path}>
                    <button className="selectable-button">Zurück zur Lektion</button>
                </Link>
            </div>
        )
        const textBeforeRepeating: JSX.Element = (
            <div className="quiz-result">
                <p>Du hast {totalQuestions - totalWrongAnswers} von {totalQuestions} richtig beantwortet.</p>
                <p>Jetzt wiederholen wir die Fragen, die du noch nicht richtig beantwortet hast.</p>
                <div>
                    <button
                        className="selectable-button"
                        type="button"
                        onClick={handleRepeatQuestions}
                    >Zu den Fragen</button>
                </div>
            </div>
        )
        return totalWrongAnswers === 0 ? textAllAnswersCorrect : textBeforeRepeating
    }

    const closingText: JSX.Element = (
        <div className="quiz-result">
            <p>Gut gemacht!</p>
            <div>
                <Link to={path}>
                    <button className="selectable-button">Zurück zu den Lektionen</button>
                </Link>
            </div>
        </div>
    )

    function renderQuizPage(): JSX.Element | undefined {
        if (!shuffledQuiz) return
        if (shuffledQuiz.length === 0) {
            return closingText
        } else if (repeating) {
            return renderQuestions()
        } else if (!repeating && partIndex === quiz.length) {
            return renderResults()
        } else {
            return renderQuestions()
        }
    }

    function getShuffledQuiz() {
        const newArray: QuizPart[] = [...quiz]
        shuffleArray(newArray)
        newArray.forEach((part: QuizPart, index: number) => {
            shuffleArray(part.answers)
            part.numberOfQuestion = index + 1
        })
        setShuffledQuiz(newArray)
    }

    shuffledQuiz || getShuffledQuiz()

    return (
        <div className="Quiz">
            {renderQuizPage()}
        </div>
    )
}