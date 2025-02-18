import { PropsWithChildren, ReactElement, useContext, useEffect, useState } from "react"
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

/** paragraph of lesson */
export default function LessonListEl({ children, paragraphId, pageNumber, isQuestion = false }: PropsWithChildren<Props>) {
    const { notes } = useContext(AuthContext) as AuthContextTypes

    const [note, setNote] = useState("")
    const [noteInputOpened, setNoteInputOpened] = useState(false)
    const [notesLoaded, setNotesLoaded] = useState(false)

    /** class of paragraph, dependent on whether the paragraph is a question to the user */
    const textContainerClass: string = isQuestion ? "lesson-list-text lesson-question" : "lesson-list-text"

    /** gets notes of lesson */
    function getLessonNotes(): LessonNotes | undefined {
        // get lessonId from paragraphId
        const lessonId: string = paragraphId.split("-").slice(0, 2).join("-")

        // get notes of lesson
        const lessonNotes: LessonNotes | undefined = notes.find((lessonNotesObject: LessonNotes) => lessonNotesObject.lessonId === lessonId)
        return lessonNotes
    }

    /** returns note of paragraph from notes from DB if note exists or else empty string */
    function getNote(lessonNotes: LessonNotes): string {
        const note: string = lessonNotes.notes.find(note => note.paragraphId === paragraphId)?.text || ""
        setNotesLoaded(true)
        return note
    }

    // renders note after notes of section have been loaded
    useEffect(() => {
        const lessonNotes: LessonNotes | undefined = getLessonNotes()
        lessonNotes && !notesLoaded && setNote(getNote(lessonNotes))
    }, [notes])

    /** returns plus icon to add note */
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

    /** gets grid-row value of paragraph */
    function getGridRow(): string {
        const paragraphNumber: number = Number(paragraphId.split("-")[2])
        const gridRow: string = String(paragraphNumber + 1)
        return gridRow
    }

    /** gets note */
    function getNoteComponent(small: boolean): ReactElement {
        return (
            <Note
                paragraphId={paragraphId}
                gridRow={getGridRow()}
                plusIcon={getPlusIcon("plus-icon")}
                note={note}
                setNote={setNote}
                noteInputOpened={noteInputOpened}
                setNoteInputOpened={setNoteInputOpened}
                small={small}
            />
        )
    }

    return (
        <>
            <div className="page-number-cont" style={{ gridRow: getGridRow(), paddingTop: isQuestion ? "15px" : 0 }}>
                <span className="page-number">{pageNumber}</span>
            </div>
            <div className={textContainerClass} style={{ gridRow: getGridRow() }}>
                <p>
                    {pageNumber && <span className="small-page-number-cont">{pageNumber}: </span>}
                    {children}
                    {!note && getPlusIcon("plus-icon small")}
                </p>
                {getNoteComponent(true)}
            </div>
            {getNoteComponent(false)}
        </>
    )
}