import { PropsWithChildren, ReactElement, useState } from "react"
import Note from "./Note"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import "../../style/LessonListEl.css"

interface Props {
    paragraphId: string
    pageNumber?: string
    isQuestion?: boolean
}

export default function LessonListEl({ children, paragraphId, pageNumber, isQuestion = false }: PropsWithChildren<Props>) {
    const [note, setNote] = useState("")
    const [noteInputOpened, setNoteInputOpened] = useState(false)

    const textContainerClass: string = isQuestion ? "lesson-list-text lesson-question" : "lesson-list-text"

    function getPlusIcon(className: string): ReactElement {
        return (
            <FontAwesomeIcon
                icon={faCirclePlus}
                title="Notiz hinzufügen"
                className={className}
                onClick={() => setNoteInputOpened(true)}
            />
        )
    }

    function getGridRow() {
        const paragraphNumber: number = Number(paragraphId.split("-")[2])
        const gridRow: string = String(paragraphNumber + 1)
        return gridRow
    }

    return (
        <>
            <div className="page-number-cont" style={{gridRow: getGridRow()}}>
                <span className="page-number">{pageNumber}</span>
            </div>
            <p className={textContainerClass} style={{gridRow: getGridRow()}}>
                {pageNumber && <span className="small-page-number-cont">{pageNumber}: </span>}
                {children}
                {!note && getPlusIcon("plus-icon small")}
            </p>
            <Note
                paragraphId={paragraphId}
                gridRow={getGridRow()}
                plusIcon={getPlusIcon("plus-icon")}
                note={note}
                setNote={setNote}
                noteInputOpened={noteInputOpened}
                setNoteInputOpened={setNoteInputOpened}
            />
        </>
    )
}