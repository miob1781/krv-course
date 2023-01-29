import { PropsWithChildren, ReactElement, useState } from "react";

interface Props {
    quiz: ReactElement
}

export default function Lesson({ children, quiz }: PropsWithChildren<Props>) {
    const [quizOn, setQuizOn] = useState(false)

    const lesson = (
        <div>
            <div>
                <div className="lesson-list">{children}</div>
                <button onClick={() => setQuizOn(true)}>Zum Quiz</button>
            </div>
        </div>
    )

    return quizOn ? quiz : lesson
}