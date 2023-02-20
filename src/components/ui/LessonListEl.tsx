import { PropsWithChildren, ReactElement, useContext, useState } from "react"
import Note from "./Note"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import "../../style/LessonListEl.css"
import { AuthContext } from "../../context/auth.context"
import { AuthContextTypes, LessonNotes } from "../../types"

interface Props {
    paragraphId: string
    pageNumber?: string
    isQuestion?: boolean
}

export default function LessonListEl({ children, paragraphId, pageNumber, isQuestion = false }: PropsWithChildren<Props>) {
    const { notes } = useContext(AuthContext) as AuthContextTypes

    const [note, setNote] = useState(getNote())
    const [noteInputOpened, setNoteInputOpened] = useState(false)

    // gets class of paragraph, dependent on whether the paragraph is a question to the user
    const textContainerClass: string = isQuestion ? "lesson-list-text lesson-question" : "lesson-list-text"

    // returns note of paragraph from notes from DB if note exists or empty string, executed only when component is mounted
    function getNote(): string {

        // get lessonId from paragraphId
        const lessonId: string = paragraphId.split("-").slice(0, 2).join("-")

        // get notes of lesson
        const lessonNotes: LessonNotes | undefined = notes.find((lessonNotesObject: LessonNotes) => lessonNotesObject.lessonId === lessonId)

        // get note
        let note: string
        if (lessonNotes) {
            note = lessonNotes.notes.find(note => note.paragraphId === paragraphId)?.text || ""
        } else {
            note = ""
        }
        return note
    }

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

    // gets grid-row value of paragraph
    function getGridRow(): string {
        const paragraphNumber: number = Number(paragraphId.split("-")[2])
        const gridRow: string = String(paragraphNumber + 1)
        return gridRow
    }

    return (
        <>
            <div className="page-number-cont" style={{ gridRow: getGridRow(), paddingTop: isQuestion ? "15px" : 0 }}>
                <span className="page-number">{pageNumber}</span>
            </div>
            <p className={textContainerClass} style={{ gridRow: getGridRow() }}>
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