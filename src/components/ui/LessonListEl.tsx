import { PropsWithChildren, ReactElement } from "react"
import Note from "./Note"
import "../../style/LessonListEl.css"

interface Props {
    paragraphId?: string
    pageNumber?: string
    isQuestion?: boolean
    title?: string
}

export default function ListEl({
    children,
    paragraphId,
    pageNumber,
    title,
    isQuestion = false
}: PropsWithChildren<Props>) {
    const textContainerClass: string = isQuestion ? "lesson-list-text lesson-question" : "lesson-list-text"

    const textContainer: ReactElement = title
        ? (
            <div className="lesson-header">
                <h2>{title}</h2>
                <h3>{pageNumber}</h3>
            </div>
        )
        : <p className={textContainerClass}>{children}</p>

    return (
        <div className="lesson-list-el">
            <div className="page-number-cont">
                <span>{!title && pageNumber}</span>
            </div>
            {textContainer}
            <Note paragraphId={title ? "title" : paragraphId} />
        </div>
    )
}