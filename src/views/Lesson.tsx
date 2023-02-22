import { PropsWithChildren, ReactElement, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import "../style/Lesson.css"
import { AuthContextTypes } from "../types";

interface Props {
    lessonId: string
    quiz: ReactElement
    title: string
    pages: string
}

export default function Lesson({ children, lessonId, quiz, title, pages }: PropsWithChildren<Props>) {
    const { loadNotes } = useContext(AuthContext) as AuthContextTypes

    const [quizOn, setQuizOn] = useState(false)

    // loads notes after loading the lesson
    useEffect(() => {
        loadNotes(lessonId)
    }, [])

    const lesson = (
        <div>
            <div className="lesson-cont">
                <div className="lesson-header">
                    <h2>{title}</h2>
                    <h3>{pages}</h3>
                </div>
                {children}
                <div className="lesson-end-button-cont">
                    <button
                        className="lesson-end-button"
                        title="Zum Quiz"
                        onClick={() => setQuizOn(true)}
                    >Gehe zum Quiz<span className="lesson-end-button-second-half">, um die Lektion abzuschließen.</span></button>
                </div>
            </div>
        </div>
    )

    return quizOn ? quiz : lesson
}