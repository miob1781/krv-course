import { PropsWithChildren, ReactElement, useState } from "react";
import "../style/Lesson.css"

interface Props {
    quiz: ReactElement
    title: string
    pages: string
}

export default function Lesson({ children, quiz, title, pages }: PropsWithChildren<Props>) {
    const [quizOn, setQuizOn] = useState(false)

    const lesson = (
        <div>
            <div className="lesson-grid">
                <div className="lesson-header">
                    <h2>{title}</h2>
                    <h3>{pages}</h3>
                </div>
                {children}
                <div className="lesson-end-button-cont">
                    <button className="lesson-end-button" onClick={() => setQuizOn(true)}>Quiz</button>
                </div>
            </div>
        </div>
    )

    return quizOn ? quiz : lesson
}