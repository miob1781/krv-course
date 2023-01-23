import { ReactElement, ReactNode, useState } from "react";

interface propsType {
    children: ReactNode,
    title: string,
    pages: string,
    quiz: ReactElement
}

export default function Lesson({ children, title, pages, quiz }: propsType) {
    const [quizOn, setQuizOn] = useState(false)

    const lesson = (
        <>
            <header>
                <h2>{title}</h2>
                <h3>{pages}</h3>
            </header>
            <main>
                <ul>{children}</ul>
                <button onClick={() => setQuizOn(true)}>Zum Quiz</button>
            </main>
        </>
    )

    return quizOn ? quiz : lesson
}