import { ReactElement, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Answer, QuizPart } from "../types"

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

    function renderQuestions(): ReactElement {
        const part: QuizPart = shuffledQuiz![partIndex]
        return (
            <div>
                <h2>{title}</h2>
                <h3>{part.numberOfQuestion}. Frage</h3>
                <p>{part.question}</p>
                {part.answers.map((answer: Answer, index: number) => {
                    const icon: ReactElement | null = answerIndex === index
                        ? <FontAwesomeIcon icon={answer.correct ? faCircleCheck : faCircleXmark} />
                        : null
                    return (
                        // The quiz, once shuffled, does not change, so I can use the index for the key here.
                        <div key={index}> 
                            <p
                                style={{ cursor: answerIndex === -1 ? "pointer" : "inherit" }}
                                onClick={() => onSelectAnswer(part, answer.correct, index)}
                            >{answer.suggestion} {icon}</p>
                            <p style={{ display: answerIndex === index ? "block" : "none" }}>{answer.solution}</p>
                        </div>
                    )
                })}
                <div>
                    <button
                        type="button"
                        disabled={answerIndex === -1 ? true : false}
                        onClick={onNextQuestion}
                    >{!repeating && partIndex === quiz.length - 1 ? "Quiz beenden" : "Weiter"}</button>
                </div>
            </div>
        )
    }

    function renderResults() {
        const totalQuestions: number = quiz.length
        const totalWrongAnswers: number = wronglyAnsweredQuestions.length
        const textAllAnswersCorrect = (
            <div>
                <p>Du hast alle Fragen im ersten Versuch richtig beantwortet. Fantastisch!</p>
                <Link to={path}><button>Zurück zur Lektion</button></Link>
            </div>
        )
        const textBeforeRepeating = (
            <div>
                <p>Du hast {totalQuestions - totalWrongAnswers} von {totalQuestions} richtig beantwortet.</p>
                <p>Jetzt wiederholen wir die Fragen, die du noch nicht richtig beantwortet hast.</p>
                <div>
                    <button type="button" onClick={handleRepeatQuestions}>Zu den Fragen</button>
                </div>
            </div>
        )
        return totalWrongAnswers === 0 ? textAllAnswersCorrect : textBeforeRepeating
    }

    const closingText = (
        <div>
            <p>Gut gemacht!</p>
            <Link to={path}><button>Zurück zur Lektion</button></Link>
        </div>
    )

    function renderQuizPage() {
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

   function getShuffledQuiz(): void {
        const newArray: QuizPart[] = [...quiz]
        shuffleArray(newArray)
        newArray.forEach((part: QuizPart, index: number) => {
            shuffleArray(part.answers)
            part.numberOfQuestion = index + 1
        })
        setShuffledQuiz(newArray)
    }

    shuffledQuiz || getShuffledQuiz()

    return renderQuizPage()
}