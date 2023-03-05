import { CSSProperties, ReactElement, useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Answer, AuthContextTypes, QuizPart } from "../types"
import "../style/Quiz.css"
import axios from "axios"
import { AuthContext } from "../context/auth.context"

interface Props {
    title: string
    quiz: QuizPart[]
    lessonId: string
}

/** shuffles array by the Fisher-Yates algorithm */
function shuffleArray(arr: QuizPart[] | Answer[]): QuizPart[] | Answer[] {
    for (let i: number = arr.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        const temp: QuizPart | Answer = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}

/** indexes of answers */
const answerIndexes: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"]

/** displays quiz at the end of lessons */
export default function Quiz({ title, quiz, lessonId }: Props) {
    const { userId, setLessonIds } = useContext(AuthContext) as AuthContextTypes

    const [shuffledQuiz, setShuffledQuiz] = useState<QuizPart[] | null>(null)
    const [partIndex, setPartIndex] = useState(0)
    const [answerIndex, setAnswerIndex] = useState(-1)
    const [wronglyAnsweredQuestions, setWronglyAnsweredQuestions] = useState<QuizPart[]>([])
    const [repeating, setRepeating] = useState(false)

    /** handles the user's choice of the answer and adds question to wrongly answered questions if the answer is wrong */
    function onSelectAnswer(part: QuizPart, correct: boolean, index: number) {
        if (answerIndex > -1) return
        setAnswerIndex(index)
        if (!correct) {
            setWronglyAnsweredQuestions((prev: QuizPart[]) => [...prev, part])
        }
    }

    /** moves on to next question */
    function onNextQuestion() {
        setAnswerIndex(-1)

        // executed if the question is last one of the repeated questions
        if (repeating && partIndex === shuffledQuiz!.length - 1) {
            setPartIndex(0)
            setShuffledQuiz(wronglyAnsweredQuestions)
            setWronglyAnsweredQuestions([])
        } else {
            setPartIndex((prevIndex: number) => prevIndex + 1)
        }
    }

    /** handles return to wrongly answered questions after initial round */
    function handleRepeatQuestions() {
        setRepeating(true)
        setShuffledQuiz(wronglyAnsweredQuestions)
        setWronglyAnsweredQuestions([])
        setPartIndex(0)
    }

    /** gets text of button at the end of the quiz page */
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

    /** gets style of selected answer when the solution is revealed */
    function getAnswerButtonStyle(index: number, correct: boolean): CSSProperties {
        return {
            border: answerIndex === index ? `${correct ? "whitesmoke" : "red"} 3.5px solid` : "",
            borderRadius: answerIndex === index ? "10px" : ""
        }
    }

    /** gets path back to introduction of section by lessonId */
    function getPathBackToSection(): string {
        const sectionNumber: string = lessonId.split("-")[0]
        const path: string = `/section-${sectionNumber}`
        return path
    }

    /** sends id of lesson to server when the quiz has been completed */
    function postLessonId() {
        const authToken: string | null = localStorage.getItem("authToken")
        if (!authToken) return
        axios.post(
            `${import.meta.env.VITE_BASE_URL}/lessons`,
            { userId, lessonId },
            { headers: { Authorization: `Bearer ${authToken}` } }
        ).then(response => {
            setLessonIds(response.data.lessonIds)
        }).catch(err => console.log(err))
    }

    /** renders questions of quiz */
    function renderQuestions(): JSX.Element {

        /** part of quiz with a question and answers */
        const part: QuizPart = shuffledQuiz![partIndex]

        return (
            <div className="quiz-inner-cont">
                <h2>{title}</h2>

                {/* question */}
                <h3>{part.numberOfQuestion}. Frage</h3>
                <p className="quiz-question">{part.question}</p>
                <div className="quiz-answers">

                    {/* answers */}
                    {part.answers.map((answer: Answer, index: number) => {
                        const icon: ReactElement | null = answerIndex === index
                            ? <FontAwesomeIcon icon={answer.correct ? faCircleCheck : faCircleXmark} />
                            : null

                        // single answer
                        return (

                            // The quiz, once shuffled, does not change, so I can use the index for the key here.
                            <div key={index} className="answer-outer-cont">
                                <div className="answer-index-cont">
                                    <span className="answer-index">{answerIndexes[index]}.</span>
                                </div>

                                {/* suggested anwswer */}
                                <div className="answer-cont">
                                    <button
                                        className={answerIndex > -1 ? "answer" : "answer selectable-button"}
                                        style={getAnswerButtonStyle(index, answer.correct)}
                                        onClick={() => onSelectAnswer(part, answer.correct, index)}
                                    >{answer.suggestion}</button>

                                    {/* solution, only displayed after selection of answer */}
                                    <div className="solution-cont" style={{ display: answerIndex === index ? "flex" : "none" }}>
                                        <div className="quiz-icon-cont">{icon}</div>
                                        <p>{answer.solution}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* button to move on after solution as been revealed */}
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

    /** renders result page after initial round */
    function renderResults(): JSX.Element {
        const totalQuestions: number = quiz.length
        const totalWrongAnswers: number = wronglyAnsweredQuestions.length

        /** text when all answers have been correct */
        const textAllAnswersCorrect: JSX.Element = (
            <div className="quiz-result">
                <p>Du hast alle Fragen im ersten Versuch richtig beantwortet. Fantastisch!</p>
                <Link to={getPathBackToSection()}>
                    <button className="selectable-button" onClick={postLessonId}>Zurück zur Lektion</button>
                </Link>
            </div>
        )

        /** text when some answer has been wrong */
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

    /** text when all previously wrongly answered questions are answered correctly */
    const closingText: JSX.Element = (
        <div className="quiz-result">
            <p>Gut gemacht!</p>
            <div>
                <Link to={getPathBackToSection()}>
                    <button className="selectable-button" onClick={postLessonId}>Zurück zu den Lektionen</button>
                </Link>
            </div>
        </div>
    )

    /** renders correct page */ 
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

    /** shuffles quiz parts and answers of parts */
    function getShuffledQuiz() {
        const newArray: QuizPart[] = [...quiz]
        shuffleArray(newArray)
        newArray.forEach((part: QuizPart, index: number) => {
            shuffleArray(part.answers)
            part.numberOfQuestion = index + 1
        })
        setShuffledQuiz(newArray)
    }

    // shuffles quiz if quiz is not shuffled yet
    shuffledQuiz || getShuffledQuiz()

    return (
        <div className="Quiz">
            {renderQuizPage()}
        </div>
    )
}