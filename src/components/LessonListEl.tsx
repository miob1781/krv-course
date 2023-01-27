import { PropsWithChildren } from "react"
import Note from "./Note"
import "../style/LessonListEl.css"

interface Props {
    pageNumber?: string,
    isQuestion?: boolean
}

export default function ListEl({ children, pageNumber, isQuestion = false }: PropsWithChildren<Props>) {
    const textContainerClass: string = isQuestion ? "lesson-list-text-cont lesson-question" : "lesson-list-text-cont"
    return (
        <li className="lesson-list-el">
            <div className="page-number-cont">
                <span>{pageNumber}</span>
            </div>
            <div className={textContainerClass}>
                <span className="lesson-list-text">{children}</span>
            </div>
            <Note />
        </li>
    )
}