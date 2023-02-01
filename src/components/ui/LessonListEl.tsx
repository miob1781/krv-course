import { PropsWithChildren, ReactElement } from "react"
import Note from "./Note"
import "../../style/LessonListEl.css"

interface Props {
    paragraphId: string
    pageNumber?: string
    isQuestion?: boolean
}

export default function ListEl({children, paragraphId, pageNumber, isQuestion = false}: PropsWithChildren<Props>) {
    const textContainerClass: string = isQuestion ? "lesson-list-text lesson-question" : "lesson-list-text"

    return (
        <>
            <div className="page-number-cont">
                <span className="page-number">{pageNumber}</span>
            </div>
            <p className={textContainerClass}>
                {children}
            </p>
            <Note paragraphId={paragraphId} />
        </>
    )
}