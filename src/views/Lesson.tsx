import { CSSProperties, PropsWithChildren, ReactElement, useState } from "react";
import "../style/Lesson.css"

interface propsType {
    title: string,
    pages: string,
    quiz: ReactElement,
    style?: CSSProperties
}

export default function Lesson({ children, title, pages, quiz, style }: PropsWithChildren<propsType>) {
    const [quizOn, setQuizOn] = useState(false)

    const lesson = (
        <div style={style}>
            <header>
                <h2>{title}</h2>
                <h3>{pages}</h3>
            </header>
            <main>
                <ul className="lesson-list">{children}</ul>
                <button onClick={() => setQuizOn(true)}>Zum Quiz</button>
            </main>
        </div>
    )

    return quizOn ? quiz : lesson
}